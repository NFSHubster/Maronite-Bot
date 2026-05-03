/**
 * Maronite Discord Bot — Standalone Single File
 *
 * Deploy commands (run once):
 *   node index.js --deploy
 *
 * Run the bot:
 *   node index.js
 */

const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits,
  ChannelType,
  ActivityType,
} = require("discord.js");

const fs = require("fs");
const path = require("path");
const { DAILY_READINGS } = require("./readings.js");
const { VERSES } = require("./verses.js");

// ─── Config ────────────────────────────────────────────────────────────────
const TOKEN = "your token";
const CLIENT_ID = "your client id";
const GUILD_ID = "your guild id";

const GOLD = 0xc9a84c;
const RED = 0x8b0000;
const GREEN = 0x2d6a2d;

// ─── Persistent Storage ──────────────────────────────────────────────────────
const DATA_DIR = path.join(__dirname, "bot-data");
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

function readStore(name, def) {
  const fp = path.join(DATA_DIR, `${name}.json`);
  try { return fs.existsSync(fp) ? JSON.parse(fs.readFileSync(fp, "utf-8")) : def; }
  catch { return def; }
}
function writeStore(name, data) {
  fs.writeFileSync(path.join(DATA_DIR, `${name}.json`), JSON.stringify(data, null, 2));
}
function getGuildConfig(guildId) {
  return readStore("guild-configs", {})[guildId] ?? {};
}
function setGuildConfig(guildId, patch) {
  const all = readStore("guild-configs", {});
  all[guildId] = { ...(all[guildId] ?? {}), ...patch };
  writeStore("guild-configs", all);
}

// ─── Embed helper ─────────────────────────────────────────────────────────────
function baseEmbed(color = GOLD) {
  return new EmbedBuilder()
    .setColor(color)
    .setFooter({ text: "Maronite Community Bot • سبحان الله" })
    .setTimestamp();
}

// ─── Data: Prayers ────────────────────────────────────────────────────────────
const PRAYERS = [
  // ── Liturgy of the Hours ──────────────────────────────────────────────────
  {
    name: { en: "Morning Prayer (Safro)", ar: "صلاة الصباح (الصفرو)", fr: "Prière du Matin (Safro)" },
    text: {
      en: "O Lord, as I begin this day, I place myself in Your hands. Guide my steps, purify my heart, and let Your light shine through me. Through the intercession of Our Lady of Lebanon and all the Maronite saints, may I glorify Your name this day. Amen.",
      ar: "يا ربّ، وأنا أبدأ هذا اليوم، أضع نفسي بين يديك. قوِّم خطواتي، طهِّر قلبي، ودع نورك يشرق من خلالي. بشفاعة سيّدة لبنان وجميع قدّيسي الموارنة، فلأمجّد اسمك في هذا اليوم. آمين.",
      fr: "Seigneur, en commençant cette journée, je me remets entre Vos mains. Guidez mes pas, purifiez mon cœur et que Votre lumière brille à travers moi. Par l'intercession de Notre-Dame du Liban et de tous les saints maronites, que je glorifie Votre nom ce jour. Amen.",
    },
  },
  {
    name: { en: "Terce (Mid-Morning Prayer)", ar: "صلاة الساعة الثالثة", fr: "Prière de Tierce" },
    text: {
      en: "O Lord our God, You sent Your Holy Spirit upon the Apostles at the third hour. Do not take Your good Spirit from us, but renew us day by day. Strengthen us for the work of this hour, that all we do may be pleasing in Your sight. Amen.",
      ar: "يا ربّنا وإلهنا، أرسلتَ روحك القدس على الرسل في الساعة الثالثة. لا تنزع روحك الصالح منّا، بل جدّدنا يوماً بعد يوم. شدّدنا لعمل هذه الساعة، حتى يكون كلّ ما نفعله مرضيّاً في عينيك. آمين.",
      fr: "Seigneur notre Dieu, Vous avez envoyé Votre Saint-Esprit sur les Apôtres à la troisième heure. N'enlevez pas Votre bon Esprit de nous, mais renouvelez-nous de jour en jour. Fortifiez-nous pour l'œuvre de cette heure, afin que tout ce que nous faisons soit agréable à Vos yeux. Amen.",
    },
  },
  {
    name: { en: "Sext (Midday Prayer)", ar: "صلاة منتصف النهار", fr: "Prière de Sexte" },
    text: {
      en: "O God of all creation, at this midday hour we pause before You. As the sun reaches its height, let the light of Your grace fill our souls. Forgive the failings of the morning, and renew our resolve to serve You faithfully through the rest of this day. Amen.",
      ar: "يا إله كلّ الخليقة، في ساعة منتصف النهار هذه نقف أمامك. كما تبلغ الشمس ذروتها، فليملأ نور نعمتك أرواحنا. اغفر إخفاقات الصباح، وجدّد عزمنا على خدمتك بأمانة خلال بقية هذا اليوم. آمين.",
      fr: "Ô Dieu de toute la création, à cette heure de midi nous nous arrêtons devant Vous. Comme le soleil atteint son zénith, que la lumière de Votre grâce remplisse nos âmes. Pardonnez les manquements du matin et renouvelez notre résolution de Vous servir fidèlement durant le reste de ce jour. Amen.",
    },
  },
  {
    name: { en: "Evening Prayer (Ramsho)", ar: "صلاة المساء (الرمشو)", fr: "Vêpres (Ramsho)" },
    text: {
      en: "Lord, as this day draws to a close, I thank You for Your countless blessings. Forgive me for the times I fell short, and grant me peaceful rest under Your protection. As our evening prayer rises before You like incense, may the lifting of our hands be an evening offering. Amen.",
      ar: "يا ربّ، وهذا اليوم يقترب من نهايته، أشكرك على نعمك اللامحدودة. اغفر لي أوقات تقصيري، وامنحني راحة هادئة تحت حمايتك. ولتصعد صلاتنا المسائية قدّامك كالبخور، ورفع أيدينا كالقربان المسائي. آمين.",
      fr: "Seigneur, alors que ce jour touche à sa fin, je Vous remercie pour Vos innombrables bénédictions. Pardonnez-moi les moments où j'ai failli et accordez-moi un repos paisible sous Votre protection. Que notre prière du soir monte devant Vous comme de l'encens, et le geste de nos mains comme une offrande vespérale. Amen.",
    },
  },
  {
    name: { en: "Compline (Sutoro — Night Prayer)", ar: "صلاة النوم (الستورو)", fr: "Complies (Sutoro)" },
    text: {
      en: "Into Your hands, O Lord, I commend my spirit. Keep me as the apple of Your eye; hide me in the shadow of Your wings. O Christ our God, who watches over us by night and day, protect Your servants and keep us from all evil. Let Your holy angels encamp around us, and grant us peaceful rest. Amen.",
      ar: "بيديك، يا ربّ، أودع روحي. احفظني كحدقة العين؛ أخبئني في ظلّ جناحيك. أيّها المسيح إلهنا، الحارس علينا ليلاً ونهاراً، احفظ عبيدك وقِنا من كلّ شرّ. ليحيط بنا ملائكتك القدّيسون، وامنحنا راحةً هادئة. آمين.",
      fr: "Entre Vos mains, Seigneur, je remets mon esprit. Gardez-moi comme la prunelle de Vos yeux; cachez-moi à l'ombre de Vos ailes. Ô Christ notre Dieu, qui veilles sur nous nuit et jour, protège Tes serviteurs et garde-nous de tout mal. Que Tes saints anges campent autour de nous et accorde-nous un repos paisible. Amen.",
    },
  },
  {
    name: { en: "Lilyo (Night Vigil Prayer)", ar: "صلاة الليل (الليليو)", fr: "Office de Nuit (Lilyo)" },
    text: {
      en: "O Lord of the night watch, as the world sleeps we rise to praise Your holy name. You neither slumber nor sleep, O Guardian of Israel. Receive our midnight prayer as a fragrant offering. Fill us with Your Spirit, that we may be found watchful when the Bridegroom comes. Amen.",
      ar: "يا ربّ السهر الليلي، بينما ينام العالم نهضنا لنسبّح اسمك القدّوس. أنت لا تنعس ولا تنام، يا حافظ إسرائيل. تقبّل صلاتنا في منتصف الليل كقربان عطر. امنحنا روحك، لكي نُوجَد مستيقظين عند مجيء العريس. آمين.",
      fr: "Ô Seigneur de la veille nocturne, pendant que le monde dort nous nous levons pour louer Votre saint nom. Vous ne Vous assoupissez ni ne dormez, Ô Gardien d'Israël. Recevez notre prière de minuit comme une offrande parfumée. Remplissez-nous de Votre Esprit, afin que nous soyons trouvés vigilants à la venue de l'Époux. Amen.",
    },
  },
  // ── Foundational Prayers ──────────────────────────────────────────────────
  {
    name: { en: "Our Father", ar: "أبانا (الصلاة الربّية)", fr: "Notre Père" },
    text: {
      en: "Our Father, who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
      ar: "أبانا الذي في السماوات، ليتقدّس اسمك، ليأتِ ملكوتك، لتكن مشيئتك كما في السماء كذلك على الأرض. خبزنا كفافنا أعطنا اليوم، واغفر لنا ذنوبنا كما نغفر نحن أيضاً للمذنبين إلينا، ولا تُدخلنا في تجربة، لكن نجِّنا من الشرير. آمين.",
      fr: "Notre Père qui es aux cieux, que Ton nom soit sanctifié; que Ton règne vienne; que Ta volonté soit faite sur la terre comme au ciel. Donne-nous aujourd'hui notre pain quotidien; pardonne-nous nos offenses, comme nous pardonnons aussi à ceux qui nous ont offensés; et ne nous induis pas en tentation, mais délivre-nous du mal. Amen.",
    },
  },
  {
    name: { en: "Hail Mary", ar: "السلام عليكِ يا مريم", fr: "Je vous salue, Marie" },
    text: {
      en: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
      ar: "السلام عليكِ يا مريم، يا ممتلئة نعمةً، الربّ معكِ. أنتِ مباركة في النساء، ومبارك ثمرة بطنكِ يسوع. يا مريم القدّيسة، يا أمّ الله، صلّي لأجلنا نحن الخطأة الآن وفي ساعة وفاتنا. آمين.",
      fr: "Je vous salue, Marie, pleine de grâce, le Seigneur est avec vous. Vous êtes bénie entre toutes les femmes, et Jésus, le fruit de vos entrailles, est béni. Sainte Marie, Mère de Dieu, priez pour nous, pauvres pécheurs, maintenant et à l'heure de notre mort. Amen.",
    },
  },
  {
    name: { en: "Trisagion", ar: "قدّوس الله (التريساجيون)", fr: "Trisagion" },
    text: {
      en: "Holy God, Holy Mighty, Holy Immortal, have mercy on us. (×3)\nGlory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.\nHoly Immortal, have mercy on us.",
      ar: "قدّوسٌ الله، قدّوسٌ القويّ، قدّوسٌ الحيّ الذي لا يموت، ارحمنا. (×3)\nالمجد للآب والابن والروح القدس، الآن وكلّ أوان وإلى دهر الداهرين. آمين.\nأيّها الحيّ الذي لا يموت، ارحمنا.",
      fr: "Saint Dieu, Saint Fort, Saint Immortel, aie pitié de nous. (×3)\nGloire au Père, au Fils et au Saint-Esprit, maintenant et toujours et dans les siècles des siècles. Amen.\nSaint Immortel, aie pitié de nous.",
    },
  },
  {
    name: { en: "Angelus", ar: "ملاك الربّ (الأنجيلوس)", fr: "L'Angélus" },
    text: {
      en: "The angel of the Lord declared unto Mary, and she conceived by the Holy Spirit. — Hail Mary...\nBehold the handmaid of the Lord; be it done to me according to Thy Word. — Hail Mary...\nAnd the Word was made flesh, and dwelt among us. — Hail Mary...\nPray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.",
      ar: "أعلن ملاك الربّ لمريم فحبلت بالروح القدس. — السلام عليكِ يا مريم...\nها أنا أمة الربّ، ليكن لي كقولك. — السلام عليكِ يا مريم...\nوالكلمة صارت جسداً وحلّت فينا. — السلام عليكِ يا مريم...\nصلّي لأجلنا يا والدة الإله المقدّسة، لنستحقّ مواعيد المسيح. آمين.",
      fr: "L'ange du Seigneur a annoncé à Marie, et elle a conçu par le Saint-Esprit. — Je vous salue, Marie...\nVoici la servante du Seigneur; qu'il me soit fait selon Ta Parole. — Je vous salue, Marie...\nEt le Verbe s'est fait chair et a habité parmi nous. — Je vous salue, Marie...\nPriez pour nous, Sainte Mère de Dieu, afin que nous soyons rendus dignes des promesses du Christ. Amen.",
    },
  },
  // ── Eucharistic Prayers ───────────────────────────────────────────────────
  {
    name: { en: "Prayer before Communion", ar: "صلاة قبل التناول", fr: "Prière avant la Communion" },
    text: {
      en: "Lord, I am not worthy that You should enter under my roof, but only say the word and my soul shall be healed. I approach Your holy table with faith and love. May this Eucharist be for me the forgiveness of sins, the healing of soul and body, and the pledge of eternal life. Amen.",
      ar: "يا ربّ، لستُ مستحقاً أن تدخل تحت سقفي، بل قل كلمةً فقط فيشفى عبدك. أُقبِل على مائدتك المقدّسة بالإيمان والمحبة. فليكن هذا الإفخارستيا لي مغفرةً للخطايا وشفاءً للروح والجسد ورهناً للحياة الأبدية. آمين.",
      fr: "Seigneur, je ne suis pas digne que Vous entriez sous mon toit, mais dites seulement une parole et mon âme sera guérie. Je m'approche de Votre sainte table avec foi et amour. Que cette Eucharistie soit pour moi la rémission des péchés, la guérison de l'âme et du corps, et le gage de la vie éternelle. Amen.",
    },
  },
  {
    name: { en: "Thanksgiving after Communion", ar: "شكر ما بعد التناول", fr: "Action de Grâces après la Communion" },
    text: {
      en: "I thank You, Lord my God, for You have not rejected me, a sinner, but have made me worthy to receive Your holy Body and precious Blood. May this holy communion not be to my judgment or condemnation, but to the healing of soul and body, and the pledge of life everlasting. Amen.",
      ar: "أشكرك يا ربّي وإلهي، لأنّك لم تردّني أنا الخاطئ، بل أهّلتني لأن أتناول جسدك المقدّس ودمك الثمين. فلا يكن هذا التناول للحكم عليّ أو الإدانة، بل لشفاء الروح والجسد وضماناً للحياة الأبدية. آمين.",
      fr: "Je Vous remercie, Seigneur mon Dieu, car Vous ne m'avez pas rejeté, pécheur que je suis, mais Vous m'avez rendu digne de recevoir Votre saint Corps et Votre précieux Sang. Que cette sainte communion ne soit pas pour mon jugement ni ma condamnation, mais pour la guérison de mon âme et de mon corps, et le gage de la vie éternelle. Amen.",
    },
  },
  // ── Penitential Prayers ───────────────────────────────────────────────────
  {
    name: { en: "Hoosoyo (Prayer of Forgiveness)", ar: "الحوسويا (صلاة المغفرة)", fr: "Hoosoyo (Prière du Pardon)" },
    text: {
      en: "Lord of mercy and compassion, slow to anger and rich in love — we come before You with humble and contrite hearts. We have sinned against You and against one another. In Your infinite mercy, grant us forgiveness. Restore in us the image of Your Son, Jesus Christ. Amen.",
      ar: "يا ربَّ الرحمة والحنان، البطيء الغضب والغنيَّ بالمحبة — نأتي إليك بقلوب متواضعة ومنكسرة. أخطأنا إليك وإلى بعضنا البعض. في رحمتك اللامتناهية، امنحنا المغفرة. أعد فينا صورة ابنك يسوع المسيح. آمين.",
      fr: "Seigneur de miséricorde et de compassion, lent à la colère et riche en amour — nous venons devant Vous avec des cœurs humbles et contrits. Nous avons péché contre Vous et les uns contre les autres. Dans Votre infinie miséricorde, accordez-nous le pardon. Restaurez en nous l'image de Votre Fils, Jésus-Christ. Amen.",
    },
  },
  {
    name: { en: "Act of Contrition", ar: "صلاة الندامة", fr: "Acte de Contrition" },
    text: {
      en: "O my God, I am heartily sorry for having offended Thee, and I detest all my sins, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen.",
      ar: "يا إلهي، أنا منكسر القلب حقّاً لأنّني أسأت إليك، وأكره جميع خطاياي، ولكن قبل كل شيء لأنّها تُسيء إليك يا إلهي، أنت الصالح كلّياً والمستحق كلّ محبّتي. أتعزم بحزم، بمساعدة نعمتك، أن لا أخطئ بعد الآن وأن أتجنّب مناسبات الخطيئة القريبة. آمين.",
      fr: "Ô mon Dieu, je suis sincèrement désolé de Vous avoir offensé, et je déteste tous mes péchés, mais surtout parce qu'ils Vous offensent, Vous mon Dieu, qui êtes tout bon et digne de tout mon amour. Je prends la ferme résolution, avec l'aide de Votre grâce, de ne plus pécher et d'éviter les occasions de péché. Amen.",
    },
  },
  {
    name: { en: "Prayer of St. Ephrem the Syrian", ar: "صلاة القدّيس أفرام السرياني", fr: "Prière de Saint Éphrem le Syrien" },
    text: {
      en: "O Lord and Master of my life, take from me the spirit of sloth, meddling, lust of power, and idle talk. But give rather the spirit of chastity, humility, patience, and love to Thy servant. Yea, O Lord and King, grant me to see my own sins and not to judge my brother; for Thou art blessed unto ages of ages. Amen.",
      ar: "يا ربّ وسيّد حياتي، انزع منّي روح الكسل والفضول وحبّ السيطرة والكلام الفارغ. بل هب لعبدك روح العفاف والتواضع والصبر والمحبة. نعم، يا ربّ وملكي، امنحني أن أرى خطاياي الخاصة ولا أدين أخي؛ لأنّك مبارك إلى دهر الداهرين. آمين.",
      fr: "Ô Seigneur et Maître de ma vie, éloigne de moi l'esprit de paresse, de curiosité, d'amour du pouvoir et de vains bavardages. Donne plutôt à Ton serviteur l'esprit de chasteté, d'humilité, de patience et d'amour. Oui, Seigneur et Roi, accorde-moi de voir mes propres péchés et de ne pas juger mon frère; car Tu es béni dans les siècles des siècles. Amen.",
    },
  },
  // ── Marian Prayers ────────────────────────────────────────────────────────
  {
    name: { en: "Prayer to Our Lady of Lebanon", ar: "صلاة إلى سيّدة لبنان", fr: "Prière à Notre-Dame du Liban" },
    text: {
      en: "O Mary, Our Lady of Lebanon, Star of the Sea and Queen of the Cedars, look upon your children with mercy. Intercede for us before your Son, that He may grant peace to Lebanon and protect the Maronite Church. We entrust to you all who suffer and all who seek the light of Christ. Amen.",
      ar: "يا مريم، يا سيّدة لبنان، نجمة البحر وملكة الأرز، انظري بعطفك إلى أبنائك. اشفعي فينا لدى ابنك، ليمنح السلام للبنان ويحمي الكنيسة المارونية. نوكل إليك جميع من يتألمون وجميع من يسعون إلى نور المسيح. آمين.",
      fr: "Ô Marie, Notre-Dame du Liban, Étoile de la Mer et Reine des Cèdres, regardez vos enfants avec miséricorde. Intercédez pour nous auprès de votre Fils, qu'Il accorde la paix au Liban et protège l'Église maronite. Nous vous confions tous ceux qui souffrent et tous ceux qui cherchent la lumière du Christ. Amen.",
    },
  },
  // ── Prayers to Maronite Saints ────────────────────────────────────────────
  {
    name: { en: "Prayer of St. Maron", ar: "صلاة القدّيس مارون", fr: "Prière de Saint Maron" },
    text: {
      en: "Holy Father Maron, founder of our monastic tradition and patron of the Maronite Church, pray for us. May your love for solitude, prayer and fasting inspire us. Guide this community to live the Gospel with courage and devotion. Amen.",
      ar: "أيّها الأب القديس مارون، مؤسّس تقليدنا الرهباني وراعي الكنيسة المارونية، صلِّ من أجلنا. فلتُلهمنا محبّتك للعزلة والصلاة والصوم. اقتد هذه الجماعة لتعيش الإنجيل بالشجاعة والتفاني. آمين.",
      fr: "Saint Père Maron, fondateur de notre tradition monastique et patron de l'Église maronite, priez pour nous. Que votre amour pour la solitude, la prière et le jeûne nous inspire. Guidez cette communauté à vivre l'Évangile avec courage et dévotion. Amen.",
    },
  },
  {
    name: { en: "Prayer to St. Sharbel", ar: "صلاة إلى القدّيس شربل", fr: "Prière à Saint Charbel" },
    text: {
      en: "O St. Sharbel, hermit and monk of Lebanon, your life of solitude and penance made you a vessel of God's grace. Intercede for us with your great power before God. Obtain for us healing of body and soul, and teach us to surrender fully to the will of God. Amen.",
      ar: "أيّها القدّيس شربل، الناسك والراهب اللبناني، حياتك في العزلة والتوبة جعلتك إناءً لنعمة الله. اشفع فينا بقوّتك العظيمة أمام الله. أنل لنا الشفاء في الجسد والروح، وعلّمنا أن نسلّم أنفسنا كليّاً لمشيئة الله. آمين.",
      fr: "Ô Saint Charbel, ermite et moine du Liban, votre vie de solitude et de pénitence a fait de vous un vase de la grâce de Dieu. Intercédez pour nous avec votre grande puissance devant Dieu. Obtenez-nous la guérison du corps et de l'âme, et apprenez-nous à nous abandonner pleinement à la volonté de Dieu. Amen.",
    },
  },
  {
    name: { en: "Prayer to St. Rafqa", ar: "صلاة إلى القدّيسة رفقا", fr: "Prière à Sainte Rafqa" },
    text: {
      en: "O St. Rafqa, who offered your suffering in union with Christ's Passion, pray for all who are sick, afflicted, or in pain. Through your example of patient endurance and joy in suffering, teach us to unite our cross to Christ's cross, and to find peace in God's holy will. Amen.",
      ar: "أيّتها القدّيسة رفقا، التي قدّمتِ معاناتكِ متّحدةً بآلام المسيح، صلّي لأجل جميع المرضى والمتألمين والمعذَّبين. بمثالكِ في الصبر والفرح في الألم، علّمينا أن نوحّد صليبنا بصليب المسيح، وأن نجد السلام في إرادة الله المقدّسة. آمين.",
      fr: "Ô Sainte Rafqa, qui avez offert vos souffrances en union avec la Passion du Christ, priez pour tous les malades, les affligés et ceux qui souffrent. Par votre exemple d'endurance patiente et de joie dans la souffrance, apprenez-nous à unir notre croix à celle du Christ, et à trouver la paix dans la sainte volonté de Dieu. Amen.",
    },
  },
  {
    name: { en: "Prayer to St. Nimatullah Al-Hardini", ar: "صلاة إلى القدّيس نعمة الله الحرديني", fr: "Prière à Saint Nimatullah Al-Hardini" },
    text: {
      en: "O St. Nimatullah, Saint of the Blessed Sacrament, who spent your life in adoration before Christ in the Eucharist, intercede for us. Teach us to love the Holy Eucharist as you did, to persevere in prayer, and to give ourselves wholly to God in humble service. Amen.",
      ar: "أيّها القدّيس نعمة الله، قدّيس القربان المقدّس، الذي أمضيتَ حياتك في السجود أمام المسيح في الإفخارستيا، اشفع لنا. علّمنا أن نحبّ الإفخارستيا المقدّسة كما أحببتها أنت، وأن نثابر في الصلاة، وأن نكرّس أنفسنا كلياً لله في خدمة متواضعة. آمين.",
      fr: "Ô Saint Nimatullah, Saint du Saint-Sacrement, qui avez passé votre vie en adoration devant le Christ dans l'Eucharistie, intercédez pour nous. Apprenez-nous à aimer la Sainte Eucharistie comme vous l'avez aimée, à persévérer dans la prière, et à nous donner entièrement à Dieu dans un humble service. Amen.",
    },
  },
  // ── Prayers of Intercession ───────────────────────────────────────────────
  {
    name: { en: "Prayer for Lebanon", ar: "صلاة لأجل لبنان", fr: "Prière pour le Liban" },
    text: {
      en: "O Lord God, look with mercy upon the land of the cedars. Grant peace and stability to Lebanon and its people. Protect its diverse communities and let them live together in dignity and harmony. May the Maronite Church continue to be a witness of Your love in the Middle East and throughout the world. Amen.",
      ar: "يا ربّ الإله، انظر برحمتك إلى أرض الأرز. امنح السلام والاستقرار للبنان وشعبه. احفظ مجتمعاته المتنوّعة ودعها تتعايش بكرامة ووئام. فلتواصل الكنيسة المارونية كونها شاهداً لمحبّتك في الشرق الأوسط وفي العالم أجمع. آمين.",
      fr: "Ô Seigneur Dieu, regardez avec miséricorde la terre des cèdres. Accordez la paix et la stabilité au Liban et à son peuple. Protégez ses diverses communautés et permettez-leur de vivre ensemble dans la dignité et l'harmonie. Que l'Église maronite continue d'être un témoin de Votre amour au Moyen-Orient et dans le monde entier. Amen.",
    },
  },
  {
    name: { en: "Prayer for the Departed", ar: "صلاة من أجل الراحلين", fr: "Prière pour les Défunts" },
    text: {
      en: "O God of spirits and of all flesh, who has trampled down death and overcome the devil, grant rest to the souls of Your departed servants in a place of light, refreshment, and peace. Remember them not for their sins, but in Your mercy welcome them into Your eternal kingdom. Amen.",
      ar: "يا إله الأرواح وكلّ جسد، الذي داس الموت وغلب الشيطان، أنعم بالراحة على أرواح عبيدك الراحلين في مكان النور والروح والسلام. لا تذكر لهم خطاياهم، بل في رحمتك استقبلهم في ملكوتك الأبدي. آمين.",
      fr: "Ô Dieu des esprits et de toute chair, qui as foulé la mort aux pieds et vaincu le diable, accorde le repos aux âmes de Tes serviteurs défunts en un lieu de lumière, de fraîcheur et de paix. Ne Te souviens pas de leurs péchés, mais dans Ta miséricorde accueille-les dans Ton royaume éternel. Amen.",
    },
  },
  {
    name: { en: "Prayer before Meals", ar: "صلاة قبل الطعام", fr: "Bénédicité" },
    text: {
      en: "Bless us, O Lord, and these Thy gifts which we are about to receive from Thy bounty. May we be mindful of all who go without food this day, and may this meal strengthen us to do Thy holy will. Through Christ our Lord. Amen.",
      ar: "باركنا يا ربّ، وبارك هذه النعم التي نحن على وشك تناولها من كرمك. فلنكن واعين لجميع من يفتقرون إلى الطعام في هذا اليوم، وليقوّينا هذا الطعام على القيام بإرادتك المقدّسة. بالمسيح ربّنا. آمين.",
      fr: "Bénissez-nous, Seigneur, ainsi que ces dons que nous allons recevoir de Votre bonté. Que nous soyons attentifs à tous ceux qui manquent de nourriture ce jour, et que ce repas nous fortifie pour accomplir Votre sainte volonté. Par le Christ notre Seigneur. Amen.",
    },
  },
  {
    name: { en: "Prayer to the Guardian Angel", ar: "صلاة الملاك الحارس", fr: "Prière à l'Ange Gardien" },
    text: {
      en: "Angel of God, my guardian dear, to whom God's love commits me here, ever this day be at my side to light and guard, to rule and guide. Protect this community from all harm and lead us all on the path of salvation. Amen.",
      ar: "يا ملاك الله، حارسي العزيز، الذي وكّلني الله إلى رعايته، كن معي دائماً في هذا اليوم لتنير وتحرس وتقود وترشد. احمِ هذه الجماعة من كلّ أذى وقدنا جميعاً على طريق الخلاص. آمين.",
      fr: "Ange de Dieu, mon ange gardien, à qui l'amour de Dieu me confie ici, sois toujours à mes côtés ce jour pour éclairer, garder, gouverner et guider. Protège cette communauté de tout mal et conduis-nous tous sur le chemin du salut. Amen.",
    },
  },
  {
    name: { en: "Prayer of General Intercession", ar: "صلاة الطلبة العامة", fr: "Prière d'Intercession Générale" },
    text: {
      en: "O Lord, hear the prayers of Your people gathered in Your name. Strengthen the weak, comfort the sorrowful, heal the sick, free the captive, and give rest to the departed. May Your holy Church throughout the world stand firm in faith, hope, and charity until Your Son comes again in glory. Amen.",
      ar: "يا ربّ، استجب لصلوات شعبك المجتمع باسمك. شدّد الضعفاء، عزِّ الحزانى، اشفِ المرضى، أطلق المأسورين، وأنعم بالراحة على الراحلين. فلتقف كنيستك المقدّسة في كلّ العالم راسخةً في الإيمان والرجاء والمحبة حتى مجيء ابنك بالمجد. آمين.",
      fr: "Seigneur, exaucez les prières de Votre peuple réuni en Votre nom. Fortifiez les faibles, consolez les affligés, guérissez les malades, libérez les captifs, et donnez le repos aux défunts. Que Votre sainte Église à travers le monde demeure ferme dans la foi, l'espérance et la charité jusqu'à ce que Votre Fils revienne dans la gloire. Amen.",
    },
  },
];

function getTodaysPrayer() {
  const doy = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return PRAYERS[doy % PRAYERS.length];
}

// ─── Data: Saints ─────────────────────────────────────────────────────────────
const SAINTS = [
  { name: "St. Maron", feastDay: "02-09", patronOf: "The Maronite Church", description: "The father and founder of the Maronite Church. A Syrian monk who lived in the 4th–5th century near the Orontes River. His ascetic life attracted many disciples who formed the Maronite monastic tradition." },
  { name: "St. Sharbel Makhluf", feastDay: "07-24", patronOf: "Lebanon, the sick", description: "Born in 1828 in Biqa-Kafra, Lebanon. He lived as a hermit for 23 years, known for extreme asceticism and deep prayer. Died Christmas Eve 1898. Canonized by Pope Paul VI in 1977." },
  { name: "St. Rafqa (Rebecca)", feastDay: "03-23", patronOf: "The sick and suffering", description: "Born 1832 in Himlaya, Lebanon. She suffered blindness and paralysis which she offered in union with Christ's suffering. Died 1914. Canonized in 2001." },
  { name: "St. Nimatullah Kassab Al-Hardini", feastDay: "12-14", patronOf: "Students, educators", description: "A 19th-century Maronite monk from Hardine, Lebanon. Known as the 'Saint of the Blessed Sacrament.' Canonized by Pope John Paul II in 2004." },
  { name: "Our Lady of Lebanon", feastDay: "05-01", patronOf: "Lebanon", description: "The patroness of Lebanon, venerated at the shrine of Harissa, where a large white statue overlooks Jounieh Bay. A major pilgrimage destination." },
  { name: "St. George", feastDay: "04-23", patronOf: "Soldiers, Lebanon", description: "A Roman soldier and martyr of the early 4th century. One of the most venerated saints in the Christian East. His legendary slaying of the dragon symbolizes faith over evil." },
  { name: "St. Elias (Elijah) the Prophet", feastDay: "07-20", patronOf: "Prophets", description: "The great Old Testament prophet who defended the one true God against the prophets of Baal. Deeply venerated in the Maronite and wider Syriac tradition." },
  { name: "Sts. Peter and Paul", feastDay: "06-29", patronOf: "The Universal Church", description: "The two great Apostles whose martyrdom in Rome is foundational to the Church. St. Peter's primacy is central to the Maronite communion with Rome." },
  { name: "St. Therese of the Child Jesus", feastDay: "10-01", patronOf: "Missions", description: "The 'Little Flower,' deeply beloved in Maronite communities. Her 'Little Way' of doing small things with great love resonates strongly in Maronite spirituality. Doctor of the Church." },
];

function getSaintOfTheDay() {
  const today = new Date();
  const key = `${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  return SAINTS.find(s => s.feastDay === key) ?? null;
}
function getRandomSaint() { return SAINTS[Math.floor(Math.random() * SAINTS.length)]; }

// ─── Data: Liturgical Calendar ────────────────────────────────────────────────
const FIXED_FEASTS = [
  { name: "Feast of St. Maron", date: "02-09", description: "The patron feast of the entire Maronite Church. Communities worldwide celebrate with special liturgies." },
  { name: "Feast of St. Rafqa", date: "03-23", description: "Honors St. Rafqa, the Maronite nun who offered her suffering in union with Christ. Canonized 2001." },
  { name: "Feast of Our Lady of Lebanon", date: "05-01", description: "Celebrates Mary's special patronage of Lebanon. Pilgrims ascend to the shrine of Harissa." },
  { name: "Feast of Sts. Peter and Paul", date: "06-29", description: "Celebrates the two great Apostles foundational to the Church." },
  { name: "Feast of St. Sharbel Makhluf", date: "07-24", description: "Celebrates Lebanon's most beloved modern saint, canonized 1977." },
  { name: "Assumption of Our Lady", date: "08-15", description: "Celebrates the bodily assumption of the Blessed Virgin Mary into heaven." },
  { name: "Transfiguration of Our Lord", date: "08-06", description: "Celebrates Christ's Transfiguration on Mount Tabor where He appeared in glory." },
  { name: "Feast of the Holy Cross", date: "09-14", description: "Celebrates the discovery of the True Cross by St. Helena. In Lebanon, bonfires are lit on mountaintops." },
  { name: "Nativity of Our Lady", date: "09-08", description: "Celebrates the birth of the Virgin Mary. A joyful feast in the Maronite tradition." },
  { name: "Feast of the Holy Rosary", date: "10-07", description: "Celebrates the gift of the Rosary, particularly beloved in Maronite families." },
  { name: "All Saints Day", date: "11-01", description: "Honors all the saints. Marks the beginning of Advent (Suboro) in the Maronite Church." },
  { name: "Feast of St. Nimatullah", date: "12-14", description: "Celebrates the 19th-century Maronite monk known as the 'Saint of the Blessed Sacrament.'" },
  { name: "Christmas — Nativity of Our Lord", date: "12-25", description: "The great feast celebrating the Incarnation of the Son of God." },
  { name: "Epiphany", date: "01-06", description: "Celebrates the manifestation of Christ to the Magi and His Baptism in the Jordan." },
];

function calculateEaster(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return { month, day };
}

function formatDateToString(dateObj) {
  return `${String(dateObj.getMonth() + 1).padStart(2, "0")}-${String(dateObj.getDate()).padStart(2, "0")}`;
}

function getMoveableFeasts(year) {
  const easter = calculateEaster(year);
  const easterDate = new Date(year, easter.month - 1, easter.day);
  return [
    { name: "Pascha (Easter) — Resurrection of Our Lord", date: `${String(easter.month).padStart(2, "0")}-${String(easter.day).padStart(2, "0")}`, description: "The greatest feast of the Maronite Church celebrating Christ's Resurrection.", isMoveable: true },
    { name: "Great Lent (Sawmo Rabo) — First Day", date: formatDateToString(new Date(easterDate.getTime() - 50 * 86400000)), description: "The beginning of the 50-day period of fasting and repentance before Pascha.", isMoveable: true },
    { name: "Pentecost (Shangoosh)", date: formatDateToString(new Date(easterDate.getTime() + 50 * 86400000)), description: "Celebrates the descent of the Holy Spirit upon the Apostles, 50 days after Pascha.", isMoveable: true },
    { name: "Ascension of Our Lord", date: formatDateToString(new Date(easterDate.getTime() + 40 * 86400000)), description: "Commemorates Christ's Ascension into heaven 40 days after His Resurrection.", isMoveable: true },
  ];
}

function getAllFeasts(year = new Date().getFullYear()) {
  return [...FIXED_FEASTS, ...getMoveableFeasts(year)].sort((a, b) => {
    const [aM, aD] = a.date.split("-").map(Number);
    const [bM, bD] = b.date.split("-").map(Number);
    return aM === bM ? aD - bD : aM - bM;
  });
}

function getTodaysFeast() {
  const today = new Date();
  const key = `${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  return getAllFeasts(today.getFullYear()).find(f => f.date === key) ?? null;
}

function getUpcomingFeasts(daysAhead = 30) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const feasts = [...getAllFeasts(currentYear), ...getAllFeasts(currentYear + 1)];
  const results = [];
  for (const feast of feasts) {
    const [m, d] = feast.date.split("-").map(Number);
    let fd = new Date(currentYear, m - 1, d);
    if (fd < today) fd = new Date(currentYear + 1, m - 1, d);
    const diff = Math.ceil((fd - today) / 86400000);
    if (diff > 0 && diff <= daysAhead) results.push({ ...feast, daysUntil: diff });
  }
  return results.sort((a, b) => a.daysUntil - b.daysUntil);
}

function getCurrentSeason() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const easter = calculateEaster(currentYear);
  const easterDate = new Date(currentYear, easter.month - 1, easter.day);
  const lentStart = new Date(easterDate.getTime() - 50 * 86400000);
  const holyWeekStart = new Date(easterDate.getTime() - 7 * 86400000);
  const pentecostDate = new Date(easterDate.getTime() + 50 * 86400000);

  if ((today.getMonth() === 10 && today.getDate() >= 1) || (today.getMonth() === 11 && today.getDate() <= 24)) {
    return { name: "Advent (Suboro)", color: 0x6a0dad, description: "A season of joyful expectation preparing for the Nativity of Our Lord. Maronite Advent begins November 1st." };
  }
  if ((today.getMonth() === 11 && today.getDate() >= 25) || (today.getMonth() === 0 && today.getDate() <= 6)) {
    return { name: "Christmas Season", color: 0xffd700, description: "The celebration of the Incarnation of God the Son, extending through Epiphany." };
  }
  if (today >= lentStart && today < holyWeekStart) {
    return { name: "Great Lent (Sawmo Rabo)", color: 0x800000, description: "Holy season of fasting and repentance in preparation for Pascha (Easter). Lasts 50 days." };
  }
  if (today >= holyWeekStart && today < easterDate) {
    return { name: "Holy Week", color: 0x8b0000, description: "The most sacred week of the year, commemorating Christ's Passion, Death, and Resurrection." };
  }
  if (today >= easterDate && today <= pentecostDate) {
    return { name: "Easter Season (Qyomto)", color: 0xffffff, description: "The 50-day celebration of the Resurrection, culminating in Pentecost." };
  }
  return { name: "Ordinary Time", color: 0x228b22, description: "The extended period focused on the teachings and life of Christ. Green vestments signify growth in faith." };
}

// VERSES are loaded from verses.js

function getDailyVerse() {
  const doy = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return VERSES[doy % VERSES.length];
}

// ─── Data: FAQ ────────────────────────────────────────────────────────────────
const FAQS = [
  { id: "what-is-maronite", question: "What is the Maronite Church?", answer: "The Maronite Church is one of the Eastern Catholic Churches in full communion with the Pope in Rome. It traces its origins to St. Maron, a 4th–5th century Syrian monk. The Maronite Church follows the West Syriac (Antiochene) liturgical rite and uses both Syriac and Arabic in its liturgy. It is the largest Christian denomination in Lebanon." },
  { id: "maronite-liturgy", question: "What is the Maronite Liturgy like?", answer: "The Maronite liturgy (the Qurobo) follows the West Syriac/Antiochene Rite, rich in symbolism, poetry, incense, and ancient Syriac prayer forms. Key elements include the Hoosoyo (prayer of forgiveness), the Anaphora (Eucharistic prayer), Syriac chants, and incense. It is celebrated in Syriac and Arabic (or local language adaptations)." },
  { id: "fasting", question: "How do Maronites fast?", answer: "Maronite Catholics fast during:\n• **Great Lent (Sawmo Rabo)**: 50 days before Easter.\n• **Advent**: Moderate fasting before Christmas.\n• **Wednesdays and Fridays**: Traditional fasting days in the Syriac tradition.\n• **Vigils of major feasts**: Before Assumption, Christmas, etc." },
  { id: "patriarch", question: "Who is the Maronite Patriarch?", answer: "The head of the Maronite Church is the Patriarch of Antioch and All the East, residing at Bkerke in Lebanon. He is elected by the Maronite Synod of Bishops and receives communion from the Pope. The current Patriarch is Cardinal Bechara Boutros Al-Rahi, serving since 2011." },
  { id: "chalcedon", question: "What is the Maronite position on the Council of Chalcedon?", answer: "The Maronite Church has always upheld the Council of Chalcedon (451 AD), which defined that Christ has two natures — divine and human — united in one Person. This distinguishes Maronites from non-Chalcedonian Eastern churches and was a key factor in their alignment with Rome." },
  { id: "syriac", question: "What is Syriac and why is it important?", answer: "Syriac is a dialect of Aramaic — the language spoken by Jesus and the early Christian communities of the Levant. It is the liturgical language of the Maronite Church. Syriac literature includes the works of St. Ephrem the Syrian (4th century), one of the greatest Christian poets and theologians. Preserving Syriac is an important part of Maronite heritage." },
  { id: "our-lady-of-lebanon", question: "What is the shrine of Our Lady of Lebanon?", answer: "Located in Harissa, overlooking Jounieh Bay north of Beirut. It features a large white statue of the Virgin Mary on a globe, accessible by cable car. Inaugurated in 1908, it is a major pilgrimage destination. Every May 1st, thousands of pilgrims celebrate the feast there." },
  { id: "cedar", question: "What is the significance of the Cedar tree?", answer: "The Cedar of Lebanon (Cedrus libani) is a powerful symbol of Maronite and Lebanese identity. In Scripture, the cedars represent strength, nobility, and God's glory (Psalm 92:12). The Lebanese flag bears the cedar at its center. The ancient cedars in northern Lebanon are a UNESCO World Heritage Site." },
  { id: "maronite-diaspora", question: "Where do Maronites live in the diaspora?", answer: "Large Maronite communities exist worldwide:\n• **Americas**: Brazil, Argentina, USA, Mexico, Canada\n• **Australia** and **New Zealand**\n• **West Africa**: Ivory Coast, Senegal, Nigeria\n• **Europe**: France, Germany, UK\nTotal Maronite population is estimated at 3–4 million in Lebanon and 8–12 million in the diaspora." },
  { id: "maronite-history", question: "What is the history of the Maronite Church?", answer: "The Maronite Church traces its roots to the monastic community founded by St. Maron near the Orontes River in Syria (4th–5th century). His disciples moved to the mountains of Lebanon to escape persecution. The Maronites claim unbroken communion with Rome and never fell into heresy or schism. The Maronite College in Rome, founded in 1584, produced major scholars in Oriental studies." },
];

// ─── Helper: get today's reading key ─────────────────────────────────────────
function getTodayReadingKey() {
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  return days[new Date().getDay()];
}

// ─── Helper: truncate text to Discord's 1024-char field limit ────────────────
function trunc(text, max = 1024) {
  if (!text) return "N/A";
  return text.length <= max ? text : text.slice(0, max - 1) + "…";
}

// ─── Shared Choices ───────────────────────────────────────────────────────────
const dayChoices = Object.values(DAILY_READINGS).map(r => ({
  name: r.day,
  value: r.day.toLowerCase(),
}));

// ─── Slash Command Definitions ────────────────────────────────────────────────
const commands = [
  new SlashCommandBuilder()
    .setName("prayer")
    .setDescription("Receive a Maronite prayer in Arabic, English & French")
    .addStringOption(o =>
      o.setName("name").setDescription("Choose a prayer (blank = today's)").setRequired(false)
        .addChoices(...PRAYERS.map(p => ({ name: p.name.en, value: p.name.en })))),

  new SlashCommandBuilder()
    .setName("verse")
    .setDescription("Daily Bible verse in Arabic, English & French")
    .addStringOption(o =>
      o.setName("reference").setDescription("Search by book or reference (blank = today's)").setRequired(false)
        .setAutocomplete(true)),

  new SlashCommandBuilder()
    .setName("gospel")
    .setDescription("Daily Gospel reading in Arabic, English & French")
    .addStringOption(o =>
      o.setName("date").setDescription("Choose a day (blank = today's)").setRequired(false)
        .addChoices(...dayChoices)),

  new SlashCommandBuilder()
    .setName("epistle")
    .setDescription("Daily Epistle reading in Arabic, English & French")
    .addStringOption(o =>
      o.setName("date").setDescription("Choose a day (blank = today's)").setRequired(false)
        .addChoices(...dayChoices)),

  new SlashCommandBuilder()
    .setName("commentary")
    .setDescription("Daily Commentary in Arabic, English & French")
    .addStringOption(o =>
      o.setName("date").setDescription("Choose a day (blank = today's)").setRequired(false)
        .addChoices(...dayChoices)),

  new SlashCommandBuilder()
    .setName("readings")
    .setDescription("Full daily readings: Gospel, Epistle & Commentary in one place")
    .addStringOption(o =>
      o.setName("date").setDescription("Choose a day (blank = today's)").setRequired(false)
        .addChoices(...dayChoices)),

  new SlashCommandBuilder()
    .setName("saint")
    .setDescription("Learn about a Maronite saint")
    .addSubcommand(s => s.setName("today").setDescription("Saint feast day today (if any)"))
    .addSubcommand(s => s.setName("random").setDescription("Random Maronite saint"))
    .addSubcommand(s => s.setName("info").setDescription("Look up a specific saint")
      .addStringOption(o => o.setName("name").setDescription("Saint name").setRequired(true)
        .addChoices(...SAINTS.map(s => ({ name: s.name, value: s.name }))))),

  new SlashCommandBuilder()
    .setName("calendar")
    .setDescription("Maronite liturgical calendar")
    .addSubcommand(s => s.setName("today").setDescription("Today's liturgical info"))
    .addSubcommand(s => s.setName("upcoming").setDescription("Upcoming feasts in the next 30 days")),

  new SlashCommandBuilder()
    .setName("faq")
    .setDescription("FAQ about the Maronite Church")
    .addStringOption(o => o.setName("topic").setDescription("Choose a topic").setRequired(true)
      .addChoices(...FAQS.map(f => ({ name: f.question.slice(0, 100), value: f.id })))),

  new SlashCommandBuilder()
    .setName("mod")
    .setDescription("Moderation commands")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addSubcommand(s => s.setName("warn").setDescription("Warn a member")
      .addUserOption(o => o.setName("user").setDescription("User").setRequired(true))
      .addStringOption(o => o.setName("reason").setDescription("Reason").setRequired(true)))
    .addSubcommand(s => s.setName("mute").setDescription("Timeout a member")
      .addUserOption(o => o.setName("user").setDescription("User").setRequired(true))
      .addIntegerOption(o => o.setName("duration").setDescription("Minutes").setRequired(true).setMinValue(1).setMaxValue(40320))
      .addStringOption(o => o.setName("reason").setDescription("Reason").setRequired(false)))
    .addSubcommand(s => s.setName("unmute").setDescription("Remove timeout")
      .addUserOption(o => o.setName("user").setDescription("User").setRequired(true)))
    .addSubcommand(s => s.setName("kick").setDescription("Kick a member")
      .addUserOption(o => o.setName("user").setDescription("User").setRequired(true))
      .addStringOption(o => o.setName("reason").setDescription("Reason").setRequired(false)))
    .addSubcommand(s => s.setName("ban").setDescription("Ban a member")
      .addUserOption(o => o.setName("user").setDescription("User").setRequired(true))
      .addStringOption(o => o.setName("reason").setDescription("Reason").setRequired(false)))
    .addSubcommand(s => s.setName("unban").setDescription("Unban a user by ID")
      .addStringOption(o => o.setName("userid").setDescription("User ID").setRequired(true)))
    .addSubcommand(s => s.setName("purge").setDescription("Delete recent messages (1-100)")
      .addIntegerOption(o => o.setName("amount").setDescription("Amount").setRequired(true).setMinValue(1).setMaxValue(100))),

  new SlashCommandBuilder()
    .setName("config")
    .setDescription("Configure bot settings (admin only)")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand(s => s.setName("log-channel").setDescription("Set mod log channel")
      .addChannelOption(o => o.setName("channel").setDescription("Channel").setRequired(true).addChannelTypes(ChannelType.GuildText)))
    .addSubcommand(s => s.setName("welcome-channel").setDescription("Set welcome channel")
      .addChannelOption(o => o.setName("channel").setDescription("Channel").setRequired(true).addChannelTypes(ChannelType.GuildText)))
    .addSubcommand(s => s.setName("ticket-channel").setDescription("Set ticket panel channel")
      .addChannelOption(o => o.setName("channel").setDescription("Channel").setRequired(true).addChannelTypes(ChannelType.GuildText)))
    .addSubcommand(s => s.setName("ticket-log-channel").setDescription("Set ticket transcript channel")
      .addChannelOption(o => o.setName("channel").setDescription("Channel").setRequired(true).addChannelTypes(ChannelType.GuildText)))
    .addSubcommand(s => s.setName("welcome-message").setDescription("Set welcome message (use {user} and {server})")
      .addStringOption(o => o.setName("message").setDescription("Message text").setRequired(true)))
    .addSubcommand(s => s.setName("show").setDescription("Show current configuration")),

  new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Create and send a custom embed message (admin only)")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addStringOption(o => o.setName("title").setDescription("Embed title").setRequired(true))
    .addStringOption(o => o.setName("description").setDescription("Embed body").setRequired(true))
    .addChannelOption(o => o.setName("channel").setDescription("Target channel (default: current)").setRequired(false).addChannelTypes(ChannelType.GuildText))
    .addStringOption(o => o.setName("color").setDescription("Hex color e.g. #c9a84c").setRequired(false))
    .addStringOption(o => o.setName("image").setDescription("Image URL").setRequired(false))
    .addStringOption(o => o.setName("footer").setDescription("Footer text").setRequired(false)),

  new SlashCommandBuilder()
    .setName("roles")
    .setDescription("Self-role assignment")
    .addSubcommand(s => s.setName("panel").setDescription("Post the self-role panel"))
    .addSubcommand(s => s.setName("add").setDescription("Add a self-assignable role (admin)")
      .addRoleOption(o => o.setName("role").setDescription("Role").setRequired(true))
      .addStringOption(o => o.setName("label").setDescription("Button label").setRequired(true))
      .addStringOption(o => o.setName("emoji").setDescription("Button emoji").setRequired(false)))
    .addSubcommand(s => s.setName("remove").setDescription("Remove a self-assignable role (admin)")
      .addRoleOption(o => o.setName("role").setDescription("Role").setRequired(true))),

  new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("Support ticket system")
    .addSubcommand(s => s.setName("panel").setDescription("Post the ticket open panel (admin)"))
    .addSubcommand(s => s.setName("close").setDescription("Close this ticket channel")),
];

// ─── Deploy slash commands ────────────────────────────────────────────────────
async function deployCommands() {
  const rest = new REST({ version: "10" }).setToken(TOKEN);
  const body = commands.map(c => c.toJSON());
  if (GUILD_ID) {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body });
    // Wipe any stale global commands so nothing appears twice
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: [] }).catch(() => null);
    console.log(`Deployed ${body.length} commands to guild ${GUILD_ID}`);
  } else {
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body });
    // Wipe stale guild-specific commands from every guild the bot is in
    for (const [guildId] of client.guilds.cache) {
      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, guildId), { body: [] }).catch(() => null);
    }
    console.log(`Deployed ${body.length} commands globally (may take up to 1 hour to appear)`);
  }
}

// ─── Moderation log helper ────────────────────────────────────────────────────
async function logAction(guild, action, target, moderator, reason, extra) {
  const cfg = getGuildConfig(guild.id);
  if (!cfg.logChannelId) return;
  const ch = guild.channels.cache.get(cfg.logChannelId);
  if (!ch) return;
  const colors = { WARN: 0xffa500, MUTE: 0xff6600, UNMUTE: 0x2ecc71, KICK: 0xe74c3c, BAN: 0x8b0000, UNBAN: 0x27ae60 };
  const embed = new EmbedBuilder()
    .setColor(colors[action] ?? RED)
    .setTitle(`Mod Log — ${action}`)
    .addFields(
      { name: "Target", value: `${target.username} (${target.id})`, inline: true },
      { name: "Moderator", value: moderator.username, inline: true },
      { name: "Reason", value: reason }
    ).setTimestamp();
  if (extra) embed.addFields({ name: "Details", value: extra });
  await ch.send({ embeds: [embed] }).catch(() => null);
}

// ─── Ticket transcript helper ─────────────────────────────────────────────────
async function saveTranscript(guild, channel) {
  const cfg = getGuildConfig(guild.id);
  if (!cfg.ticketLogChannelId) return;
  const logCh = guild.channels.cache.get(cfg.ticketLogChannelId);
  if (!logCh) return;
  const msgs = await channel.messages.fetch({ limit: 100 });
  const lines = [...msgs.values()].reverse().map(m =>
    `[${m.createdAt.toISOString()}] ${m.author.username}: ${m.content}${m.embeds.length ? " [embed]" : ""}`
  ).join("\n");
  const buf = Buffer.from(`Ticket: ${channel.name}\nGuild: ${guild.name}\n${"=".repeat(50)}\n${lines}`);
  await logCh.send({
    embeds: [baseEmbed(GOLD).setTitle("Ticket Transcript").setDescription(`**${channel.name}** — ${msgs.size} messages`)],
    files: [{ attachment: buf, name: `${channel.name}-transcript.txt` }],
  }).catch(() => null);
}

// ─── Daily scheduler ──────────────────────────────────────────────────────────
function startDailyScheduler(client) {
  const now = new Date();
  const next = new Date();
  next.setHours(8, 0, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 1);
  const delay = next - now;
  console.log(`Daily messages scheduled in ${Math.round(delay / 60000)} minutes`);
  setTimeout(() => {
    sendDailyMessages(client);
    setInterval(() => sendDailyMessages(client), 24 * 60 * 60 * 1000);
  }, delay);
}

async function sendDailyMessages(client) {
  const configs = readStore("guild-configs", {});
  for (const [guildId, cfg] of Object.entries(configs)) {
    if (!cfg.welcomeChannelId) continue;
    const guild = client.guilds.cache.get(guildId);
    if (!guild) continue;
    const ch = guild.channels.cache.get(cfg.welcomeChannelId);
    if (!ch) continue;
    const prayer = getTodaysPrayer();
    const verse = getDailyVerse();
    const saint = getSaintOfTheDay();
    const feast = getTodaysFeast();
    await ch.send({ embeds: [baseEmbed(GOLD).setTitle(`Daily Prayer — ${prayer.name.en}`).setDescription([`**EN** ${prayer.text.en}`, `**AR** ${prayer.text.ar}`, `**FR** ${prayer.text.fr}`].join("\n\n"))] }).catch(() => null);
    await ch.send({ embeds: [baseEmbed(GREEN).setTitle(`Daily Verse — ${verse.reference}`).setDescription([`**EN** ${verse.text.en}`, `**AR** ${verse.text.ar}`, `**FR** ${verse.text.fr}`].join("\n\n"))] }).catch(() => null);
    if (saint) await ch.send({ embeds: [baseEmbed(RED).setTitle(`Feast Day — ${saint.name}`).setDescription(saint.description).addFields({ name: "Patron Of", value: saint.patronOf ?? "—", inline: true })] }).catch(() => null);
    if (feast) await ch.send({ embeds: [baseEmbed(GOLD).setTitle(feast.name).setDescription(feast.description)] }).catch(() => null);
  }
}

// ─── Command Handler ──────────────────────────────────────────────────────────
async function handleInteraction(interaction) {
  if (!interaction.isChatInputCommand()) return;

  try {
    await interaction.deferReply();
  } catch {
    return;
  }

  const { commandName } = interaction;

  try {
    // /prayer
    if (commandName === "prayer") {
      const name = interaction.options.getString("name");
      const p = name ? (PRAYERS.find(x => x.name.en === name) ?? getTodaysPrayer()) : getTodaysPrayer();
      return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle(`${p.name.en}`).setDescription([`**EN**\n${p.text.en}`, `**AR**\n${p.text.ar}`, `**FR**\n${p.text.fr}`].join("\n\n"))] });
    }

    // /verse
    if (commandName === "verse") {
      const ref = interaction.options.getString("reference");
      const v = ref ? (VERSES.find(x => x.reference === ref) ?? getDailyVerse()) : getDailyVerse();
      return await interaction.editReply({ embeds: [baseEmbed(GREEN).setTitle(`${v.reference}`).setDescription([`**EN**\n${v.text.en}`, `**AR**\n${v.text.ar}`, `**FR**\n${v.text.fr}`].join("\n\n"))] });
    }

    // /gospel
    if (commandName === "gospel") {
      const dayKey = interaction.options.getString("date") ?? getTodayReadingKey();
      const reading = DAILY_READINGS[dayKey];
      if (!reading) return await interaction.editReply({ content: "No reading found for that day.", ephemeral: true });
      const g = reading.gospel;
      return await interaction.editReply({ embeds: [
        baseEmbed(GREEN)
          .setTitle(`Gospel — ${reading.day}`)
          .setDescription(`**${g.title}** • *${g.reference}*`)
          .addFields(
            { name: "🇬🇧 English", value: trunc(g.en) },
            { name: "🇱🇧 عربي", value: trunc(g.ar) },
            { name: "🇫🇷 Français", value: trunc(g.fr) }
          )
      ] });
    }

    // /epistle
    if (commandName === "epistle") {
      const dayKey = interaction.options.getString("date") ?? getTodayReadingKey();
      const reading = DAILY_READINGS[dayKey];
      if (!reading) return await interaction.editReply({ content: "No reading found for that day.", ephemeral: true });
      const e = reading.epistle;
      return await interaction.editReply({ embeds: [
        baseEmbed(GOLD)
          .setTitle(`Epistle — ${reading.day}`)
          .setDescription(`**${e.title}** • *${e.reference}*`)
          .addFields(
            { name: "🇬🇧 English", value: trunc(e.en) },
            { name: "🇱🇧 عربي", value: trunc(e.ar) },
            { name: "🇫🇷 Français", value: trunc(e.fr) }
          )
      ] });
    }

    // /commentary
    if (commandName === "commentary") {
      const dayKey = interaction.options.getString("date") ?? getTodayReadingKey();
      const reading = DAILY_READINGS[dayKey];
      if (!reading) return await interaction.editReply({ content: "No reading found for that day.", ephemeral: true });
      const c = reading.commentary;
      return await interaction.editReply({ embeds: [
        baseEmbed(RED)
          .setTitle(`Commentary — ${reading.day}`)
          .setDescription(`*${c.title}*`)
          .addFields(
            { name: "🇬🇧 English", value: trunc(c.en) },
            { name: "🇱🇧 عربي", value: trunc(c.ar) },
            { name: "🇫🇷 Français", value: trunc(c.fr) }
          )
      ] });
    }

    // /readings
    if (commandName === "readings") {
      const dayKey = interaction.options.getString("date") ?? getTodayReadingKey();
      const reading = DAILY_READINGS[dayKey];
      if (!reading) return await interaction.editReply({ content: "No reading found for that day.", ephemeral: true });
      const { gospel: g, epistle: e, commentary: c } = reading;

      const gospelEmbed = baseEmbed(GREEN)
        .setTitle(`Gospel — ${reading.day}`)
        .setDescription(`**${g.title}** • *${g.reference}*`)
        .addFields(
          { name: "🇬🇧 English", value: trunc(g.en) },
          { name: "🇱🇧 عربي", value: trunc(g.ar) },
          { name: "🇫🇷 Français", value: trunc(g.fr) }
        );

      const epistleEmbed = baseEmbed(GOLD)
        .setTitle(`Epistle — ${reading.day}`)
        .setDescription(`**${e.title}** • *${e.reference}*`)
        .addFields(
          { name: "🇬🇧 English", value: trunc(e.en) },
          { name: "🇱🇧 عربي", value: trunc(e.ar) },
          { name: "🇫🇷 Français", value: trunc(e.fr) }
        );

      const commentaryEmbed = baseEmbed(RED)
        .setTitle(`Commentary — ${reading.day}`)
        .setDescription(`*${c.title}*`)
        .addFields(
          { name: "🇬🇧 English", value: trunc(c.en) },
          { name: "🇱🇧 عربي", value: trunc(c.ar) },
          { name: "🇫🇷 Français", value: trunc(c.fr) }
        );

      return await interaction.editReply({ embeds: [gospelEmbed, epistleEmbed, commentaryEmbed] });
    }

    // /saint
    if (commandName === "saint") {
      const sub = interaction.options.getSubcommand();
      let saint;
      if (sub === "today") saint = getSaintOfTheDay();
      else if (sub === "random") saint = getRandomSaint();
      else saint = SAINTS.find(s => s.name === interaction.options.getString("name", true));
      if (!saint) return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("No Major Feast Today").setDescription("No major Maronite feast today. Try `/saint random`!")] });
      const [m, d] = saint.feastDay.split("-");
      const dateStr = new Date(2000, Number(m) - 1, Number(d)).toLocaleDateString("en-US", { month: "long", day: "numeric" });
      return await interaction.editReply({ embeds: [baseEmbed(RED).setTitle(saint.name).setDescription(saint.description).addFields({ name: "Feast Day", value: dateStr, inline: true }, { name: "Patron Of", value: saint.patronOf ?? "—", inline: true })] });
    }

    // /calendar
    if (commandName === "calendar") {
      const sub = interaction.options.getSubcommand();
      if (sub === "today") {
        const season = getCurrentSeason();
        const feast = getTodaysFeast();
        const embed = baseEmbed(season.color).setTitle("Liturgical Calendar — Today").addFields({ name: "Current Season", value: season.name }).setDescription(season.description);
        if (feast) embed.addFields({ name: `Today's Feast: ${feast.name}`, value: feast.description });
        return await interaction.editReply({ embeds: [embed] });
      }
      const feasts = getUpcomingFeasts(30);
      const season = getCurrentSeason();
      return await interaction.editReply({ embeds: [baseEmbed(season.color).setTitle("Upcoming Feasts — Next 30 Days").setDescription(
        feasts.length === 0 ? "No major feasts in the next 30 days." :
        feasts.map(f => {
          const [m, d] = f.date.split("-");
          return `**${new Date(2000, Number(m) - 1, Number(d)).toLocaleDateString("en-US", { month: "long", day: "numeric" })}** — ${f.name}`;
        }).join("\n")
      )] });
    }

    // /faq
    if (commandName === "faq") {
      const id = interaction.options.getString("topic", true);
      const entry = FAQS.find(f => f.id === id);
      if (!entry) return await interaction.editReply({ content: "Topic not found.", ephemeral: true });
      return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle(entry.question).setDescription(entry.answer)] });
    }

    // /mod
    if (commandName === "mod") {
      const sub = interaction.options.getSubcommand();
      const guild = interaction.guild;
      const mod = interaction.member;
      if (!guild) return await interaction.editReply({ content: "This command must be used in a server.", ephemeral: true });

      if (sub === "warn") {
        const target = interaction.options.getUser("user", true);
        const reason = interaction.options.getString("reason", true);
        await logAction(guild, "WARN", target, mod.user, reason);
        await interaction.editReply({ embeds: [baseEmbed(RED).setTitle("Warning Issued").addFields({ name: "User", value: target.username, inline: true }, { name: "Moderator", value: mod.user.username, inline: true }, { name: "Reason", value: reason })] });
        target.send({ embeds: [baseEmbed(RED).setTitle(`You were warned in ${guild.name}`).setDescription(`**Reason:** ${reason}\n\nPlease follow the server rules.`)] }).catch(() => null);
        return;
      }
      if (sub === "mute") {
        const target = interaction.options.getMember("user");
        const duration = interaction.options.getInteger("duration", true);
        const reason = interaction.options.getString("reason") ?? "No reason provided";
        if (!target) return await interaction.editReply({ content: "User not found.", ephemeral: true });
        await target.timeout(duration * 60 * 1000, reason);
        await logAction(guild, "MUTE", target.user, mod.user, reason, `${duration} minutes`);
        return await interaction.editReply({ embeds: [baseEmbed(RED).setTitle("Member Muted").addFields({ name: "User", value: target.user.username, inline: true }, { name: "Duration", value: `${duration} min`, inline: true }, { name: "Reason", value: reason })] });
      }
      if (sub === "unmute") {
        const target = interaction.options.getMember("user");
        if (!target) return await interaction.editReply({ content: "User not found.", ephemeral: true });
        await target.timeout(null);
        await logAction(guild, "UNMUTE", target.user, mod.user, "Timeout removed");
        return await interaction.editReply({ embeds: [baseEmbed(0x2ecc71).setTitle("Member Unmuted").setDescription(`${target.user.username} has been unmuted.`)] });
      }
      if (sub === "kick") {
        const target = interaction.options.getMember("user");
        const reason = interaction.options.getString("reason") ?? "No reason provided";
        if (!target) return await interaction.editReply({ content: "User not found.", ephemeral: true });
        await target.kick(reason);
        await logAction(guild, "KICK", target.user, mod.user, reason);
        return await interaction.editReply({ embeds: [baseEmbed(RED).setTitle("Member Kicked").addFields({ name: "User", value: target.user.username, inline: true }, { name: "Reason", value: reason })] });
      }
      if (sub === "ban") {
        const target = interaction.options.getMember("user");
        const reason = interaction.options.getString("reason") ?? "No reason provided";
        if (!target) return await interaction.editReply({ content: "User not found.", ephemeral: true });
        await guild.members.ban(target.id, { reason });
        await logAction(guild, "BAN", target.user, mod.user, reason);
        return await interaction.editReply({ embeds: [baseEmbed(RED).setTitle("Member Banned").addFields({ name: "User", value: target.user.username, inline: true }, { name: "Reason", value: reason })] });
      }
      if (sub === "unban") {
        const userId = interaction.options.getString("userid", true);
        await guild.members.unban(userId);
        return await interaction.editReply({ embeds: [baseEmbed(0x2ecc71).setTitle("User Unbanned").setDescription(`User ID \`${userId}\` unbanned.`)] });
      }
      if (sub === "purge") {
        const amount = interaction.options.getInteger("amount", true);
        if (!interaction.channel || !("bulkDelete" in interaction.channel)) {
          return await interaction.editReply({ content: "Cannot purge here.", ephemeral: true });
        }
        const deleted = await interaction.channel.bulkDelete(amount, true);
        return await interaction.editReply({ content: `Deleted ${deleted.size} message(s).` });
      }
    }

    // /config
    if (commandName === "config") {
      const sub = interaction.options.getSubcommand();
      const gid = interaction.guildId;
      if (sub === "log-channel") { const ch = interaction.options.getChannel("channel", true); setGuildConfig(gid, { logChannelId: ch.id }); return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("Updated").setDescription(`Log channel: <#${ch.id}>`)], ephemeral: true }); }
      if (sub === "welcome-channel") { const ch = interaction.options.getChannel("channel", true); setGuildConfig(gid, { welcomeChannelId: ch.id }); return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("Updated").setDescription(`Welcome channel: <#${ch.id}>`)], ephemeral: true }); }
      if (sub === "ticket-channel") { const ch = interaction.options.getChannel("channel", true); setGuildConfig(gid, { ticketChannelId: ch.id }); return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("Updated").setDescription(`Ticket channel: <#${ch.id}>`)], ephemeral: true }); }
      if (sub === "ticket-log-channel") { const ch = interaction.options.getChannel("channel", true); setGuildConfig(gid, { ticketLogChannelId: ch.id }); return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("Updated").setDescription(`Ticket log: <#${ch.id}>`)], ephemeral: true }); }
      if (sub === "welcome-message") { const msg = interaction.options.getString("message", true); setGuildConfig(gid, { welcomeMessage: msg }); return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("Updated").setDescription("Welcome message set.")], ephemeral: true }); }
      if (sub === "show") {
        const cfg = getGuildConfig(gid);
        return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("Server Config").addFields(
          { name: "Log Channel", value: cfg.logChannelId ? `<#${cfg.logChannelId}>` : "Not set", inline: true },
          { name: "Welcome Channel", value: cfg.welcomeChannelId ? `<#${cfg.welcomeChannelId}>` : "Not set", inline: true },
          { name: "Ticket Channel", value: cfg.ticketChannelId ? `<#${cfg.ticketChannelId}>` : "Not set", inline: true },
          { name: "Ticket Log", value: cfg.ticketLogChannelId ? `<#${cfg.ticketLogChannelId}>` : "Not set", inline: true },
          { name: "Welcome Message", value: cfg.welcomeMessage ?? "Not set" },
          { name: "Self-Roles", value: cfg.selfRoles?.length ? `${cfg.selfRoles.length} role(s)` : "None", inline: true }
        )], ephemeral: true });
      }
    }

    // /embed
    if (commandName === "embed") {
      const title = interaction.options.getString("title", true);
      const description = interaction.options.getString("description", true);
      const chOpt = interaction.options.getChannel("channel");
      const colorStr = interaction.options.getString("color");
      const image = interaction.options.getString("image");
      const footer = interaction.options.getString("footer");
      let color = GOLD;
      if (colorStr) { const p = parseInt(colorStr.replace("#", ""), 16); if (!isNaN(p)) color = p; }
      const embed = new EmbedBuilder().setTitle(title).setDescription(description.replace(/\\n/g, "\n")).setColor(color).setTimestamp();
      if (image) embed.setImage(image);
      if (footer) embed.setFooter({ text: footer });
      const target = chOpt ?? interaction.channel;
      await target.send({ embeds: [embed] });
      return await interaction.editReply({ content: `Embed sent to <#${target.id}>`, ephemeral: true });
    }

    // /roles
    if (commandName === "roles") {
      const sub = interaction.options.getSubcommand();
      const gid = interaction.guildId;
      if (sub === "add") {
        const role = interaction.options.getRole("role", true);
        const label = interaction.options.getString("label", true);
        const emoji = interaction.options.getString("emoji");
        const cfg = getGuildConfig(gid);
        const existing = cfg.selfRoles ?? [];
        if (existing.find(r => r.roleId === role.id)) return await interaction.editReply({ content: "Already self-assignable.", ephemeral: true });
        existing.push({ roleId: role.id, label, emoji });
        setGuildConfig(gid, { selfRoles: existing });
        return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("Role Added").setDescription(`<@&${role.id}> is now self-assignable.`)], ephemeral: true });
      }
      if (sub === "remove") {
        const role = interaction.options.getRole("role", true);
        const cfg = getGuildConfig(gid);
        setGuildConfig(gid, { selfRoles: (cfg.selfRoles ?? []).filter(r => r.roleId !== role.id) });
        return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("Role Removed").setDescription(`<@&${role.id}> removed.`)], ephemeral: true });
      }
      if (sub === "panel") {
        const cfg = getGuildConfig(gid);
        const roles = cfg.selfRoles ?? [];
        if (!roles.length) return await interaction.editReply({ content: "No self-roles configured. Use `/roles add` first.", ephemeral: true });
        const rows = [];
        for (let i = 0; i < roles.length; i += 5) {
          const row = new ActionRowBuilder().addComponents(roles.slice(i, i + 5).map(r => {
            const btn = new ButtonBuilder().setCustomId(`role_toggle_${r.roleId}`).setLabel(r.label).setStyle(ButtonStyle.Secondary);
            if (r.emoji) btn.setEmoji(r.emoji);
            return btn;
          }));
          rows.push(row);
        }
        return await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("Self-Role Selection").setDescription("Click a button to add or remove a role.")], components: rows });
      }
    }

    // /ticket
    if (commandName === "ticket") {
      const sub = interaction.options.getSubcommand();
      const guild = interaction.guild;
      if (sub === "panel") {
        return await interaction.editReply({
          embeds: [baseEmbed(GOLD).setTitle("Support Tickets").setDescription("Need help? Click below to open a private support ticket.\n\n*بحاجة للمساعدة؟ اضغط على الزر أدناه.*\n*Besoin d'aide? Cliquez ci-dessous.*")],
          components: [new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId("ticket_open").setLabel("Open a Ticket").setEmoji("🎫").setStyle(ButtonStyle.Primary))],
        });
      }
      if (sub === "close") {
        const ch = interaction.channel;
        if (!ch.name.startsWith("ticket-")) return await interaction.editReply({ content: "This is not a ticket channel.", ephemeral: true });
        await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("Closing Ticket").setDescription("Transcript being saved...")] });
        await saveTranscript(guild, ch);
        setTimeout(() => ch.delete().catch(() => null), 3000);
      }
    }
  } catch (err) {
    console.error(`Error handling /${commandName}:`, err);
    try {
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: "An error occurred while processing your command.", ephemeral: true });
      } else {
        await interaction.reply({ content: "An error occurred while processing your command.", ephemeral: true });
      }
    } catch {}
  }
}

// ─── Button Handler ───────────────────────────────────────────────────────────
async function handleButton(interaction) {
  await interaction.deferReply({ ephemeral: true });
  const { customId, guild, member } = interaction;

  try {
    if (customId.startsWith("role_toggle_")) {
      const roleId = customId.replace("role_toggle_", "");
      const role = guild?.roles.cache.get(roleId);
      if (!role) return await interaction.editReply({ content: "Role not found." });
      if (member.roles.cache.has(roleId)) {
        await member.roles.remove(role);
        return await interaction.editReply({ content: `Removed **${role.name}**.` });
      } else {
        await member.roles.add(role);
        return await interaction.editReply({ content: `Added **${role.name}**.` });
      }
    }

    if (customId === "ticket_open") {
      if (!guild) return;
      const safeName = `ticket-${member.user.username.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 20)}`;
      const existing = guild.channels.cache.find(c => c.name === safeName);
      if (existing) return await interaction.editReply({ content: `You already have an open ticket: <#${existing.id}>` });
      const ch = await guild.channels.create({
        name: safeName,
        type: ChannelType.GuildText,
        permissionOverwrites: [
          { id: guild.roles.everyone, deny: [PermissionFlagsBits.ViewChannel] },
          { id: member.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] },
          { id: guild.members.me.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.ManageChannels] },
        ],
      });
      await ch.send({
        content: `<@${member.id}>`,
        embeds: [baseEmbed(GOLD).setTitle("Support Ticket").setDescription(`Hello <@${member.id}>! Please describe your question and a staff member will assist you shortly.\n\n*مرحباً، يُرجى وصف مشكلتك وسيتواصل معك أحد المشرفين قريباً.*`)],
        components: [new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId("ticket_close_btn").setLabel("Close Ticket").setEmoji("🔒").setStyle(ButtonStyle.Danger))],
      });
      return await interaction.editReply({ content: `Ticket created: <#${ch.id}>` });
    }

    if (customId === "ticket_close_btn") {
      if (!guild) return;
      const ch = interaction.channel;
      await interaction.editReply({ embeds: [baseEmbed(GOLD).setTitle("Closing...").setDescription("Saving transcript.")] });
      await saveTranscript(guild, ch);
      setTimeout(() => ch.delete().catch(() => null), 3000);
    }
  } catch (err) {
    console.error("Button handler error:", err);
    await interaction.followUp({ content: "An error occurred.", ephemeral: true }).catch(() => null);
  }
}

// ─── Bot Client ───────────────────────────────────────────────────────────────
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildModeration,
  ],
});

client.once("ready", async c => {
  console.log(`Logged in as ${c.user.tag}`);
  c.user.setPresence({
    activities: [{ name: "Maronite Liturgy | /prayer", type: ActivityType.Watching }],
    status: "online",
  });
  startDailyScheduler(client);
  deployCommands().catch(console.error);
});

client.on("guildMemberAdd", async member => {
  const cfg = getGuildConfig(member.guild.id);
  if (!cfg.welcomeChannelId) return;
  const ch = member.guild.channels.cache.get(cfg.welcomeChannelId);
  if (!ch) return;
  const defaultMsg = "Welcome to **{server}**, {user}!\nمرحباً بك في مجتمعنا الماروني. • Bienvenue dans notre communauté maronite.\n\nMay St. Maron intercede for you.";
  const text = (cfg.welcomeMessage ?? defaultMsg).replace(/\{user\}/g, `<@${member.id}>`).replace(/\{server\}/g, member.guild.name);
  await ch.send({ embeds: [baseEmbed(GOLD).setTitle("Welcome!").setDescription(text).setThumbnail(member.user.displayAvatarURL({ size: 256 }))] }).catch(() => null);
});

client.on("interactionCreate", async interaction => {
  if (interaction.isAutocomplete()) {
    const { commandName } = interaction;
    if (commandName === "verse") {
      const focused = interaction.options.getFocused().toLowerCase();
      const results = VERSES
        .filter(v => v.reference.toLowerCase().includes(focused))
        .slice(0, 25)
        .map(v => ({ name: v.reference, value: v.reference }));
      return interaction.respond(results).catch(() => null);
    }
    return;
  }
  if (interaction.isChatInputCommand()) return handleInteraction(interaction);
  if (interaction.isButton()) return handleButton(interaction);
});

client.on("error", err => console.error("Discord client error:", err.message));

// ─── Entry point ──────────────────────────────────────────────────────────────
if (process.argv.includes("--deploy")) {
  deployCommands().catch(console.error);
} else {
  client.login(TOKEN).catch(err => { console.error("Failed to login:", err); process.exit(1); });
}
