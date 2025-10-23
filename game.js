// Game State
const gameState = {
    currentScene: 0,
    choices: [],
    playerName: "You",
    selectedCharacter: null // Track which character's story is active
};

// Character Sprites
const sprites = {
    neutral: "Characters/MarkCuban/MarkCuban.png",
    affectionate: "Characters/MarkCuban/MarkCubanAffectionate.png",
    angry: "Characters/MarkCuban/MarkCubanAngry.png",
    annoyed: "Characters/MarkCuban/MarkCubanAnnoyed.png",
    blush: "Characters/MarkCuban/MarkCubanBlush.png",
    confused: "Characters/MarkCuban/MarkCubanConfused.png",
    flustered: "Characters/MarkCuban/MarkCubanFlustered.png",
    laugh: "Characters/MarkCuban/MarkCubanLaugh.png",
    nervous: "Characters/MarkCuban/MarkCubanNervous.png",
    pained: "Characters/MarkCuban/MarkCubanPained.png",
    sad: "Characters/MarkCuban/MarkCubanSad.png",
    surprised: "Characters/MarkCuban/MarkCubanSuprised.png"
};

// Shark sprites
const mrWonderfulSprites = {
    neutral: "Characters/Sharks/MrWonderful.png",
    confused: "Characters/Sharks/MrWonderful.png",
    annoyed: "Characters/Sharks/MrWonderful.png"
};

const loriSprites = {
    neutral: "Characters/Sharks/Lori.png"
};

const directorSprites = {
    neutral: "Characters/SideCharacters/Director.png"
};

const producerSprites = {
    neutral: "Characters/SideCharacters/Producer.png"
};

// Mark Zuckerberg sprites
const zuckerbergSprites = {
    neutral: "Characters/MarkZuckeberg/MarkZuck.png",
    affectionate: "Characters/MarkZuckeberg/MarkZuck.png",
    angry: "Characters/MarkZuckeberg/MarkZuck.png",
    annoyed: "Characters/MarkZuckeberg/MarkZuck.png",
    blush: "Characters/MarkZuckeberg/MarkZuck.png",
    confused: "Characters/MarkZuckeberg/MarkZuck.png",
    flustered: "Characters/MarkZuckeberg/MarkZuck.png",
    laugh: "Characters/MarkZuckeberg/MarkZuck.png",
    nervous: "Characters/MarkZuckeberg/MarkZuck.png",
    pained: "Characters/MarkZuckeberg/MarkZuck.png",
    sad: "Characters/MarkZuckeberg/MarkZuck.png",
    surprised: "Characters/MarkZuckeberg/MarkZuck.png"
};

// Jensen Huang sprites
const jensenSprites = {
    neutral: "Characters/JensenHuang/JensenHuang.png",
    affectionate: "Characters/JensenHuang/JensenDreamy.png",
    angry: "Characters/JensenHuang/JensenAngry.png",
    annoyed: "Characters/JensenHuang/JensenAngry.png",
    blush: "Characters/JensenHuang/JensenBlushed.png",
    confused: "Characters/JensenHuang/JensenConfused.png",
    flustered: "Characters/JensenHuang/JensenBlushed.png",
    laugh: "Characters/JensenHuang/JensenLaughing.png",
    nervous: "Characters/JensenHuang/JensenNervous.png",
    pained: "Characters/JensenHuang/JensenPained.png",
    sad: "Characters/JensenHuang/JensenSad.png",
    surprised: "Characters/JensenHuang/JensenSuprised.png"
};

// Game Story - Mark Cuban Route
const markCubanStory = [
    // ACT 1: THE BEGINNING
    // Scene 0: Backstory
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "Six months ago, you quit your stable job to chase a dream. Your savings are running low. Your family thinks you're crazy. But you've built something special - and today, everything changes.",
        choices: null,
        nextScene: 1
    },
    // Scene 1
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "After three rounds of applications, countless practice pitches, and one intense pre-interview... you're finally here. Backstage at Shark Tank. Your heart is pounding.",
        choices: null,
        nextScene: 2
    },
    // Scene 2
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "You can hear muffled voices through the wall. One voice stands out - confident, charismatic, with a hint of humor. Mark Cuban. Your palms are sweating.",
        choices: null,
        nextScene: 3
    },
    // Scene 3
    {
        background: "sharktank",
        character: "director",
        speaker: "Producer",
        text: "You're up in 30 seconds! Remember - be confident, know your numbers, and whatever you do, don't let them see you sweat. Good luck!",
        choices: null,
        nextScene: 4
    },
    // Scene 4: How do you prepare? - narrative
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "The doors are about to open. This is it - your moment.",
        choices: null,
        nextScene: 68
    },
    // Scene 5: Calm approach
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "You close your eyes. Breathe in... breathe out. You've got this. The doors open. Bright lights flood your vision.",
        choices: null,
        nextScene: 8
    },
    // Scene 6: Last-minute prep
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "You scan your notes one more time. Numbers, facts, talking points. The doors open. Time to put theory into practice.",
        choices: null,
        nextScene: 8
    },
    // Scene 7: Wing it
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "You've practiced enough. It's time to just be yourself. The doors open. Here goes everything.",
        choices: null,
        nextScene: 8
    },
    // Scene 8: First sight of the Sharks
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "There they are. Five of the most successful investors in America. And there... is Mark Cuban. He's leaning back in his chair, eyes locked on you with an unreadable expression.",
        choices: null,
        nextScene: 9
    },
    // Scene 9: Making your entrance - narrative
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "Every step feels like it takes forever. The cameras are rolling. The Sharks are watching.",
        choices: null,
        nextScene: 69
    },
    // Scene 10: Confident entrance
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "Well! Look at this energy! I like it! Come on over, tell us what you've got!",
        choices: null,
        nextScene: 13
    },
    // Scene 11: Professional entrance
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "Professional. Composed. Most people come in here either too cocky or terrified. You seem... different. Let's hear what you've got.",
        choices: null,
        nextScene: 13
    },
    // Scene 12: Genuine/nervous entrance
    {
        background: "sharktank",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "*smiles warmly* Hey, it's okay. This is a big moment. Take a breath - we're just people who want to hear your idea. What's your name?",
        choices: null,
        nextScene: 13
    },
    // Scene 13: Introduction
    {
        background: "sharktank",
        character: "neutral",
        speaker: "You",
        text: "Hi Sharks! I'm seeking $200,000 for 10% equity in my company. I've created a solution to a problem that affects millions of people every single day...",
        choices: null,
        nextScene: 14
    },
    // Scene 14: The pitch begins
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "You deliver your pitch. Every word you've practiced a hundred times. But with Mark's eyes on you, somehow each sentence feels more important.",
        choices: null,
        nextScene: 15
    },
    // Scene 15: Mid-pitch interaction
    {
        background: "sharktank",
        character: "confused",
        secondCharacter: "confused",
        secondCharacterType: "mrWonderful",
        speaker: "Mr. Wonderful",
        text: "Wait, wait, wait. Stop right there. What are your sales? How much money have you actually made?",
        choices: null,
        nextScene: 16
    },
    // Scene 16: How do you handle this interruption? - narrative
    {
        background: "sharktank",
        character: "neutral",
        secondCharacter: "neutral",
        secondCharacterType: "mrWonderful",
        speaker: "Narrator",
        text: "Kevin just interrupted your flow. Everyone's watching to see how you handle pressure.",
        choices: null,
        nextScene: 70
    },
    // Scene 17: Strong numbers response
    {
        background: "sharktank",
        character: "surprised",
        secondCharacter: "confused",
        secondCharacterType: "mrWonderful",
        speaker: "Mr. Wonderful",
        text: "Hold on... *leans forward* Did you just say you've done THAT much in revenue already? How long have you been operating?",
        choices: null,
        nextScene: 20
    },
    // Scene 18: Pre-revenue honest
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "Pre-revenue doesn't scare me if the vision is solid. But I need to know - what validation do you have that people actually want this?",
        choices: null,
        nextScene: 20
    },
    // Scene 19: Vision pivot
    {
        background: "sharktank",
        character: "neutral",
        secondCharacter: "annoyed",
        secondCharacterType: "mrWonderful",
        speaker: "Mr. Wonderful",
        text: "That's not what I asked! I asked about sales, not your dreams!",
        choices: null
    },
    {
        background: "sharktank",
        character: "neutral",
        secondCharacter: "annoyed",
        secondCharacterType: "mrWonderful",
        speaker: "Mark Cuban",
        text: "*holds up hand* Kevin, let them finish. I want to hear where this is going. Continue...",
        choices: null,
        nextScene: 21
    },
    // Scene 20: Mark's personal question
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "Okay, forget the numbers for a second. I want to know something. *looks directly at you* WHY this? What drives you to wake up every morning and work on THIS specific problem?",
        choices: null,
        nextScene: 21
    },
    // Scene 21: Your moment to connect - narrative
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "This is it. Mark Cuban - billionaire, tech genius, sports team owner - wants to know about YOU. The real you.",
        choices: null,
        nextScene: 71
    },
    // Scene 22: Personal story path - part 1
    {
        background: "sharktank",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "Wow... *sits back, genuinely moved* That's... I wasn't expecting that. You know what? I get it. I really do.",
        choices: null,
        nextScene: 74
    },
    // Scene 23: Research/data path
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "Smart. You've done your homework. Numbers don't lie, and you clearly understand your market better than most entrepreneurs who come in here.",
        choices: null,
        nextScene: 27
    },
    // Scene 24: Vision path
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "I love it! Big vision, big dreams. That's what separates the good from the great. But let's talk execution - how do you actually make this happen?",
        choices: null,
        nextScene: 27
    },
    // ACT 2: THE CONNECTION
    // Scene 25: Other Sharks react
    {
        background: "sharktank",
        character: "neutral",
        secondCharacter: "neutral",
        secondCharacterType: "lori",
        speaker: "Lori Greiner",
        text: "Mark seems really interested. I'd like to make an offer too - I'll give you the $200,000 for 15% equity.",
        choices: null
    },
    {
        background: "sharktank",
        character: "neutral",
        secondCharacter: "neutral",
        secondCharacterType: "lori",
        thirdCharacter: "neutral",
        thirdCharacterType: "mrWonderful",
        speaker: "Mr. Wonderful",
        text: "I'll do the $200,000, but I want 20% equity and a $50,000 royalty until I recoup $400,000. Then the royalty drops to $1 per unit in perpetuity.",
        choices: null
    },
    // Scene 26: Mark's counter
    {
        background: "sharktank",
        character: "nervous",
        secondCharacter: "neutral",
        secondCharacterType: "lori",
        thirdCharacter: "neutral",
        thirdCharacterType: "mrWonderful",
        speaker: "Mark Cuban",
        text: "*looks uncomfortable with the competition* Look, here's what I want to do. I'll give you the $200,000 for 12% equity. But more importantly...",
        choices: null
    },
    {
        background: "sharktank",
        character: "flustered",
        speaker: "Mark Cuban",
        text: "*runs hand through hair* I want to actually work with you on this. Not just write a check - I mean really collaborate. There's something special here and I... *trails off*",
        choices: null
    },
    // Scene 27: Nervous moment
    {
        background: "sharktank",
        character: "surprised",
        secondCharacter: "neutral",
        secondCharacterType: "lori",
        speaker: "Lori Greiner",
        text: "*raises eyebrow* Mark, are you okay? You seem... different.",
        choices: null
    },
    {
        background: "sharktank",
        character: "blush",
        speaker: "Mark Cuban",
        text: "*clears throat* I'm fine! I just... *looks at you* I believe in this. And I believe in YOU. What do you say?",
        choices: null,
        nextScene: 33
    },
    // Scene 28: Your decision - narrative
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "Three offers on the table. But Mark's offer isn't just about money - there's something else in his eyes. Something that makes your heart race.",
        choices: null,
        nextScene: 72
    },
    // Scene 29: Accept Mark directly
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "YES! *stands up excited* That's what I'm talking about! We've got a deal!",
        choices: null
    },
    {
        background: "sharktank",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "*walks over and shakes your hand, holding it a moment longer than necessary* Welcome to the team. I think this is the start of something... really special.",
        choices: null,
        nextScene: 42
    },
    // Scene 30: Negotiate with Mark
    {
        background: "sharktank",
        character: "confused",
        speaker: "Mark Cuban",
        text: "You want to negotiate? *pauses* ...I respect that. Okay, tell me what you're thinking.",
        choices: null
    },
    {
        background: "sharktank",
        character: "neutral",
        speaker: "You",
        text: "I love your offer and I want to work with you specifically, Mark. But could we do 10% for the $200,000?",
        choices: null
    },
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "You know what? I like that you're fighting for your company. 11% and we have a deal. Final offer.",
        choices: null
    },
    {
        background: "sharktank",
        character: "blush",
        speaker: "Narrator",
        text: "You nod. Mark grins and walks over to shake your hand. His touch is warm, confident. And he definitely holds on a bit longer than a normal handshake.",
        choices: null,
        nextScene: 42
    },
    // Scene 31: Choose Lori instead
    {
        background: "sharktank",
        character: "sad",
        speaker: "Mark Cuban",
        text: "Oh... I... I understand. Lori's great. You'll be in good hands.",
        choices: null
    },
    {
        background: "sharktank",
        character: "pained",
        speaker: "Mark Cuban",
        text: "*sits back down, looks down* I thought... never mind. Congratulations on your deal.",
        choices: null,
        nextScene: 'ending_missed_connection'
    },
    // ACT 3: AFTER THE DEAL  
    // Scene 32: Filming wraps
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Narrator",
        text: "The cameras stop rolling. The producers call 'Cut!' The other Sharks congratulate you and head out. But Mark lingers...",
        choices: null
    },
    {
        background: "sharktank",
        character: "nervous",
        speaker: "Mark Cuban",
        text: "Hey, so... *rubs back of neck* I know this might sound forward, but would you want to grab dinner? Tonight? We could talk about next steps for the business and...",
        choices: null
    },
    // Scene 33: Dinner invitation - dialogue
    {
        background: "sharktank",
        character: "flustered",
        speaker: "Mark Cuban",
        text: "*looks uncharacteristically unsure* And I'd just... really like to get to know you better. As a person. Not just as an entrepreneur.",
        choices: null,
        nextScene: 73
    },
    // Scene 34: Enthusiastic acceptance
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "Really? That's... that's great! I know this amazing place. Best steak in Dallas. Give me 30 minutes to wrap up here?",
        choices: null,
        nextScene: 49,
        transition: "30 minutes later..."
    },
    // Scene 35: Professional acceptance
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "Of course, business. Right. *looks slightly disappointed but smiles* Yeah, we have a lot to discuss. Let me take you somewhere we can talk.",
        choices: null,
        nextScene: 51,
        transition: "30 minutes later..."
    },
    // Scene 36: Decline dinner
    {
        background: "sharktank",
        character: "sad",
        speaker: "Mark Cuban",
        text: "Oh... yeah, of course. You've had a long day. I get it. I'll... I'll have my team reach out about the paperwork.",
        choices: null
    },
    {
        background: "sharktank",
        character: "pained",
        speaker: "Narrator",
        text: "You see genuine hurt flash across his face before he masks it with a professional smile. Maybe you made a mistake...",
        choices: null,
        nextScene: 'ending_business_only'
    },
    // Scene 37: Enthusiastic dinner
    {
        background: "restaurant",
        character: "affectionate",
        speaker: "Narrator",
        text: "The restaurant is elegant but comfortable. Mark pulls out your chair. Over appetizers, the conversation flows effortlessly between business and life...",
        choices: null
    },
    {
        background: "restaurant",
        character: "blush",
        speaker: "Mark Cuban",
        text: "You know what? I haven't enjoyed talking to someone this much in... I can't remember how long. You're not just smart - you're fascinating.",
        choices: null,
        nextScene: 53
    },
    // Scene 38: Professional dinner
    {
        background: "restaurant",
        character: "neutral",
        speaker: "Narrator",
        text: "At dinner, you discuss market strategy, growth plans, and timelines. It's productive. But you catch Mark looking at you sometimes like he wants to say something else...",
        choices: null
    },
    {
        background: "restaurant",
        character: "confused",
        speaker: "Mark Cuban",
        text: "*puts down menu* Can I ask you something personal? And you can totally say no if it's too forward...",
        choices: null,
        nextScene: 55
    },
    // Scene 39: Deep conversation
    {
        background: "restaurant",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "Tell me something about yourself that has nothing to do with business. What makes you happy? What are you passionate about outside of work?",
        choices: null
    },
    {
        background: "restaurant",
        character: "blush",
        speaker: "Narrator",
        text: "You share stories. He shares stories. Time disappears. At some point, you realize his hand is near yours on the table...",
        choices: [
            {
                text: "Gently touch his hand",
                nextScene: 57
            },
            {
                text: "Keep the moment light and pull back slightly",
                nextScene: 59
            },
            {
                text: "Change the subject back to business",
                nextScene: 61
            }
        ]
    },
    // Scene 40: Personal question during professional dinner
    {
        background: "restaurant",
        character: "nervous",
        speaker: "Mark Cuban",
        text: "Why did you really come on Shark Tank? And don't give me the practiced answer. The real reason.",
        choices: null
    },
    {
        background: "restaurant",
        character: "affectionate",
        speaker: "Narrator",
        text: "You answer honestly. About your dreams, your fears, your hope. Mark listens like every word matters. The professional barrier starts to crack...",
        choices: null,
        nextScene: 62
    },
    // Scene 41: Touch his hand
    {
        background: "restaurant",
        character: "surprised",
        speaker: "Mark Cuban",
        text: "*looks down at your hands, then back up at you* I... wow. I wasn't sure if you felt this too.",
        choices: null
    },
    {
        background: "restaurant",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "*intertwines fingers with yours* This is probably crazy. We just met. But I can't stop thinking about you...",
        choices: null,
        nextScene: 64
    },
    // Scene 42: Pull back
    {
        background: "restaurant",
        character: "confused",
        speaker: "Mark Cuban",
        text: "*notices you pull back* Sorry, was I... did I misread this? I thought...",
        choices: null
    },
    {
        background: "restaurant",
        character: "nervous",
        speaker: "Narrator",
        text: "He looks genuinely worried he overstepped. How do you respond?",
        choices: [
            {
                text: "Reassure him - 'No, I'm just nervous. I do feel something.'",
                nextScene: 64
            },
            {
                text: "Be honest - 'Maybe we should take things slow?'",
                nextScene: 66
            }
        ]
    },
    // Scene 43: Change to business
    {
        background: "restaurant",
        character: "sad",
        speaker: "Mark Cuban",
        text: "*sits back, looks disappointed* Right. Business. Of course. *forces a smile* So, about the product roadmap...",
        choices: null,
        nextScene: 68
    },
    // Scene 44: Opening up continues
    {
        background: "restaurant",
        character: "blush",
        speaker: "Mark Cuban",
        text: "Can I be honest? I asked you to dinner pretending it was about business. But really... I just wanted to spend more time with you.",
        choices: null
    },
    {
        background: "restaurant",
        character: "nervous",
        speaker: "Mark Cuban",
        text: "Is that... is that okay? Or am I completely out of line here?",
        choices: [
            {
                text: "It's more than okay - smile warmly",
                nextScene: 64
            },
            {
                text: "I'm flattered but let's stay professional",
                nextScene: 68
            }
        ]
    },
    // Scene 45: Romantic path continues
    {
        background: "restaurant",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "I know this is fast. I know we just met. But I haven't felt this way about someone in... maybe ever.",
        choices: null
    },
    {
        background: "restaurant",
        character: "blush",
        speaker: "Mark Cuban",
        text: "I don't just want to invest in your company. I want to invest in us. In whatever this could be. What do you say?",
        choices: [
            {
                text: "Kiss him",
                nextScene: 'ending_true_love'
            },
            {
                text: "Tell him you feel the same way",
                nextScene: 'ending_romance'
            },
            {
                text: "Say you need time to think",
                nextScene: 66
            }
        ]
    },
    // Scene 46: Take it slow
    {
        background: "restaurant",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "You're right. This is all happening really fast. I respect that. Let's... let's take our time. Build something real.",
        choices: null
    },
    {
        background: "restaurant",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "But I want you to know - I'm all in. On the business, on getting to know you, on seeing where this goes. No pressure, just... possibility.",
        choices: null,
        nextScene: 'ending_slow_burn'
    },
    // Scene 47: Professional boundary
    {
        background: "restaurant",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "I understand. Professional boundaries. Smart. *looks disappointed but respectful* We'll make a great team. The business kind.",
        choices: null,
        nextScene: 'ending_business_partners'
    },
    // Scene 75: How do you prepare? - choice
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "How do you spend these final seconds?",
        choices: [
            {
                text: "Take deep breaths and visualize success",
                nextScene: 5
            },
            {
                text: "Review your pitch notes one last time",
                nextScene: 6
            },
            {
                text: "Just go for it - trust your preparation",
                nextScene: 7
            }
        ]
    },
    // Scene 76: Making your entrance - choice
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "How do you walk in?",
        choices: [
            {
                text: "Confident and energetic - own the room!",
                nextScene: 10
            },
            {
                text: "Professional and composed - show you mean business",
                nextScene: 11
            },
            {
                text: "Genuine and a bit nervous - be authentically you",
                nextScene: 12
            }
        ]
    },
    // Scene 77: How do you handle this interruption? - choice
    {
        background: "sharktank",
        character: "neutral",
        secondCharacter: "neutral",
        secondCharacterType: "mrWonderful",
        speaker: "Narrator",
        text: "What do you do?",
        choices: [
            {
                text: "Confidently state your numbers and continue",
                nextScene: 17
            },
            {
                text: "Admit you're pre-revenue but explain your traction",
                nextScene: 18
            },
            {
                text: "Acknowledge the question and pivot to your vision",
                nextScene: 19
            }
        ]
    },
    // Scene 78: Your moment to connect - choice
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "How do you answer?",
        choices: [
            {
                text: "Share a deeply personal story that inspired this",
                nextScene: 22
            },
            {
                text: "Explain the research and market insight you discovered",
                nextScene: 23
            },
            {
                text: "Talk about your vision to change the world",
                nextScene: 24
            }
        ]
    },
    // Scene 79: Your decision - choice
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Narrator",
        text: "Who do you choose?",
        choices: [
            {
                text: "Accept Mark's offer immediately",
                nextScene: 34
            },
            {
                text: "Ask Mark if you can negotiate the equity down",
                nextScene: 36
            },
            {
                text: "Consider Lori's offer instead",
                nextScene: 40
            }
        ]
    },
    // Scene 80: Dinner invitation - choice
    {
        background: "sharktank",
        character: "flustered",
        speaker: "Narrator",
        text: "He's asking you out. The Mark Cuban is asking YOU out. How do you respond?",
        choices: [
            {
                text: "Accept enthusiastically - 'I'd love to!'",
                nextScene: 45
            },
            {
                text: "Accept but keep it professional - 'Sure, let's discuss the business.'",
                nextScene: 46
            },
            {
                text: "Decline politely - 'I should probably get home.'",
                nextScene: 47
            }
        ]
    },
    // Scene 81: Personal story path - part 2
    {
        background: "sharktank",
        character: "blush",
        speaker: "Mark Cuban",
        text: "I started with nothing too. Sleeping on floors, living on ketchup sandwiches. When you've been there, you recognize that fire in someone else.",
        choices: null,
        nextScene: 27
    }
];

// Game Story - Jensen Huang Route
const jensenHuangStory = [
    // ACT 1: THE AIRPORT ENCOUNTER
    // Scene 0: Airport arrival
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "San Francisco International Airport. You're here for NVIDIA's GTC Conference - the biggest moment of your career as a rising AI researcher. Your groundbreaking work on neural network acceleration could change everything.",
        choices: null,
        nextScene: 1
    },
    // Scene 1: Pre-encounter nerves
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "Your presentation is tomorrow. You've rehearsed it a hundred times, but the pressure is immense. This research could revolutionize real-time rendering. Your hands shake slightly as you pull your luggage through the terminal.",
        choices: null,
        nextScene: 2
    },
    // Scene 2: The collision
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "Outside the terminal, juggling your conference badge, laptop bag, and a folder of research papers, you don't see him until it's too late. The collision sends your carefully organized papers flying into the San Francisco wind.",
        choices: null,
        nextScene: 3
    },
    // Scene 3: The scramble
    {
        background: "outdoor",
        character: null,
        speaker: "You",
        text: "*panicking* Oh no, no, no! My research! *drops to knees, trying to catch papers* I'm so sorry, I wasn't looking where I was—",
        choices: null,
        nextScene: 4
    },
    // Scene 4: Jensen appears
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*chasing down papers* Hey, it's okay! I've got this one— *catches a page mid-air* Wait a second... *starts reading while still on his feet* Neural acceleration through dynamic tensor restructuring?",
        choices: null,
        nextScene: 5
    },
    // Scene 5: The realization
    {
        background: "outdoor",
        character: "surprised",
        speaker: "Narrator",
        text: "You look up from gathering papers. Black leather jacket. Silver hair. That unmistakable presence. Your heart stops. Jensen Huang is holding your research paper, actually READING it, his eyes scanning the equations with intense focus.",
        choices: null,
        nextScene: 6
    },
    // Scene 6: Jensen's recognition
    {
        background: "outdoor",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*still reading, completely absorbed* This is... *looks up at you* You wrote this? *kneels down to help gather more papers* This optimization approach - we've been trying to crack this for months.",
        choices: null,
        nextScene: 7
    },
    // Scene 7: The conversation begins
    {
        background: "outdoor",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*helping organize your papers* You're presenting at GTC, aren't you? *glances at your conference badge* I should know - I approved the research track. But somehow I missed THIS. What's your name?",
        choices: null,
        nextScene: 8
    },
    // Scene 8: Introduction
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Narrator",
        text: "You introduce yourself, still in shock. He's not just being polite - he's genuinely excited. He asks three rapid-fire technical questions about your methodology. You answer without thinking, and his eyes light up with each response.",
        choices: null,
        nextScene: 9
    },
    // Scene 9: The unusual request
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*hands you back your papers, now neatly organized* Look, I know this is unusual. We just met - literally collided - at an airport. But I have to ask... *checks his watch* are you free tonight?",
        choices: null,
        nextScene: 10
    },
    // Scene 10: The invitation
    {
        background: "outdoor",
        character: "blush",
        speaker: "Jensen Huang",
        text: "I want to see the rest of your work. NVIDIA headquarters, tonight. After hours when it's quiet and we can really talk. I'll show you things we haven't even announced yet. *pauses* Things I think only you would truly understand.",
        choices: null,
        nextScene: 11
    },
    // Scene 11: The decision moment
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Narrator",
        text: "Jensen Huang - THE Jensen Huang - just invited you to a private tour of NVIDIA HQ. His eyes are intense, waiting for your answer. The California sun catches his leather jacket. This could change everything.",
        choices: null,
        nextScene: 50
    },
    // Scene 12: Accepted - enthusiastic
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*smiles warmly* Perfect. I'll send a car at 10 PM. *hands you his business card with a handwritten note on the back* Text me when you're at your hotel. And... bring your research. All of it.",
        choices: null,
        nextScene: 15,
        transition: "That night, 10 PM..."
    },
    // Scene 13: Accepted - professional
    {
        background: "outdoor",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "Great. This could be the start of something revolutionary. *pauses* I'll have my driver pick you up at 10. NVIDIA HQ. Just you and me. *slight smile* Well, and a few thousand GPUs.",
        choices: null,
        nextScene: 15,
        transition: "That night, 10 PM..."
    },
    // Scene 14: Accepted - curious
    {
        background: "outdoor",
        character: "blush",
        speaker: "Jensen Huang",
        text: "*eyes light up* You won't regret this. I want to show you things we haven't even announced yet. *lowers voice* Things I think only you would truly understand. See you tonight.",
        choices: null,
        nextScene: 15,
        transition: "That night, 10 PM..."
    },
    // ACT 2: THE LATE-NIGHT TOUR
    // Scene 15: The car ride
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "A sleek black car picks you up at exactly 10 PM. The driver doesn't speak, just nods and drives through San Francisco's glowing streets. Your research folder sits on your lap. Your heart won't stop racing.",
        choices: null,
        nextScene: 16
    },
    // Scene 16: Arriving at NVIDIA HQ
    {
        background: "nvidiaoffice",
        character: null,
        speaker: "Narrator",
        text: "NVIDIA headquarters looms against the night sky - all glass and steel, illuminated by that signature green glow. It's eerily beautiful. Empty. Powerful. The building where the future is designed.",
        choices: null,
        nextScene: 17
    },
    // Scene 17: Jensen at the entrance
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*waiting at the entrance, leather jacket back on* You came. *seems almost relieved* I wasn't sure you would. Sometimes I forget how unusual these invitations sound. Come in.",
        choices: null,
        nextScene: 18
    },
    // Scene 18: Inside the building
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*walks you through darkened hallways* During the day, this place is chaos. Three thousand employees, constant meetings, deadlines. But at night... *gestures to walls lined with GPU prototypes* at night, it's just the dreams.",
        choices: null,
        nextScene: 19
    },
    // Scene 19: The main lab
    {
        background: "nvidiaoffice",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*stops at massive doors, scans his badge* This is the innovation lab. Only a handful of people have access. *doors open to reveal walls of screens and prototype hardware* This is where we build the impossible.",
        choices: null,
        nextScene: 20
    },
    // Scene 20: Your research on display
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*pulls up your research on a massive 8K display* I've been thinking about this all evening. This section here - *points to your optimization algorithm* - do you realize what this could do for our next architecture?",
        choices: null,
        nextScene: 21
    },
    // Scene 21: Technical deep dive
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Narrator",
        text: "You spend an hour going through your research together. Jensen asks questions that push your thinking further. He sketches ideas on a digital whiteboard. You counter with improvements. It's the most intellectually stimulating conversation of your life.",
        choices: null,
        nextScene: 22
    },
    // Scene 22: The prototype
    {
        background: "nvidiaoffice",
        character: "blush",
        speaker: "Jensen Huang",
        text: "*leads you to a secured section* Okay, I'm going to show you something no one outside this building has seen. *unveils a sleek prototype GPU* This is our next generation. We're announcing it at the keynote.",
        choices: null,
        nextScene: 23
    },
    // Scene 23: The confession begins
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*sits down, suddenly less CEO and more human* Can I tell you something? I don't usually do this. Bring researchers here in the middle of the night. My team would think I've lost my mind.",
        choices: null,
        nextScene: 24
    },
    // Scene 24: Opening up
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "But reading your work... talking to you at the airport... *looks at you directly* It reminded me why I started this company. That pure, unfiltered excitement about pushing boundaries. I'd forgotten what that felt like.",
        choices: null,
        nextScene: 25
    },
    // Scene 25: The connection
    {
        background: "nvidiaoffice",
        character: "blush",
        speaker: "Narrator",
        text: "It's 2 AM. You're alone with Jensen Huang in the heart of NVIDIA's most secret lab, bathed in green light from prototype displays. He's looking at you like you're the most fascinating algorithm he's ever encountered.",
        choices: null,
        nextScene: 26
    },
    // Scene 26: Your response moment
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "I see the way you think about technology. Not just as tools, but as... *searches for words* as poetry. As art. Most people don't see it that way. Do you feel it too? This connection?",
        choices: null,
        nextScene: 51
    },
    // Scene 27: Passionate response
    {
        background: "nvidiaoffice",
        character: "blush",
        speaker: "Jensen Huang",
        text: "*steps closer* Exactly. Most people see technology as cold, logical. But you and I? We see the poetry in it. The art. *voice softens* I haven't met someone who understood that in... years.",
        choices: null,
        nextScene: 30
    },
    // Scene 28: Inspired response
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*eyes bright with excitement* Yes! That's what NVIDIA is about! And you... *reaches out, almost touches your hand* you get it on a level that's... rare.",
        choices: null,
        nextScene: 30
    },
    // Scene 29: Connection response
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*looks at you intently* I feel that too. This connection. It's... *pauses* I wasn't expecting this when I invited you here tonight. But I'm glad I did.",
        choices: null,
        nextScene: 30
    },
    // Scene 30: The moment
    {
        background: "nvidiaoffice",
        character: "blush",
        speaker: "Narrator",
        text: "It's 3 AM. You're standing in the heart of NVIDIA's innovation lab, bathed in green light from the prototype displays. Jensen is closer than he needs to be. The air between you feels electric.",
        choices: null,
        nextScene: 31,
        transition: "The next morning - Your Presentation..."
    },
    // ACT 3: THE CONFERENCE & KEYNOTE
    // Scene 31: Morning of your presentation
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "You barely slept. You got back to the hotel at 4 AM, and your presentation is at 9. You keep replaying last night - Jensen's words, his eyes, the way he looked at you in the green glow of those screens.",
        choices: null,
        nextScene: 32
    },
    // Scene 32: Backstage prep
    {
        background: "nvidiaconference",
        character: "producer",
        speaker: "Conference Producer",
        text: "*adjusting your mic* You're on in five minutes. Big crowd today - word got out that Jensen personally recommended your session. You nervous?",
        choices: null,
        nextScene: 33
    },
    // Scene 33: Your presentation
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "You present your research to a packed room. Your voice is steady. Your demos are flawless. And there, in the back row, you spot a familiar leather jacket. Jensen came to watch you present.",
        choices: null,
        nextScene: 34
    },
    // Scene 34: After your presentation
    {
        background: "nvidiaconference",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*approaches after, surrounded by people but focused only on you* That was incredible. You had them in the palm of your hand. *lowers voice* I have my keynote in an hour. Will you stay?",
        choices: null,
        nextScene: 35
    },
    // Scene 35: Pre-keynote
    {
        background: "nvidiaconference",
        character: "producer",
        speaker: "Conference Producer",
        text: "*to Jensen* Sir, we're ready for you. The main hall is at capacity. We've never had a turnout like this. *adjusts headset* You're on in three minutes.",
        choices: null,
        nextScene: 36
    },
    // Scene 36: Jensen's moment
    {
        background: "nvidiaconference",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*turns to you before going on stage* What I'm about to do... *pauses* I hope you understand why. *touches your hand briefly* Watch from the front row.",
        choices: null,
        nextScene: 37
    },
    // Scene 37: Keynote begins
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "The lights dim. The crowd of thousands goes silent. Then Jensen Huang walks on stage in his iconic leather jacket, and the hall erupts in applause. You're in the front row, heart pounding.",
        choices: null,
        nextScene: 38
    },
    // Scene 38: The presentation builds
    {
        background: "nvidiaconference",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*mid-presentation* Today, we're announcing the future of AI acceleration. A GPU architecture that will change everything. But first, I want to talk about innovation - real innovation - and where it comes from.",
        choices: null,
        nextScene: 39
    },
    // Scene 39: The buildup
    {
        background: "nvidiaconference",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "Yesterday, I met someone at the airport. A researcher whose work reminded me why we do this. Why we push boundaries. Why we believe in the impossible. *pauses* And that inspired our next GPU's name.",
        choices: null,
        nextScene: 40
    },
    // Scene 40: The announcement
    {
        background: "nvidiaconference",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*screen behind him lights up with GPU specs* Ladies and gentlemen, I present to you the NVIDIA [Your Name] Architecture. Named after the researcher who's revolutionizing neural acceleration.",
        choices: null,
        nextScene: 41
    },
    // Scene 41: The shock
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "Time stops. Your name. YOUR name is on the screen behind Jensen Huang. In letters ten feet tall. Cameras flash. People turn to stare at you. Jensen's eyes find yours. He's smiling. The room EXPLODES.",
        choices: null,
        nextScene: 42
    },
    // Scene 42: The aftermath begins
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "The applause is deafening. Jensen continues his presentation, but you can't hear it. Your phone is already buzzing. Twitter is exploding. The tech press is scrambling. 'Who is this researcher?' 'How close are they to Jensen Huang?'",
        choices: null,
        nextScene: 43
    },
    // ACT 4: THE MEDIA STORM
    // Scene 43: The immediate fallout
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "You can barely leave your seat. Reporters swarm. Cameras flash. Everyone wants to know - who are you? What's your relationship with Jensen? How did this happen in just 24 hours?",
        choices: null,
        nextScene: 44
    },
    // Scene 44: The headlines
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "Within an hour, the headlines are everywhere. 'NVIDIA CEO Names GPU After Unknown Researcher.' 'Jensen Huang's Secret Protégé Revealed.' 'GTC Scandal: Nepotism or Innovation?' Your name is trending worldwide.",
        choices: null,
        nextScene: 45
    },
    // Scene 45: Producer intervenes
    {
        background: "nvidiaconference",
        character: "producer",
        speaker: "Conference Producer",
        text: "*pushes through the crowd* Okay, everyone BACK! This researcher has rights! No interviews without consent! *turns to you* Come with me. Backstage. Now.",
        choices: null,
        nextScene: 46
    },
    // Scene 46: Backstage chaos
    {
        background: "nvidiaconference",
        character: "producer",
        speaker: "Conference Producer",
        text: "*leading you through corridors* I've been running this conference for ten years. Never seen anything like this. Jensen's PR team is in full crisis mode. The media is relentless. Are you okay?",
        choices: null,
        nextScene: 47
    },
    // Scene 47: The rival appears
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Dr. Sarah Chen",
        text: "*blocks your path, voice sharp* Well, well. The mystery researcher. I've been coming to GTC for five years. Published dozens of papers. But YOU show up once and get a GPU named after you?",
        choices: null,
        nextScene: 48
    },
    // Scene 48: The accusation
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Dr. Sarah Chen",
        text: "*steps closer, voice dripping with contempt* We all saw how Jensen looked at you. How he touched your hand before going on stage. A GPU named after you after ONE NIGHT at headquarters? Please. We know what's really going on.",
        choices: null,
        nextScene: 52
    },
    // Scene 49: Stand your ground
    {
        background: "nvidiaconference",
        character: null,
        speaker: "You",
        text: "*voice steady despite the fury* My research speaks for itself. I've published in Nature, Science, IEEE. Jensen recognized innovation, not... whatever narrative you're trying to create. Maybe focus on your own work instead of tearing down mine.",
        choices: null,
        nextScene: 60
    },
    // Scene 50: Defend Jensen
    {
        background: "nvidiaconference",
        character: null,
        speaker: "You",
        text: "*passionately* Jensen Huang built NVIDIA on merit and innovation. He's the most principled person in this industry. If my work impressed him, that's because I spent YEARS perfecting it. Your jealousy is showing, Dr. Chen.",
        choices: null,
        nextScene: 60
    },
    // Scene 60: Chen's retreat
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Dr. Sarah Chen",
        text: "*glares* We'll see what the press thinks. *storms off* This isn't over.",
        choices: null,
        nextScene: 61
    },
    // Scene 61: Producer's support
    {
        background: "nvidiaconference",
        character: "producer",
        speaker: "Conference Producer",
        text: "*impressed* That was well handled. Look, I don't know the full story, but I saw your presentation this morning. You're brilliant. Don't let them intimidate you. *headset beeps* Jensen's looking for you.",
        choices: null,
        nextScene: 62
    },
    // Scene 62: The pressure mounts
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "The rest of the day is a blur. Tech blogs dissect your credentials. Twitter debates your work. Some defend you. Many don't. Through it all, you haven't seen Jensen since the keynote. Your phone buzzes - it's him. 'Meet me at Pier 7. 8 PM. Please.'",
        choices: null,
        nextScene: 63,
        transition: "That evening - San Francisco Bay..."
    },
    // ACT 5: THE BAY CONFESSION
    // Scene 63: Arriving at the pier
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "Pier 7. The San Francisco Bay stretches endlessly, reflecting the city lights like scattered diamonds. You see him at the edge - leather jacket collar up against the wind, hands in pockets, staring out at the water.",
        choices: null,
        nextScene: 64
    },
    // Scene 64: Approaching Jensen
    {
        background: "outdoor",
        character: "neutral",
        speaker: "Narrator",
        text: "Your footsteps echo on the wooden pier. He doesn't turn, but his shoulders tense. He knows you're there. The wind whips your hair. Your heart is pounding harder than it did during the keynote announcement.",
        choices: null,
        nextScene: 65
    },
    // Scene 65: The apology
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*still facing the water* I'm sorry. *voice quiet* For the chaos. For putting you in that position. For... *turns to face you* for not thinking about how the world would react. I should have protected you better.",
        choices: null,
        nextScene: 66
    },
    // Scene 66: No regrets
    {
        background: "outdoor",
        character: "blush",
        speaker: "Jensen Huang",
        text: "But I'm not sorry for what I feel. *steps closer* I haven't felt this kind of excitement - in technology OR love - since the earliest days of NVIDIA. Since we were three people in a garage changing the world.",
        choices: null,
        nextScene: 67
    },
    // Scene 67: The truth
    {
        background: "outdoor",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "That night at headquarters? *voice soft* It wasn't just about your research. Yes, your work is brilliant. But YOU... you reminded me what passion looks like. In work. In life. In everything that matters.",
        choices: null,
        nextScene: 68
    },
    // Scene 68: The confession deepens
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "I've built a company worth billions. I've been on magazine covers. Given keynotes to millions. But standing here with you? *voice cracks slightly* This terrifies me more than any of that ever did.",
        choices: null,
        nextScene: 69
    },
    // Scene 69: The vulnerability
    {
        background: "outdoor",
        character: "blush",
        speaker: "Narrator",
        text: "The most powerful CEO in Silicon Valley is standing in front of you, completely vulnerable. The city lights shimmer behind him. The water laps against the pier. Your breath catches.",
        choices: null,
        nextScene: 70
    },
    // Scene 70: Your response moment
    {
        background: "outdoor",
        character: "affectionate",
        speaker: "Narrator",
        text: "The bay, the lights, the wind - it all fades. There's only Jensen, eyes searching yours for an answer. Your heart is racing. This moment will change everything. How do you respond?",
        choices: null,
        nextScene: 53
    },
    // ACT 6: THE FINALE
    // Scene 71: The next day - final keynote
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "GTC's final day. The closing keynote. Jensen's last presentation before the conference ends and everyone goes home. You haven't slept. The media is still circling. But you're here. Backstage.",
        choices: null,
        nextScene: 72,
        transition: "The final keynote..."
    },
    // Scene 72: Producer's observation
    {
        background: "nvidiaconference",
        character: "producer",
        speaker: "Conference Producer",
        text: "*adjusting cameras* Whatever's happening between you two... *looks at you meaningfully* I hope you know what you're doing. Jensen's on in five. He asked if you were here.",
        choices: null,
        nextScene: 73
    },
    // Scene 73: Jensen backstage
    {
        background: "nvidiaconference",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*finds you in the wings* You came. *seems relieved* After last night, after everything... I wasn't sure. *takes your hand* The world doesn't understand us. They won't. But I refuse to let this go.",
        choices: null,
        nextScene: 74
    },
    // Scene 74: The final declaration
    {
        background: "nvidiaconference",
        character: "blush",
        speaker: "Jensen Huang",
        text: "I refuse to let YOU go. *eyes intense, the green glow of the stage lights reflecting in them* Tell me you feel it too. Tell me last night at the bay wasn't just the moment. Tell me this is real.",
        choices: null,
        nextScene: 54
    },
    // Scene 50: NVIDIA HQ invitation - choice
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Narrator",
        text: "Jensen Huang just invited you to a private, after-hours tour of NVIDIA headquarters. This could change everything. How do you respond?",
        choices: [
            {
                text: "Yes! I'd love to see NVIDIA HQ",
                nextScene: 12
            },
            {
                text: "That sounds incredible - professionally",
                nextScene: 13
            },
            {
                text: "I'm curious what you want to show me",
                nextScene: 14
            }
        ]
    },
    // Scene 51: Late night connection - choice
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Narrator",
        text: "It's 2 AM. You're alone with Jensen in the heart of NVIDIA's innovation lab. He's opening up about passion, about connection. What do you say?",
        choices: [
            {
                text: "I understand that passion completely",
                nextScene: 27
            },
            {
                text: "Your work has always inspired me",
                nextScene: 28
            },
            {
                text: "I feel that connection too",
                nextScene: 29
            }
        ]
    },
    // Scene 52: Confronting the rival - choice
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "Dr. Chen is accusing you publicly. Everyone's watching. The media is recording. How do you respond to this attack?",
        choices: [
            {
                text: "Defend your work and credentials",
                nextScene: 49
            },
            {
                text: "Defend Jensen's integrity",
                nextScene: 50
            }
        ]
    },
    // Scene 53: Bay confession response - choice
    {
        background: "outdoor",
        character: "affectionate",
        speaker: "Narrator",
        text: "Jensen just confessed his feelings by the bay. The city lights shimmer. Your heart is pounding. This moment will define everything.",
        choices: [
            {
                text: "Kiss him under the stars",
                nextScene: 'ending_jensen_true_love'
            },
            {
                text: "Tell him you feel the same",
                nextScene: 71
            }
        ]
    },
    // Scene 54: Backstage finale - choice
    {
        background: "nvidiaconference",
        character: "blush",
        speaker: "Narrator",
        text: "Backstage, with the green glow of keynote screens behind him, Jensen is refusing to let you go. The world may not understand, but in this moment, that doesn't matter.",
        choices: [
            {
                text: "I feel it too - let's face this together",
                nextScene: 'ending_jensen_romance'
            },
            {
                text: "Kiss him in the green glow",
                nextScene: 'ending_jensen_slow_burn'
            }
        ]
    }
];

// Game Story - Mark Zuckerberg Route
const markZuckerbergStory = [
    // Scene 0: Story in development
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "Hey there! Thanks for choosing my route. I'm Mark Zuckerberg, and... well, my story is currently in development. The team is working hard to create something special!",
        choices: null,
        nextScene: 1
    },
    // Scene 1: Coming soon
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "In the meantime, why don't you check out Jensen Huang's route or Mark Cuban's Shark Tank adventure? They're both pretty amazing experiences!",
        choices: null,
        nextScene: 'ending_zuck_dev'
    }
];

// Endings - Extended Edition
const endings = {
    ending_true_love: {
        title: "💋 The Kiss That Changed Everything 💋",
        description: "The moment your lips met, you both knew this was it. Mark Cuban - billionaire, Shark, legend - fell completely in love with you. Your company became a billion-dollar success, but that pales in comparison to what you built together: a partnership in business and life that defies all odds. You're engaged now, and he still looks at you like you're the best investment he ever made.",
        image: "Characters/MarkCuban/MarkCubanAffectionate.png",
        background: "romantic"
    },
    ending_romance: {
        title: "💘 True Love's Investment 💘",
        description: "You and Mark Cuban became not just business partners, but life partners. The relationship started slowly, carefully, but grew into something extraordinary. Together, you built an empire worth billions, but more importantly, you found something money can't buy - true love. Mark always says you're his best investment ever, and you know he means it.",
        image: "Characters/MarkCuban/MarkCubanBlush.png",
        background: "romantic"
    },
    ending_slow_burn: {
        title: "🌹 Love Takes Time 🌹",
        description: "You took it slow, building trust and connection brick by brick. Six months later, Mark flew you to Mavs game courtside. A year later, he invited you to his family's Thanksgiving. Now, two years in, what you have is solid, real, and unshakeable. Sometimes the best love stories aren't fast - they're just right.",
        image: "Characters/MarkCuban/MarkCubanAffectionate.png",
        background: "sunset"
    },
    ending_business_partners: {
        title: "🚀 Business Empire Achieved 🚀",
        description: "You kept it professional, and together you built something incredible. Your company became a unicorn within eighteen months. Mark is the best business partner you could ask for - brilliant, supportive, always pushing you to be better. Sometimes you catch him looking at you with something more than professional respect in his eyes, but he respects your boundaries. You built an empire. Maybe that's enough. Maybe.",
        image: "Characters/MarkCuban/MarkCuban.png",
        background: "office"
    },
    ending_business_only: {
        title: "📊 All Business 📊",
        description: "You declined dinner and kept things strictly professional. The business is thriving - Mark's guidance has been invaluable, all handled through assistants and formal meetings. But sometimes, late at night, you see his old texts: 'Great work today' sent at 11pm. You wonder if he types them himself or if that's his assistant too. You wonder if you made the right choice. The business is successful. But you're alone.",
        image: "Characters/MarkCuban/MarkCubanSad.png",
        background: "office"
    },
    ending_missed_connection: {
        title: "💔 What Could Have Been 💔",
        description: "You chose Lori's deal. She's wonderful, and the business is doing great. But sometimes you see Mark at networking events. He's always polite, professional, distant. You both know something could have happened that day in the Tank. But you made your choice, and he respected it. Now all you have are stolen glances across conference rooms and the haunting question: 'What if?'",
        image: "Characters/MarkCuban/MarkCubanPained.png",
        background: "tank"
    },
    ending_no_deal: {
        title: "😢 The One That Got Away 😢",
        description: "For whatever reason, it didn't work out on Shark Tank. You left without a deal, Mark's disappointed face etched in your memory. But life goes on - you bootstrapped your company, found other investors. It's harder this way, but you're making it work. Sometimes you see him on TV and wonder what he's thinking. Sometimes you imagine an alternate reality where everything went differently.",
        image: "Characters/MarkCuban/MarkCubanSad.png",
        background: "tank"
    },
    // Jensen Huang Endings
    ending_jensen_true_love: {
        title: "💚 The Green Glow of Forever 💚",
        description: "That kiss under the city lights by the bay changed everything. What started with scattered papers at an airport became a love story that defied the tech world's scrutiny. The GPU named after you became the fastest-selling in NVIDIA's history, and the media eventually moved on. But you and Jensen? You're still making headlines - in technology AND in love. Every keynote, he finds your eyes in the crowd. Every innovation carries a piece of your late-night conversations at HQ. The world may never fully understand your connection, but standing together in the green glow of progress, you don't need them to. You have each other, and that's more powerful than any processor ever built.",
        image: "Characters/JensenHuang/JensenHuang.png",
        background: "nvidiaconference"
    },
    ending_jensen_romance: {
        title: "🌃 Against All Odds 🌃",
        description: "They said it wouldn't work. The media called it scandal. Your rivals called it unprofessional. But you and Jensen called it love - the kind that ignites innovation and defies expectations. From that chance encounter at the airport to the media storm after the GPU announcement to the quiet confession by the bay - every moment brought you closer. Now, you're not just partners in technology; you're partners in life. He still wears his leather jacket. You still challenge his best engineers. And together, you're proving that the most revolutionary ideas come from the courage to follow your heart, no matter what the world says. Your love story is written in silicon and starlight.",
        image: "Characters/JensenHuang/JensenHuang.png",
        background: "outdoor"
    },
    ending_jensen_slow_burn: {
        title: "💫 Backstage Hearts 💫",
        description: "In the green glow of the keynote screens, backstage at GTC's final night, Jensen kissed you like the world wasn't watching. And maybe, in that moment, it wasn't. What started with scattered research papers and late-night innovation talks evolved into something the headlines could never capture. Yes, there was scandal. Yes, there was pressure. But there was also that 3 AM conversation in the lab when you both realized you'd found something rarer than any breakthrough - genuine connection. Now, every conference ends the same way: backstage, in the green glow, with Jensen pulling you close and whispering that you're his greatest discovery. Love isn't always logical. Sometimes, it's revolutionary.",
        image: "Characters/JensenHuang/JensenHuang.png",
        background: "nvidiaconference"
    },
    // Mark Zuckerberg Ending
    ending_zuck_dev: {
        title: "🚧 Story In Development 🚧",
        description: "Mark Zuckerberg's story is currently being crafted! The team is working hard to bring you an amazing experience at Facebook HQ. In the meantime, check out the other amazing routes - Jensen Huang's NVIDIA romance or Mark Cuban's Shark Tank adventure. Each offers a unique and thrilling journey! Come back soon to see what adventures await with the Meta CEO!",
        image: "Characters/MarkZuckeberg/MarkZuck.png",
        background: "facebook"
    }
};

// Current active story and sprites (will be set based on character selection)
let story = markCubanStory;
let currentSprites = sprites;

// DOM Elements
let dialogueBox, characterName, dialogueText, continueIndicator;
let choiceContainer, characterSprite, background, characterContainer;
let secondCharacterContainer, secondCharacterSprite;
let thirdCharacterContainer, thirdCharacterSprite;
let titleScreen, startButton, endingScreen, restartButton;
let characterSelectionScreen, characterCards, chapterSelectButton;
let bgMusic, titleMusic, sparkleSound, markCubanSound, jensenHuangSound;
let transitionScreen, transitionText;
let splashScreen;
let enableMusicListener = null; // Store reference to the listener

// Initialize the game
function init() {
    // Get DOM elements
    dialogueBox = document.getElementById('dialogueBox');
    characterName = document.getElementById('characterName');
    dialogueText = document.getElementById('dialogueText');
    continueIndicator = document.getElementById('continueIndicator');
    choiceContainer = document.getElementById('choiceContainer');
    characterSprite = document.getElementById('characterSprite');
    background = document.getElementById('background');
    characterContainer = document.getElementById('characterContainer');
    secondCharacterContainer = document.getElementById('secondCharacterContainer');
    secondCharacterSprite = document.getElementById('secondCharacterSprite');
    thirdCharacterContainer = document.getElementById('thirdCharacterContainer');
    thirdCharacterSprite = document.getElementById('thirdCharacterSprite');
    titleScreen = document.getElementById('titleScreen');
    startButton = document.getElementById('startButton');
    endingScreen = document.getElementById('endingScreen');
    restartButton = document.getElementById('restartButton');
    characterSelectionScreen = document.getElementById('characterSelectionScreen');
    characterCards = document.querySelectorAll('.selection-card');
    chapterSelectButton = document.querySelector('.selection-label');
    bgMusic = document.getElementById('bgMusic');
    titleMusic = document.getElementById('titleMusic');
    sparkleSound = document.getElementById('sparkleSound');
    markCubanSound = document.getElementById('markCubanSound');
    jensenHuangSound = document.getElementById('jensenHuangSound');
    transitionScreen = document.getElementById('transitionScreen');
    transitionText = document.getElementById('transitionText');
    splashScreen = document.getElementById('splashScreen');

    // Event listeners
    splashScreen.addEventListener('click', hideSplashScreen);
    startButton.addEventListener('click', showCharacterSelection);
    restartButton.addEventListener('click', restartGame);
    dialogueBox.addEventListener('click', advanceDialogue);
    
    // Character selection listeners
    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            const character = card.dataset.character;
            selectCharacter(character);
        });
    });
    
    // Chapter select button to return to title screen
    chapterSelectButton.addEventListener('click', () => {
        // Hide character selection screen
        characterSelectionScreen.classList.add('hidden');
        
        // Show title screen
        titleScreen.classList.remove('hidden');
        
        // Reset title music if needed
        if (titleMusic.paused) {
            titleMusic.currentTime = 0;
            titleMusic.play().catch(e => console.log("Music play prevented:", e));
        }
    });
    
    // Keyboard support for advancing dialogue
    document.addEventListener('keydown', (e) => {
        // Check if space bar is pressed
        if (e.code === 'Space' || e.key === ' ') {
            // Only advance if game is active and not showing choices
            if (dialogueBox.style.display === 'block' && !choiceContainer.classList.contains('active')) {
                e.preventDefault(); // Prevent page scroll
                advanceDialogue();
            }
        }
    });
    
    // Prevent image dragging globally
    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
    
    // Prevent context menu on images (right-click)
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Hide game elements initially
    dialogueBox.style.display = 'none';
    characterContainer.style.display = 'none';
    secondCharacterContainer.style.display = 'none';
    thirdCharacterContainer.style.display = 'none';
    
    // Hide title screen initially (splash screen shows first)
    titleScreen.classList.add('hidden');
    
    // Initialize cherry blossom petals
    createCherryBlossomPetals();
    createSplashPetals();
}

// Hide splash screen and show title screen
function hideSplashScreen() {
    // Start title music with user interaction
    titleMusic.volume = 0.1;
    titleMusic.play().catch(e => console.log("Title music error:", e));
    
    // Preload title screen background
    const titleBg = new Image();
    titleBg.src = 'TitleScreen.png';
    
    titleBg.onload = () => {
        // Once title screen is loaded, show it first (while splash is still visible)
        titleScreen.classList.remove('hidden');
        
        // Then fade out splash screen
        setTimeout(() => {
            splashScreen.classList.add('hidden');
            // After fade completes (2s), completely remove it from layout
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 2000);
        }, 50);
    };
    
    // Fallback in case image is already cached
    if (titleBg.complete) {
        titleScreen.classList.remove('hidden');
        setTimeout(() => {
            splashScreen.classList.add('hidden');
            // After fade completes (2s), completely remove it from layout
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 2000);
        }, 50);
    }
}

// Create falling cherry blossom petals effect
function createCherryBlossomPetals() {
    const petalsContainer = document.getElementById('petalsContainer');
    const petalCount = 40; // Number of petals
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Random horizontal position
        const leftPosition = Math.random() * 100;
        petal.style.left = leftPosition + '%';
        
        // Random size variation (80% to 120% of base size)
        const size = 12 + Math.random() * 8;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        // Random fall duration (10-20 seconds)
        const fallDuration = 10 + Math.random() * 10;
        petal.style.animationDuration = `${fallDuration}s, ${3 + Math.random() * 2}s`;
        
        // Random delay for staggered effect
        const delay = Math.random() * 10;
        petal.style.animationDelay = `-${delay}s`;
        
        // Random opacity
        petal.style.opacity = 0.3 + Math.random() * 0.5;
        
        petalsContainer.appendChild(petal);
    }
}

// Create falling cherry blossom petals for splash screen
function createSplashPetals() {
    const petalsContainer = document.getElementById('splashPetalsContainer');
    const petalCount = 40; // Number of petals
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Random horizontal position
        const leftPosition = Math.random() * 100;
        petal.style.left = leftPosition + '%';
        
        // Random size variation (80% to 120% of base size)
        const size = 12 + Math.random() * 8;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        // Random fall duration (10-20 seconds)
        const fallDuration = 10 + Math.random() * 10;
        petal.style.animationDuration = `${fallDuration}s, ${3 + Math.random() * 2}s`;
        
        // Random delay for staggered effect
        const delay = Math.random() * 10;
        petal.style.animationDelay = `-${delay}s`;
        
        // Random opacity
        petal.style.opacity = 0.3 + Math.random() * 0.5;
        
        petalsContainer.appendChild(petal);
    }
}

// Create falling cherry blossom petals for character selection screen
function createSelectionPetals() {
    const petalsContainer = document.getElementById('selectionPetalsContainer');
    const petalCount = 40; // Number of petals
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Random horizontal position
        const leftPosition = Math.random() * 100;
        petal.style.left = leftPosition + '%';
        
        // Random size variation (80% to 120% of base size)
        const size = 12 + Math.random() * 8;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        // Random fall duration (10-20 seconds)
        const fallDuration = 10 + Math.random() * 10;
        petal.style.animationDuration = `${fallDuration}s, ${3 + Math.random() * 2}s`;
        
        // Random delay for staggered effect
        const delay = Math.random() * 10;
        petal.style.animationDelay = `-${delay}s`;
        
        // Random opacity
        petal.style.opacity = 0.3 + Math.random() * 0.5;
        
        petalsContainer.appendChild(petal);
    }
}

// Show character selection screen
function showCharacterSelection() {
    // Remove the title music click listener if it exists
    if (enableMusicListener) {
        document.removeEventListener('click', enableMusicListener);
        enableMusicListener = null;
    }
    
    // Hide title screen and show character selection
    titleScreen.classList.add('hidden');
    characterSelectionScreen.classList.remove('hidden');
    
    // Initialize cherry blossom petals for selection screen
    createSelectionPetals();
}

// Select a character and start the game
function selectCharacter(character) {
    console.log('Selected character:', character);
    
    // Play sparkle sound for any character selection
    if (sparkleSound) {
        sparkleSound.currentTime = 0; // Reset to start
        sparkleSound.volume = 0.5;
        sparkleSound.play().catch(e => console.log("Sparkle sound error:", e));
    }
    
    // Play Mark Cuban sound if Mark Cuban is selected
    if (character === 'cuban' && markCubanSound) {
        // Play after a short delay so it plays after the sparkle sound
        setTimeout(() => {
            markCubanSound.currentTime = 0;
            markCubanSound.volume = 0.5;
            markCubanSound.play().catch(e => console.log("Mark Cuban sound error:", e));
        }, 300);
    }
    
    // Play Jensen Huang sound if Jensen Huang is selected
    if (character === 'jensen' && jensenHuangSound) {
        // Play after a short delay so it plays after the sparkle sound
        setTimeout(() => {
            jensenHuangSound.currentTime = 0;
            jensenHuangSound.volume = 0.5;
            jensenHuangSound.play().catch(e => console.log("Jensen Huang sound error:", e));
        }, 300);
    }
    
    // Play Mark Zuckerberg sound if Mark Zuckerberg is selected (if audio exists)
    if (character === 'zuckerberg' && window.markZuckerbergSound) {
        setTimeout(() => {
            window.markZuckerbergSound.currentTime = 0;
            window.markZuckerbergSound.volume = 0.5;
            window.markZuckerbergSound.play().catch(e => console.log("Mark Zuckerberg sound error:", e));
        }, 300);
    }
    
    // Start white fade transition
    transitionScreen.classList.add('white');
    transitionScreen.classList.add('active');
    
    // Stop title music
    if (titleMusic) {
        titleMusic.pause();
        titleMusic.currentTime = 0;
        titleMusic.load();
    }
    
    // Wait for fade to white (800ms)
    setTimeout(() => {
        // Hide character selection
        characterSelectionScreen.classList.add('hidden');
        
        // Ensure splash screen is hidden and stays hidden
        splashScreen.classList.add('hidden');
        splashScreen.style.display = 'none';
        
        // Show game UI
        dialogueBox.style.display = 'block';
        characterContainer.style.display = 'flex';
        
        // Start background music
        if (bgMusic) {
            bgMusic.pause();
            bgMusic.currentTime = 0;
            bgMusic.volume = 0.1;
            bgMusic.play().catch(error => {
                console.log('Audio autoplay prevented:', error);
            });
        }
        
        // Set the correct story and sprites based on character selection
        gameState.selectedCharacter = character;
        if (character === 'jensen') {
            story = jensenHuangStory;
            currentSprites = jensenSprites;
        } else if (character === 'cuban') {
            story = markCubanStory;
            currentSprites = sprites;
        } else if (character === 'zuckerberg') {
            story = markZuckerbergStory;
            currentSprites = zuckerbergSprites;
        } else {
            // Default to Mark Cuban if unknown character
            story = markCubanStory;
            currentSprites = sprites;
        }
        
        // Load the first scene
        gameState.currentScene = 0;
        loadScene(0);
        
        // Wait a bit longer, then fade out from white
        setTimeout(() => {
            transitionScreen.classList.remove('active');
            
            // Remove white class after fade completes
            setTimeout(() => {
                transitionScreen.classList.remove('white');
            }, 800);
        }, 500);
    }, 800);
}

// Start the game (deprecated - now using showCharacterSelection)
function startGame() {
    showCharacterSelection();
}

// Restart the game
function restartGame() {
    // Reset game state
    gameState.currentScene = 0;
    gameState.choices = [];
    gameState.selectedCharacter = null;
    
    // Stop all music
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
    
    if (titleMusic) {
        titleMusic.pause();
        titleMusic.currentTime = 0;
    }
    
    // Hide ending screen
    endingScreen.classList.remove('active');
    
    // Hide character selection
    characterSelectionScreen.classList.add('hidden');
    
    // Hide title screen
    titleScreen.classList.add('hidden');
    
    // Show splash screen
    splashScreen.classList.remove('hidden');
    splashScreen.style.display = 'flex';
    
    // Hide game elements
    dialogueBox.style.display = 'none';
    characterContainer.style.display = 'none';
    secondCharacterContainer.style.display = 'none';
    thirdCharacterContainer.style.display = 'none';
}

// Show transition screen
function showTransition(text, nextSceneIndex) {
    console.log('Showing transition:', text, '-> Scene', nextSceneIndex);
    
    // Reset animation by removing and re-adding the text element
    const oldText = transitionText.cloneNode(true);
    transitionText.parentNode.replaceChild(oldText, transitionText);
    transitionText = oldText;
    
    // Set transition text
    transitionText.textContent = text;
    
    // Hide game UI
    dialogueBox.style.display = 'none';
    choiceContainer.classList.remove('active');
    characterContainer.style.display = 'none';
    secondCharacterContainer.style.display = 'none';
    thirdCharacterContainer.style.display = 'none';
    
    // Fade in transition screen
    transitionScreen.classList.add('active');
    
    // Wait for screen to be fully black, then change background
    setTimeout(() => {
        // Update game state and preload the new scene's background while screen is black
        gameState.currentScene = nextSceneIndex;
        const nextScene = story[nextSceneIndex];
        
        if (nextScene) {
            // Change background while screen is still black
            background.className = 'background ' + nextScene.background;
            
            // Preload character sprite if needed
            if (nextScene.character) {
                const img = new Image();
                img.src = sprites[nextScene.character];
            }
        }
        
        // Wait for text animation to complete, then fade out transition screen
        setTimeout(() => {
            transitionScreen.classList.remove('active');
            
            // Wait for fade out to complete, then load next scene
            setTimeout(() => {
                loadScene(nextSceneIndex);
            }, 500);
        }, 2000);
    }, 500);
}

// Load a scene
function loadScene(sceneIndex) {
    console.log('Loading scene index:', sceneIndex, '(Total scenes:', story.length + ')');
    const scene = story[sceneIndex];
    
    if (!scene) {
        // Check for ending
        if (typeof sceneIndex === 'string' && sceneIndex.startsWith('ending_')) {
            console.log('Loading ending:', sceneIndex);
            showEnding(sceneIndex);
            return;
        }
        // Scene not found
        console.error('ERROR: Scene not found at index:', sceneIndex, '(Total scenes:', story.length + ')');
        return;
    }
    
    console.log('Scene text:', scene.text.substring(0, 50) + '...');
    
    // Update background
    background.className = 'background ' + scene.background;
    
    // Update character sprite
    if (scene.character) {
        // Check if it's a side character (director, producer, etc.)
        if (scene.character === 'director') {
            characterSprite.src = directorSprites.neutral;
        } else if (scene.character === 'producer') {
            characterSprite.src = producerSprites.neutral;
        } else {
            characterSprite.src = currentSprites[scene.character];
        }
        characterContainer.style.display = 'flex';
    } else {
        characterContainer.style.display = 'none';
    }
    
    // Update second character sprite
    if (scene.secondCharacter && scene.secondCharacterType) {
        let spriteSet;
        if (scene.secondCharacterType === 'mrWonderful') {
            spriteSet = mrWonderfulSprites;
        } else if (scene.secondCharacterType === 'lori') {
            spriteSet = loriSprites;
        } else {
            spriteSet = sprites;
        }
        secondCharacterSprite.src = spriteSet[scene.secondCharacter];
        secondCharacterContainer.style.display = 'flex';
        
        // Check if there's a third character
        if (scene.thirdCharacter && scene.thirdCharacterType) {
            let thirdSpriteSet;
            if (scene.thirdCharacterType === 'mrWonderful') {
                thirdSpriteSet = mrWonderfulSprites;
            } else if (scene.thirdCharacterType === 'lori') {
                thirdSpriteSet = loriSprites;
            } else {
                thirdSpriteSet = sprites;
            }
            thirdCharacterSprite.src = thirdSpriteSet[scene.thirdCharacter];
            thirdCharacterContainer.style.display = 'flex';
            
            // Three characters: adjust all positions
            characterContainer.classList.add('with-three');
            characterContainer.classList.remove('with-second');
            secondCharacterContainer.classList.add('with-three');
            thirdCharacterContainer.classList.add('with-three');
        } else {
            // Two characters: hide third and adjust positions
            thirdCharacterContainer.style.display = 'none';
            thirdCharacterContainer.classList.remove('with-three');
            if (scene.character) {
                characterContainer.classList.add('with-second');
                characterContainer.classList.remove('with-three');
            }
            secondCharacterContainer.classList.remove('with-three');
        }
    } else {
        secondCharacterContainer.style.display = 'none';
        thirdCharacterContainer.style.display = 'none';
        characterContainer.classList.remove('with-second');
        characterContainer.classList.remove('with-three');
        secondCharacterContainer.classList.remove('with-three');
        thirdCharacterContainer.classList.remove('with-three');
    }
    
    // Update dialogue
    characterName.textContent = scene.speaker;
    dialogueText.textContent = scene.text;
    
    // Handle choices
    if (scene.choices) {
        dialogueBox.style.display = 'none';
        choiceContainer.innerHTML = '';
        choiceContainer.classList.add('active');
        
        scene.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            button.addEventListener('click', () => makeChoice(index));
            choiceContainer.appendChild(button);
        });
    } else {
        dialogueBox.style.display = 'block';
        choiceContainer.classList.remove('active');
    }
}

// Advance dialogue
function advanceDialogue() {
    const scene = story[gameState.currentScene];
    
    if (!scene.choices) {
        // Check if scene has a transition
        if (scene.transition && scene.nextScene !== undefined) {
            // Don't update gameState yet - let showTransition handle it
            showTransition(scene.transition, scene.nextScene);
        } else {
            // Check if scene has explicit nextScene, otherwise increment
            if (scene.nextScene !== undefined) {
                gameState.currentScene = scene.nextScene;
            } else {
                gameState.currentScene++;
            }
            loadScene(gameState.currentScene);
        }
    }
}

// Make a choice
function makeChoice(choiceIndex) {
    const scene = story[gameState.currentScene];
    const choice = scene.choices[choiceIndex];
    
    console.log('Current scene:', gameState.currentScene);
    console.log('Choice selected:', choice.text);
    console.log('Next scene:', choice.nextScene);
    console.log('Total scenes in story:', story.length);
    
    // Record choice
    gameState.choices.push(choiceIndex);
    
    // Move to next scene
    if (choice.nextScene !== undefined) {
        gameState.currentScene = choice.nextScene;
        loadScene(choice.nextScene);
    } else {
        gameState.currentScene++;
        loadScene(gameState.currentScene);
    }
}


// Show ending screen
function showEnding(endingKey) {
    const ending = endings[endingKey];
    
    if (!ending) {
        console.error('Ending not found:', endingKey);
        return;
    }
    
    // Update ending screen
    document.getElementById('endingTitle').textContent = ending.title;
    document.getElementById('endingDescription').textContent = ending.description;
    document.getElementById('endingImage').src = ending.image;
    
    // Update background
    background.className = 'background ' + ending.background;
    
    // Hide game elements
    dialogueBox.style.display = 'none';
    choiceContainer.classList.remove('active');
    characterContainer.style.display = 'none';
    secondCharacterContainer.style.display = 'none';
    thirdCharacterContainer.style.display = 'none';
    
    // Show ending screen
    endingScreen.classList.add('active');
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', init);


