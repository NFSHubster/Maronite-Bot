// ─── Maronite Daily Gospel, Epistle & Commentary Database ───────────────────
const DAILY_READINGS = {
  monday: {
    day: "Monday",
    gospel: {
      reference: "Matthew 4:12-25",
      title: "The Beginning of Jesus' Ministry",
      en: "When Jesus heard that John had been put in prison, he withdrew to Galilee. Leaving Nazareth, he went and lived in Capernaum, which was by the lake in the area of Zebulun and Naphtali. From that time on Jesus began to preach, 'Repent, for the kingdom of heaven has come near.'",
      ar: "وَلَمَّا سَمِعَ يَسُوعُ أَنَّ يُوحَنَّا أُسْلِمَ، انْصَرَفَ إِلَىٰ الْجَلِيلِ. وَتَرَكَ النَّاصِرَةَ وَجَاءَ فَسَكَنَ فِي كَفْرِنَاحُومَ، الَّتِي عِنْدَ الْبَحْرِ فِي تُخُومِ زَبُولُونَ وَنَفْتَالِيمَ. وَمِنْ ذَلِكَ الْوَقْتِ ابْتَدَأَ يَسُوعُ يَكْرِزُ وَيَقُولُ: تُوبُوا لِأَنَّهُ قَدِ اقْتَرَبَ مَلَكُوتُ السَّمَاوَاتِ.",
      fr: "Jésus, ayant appris que Jean avait été livré, se retira en Galilée. Il quitta Nazareth et vint s'établir à Capernaüm, près de la mer, dans les territoires de Zabulon et de Nephtali. Dès ce moment, Jésus commença à prêcher et à dire: Repentez-vous, car le royaume des cieux s'est approché.",
    },
    epistle: {
      reference: "Titus 1:1-4",
      title: "Paul's Greeting to Titus",
      en: "Paul, a servant of God and an apostle of Jesus Christ for the faith of God's elect and their knowledge of the truth that leads to godliness—in the hope of eternal life, which God, who does not lie, promised before the beginning of time.",
      ar: "بُولُسُ عَبْدُ اللهِ وَرَسُولُ يَسُوعَ الْمَسِيحِ، لِإِيمَانِ مَخْتَارِي اللهِ وَمَعْرِفَةِ الْحَقِّ الَّذِي هُوَ حَسَبَ التَّقْوَىٰ، عَلَىٰ رَجَاءِ الْحَيَاةِ الأَبَدِيَّةِ، الَّتِي وَعَدَ بِهَا اللهُ الَّذِي لاَ يَكْذِبُ قَبْلَ أَزْمِنَةٍ أَزَلِيَّةٍ.",
      fr: "Paul, serviteur de Dieu et apôtre de Jésus-Christ pour amener à la foi les élus de Dieu et pour leur faire connaître la vérité qui est conforme à la piété, dans l'espérance de la vie éternelle, que Dieu, qui ne ment pas, a promis avant les temps éternels.",
    },
    commentary: {
      title: "Called to Repentance",
      en: "Christ begins His public ministry in Galilee, calling us to repentance. The kingdom of heaven draws near through His presence. We are invited to change our hearts and minds, to turn from sin and embrace the salvation He offers. In His name, the old is made new.",
      ar: "يبدأ المسيح خدمته العلنية في الجليل، وداعياً إيانا إلى التوبة. ملكوت السماوات يقترب من خلال حضوره. نحن مدعوون لتغيير قلوبنا وعقولنا، للتحول عن الخطية واحتضان الخلاص الذي يقدمه. باسمه، يصبح القديم جديداً.",
      fr: "Le Christ commence Son ministère public en Galilée, nous appelant à la repentance. Le royaume des cieux s'approche par Sa présence. Nous sommes invités à changer nos cœurs et nos esprits, à nous détourner du péché et à embrasser le salut qu'Il offre. En Son nom, l'ancien devient nouveau.",
    },
  },

  tuesday: {
    day: "Tuesday",
    gospel: {
      reference: "Luke 3:15-22",
      title: "The Baptism of Jesus",
      en: "The people were waiting expectantly and were all wondering in their hearts if John might possibly be the Messiah. John answered them all, 'I baptize you with water. But one who is more powerful than I will come, the straps of whose sandals I am not worthy to untie. He will baptize you with the Holy Spirit and fire.'",
      ar: "وَإِذْ كَانَ الشَّعْبُ فِي انْتِظَارٍ، وَالْجَمِيعُ يُفَكِّرُونَ فِي قُلُوبِهِمْ عَنْ يُوحَنَّا: هَلْ عَسَىٰ أَنْ يَكُونَ هُوَ الْمَسِيحَ؟ أَجَابَ يُوحَنَّا الْجَمِيعَ قَائِلاً: أَنَا أُعَمِّدُكُمْ بِمَاءٍ، لَكِنْ يَأْتِي مَنْ هُوَ أَقْوَىٰ مِنِّي، الَّذِي لَسْتُ أَهْلاً أَنْ أَحُلَّ رِبَاطَ حِذَائِهِ.",
      fr: "Comme le peuple était en attente et que tous se demandaient en leurs cœurs si Jean n'était point le Christ, Jean répondit à tous: Moi, je vous baptise d'eau; mais il vient, celui qui est plus puissant que moi, et je ne suis pas digne de délier la courroie de ses souliers. Lui, il vous baptisera du Saint-Esprit et de feu.",
    },
    epistle: {
      reference: "Romans 6:3-11",
      title: "Dead to Sin, Alive in Christ",
      en: "Or don't you know that all of us who were baptized into Christ Jesus were baptized into his death? We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.",
      ar: "أَمْ تَجْهَلُونَ أَنَّنَا كُلَّ الَّذِينَ اعْتَمَدْنَا لِيَسُوعَ الْمَسِيحِ اعْتَمَدْنَا لِمَوْتِهِ؟ فَدُفِنَّا مَعَهُ بِالْمَعْمُودِيَّةِ لِلْمَوْتِ، حَتَّىٰ كَمَا أُقِيمَ الْمَسِيحُ مِنَ الْأَمْوَاتِ بِمَجْدِ الآبِ، هَكَذَا نَسْلُكُ نَحْنُ أَيْضًا فِي جِدَّةِ الْحَيَاةِ.",
      fr: "Ou ne savez-vous pas que nous tous qui avons été baptisés en Jésus-Christ, c'est en sa mort que nous avons été baptisés? Nous avons donc été ensevelis avec lui par le baptême en sa mort, afin que, comme Christ est ressuscité d'entre les morts par la gloire du Père, de même nous aussi nous marchions en nouveauté de vie.",
    },
    commentary: {
      title: "Death and Rebirth in Baptism",
      en: "In baptism, we die to our old selves and rise with Christ. John's humility before Jesus teaches us profound truth: recognize the One greater than ourselves. Through the Holy Spirit, we are transformed and empowered to live as witnesses of His resurrection. Baptism is our death and our rebirth.",
      ar: "في المعمودية، نموت عن أنفسنا القديمة ونقوم مع المسيح. يعلمنا تواضع يوحنا أمام يسوع حقيقة عميقة: الاعتراف بمن هو أعظم منا. من خلال الروح القدس، نتحول ونُمكّن للعيش كشهود قيامته. المعمودية هي موتنا وولادتنا من جديد.",
      fr: "Dans le baptême, nous mourons à nos anciens moi et ressuscitons avec le Christ. L'humilité de Jean devant Jésus nous enseigne une vérité profonde: reconnaître Celui qui est plus grand que nous. Par l'Esprit Saint, nous sommes transformés et habilités à vivre en tant que témoins de Sa résurrection. Le baptême est notre mort et notre nouvelle naissance.",
    },
  },

  wednesday: {
    day: "Wednesday",
    gospel: {
      reference: "John 2:1-11",
      title: "Wedding at Cana",
      en: "On the third day a wedding took place at Cana in Galilee. Jesus' mother was there, and Jesus and his disciples had also been invited to the wedding. When the wine was gone, Jesus' mother said to him, 'They have no more wine.' 'Woman, why do you involve me?' Jesus replied. 'My hour has not yet come.' His mother said to the servants, 'Do whatever he tells you.'",
      ar: "وَفِي الْيَوْمِ الثَّالِثِ كَانَ عُرْسٌ فِي قَانَا الْجَلِيلِ، وَكَانَتْ أُمُّ يَسُوعَ هُنَاكَ. وَدُعِيَ يَسُوعُ وَتَلَامِيذُهُ أَيْضًا إِلَىٰ الْعُرْسِ. وَلَمَّا فَرَغَتِ الْخَمْرُ، قَالَتْ أُمُّ يَسُوعَ لَهُ: لَيْسَ لَهُمْ خَمْرٌ. قَالَ لَهَا يَسُوعُ: يَا امْرَأَةُ، مَا لِي وَلَكِ؟ لَمْ تَأْتِ سَاعَتِي بَعْدُ.",
      fr: "Le troisième jour, il y eut des noces à Cana en Galilée. La mère de Jésus était là, et Jésus fut aussi invité aux noces avec ses disciples. Le vin ayant manqué, la mère de Jésus lui dit: Ils n'ont plus de vin. Jésus lui répondit: Femme, qu'y a-t-il entre moi et toi? Mon heure n'est pas encore venue.",
    },
    epistle: {
      reference: "2 Peter 1:3-11",
      title: "Partakers of the Divine Nature",
      en: "His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness. Through these he has given us his very great and precious promises, so that through them you may participate in the divine nature.",
      ar: "إِذْ قُوَّتُهُ الإِلَهِيَّةُ قَدْ وَهَبَتْ لَنَا كُلَّ مَا هُوَ لِلْحَيَاةِ وَالتَّقْوَىٰ، بِمَعْرِفَةِ الَّذِي دَعَانَا بِمَجْدِهِ وَفَضِيلَتِهِ. الَّذِي بِهِمَا قَدْ وَهَبَ لَنَا الْمَوَاعِيدُ الْعُظْمَىٰ وَالنَّفِيسَةُ.",
      fr: "Sa divine puissance nous a donné tout ce qui regarde la vie et la piété, au moyen de la connaissance de celui qui nous a appelés par sa propre gloire et vertu. C'est pourquoi il nous a donné les plus grandes et les plus précieuses promesses.",
    },
    commentary: {
      title: "Christ Sanctifies All of Life",
      en: "At Cana, Jesus performs His first public miracle, transforming water into wine. This sign reveals His divine power and His care for human joy and celebration. Through Mary's intercession, He manifests His glory. We learn that Christ sanctifies all of life—even the simple moments of celebration become windows to His presence and saving grace.",
      ar: "في قانا، يصنع يسوع معجزته الأولى، محولاً الماء إلى خمر. تكشف هذه الآية عن قوته الإلهية واهتمامه بفرح الإنسان والاحتفال. من خلال شفاعة مريم، يعلن مجده. نتعلم أن المسيح يقدس كل الحياة - حتى اللحظات البسيطة من الاحتفال تصبح نوافذ لحضوره ونعمة خلاصه.",
      fr: "À Cana, Jésus accomplit Son premier miracle public, transformant l'eau en vin. Ce signe révèle Sa puissance divine et Son souci pour la joie et la célébration humaines. Par l'intercession de Marie, Il manifeste Sa gloire. Nous apprenons que le Christ sanctifie toute la vie—même les simples moments de célébration deviennent des fenêtres sur Sa présence et Sa grâce salvatrice.",
    },
  },

  thursday: {
    day: "Thursday",
    gospel: {
      reference: "Matthew 5:1-12",
      title: "The Beatitudes",
      en: "Now when Jesus saw the crowds, he went up on a mountainside and sat down. His disciples came to him, and he began to teach them, saying: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they will be comforted. Blessed are the meek, for they will inherit the earth.'",
      ar: "وَلَمَّا رَأَىٰ الْجُمُوعَ صَعِدَ إِلَىٰ الْجَبَلِ، فَلَمَّا جَلَسَ تَقَدَّمَ إِلَيْهِ تَلَامِيذُهُ، فَفَتَحَ فَاهُ وَعَلَّمَهُمْ قَائِلاً: طُوبَىٰ لِلْمَسَاكِينِ بِالرُّوحِ، لِأَنَّ لَهُمْ مَلَكُوتَ السَّمَاوَاتِ.",
      fr: "Voyant la foule, Jésus monta sur la montagne; et après qu'il se fut assis, ses disciples s'approchèrent de lui. Alors il ouvrit la bouche et les enseigna, disant: Heureux les pauvres en esprit, car le royaume des cieux est à eux! Heureux les affligés, car ils seront consolés!",
    },
    epistle: {
      reference: "1 Corinthians 1:26-31",
      title: "God Chose the Weak",
      en: "Brothers and sisters, think of what you were when you were called. Not many of you were by worldly standards wise; not many were influential; not many were of noble birth. But God chose the foolish things of the world to shame the wise; God chose the weak things of the world to shame the strong.",
      ar: "لِأَنَّكُمْ تَنْظُرُونَ إِلَىٰ دَعْوَتِكُمْ، أَيُّهَا الإِخْوَةُ، أَنَّهُ لَيْسَ كَثِيرُونَ مِنْكُمْ حُكَمَاءُ حَسَبَ الْجَسَدِ، وَلاَ كَثِيرُونَ أَقْوِيَاءُ، وَلاَ كَثِيرُونَ شِرِيفُو النَّسَبِ. بَلِ اخْتَارَ اللهُ جَهَالَاتِ الْعَالَمِ لِيُخْزِيَ الْحُكَمَاءَ.",
      fr: "Considérez, frères, que parmi vous qui avez été appelés il n'y a pas beaucoup de sages selon la chair, pas beaucoup de puissants, pas beaucoup de nobles. Mais Dieu a choisi les choses folles du monde pour confondre les sages; Dieu a choisi les choses faibles du monde pour confondre les fortes.",
    },
    commentary: {
      title: "The Kingdom Belongs to the Humble",
      en: "The Beatitudes overturn worldly values and proclaim God's kingdom of mercy and grace. Blessed are those who recognize their spiritual poverty, who mourn over sin, who are gentle and humble. In Christ's kingdom, weakness becomes strength, mourning becomes joy, and humility receives the inheritance. We are called to embody these virtues and become salt and light to the world.",
      ar: "تقلب الطوبيات القيم العالمية وتعلن ملكوت الله بالرحمة والنعمة. مباركون هم الذين يعترفون بفقرهم الروحي، الذين ينوحون على الخطية، الذين هم وديعون ومتواضعون. في ملكوت المسيح، تصبح الضعف قوة، والنوح فرح، والتواضع يرث. نحن مدعوون لتجسيد هذه الفضائل وأن نصبح ملح الأرض ونورها.",
      fr: "Les Béatitudes renversent les valeurs mondiales et proclament le royaume de Dieu de miséricorde et de grâce. Heureux ceux qui reconnaissent leur pauvreté spirituelle, qui pleurent sur le péché, qui sont doux et humbles. Dans le royaume du Christ, la faiblesse devient force, le deuil devient joie, et l'humilité hérite. Nous sommes appelés à incarner ces vertus et à devenir le sel et la lumière du monde.",
    },
  },

  friday: {
    day: "Friday",
    gospel: {
      reference: "John 19:25-37",
      title: "The Crucifixion",
      en: "Near the cross of Jesus stood his mother, his mother's sister, Mary the wife of Clopas, and Mary Magdalene. When Jesus saw his mother there, and the disciple whom he loved standing nearby, he said to her, 'Woman, here is your son,' and to the disciple, 'Here is your mother.'",
      ar: "وَكَانَتْ وَاقِفَةً عِنْدَ صَلِيبِ يَسُوعَ أُمُّهُ وَأُخْتُ أُمِّهِ، مَرْيَمُ امْرَأَةُ كِلُوبَا، وَمَرْيَمُ الْمَجْدَلِيَّةُ. فَلَمَّا رَأَىٰ يَسُوعُ أُمَّهُ وَالتِّلْمِيذَ الَّذِي كَانَ يُحِبُّهُ وَاقِفًا، قَالَ لِأُمِّهِ: يَا امْرَأَةُ، هُوَذَا ابْنُكِ!",
      fr: "Près de la croix de Jésus se tenaient sa mère et la sœur de sa mère, Marie femme de Clopas, et Marie de Magdala. Jésus, voyant sa mère, et auprès d'elle le disciple qu'il aimait, dit à sa mère: Femme, voilà ton fils. Puis il dit au disciple: Voilà ta mère.",
    },
    epistle: {
      reference: "Hebrews 9:24-28",
      title: "Christ's Perfect Sacrifice",
      en: "For Christ did not enter a sanctuary made with human hands that was only a copy of the true one; he entered heaven itself, now to appear for us in God's presence. Nor did he enter heaven to offer himself again and again, the way the high priest enters the Most Holy Place every year with blood that is not his own.",
      ar: "لِأَنَّ الْمَسِيحَ لَمْ يَدْخُلْ إِلَىٰ قُدْسٍ مَصْنُوعٍ بِأَيْدٍ هُوَ شِبْهُ الْحَقِيقِيِّ، بَلْ إِلَىٰ السَّمَاءِ عَيْنِهَا، لِيَظْهَرَ الآنَ أَمَامَ وَجْهِ اللهِ لِأَجْلِنَا.",
      fr: "Car le Christ n'est pas entré dans un sanctuaire fait de main d'homme, image du véritable; il est entré dans le ciel même, afin de comparaître maintenant pour nous devant la face de Dieu.",
    },
    commentary: {
      title: "Friday's Darkness, Redemption's Light",
      en: "On the cross, Christ offers Himself as the perfect sacrifice for all humanity. His dying words entrust His mother to John, and John to His mother—a family is born beneath the cross. Through His suffering and death, Christ conquers sin and death itself. Friday's darkness is transformed into the light of redemption. We are called to contemplate His love and offer our own lives in gratitude and service.",
      ar: "على الصليب، يقدم المسيح نفسه ذبيحة كاملة لكل البشرية. تسليم كلماته الأخيرة أمه إلى يوحنا ويوحنا إلى أمه - تولد عائلة تحت الصليب. من خلال معاناته وموته، ينتصر المسيح على الخطية والموت نفسه. يتحول ظلام الجمعة إلى نور الفداء. نحن مدعوون للتأمل في محبته وتقديم حياتنا في الامتنان والخدمة.",
      fr: "Sur la croix, le Christ S'offre comme le sacrifice parfait pour toute l'humanité. Ses dernières paroles confient Sa mère à Jean et Jean à Sa mère—une famille naît au pied de la croix. Par Sa souffrance et Sa mort, le Christ conquiert le péché et la mort elle-même. L'obscurité du Vendredi se transforme en lumière de la rédemption. Nous sommes appelés à contempler Son amour et à offrir nos propres vies en gratitude et en service.",
    },
  },

  saturday: {
    day: "Saturday",
    gospel: {
      reference: "Matthew 27:57-66",
      title: "The Burial of Jesus",
      en: "As evening approached, there came a rich man from Arimathea, named Joseph, who had himself become a disciple of Jesus. Going to Pilate, he asked for Jesus' body, and Pilate ordered that it be given to him. Joseph took the body, wrapped it in a clean linen cloth, and placed it in his own new tomb that he had cut out of the rock.",
      ar: "وَلَمَّا كَانَ الْمَسَاءُ جَاءَ رَجُلٌ غَنِيٌّ مِنَ الرَّامَةِ، اسْمُهُ يُوسُفُ، وَهُوَ أَيْضًا كَانَ تِلْمِيذًا لِيَسُوعَ. فَهَذَا ذَهَبَ إِلَىٰ بِيلاَطُسَ وَطَلَبَ جَسَدَ يَسُوعَ. فَأَمَرَ بِيلاَطُسُ حِينَئِذٍ بِأَنْ يُعْطَىٰ الْجَسَدُ. فَأَخَذَ يُوسُفُ الْجَسَدَ وَلَفَّهُ بِكِتَّانٍ نَقِيٍّ.",
      fr: "Le soir étant venu, il y eut un homme riche d'Arimathée, nommé Joseph, qui était aussi disciple de Jésus. Il se présenta à Pilate et demanda le corps de Jésus. Pilate ordonna qu'on le lui remît. Joseph prit le corps, l'enveloppa dans un linceul blanc, et le déposa dans son sépulcre neuf.",
    },
    epistle: {
      reference: "1 Peter 3:18-22",
      title: "Christ Suffered for Sins",
      en: "For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive in the Spirit. After being made alive, he went and made proclamation to the imprisoned spirits—to those who were disobedient long ago when God waited patiently in the days of Noah.",
      ar: "لِأَنَّ الْمَسِيحَ أَيْضًا تَأَلَّمَ مَرَّةً وَاحِدَةً مِنْ أَجْلِ الْخَطَايَا، الْبَارُّ مِنْ أَجْلِ الأَثَمَةِ، لِكَيْ يَقُودَنَا إِلَىٰ اللهِ، مُمَاتًا فِي الْجَسَدِ وَلَكِنْ مُحْيًا فِي الرُّوحِ.",
      fr: "Car le Christ aussi a souffert une fois pour les péchés, lui juste pour des injustes, afin de nous amener à Dieu; il a été mis à mort quant à la chair, mais rendu vivant quant à l'Esprit.",
    },
    commentary: {
      title: "The Silent Wait Before Resurrection",
      en: "Joseph of Arimathea, moved by love, gives his own tomb to Jesus. In death, Christ rests in darkness, yet His body is treated with honor and respect. Saturday's silence holds profound hope—the tomb is not the end, but a passage. We await the resurrection, trusting that death cannot hold the Author of Life. In this waiting, we find peace: our salvation is secured through His obedience unto death.",
      ar: "يوسف من الرامة، مدفوعاً بالحب، يعطي قبره الخاص ليسوع. في الموت، يستريح المسيح في الظلام، مع أن جسده يعامل بالشرف والاحترام. صمت السبت يحمل رجاءً عميقاً - القبر ليس النهاية، بل مرور. ننتظر القيامة، واثقين بأن الموت لا يستطيع أن يمسك مؤلف الحياة. في هذا الانتظار، نجد السلام: خلاصنا آمن من خلال طاعته حتى الموت.",
      fr: "Joseph d'Arimathée, mû par l'amour, donne son propre tombeau à Jésus. Dans la mort, le Christ repose dans l'obscurité, mais Son corps est traité avec honneur et respect. Le silence du samedi porte un espoir profond—le tombeau n'est pas la fin, mais un passage. Nous attendons la résurrection, confiants que la mort ne peut retenir l'Auteur de la Vie. Dans cette attente, nous trouvons la paix: notre salut est assuré par Son obéissance jusqu'à la mort.",
    },
  },

  sunday: {
    day: "Sunday",
    gospel: {
      reference: "Matthew 28:1-10",
      title: "The Resurrection",
      en: "After the Sabbath, at dawn on the first day of the week, Mary Magdalene and the other Mary went to look at the tomb. There was a violent earthquake, for an angel of the Lord came down from heaven and, going to the tomb, rolled back the stone and sat on it. The angel said to the women, 'Do not be afraid, for I know that you are looking for Jesus, who has been crucified. He is not here; he has risen, just as he said.'",
      ar: "وَبَعْدَ السَّبْتِ، عِنْدَ فَجْرِ الْيَوْمِ الأَوَّلِ مِنَ الأُسْبُوعِ، جَاءَتْ مَرْيَمُ الْمَجْدَلِيَّةُ وَمَرْيَمُ الأُخْرَىٰ لِتَنْظُرَا الْقَبْرَ. وَإِذَا زَلْزَلَةٌ عَظِيمَةٌ حَدَثَتْ! لِأَنَّ مَلاَكَ الرَّبِّ نَزَلَ مِنَ السَّمَاءِ وَجَاءَ وَدَحْرَجَ الْحَجَرَ عَنِ الْبَابِ وَجَلَسَ عَلَيْهِ.",
      fr: "Après le sabbat, à l'aube du premier jour de la semaine, Marie de Magdala et l'autre Marie vinrent regarder le sépulcre. Et voici, il y eut un grand tremblement de terre; car un ange du Seigneur descendit du ciel, vint rouler la pierre, et s'assit dessus. L'ange dit aux femmes: Ne craignez pas; car je sais que vous cherchez Jésus qui a été crucifié.",
    },
    epistle: {
      reference: "1 Corinthians 15:1-11",
      title: "The Gospel and the Resurrection",
      en: "For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures, and that he appeared to Cephas, and then to the Twelve.",
      ar: "فَإِنَّنِي سَلَّمْتُ إِلَيْكُمْ فِي الأَوَّلِ مَا قَبِلْتُهُ أَنَّ الْمَسِيحَ مَاتَ مِنْ أَجْلِ خَطَايَانَا حَسَبَ الْكُتُبِ، وَأَنَّهُ دُفِنَ، وَأَنَّهُ قَامَ فِي الْيَوْمِ الثَّالِثِ حَسَبَ الْكُتُبِ.",
      fr: "Je vous ai transmis avant tout ce que j'avais aussi reçu, à savoir que le Christ est mort pour nos péchés, selon les Écritures; qu'il a été enseveli, et qu'il est ressuscité le troisième jour, selon les Écritures.",
    },
    commentary: {
      title: "He Is Risen — Alleluia!",
      en: "Christ is Risen! Death is conquered. The stone is rolled away, and from the tomb comes forth the Author of Life. His resurrection transforms the world and fulfills all the promises of God. We gather on Sunday, the Lord's Day, to celebrate and commemorate His victory. In His rising, we too are raised to new life. Let all creation rejoice! The darkness of sin is dispelled by the light of His glory. We are a resurrection people, witnesses to His risen life, called to proclaim: 'He is Risen! Alleluia!'",
      ar: "المسيح قام! الموت منهزم. يُرفع الحجر، ومن القبر يخرج مؤلف الحياة. تحول قيامته العالم وتتمم جميع وعود الله. نجتمع يوم الأحد، يوم الرب، للاحتفال والتذكر بنصره. في قيامته، نقوم نحن أيضاً إلى حياة جديدة. ليفرح كل الخليقة! يُطرد ظلام الخطية بنور مجده. نحن شعب القيامة، شهود على حياته القائمة، مدعوون لإعلان: 'قام! هللويا!'",
      fr: "Le Christ est Ressuscité! La mort est vaincue. La pierre est roulée, et du sépulcre sort l'Auteur de la Vie. Sa résurrection transforme le monde et accomplit toutes les promesses de Dieu. Nous nous réunissons le dimanche, le Jour du Seigneur, pour célébrer et commémorer Sa victoire. Dans Sa résurrection, nous aussi sommes ressuscités à une vie nouvelle. Que toute la création se réjouisse! Nous sommes un peuple de résurrection, appelés à proclamer: 'Il est Ressuscité! Alléluia!'",
    },
  },
};

module.exports = { DAILY_READINGS };
