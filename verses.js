// ─── Maronite Bible Verse Database — Old & New Testament ─────────────────────
// Translations: EN = NIV-style | AR = Van Dyke Arabic | FR = Louis Segond
const VERSES = [

  // ══════════════════════════════════════════════════════
  // OLD TESTAMENT
  // ══════════════════════════════════════════════════════

  // ── Genesis ──────────────────────────────────────────
  {
    reference: "Genesis 1:1",
    text: {
      en: "In the beginning God created the heavens and the earth.",
      ar: "فِي الْبَدْءِ خَلَقَ اللهُ السَّمَاوَاتِ وَالأَرْضَ.",
      fr: "Au commencement, Dieu créa les cieux et la terre.",
    },
  },
  {
    reference: "Genesis 1:27",
    text: {
      en: "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
      ar: "فَخَلَقَ اللهُ الإِنْسَانَ عَلَى صُورَتِهِ. عَلَى صُورَةِ اللهِ خَلَقَهُ. ذَكَرًا وَأُنْثَى خَلَقَهُمْ.",
      fr: "Dieu créa l'homme à son image, il le créa à l'image de Dieu, il créa l'homme et la femme.",
    },
  },
  {
    reference: "Genesis 28:15",
    text: {
      en: "I am with you and will watch over you wherever you go, and I will bring you back to this land. I will not leave you until I have done what I have promised you.",
      ar: "هَا أَنَا مَعَكَ وَأَحْفَظُكَ حَيْثُمَا تَذْهَبُ وَأَرُدُّكَ إِلَى هَذِهِ الأَرْضِ لأَنِّي لاَ أَتْرُكُكَ حَتَّى أَفْعَلَ مَا كَلَّمْتُكَ بِهِ.",
      fr: "Je suis avec toi, je te garderai partout où tu iras, et je te ramènerai dans ce pays; car je ne t'abandonnerai point que je n'aie exécuté ce que je te dis.",
    },
  },

  // ── Exodus ────────────────────────────────────────────
  {
    reference: "Exodus 3:14",
    text: {
      en: "God said to Moses, 'I AM WHO I AM. This is what you are to say to the Israelites: I AM has sent me to you.'",
      ar: "قَالَ اللهُ لِمُوسَى: أَنَا الَّذِي أَنَا. وَقَالَ: هَكَذَا تَقُولُ لِبَنِي إِسْرَائِيلَ: أَهْيَهْ أَرْسَلَنِي إِلَيْكُمْ.",
      fr: "Dieu dit à Moïse: Je suis celui qui suis. Et il ajouta: C'est ainsi que tu répondras aux fils d'Israël: Celui qui s'appelle Je suis m'a envoyé vers vous.",
    },
  },
  {
    reference: "Exodus 20:3",
    text: {
      en: "You shall have no other gods before me.",
      ar: "لاَ يَكُنْ لَكَ آلِهَةٌ أُخْرَى أَمَامِي.",
      fr: "Tu n'auras pas d'autres dieux devant ma face.",
    },
  },

  // ── Deuteronomy ───────────────────────────────────────
  {
    reference: "Deuteronomy 6:4-5",
    text: {
      en: "Hear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all your heart and with all your soul and with all your strength.",
      ar: "اسْمَعْ يَا إِسْرَائِيلُ: الرَّبُّ إِلَهُنَا رَبٌّ وَاحِدٌ. وَتُحِبُّ الرَّبَّ إِلَهَكَ مِنْ كُلِّ قَلْبِكَ وَمِنْ كُلِّ نَفْسِكَ وَمِنْ كُلِّ قُوَّتِكَ.",
      fr: "Écoute, Israël! L'Éternel, notre Dieu, est le seul Éternel. Tu aimeras l'Éternel, ton Dieu, de tout ton cœur, de toute ton âme et de toute ta force.",
    },
  },
  {
    reference: "Deuteronomy 31:8",
    text: {
      en: "The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
      ar: "وَالرَّبُّ هُوَ السَّائِرُ أَمَامَكَ وَهُوَ يَكُونُ مَعَكَ لاَ يُهْمِلُكَ وَلاَ يَتْرُكُكَ. لاَ تَخَفْ وَلاَ تَرْتَعِبْ.",
      fr: "L'Éternel marchera lui-même devant toi, il sera lui-même avec toi, il ne te délaissera point et ne t'abandonnera point; ne crains point et ne t'effraie point.",
    },
  },

  // ── Joshua ────────────────────────────────────────────
  {
    reference: "Joshua 1:9",
    text: {
      en: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
      ar: "أَلَمْ أُوصِكَ؟ تَشَدَّدْ وَتَشَجَّعْ. لاَ تَرْهَبْ وَلاَ تَنْخَعْ، لأَنَّ الرَّبَّ إِلَهَكَ مَعَكَ حَيْثُمَا تَذْهَبُ.",
      fr: "Ne t'ai-je pas donné cet ordre: Fortifie-toi et prends courage? Ne t'effraie point et ne t'épouvante point, car l'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.",
    },
  },

  // ── 1 Kings ───────────────────────────────────────────
  {
    reference: "1 Kings 19:12",
    text: {
      en: "After the earthquake came a fire, but the Lord was not in the fire. And after the fire came a gentle whisper.",
      ar: "وَبَعْدَ الزَّلْزَلَةِ نَارٌ. لَيْسَ الرَّبُّ فِي النَّارِ. وَبَعْدَ النَّارِ صَوْتُ هَدُوءٍ لَطِيفٍ.",
      fr: "Après le feu, il y eut un murmure doux et léger. L'Éternel n'était pas dans le vent, ni dans le tremblement de terre, ni dans le feu.",
    },
  },

  // ── Psalms ────────────────────────────────────────────
  {
    reference: "Psalm 1:1-2",
    text: {
      en: "Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers, but whose delight is in the law of the Lord.",
      ar: "طُوبَى لِلرَّجُلِ الَّذِي لاَ يَسْلُكُ فِي مَشُورَةِ الأَشْرَارِ وَفِي طَرِيقِ الْخُطَاةِ لاَ يَقِفُ وَفِي مَجْلِسِ الْمُسْتَهْزِئِينَ لاَ يَجْلِسُ. بَلْ فِي شَرِيعَةِ الرَّبِّ مَسَرَّتُهُ.",
      fr: "Heureux l'homme qui ne marche pas selon le conseil des méchants, qui ne s'arrête pas sur la voie des pécheurs, et qui ne s'assied pas en compagnie des moqueurs, mais qui trouve son plaisir dans la loi de l'Éternel.",
    },
  },
  {
    reference: "Psalm 22:1",
    text: {
      en: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?",
      ar: "إِلَهِي إِلَهِي لِمَاذَا تَرَكْتَنِي؟ بَعِيدٌ عَنْ خَلاَصِي كَلاَمُ زَفِيرِي.",
      fr: "Mon Dieu! Mon Dieu! Pourquoi m'as-tu abandonné? Tu es loin de me secourir, loin de mes cris et de mes gémissements.",
    },
  },
  {
    reference: "Psalm 23:1-3",
    text: {
      en: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
      ar: "الرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ. فِي مَرَاعٍ خَضْرَاءَ يُرْبِضُنِي. إِلَى مِيَاهِ الرَّاحَةِ يُورِدُنِي. يَرُدُّ نَفْسِي.",
      fr: "L'Éternel est mon berger: je ne manquerai de rien. Il me fait reposer dans de verts pâturages, il me dirige près des eaux paisibles. Il restaure mon âme.",
    },
  },
  {
    reference: "Psalm 23:4",
    text: {
      en: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
      ar: "أَيْضًا إِذَا سَلَكْتُ فِي وَادِي ظِلِّ الْمَوْتِ لاَ أَخَافُ شَرًّا، لأَنَّكَ أَنْتَ مَعِي. عَصَاكَ وَعُكَّازُكَ هُمَا يُعَزِّيَانِنِي.",
      fr: "Quand je marche dans la vallée de l'ombre de la mort, je ne crains aucun mal, car tu es avec moi: ta houlette et ton bâton me rassurent.",
    },
  },
  {
    reference: "Psalm 27:1",
    text: {
      en: "The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid?",
      ar: "الرَّبُّ نُورِي وَخَلاَصِي، مَنْ أَخَافُ؟ الرَّبُّ حِصْنُ حَيَاتِي، مَنْ أَرْتَعِبُ؟",
      fr: "L'Éternel est ma lumière et mon salut: de qui aurais-je crainte? L'Éternel est le soutien de ma vie: de qui aurais-je peur?",
    },
  },
  {
    reference: "Psalm 34:8",
    text: {
      en: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
      ar: "ذُوقُوا وَانْظُرُوا مَا أَطْيَبَ الرَّبَّ. طُوبَى لِلرَّجُلِ الْمُتَوَكِّلِ عَلَيْهِ.",
      fr: "Goûtez et voyez combien l'Éternel est bon! Heureux l'homme qui cherche en lui son refuge!",
    },
  },
  {
    reference: "Psalm 46:1",
    text: {
      en: "God is our refuge and strength, an ever-present help in trouble.",
      ar: "اللهُ مَلْجَأُنَا وَقُوَّتُنَا، عَوْنًا فِي الضِّيقَاتِ وُجِدَ يَسِيرًا.",
      fr: "Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse.",
    },
  },
  {
    reference: "Psalm 51:10-11",
    text: {
      en: "Create in me a pure heart, O God, and renew a steadfast spirit within me. Do not cast me from your presence or take your Holy Spirit from me.",
      ar: "اُخْلُقْ لِي قَلْبًا نَقِيًّا يَا اللهُ، وَجَدِّدْ فِيَّ رُوحًا مُسْتَقِيمًا. لاَ تَطْرَحْنِي مِنْ أَمَامِ وَجْهِكَ، وَرُوحُ قُدْسِكَ لاَ تَنْزِعْهُ مِنِّي.",
      fr: "Crée en moi un cœur pur, ô Dieu! Renouvelle en moi un esprit bien disposé. Ne me rejette pas loin de ta face, ne me retire pas ton esprit saint.",
    },
  },
  {
    reference: "Psalm 91:1-2",
    text: {
      en: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
      ar: "الساكن في ستر العلي في ظل القدير يبيت. أقول للرب: ملجئي وحصني، إلهي الذي أتكل عليه.",
      fr: "Celui qui demeure sous l'abri du Très-Haut repose à l'ombre du Tout-Puissant. Je dis à l'Éternel: Mon refuge et ma forteresse, mon Dieu en qui je me confie.",
    },
  },
  {
    reference: "Psalm 100:3",
    text: {
      en: "Know that the Lord is God. It is he who made us, and we are his; we are his people, the sheep of his pasture.",
      ar: "اعْلَمُوا أَنَّ الرَّبَّ هُوَ اللهُ. هُوَ صَنَعَنَا وَلَهُ نَحْنُ. شَعْبُهُ وَغَنَمُ مَرْعَاهُ.",
      fr: "Sachez que c'est l'Éternel qui est Dieu: c'est lui qui nous a faits, et nous lui appartenons; nous sommes son peuple, et le troupeau de son pâturage.",
    },
  },
  {
    reference: "Psalm 103:1-2",
    text: {
      en: "Praise the Lord, my soul; all my inmost being, praise his holy name. Praise the Lord, my soul, and forget not all his benefits.",
      ar: "بَارِكِي الرَّبَّ يَا نَفْسِي، وَكُلُّ مَا فِي دَاخِلِي بَارِكِ اسْمَهُ الْقُدُّوسَ. بَارِكِي الرَّبَّ يَا نَفْسِي وَلاَ تَنْسِي جَمِيعَ حَسَنَاتِهِ.",
      fr: "Bénis l'Éternel, ô mon âme! Que tout ce qui est en moi bénisse son saint nom! Bénis l'Éternel, ô mon âme, et n'oublie aucun de ses bienfaits!",
    },
  },
  {
    reference: "Psalm 103:12",
    text: {
      en: "As far as the east is from the west, so far has he removed our transgressions from us.",
      ar: "كَبُعْدِ الْمَشْرِقِ مِنَ الْمَغْرِبِ أَبْعَدَ عَنَّا مَعَاصِيَنَا.",
      fr: "Autant l'orient est éloigné de l'occident, autant il a éloigné de nous nos transgressions.",
    },
  },
  {
    reference: "Psalm 118:24",
    text: {
      en: "This is the day the Lord has made; we will rejoice and be glad in it.",
      ar: "هَذَا هُوَ الْيَوْمُ الَّذِي صَنَعَهُ الرَّبُّ. نَبْتَهِجُ وَنَفْرَحُ فِيهِ.",
      fr: "C'est ici la journée que l'Éternel a faite: qu'elle soit pour nous un sujet d'allégresse et de joie!",
    },
  },
  {
    reference: "Psalm 119:105",
    text: {
      en: "Your word is a lamp for my feet, a light on my path.",
      ar: "كَلاَمُكَ سِرَاجٌ لِرِجْلَيَّ وَنُورٌ لِسَبِيلِي.",
      fr: "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.",
    },
  },
  {
    reference: "Psalm 121:1-2",
    text: {
      en: "I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth.",
      ar: "أَرْفَعُ عَيْنَيَّ إِلَى الْجِبَالِ. مِنْ أَيْنَ يَأْتِي عَوْنِي؟ عَوْنِي مِنْ عِنْدِ الرَّبِّ صَانِعِ السَّمَاءِ وَالأَرْضِ.",
      fr: "Je lève les yeux vers les montagnes... D'où me viendra le secours? Le secours me vient de l'Éternel, qui a fait les cieux et la terre.",
    },
  },
  {
    reference: "Psalm 139:14",
    text: {
      en: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      ar: "أَحْمَدُكَ لأَنِّي قَدْ صُنِعْتُ بِشَكْل مَخُوفٍ عَجِيبٍ. عَجِيبَةٌ أَعْمَالُكَ، وَنَفْسِي تَعْلَمُ ذَلِكَ جِدًّا.",
      fr: "Je te loue de ce que je suis une créature si merveilleuse. Tes œuvres sont admirables, et mon âme le reconnaît bien.",
    },
  },
  {
    reference: "Psalm 139:23-24",
    text: {
      en: "Search me, God, and know my heart; test me and know my anxious thoughts. See if there is any offensive way in me, and lead me in the way everlasting.",
      ar: "فَتِّشْنِي يَا اللهُ وَاعْرِفْ قَلْبِي. امْتَحِنِّي وَاعْرِفْ أَفْكَارِي. وَانْظُرْ هَلْ فِيَّ طَرِيقٌ بَاطِلٌ، وَاهْدِنِي طَرِيقًا أَبَدِيًّا.",
      fr: "Sonde-moi, ô Dieu, et connais mon cœur! Éprouve-moi, et connais mes pensées! Regarde si je suis sur une mauvaise voie, et conduis-moi sur la voie éternelle!",
    },
  },
  {
    reference: "Psalm 150:6",
    text: {
      en: "Let everything that has breath praise the Lord. Praise the Lord.",
      ar: "كُلُّ مَنْ يَتَنَفَّسُ فَلْيُسَبِّحِ الرَّبَّ. سَبِّحُوا الرَّبَّ.",
      fr: "Que tout ce qui respire loue l'Éternel! Louez l'Éternel!",
    },
  },

  // ── Proverbs ──────────────────────────────────────────
  {
    reference: "Proverbs 3:5-6",
    text: {
      en: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      ar: "ثِقْ بِالرَّبِّ مِنْ كُلِّ قَلْبِكَ، وَلاَ تَتَّكِئْ عَلَى فَهْمِكَ. فِي كُلِّ طُرُقِكَ اعْتَرِفْ بِهِ، وَهُوَ يُقَوِّمُ سُبُلَكَ.",
      fr: "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse. Reconnais-le dans toutes tes voies, et il aplanira tes sentiers.",
    },
  },
  {
    reference: "Proverbs 16:3",
    text: {
      en: "Commit to the Lord whatever you do, and he will establish your plans.",
      ar: "كِلْ أَعْمَالَكَ إِلَى الرَّبِّ، فَتَثْبُتَ أَفْكَارُكَ.",
      fr: "Recommande à l'Éternel tes œuvres, et tes projets réussiront.",
    },
  },
  {
    reference: "Proverbs 22:6",
    text: {
      en: "Start children off on the way they should go, and even when they are old they will not turn from it.",
      ar: "دَرِّبِ الْوَلَدَ عَلَى طَرِيقِهِ، فَمَتَى شَاخَ أَيْضًا لاَ يَحِيدُ عَنْهَا.",
      fr: "Instruis l'enfant selon la voie qu'il doit suivre; et quand il sera vieux, il ne s'en détournera pas.",
    },
  },
  {
    reference: "Proverbs 31:25",
    text: {
      en: "She is clothed with strength and dignity; she can laugh at the days to come.",
      ar: "الْعِزُّ وَالْجَمَالُ لِبَاسُهَا، وَتَضْحَكُ فِي الأَيَّامِ الآتِيَةِ.",
      fr: "Elle est revêtue de force et de dignité, et elle rit de l'avenir.",
    },
  },

  // ── Isaiah ────────────────────────────────────────────
  {
    reference: "Isaiah 6:8",
    text: {
      en: "Then I heard the voice of the Lord saying, 'Whom shall I send? And who will go for us?' And I said, 'Here am I. Send me!'",
      ar: "وَسَمِعْتُ صَوْتَ السَّيِّدِ قَائِلاً: مَنْ أُرْسِلُ وَمَنْ يَذْهَبُ مِنْ أَجْلِنَا؟ فَقُلْتُ: هَا أَنَا ذَا أَرْسِلْنِي.",
      fr: "J'entendis la voix du Seigneur, disant: Qui enverrai-je, et qui marchera pour nous? Je répondis: Me voici, envoie-moi.",
    },
  },
  {
    reference: "Isaiah 9:6",
    text: {
      en: "For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.",
      ar: "لأَنَّهُ يُولَدُ لَنَا وَلَدٌ وَنُعْطَى ابْنًا، وَتَكُونُ الرِّيَاسَةُ عَلَى كَتِفِهِ، وَيُدْعَى اسْمُهُ عَجِيبًا مُشِيرًا، إِلَهًا قَدِيرًا، أَبًا أَبَدِيًّا، رَئِيسَ السَّلاَمِ.",
      fr: "Car un enfant nous est né, un fils nous est donné, et la domination reposera sur son épaule; on l'appellera Admirable, Conseiller, Dieu puissant, Père éternel, Prince de la paix.",
    },
  },
  {
    reference: "Isaiah 40:28-29",
    text: {
      en: "Do you not know? Have you not heard? The Lord is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom. He gives strength to the weary and increases the power of the weak.",
      ar: "أَمَا تَعْلَمُ؟ أَمَا تَسْمَعُ؟ اللهُ الأَبَدِيُّ الرَّبُّ خَالِقُ أَطْرَافِ الأَرْضِ لاَ يَكِلُّ وَلاَ يَتْعَبُ. لَيْسَ لِفَهْمِهِ فَحْصٌ. يُعْطِي الْمَعْيِيَّ قُدْرَةً، وَلِعَدِيمِ الاسْتِطَاعَةِ يُكَثِّرُ الْعِزَّةَ.",
      fr: "Ne le sais-tu pas? Ne l'as-tu pas entendu? L'Éternel est un Dieu d'éternité; il a créé les extrémités de la terre. Il ne se lasse point et ne se fatigue point; sa sagesse est insondable. Il donne de la force à celui qui est fatigué.",
    },
  },
  {
    reference: "Isaiah 40:31",
    text: {
      en: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      ar: "أَمَّا الَّذِينَ يَرْجُونَ الرَّبَّ فَيَتَجَدَّدُ قُوَّتُهُمْ. يَرْفَعُونَ أَجْنِحَةً كَالنُّسُورِ. يَرْكُضُونَ وَلاَ يَتْعَبُونَ. يَمْشُونَ وَلاَ يَيْأَسُونَ.",
      fr: "Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent leur envol comme des aigles; ils courent sans se lasser, ils marchent sans se fatiguer.",
    },
  },
  {
    reference: "Isaiah 41:10",
    text: {
      en: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
      ar: "لاَ تَخَفْ لأَنِّي مَعَكَ. لاَ تَتَلَفَّتْ لأَنِّي إِلَهُكَ. قَوَّيْتُكَ وَأَعَنْتُكَ وَعَضَدْتُكَ بِيَمِينِ بِرِّي.",
      fr: "Ne crains rien, car je suis avec toi; ne promène pas des regards inquiets, car je suis ton Dieu; je te fortifie, je viens à ton secours, je te soutiens de ma droite triomphante.",
    },
  },
  {
    reference: "Isaiah 43:1-2",
    text: {
      en: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine. When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.",
      ar: "لاَ تَخَفْ لأَنِّي افْتَدَيْتُكَ. دَعَوْتُكَ بِاسْمِكَ. أَنْتَ لِي. حِينَ تَعْبُرُ فِي الْمِيَاهِ أَنَا مَعَكَ، وَفِي الأَنْهَارِ فَلاَ تَغْمُرُكَ.",
      fr: "Ne crains rien, car je t'ai racheté, je t'ai appelé par ton nom: tu es à moi! Lorsque tu passeras par les eaux, je serai avec toi; et par les fleuves, ils ne te submergeront pas.",
    },
  },
  {
    reference: "Isaiah 53:5",
    text: {
      en: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
      ar: "وَهُوَ مَجْرُوحٌ لأَجْلِ مَعَاصِينَا، مَسْحُوقٌ لأَجْلِ آثَامِنَا. تَأْدِيبُ سَلاَمِنَا عَلَيْهِ، وَبِحُبُرِهِ شُفِينَا.",
      fr: "Mais il était blessé pour nos péchés, brisé pour nos iniquités; le châtiment qui nous donne la paix est tombé sur lui, et c'est par ses meurtrissures que nous sommes guéris.",
    },
  },
  {
    reference: "Isaiah 55:6-7",
    text: {
      en: "Seek the Lord while he may be found; call on him while he is near. Let the wicked forsake their ways and the unrighteous their thoughts. Let them turn to the Lord, and he will have mercy on them.",
      ar: "اطْلُبُوا الرَّبَّ مَا دَامَ يُوجَدُ. ادْعُوهُ وَهُوَ قَرِيبٌ. لِيَتْرُكِ الشِّرِّيرُ طَرِيقَهُ، وَرَجُلُ الإِثْمِ أَفْكَارَهُ، وَلْيَرْجِعْ إِلَى الرَّبِّ فَيَرْحَمَهُ.",
      fr: "Cherchez l'Éternel pendant qu'il se trouve; invoquez-le, tandis qu'il est près. Que le méchant abandonne sa voie, et l'homme inique ses pensées; qu'il retourne à l'Éternel, qui aura pitié de lui.",
    },
  },

  // ── Jeremiah ──────────────────────────────────────────
  {
    reference: "Jeremiah 29:11",
    text: {
      en: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      ar: "لأَنِّي أَنَا أَعْلَمُ الأَفْكَارَ الَّتِي أَنَا أُفَكِّرُهَا نَحْوَكُمْ يَقُولُ الرَّبُّ. أَفْكَارَ سَلاَمٍ لاَ شَرٍّ، لأُعْطِيَكُمْ آخِرَةً وَرَجَاءً.",
      fr: "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.",
    },
  },
  {
    reference: "Jeremiah 31:33",
    text: {
      en: "I will put my law in their minds and write it on their hearts. I will be their God, and they will be my people.",
      ar: "وَلَكِنَّ هَذَا هُوَ الْعَهْدُ الَّذِي أَقْطَعُهُ مَعَ بَيْتِ إِسْرَائِيلَ بَعْدَ تِلْكَ الأَيَّامِ: أَجْعَلُ شَرِيعَتِي فِي دَاخِلِهِمْ وَأَكْتُبُهَا عَلَى قُلُوبِهِمْ وَأَكُونُ لَهُمْ إِلَهًا وَهُمْ يَكُونُونَ لِي شَعْبًا.",
      fr: "Mais voici l'alliance que je ferai avec la maison d'Israël, après ces jours-là: Je mettrai ma loi au dedans d'eux, je l'écrirai dans leur cœur; et je serai leur Dieu, et ils seront mon peuple.",
    },
  },

  // ── Lamentations ─────────────────────────────────────
  {
    reference: "Lamentations 3:22-23",
    text: {
      en: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
      ar: "رَحَمَاتُ الرَّبِّ لَمْ تَنْقَطِعْ. إِنَّ مَرَاحِمَهُ لاَ تَزُولُ. هِيَ جَدِيدَةٌ كُلَّ صَبَاحٍ. عَظِيمَةٌ أَمَانَتُكَ.",
      fr: "Les bontés de l'Éternel ne sont pas épuisées, ses compassions ne sont pas à leur terme; elles se renouvellent chaque matin. Que ta fidélité est grande!",
    },
  },

  // ── Ezekiel ───────────────────────────────────────────
  {
    reference: "Ezekiel 36:26",
    text: {
      en: "I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh.",
      ar: "وَأُعْطِيكُمْ قَلْبًا جَدِيدًا، وَأَجْعَلُ رُوحًا جَدِيدَةً فِي دَاخِلِكُمْ، وَأَنْزِعُ قَلْبَ الْحَجَرِ مِنْ لَحْمِكُمْ وَأُعْطِيكُمْ قَلْبَ لَحْمٍ.",
      fr: "Je vous donnerai un cœur nouveau, et je mettrai en vous un esprit nouveau; j'ôterai de votre corps le cœur de pierre, et je vous donnerai un cœur de chair.",
    },
  },

  // ── Micah ─────────────────────────────────────────────
  {
    reference: "Micah 6:8",
    text: {
      en: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
      ar: "قَدْ أَخْبَرَكَ أَيُّهَا الإِنْسَانُ مَا هُوَ الْخَيْرُ. وَمَاذَا يَطْلُبُ مِنْكَ الرَّبُّ، إِلاَّ أَنْ تَصْنَعَ الْحَقَّ، وَتُحِبَّ الرَّحْمَةَ، وَتَسْلُكَ مُتَوَاضِعًا مَعَ إِلَهِكَ.",
      fr: "On t'a fait connaître, ô homme, ce qui est bien; et ce que l'Éternel demande de toi, c'est que tu pratiques la justice, que tu aimes la miséricorde, et que tu marches humblement avec ton Dieu.",
    },
  },

  // ── Zephaniah ─────────────────────────────────────────
  {
    reference: "Zephaniah 3:17",
    text: {
      en: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
      ar: "الرَّبُّ إِلَهُكَ فِي وَسَطِكَ. جَبَّارٌ يُخَلِّصُ. يَبْتَهِجُ بِكَ بِفَرَحٍ. يَسْكُتُ فِي مَحَبَّتِهِ. يَعْتَزُّ بِكَ بِتَرَنُّمٍ.",
      fr: "L'Éternel, ton Dieu, est au milieu de toi, comme un héros qui sauve. Il fera de toi sa plus grande joie; il gardera le silence dans son amour, il exultera d'allégresse à cause de toi.",
    },
  },

  // ══════════════════════════════════════════════════════
  // NEW TESTAMENT
  // ══════════════════════════════════════════════════════

  // ── Matthew ───────────────────────────────────────────
  {
    reference: "Matthew 5:3-5",
    text: {
      en: "Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they will be comforted. Blessed are the meek, for they will inherit the earth.",
      ar: "طُوبَى لِلْمَسَاكِينِ بِالرُّوحِ لأَنَّ لَهُمْ مَلَكُوتَ السَّمَاوَاتِ. طُوبَى لِلْحَزَانَى لأَنَّهُمْ يَتَعَزَّوْنَ. طُوبَى لِلْوُدَعَاءِ لأَنَّهُمْ يَرِثُونَ الأَرْضَ.",
      fr: "Heureux les pauvres en esprit, car le royaume des cieux est à eux! Heureux les affligés, car ils seront consolés! Heureux les débonnaires, car ils hériteront la terre!",
    },
  },
  {
    reference: "Matthew 5:14-16",
    text: {
      en: "You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
      ar: "أَنْتُمْ نُورُ الْعَالَمِ. لاَ يُمْكِنُ أَنْ تَخْفَى مَدِينَةٌ مَوْضُوعَةٌ عَلَى جَبَل. وَلاَ يُوقِدُونَ سِرَاجًا وَيَضَعُونَهُ تَحْتَ الْمِكْيَالِ. فَلْيُضِئْ نُورُكُمْ كَذَلِكَ قُدَّامَ النَّاسِ لِيَرَوْا أَعْمَالَكُمُ الْحَسَنَةَ وَيُمَجِّدُوا أَبَاكُمُ الَّذِي فِي السَّمَاوَاتِ.",
      fr: "Vous êtes la lumière du monde. Une ville située sur une montagne ne peut être cachée. On n'allume pas non plus une lampe pour la mettre sous le boisseau. Que votre lumière luise ainsi devant les hommes, afin qu'ils voient vos bonnes œuvres, et qu'ils glorifient votre Père qui est dans les cieux.",
    },
  },
  {
    reference: "Matthew 6:33",
    text: {
      en: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
      ar: "وَلَكِنِ اطْلُبُوا أَوَّلاً مَلَكُوتَ اللهِ وَبِرَّهُ، وَهَذِهِ كُلُّهَا تُزَادُ لَكُمْ.",
      fr: "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus.",
    },
  },
  {
    reference: "Matthew 7:7-8",
    text: {
      en: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.",
      ar: "اسْأَلُوا تُعْطَوْا. اطْلُبُوا تَجِدُوا. اقْرَعُوا يُفْتَحْ لَكُمْ. لأَنَّ كُلَّ مَنْ يَسْأَلُ يَأْخُذُ، وَمَنْ يَطْلُبُ يَجِدُ، وَمَنْ يَقْرَعُ يُفْتَحُ لَهُ.",
      fr: "Demandez, et l'on vous donnera; cherchez, et vous trouverez; frappez, et l'on vous ouvrira. Car quiconque demande reçoit, celui qui cherche trouve, et l'on ouvre à celui qui frappe.",
    },
  },
  {
    reference: "Matthew 11:28-29",
    text: {
      en: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
      ar: "تَعَالَوْا إِلَيَّ يَا جَمِيعَ الْمُتْعَبِينَ وَالثَّقِيلِي الأَحْمَالِ وَأَنَا أُرِيحُكُمْ. احْمِلُوا نِيرِي عَلَيْكُمْ وَتَعَلَّمُوا مِنِّي لأَنِّي وَدِيعٌ وَمُتَوَاضِعُ الْقَلْبِ فَتَجِدُوا رَاحَةً لِنُفُوسِكُمْ.",
      fr: "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos. Prenez mon joug sur vous et recevez mes instructions, car je suis doux et humble de cœur; et vous trouverez du repos pour vos âmes.",
    },
  },
  {
    reference: "Matthew 16:18",
    text: {
      en: "And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.",
      ar: "وَأَنَا أَقُولُ لَكَ أَيْضًا: أَنْتَ بُطْرُسُ، وَعَلَى هَذِهِ الصَّخْرَةِ أَبْنِي كَنِيسَتِي، وَأَبْوَابُ الْجَحِيمِ لَنْ تَقْوَى عَلَيْهَا.",
      fr: "Et moi, je te dis que tu es Pierre, et que sur cette pierre je bâtirai mon Église, et que les portes du séjour des morts ne prévaudront point contre elle.",
    },
  },
  {
    reference: "Matthew 22:37-39",
    text: {
      en: "Jesus replied: Love the Lord your God with all your heart and with all your soul and with all your mind. This is the first and greatest commandment. And the second is like it: Love your neighbor as yourself.",
      ar: "فَقَالَ لَهُ يَسُوعُ: تُحِبُّ الرَّبَّ إِلَهَكَ مِنْ كُلِّ قَلْبِكَ وَمِنْ كُلِّ نَفْسِكَ وَمِنْ كُلِّ فِكْرِكَ. هَذَا هُوَ الْوَصِيَّةُ الأُولَى وَالْعُظْمَى. وَالثَّانِيَةُ مِثْلُهَا: تُحِبُّ قَرِيبَكَ كَنَفْسِكَ.",
      fr: "Jésus lui répondit: Tu aimeras le Seigneur, ton Dieu, de tout ton cœur, de toute ton âme, et de toute ta pensée. C'est le premier et le plus grand commandement. Et voici le second, qui lui est semblable: Tu aimeras ton prochain comme toi-même.",
    },
  },
  {
    reference: "Matthew 28:19-20",
    text: {
      en: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.",
      ar: "فَاذْهَبُوا وَتَلْمِذُوا جَمِيعَ الأُمَمِ وَعَمِّدُوهُمْ بِاسْمِ الآبِ وَالابْنِ وَالرُّوحِ الْقُدُسِ. وَعَلِّمُوهُمْ أَنْ يَحْفَظُوا جَمِيعَ مَا أَوْصَيْتُكُمْ بِهِ. وَهَا أَنَا مَعَكُمْ كُلَّ الأَيَّامِ إِلَى انْقِضَاءِ الدَّهْرِ.",
      fr: "Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit, et enseignez-leur à observer tout ce que je vous ai prescrit. Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde.",
    },
  },

  // ── Mark ──────────────────────────────────────────────
  {
    reference: "Mark 10:45",
    text: {
      en: "For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
      ar: "لأَنَّ ابْنَ الإِنْسَانِ لَمْ يَأْتِ لِيُخْدَمَ بَلْ لِيَخْدِمَ وَلِيَبْذِلَ نَفْسَهُ فِدْيَةً عَنْ كَثِيرِينَ.",
      fr: "Car le Fils de l'homme lui-même n'est pas venu pour être servi, mais pour servir et donner sa vie en rançon pour beaucoup.",
    },
  },
  {
    reference: "Mark 16:15",
    text: {
      en: "He said to them, 'Go into all the world and preach the gospel to all creation.'",
      ar: "وَقَالَ لَهُمُ: اذْهَبُوا إِلَى الْعَالَمِ أَجْمَعَ وَاكْرِزُوا بِالإِنْجِيلِ لِلْخَلِيقَةِ كُلِّهَا.",
      fr: "Puis il leur dit: Allez par tout le monde, et prêchez la bonne nouvelle à toute la création.",
    },
  },

  // ── Luke ──────────────────────────────────────────────
  {
    reference: "Luke 1:28",
    text: {
      en: "The angel went to her and said, 'Greetings, you who are highly favored! The Lord is with you.'",
      ar: "فَدَخَلَ إِلَيْهَا الْمَلاَكُ وَقَالَ: سَلاَمٌ لَكِ أَيَّتُهَا الْمُنْعَمُ عَلَيْهَا! الرَّبُّ مَعَكِ.",
      fr: "L'ange entra chez elle, et dit: Je te salue, toi à qui une grâce a été faite; le Seigneur est avec toi.",
    },
  },
  {
    reference: "Luke 1:46-47",
    text: {
      en: "And Mary said: 'My soul glorifies the Lord and my spirit rejoices in God my Savior.'",
      ar: "فَقَالَتْ مَرْيَمُ: تُعَظِّمُ نَفْسِي الرَّبَّ وَتَبْتَهِجُ رُوحِي بِاللهِ مُخَلِّصِي.",
      fr: "Marie dit alors: Mon âme exalte le Seigneur, et mon esprit se réjouit en Dieu mon Sauveur.",
    },
  },
  {
    reference: "Luke 2:10-11",
    text: {
      en: "But the angel said to them, 'Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.'",
      ar: "فَقَالَ لَهُمُ الْمَلاَكُ: لاَ تَخَافُوا فَهَا أَنَا أُبَشِّرُكُمْ بِفَرَحٍ عَظِيمٍ يَكُونُ لِجَمِيعِ الشَّعْبِ: أَنَّهُ وُلِدَ لَكُمُ الْيَوْمَ فِي مَدِينَةِ دَاوُدَ مُخَلِّصٌ هُوَ الْمَسِيحُ الرَّبُّ.",
      fr: "L'ange leur dit: Ne craignez point; car je vous annonce une bonne nouvelle, qui sera pour tout le peuple le sujet d'une grande joie: c'est qu'aujourd'hui, dans la ville de David, il vous est né un Sauveur, qui est le Christ, le Seigneur.",
    },
  },
  {
    reference: "Luke 15:7",
    text: {
      en: "I tell you that in the same way there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent.",
      ar: "أَقُولُ لَكُمْ: إِنَّهُ هَكَذَا يَكُونُ فَرَحٌ فِي السَّمَاءِ بِخَاطِئٍ وَاحِدٍ يَتُوبُ أَكْثَرَ مِنْ فَرَحٍ بِتِسْعَةٍ وَتِسْعِينَ بَارًّا لاَ يَحْتَاجُونَ إِلَى تَوْبَةٍ.",
      fr: "Je vous dis de même qu'il y aura plus de joie dans le ciel pour un seul pécheur qui se repent, que pour quatre-vingt-dix-neuf justes qui n'ont pas besoin de repentance.",
    },
  },
  {
    reference: "Luke 23:34",
    text: {
      en: "Jesus said, 'Father, forgive them, for they do not know what they are doing.'",
      ar: "وَقَالَ يَسُوعُ: يَا أَبَتَاهُ اغْفِرْ لَهُمْ لأَنَّهُمْ لاَ يَعْلَمُونَ مَاذَا يَفْعَلُونَ.",
      fr: "Jésus dit: Père, pardonne-leur, car ils ne savent ce qu'ils font.",
    },
  },
  {
    reference: "Luke 24:6",
    text: {
      en: "He is not here; he has risen! Remember how he told you, while he was still with you in Galilee.",
      ar: "لَيْسَ هُوَ هَهُنَا لَكِنَّهُ قَامَ. تَذَكَّرُوا كَيْفَ كَلَّمَكُمْ وَهُوَ بَعْدُ فِي الْجَلِيلِ.",
      fr: "Il n'est point ici, il est ressuscité. Souvenez-vous de quelle manière il vous a parlé, lorsqu'il était encore en Galilée.",
    },
  },

  // ── John ──────────────────────────────────────────────
  {
    reference: "John 1:1",
    text: {
      en: "In the beginning was the Word, and the Word was with God, and the Word was God.",
      ar: "فِي الْبَدْءِ كَانَ الْكَلِمَةُ وَالْكَلِمَةُ كَانَ عِنْدَ اللهِ وَكَانَ الْكَلِمَةُ اللهَ.",
      fr: "Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu.",
    },
  },
  {
    reference: "John 1:14",
    text: {
      en: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.",
      ar: "وَالْكَلِمَةُ صَارَ جَسَدًا وَحَلَّ بَيْنَنَا وَرَأَيْنَا مَجْدَهُ مَجْدًا كَمَا لِوَحِيدٍ مِنَ الآبِ مَمْلُوءًا نِعْمَةً وَحَقًّا.",
      fr: "Et la Parole a été faite chair, et elle a habité parmi nous, pleine de grâce et de vérité; et nous avons contemplé sa gloire, une gloire comme la gloire du Fils unique venu du Père.",
    },
  },
  {
    reference: "John 3:16",
    text: {
      en: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      ar: "لأَنَّهُ هَكَذَا أَحَبَّ اللهُ الْعَالَمَ حَتَّى بَذَلَ ابْنَهُ الْوَحِيدَ لِكَيْ لاَ يَهْلِكَ كُلُّ مَنْ يُؤْمِنُ بِهِ بَلْ تَكُونُ لَهُ الْحَيَاةُ الأَبَدِيَّةُ.",
      fr: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",
    },
  },
  {
    reference: "John 6:35",
    text: {
      en: "Then Jesus declared, 'I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.'",
      ar: "فَقَالَ لَهُمْ يَسُوعُ: أَنَا هُوَ خُبْزُ الْحَيَاةِ. مَنْ يُقْبِلْ إِلَيَّ فَلاَ يَجُوعُ وَمَنْ يُؤْمِنْ بِي فَلاَ يَعْطَشُ الْبَتَّةَ.",
      fr: "Jésus leur dit: Je suis le pain de vie. Celui qui vient à moi n'aura jamais faim, et celui qui croit en moi n'aura jamais soif.",
    },
  },
  {
    reference: "John 8:12",
    text: {
      en: "When Jesus spoke again to the people, he said, 'I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.'",
      ar: "ثُمَّ كَلَّمَهُمْ يَسُوعُ أَيْضًا قَائِلاً: أَنَا هُوَ نُورُ الْعَالَمِ. مَنْ يَتْبَعْنِي فَلاَ يَمْشِي فِي الظُّلْمَةِ بَلْ يَكُونُ لَهُ نُورُ الْحَيَاةِ.",
      fr: "Jésus leur parla de nouveau, et dit: Je suis la lumière du monde; celui qui me suit ne marchera pas dans les ténèbres, mais il aura la lumière de la vie.",
    },
  },
  {
    reference: "John 10:11",
    text: {
      en: "I am the good shepherd. The good shepherd lays down his life for the sheep.",
      ar: "أَنَا هُوَ الرَّاعِي الصَّالِحُ. وَالرَّاعِي الصَّالِحُ يَبْذِلُ نَفْسَهُ عَنِ الْخِرَافِ.",
      fr: "Je suis le bon berger. Le bon berger donne sa vie pour ses brebis.",
    },
  },
  {
    reference: "John 11:25-26",
    text: {
      en: "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die.'",
      ar: "قَالَ لَهَا يَسُوعُ: أَنَا هُوَ الْقِيَامَةُ وَالْحَيَاةُ. مَنْ آمَنَ بِي وَلَوْ مَاتَ فَسَيَحْيَا. وَكُلُّ مَنْ كَانَ حَيًّا وَآمَنَ بِي فَلَنْ يَمُوتَ إِلَى الأَبَدِ.",
      fr: "Jésus lui dit: Je suis la résurrection et la vie. Celui qui croit en moi vivra, quand même il serait mort; et quiconque vit et croit en moi ne mourra jamais.",
    },
  },
  {
    reference: "John 14:1-3",
    text: {
      en: "Do not let your hearts be troubled. You believe in God; believe also in me. My Father's house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you?",
      ar: "لاَ تَضْطَرِبْ قُلُوبُكُمْ. أَنْتُمْ تُؤْمِنُونَ بِاللهِ فَآمِنُوا بِي أَيْضًا. فِي بَيْتِ أَبِي مَنَازِلُ كَثِيرَةٌ. وَلَوْ لَمْ يَكُنْ كَذَلِكَ لَقُلْتُ لَكُمْ. أَنَا أَمْضِي لأُعِدَّ لَكُمْ مَكَانًا.",
      fr: "Que votre cœur ne se trouble point. Vous croyez en Dieu, croyez aussi en moi. Il y a plusieurs demeures dans la maison de mon Père. Si cela n'était pas, je vous l'aurais dit. Je vais vous préparer une place.",
    },
  },
  {
    reference: "John 14:6",
    text: {
      en: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
      ar: "قَالَ لَهُ يَسُوعُ: أَنَا هُوَ الطَّرِيقُ وَالْحَقُّ وَالْحَيَاةُ. لَيْسَ أَحَدٌ يَأْتِي إِلَى الآبِ إِلاَّ بِي.",
      fr: "Jésus lui dit: Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi.",
    },
  },
  {
    reference: "John 15:5",
    text: {
      en: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
      ar: "أَنَا الْكَرْمَةُ وَأَنْتُمُ الأَغْصَانُ. مَنْ يَثْبُتْ فِيَّ وَأَنَا فِيهِ هَذَا يَأْتِي بِثَمَرٍ كَثِيرٍ لأَنَّكُمْ بِدُونِي لاَ تَقْدِرُونَ أَنْ تَفْعَلُوا شَيْئًا.",
      fr: "Je suis le cep, vous êtes les sarments. Celui qui demeure en moi et en qui je demeure porte beaucoup de fruit, car sans moi vous ne pouvez rien faire.",
    },
  },
  {
    reference: "John 15:13",
    text: {
      en: "Greater love has no one than this: to lay down one's life for one's friends.",
      ar: "لَيْسَ لأَحَدٍ حُبٌّ أَعْظَمُ مِنْ هَذَا: أَنْ يَضَعَ أَحَدٌ نَفْسَهُ لأَجْلِ أَحِبَّائِهِ.",
      fr: "Il n'y a pas de plus grand amour que de donner sa vie pour ses amis.",
    },
  },
  {
    reference: "John 16:33",
    text: {
      en: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
      ar: "قَدْ كَلَّمْتُكُمْ بِهَذَا لِتَكُونَ لَكُمْ فِيَّ سَلاَمٌ. فِي الْعَالَمِ سَيَكُونُ لَكُمْ ضِيقٌ وَلَكِنْ ثِقُوا: أَنَا قَدْ غَلَبْتُ الْعَالَمَ.",
      fr: "Je vous ai dit ces choses, afin que vous ayez la paix en moi. Vous aurez des tribulations dans le monde; mais prenez courage, j'ai vaincu le monde.",
    },
  },
  {
    reference: "John 20:29",
    text: {
      en: "Then Jesus told him, 'Because you have seen me, you have believed; blessed are those who have not seen and yet have believed.'",
      ar: "قَالَ لَهُ يَسُوعُ: لأَنَّكَ رَأَيْتَنِي آمَنْتَ. طُوبَى لِلَّذِينَ آمَنُوا وَلَمْ يَرَوْا.",
      fr: "Jésus lui dit: Parce que tu m'as vu, tu as cru. Heureux ceux qui n'ont pas vu, et qui ont cru!",
    },
  },

  // ── Acts ──────────────────────────────────────────────
  {
    reference: "Acts 1:8",
    text: {
      en: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.",
      ar: "لَكِنَّكُمْ سَتَنَالُونَ قُوَّةً مَتَى حَلَّ الرُّوحُ الْقُدُسُ عَلَيْكُمْ. وَتَكُونُونَ لِي شُهُودًا فِي أُورُشَلِيمَ وَفِي كُلِّ الْيَهُودِيَّةِ وَالسَّامِرَةِ وَإِلَى أَقْصَى الأَرْضِ.",
      fr: "Mais vous recevrez une puissance, le Saint-Esprit survenant sur vous, et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre.",
    },
  },

  // ── Romans ────────────────────────────────────────────
  {
    reference: "Romans 3:23",
    text: {
      en: "For all have sinned and fall short of the glory of God.",
      ar: "إِذِ الْجَمِيعُ أَخْطَأُوا وَأَعْوَزَهُمْ مَجْدُ اللهِ.",
      fr: "Car tous ont péché et sont privés de la gloire de Dieu.",
    },
  },
  {
    reference: "Romans 5:8",
    text: {
      en: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
      ar: "وَلَكِنَّ اللهَ بَيَّنَ مَحَبَّتَهُ لَنَا لأَنَّهُ وَنَحْنُ بَعْدُ خُطَاةٌ مَاتَ الْمَسِيحُ عَنَّا.",
      fr: "Mais Dieu prouve son amour envers nous, en ce que, lorsque nous étions encore des pécheurs, Christ est mort pour nous.",
    },
  },
  {
    reference: "Romans 6:23",
    text: {
      en: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
      ar: "لأَنَّ أُجْرَةَ الْخَطِيَّةِ هِيَ مَوْتٌ وَأَمَّا هِبَةُ اللهِ فَهِيَ حَيَاةٌ أَبَدِيَّةٌ فِي الْمَسِيحِ يَسُوعَ رَبِّنَا.",
      fr: "Car le salaire du péché, c'est la mort; mais le don gratuit de Dieu, c'est la vie éternelle en Jésus-Christ notre Seigneur.",
    },
  },
  {
    reference: "Romans 8:28",
    text: {
      en: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      ar: "وَنَحْنُ نَعْلَمُ أَنَّ كُلَّ الأَشْيَاءِ تَعْمَلُ مَعًا لِلْخَيْرِ لِلَّذِينَ يُحِبُّونَ اللهَ الَّذِينَ هُمْ مَدْعُوُّونَ حَسَبَ قَصْدِهِ.",
      fr: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.",
    },
  },
  {
    reference: "Romans 8:38-39",
    text: {
      en: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
      ar: "لأَنِّي مُوقِنٌ بِأَنَّهُ لاَ مَوْتَ وَلاَ حَيَاةَ وَلاَ مَلاَئِكَةَ وَلاَ رُؤَسَاءَ وَلاَ قُوَّاتٌ وَلاَ أُمُورٌ حَاضِرَةٌ وَلاَ مُسْتَقْبَلَةٌ وَلاَ عُلُوٌّ وَلاَ عُمْقٌ وَلاَ خَلِيقَةٌ أُخْرَى تَقْدِرُ أَنْ تَفْصِلَنَا عَنْ مَحَبَّةِ اللهِ الَّتِي فِي الْمَسِيحِ يَسُوعَ رَبِّنَا.",
      fr: "Car j'ai l'assurance que ni la mort ni la vie, ni les anges ni les dominations, ni les choses présentes ni les choses à venir, ni les puissances, ni la hauteur ni la profondeur, ni aucune autre créature ne pourra nous séparer de l'amour de Dieu manifesté en Jésus-Christ notre Seigneur.",
    },
  },
  {
    reference: "Romans 12:1-2",
    text: {
      en: "Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God — this is your true and proper worship. Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
      ar: "فَأَطْلُبُ إِلَيْكُمْ أَيُّهَا الإِخْوَةُ بِمَرَاحِمِ اللهِ أَنْ تُقَدِّمُوا أَجْسَادَكُمْ ذَبِيحَةً حَيَّةً مُقَدَّسَةً مَرْضِيَّةً عِنْدَ اللهِ. وَلاَ تُشَاكِلُوا هَذَا الدَّهْرَ بَلْ تَغَيَّرُوا عَنْ شَكْلِكُمْ بِتَجْدِيدِ أَذْهَانِكُمْ.",
      fr: "Je vous exhorte donc, frères, par les compassions de Dieu, à offrir vos corps comme un sacrifice vivant, saint, agréable à Dieu: ce sera de votre part un culte raisonnable. Ne vous conformez pas au siècle présent, mais soyez transformés par le renouvellement de l'intelligence.",
    },
  },

  // ── 1 Corinthians ─────────────────────────────────────
  {
    reference: "1 Corinthians 13:4-7",
    text: {
      en: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.",
      ar: "الْمَحَبَّةُ تَتَأَنَّى وَتَرْفُقُ. الْمَحَبَّةُ لاَ تَحْسُدُ. الْمَحَبَّةُ لاَ تَتَفَاخَرُ وَلاَ تَنْتَفِخُ. لاَ تَقْبُحُ وَلاَ تَطْلُبُ مَا لِنَفْسِهَا وَلاَ تَحْتَدُّ وَلاَ تَظُنُّ السُّوءَ. لاَ تَفْرَحُ بِالإِثْمِ بَلْ تَفْرَحُ بِالْحَقِّ. وَتَحْتَمِلُ كُلَّ شَيْءٍ وَتُصَدِّقُ كُلَّ شَيْءٍ وَتَأْمُلُ كُلَّ شَيْءٍ وَتَصْبِرُ عَلَى كُلِّ شَيْءٍ.",
      fr: "La charité est patiente, elle est pleine de bonté; la charité n'est point envieuse; la charité ne se vante point, elle ne s'enfle point d'orgueil. Elle ne fait rien de malhonnête, elle ne cherche point son intérêt, elle ne s'irrite point, elle ne soupçonne point le mal. Elle ne se réjouit point de l'injustice, mais elle se réjouit de la vérité. Elle excuse tout, elle croit tout, elle espère tout, elle supporte tout.",
    },
  },
  {
    reference: "1 Corinthians 15:55-57",
    text: {
      en: "'Where, O death, is your victory? Where, O death, is your sting?' The sting of death is sin, and the power of sin is the law. But thanks be to God! He gives us the victory through our Lord Jesus Christ.",
      ar: "أَيْنَ شَوْكَتُكَ يَا مَوْتُ؟ أَيْنَ غَلَبَتُكَ يَا هَاوِيَةُ؟ شَوْكَةُ الْمَوْتِ هِيَ الْخَطِيَّةُ وَقُوَّةُ الْخَطِيَّةِ هِيَ النَّامُوسُ. وَلَكِنْ شُكْرًا لِلَّهِ الَّذِي يَمْنَحُنَا الْغَلَبَةَ بِرَبِّنَا يَسُوعَ الْمَسِيحِ.",
      fr: "O mort, où est ta victoire? O mort, où est ton aiguillon? L'aiguillon de la mort, c'est le péché; et la puissance du péché, c'est la loi. Mais grâces soient rendues à Dieu, qui nous donne la victoire par notre Seigneur Jésus-Christ!",
    },
  },

  // ── 2 Corinthians ─────────────────────────────────────
  {
    reference: "2 Corinthians 5:17",
    text: {
      en: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
      ar: "إِذَنْ إِنْ كَانَ أَحَدٌ فِي الْمَسِيحِ فَهُوَ خَلِيقَةٌ جَدِيدَةٌ. الأَشْيَاءُ الْعَتِيقَةُ قَدْ مَضَتْ. هَا الْكُلُّ قَدْ صَارَ جَدِيدًا.",
      fr: "Si quelqu'un est en Christ, il est une nouvelle créature. Les choses anciennes sont passées; voici, toutes choses sont devenues nouvelles.",
    },
  },
  {
    reference: "2 Corinthians 12:9",
    text: {
      en: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.",
      ar: "فَقَالَ لِي: تَكْفِيكَ نِعْمَتِي لأَنَّ قُوَّتِي فِي الضُّعْفِ تَكْمُلُ. فَبِكُلِّ سُرُورٍ أَفْتَخِرُ بِضَعَفَاتِي لِتَحِلَّ عَلَيَّ قُوَّةُ الْمَسِيحِ.",
      fr: "Il m'a dit: Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse. Je me glorifierai donc bien plus volontiers de mes faiblesses, afin que la puissance de Christ repose sur moi.",
    },
  },

  // ── Galatians ─────────────────────────────────────────
  {
    reference: "Galatians 2:20",
    text: {
      en: "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
      ar: "مَعَ الْمَسِيحِ صُلِبْتُ. فَأَحْيَا لاَ أَنَا بَلِ الْمَسِيحُ يَحْيَا فِيَّ. وَمَا أَحْيَاهُ الآنَ فِي الْجَسَدِ فَإِنِّي أَحْيَاهُ فِي الإِيمَانِ ابْنِ اللهِ الَّذِي أَحَبَّنِي وَأَسْلَمَ نَفْسَهُ لأَجْلِي.",
      fr: "J'ai été crucifié avec Christ; et si je vis, ce n'est plus moi qui vis, c'est Christ qui vit en moi; si je vis maintenant dans la chair, je vis dans la foi au Fils de Dieu, qui m'a aimé et qui s'est livré lui-même pour moi.",
    },
  },
  {
    reference: "Galatians 5:22-23",
    text: {
      en: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
      ar: "وَأَمَّا ثَمَرُ الرُّوحِ فَهُوَ: مَحَبَّةٌ فَرَحٌ سَلاَمٌ طُولُ أَنَاةٍ لُطْفٌ صَلاَحٌ إِيمَانٌ وَدَاعَةٌ تَعَفُّفٌ. ضِدَّ أَمْثَالِ هَذِهِ لَيْسَ نَامُوسٌ.",
      fr: "Mais le fruit de l'Esprit, c'est l'amour, la joie, la paix, la patience, la bonté, la bénignité, la fidélité, la douceur, la tempérance. La loi n'est pas contre ces choses.",
    },
  },

  // ── Ephesians ─────────────────────────────────────────
  {
    reference: "Ephesians 2:8-9",
    text: {
      en: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.",
      ar: "لأَنَّكُمْ بِالنِّعْمَةِ مُخَلَّصُونَ بِالإِيمَانِ وَذَلِكَ لَيْسَ مِنْكُمْ. هُوَ عَطِيَّةُ اللهِ. لَيْسَ مِنْ أَعْمَالٍ لِئَلاَّ يَفْتَخِرَ أَحَدٌ.",
      fr: "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu. Ce n'est point par les œuvres, afin que personne ne se glorifie.",
    },
  },
  {
    reference: "Ephesians 3:20",
    text: {
      en: "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us, to him be glory in the church and in Christ Jesus throughout all generations.",
      ar: "وَلِلَّذِي يَقْدِرُ أَنْ يَفْعَلَ فَوْقَ كُلِّ شَيْءٍ أَكْثَرَ مِمَّا نَطْلُبُ أَوْ نَفْتَكِرُ بِحَسَبِ الْقُوَّةِ الْعَامِلَةِ فِينَا. لَهُ الْمَجْدُ فِي الْكَنِيسَةِ فِي الْمَسِيحِ يَسُوعَ إِلَى جَمِيعِ أَجْيَالِ الدَّهْرِ الدَّهْرِ.",
      fr: "Or, à celui qui peut faire, par la puissance qui agit en nous, infiniment au-delà de tout ce que nous demandons ou pensons, à lui soit la gloire dans l'Église et en Jésus-Christ, dans toutes les générations, aux siècles des siècles!",
    },
  },

  // ── Philippians ───────────────────────────────────────
  {
    reference: "Philippians 4:4",
    text: {
      en: "Rejoice in the Lord always. I will say it again: Rejoice!",
      ar: "اِفْرَحُوا فِي الرَّبِّ كُلَّ حِينٍ. وَأَقُولُ أَيْضًا: افْرَحُوا.",
      fr: "Réjouissez-vous toujours dans le Seigneur; je le répète, réjouissez-vous.",
    },
  },
  {
    reference: "Philippians 4:6-7",
    text: {
      en: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
      ar: "لاَ تَهْتَمُّوا بِشَيْءٍ بَلْ فِي كُلِّ شَيْءٍ بِالصَّلاَةِ وَالتَّضَرُّعِ مَعَ الشُّكْرِ لِتُعْلَمْ طِلْبَاتُكُمْ لَدَى اللهِ. وَسَلاَمُ اللهِ الَّذِي يَفُوقُ كُلَّ عَقْلٍ سَيَحْفَظُ قُلُوبَكُمْ وَأَذْهَانَكُمْ فِي الْمَسِيحِ يَسُوعَ.",
      fr: "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. Et la paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ.",
    },
  },
  {
    reference: "Philippians 4:13",
    text: {
      en: "I can do all this through him who gives me strength.",
      ar: "أَسْتَطِيعُ كُلَّ شَيْءٍ فِي الْمَسِيحِ الَّذِي يُقَوِّينِي.",
      fr: "Je puis tout par celui qui me fortifie.",
    },
  },

  // ── Colossians ────────────────────────────────────────
  {
    reference: "Colossians 3:12-13",
    text: {
      en: "Therefore, as God's chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience. Bear with each other and forgive one another.",
      ar: "فَالْبِسُوا كَمُخْتَارِي اللهِ الْقِدِّيسِينَ الْمَحْبُوبِينَ أَحْشَاءَ رَحَمَاتٍ وَلُطْفًا وَتَوَاضُعًا وَوَدَاعَةً وَطُولَ أَنَاةٍ. مُحْتَمِلِينَ بَعْضُكُمْ بَعْضًا وَمُسَامِحِينَ بَعْضُكُمْ بَعْضًا.",
      fr: "Revêtez-vous donc, comme des élus de Dieu, saints et bien-aimés, de tendres miséricordes, de bienveillance, d'humilité, de douceur, de patience. Supportez-vous les uns les autres, et, si l'un a sujet de se plaindre de l'autre, pardonnez-vous réciproquement.",
    },
  },

  // ── 1 Thessalonians ───────────────────────────────────
  {
    reference: "1 Thessalonians 5:16-18",
    text: {
      en: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
      ar: "افْرَحُوا فِي كُلِّ حِينٍ. صَلُّوا بِلاَ انْقِطَاعٍ. فِي كُلِّ شَيْءٍ اشْكُرُوا لأَنَّ هَذِهِ هِيَ إِرَادَةُ اللهِ فِي الْمَسِيحِ يَسُوعَ مِنْ جِهَتِكُمْ.",
      fr: "Soyez toujours joyeux. Priez sans cesse. Rendez grâces en toutes choses, car c'est à votre égard la volonté de Dieu en Jésus-Christ.",
    },
  },

  // ── 2 Timothy ─────────────────────────────────────────
  {
    reference: "2 Timothy 1:7",
    text: {
      en: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      ar: "لأَنَّ اللهَ لَمْ يُعْطِنَا رُوحَ الْجُبْنِ بَلْ رُوحَ الْقُوَّةِ وَالْمَحَبَّةِ وَالتَّعْقُّلِ.",
      fr: "Car ce n'est pas un esprit de timidité que Dieu nous a donné, mais un esprit de force, d'amour et de sagesse.",
    },
  },
  {
    reference: "2 Timothy 3:16-17",
    text: {
      en: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.",
      ar: "كُلُّ الْكِتَابِ هُوَ مُوحًى بِهِ مِنَ اللهِ وَنَافِعٌ لِلتَّعْلِيمِ وَالتَّوْبِيخِ وَالتَّقْوِيمِ وَالتَّأْدِيبِ الَّذِي فِي الْبِرِّ. لِكَيْ يَكُونَ إِنْسَانُ اللهِ كَامِلاً مُتَأَهِّبًا لِكُلِّ عَمَلٍ صَالِحٍ.",
      fr: "Toute Écriture est inspirée de Dieu, et utile pour enseigner, pour convaincre, pour corriger, pour instruire dans la justice, afin que l'homme de Dieu soit accompli et propre à toute bonne œuvre.",
    },
  },

  // ── Hebrews ───────────────────────────────────────────
  {
    reference: "Hebrews 11:1",
    text: {
      en: "Now faith is confidence in what we hope for and assurance about what we do not see.",
      ar: "وَالإِيمَانُ هُوَ الثِّقَةُ بِمَا يُرْجَى وَالإِيقَانُ بِأُمُورٍ لاَ تُرَى.",
      fr: "Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.",
    },
  },
  {
    reference: "Hebrews 12:1-2",
    text: {
      en: "Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.",
      ar: "لِذَلِكَ نَحْنُ أَيْضًا إِذْ يُحِيطُ بِنَا سَحَابَةٌ مِنَ الشُّهُودِ مِثْلُ هَذِهِ لِنَطْرَحْ كُلَّ ثِقْلٍ وَالْخَطِيَّةَ الْمُحِيطَةَ بِنَا وَلْنُحَاضِرْ بِالصَّبْرِ فِي الْجِهَادِ الْمَوْضُوعِ أَمَامَنَا. نَاظِرِينَ إِلَى رَئِيسِ الإِيمَانِ وَمُكَمِّلِهِ يَسُوعَ.",
      fr: "C'est pourquoi, nous aussi, puisque nous sommes environnés d'une si grande nuée de témoins, rejetons tout fardeau, et le péché qui nous enveloppe si facilement, et courons avec persévérance dans la carrière qui nous est ouverte, ayant les regards sur Jésus, le chef et le consommateur de la foi.",
    },
  },
  {
    reference: "Hebrews 13:8",
    text: {
      en: "Jesus Christ is the same yesterday and today and forever.",
      ar: "يَسُوعُ الْمَسِيحُ هُوَ هُوَ أَمْسًا وَالْيَوْمَ وَإِلَى الأَبَدِ.",
      fr: "Jésus-Christ est le même hier, aujourd'hui, et éternellement.",
    },
  },

  // ── James ─────────────────────────────────────────────
  {
    reference: "James 1:17",
    text: {
      en: "Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.",
      ar: "كُلُّ عَطِيَّةٍ صَالِحَةٍ وَكُلُّ مَوْهِبَةٍ تَامَّةٍ هِيَ مِنْ فَوْقُ نَازِلَةٌ مِنْ عِنْدِ أَبِي الأَنْوَارِ الَّذِي لَيْسَ عِنْدَهُ تَغَيُّرٌ وَلاَ ظِلُّ دَوَرَانٍ.",
      fr: "Tout don excellent et tout don parfait descendent d'en haut, du Père des lumières, chez qui il n'y a ni changement ni ombre de variation.",
    },
  },
  {
    reference: "James 1:22",
    text: {
      en: "Do not merely listen to the word, and so deceive yourselves. Do what it says.",
      ar: "وَلَكِنْ كُونُوا عَامِلِينَ بِالْكَلِمَةِ وَلَيْسَ سَامِعِينَ فَقَطْ تَاغِّينَ أَنْفُسَكُمْ.",
      fr: "Mettez en pratique la parole, et ne vous bornez pas à l'écouter, en vous abusant vous-mêmes par de faux raisonnements.",
    },
  },

  // ── 1 Peter ───────────────────────────────────────────
  {
    reference: "1 Peter 2:9",
    text: {
      en: "But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      ar: "وَأَمَّا أَنْتُمْ فَجِنْسٌ مُخْتَارٌ وَكَهَنُوتٌ مُلُوكِيٌّ وَأُمَّةٌ مُقَدَّسَةٌ وَشَعْبُ اقْتِنَاءٍ لِتُخْبِرُوا بِفَضَائِلِ الَّذِي دَعَاكُمْ مِنَ الظُّلْمَةِ إِلَى نُورِهِ الْعَجِيبِ.",
      fr: "Mais vous, vous êtes une race élue, un sacerdoce royal, une nation sainte, un peuple acquis, afin que vous annonciez les vertus de celui qui vous a appelés des ténèbres à son admirable lumière.",
    },
  },
  {
    reference: "1 Peter 5:7",
    text: {
      en: "Cast all your anxiety on him because he cares for you.",
      ar: "مُلْقِينَ كُلَّ هَمِّكُمْ عَلَيْهِ لأَنَّهُ هُوَ يَعْتَنِي بِكُمْ.",
      fr: "Déchargez-vous sur lui de tous vos soucis, car il prend soin de vous.",
    },
  },

  // ── 1 John ────────────────────────────────────────────
  {
    reference: "1 John 4:7-8",
    text: {
      en: "Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God. Whoever does not love does not know God, because God is love.",
      ar: "أَيُّهَا الأَحِبَّاءُ لِنُحِبَّ بَعْضُنَا بَعْضًا لأَنَّ الْمَحَبَّةَ هِيَ مِنَ اللهِ وَكُلُّ مَنْ يُحِبُّ فَقَدْ وُلِدَ مِنَ اللهِ وَيَعْرِفُ اللهَ. وَأَمَّا مَنْ لاَ يُحِبُّ فَلَمْ يَعْرِفِ اللهَ لأَنَّ اللهَ مَحَبَّةٌ.",
      fr: "Bien-aimés, aimons-nous les uns les autres; car l'amour est de Dieu, et quiconque aime est né de Dieu et connaît Dieu. Celui qui n'aime pas n'a pas connu Dieu, car Dieu est amour.",
    },
  },
  {
    reference: "1 John 4:19",
    text: {
      en: "We love because he first loved us.",
      ar: "نَحْنُ نُحِبُّهُ لأَنَّهُ هُوَ أَحَبَّنَا أَوَّلاً.",
      fr: "Pour nous, nous l'aimons, parce qu'il nous a aimés le premier.",
    },
  },

  // ── Revelation ────────────────────────────────────────
  {
    reference: "Revelation 3:20",
    text: {
      en: "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.",
      ar: "هَا أَنَا وَاقِفٌ عَلَى الْبَابِ وَأَقْرَعُ. إِنْ سَمِعَ أَحَدٌ صَوْتِي وَفَتَحَ الْبَابَ أَدْخُلُ إِلَيْهِ وَأَتَعَشَّى مَعَهُ وَهُوَ مَعِي.",
      fr: "Voici, je me tiens à la porte, et je frappe. Si quelqu'un entend ma voix et ouvre la porte, j'entrerai chez lui, je souperai avec lui, et il soupera avec moi.",
    },
  },
  {
    reference: "Revelation 21:4",
    text: {
      en: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
      ar: "وَسَيَمْسَحُ اللهُ كُلَّ دَمْعَةٍ مِنْ عُيُونِهِمْ وَالْمَوْتُ لاَ يَكُونُ بَعْدُ وَلاَ حُزْنٌ وَلاَ صُرَاخٌ وَلاَ وَجَعٌ لاَ يَكُونُ بَعْدُ لأَنَّ الأُمُورَ الأُولَى قَدْ مَضَتْ.",
      fr: "Il essuiera toute larme de leurs yeux, et la mort ne sera plus, et il n'y aura plus ni deuil, ni cri, ni douleur, car les premières choses ont disparu.",
    },
  },
  {
    reference: "Revelation 22:13",
    text: {
      en: "I am the Alpha and the Omega, the First and the Last, the Beginning and the End.",
      ar: "أَنَا الأَلِفُ وَالْيَاءُ الْبِدَايَةُ وَالنِّهَايَةُ الأَوَّلُ وَالآخِرُ.",
      fr: "Je suis l'alpha et l'oméga, le premier et le dernier, le commencement et la fin.",
    },
  },
];

module.exports = { VERSES };
