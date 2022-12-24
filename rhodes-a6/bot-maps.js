const BOT_MAPS = {
  // A different brain, this one is for EMOJI
//   emojiBot: {
//     title: "Only speaks emoji",
//     botPfp: "😬",
//     humanPfp: "🌶",
//     chips: ["😸", "🍞", "👋"],

//     // TWO BIG THINGS: STATES, and GRAMMAR

//     // Our Finite State Machine
//     states: {
//       // The state we start at
//       origin: {
//         // When we enter the state say this
//         onEnterSay: ["I'm a bot #hello#"],
//         exits: [
//           // Exits have three things: conditions ->target actions
//           // "wait:random(5,7) ->@ '#emoji##emoji##emoji#'",

//           // Under what conditions can I take this exit?
//           // 'stuff' take this exit if the user says "stuff"
//           // '*' or says ANYTHING
//           // Target: name of a state, or "@" go back in here
//           // "'*' ->@ 'OOPs'",

//           // Wait 2 seconds
//           "wait:2 ->conversation '⏳ going to conversation mode'",
//         ],

//         // onExitSay: ["Good luck!"],
//       },

//       conversation: {
//         exits: ["'👋' ->end '😭'", "'*' ->@ '#emoji#'"],
//       },

//       end: {
//         onEnterSay: ["the end"],
//       },
//     },

//     // GRAMMAR!!!
//     grammar: {
//       hello: ["👋", "😀"],
//       story: ["#emoji# #emoji# #emoji# story"],
//       emoji: ["#animal#", "#food#", "#heart#"],
//       animal: ["🐧", "🐈", "🦒", "🐕", "🐿", "🐓", "🐁"],
//       food: ["🍊", "🥞", "🥨", "🧀", "🌽", "🌶", "🍏"],
//       heart: ["💕", "💜", "💙", "💔"],
//     },
//   },

//   hauntedHouse: {
//     title: "Only speaks emoji",
//     botPfp: "🏚",
//     humanPfp: "😬",
//     chips: ["N", "E", "W", "S"],

//     states: {
//       origin: {
//         onEnterSay: ["You are in a spooky house, you hear scary sounds to the east", 'some music starts <iframe width="560" height="315" src="https://www.youtube.com/embed/Z6ylGHfLrdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        
//         exits: ["wait:20 ->died",
//                "'N' ->room 'You explore north'",
//                "'E' ->room 'You explore east'",
//                "'W' ->room 'You explore west'",
//                "'S' ->room 'You explore south'",
//                ]
//       },
      
       
//       room: {
//         onEnterSay: ["You are in a #roomAdjective# #roomType#"],
//         exits: [
//            "'N' ->room 'You explore north'",
//                "'E' ->fight 'You see a #monster#'",
//                "'W' ->room 'You explore west'",
//                "'S' ->room 'You explore south'",
//               "'look' ->@ '#spookyDiscovery#'"
//         ]
//       },
      
//        fight: {
//         onEnterSay: ["You lose the fight"],
//          exits: [
//           "wait:2 ->died",
//           ]
//       },
      
//       died: {
//         onEnterSay: ["You died", "☠️"],
//       }
//     },
    
//     grammar: {
//       object: ["kettle", "table", "chair", "desk", "lamp", "vase", "urn", "candelabra", "lantern", "idol", "orb", "book", "basket", "hammer", "flowerpot", "bicycle", "paintbrush", "goblet", "bottle", "jar", "toaster", "teacup", "teapot", "rug","basket", "thimble", "ottoman", "cushion", "pen", "pencil", "mug","egg", "chair", "sun", "cloud", "bell", "bucket", "lemon", "glove", "moon", "star", "seed", "card", "pancake", "waffle", "car", "train", "spoon", "fork", "potato"],
// 	  objAdj: ["wooden","old","vintage","woven", "antique","broken","tiny", "giant", "little", "upside-down","dented","imaginary","glowing","curséd","glittery","organic", "rusty", "multi-layered", "complicated", "ornate", "dusty", "gleaming", "fresh", "ancient", "forbidden", "milky", "upholstered", "comfortable", "dynamic", "solar-powered", "coal-fired", "warm", "cold", "frozen", "melted", "boxy", "well-polished", "vivid", "painted", "embroidered", "enhanced", "embellished", "collapsible", "simple", "demure"],
	
//       spookyDiscovery: ["You find something scary:#objAdj# #object#"],
//       roomType: ["living room", "bedroom", "conservatory", "cemetary", "kitchen"],
//       roomAdjective: ["dusty", "abandoned", "blood-soaked", "ominous", "suspiciously normal"]
//     },
//   },

//   myBot: {
//     title: "Cocoa-and-Therapy Bot",
//     description: [
//       "a bot for suggesting hot drinks and listening to your problems",
//     ],

//     states: {
//       origin: {
//         onEnterSay:
//           "I'm your therapeutic cocoa machine. Tell me about your problems while I make you a nice warm drink",
//         exits: [
//           "'drink' ->makeDrink",
//           "'drink' ->makeDrink",
//           "'*' ->makeDrink",
//         ],
//       },

//       makeDrink: {
//         onEnterSay: "I'll make you a #drink#.",
//         exits: [
//           "wait:5 ->origin 'Ah, not quite the right time, I see.' 'Something else maybe?'",
//           "'something else' ->makeDrink 'How about something different then?'",
//           "* ->listen '*SLURP*'",
//         ],
//       },

//       listen0: {
//         onEnterSay: "#askAboutUser#",
//         exits: [
//           "wait:5 ->origin 'Quiet time is good too'",
//           "'*' ->origin '#sympathy#'",
//         ],
//       },
//       listen1: {
//         onEnterSay: ["#sympathy#", "#askAboutUser#"],
//       },

//       exits: ["'*' -> '#sympathy#'"],
//     },
//     grammar: {
//       askAboutUser: [
//         "How was your day?",
//         "What's on your mind?",
//         "How is this week going?",
//       ],
//       listen: [
//         "mmhmm",
//         "tell me about it",
//         "tell me more?",
//         "does that happen often?",
//       ],
//       sympathy: [
//         "that sounds #difficult#",
//         "you've been through a lot",
//         "it sounds like you are trying very hard",
//       ],
//       difficult: ["challenging", "hard", "like a tough time"],
//       toppings: [
//         "caramel sauce",
//         "mini marshmallows",
//         "a candy cane",
//         "sprinkles",
//         "whipped cream",
//         "vegan whip",
//         "marshmallow fluff",
//         "grated nutmeg",
//       ],
//       milk: ["oatmilk", "soy", "whole milk", "skim", "almond milk"],
//       coffeeType: [
//         "latte",
//         "chai",
//         "espresso",
//         "frappe",
//         "mocha",
//         "hot chocolate",
//       ],
//     },
//   },
  
    ChefBot: {
    title: "tells dinner ideas",
    botPfp: "👨‍🍳",
    humanPfp: "🍽",
    chips: ["I am full", "15 mins", "1 hour","many hours", "no time"],

    states: {
      origin: {
        onEnterSay: ["Hi! I'm Chef bot and I can give you ideas of what to eat... How much time do you have?", ],
        
        exits: [
               "'I am full' ->full 'Then you dont need to eat'",
               "'15 mins' ->short '15 min, let me think...'",
               "'1 hour' ->medium 'Thats plety of time'",
               "'many hours' ->long 'Then lets make something special'",
               "wait:10 ->waiting 'are you still there?'",
               "'no time' ->takeout 'Then you prbably need to order out'",
                "'*' ->end",          
               ]
      },
      
       
      full: {
        onEnterSay: ["Come back when you are #hungrywords#"],
        exits: [
           "'I am full' ->full 'Then you dont need to eat'",
               "'15 mins' ->short '15 min, let me think...'",
               "'1 hour' ->medium 'Thats plety of time'",
               "'many hours' ->long 'Then lets make something special'",
               "wait:10 ->waiting 'are you still there?'",
               "'no time' ->takeout 'Then you prbably need to order out'",
                "'*' ->end",    
        ]
      },
      short: {
        onEnterSay: ["You should make #shortmeals#"],
        exits: [
               "'I am full' ->full 'Then you dont need to eat'",
               "'15 mins' ->short '15 min, let me think...'",
               "'1 hour' ->medium 'Thats plety of time'",
               "'many hours' ->long 'Then lets make something special'",
               "wait:10 ->waiting 'are you still there?'",
               "'no time' ->takeout 'Then you prbably need to order out'",
                "'*' ->end",
        ]
      },
      medium: {
        onEnterSay: ["You should make #medmeals#"],
        exits: [
               "'I am full' ->full 'Then you dont need to eat'",
               "'15 mins' ->short '15 min, let me think...'",
               "'1 hour' ->medium 'Thats plety of time'",
               "'many hours' ->long 'Then lets make something special'",
               "wait:10 ->waiting 'are you still there?'",
               "'no time' ->takeout 'Then you prbably need to order out'",
                "'*' ->end",
        ]
      },
      waiting: {
        onEnterSay: ["I can help you come up with things to eat. Tell me how much time you have to cook"],
        exits: [
               "'I am full' ->full 'Then you dont need to eat'",
               "'15 mins' ->short '15 min, let me think...'",
               "'1 hour' ->medium 'Thats plety of time'",
               "'many hours' ->long 'Then lets make something special'",
               "'no time' ->takeout 'Then you prbably need to order out'",
                "'*' ->end",
        ],
      },
      long: {
        onEnterSay: ["You should make #longmeals#"],
        exits: [
               "'I am full' ->full 'Then you dont need to eat'",
               "'15 mins' ->short '15 min, let me think...'",
               "'1 hour' ->medium 'Thats plety of time'",
               "'many hours' ->long 'Then lets make something special'",
               "wait:10 ->waiting 'are you still there?'",
               "'no time' ->takeout 'Then you prbably need to order out'",
                "'*' ->end",
        ],
      },
      takeout: {
        onEnterSay: ["You should get #takeoutrest#"],
        exits: [
               "'I am full' ->full 'Then you dont need to eat'",
               "'15 mins' ->short '15 min, let me think...'",
               "'1 hour' ->medium 'Thats plety of time'",
               "'many hours' ->long 'Then lets make something special'",
               "wait:10 ->waiting 'are you still there?'",
               "'no time' ->takeout 'Then you prbably need to order out'",
                "'*' ->end",
        ],
      },
      end: {
        onEnterSay: ["I don't understand, try picking how much time you have from the list and I can help you come up with something to eat"],
        exits: [
               "'I am full' ->full 'Then you dont need to eat'",
               "'15 mins' ->short '15 min, let me think...'",
               "'1 hour' ->medium 'Thats plety of time'",
               "'many hours' ->long 'Then lets make something special'",
               "wait:10 ->waiting 'are you still there?'",
               "'no time' ->takeout 'Then you prbably need to order out'",
                "'*' ->end",
        ],
      },
      
    },
    
    grammar: {
      
	    hungrywords:["Peckish", "hungry", "ravenous", "less full", "... actually never"],
      shortmeals:["trader joes fried rice", "ramen", "eggs and toast", "frozen chicken nuggets", "buttered noodles", "a frozen pizza", "a sandwich"],
      longmeals:["A thanksgiving feast", "Beef wellington", "A roast beef", "Pot Roast", "Home made ravioli", "a chicken pot pie", "A ham"],
      medmeals:["stir fry","Grilled chicken and roasted vegitables", "spaghetti and meat balls", "surf and turf", "Hamburgers and french fries", "a hearty soup"],
      takeoutrest:["tomate", "pot belly", "chipotle", "d&d", "Al's deli"],
    },
  },
  
};
