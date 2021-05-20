const emojipedia = [
  {
    id: 0,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 1,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 2,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id: 3,
    emoji: "😀",
    name: "Grinning Face",
    meaning:
      "The happy smiling face is one of the most common emojis and universally applicable: you just want to say hello, express joy or excitement about something or brighten up a short text."
  },
  {
    id: 4,
    emoji: "😃",
    name: "Grinning Face with big eyes",
    meaning:
      "A yellow face with smiling eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general happiness and good-natured amusement."
  },
  {
    id: 5,
    emoji: "😂",
    name: "Face with Tears of Joy",
    meaning:
      "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing. Named the Oxford Dictionaries 2015 Word of the Year, and the most used emoji on all platforms from 2011-2021."
  },
  {
    id: 6,
    emoji: "😆",
    name: "Grinning Squinting Face",
    meaning:
      "Emoji is on the verge of a fit of laughter because something is so silly or incredibly funny. Also, mischievous or bitchy laughter about an event, or something that happened to another person.. Means the same as “XD“ and “X“ as a text-based emoticon. "
  },
  {
    id: 7,
    emoji: "😅",
    name: "Grinning Face with Sweat",
    meaning:
      "Sweaty smile. Relief that a tight situation went well or was coped with positively, e.g. an important appointment. A difficult event is imminent and you are already nervous. "
  },
  {
    id: 8,
    emoji: "☺️",
    name: "Smiling Face",
    meaning:
      "I am as merry as a lark! Completely satisfied and speechless. Expression of bliss. Shy grin in response to a nice compliment or something great that happened. "
  },
  {
    id: 9,
    emoji: "😊",
    name: " Smiling Face With Smiling Eyes",
    meaning:
      "Is grinning shyly and embarrassed. The red cheeks are an expression of joy. Represents happiness, contentment, peace of mind and gratitude. "
  },
  {
    id: 10,
    emoji: "😇",
    name: "Smiling Face With Halo",
    meaning:
      "Would like to express its (possibly pretended) innocence. Someone does good deeds, is very sweet, innocent and behaves in an exemplary way. The angelic face can also be used humorously for rather not so good deeds or behaviors."
  },
  {
    id: 11,
    emoji: "😉",
    name: "Winking Face",
    meaning:
      "Smiley blinks mischievously with one eye. Expression of humor, has been pulling a practical joke, is flirting with you or has an ulterior motive. The wink weakens the message: do not take it seriously, regard it as humorous."
  },
  {
    id: 12,
    emoji: "😌",
    name: "Relieved Face",
    meaning:
      "Everything went well! Relieved smiley face. Is happy that something unpleasant is over without having caused any harm. Relaxed, thankful and free of worries. "
  },
  {
    id: 13,
    emoji: "😘",
    name: "Face Throwing a Kiss",
    meaning:
      "Smiley sends you a loving kiss that comes from the heart. Amicable, to express affection or with romantic intent, as an expression of love. May weaken a sarcastic response or be a reaction to a rude message. Symbol for flirting and showing gratitude."
  },
  {
    id: 14,
    emoji: "😚",
    name: "Kissing Face With Closed Eyes",
    meaning:
      "Cute face with closed eyes and rosy cheeks. As a thank you for a tip or a favor. Loving kiss to the closest friends, family or darling. "
  },
  {
    id: 15,
    emoji: "😍",
    name: "Smiling Face with Heart-Eyes",
    meaning:
      "A yellow face with an open smile, sometimes showing teeth, and red, cartoon-styled hearts for eyes. Often conveys enthusiastic feelings of love, infatuation, and adoration, e.g., I love/am in love with this person or thing."
  },
  {
    id: 16,
    emoji: "😝",
    name: "Squinting Face with Tongue",
    meaning:
      "A yellow face with scrunched, X-shaped eyes and a big grin, sticking out its tongue. Often conveys a sense of fun, excitement, playfulness, hilarity, and happiness, as if saying Squee! or Awesome! "
  },
  {
    id: 17,
    emoji: "🤑",
    name: "Money-Mouth Face",
    meaning:
      "Used for a wide range of content dealing with money, including: making money, loving wealth, being or feeling rich, and concepts of success and excellence (e.g., on the money)."
  },
  {
    id: 18,
    emoji: "🤗",
    name: "Hugging Face",
    meaning:
      "A yellow face smiling with open hands, as if giving a hug. May be used to offer thanks and support, show love and care, or express warm, positive feelings more generally. Due to its hand gesture, often used to represent jazz hands, indicating such feelings as excitement, enthusiasm, or a sense of flourish or accomplishment."
  },
  {
    id: 19,
    emoji: "😖",
    name: "Confounded Face",
    meaning:
      "A yellow face with scrunched, X-shaped eyes and a crumpled mouth, as if quivering in frustration or holding back tears. May be used to represent being overcome with various emotions, including irritation, frustration, disgust, and sadness, as if to the point of defeat.  "
  },
  {
    id: 20,
    emoji: "😈",
    name: "Smiling Face with Horns",
    meaning:
      "A face, usually purple, with devil horns, a wide grin, and eyes and eyebrows scrunched downward in the same manner as Angry Face on most platforms. Google’s design is red and Facebook’s has black horns and green eyes. Commonly used to convey mischief, naughtiness, and excitement or excellence (slang, bad or wicked)."
  },
  {
    id: 21,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "A yellow face with furrowed eyebrows looking upwards with thumb and index finger resting on its chin. Intended to show a person pondering or deep in thought. Often used to question or scorn something or someone, as if saying Hmm, I don't know about that. Tone varies, including earnest, playful, puzzled, skeptical, and mocking."
  },
  {
    id: 22,
    emoji: "🤐",
    name: "Zipper-Mouth Face",
    meaning:
      "A yellow face with simple, open eyes and a closed zipper for a mouth. Meaning widely varies, but commonly conveys a secret or that someone will keep one (e.g., My lips are sealed). May also be used to tell someone to stop talking (e.g., Zip it! or I’ll shut up now)."
  },
  {
    id: 23,
    emoji: "👿",
    name: "Angry Face with Horns",
    meaning:
      "A face, usually purple, with two devil horns, frowning mouth and eyes, and eyebrows scrunched downwards in anger. Bears the same expression as Angry Face and Pouting Face on most platforms. Google’s design is red and Facebook’s has black horns, green eyes, and clenched teeth."
  },
  {
    id: 24,
    emoji: "😑",
    name: "Expressionless Face",
    meaning:
      "A yellow face with flat, closed eyes and mouth. May convey a sense of frustration or annoyance more intense than suggested by 😐 Neutral Face, as if taking a moment to collect itself."
  },
  {
    id: 25,
    emoji: "😶",
    name: " Face Without Mouth",
    meaning:
      "A yellow face with simple, open eyes and no mouth, as if at a loss for words. Meaning widely varies, but commonly conveys speechlessness, humility, and silence. May also convey moderately negative emotions, such as disappointment, frustration, or sadness. "
  },
  {
    id: 26,
    emoji: "😏",
    name: "Smirking Face",
    meaning:
      "A yellow face with a sly, smug, mischievous, or suggestive facial expression. It features a half-smile, raised eyebrows, and eyes looking to the side. Often used to convey flirtation or sexual innuendo."
  },
  {
    id: 27,
    emoji: "😒",
    name: "Unamused Face",
    meaning:
      "A yellow face with slightly raised eyebrows, a frown, and eyes looking to the side. May convey a variety of negative emotions, including irritation, displeasure, grumpiness, and skepticism, as if giving the side-eye."
  },
  {
    id: 28,
    emoji: "🙄",
    name: "Face with Rolling Eyes",
    meaning:
      "A yellow face with a small, closed mouth, flat or frowning, rolling its large, white eyes upwards. As with the gesture of an eye-roll, commonly conveys moderate disdain, disapproval, frustration, or boredom. Tone varies, including playful, sassy, resentful, and sarcastic, as if saying Yeah, whatever."
  },
  {
    id: 29,
    emoji: "😬",
    name: "Grimacing Face",
    meaning:
      "A yellow face with simple open eyes showing clenched teeth. May represent a range of negative or tense emotions, especially nervousness, embarrassment, or awkwardness (e.g., Eek!)."
  },
  {
    id: 30,
    emoji: "😪",
    name: "Sleepy Face",
    meaning:
      "A yellow face with closed eyes, mouth slightly open, and a blue snot bubble coming from its nose. Snot bubbles indicate a character is tired or sleeping in anime or manga. Not to be confused with 😴 Sleeping Face "
  },
  {
    id: 31,
    emoji: "🤤",
    name: "Drooling Face",
    meaning:
      "A yellow face, usually shown with closed eyes and raised eyebrows, with saliva drooling from one corner of its mouth. Often used to show desire for a person (sexy, attractive) or object (e.g., delicious food). May also represent someone is tired or sleeping."
  },
  {
    id: 32,
    emoji: "😷",
    name: "Face with Medical Mask",
    meaning:
      "A yellow face wearing a white surgical mask, as used by health workers in hospitals as well as the general public during a pandemic. May be worn to avoid sickness or spreading airborne diseases."
  },
  {
    id: 32,
    emoji: "🤒",
    name: "Face with Thermometer",
    meaning:
      "A yellow face with raised or furrowed eyebrows and a thermometer in its mouth. Often depicted with red cheeks, as if feverish. May be used to represent a hospital patient or person with a cold or flu."
  },
  {
    id: 32,
    emoji: "😴",
    name: "Sleeping Face",
    meaning:
      "A yellow face with eyes closed and mouth letting out three, cartoon-styled Zzz’s overhead to indicate it's sound asleep. The Zzz’s appear blue or purple across most platforms. May also represent boredom (slang, snooze)."
  },
  {
    id: 32,
    emoji: "🤧",
    name: "Sneezing Face",
    meaning:
      "A yellow face with scrunched, X-shaped eyes sneezing or blowing its nose into a white tissue, as if from a cold or allergies. Often depicted with a crumpled-looking mouth. May also represent someone in an emotional state wiping away tears, as at a wedding."
  },
  {
    id: 32,
    emoji: "🤢",
    name: "Nauseated Face",
    meaning:
      "A sickly-green face with concerned eyes and puffed, often red cheeks, as if holding back vomit. May represent physical illness or general disgust. Not to be confused with 🤮 Face Vomiting."
  },
  {
    id: 32,
    emoji: "🤥",
    name: "Lying Face",
    meaning:
      "A yellow face with raised eyebrows, enlarged eyes, slight frown, and long nose, indicating it’s telling a lie in the manner of Pinocchio. May represent lying, a liar, and other concepts of deceit and dishonesty to varying degrees of intensity. Sometimes used to convey disbelief or feeling abashed."
  },
  {
    id: 32,
    emoji: "🤕",
    name: "Face with Head-Bandage",
    meaning:
      "A yellow face with a half-frown and white bandage wrapped around its head, often depicted partially over one eye. May represent physical injury or pain but also emotional hurting, sometimes for ironic effect."
  },
  {
    id: 33,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning:
      "A yellow face with a broad, closed smile wearing black sunglasses, as if a pair of classic Wayfarers. Often used to convey the slang sense of cool. May also express a confident, carefree attitude or that something is excellent."
  },
  {
    id: 34,
    emoji: "😵",
    name: "Dizzy Face",
    meaning:
      "May convey a heightened or hyperbolic sense of such feelings as shock, surprise, disbelief, awe, and amazement, as if staggered to the point of disorientation (i.e., dizzy). May also represent sickness, nausea, intoxication, and death, e.g., slang I’m dead!"
  },
  {
    id: 35,
    emoji: "🤠",
    name: "Cowboy Hat Face",
    meaning:
      "Yee-haw! A yellow smiley wearing a wide-brimmed, brown-leather cowboy hat. Its smile varies across platforms. May convey a sense of exuberance, whimsy, confidence, adventure, or other sentiments."
  },
  {
    id: 36,
    emoji: "🤓",
    name: "Nerd Face",
    meaning:
      "While this emoji is often used by people calling themselves nerds in a self-deprecating way, the nerdy glasses paired with buck teeth can, and often does, evoke anti-Asian stereotypes. The fact that the default color of emoji faces is yellow further pushes this emoji into racist \"yellowface\" territory."
  },
  {
    id: 37,
    emoji: "😟",
    name: "Worried Face",
    meaning:
      "A yellow face with open eyes, raised or furrowed eyebrows, and a broad frown. May convey a variety of moderately sad or tense emotions, including concern, anxiety, alarm, disappointment, and unhappiness"
  },
  {
    id: 38,
    emoji: "🙁",
    name: "Slightly Frowning Face",
    meaning:
      "A yellow face with simple, open eyes and a slight frown. Often conveys a mild degree of concern, disappointment, or sadness, but usually less intensely than Frowning Face."
  },
  {
    id: 39,
    emoji: "😯",
    name: "Hushed Face",
    meaning:
      "A yellow face with small, open eyes, raised eyebrows, and a small, open mouth, as if it has been hushed by concern or correction. Meaning widely varies, but its expression is commonly taken as surprise, embarrassment, or mild excitement."
  },
  {
    id: 40,
    emoji: "😲",
    name: "Astonished Face",
    meaning:
      "A yellow face with open eyes, raised eyebrows, and an open mouth, as if gasping in shock or surprise. Often depicted showing its upper teeth. May convey a wide range of emotions, including awe, amazement, admiration, disbelief, excitement, or concern."
  },
  {
    id: 41,
    emoji: "😳",
    name: "Flushed Face",
    meaning:
      "A yellow face with raised eyebrows, a small, closed mouth, wide, white eyes staring straight ahead, and blushing cheeks. Intended to depict such feelings as embarrassment, but meaning very widely varies. Other senses include flattery, surprise, disbelief, admiration, affection, and excitement"
  },
  {
    id: 42,
    emoji: "😨",
    name: "Fearful Face",
    meaning:
      "A face with small, open eyes, open frown, raised eyebrows, and a pale blue forehead, as if experiencing a cold flash. Samsung’s design shows upper teeth and tongue."
  },
  {
    id: 43,
    emoji: "😰",
    name: "Anxious Face with Sweat",
    meaning:
      "A face with open eyes and a small, open frown. Its eyebrows are furrowed, with a single bead of cold sweat dripping down, and its forehead is pale blue, as if experiencing a cold flash. Samsung's design shows upper teeth and tongue. Meaning widely varies, but commonly conveys such feelings as sadness, disappointment, fear, and anxiety."
  },
  {
    id: 44,
    emoji: "😥",
    name: "Sad but Relieved Face",
    meaning:
      "A yellow face with small, open eyes, a slight frown, and furrowed eyebrows, from which a single bead of sweat drips, as if from concern or anxiety. Also known as Disappointed but Relieved Face, suggesting the smiley is upset but is grateful things didn’t turn out worse."
  },
  {
    id: 45,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "A yellow face with raised eyebrows and a slight frown, shedding a single, blue tear from one eye down its cheek. May convey a moderate degree of sadness or pain, usually less intensely than Loudly Crying Face."
  },
  {
    id: 46,
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning:
      "A yellow face with an open mouth wailing and streams of heavy tears flowing from closed eyes. May convey inconsolable grief but also other intense feelings, such as uncontrollable laughter, pride or overwhelming joy."
  },
  {
    id: 47,
    emoji: "😱",
    name: "Face Screaming in Fear",
    meaning:
      "A yellow face screaming in fear, depicted by wide, white eyes, a long, open mouth, hands pressed on cheeks, and a pale blue forehead, as if it has lost its color. Its expression evokes Edvard Munch’s iconic painting The Scream. While intended to represent horror and fright, it commonly conveys such feelings as shock, awe, disbelief, and intense excitement, as a screaming fan."
  },
  {
    id: 48,
    emoji: "😤",
    name: "Face with Steam From Nose",
    meaning:
      "A yellow face with closed eyes, furrowed eyebrows, broad frown, and two puffs of steam blowing out of its nose, as if in a huff or fuming. May convey various negative emotions, including irritation, anger, and contempt. May also convey feelings of pride, dominance, and empowerment. "
  },
  {
    id: 49,
    emoji: "😠",
    name: "Angry Face",
    meaning:
      "A yellow face with a frowning mouth and eyes and eyebrows scrunched downward in anger. Google’s design features a reddish face and Facebook’s, clenched teeth. Conveys varying degrees of anger, from grumpiness and irritation to disgust and outrage. May also represent someone acting tough or being mean."
  },
  {
    id: 50,
    emoji: "😡",
    name: "Pouting Face",
    meaning:
      "A red face with an angry expression: frowning mouth with eyes and eyebrows scrunched downward. Bears the same expression as Angry Face on most platforms and may convey more intense degrees of anger, e.g., hate or rage."
  }
];




export default emojipedia

