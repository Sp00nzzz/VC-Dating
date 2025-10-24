// Mark Cuban Story - Shark Tank Route
// Character sprites for Mark Cuban
export const sprites = {
    neutral: "/Characters/MarkCuban/MarkCuban.png",
    angry: "/Characters/MarkCuban/MarkCubanAngry.png",
    blush: "/Characters/MarkCuban/MarkCubanBlush.png",
    laugh: "/Characters/MarkCuban/MarkCubanLaugh.png",
    sad: "/Characters/MarkCuban/MarkCubanSad.png",
    surprised: "/Characters/MarkCuban/MarkCubanSuprised.png",
    affectionate: "/Characters/MarkCuban/MarkCubanAffectionate.png",
    annoyed: "/Characters/MarkCuban/MarkCubanAnnoyed.png",
    confused: "/Characters/MarkCuban/MarkCubanConfused.png",
    flustered: "/Characters/MarkCuban/MarkCubanFlustered.png",
    nervous: "/Characters/MarkCuban/MarkCubanNervous.png",
    pained: "/Characters/MarkCuban/MarkCubanPained.png"
};

// Mark Cuban Story Array
export const markCubanStory = [
    // Scene 0: Welcome to Shark Tank
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "Welcome to Shark Tank! Today, you're here to pitch your revolutionary startup to five of America's most successful investors. But your eyes keep drifting to one Shark in particular...",
        choices: null,
        nextScene: 1
    },
    // Scene 1: Pre-pitch nerves
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "The studio buzzes with energy. Producers scurry around, cameras adjust their angles, and the audience murmurs with anticipation. You take a deep breath, trying to steady your racing heart. This is the moment that could change everything.",
        choices: [
            {
                text: "Focus on the business opportunity",
                nextScene: 2
            },
            {
                text: "Try to calm your nerves",
                nextScene: 3
            },
            {
                text: "Look around at the Sharks",
                nextScene: 4
            }
        ]
    },
    // Scene 2: Business focus
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "You remind yourself why you're here. This isn't just about getting investment—it's about changing the world. Your technology could revolutionize how people connect. You straighten your posture and prepare to make your case.",
        choices: null,
        nextScene: 5
    },
    // Scene 3: Calming nerves
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "You close your eyes for a moment, taking slow, deep breaths. You've prepared for this. You know your product inside and out. The nerves are just excitement in disguise. You open your eyes, feeling more centered.",
        choices: null,
        nextScene: 5
    },
    // Scene 4: Observing the Sharks
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "You scan the panel of Sharks. Each one represents decades of business success. But one pair of eyes seems to be watching you more intently than the others. Mark Cuban's gaze is sharp, intelligent, and... is that curiosity you see?",
        choices: null,
        nextScene: 5
    },
    // Scene 5: Meet Mark Cuban
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "There he is. Mark Cuban - billionaire entrepreneur, owner of the Dallas Mavericks, and the most sought-after Shark in the Tank. He leans back in his chair, studying you with sharp, intelligent eyes.",
        choices: null,
        nextScene: 6
    },
    // Scene 6: Your moment arrives
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "This is it. The moment you've prepared for. Cameras rolling, lights blazing, five sharks waiting. Your heart pounds as you step forward to begin your pitch.",
        choices: null,
        nextScene: 7
    },
    // Scene 7: The pitch begins
    {
        background: "sharktank",
        character: null,
        speaker: "You",
        text: "Hi Sharks! I'm seeking $500,000 for 10% equity in my company. We're revolutionizing the way people connect with technology through AI-powered personal assistants that actually understand context and emotion.",
        choices: null,
        nextScene: 8
    },
    // Scene 8: Mark's immediate interest
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "*sits up straighter* Now THIS is interesting. I've been following AI development closely. Tell me more about your technology.",
        choices: null,
        nextScene: 9
    },
    // Scene 9: The demo moment
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "Time for the demo. How do you present your product?",
        choices: [
            {
                text: "Confident and bold - make it theatrical",
                nextScene: 10
            },
            {
                text: "Technical and detailed - focus on the innovation",
                nextScene: 11
            },
            {
                text: "Practical and relatable - show real-world use",
                nextScene: 12
            }
        ]
    },
    // Scene 10: Bold presentation response
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "*grins widely* I love the energy! You know how to command a room. That's exactly what you need to succeed in this business.",
        choices: null,
        nextScene: 13
    },
    // Scene 11: Technical presentation response
    {
        background: "sharktank",
        character: "surprised",
        speaker: "Mark Cuban",
        text: "*leans forward, clearly impressed* Whoa. You really know your stuff. The technical architecture here is solid. I'm genuinely impressed.",
        choices: null,
        nextScene: 13
    },
    // Scene 12: Practical presentation response
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "*nods thoughtfully* Smart approach. You understand that at the end of the day, it's about solving real problems for real people. I respect that.",
        choices: null,
        nextScene: 13
    },
    // Scene 13: Demo impresses everyone
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "Your product demo goes flawlessly. The AI responds naturally, anticipates needs, shows genuine understanding. You can see Mark leaning forward, completely engaged.",
        choices: null,
        nextScene: 14
    },
    // Scene 14: Mark's deeper interest
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "*leans forward, his eyes lighting up* You know what? I've seen thousands of pitches, but this... this is different. You're not just selling me a product - you're showing me a vision. And I like what I see.",
        choices: null,
        nextScene: 15
    },
    // Scene 15: The other Sharks react
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "The other Sharks begin asking questions, but your attention keeps drifting back to Mark. There's something in his eyes - more than just business interest. Something that makes your heart skip a beat.",
        choices: [
            {
                text: "Focus on answering the other Sharks",
                nextScene: 16
            },
            {
                text: "Make eye contact with Mark",
                nextScene: 17
            },
            {
                text: "Stay professional and composed",
                nextScene: 18
            }
        ]
    },
    // Scene 16: Professional focus
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "You maintain your professional demeanor, answering each Shark's questions with confidence. But you can't help but notice Mark's intense gaze following your every word. There's something magnetic about his attention.",
        choices: null,
        nextScene: 19
    },
    // Scene 17: Eye contact moment
    {
        background: "sharktank",
        character: "blush",
        speaker: "Mark Cuban",
        text: "*catches your gaze and holds it* You know, I've been in this business for decades, but I've never seen someone handle themselves quite like you. There's something about you that's... captivating.",
        choices: null,
        nextScene: 19
    },
    // Scene 18: Staying composed
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "*nods approvingly* I like that. You don't get flustered, you don't oversell. You let the product speak for itself. That's the mark of a true entrepreneur.",
        choices: null,
        nextScene: 19
    },
    // Scene 19: Lori jumps in
    {
        background: "sharktank",
        character: "neutral",
        secondCharacter: "neutral",
        secondCharacterType: "lori",
        speaker: "Lori Greiner",
        text: "I love this! The consumer appeal is huge. I can already see this on QVC. The demo was phenomenal!",
        choices: null,
        nextScene: 20
    },
    // Scene 20: Mr. Wonderful's skepticism
    {
        background: "sharktank",
        character: "neutral",
        secondCharacter: "neutral",
        secondCharacterType: "mrWonderful",
        speaker: "Kevin O'Leary",
        text: "Wait, wait, wait. Before we all get swept up in the excitement - let's talk numbers. What's your revenue? Your user acquisition cost? Your burn rate?",
        choices: null,
        nextScene: 21
    },
    // Scene 21: Mark defends you
    {
        background: "sharktank",
        character: "annoyed",
        secondCharacter: "neutral",
        secondCharacterType: "mrWonderful",
        speaker: "Mark Cuban",
        text: "*cuts in* Kevin, come on. This is early-stage tech. The opportunity here isn't about today's revenue - it's about market positioning and scalability. Let them explain their metrics.",
        choices: null,
        nextScene: 22
    },
    // Scene 22: Your response to the numbers question
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "How do you handle the numbers question?",
        choices: [
            {
                text: "Be completely honest about the challenges",
                nextScene: 23
            },
            {
                text: "Emphasize the growth trajectory and potential",
                nextScene: 24
            },
            {
                text: "Show confidence in your financial projections",
                nextScene: 25
            }
        ]
    },
    // Scene 23: Honest about challenges
    {
        background: "sharktank",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "*looks impressed* I appreciate the honesty. Most entrepreneurs try to BS their way through this question. You're giving me the real picture, and that tells me I can trust you.",
        choices: null,
        nextScene: 26
    },
    // Scene 24: Focus on growth
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "*smiling* That's the kind of thinking I like to see. You understand that in tech, it's about the trajectory, not just the current state. You get it.",
        choices: null,
        nextScene: 26
    },
    // Scene 25: Confident projections
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "*nods approvingly* You know your numbers cold. That tells me you're not just a visionary - you're an operator who can execute. That's rare.",
        choices: null,
        nextScene: 26
    },
    // Scene 26: Mr. Wonderful makes his move
    {
        background: "sharktank",
        character: "neutral",
        secondCharacter: "neutral",
        secondCharacterType: "mrWonderful",
        speaker: "Kevin O'Leary",
        text: "Alright, here's what I'll do. $500k for 20% equity, PLUS a $3 royalty per unit until I recoup $750k. That's the only deal that makes sense for me.",
        choices: null,
        nextScene: 27
    },
    // Scene 27: Lori counters
    {
        background: "sharktank",
        character: "neutral",
        secondCharacter: "neutral",
        secondCharacterType: "lori",
        speaker: "Lori Greiner",
        text: "Kevin, that's ridiculous! Here's a real offer: $500k for 15%, and I'll get you on QVC within 60 days. I'll make you a household name!",
        choices: null,
        nextScene: 28
    },
    // Scene 28: Mark makes his move
    {
        background: "sharktank",
        character: "neutral",
        secondCharacter: "neutral",
        secondCharacterType: "lori",
        thirdCharacter: "neutral",
        thirdCharacterType: "mrWonderful",
        speaker: "Mark Cuban",
        text: "*intense eye contact* Everyone here can write you a check. But I can give you something they can't - deep tech connections, strategic partnerships in AI, and...",
        choices: null,
        nextScene: 29
    },
    // Scene 29: Mark's personal touch
    {
        background: "sharktank",
        character: "blush",
        speaker: "Mark Cuban",
        text: "*pauses, then smiles slightly* ...and someone who's genuinely interested in working closely with you. Very closely. $500k for 12%, and you'll have my full attention.",
        choices: null,
        nextScene: 30
    },
    // Scene 30: The connection
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "There's something in the way Mark is looking at you. This feels like more than just business. The other Sharks are waiting for your response.",
        choices: null,
        nextScene: 31
    },
    // Scene 31: Your decision
    {
        background: "sharktank",
        character: "blush",
        speaker: "Narrator",
        text: "How do you respond?",
        choices: [
            {
                text: "Accept Mark's offer immediately",
                nextScene: 32
            },
            {
                text: "Negotiate for better terms with Mark",
                nextScene: 33
            },
            {
                text: "Take Lori's offer",
                nextScene: 82
            }
        ]
    },
    // Scene 32: Accept immediately
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "*grins* I love that confidence! You know what you want and you go for it. That's exactly the kind of partner I need. *extends his hand* Welcome to the team.",
        choices: null,
        nextScene: 35
    },
    // Scene 33: Negotiate terms
    {
        background: "sharktank",
        character: "surprised",
        speaker: "Mark Cuban",
        text: "*laughs* I like that! You're not just going to take the first offer. Smart business sense. Alright, let's talk terms. What did you have in mind?",
        choices: null,
        nextScene: 35
    },
    // Scene 34: Stay professional
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "*nods understandingly* I respect that. Business first, always. But I want you to know - this offer stands. And I'm looking forward to working with you, however this plays out.",
        choices: null,
        nextScene: 35
    },
    // Scene 35: The deal closes
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "The deal is done. Mark Cuban is now your investor and business partner. But as the cameras stop rolling and the other Sharks congratulate you, you can't help but notice the way Mark is looking at you...",
        choices: null,
        nextScene: 36
    },
    // Scene 36: Mark's dinner invitation
    {
        background: "sharktank",
        character: "blush",
        speaker: "Mark Cuban",
        text: "*pulls you aside* Listen, I know this is all very professional, but... would you like to grab dinner tonight? I'd love to discuss the vision further. Just the two of us.",
        choices: null,
        nextScene: 37
    },
    // Scene 37: Post-pitch moment
    {
        background: "sharktank",
        character: "blush",
        speaker: "Mark Cuban",
        text: "So... what do you say? Dinner tonight?",
        choices: [
            {
                text: "Accept the dinner invitation",
                nextScene: 38
            },
            {
                text: "Suggest keeping it professional for now",
                nextScene: 39
            },
            {
                text: "Playfully tease him about mixing business and pleasure",
                nextScene: 40
            }
        ]
    },
    // Scene 38: Accept dinner
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "*his eyes light up* Perfect. I know just the place. *leans in closer* I have a feeling this is going to be the beginning of something amazing.",
        choices: null,
        nextScene: 41
    },
    // Scene 39: Keep it professional
    {
        background: "sharktank",
        character: "sad",
        speaker: "Mark Cuban",
        text: "*tries to hide his disappointment* Of course, you're absolutely right. We should keep this professional. I'll have my assistant set up our first business meeting.",
        choices: null,
        nextScene: "ending_cuban_professional"
    },
    // Scene 40: Playful teasing
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "*grins* Oh, I see how it is. You're going to make me work for it. I like that. Alright - dinner tonight, but I'm going to pull out all the stops. Be ready to be impressed.",
        choices: null,
        nextScene: 41
    },
    // Scene 41: Transition to restaurant
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "The Shark Tank set fades away as you prepare for your evening with Mark Cuban. The business deal is done, but something tells you this is just the beginning of a much more personal journey.",
        choices: null,
        nextScene: 42,
        transition: "Later that night..."
    },
    // Scene 42: At the restaurant
    {
        background: "restaurant",
        character: null,
        speaker: "Narrator",
        text: "The maître d' recognizes Mark immediately and leads you both to a private table by the window. The city sprawls below like a blanket of stars. Candlelight flickers between you. Mark seems nervous - a rare look for him.",
        choices: null,
        nextScene: 43
    },
    // Scene 43: Restaurant ambiance
    {
        background: "restaurant",
        character: null,
        speaker: "Narrator",
        text: "The restaurant is elegant and intimate. Soft jazz plays in the background, and the city lights twinkle through the floor-to-ceiling windows. Mark pulls out your chair with a gentle smile, and for a moment, you forget this is a business dinner.",
        choices: null,
        nextScene: 44
    },
    // Scene 44: Mark's nervous confession
    {
        background: "restaurant",
        character: "nervous",
        speaker: "Mark Cuban",
        text: "*adjusts his napkin, clearly not his usual confident self* I have to be honest - I don't usually get nervous. Boardrooms, negotiations, even championship games... but sitting here with you? My heart's actually racing.",
        choices: null,
        nextScene: 45
    },
    // Scene 45: Your response to his nervousness
    {
        background: "restaurant",
        character: "nervous",
        speaker: "Narrator",
        text: "How do you respond to seeing this billionaire so vulnerable?",
        choices: [
            {
                text: "Find it endearing and smile",
                nextScene: 46
            },
            {
                text: "Admit you're nervous too",
                nextScene: 47
            },
            {
                text: "Tease him playfully about it",
                nextScene: 48
            }
        ]
    },
    // Scene 46: Endearing response
    {
        background: "restaurant",
        character: "blush",
        speaker: "Mark Cuban",
        text: "*catches your smile, relaxes a bit* Okay, that smile right there? That's exactly what I was hoping to see all night. You know what? Let's forget about the business stuff. Tell me about YOU. Not the entrepreneur. The person.",
        choices: null,
        nextScene: 49
    },
    // Scene 47: Admit nervousness
    {
        background: "restaurant",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "*reaches across the table, almost touching your hand* You're nervous? You? You just pitched to five sharks on national TV without breaking a sweat. But sitting here with me makes you nervous? *smiles* That might be the best compliment I've ever gotten.",
        choices: null,
        nextScene: 49
    },
    // Scene 48: Playful teasing
    {
        background: "restaurant",
        character: "surprised",
        speaker: "Mark Cuban",
        text: "*laughs genuinely* Okay, okay, I deserved that. The great Mark Cuban, reduced to a nervous wreck by a dinner date. *leans back* But you know what? I don't mind. It means this actually matters to me.",
        choices: null,
        nextScene: 49
    },
    // Scene 49: Deep conversation begins
    {
        background: "restaurant",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "*leans forward, his eyes lighting up* You know, I've been thinking about your pitch all day. Not just the technology - though that's incredible - but you. The way you handled yourself, the passion in your voice... there's something special about you.",
        choices: null,
        nextScene: 50
    },
    // Scene 50: Wine arrives
    {
        background: "restaurant",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "*the sommelier brings wine* I took the liberty of ordering. This is a 1982 Bordeaux - one of my favorites. But honestly? Right now I couldn't tell you the difference between this and boxed wine. You're a bit... distracting.",
        choices: null,
        nextScene: 51
    },
    // Scene 51: Wine tasting moment
    {
        background: "restaurant",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "*pours the wine with careful precision* You know, I've shared this wine with presidents, celebrities, the most powerful people in the world. But none of them made me feel like this. *raises his glass* To new beginnings... and to the most captivating person I've ever met.",
        choices: null,
        nextScene: 52
    },
    // Scene 52: Deeper conversation
    {
        background: "restaurant",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "*leans back in his chair, studying you* Tell me something about yourself that no one else knows. Not the entrepreneur, not the business side... just you. What makes you... you?",
        choices: [
            {
                text: "Share a personal dream",
                nextScene: 53
            },
            {
                text: "Talk about your fears",
                nextScene: 54
            },
            {
                text: "Reveal a childhood memory",
                nextScene: 55
            }
        ]
    },
    // Scene 53: Personal dream
    {
        background: "restaurant",
        character: "surprised",
        speaker: "Mark Cuban",
        text: "*his eyes light up with genuine interest* That's beautiful. You know, I can see that fire in your eyes when you talk about your dreams. It's the same fire I had when I was starting out. There's something so... pure about someone who still believes in impossible things.",
        choices: null,
        nextScene: 56
    },
    // Scene 54: Fears and vulnerabilities
    {
        background: "restaurant",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "*reaches across the table, almost touching your hand* You know what? I'm terrified too. Terrified that I'll mess this up, that I'll say the wrong thing, that I'll lose this connection we have. But being vulnerable with you... it feels right. Safe.",
        choices: null,
        nextScene: 56
    },
    // Scene 55: Childhood memory
    {
        background: "restaurant",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "*laughs warmly* That's adorable. You know, I love hearing about the person you were before all the success, before the business. It reminds me that we're all just... human. And that's what makes this moment so special.",
        choices: null,
        nextScene: 56
    },
    // Scene 56: Mark shares something personal
    {
        background: "restaurant",
        character: "nervous",
        speaker: "Mark Cuban",
        text: "*takes a deep breath* You know, I don't usually share this with anyone, but... I still get scared. Scared that I'm not good enough, that I'll fail, that people will see through the billionaire facade to the kid who used to sleep on floors. But with you... I feel like I can be completely myself.",
        choices: null,
        nextScene: 57
    },
    // Scene 57: The moment of connection
    {
        background: "restaurant",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "*reaches across the table, his hand finding yours* You know what? I've been in this business for decades, but I've never felt this kind of connection with anyone. Not just the business partnership - this is something deeper. Something real.",
        choices: null,
        nextScene: 58
    },
    // Scene 58: The confession
    {
        background: "restaurant",
        character: "blush",
        speaker: "Mark Cuban",
        text: "*his voice drops to almost a whisper* I know this is crazy, and I know we just met, but... I can't stop thinking about you. Not just as a business partner, but as... more. I'm falling for you, and I've never been more terrified or excited in my life.",
        choices: null,
        nextScene: 59
    },
    // Scene 59: Your response choice
    {
        background: "restaurant",
        character: "blush",
        speaker: "Narrator",
        text: "Mark Cuban has just bared his soul to you. This moment will define your future together. How do you respond?",
        choices: [
            {
                text: "Tell him you feel the same way",
                nextScene: 60
            },
            {
                text: "Say you need time to think",
                nextScene: 61
            },
            {
                text: "Suggest keeping it professional",
                nextScene: 62
            }
        ]
    },
    // Scene 60: Mutual feelings
    {
        background: "restaurant",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "*his eyes light up with pure joy* You do? *laughs with relief* I was so worried you'd think this was crazy. A Shark Tank romance. But this is real, isn't it? What we have... it's real.",
        choices: null,
        nextScene: 63
    },
    // Scene 61: Need time
    {
        background: "restaurant",
        character: "nervous",
        speaker: "Mark Cuban",
        text: "*nods understandingly* Of course. This is a lot to process. I don't want to rush you into anything. Take all the time you need. I'll be here when you're ready.",
        choices: null,
        nextScene: "ending_cuban_slow_burn"
    },
    // Scene 62: Keep it professional
    {
        background: "restaurant",
        character: "sad",
        speaker: "Mark Cuban",
        text: "*tries to mask his disappointment* You're absolutely right. We should keep this professional. I respect that decision. Let's focus on the business partnership.",
        choices: null,
        nextScene: "ending_cuban_professional"
    },
    // Scene 63: The evening continues
    {
        background: "restaurant",
        character: "neutral",
        speaker: "Narrator",
        text: "The evening continues with more intimate conversation. Mark's hand finds yours across the table, and for the first time, you feel like you're not just business partners - you're something more.",
        choices: null,
        nextScene: 64
    },
    // Scene 64: Leaving the restaurant
    {
        background: "restaurant",
        character: null,
        speaker: "Narrator",
        text: "Mark pays the bill and leads you out of the restaurant. His hand finds yours naturally as you walk to the car. The night air is cool, the city alive around you. Where is he taking you?",
        choices: null,
        nextScene: 65,
        transition: "10 minutes later..."
    },
    // Scene 65: The basketball court
    {
        background: "basketball",
        character: "nervous",
        speaker: "Mark Cuban",
        text: "*gets out of the car, stares at the court* This is where I used to play when I first moved here. When I had nothing. I'd come here at night to think, to dream. Every shot I took, I imagined it was a business decision.",
        choices: null,
        nextScene: 66
    },
    // Scene 66: Personal history
    {
        background: "basketball",
        character: "sad",
        speaker: "Mark Cuban",
        text: "*walks onto the court* I was sleeping on the floor of a six-guy apartment. Eating ketchup soup. But I'd come here and imagine... what if I made it? What if I could change everything? *picks up a basketball that's been left there*",
        choices: null,
        nextScene: 67
    },
    // Scene 67: The shot
    {
        background: "basketball",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "*takes a shot - swish* Still got it. *turns to you* You know why I brought you here? Because you remind me of that version of me. Hungry. Driven. Believing in something impossible. *passes you the ball* Your turn.",
        choices: null,
        nextScene: 68
    },
    // Scene 68: Your turn choice
    {
        background: "basketball",
        character: "nervous",
        speaker: "Narrator",
        text: "You're standing on Mark Cuban's childhood court under the stars. He's looking at you with those intense eyes. Do you take the shot?",
        choices: [
            {
                text: "Take the shot confidently",
                nextScene: 69
            },
            {
                text: "Admit you're not great at basketball",
                nextScene: 70
            },
            {
                text: "Ask him to teach you",
                nextScene: 71
            }
        ]
    },
    // Scene 69: Confident shot
    {
        background: "basketball",
        character: "surprised",
        speaker: "Mark Cuban",
        text: "*you make the shot* YES! *runs over and lifts you off the ground* That's what I'm talking about! Confidence! Risk! *sets you down but keeps his hands on your waist* God, you're amazing.",
        choices: null,
        nextScene: 72
    },
    // Scene 70: Honest admission
    {
        background: "basketball",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "*smiles warmly* That's okay. I love that you're honest. You don't try to be someone you're not. *comes closer* Here, let me show you. *stands behind you, guiding your arms* It's all about the follow-through...",
        choices: null,
        nextScene: 72
    },
    // Scene 71: Ask him to teach
    {
        background: "basketball",
        character: "blush",
        speaker: "Mark Cuban",
        text: "*his eyes light up* Yeah? Okay. *moves behind you, his body against yours as he guides your hands* Feel that? It's about confidence and release. *his breath on your neck* Just like... everything else worth doing.",
        choices: null,
        nextScene: 72
    },
    // Scene 72: The moment under the stars
    {
        background: "basketball",
        character: "nervous",
        speaker: "Mark Cuban",
        text: "*you're both standing at center court now* I've brought a lot of people into my business life. But I've never brought anyone here. This place... it's where the dream started. And now I'm sharing it with you.",
        choices: null,
        nextScene: 73
    },
    // Scene 73: Extended basketball dialogue - Mark's vulnerability
    {
        background: "basketball",
        character: "nervous",
        speaker: "Mark Cuban",
        text: "*dribbles the ball slowly* You know, I've been thinking about what you said at dinner. About building something real. *looks up at the stars* I've built companies, made millions, but this... *gestures between you* This feels different.",
        choices: null,
        nextScene: 74
    },
    // Scene 74: Deeper connection
    {
        background: "basketball",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "*passes you the ball* I've never been this nervous around someone. Usually I'm the one making people nervous. But with you... *smiles* I feel like I'm back to that kid who used to dream on this court.",
        choices: null,
        nextScene: 75
    },
    // Scene 75: The moment of truth
    {
        background: "basketball",
        character: "blush",
        speaker: "Mark Cuban",
        text: "*takes a deep breath* I brought you here because I wanted to show you who I really am. Not the billionaire, not the Shark. Just Mark. The guy who used to shoot hoops here and dream about changing the world. *steps closer* And now I'm dreaming about you.",
        choices: null,
        nextScene: 76
    },
    // Scene 76: The confession
    {
        background: "basketball",
        character: "blush",
        speaker: "Mark Cuban",
        text: "From the moment you walked into that Tank, I knew you were different. Not just your pitch - YOU. The way you think, the way you challenge me, the way you see the world. *steps closer* I'm falling for you. Hard.",
        choices: null,
        nextScene: 77
    },
    // Scene 77: Critical choice moment
    {
        background: "basketball",
        character: "blush",
        speaker: "Narrator",
        text: "Mark Cuban just confessed his feelings under the stars at his childhood court. This moment will determine your future together. How do you respond?",
        choices: [
            {
                text: "Kiss him passionately",
                nextScene: 78
            },
            {
                text: "Tell him you're falling too",
                nextScene: 79
            },
            {
                text: "Say we should take it slow",
                nextScene: 80
            },
            {
                text: "Focus on the business first",
                nextScene: 81
            }
        ]
    },
    // Scene 78: Passionate path
    {
        background: "basketball",
        character: "blush",
        speaker: "Narrator",
        text: "You don't hesitate. You close the distance and kiss him under the streetlight. Mark responds immediately, pulling you close, the basketball court fading away until there's only this moment, this connection.",
        choices: null,
        nextScene: 'ending_cuban_passionate'
    },
    // Scene 79: Mutual confession path
    {
        background: "basketball",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "*takes both your hands* You are? *laughs with relief* I was so worried you'd think this was crazy. A Shark Tank romance. But this is real, isn't it? What we have... it's real.",
        choices: null,
        nextScene: 'ending_cuban_romance'
    },
    // Scene 80: Slow burn path
    {
        background: "basketball",
        character: "nervous",
        speaker: "Mark Cuban",
        text: "*nods, a bit disappointed but understanding* Okay. Slow. I can do slow. *smiles* But I want you to know - I'm serious about this. About you. I'll wait as long as it takes.",
        choices: null,
        nextScene: 'ending_cuban_slow_burn'
    },
    // Scene 81: Professional path
    {
        background: "basketball",
        character: "sad",
        speaker: "Mark Cuban",
        text: "*tries to hide his disappointment* Right. The business. That makes sense. *steps back* We should... we should probably get you back to your hotel. It's late.",
        choices: null,
        nextScene: 'ending_cuban_professional'
    },
    // Scene 82: Taking Lori's offer
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "You turn to Lori Greiner with a confident smile. 'Lori, I'd love to work with you. Your expertise in product development and retail is exactly what my company needs.'",
        choices: null,
        nextScene: 83
    },
    // Scene 83: Lori's response
    {
        background: "sharktank",
        character: null,
        speaker: "Lori Greiner",
        text: "'Excellent choice!' Lori beams. 'I'm so excited to work with you. We're going to make this product a household name. Welcome to the team!'",
        choices: null,
        nextScene: 84
    },
    // Scene 84: Mark's reaction
    {
        background: "sharktank",
        character: "sad",
        speaker: "Mark Cuban",
        text: "*looks disappointed but tries to maintain his composure* I... I understand. Lori is an excellent choice. Congratulations to both of you.",
        choices: null,
        nextScene: 'ending_cuban_lori_offer'
    }
];

// Mark Cuban Endings
export const endings = {
    ending_cuban_passionate: {
        title: "Passionate Connection",
        description: "Under the starlit sky at his childhood basketball court, you and Mark Cuban share a passionate kiss that changes everything. The business partnership becomes something much deeper - a romantic connection that defies all expectations. Together, you build not just a successful company, but a love story that begins in the Shark Tank and flourishes in the real world.",
        background: "basketball"
    },
    ending_cuban_romance: {
        title: "True Love Found",
        description: "Mark Cuban's confession of love is met with your own admission of feelings. What started as a business partnership becomes a beautiful romance. You both realize that sometimes the best deals aren't just about money - they're about finding someone who truly understands your dreams and supports your vision. Your love story becomes as legendary as your business success.",
        background: "basketball"
    },
    ending_cuban_slow_burn: {
        title: "Slow and Steady",
        description: "You and Mark Cuban decide to take things slowly, building your relationship alongside your business partnership. The respect and admiration you have for each other grows into something deeper over time. Your patience pays off as you discover that the best relationships are built on a foundation of trust, mutual respect, and genuine friendship.",
        background: "basketball"
    },
    ending_cuban_professional: {
        title: "Professional Partnership",
        description: "You and Mark Cuban maintain a strictly professional relationship, focusing on building your company together. While the romantic tension remains, you both respect the boundaries you've set. Your business partnership becomes incredibly successful, and you learn that sometimes the best relationships are built on mutual respect and shared goals rather than romance.",
        background: "basketball"
    },
    ending_cuban_lori_offer: {
        title: "Lori's Mentorship",
        description: "You choose to work with Lori Greiner, the 'Queen of QVC' and one of the most successful entrepreneurs on Shark Tank. Her expertise in product development and retail partnerships proves invaluable. While you and Mark Cuban share a special connection, you realize that sometimes the best business decisions are about finding the right mentor, not just the right partner. Your company thrives under Lori's guidance, and you build a successful business relationship that lasts for years.",
        background: "sharktank"
    }
};