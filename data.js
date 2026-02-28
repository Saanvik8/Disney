// data.js - all the disney film + mood data
// this file is just the content, main.js handles all the logic

// mood data object - key is the mood name
const M = {

  lonely: {
    c: '#4a6fa5',
    bg: 'radial-gradient(ellipse at 30% 20%,#1a2d5a,#06080f)',
    p: '#6a8fc5',
    label: 'Feeling lonely',
    hl: 'Stories that <em>understand</em> you',
    tl: "You don't have to explain it. These worlds already know.",
    films: [
      {
        e: '🐠', t: 'Finding Nemo', y: 'Disney · Pixar · 2003',
        r: 'About crossing an entire ocean because love refuses to give up.',
        pr: '🐠', pn: 'Dory', ob: '💙',
        bg: 'linear-gradient(135deg,#0a3a6a,#041520)',
        lb: 'radial-gradient(ellipse at 40% 60%,#0a3060,#020810)',
        card: {
          pw: 'The gift of radical forgiveness — she forgets hurt as fast as pain',
          st: 'Fearless optimism, pure compassion, zero self-pity',
          wk: 'Short-term memory loss leaves her vulnerable',
          fe: 'Being truly, permanently forgotten by those she loves',
          al: ['Marlin', 'Nemo', 'Mr. Ray'],
          en: ['Shark Crew', 'The deep-sea dark'],
          fm: "Dory rewrites the helpless sidekick entirely. Her neurodivergence is not fixed — it's the whole point. She is the protagonist of her own rescue.",
          rar: 'Legendary',
          q: '"Just keep swimming."'
        },
        ch: [
          { a: 'Act I', ti: "I forget everything — except how to keep going", ob: '🌊', pv: "Every morning the world is new again. I don't know your name yet. But I know this: the ocean is wide and I am not afraid of it. Maybe forgetting is its own kind of freedom.", q: '"Just keep swimming."' },
          { a: 'Act II', ti: "He needed me and I didn't even know it", ob: '🐡', pv: "There was a small fish who had lost his father, or a father who had lost his son. I couldn't always tell which. But I remembered that something mattered. So we kept swimming.", q: '"I remembered something! Not everything... but something."' },
          { a: 'Act III', ti: "Home is a feeling, not a place", ob: '🐚', pv: "When we found him and the reef glittered, I understood: I had been searching too, this whole time. I found something I didn't know I'd lost.", q: '"I don\'t want to forget this. I don\'t want to forget you."' }
        ]
      },
      {
        e: '🌺', t: 'Lilo & Stitch', y: 'Disney · 2002',
        r: 'About being the odd one out and finding your ohana anyway.',
        pr: '🌺', pn: 'Lilo', ob: '📸',
        bg: 'linear-gradient(135deg,#1a3a5a,#060810)',
        lb: 'radial-gradient(ellipse at 40% 60%,#0a2040,#020408)',
        card: {
          pw: 'The ability to love something dangerous until it becomes gentle',
          st: 'Fierce loyalty, radical acceptance, grief transformed into belonging',
          wk: 'Grief makes her unpredictable and isolated',
          fe: 'Being abandoned again — like she was when her parents died',
          al: ['Stitch', 'Nani', 'Jumba & Pleakley'],
          en: ['Gantu', 'Loss'],
          fm: "Lilo's emotional intelligence is treated as wisdom. A grieving Hawaiian child leads the entire film's moral. Her 'weirdness' is never fixed — it's the point.",
          rar: 'Epic',
          q: '"Ohana means family. Nobody gets left behind."'
        },
        ch: [
          { a: 'Act I', ti: "Nobody wanted me. So I wanted a monster.", ob: '🛸', pv: "They called me weird. Too loud, too strange, too much. So when a blue creature crash-landed and was just as wrong as me — I said: this one is mine.", q: '"This is my family. I found it all on my own."' },
          { a: 'Act II', ti: "He was built to destroy. I gave him something to protect.", ob: '🏄', pv: "Stitch was programmed for chaos. But I gave him Elvis and surfboards and photographs and a reason to stay. The part they couldn't code out — chose us.", q: '"Ohana means family."' },
          { a: 'Act III', ti: "Broken can still be good", ob: '💙', pv: "When they came to take him, I said no. He was mine and I was his. That's what ohana means — not the perfect ones. Especially the broken ones.", q: '"I\'m lost."' }
        ]
      },
      {
        e: '🤖', t: 'WALL·E', y: 'Disney · Pixar · 2008',
        r: 'A love born from loneliness — proving connection always finds a way.',
        pr: '🤖', pn: 'EVE', ob: '🌱',
        bg: 'linear-gradient(135deg,#2a2a0a,#0a0a04)',
        lb: 'radial-gradient(ellipse at 40% 60%,#1a1a06,#040402)',
        card: {
          pw: 'Directed energy — can reshape matter with a thought',
          st: 'Precision, mission clarity, fierce protection of what she loves',
          wk: 'Shuts down emotionally when override-mode takes over',
          fe: 'Failing her mission. Being alone after knowing love.',
          al: ['WALL·E', 'M-O', 'The Captain'],
          en: ['AUTO', 'GO-4'],
          fm: "EVE is physically stronger than every character in the film. She protects him. The love story inverts the classic Disney dynamic completely.",
          rar: 'Legendary',
          q: '"WALL·E."'
        },
        ch: [
          { a: 'Act I', ti: "I was built to find something. I found him instead.", ob: '⚡', pv: "My directive: find life, return, report. But there was this small rusted machine who held a plant like it was the most precious thing in existence. He was the most alive thing I had ever scanned.", q: '"EVE?"' },
          { a: 'Act II', ti: "What do you do when your mission becomes him", ob: '🌿', pv: "Protocol said take the plant. Logic said return. But he followed me across the galaxy. He held my hand when I was empty. You cannot run a calculation on that.", q: '"WALL·E, plant."' },
          { a: 'Act III', ti: "He taught a dead world how to grow again", ob: '💚', pv: "The directive was life. He showed me what that actually meant. Not biology. Not data. This — the warmth of a hand. The word that means something.", q: '"[holds hand]"' }
        ]
      }
    ]
  },

  brave: {
    c: '#c0392b',
    bg: 'radial-gradient(ellipse at 30% 20%,#2a0a08,#06080f)',
    p: '#e05a4a',
    label: 'Feeling brave',
    hl: 'Stories as <em>fearless</em> as you are',
    tl: "Courage isn't the absence of fear. These characters knew that.",
    films: [
      {
        e: '🏹', t: 'Brave', y: 'Disney · Pixar · 2012',
        r: "About writing your own story when everyone has already written it for you.",
        pr: '🧡', pn: 'Merida', ob: '🏹',
        bg: 'linear-gradient(135deg,#2a0a0a,#060404)',
        lb: 'radial-gradient(ellipse at 40% 60%,#1a0606,#040202)',
        card: {
          pw: 'Masterful archer — never misses what she truly aims for',
          st: 'Courage, independence, refusal to be defined by anyone else',
          wk: 'Pride. Cannot accept help until it is almost too late.',
          fe: 'Losing her mother — and the love between them',
          al: ["Queen Elinor", "The Wisps", "Angus"],
          en: ["Mor'du", "Her own stubbornness"],
          fm: "Merida is the first Disney princess to explicitly reject marriage as her story's resolution. Her fight is about authorship — who gets to write her life.",
          rar: 'Epic',
          q: '"Our fate lives within us. You only have to be brave enough to see it."'
        },
        ch: [
          { a: 'Act I', ti: "My bow was my freedom. My arrow, my answer.", ob: '🎯', pv: "They wanted me in a corset and a veil. I had the highlands and my horse and an arrow that always found its mark. My fate was already written, they said. So I said: let me rewrite it.", q: '"I want my freedom!"' },
          { a: 'Act II', ti: "I turned my mother into a bear. Love is complicated.", ob: '🐻', pv: "I gave her a cake to change her fate and didn't know it would change her form. Watching my mother become something frightened — that was my spell. My selfishness, dressed as courage.", q: '"Mum? Are you in there?"' },
          { a: 'Act III', ti: "I stitched us back together with my own hands", ob: '🪡', pv: "The tapestry I had slashed in anger. I had to mend it — not just the cloth but everything between us. When I wrapped it around her and said I loved her, that was the real magic.", q: '"Our fate lives within us."' }
        ]
      },
      {
        e: '🪷', t: 'Mulan', y: 'Disney · 1998',
        r: 'About choosing truth over safety and fighting for what matters most.',
        pr: '🪷', pn: 'Mulan', ob: '🪖',
        bg: 'linear-gradient(135deg,#3a1a00,#080400)',
        lb: 'radial-gradient(ellipse at 40% 60%,#200e00,#040200)',
        card: {
          pw: 'Strategic brilliance under pressure — wins by thinking differently',
          st: 'Resourcefulness, determination, love that transcends duty',
          wk: 'Internalised shame about being "not enough"',
          fe: 'Bringing dishonour. Being seen as fundamentally wrong.',
          al: ['Mushu', 'Cri-Kee', 'Shang', 'Khan'],
          en: ['Shan Yu', 'Imperial conformity'],
          fm: "Mulan doesn't win by becoming a man — she wins by thinking differently than every man on the battlefield. She predates the term but defines feminist heroism.",
          rar: 'Legendary',
          q: '"The flower that blooms in adversity is the rarest of all."'
        },
        ch: [
          { a: 'Act I', ti: "I took my father's armor and left before dawn", ob: '⚔️', pv: "He was too proud to survive the war. I was too afraid to watch him die trying. So I cut my hair. I took his sword. I rode into the dark, praying the ancestors were watching.", q: '"The flower that blooms in adversity is the most rare and beautiful of all."' },
          { a: 'Act II', ti: "I became the soldier they needed — not the man they thought", ob: '🏔️', pv: "I trained until my hands bled. I fought until I stopped fearing it. Somewhere in the snow I stopped pretending to be Li Shang's soldier and became my own.", q: '"My greatest gift and honor is having you for a daughter."' },
          { a: 'Act III', ti: "I saved China. They still couldn't see me.", ob: '🏮', pv: "I stopped the Huns with a cannon and quick thinking. When they found out I was a woman — they turned away. Until Shang didn't. That mattered most.", q: '"I think you\'re worth fighting for."' }
        ]
      },
      {
        e: '❄️', t: 'Frozen', y: 'Disney · 2013',
        r: 'About finding that love — not fear — is where your power truly lives.',
        pr: '❄️', pn: 'Elsa', ob: '❄️',
        bg: 'linear-gradient(135deg,#0a1a3a,#040608)',
        lb: 'radial-gradient(ellipse at 40% 60%,#061020,#020406)',
        card: {
          pw: 'Cryokinesis — can create entire worlds from pure emotion',
          st: 'Self-possession, creativity, deep love expressed through restraint',
          wk: 'Isolation as self-protection becomes self-imprisonment',
          fe: 'Hurting those she loves most. Being truly seen.',
          al: ['Anna', 'Kristoff', 'Sven', 'Olaf'],
          en: ['Hans', 'The Duke of Weselton', 'Her own fear'],
          fm: "Elsa's magic is literally her emotions — the film's message is that repression was always the real curse. Female power is not something to suppress.",
          rar: 'Legendary',
          q: '"Let it go."'
        },
        ch: [
          { a: 'Act I', ti: "Conceal, don't feel. Don't let them see.", ob: '🧤', pv: "They put gloves on my hands at eight years old and told me to hold it in. Every snowflake made in secret felt like guilt. I loved Anna so much it terrified me. So I buried everything in ice.", q: '"Conceal, don\'t feel, don\'t let them see."' },
          { a: 'Act II', ti: "I let it go. And the whole mountain froze.", ob: '🏔️', pv: "The night I ran was the most terrifying and most free I've ever felt. I built a palace from everything they told me to hide. I didn't know I was also building a cage.", q: '"Let it go — that perfect girl is gone."' },
          { a: 'Act III', ti: "She saved me. And I finally understood love.", ob: '💙', pv: "Anna stepped between me and a sword. She froze solid to save me. When she thawed — I understood what I'd done wrong all along. I had been so afraid of hurting her that I never let her love me.", q: '"Love is an open door."' }
        ]
      }
    ]
  },

  nostalgic: {
    c: '#8e44ad',
    bg: 'radial-gradient(ellipse at 30% 20%,#1a0830,#06080f)',
    p: '#be6ee4',
    label: 'Feeling nostalgic',
    hl: 'Stories that take you <em>back</em>',
    tl: 'Some memories are better as feelings than facts.',
    films: [
      {
        e: '🧚', t: 'Cinderella', y: 'Disney · 1950',
        r: 'About holding onto dreams even when the world grinds them down.',
        pr: '👗', pn: 'Cinderella', ob: '👠',
        bg: 'linear-gradient(135deg,#1a1040,#060408)',
        lb: 'radial-gradient(ellipse at 40% 60%,#0e0828,#030206)',
        card: {
          pw: 'Extraordinary grace under cruelty — impossible kindness',
          st: 'Resilience, warmth, finding joy in the smallest things',
          wk: 'Waits to be rescued. Accepts injustice too long.',
          fe: 'That the dream was never real. That she deserves the attic.',
          al: ['Jaq & Gus', 'Fairy Godmother', 'Prince Charming'],
          en: ['Lady Tremaine', 'Anastasia & Drizella'],
          fm: "'Have courage and be kind' reframes Cinderella not as passive victim but as someone with radical moral strength. Kindness, in her hands, is a weapon.",
          rar: 'Classic',
          q: '"A dream is a wish your heart makes."'
        },
        ch: [
          { a: 'Act I', ti: "They gave me a mop. I gave myself a dream.", ob: '🐭', pv: "Every morning I swept and was told I was nothing. Every night I looked at my mother's dress in the attic and remembered who I was before they arrived. I kept small joys like coins in a jar.", q: '"A dream is a wish your heart makes."' },
          { a: 'Act II', ti: "Midnight came. I ran. I left a shoe — maybe on purpose.", ob: '⌛', pv: "I had one night of being seen — of dancing with someone who looked at me like I was the whole room. Then the clock struck. I ran. But I left something behind. Maybe hope is its own kind of glass slipper.", q: '"Even miracles take a little time."' },
          { a: 'Act III', ti: "The shoe fit because it was always mine", ob: '✨', pv: "When they locked me in the attic and broke the glass — I still had the other slipper. That's what they didn't understand: kindness survives. It waits. And eventually someone comes looking for the foot that fits.", q: '"Have courage and be kind."' }
        ]
      },
      {
        e: '🎸', t: 'Coco', y: 'Disney · Pixar · 2017',
        r: 'About remembering those we loved — and being remembered ourselves.',
        pr: '🎵', pn: 'Mamá Imelda', ob: '🌸',
        bg: 'linear-gradient(135deg,#2a0a00,#060400)',
        lb: 'radial-gradient(ellipse at 40% 60%,#180600,#040100)',
        card: {
          pw: 'Commanding presence — can stop a room with a look',
          st: 'Fierce protectiveness, ironclad principles, deep family love',
          wk: 'Pride. Holds grief as anger for decades.',
          fe: 'Her family suffering. Being responsible for the wrong choice.',
          al: ['Miguel', 'Dante', 'Héctor'],
          en: ['Ernesto de la Cruz', 'Forgetting'],
          fm: "Mamá Imelda built an empire alone, raised a family without a man, and leads her lineage from the afterlife. The film's feminist backbone is entirely hers.",
          rar: 'Epic',
          q: '"I would move heaven and earth for my family."'
        },
        ch: [
          { a: 'Act I', ti: "He left for music. I built an empire from shoes.", ob: '👟', pv: "When Héctor walked out that door with his guitar, I had a daughter in my arms and a hole in my chest. So I made shoes. I built a business. I said: we don't need music. I almost believed it.", q: '"I would move heaven and earth for my family."' },
          { a: 'Act II', ti: "In the Land of the Dead, love is the only currency", ob: '🏵️', pv: "I had been angry so long I forgot: anger is just love with nowhere to go. When my great-great-grandson came looking for Héctor, I had to ask the question I feared: did I miss him?", q: '"This family does not talk about Héctor!"' },
          { a: 'Act III', ti: "I put his photo on the ofrenda. That was everything.", ob: '🕯️', pv: "When Héctor started to fade — when no one alive remembered him — I understood the real loss. Not that he left. That he might disappear entirely. So I chose to remember. That was my magic.", q: '"Héctor, we have to get you home."' }
        ]
      },
      {
        e: '🌸', t: 'Encanto', y: 'Disney · 2021',
        r: "About carrying everyone's hopes — and finally setting them down.",
        pr: '🦋', pn: 'Mirabel', ob: '🕯️',
        bg: 'linear-gradient(135deg,#2a1a4a,#080410)',
        lb: 'radial-gradient(ellipse at 40% 60%,#180a2a,#040208)',
        card: {
          pw: 'The ability to see what everyone else refuses to look at',
          st: 'Empathy, courage to ask questions no one else will, love without conditions',
          wk: 'Internalised "I am not enough"',
          fe: "That giftlessness means she doesn't deserve to belong",
          al: ['Luisa', 'Dolores', 'Bruno', 'Casita'],
          en: ["Abuela's fear", "The cracks in the walls"],
          fm: "The hero of a film about how female excellence becomes female trauma — and the healing of it. Mirabel has no gift because she IS the gift.",
          rar: 'Legendary',
          q: '"The magic is you."'
        },
        ch: [
          { a: 'Act I', ti: "No gift. Just me.", ob: '🚪', pv: "The Casita gave everyone something. My door dissolved into wood. Every day since I've been trying to prove that's still enough.", q: '"I am the one who sees the real you."' },
          { a: 'Act II', ti: "I saw what no one else would look at", ob: '✨', pv: "The cracks were real. The candle was failing. I was the only one asking why — because I had nothing to lose by looking.", q: '"What could I do if I knew it didn\'t need to be perfect?"' },
          { a: 'Act III', ti: "The miracle chose the one without gifts", ob: '💛', pv: "They gave me a door with my face on it. Not power. Just me. That was the miracle. That was always the miracle.", q: '"We see how bright you burn."' }
        ]
      }
    ]
  },

  heartbroken: {
    c: '#e84393',
    bg: 'radial-gradient(ellipse at 30% 20%,#280515,#06080f)',
    p: '#f070b3',
    label: 'Feeling heartbroken',
    hl: 'Stories that <em>held their hearts</em> too',
    tl: "You're allowed to feel this. These stories do.",
    films: [
      {
        e: '🎈', t: 'Up', y: 'Disney · Pixar · 2009',
        r: 'Ten minutes that said everything about love and loss without a word.',
        pr: '💛', pn: 'Ellie', ob: '📒',
        bg: 'linear-gradient(135deg,#1a2a4a,#040608)',
        lb: 'radial-gradient(ellipse at 40% 60%,#0e1828,#020406)',
        card: {
          pw: 'Infectious joy — made every ordinary day feel extraordinary',
          st: 'Wonder, hope, boundless warmth',
          wk: 'Never told Carl in words what the adventure book truly meant',
          fe: 'That she lived small. That she wasted her one life.',
          al: ['Carl', 'Russell (in spirit)'],
          en: ['Time', 'Illness'],
          fm: "Ellie is on screen for 10 minutes and is the emotional architecture of the entire film. Proof that female characters need no dialogue to be utterly unforgettable.",
          rar: 'Mythic',
          q: '"Thanks for the adventure. Now go have a new one."'
        },
        ch: [
          { a: 'Act I', ti: "I was the adventure. He just didn't know it yet.", ob: '🏠', pv: "I found him in that old house — quiet, serious Carl — and showed him Paradise Falls in a book. We filled our adventure jar with coins. We planned and planned. Life kept happening instead. I didn't mind.", q: '"Adventure is out there!"' },
          { a: 'Act II', ti: "We grew old together and I never got tired of him", ob: '💛', pv: "We painted the mailbox. We fixed the roof. We sat on the porch when our legs got slower. Every ordinary day was the adventure, Carl. I tried to tell you with everything except words.", q: '"Thanks for the adventure."' },
          { a: 'Act III', ti: "The last page of the book was a love letter", ob: '📖', pv: "On the last page I wrote: Thanks for the adventure — now go have a new one. Because I knew him. I knew he would stop. I knew he needed permission to go on without me. So I gave it.", q: '"Now go have a new one."' }
        ]
      },
      {
        e: '📚', t: 'Beauty and the Beast', y: 'Disney · 1991',
        r: 'About seeing someone fully — past every wall they built to keep you out.',
        pr: '📚', pn: 'Belle', ob: '🌹',
        bg: 'linear-gradient(135deg,#1a0a2a,#060408)',
        lb: 'radial-gradient(ellipse at 40% 60%,#0e0618,#030206)',
        card: {
          pw: 'Radical empathy — sees beyond what the world allows itself to see',
          st: 'Intelligence, independence, refuses to be defined by her beauty',
          wk: 'Rescuer complex — drawn to damaged things',
          fe: 'Being trapped in a small life. Never being truly understood.',
          al: ['Lumière', 'Mrs. Potts', 'Cogsworth', 'The Beast'],
          en: ['Gaston', 'Provincial smallness'],
          fm: "Belle pre-dates the female gaze as a term but defines it entirely. She is the most-read character in her village and she never stops reading. The library scene is the real love confession.",
          rar: 'Classic',
          q: '"I want adventure in the great wide somewhere."'
        },
        ch: [
          { a: 'Act I', ti: "I wanted more than this provincial life", ob: '📖', pv: "Every morning the same bread, the same square, the same man proposing. I had read a thousand worlds and I knew — I was not made for this smallness. I didn't know the something more was waiting behind a curse.", q: '"I want adventure in the great wide somewhere."' },
          { a: 'Act II', ti: "He had ten thousand books. I understood him then.", ob: '❄️', pv: "He gestured at all of them and said they were mine. He was not kind. He was not easy. But inside the roaring and the shame was someone who had preserved beauty because he couldn't bear to destroy it.", q: '"You should learn to control your temper."' },
          { a: 'Act III', ti: "I saw the man before the curse. That broke it.", ob: '✨', pv: "Love isn't blindness. It's the opposite. Seeing every dark and damaged thing and choosing anyway. I saw what he was trying to become. That was enough. That has always been enough.", q: '"Can anyone be happy if they aren\'t free?"' }
        ]
      },
      {
        e: '🕯️', t: 'Encanto', y: 'Disney · 2021',
        r: 'About a family held together by cracks only love can see.',
        pr: '💪', pn: 'Luisa', ob: '💪',
        bg: 'linear-gradient(135deg,#2a0a10,#060204)',
        lb: 'radial-gradient(ellipse at 40% 60%,#180608,#040102)',
        card: {
          pw: 'Super strength — carries everything, always, without asking for help',
          st: 'Reliability, selflessness, total commitment to family',
          wk: 'Cannot ask for help. Equates worth with productivity.',
          fe: 'Not being strong enough. Losing her gift. Becoming a burden.',
          al: ['Mirabel', 'Dolores', 'Camilo'],
          en: ["Abuela's expectations", "Her inability to rest"],
          fm: "Luisa's Surface Pressure is the most direct articulation in any Disney film of how women are conditioned to carry everyone's weight and never crack.",
          rar: 'Epic',
          q: '"Give it to your sister — your sister\'s stronger."'
        },
        ch: [
          { a: 'Act I', ti: "I carry everything. That's what I'm for.", ob: '🏋️', pv: "Donkeys, churches, entire boulders. They come to me and I say yes. Always yes. Because yes is my gift. I never thought to ask: what does Luisa want to carry?", q: '"Give it to your sister — your sister\'s stronger."' },
          { a: 'Act II', ti: "When the gift started slipping, I started slipping", ob: '😰', pv: "The weight didn't get lighter as the magic faded. For the first time I understood: I had built my entire self on being useful. What am I if I cannot lift?", q: '"Under the surface I hide my nerves."' },
          { a: 'Act III', ti: "I learned that rest is not defeat", ob: '💛', pv: "When the magic came back because of Mirabel — I cried. Not from relief. From understanding. I was never the foundation. The love was. I had been carrying the wrong thing.", q: '"What could I do if I knew it didn\'t need to be perfect?"' }
        ]
      }
    ]
  },

  hopeful: {
    c: '#f0a500',
    bg: 'radial-gradient(ellipse at 30% 20%,#3a2000,#06080a)',
    p: '#ffd060',
    label: 'Feeling hopeful',
    hl: 'Stories that <em>believe</em> like you do',
    tl: 'Something is coming. These stories felt it too.',
    films: [
      {
        e: '👸🏾', t: 'The Princess & the Frog', y: 'Disney · 2009',
        r: 'About working for your dream with absolutely everything you have.',
        pr: '👸🏾', pn: 'Tiana', ob: '⭐',
        bg: 'linear-gradient(135deg,#1a3a0a,#040804)',
        lb: 'radial-gradient(ellipse at 40% 60%,#0a2006,#020402)',
        card: {
          pw: 'World-class culinary magic — food as love, memory, and healing',
          st: 'Work ethic, focus, vision, determination that never quits',
          wk: 'Cannot stop working long enough to let anyone truly in',
          fe: "That hard work alone won't be enough. That the dream was naive.",
          al: ['Naveen', 'Louis', 'Ray', 'Charlotte'],
          en: ["Dr. Facilier", "Her own walls"],
          fm: "Tiana is the most economically literate Disney princess. She has a business plan. She saves her own money. The film validates female ambition explicitly, without apology.",
          rar: 'Epic',
          q: '"The only way to get what you want is through hard work."'
        },
        ch: [
          { a: 'Act I', ti: "Daddy taught me to wish on stars and work with my hands", ob: '🍽️', pv: "I kept two jars — one for wishing on the evening star, one for every dollar earned. Daddy said you need both. The wish gives direction. The work gets you there.", q: '"The only way to get what you want is through hard work."' },
          { a: 'Act II', ti: "I got my dream and lost what mattered most", ob: '🐸', pv: "For one night I had the restaurant. Then I was a frog. The funny thing about almost getting what you want — you suddenly see all the things you forgot to want.", q: '"I dug a little deeper and came up with you."' },
          { a: 'Act III', ti: "The dream got bigger than the restaurant", ob: '🌟', pv: "I opened my restaurant. But what I'm proudest of is what I almost missed — the real magic isn't in the wishing. It's in choosing to share what you built with someone who sees you fully.", q: '"The evening star is shining bright."' }
        ]
      },
      {
        e: '🌻', t: 'Tangled', y: 'Disney · 2010',
        r: "About finally leaving the tower you've been trapped in — and flying.",
        pr: '🌻', pn: 'Rapunzel', ob: '🦎',
        bg: 'linear-gradient(135deg,#2a1a00,#060400)',
        lb: 'radial-gradient(ellipse at 40% 60%,#180e00,#040200)',
        card: {
          pw: '70 feet of magic healing hair',
          st: 'Joyful creativity, emotional intelligence, immense inner courage',
          wk: 'Completely trusts the woman who imprisoned her',
          fe: 'Leaving. And being right about it.',
          al: ['Pascal', 'Flynn Rider', 'The Snuggly Duckling Gang'],
          en: ['Mother Gothel', 'Self-doubt'],
          fm: "Rapunzel's prison is not a dragon — it's a woman who told her the world was dangerous so she would never want to leave. That's a sharper story than any fairy tale.",
          rar: 'Epic',
          q: '"When will my life begin?"'
        },
        ch: [
          { a: 'Act I', ti: "I painted every inch of the tower. Then I wanted the world.", ob: '🎨', pv: "The walls were covered in murals — every dream I couldn't reach. I had a frying pan and a chameleon and seventy feet of magic hair and I had memorised every book she let me have. I was ready. I just needed a door.", q: '"When will my life begin?"' },
          { a: 'Act II', ti: "The floating lights were real. They were always for me.", ob: '✨', pv: "Every year on my birthday they rose — golden, hundreds of them — from a kingdom I didn't know was mine. When I saw them from a boat with a thief who'd become something else, I couldn't speak.", q: '"All those years — they were for me?"' },
          { a: 'Act III', ti: "She was not my mother. I came home anyway.", ob: '👑', pv: "The kingdom lit lanterns for a lost girl. That girl was me. I came home with tangled hair and paint on my fingers and I was exactly who I was always meant to be.", q: '"You were my new dream."' }
        ]
      }
    ]
  },

  lost: {
    c: '#2ecc71',
    bg: 'radial-gradient(ellipse at 30% 20%,#052215,#06080f)',
    p: '#5eeca1',
    label: 'Feeling lost',
    hl: "Stories for when you've <em>lost the way</em>",
    tl: 'Being lost is just the beginning of finding yourself.',
    films: [
      {
        e: '🌀', t: 'Alice in Wonderland', y: 'Disney · 1951',
        r: 'Because being lost in a strange world is sometimes how you find yourself.',
        pr: '🐇', pn: 'Alice', ob: '🎩',
        bg: 'linear-gradient(135deg,#1a0a3a,#060408)',
        lb: 'radial-gradient(ellipse at 40% 60%,#0e0620,#030206)',
        card: {
          pw: 'Insatiable curiosity — can find meaning in absolutely anything',
          st: 'Courage, adaptability, refusal to accept nonsense as reality',
          wk: 'Follows impulse before reason. Constantly gets in her own way.',
          fe: 'That growing up means losing the ability to wonder',
          al: ['The White Rabbit', 'The Cheshire Cat', 'The Mad Hatter'],
          en: ['The Queen of Hearts', 'Conformity'],
          fm: "Alice is a pre-feminist text that accidentally contains everything: a girl who questions authority, refuses the Queen's logic, and wakes herself up. She is her own rescuer.",
          rar: 'Classic',
          q: '"Curiouser and curiouser!"'
        },
        ch: [
          { a: 'Act I', ti: "I followed a rabbit because I was bored of sense", ob: '⏰', pv: "Everyone else was content with lessons and proper sitting. But when a waistcoated rabbit muttered about being late — I couldn't help it. Curiosity is not a flaw. It's the only honest thing about me.", q: '"Curiouser and curiouser!"' },
          { a: 'Act II', ti: "Nothing made sense. I tried to make it anyway.", ob: '🃏', pv: "The Cat vanished except for his grin. The Queen's roses were painted red. I decided: if this world has no rules, I will be the only consistent thing in it.", q: '"Who are you?"' },
          { a: 'Act III', ti: "I woke up. But Wonderland stayed with me.", ob: '🌸', pv: "They said it was a dream. But I have been to a place where a caterpillar asked the most important question anyone has ever asked me. I carry the answer with me. Especially here.", q: '"It\'s no use going back to yesterday — I was a different person then."' }
        ]
      },
      {
        e: '🧿', t: 'Soul', y: 'Disney · Pixar · 2020',
        r: 'About forgetting your purpose and finding what actually makes you alive.',
        pr: '🎷', pn: '22', ob: '🍂',
        bg: 'linear-gradient(135deg,#001a2a,#000608)',
        lb: 'radial-gradient(ellipse at 40% 60%,#001018,#000204)',
        card: {
          pw: 'Sees what everyone takes for granted — the beauty of ordinary life',
          st: 'Unfiltered honesty, zero pretension, radical presence',
          wk: 'Fear of failing before even trying',
          fe: 'Getting a life and wasting it',
          al: ['Joe Gardner', 'Jerry', 'The Zone'],
          en: ["The Counting", "Boxes"],
          fm: "22 is agender and the moral anchor of the film. The story explicitly argues that the value of a life cannot be measured by its achievements.",
          rar: 'Mythic',
          q: '"You can\'t crush a soul here. That\'s what life on Earth is for."'
        },
        ch: [
          { a: 'Act I', ti: "I never found my spark. So I stopped looking.", ob: '✨', pv: "Every soul needs a spark. I tried everything — nothing fit. So I became the soul who mocked the whole idea of wanting anything. It was easier than hoping.", q: '"I don\'t think I\'m good enough."' },
          { a: 'Act II', ti: "Earth was nothing like I imagined. It was better.", ob: '🍕', pv: "I fell into Joe's body and tasted pizza for the first time. I felt October air. I watched a maple key spin down from a tree. Nobody told me ordinary life felt like this.", q: '"I\'m not dying the day I got here!"' },
          { a: 'Act III', ti: "The spark isn't what you do. It's that you're alive.", ob: '🌬️', pv: "Joe thought his spark was jazz. We were both wrong. The spark is this — noticing a leaf. Breathing. Being alive is the spark. That was always the answer.", q: '"You can\'t crush a soul here."' }
        ]
      }
    ]
  },

  excited: {
    c: '#f39c12',
    bg: 'radial-gradient(ellipse at 30% 20%,#2a1500,#06080f)',
    p: '#f8c060',
    label: 'Feeling excited',
    hl: 'Stories that <em>run as fast</em> as you',
    tl: 'The world is about to change. These stories already know.',
    films: [
      {
        e: '🧜‍♀️', t: 'The Little Mermaid', y: 'Disney · 1989',
        r: 'About wanting so badly to belong somewhere you can almost taste it.',
        pr: '🧜‍♀️', pn: 'Ariel', ob: '🐚',
        bg: 'linear-gradient(135deg,#001a30,#000608)',
        lb: 'radial-gradient(ellipse at 40% 60%,#001020,#000204)',
        card: {
          pw: 'Voice of extraordinary beauty — can move hearts without words',
          st: 'Passion, curiosity, willingness to risk everything for what she loves',
          wk: 'Impulsiveness. Trades her most powerful gift for a chance.',
          fe: 'Never escaping the world under the sea. Being ordinary.',
          al: ['Flounder', 'Sebastian', 'Scuttle'],
          en: ["Ursula", "King Triton's rules"],
          fm: "Ariel gave up her voice for legs, for a world she chose. The feminist reading isn't that she gave it up for a man — it's that she wanted an entire different life and she paid for it.",
          rar: 'Classic',
          q: '"I want to be where the people are."'
        },
        ch: [
          { a: 'Act I', ti: "I collected the world they told me to fear", ob: '🦀', pv: "Twenty thousand gadgets and gizmos. Every sunken ship was a museum and I was its curator. They said humans were dangerous. I thought: anything that makes forks to eat with must be wonderful.", q: '"I\'ve got gadgets and gizmos aplenty."' },
          { a: 'Act II', ti: "I gave up my voice for a chance to be seen", ob: '🔱', pv: "I know how it sounds. But you have never watched the world above from the bottom, heard their music through the waves. I would have given anything to be where the people are.", q: '"Part of your world."' },
          { a: 'Act III', ti: "I got legs and an even bigger voice", ob: '🌅', pv: "I stood on the shore with impossible new feet and the whole world was in front of me. Every step a discovery. Every breath tasted of somewhere new.", q: '"I love you, Daddy."' }
        ]
      },
      {
        e: '🌻', t: 'Tangled', y: 'Disney · 2010',
        r: "About finally leaving the tower you've been trapped in — and flying.",
        pr: '🌻', pn: 'Rapunzel', ob: '🦎',
        bg: 'linear-gradient(135deg,#2a1a00,#060400)',
        lb: 'radial-gradient(ellipse at 40% 60%,#180e00,#040200)',
        card: {
          pw: '70 feet of magic healing hair',
          st: 'Joyful creativity, immense inner courage',
          wk: 'Completely trusts the woman who imprisoned her',
          fe: 'Leaving. And being right about it.',
          al: ['Pascal', 'Flynn Rider'],
          en: ['Mother Gothel'],
          fm: "Rapunzel's prison is not a dragon. It's a woman who made her afraid of the world. That's the sharpest story in any fairy tale.",
          rar: 'Epic',
          q: '"When will my life begin?"'
        },
        ch: [
          { a: 'Act I', ti: "I painted the walls and dreamed of more", ob: '🎨', pv: "The tower walls were covered in every dream I couldn't reach. I had a frying pan and a chameleon and more hair than sense. I was ready for everything. I just needed a door.", q: '"When will my life begin?"' },
          { a: 'Act II', ti: "The lights were real. I always knew.", ob: '✨', pv: "Every birthday, golden lights rose from a kingdom I didn't know was mine. When I saw them from a boat with someone who'd become something unexpected — I couldn't find a single word.", q: '"All those years — they were for me?"' },
          { a: 'Act III', ti: "I came home exactly as I was", ob: '👑', pv: "She was not my mother. The kingdom was mine. I came home with tangled hair and paint on my fingers and I was exactly who I was always meant to be.", q: '"You were my new dream."' }
        ]
      },
      {
        e: '💎', t: 'Aladdin', y: 'Disney · 1992',
        r: 'About seizing the magic when it finally shows up at your door.',
        pr: '💎', pn: 'Jasmine', ob: '🦁',
        bg: 'linear-gradient(135deg,#1a1a00,#060600)',
        lb: 'radial-gradient(ellipse at 40% 60%,#100e00,#030300)',
        card: {
          pw: 'Political authority — can command rooms and change laws',
          st: 'Intelligence, fierceness, refuses to be bargained with',
          wk: 'Naïvety about the world outside the palace walls',
          fe: 'Being married off. Never choosing her own story.',
          al: ['Rajah', 'Aladdin', 'The Genie'],
          en: ['Jafar', 'The law that removes her agency'],
          fm: "Jasmine rewrites her own ending: she doesn't just get a husband, she changes the law. The 2019 remake makes this explicit — she becomes sultan.",
          rar: 'Classic',
          q: '"I am not a prize to be won."'
        },
        ch: [
          { a: 'Act I', ti: "A cage is still a cage — even a golden one", ob: '🕊️', pv: "I had everything: silks, peacocks, marble. And I had never chosen a single day of my life. They would marry me to a prince and call it fate. I called it a smaller cage than the one I was already in.", q: '"I am not a prize to be won."' },
          { a: 'Act II', ti: "He showed me the world from a magic carpet", ob: '🌙', pv: "We flew over the rooftops and I forgot, for one night, that I was a princess. Just a girl next to a boy who looked at me like I was already free. I hadn't felt that way since I was small.", q: '"Do you trust me?"' },
          { a: 'Act III', ti: "I chose my own story. No genie required.", ob: '⭐', pv: "In the end I didn't need a wish granted. I needed the law to change. So I changed it. Because I am the daughter of a sultan — and someday I will be sultan myself. Watch.", q: '"I choose you, Aladdin."' }
        ]
      }
    ]
  },

  adventurous: {
    c: '#1abc9c',
    bg: 'radial-gradient(ellipse at 30% 20%,#041a14,#06080f)',
    p: '#4adcc4',
    label: 'Feeling adventurous',
    hl: 'Stories as <em>wild</em> as the sea',
    tl: "The horizon isn't a limit. It's an invitation.",
    films: [
      {
        e: '🗺️', t: 'Treasure Planet', y: 'Disney · 2002',
        r: 'The underrated masterpiece — space, treasure, and learning to trust.',
        pr: '🚀', pn: 'Jim Hawkins', ob: '🌌',
        bg: 'linear-gradient(135deg,#0a1a3a,#020408)',
        lb: 'radial-gradient(ellipse at 40% 60%,#060e20,#020306)',
        card: {
          pw: 'Solar surfer mastery — born for the infinite cosmos',
          st: 'Brilliance, courage, loyalty once earned',
          wk: 'Abandonment wounds make him push everyone away',
          fe: 'Being exactly what everyone expects: a lost cause',
          al: ['John Silver', 'Captain Amelia', 'Morph'],
          en: ['Scroop', 'His own self-destruction'],
          fm: "Jim's story — how trauma produces self-destruction and how one good relationship can rewrite that — transcends gender entirely. The most emotionally honest Disney film.",
          rar: 'Epic',
          q: '"Now I\'m on my way to the greatest adventure of my life."'
        },
        ch: [
          { a: 'Act I', ti: "They called me a lost cause. I called that a dare.", ob: '⚡', pv: "Every report card: great potential but refuses to apply himself. They meant it as criticism. I took it as proof that I had something left worth finding.", q: '"This is the best map I\'ve ever seen."' },
          { a: 'Act II', ti: "John Silver was the father and the villain at once", ob: '🔭', pv: "He taught me rigging and stars and how to read the solar wind. He called me Jimbo. And he was planning to betray us the whole time. I don't know if I've ever felt two things so enormous so close together.", q: '"You got the makings of greatness in you."' },
          { a: 'Act III', ti: "I blew up the treasure to save the crew", ob: '💥', pv: "All that gold. The entire reason I came. When I had to choose between treasure and people — there was no choice. The adventure was never the map. It was who I became following it.", q: '"Now I\'m on my way to the greatest adventure of my life."' }
        ]
      },
      {
        e: '🌊', t: 'Moana', y: 'Disney · 2016',
        r: 'When the call of the ocean becomes impossible to ignore.',
        pr: '🌺', pn: 'Moana', ob: '🐚',
        bg: 'linear-gradient(135deg,#001a2a,#000608)',
        lb: 'radial-gradient(ellipse at 40% 60%,#001018,#000204)',
        card: {
          pw: 'The ocean responds to her',
          st: 'Courage, navigation, deep love for her people',
          wk: 'Needs permission before trusting herself fully',
          fe: 'Letting her people down',
          al: ['Maui', 'Her Grandmother', 'Te Fiti'],
          en: ["Te Kā", 'Self-doubt'],
          fm: "Moana doesn't need a love interest. She needs the sea. The ocean is both her freedom and her purpose.",
          rar: 'Legendary',
          q: '"I am Moana of Motunui."'
        },
        ch: [
          { a: 'Act I', ti: "We sailed through storms and coconut pirates", ob: '🌊', pv: "I capsized. We outran kakamoras. We descended into the realm of monsters to steal back a giant hook from a crab. And through it all, I kept steering toward the horizon.", q: '"The ocean chose you for a reason."' },
          { a: 'Act II', ti: "Maui and I fought like family", ob: '⚓', pv: "He called me Curly. I called him impossible. We were both right. Somewhere in the fighting we became something else — two people who needed each other and refused to admit it.", q: '"You\'re so vain. I\'m in the water."' },
          { a: 'Act III', ti: "I restored the heart of Te Fiti", ob: '💚', pv: "I walked into fire. I gave back the heart. She remembered herself. The ocean calmed. And I finally understood why it had been calling me all along — I was always meant to be the one.", q: '"I am Moana of Motunui."' }
        ]
      },
      {
        e: '🐰', t: 'Zootopia', y: 'Disney · 2016',
        r: 'About building the world you want to live in — from scratch.',
        pr: '🐰', pn: 'Judy Hopps', ob: '🚔',
        bg: 'linear-gradient(135deg,#1a0a2a,#060408)',
        lb: 'radial-gradient(ellipse at 40% 60%,#0e0618,#030206)',
        card: {
          pw: 'Fastest cop in Zootopia — never gives up on a case',
          st: 'Optimism, tenacity, moral clarity, relentless drive',
          wk: 'Unconscious bias — hurts Nick before she understands her own prejudice',
          fe: 'Failing. Being sent back to Bunnyburrow. Staying small.',
          al: ['Nick Wilde', 'Chief Bogo (eventually)', 'Clawhauser'],
          en: ['Dawn Bellwether', 'Her own assumptions'],
          fm: "Judy breaks every ceiling. The twist is she almost becomes the villain's tool by not examining her own bias — her arc is about accountability, not just ambition.",
          rar: 'Epic',
          q: '"In Zootopia, anyone can be anything."'
        },
        ch: [
          { a: 'Act I', ti: "Everyone said rabbits don't become cops. I said watch.", ob: '🥕', pv: "Bunnyburrow was beautiful and small and full of people who loved me and needed me to stay small with them. I packed one bag and stepped onto the biggest platform I had ever seen. I did not cry.", q: '"I\'ve always wanted to be a police officer."' },
          { a: 'Act II', ti: "I broke trust with someone I was starting to love", ob: '🦊', pv: "I used Nick's words against him in a press conference. I didn't mean it as a weapon. But I should have known — words about who someone is always cut deepest. He left. I went home. I had to learn the difference between being right and being good.", q: '"I\'m just a dumb bunny, but we are good at multiplying."' },
          { a: 'Act III', ti: "We solved it together. That was always the only way.", ob: '🌆', pv: "Nick and I. A fox and a rabbit. The city wanted us to be enemies. But we were better together than the city deserved. We just had to be what we promised first.", q: '"In Zootopia, anyone can be anything."' }
        ]
      }
    ]
  }

};

// map pins data - all the disney kingdoms around the world
const pins = [
  { x: '43%', y: '28%', c: '#80d0ff', l: 'Norway & Scandinavia', r: 'Northern Europe', f: '❄️ Frozen · ❄️ Frozen II' },
  { x: '38%', y: '22%', c: '#c580ff', l: 'Scotland — The Highlands', r: 'British Isles', f: '🏹 Brave' },
  { x: '44%', y: '31%', c: '#f070b3', l: 'France', r: 'Western Europe', f: '📚 Beauty and the Beast · 🐈 The Aristocats' },
  { x: '40%', y: '20%', c: '#a0c8ff', l: 'Denmark', r: 'Northern Europe', f: '🧜‍♀️ The Little Mermaid' },
  { x: '35%', y: '38%', c: '#ffa060', l: 'Spain & Mediterranean', r: 'Southern Europe', f: '⚡ Hercules (Ancient Greece)' },
  { x: '30%', y: '38%', c: '#6edfb0', l: 'Louisiana, USA', r: 'Southern United States', f: '⭐ The Princess & the Frog' },
  { x: '24%', y: '28%', c: '#60b0ff', l: 'New York & USA', r: 'North America', f: '🐰 Zootopia · ⚡ The Incredibles' },
  { x: '19%', y: '52%', c: '#ffd060', l: 'Colombia & S. America', r: 'South America', f: '🦋 Encanto' },
  { x: '56%', y: '36%', c: '#f8a040', l: 'Arabia', r: 'Middle East', f: '💎 Aladdin' },
  { x: '65%', y: '22%', c: '#ff6060', l: 'Ancient China', r: 'East Asia', f: '🪷 Mulan' },
  { x: '70%', y: '20%', c: '#ff9060', l: 'Japan', r: 'East Asia', f: '🌸 Japanese inspiration' },
  { x: '60%', y: '36%', c: '#60e0a0', l: 'India', r: 'South Asia', f: '🐯 The Jungle Book' },
  { x: '24%', y: '63%', c: '#4adcc4', l: 'Polynesia — Pacific', r: 'South Pacific', f: '🌊 Moana' },
  { x: '26%', y: '55%', c: '#ff8888', l: 'Hawaii', r: 'Pacific Islands', f: '🌺 Lilo & Stitch' },
  { x: '38%', y: '68%', c: '#c0a060', l: 'Sub-Saharan Africa', r: 'Africa', f: '🦁 The Lion King' },
  { x: '77%', y: '65%', c: '#d4a040', l: 'Australia', r: 'Oceania', f: '🦘 Various nature films' },
  { x: '23%', y: '42%', c: '#ffd060', l: 'Caribbean Islands', r: 'Caribbean', f: '🌺 Lilo & Stitch (inspiration)' },
  { x: '14%', y: '58%', c: '#40c0ff', l: 'Outer Space / Sci-Fi', r: 'Imagined Worlds', f: '🚀 Treasure Planet · 🤖 WALL·E' },
];
