// Jensen Huang Story - NVIDIA Route

// Character sprites for Jensen Huang
export const sprites = {
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

// Game Story - Jensen Huang Route
export const jensenHuangStory = [
    // ACT 1: SAN FRANCISCO ARRIVAL
    // Scene 0: Welcome to San Francisco
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "San Francisco International Airport. You're here for NVIDIA's GTC Conference - the biggest moment of your career as a rising AI researcher. Your groundbreaking work on neural network acceleration could change everything. The city sprawls before you, a technological wonderland where dreams become reality.",
        choices: null,
        nextScene: 1
    },
    // Scene 1: Pre-conference excitement
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "Your presentation is tomorrow. You've rehearsed it a hundred times, but the pressure is immense. This research could revolutionize real-time rendering. Your hands shake slightly as you pull your luggage through the terminal, but it's not just nerves - it's the electric anticipation of being in the heart of Silicon Valley.",
        choices: [
            {
                text: "Focus on calming your nerves",
                nextScene: 2
            },
            {
                text: "Review your presentation one more time",
                nextScene: 3
            },
            {
                text: "Look around at the other conference attendees",
                nextScene: 4
            }
        ]
    },
    // Scene 2: Calming nerves
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "You take a deep breath and remind yourself why you're here. Your research is solid, your presentation is ready. The nerves are just excitement in disguise. You straighten your posture and continue through the terminal with renewed confidence, ready to change the world of AI.",
        choices: null,
        nextScene: 5
    },
    // Scene 3: Reviewing presentation
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "You pull out your research folder and quickly scan through your key points. The equations are elegant, the methodology is sound. You've prepared for this moment for years. You feel more centered and ready, knowing that your work could revolutionize how we think about neural network optimization.",
        choices: null,
        nextScene: 5
    },
    // Scene 4: Observing attendees
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "You scan the terminal, noticing other researchers with their own folders and laptops. The energy is electric - everyone here is working on the cutting edge of AI. You feel a sense of belonging among these brilliant minds, knowing that tomorrow you'll be among them, sharing your vision for the future.",
        choices: null,
        nextScene: 5
    },
    // Scene 5: The collision
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "Outside the terminal, juggling your conference badge, laptop bag, and a folder of research papers, you don't see him until it's too late. The collision sends your carefully organized papers flying into the San Francisco wind. Your heart sinks as you watch months of work scatter across the pavement.",
        choices: null,
        nextScene: 6
    },
    // Scene 6: The scramble
    {
        background: "outdoor",
        character: null,
        speaker: "You",
        text: "*panicking* Oh no, no, no! My research! *drops to knees, trying to catch papers* I'm so sorry, I wasn't looking where I was— *frantically gathering papers* This is all my work for tomorrow's presentation!",
        choices: null,
        nextScene: 7
    },
    // Scene 7: Jensen appears
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*chasing down papers* Hey, it's okay! I've got this one— *catches a page mid-air* Wait a second... *starts reading while still on his feet* Neural acceleration through dynamic tensor restructuring? *his eyes widen* This is... this is brilliant work.",
        choices: null,
        nextScene: 8
    },
    // Scene 8: The realization
    {
        background: "outdoor",
        character: "surprised",
        speaker: "Narrator",
        text: "You look up from gathering papers. Black leather jacket. Silver hair. That unmistakable presence. Your heart stops. Jensen Huang is holding your research paper, actually READING it, his eyes scanning the equations with intense focus. The CEO of NVIDIA is standing right in front of you, completely absorbed in your work.",
        choices: null,
        nextScene: 9
    },
    // Scene 9: Jensen's recognition
    {
        background: "outdoor",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*still reading, completely absorbed* This is... *looks up at you* You wrote this? *kneels down to help gather more papers* This optimization approach - we've been trying to crack this for months. The way you've structured the neural network architecture... it's elegant. Most researchers focus on the algorithms, but you're thinking about the hardware constraints.",
        choices: null,
        nextScene: 10
    },
    // Scene 10: The conversation begins
    {
        background: "outdoor",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*helping organize your papers* You're presenting at GTC, aren't you? *glances at your conference badge* I should know - I approved the research track. But somehow I missed THIS. What's your name? *his eyes are alight with genuine curiosity*",
        choices: null,
        nextScene: 11
    },
    // Scene 11: Introduction
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Narrator",
        text: "You introduce yourself, still in shock. He's not just being polite - he's genuinely excited. He asks three rapid-fire technical questions about your methodology. You answer without thinking, and his eyes light up with each response. There's something magnetic about his attention, the way he truly listens to every word you say.",
        choices: null,
        nextScene: 12
    },
    // Scene 12: Technical discussion
    {
        background: "outdoor",
        character: "surprised",
        speaker: "Jensen Huang",
        text: "*his eyes widening* Wait, you're using quantum-inspired optimization for the tensor decomposition? That's... that's brilliant. We've been approaching this from the wrong angle entirely. *leans in closer* Tell me more about your approach to the memory hierarchy. The way you've structured the data flow... it's revolutionary.",
        choices: [
            {
                text: "Explain your technical approach in detail",
                nextScene: 13
            },
            {
                text: "Ask about NVIDIA's current challenges",
                nextScene: 14
            },
            {
                text: "Share your vision for the future of AI",
                nextScene: 15
            }
        ]
    },
    // Scene 13: Technical explanation
    {
        background: "outdoor",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*listening intently* This is exactly what we need. Your approach to dynamic memory allocation could solve problems we've been wrestling with for years. *pauses, studying your equations* The way you've optimized the tensor operations... it's not just efficient, it's beautiful. I have to see more of your work. This could change everything.",
        choices: null,
        nextScene: 16
    },
    // Scene 14: NVIDIA's challenges
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*his expression becomes more serious* We're hitting walls with traditional approaches. The computational demands are growing exponentially, but our current architectures... *looks at your papers* Your work might be the breakthrough we've been waiting for. The way you've reimagined the memory hierarchy could solve bottlenecks we've been struggling with for years.",
        choices: null,
        nextScene: 16
    },
    // Scene 15: Vision sharing
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*his eyes light up* You see it too, don't you? The convergence of AI and real-time rendering, the democratization of computational power. *gestures to your papers* This is how we get there. This is the future. The way you've structured the neural network optimization... it's not just about making things faster, it's about making the impossible possible.",
        choices: null,
        nextScene: 16
    },
    // Scene 16: Extended technical discussion
    {
        background: "outdoor",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*studying your papers more carefully* The way you've structured the neural network architecture... it's elegant. Most researchers focus on the algorithms, but you're thinking about the hardware constraints. That's engineering thinking. *looks up at you* You understand that technology isn't just about the software - it's about the entire system.",
        choices: null,
        nextScene: 17
    },
    // Scene 17: Personal connection begins
    {
        background: "outdoor",
        character: "blush",
        speaker: "Jensen Huang",
        text: "*looks up from your papers* You know, I've been in this industry for thirty years. I've seen thousands of research papers. But this... *gestures to your work* This feels different. Like you're not just solving a problem - you're building the future. The way you think about optimization... it's not just about efficiency, it's about elegance.",
        choices: null,
        nextScene: 18
    },
    // Scene 18: The unusual request
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*hands you back your papers, now neatly organized* Look, I know this is unusual. We just met - literally collided - at an airport. But I have to ask... *checks his watch* are you free this afternoon? I want to show you something. Something that could change how you think about your research.",
        choices: null,
        nextScene: 19
    },
    // Scene 19: The invitation
    {
        background: "outdoor",
        character: "blush",
        speaker: "Jensen Huang",
        text: "I want to see the rest of your work. NVIDIA headquarters, this afternoon. When it's quiet and we can really talk. I'll show you things we haven't even announced yet. *pauses* Things I think only you would truly understand. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 20
    },
    // Scene 20: The decision moment
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Narrator",
        text: "Jensen Huang - THE Jensen Huang - just invited you to a private tour of NVIDIA HQ. His eyes are intense, waiting for your answer. The California sun catches his leather jacket. This could change everything. The opportunity of a lifetime is right in front of you.",
        choices: [
            {
                text: "Accept enthusiastically",
                nextScene: 21
            },
            {
                text: "Politely decline the invitation",
                nextScene: 22
            }
        ]
    },
    // Scene 21: Accepted - enthusiastic
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*smiles warmly* Perfect. I'll send a car at 5 PM. *hands you his business card with a handwritten note on the back* Text me when you're at your hotel. And... bring your research. All of it. I want to see everything. *his eyes sparkle with excitement*",
        choices: null,
        nextScene: 28,
        transition: "That afternoon, 5 PM..."
    },
    // Scene 22: Politely declined
    {
        background: "outdoor",
        character: "sad",
        speaker: "Jensen Huang",
        text: "*his expression falls slightly* I understand. I know this is unusual, and I respect your decision. *pauses* But I want you to know - your research is incredible. The way you've approached neural network optimization... it's exactly what the industry needs.",
        choices: null,
        nextScene: 23
    },
    // Scene 23: Jensen's continued interest
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*tries to hide his disappointment* Look, I don't want to pressure you. But if you ever change your mind, or if you want to discuss your research in a more... professional setting, my door is always open. *hands you his business card*",
        choices: null,
        nextScene: 24
    },
    // Scene 24: The professional offer
    {
        background: "outdoor",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*his voice becomes more business-like* Your work on neural network acceleration is groundbreaking. We'd love to explore potential collaboration opportunities. *pauses* Sometimes the best partnerships start with professional respect.",
        choices: null,
        nextScene: 25
    },
    // Scene 25: The ending
    {
        background: "outdoor",
        character: "neutral",
        speaker: "Narrator",
        text: "The airport encounter ends with a professional handshake and exchange of business cards. While the romantic connection wasn't meant to be, your professional relationship with NVIDIA opens doors you never imagined. Your research becomes the foundation for future AI breakthroughs, and you learn that sometimes the most meaningful relationships are built on mutual respect and shared vision rather than romance.",
        choices: null,
        nextScene: 'ending_jensen_professional'
    },
    // ACT 2: THE INTIMATE NVIDIA OFFICE TOUR
    // Scene 26: The car ride
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "A sleek black car picks you up at exactly 5 PM. The driver doesn't speak, just nods and drives through San Francisco's glowing streets. Your research folder sits on your lap. Your heart won't stop racing as you head toward NVIDIA headquarters, the building where the future is designed.",
        choices: null,
        nextScene: 27
    },
    // Scene 27: Arriving at NVIDIA HQ
    {
        background: "nvidiaoffice",
        character: null,
        speaker: "Narrator",
        text: "NVIDIA headquarters looms against the afternoon sky - all glass and steel, illuminated by that signature green glow. It's breathtakingly beautiful. Powerful. The building where the future is designed. You can feel the weight of innovation in the air.",
        choices: null,
        nextScene: 28
    },
    // Scene 28: Jensen at the entrance
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*waiting at the entrance, leather jacket back on* You came. *seems almost relieved* I wasn't sure you would. Sometimes I forget how unusual these invitations sound. Come in. *his eyes light up with genuine excitement*",
        choices: null,
        nextScene: 29
    },
    // Scene 29: Inside the building
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*walks you through the main lobby* During the day, this place is chaos. Three thousand employees, constant meetings, deadlines. But in the afternoon... *gestures to walls lined with GPU prototypes* it's just the dreams. The pure, unfiltered vision of what's possible.",
        choices: null,
        nextScene: 30
    },
    // Scene 30: The main lab
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*leading you to a massive room filled with prototype hardware* This is where the magic happens. *gestures to rows of experimental GPUs* These aren't in any product roadmap. They're... possibilities. The future of computing, right here in this room.",
        choices: null,
        nextScene: 31
    },
    // Scene 31: The demonstration
    {
        background: "nvidiaoffice",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*powering up a workstation* I want to show you something. *types rapidly* This is our next-generation architecture. It's not public yet, but... *looks at you* I think you'll understand what we're trying to achieve. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 32
    },
    // Scene 32: Your reaction to the tech
    {
        background: "nvidiaoffice",
        character: "surprised",
        speaker: "Narrator",
        text: "The demonstration is breathtaking. Real-time ray tracing at speeds you've never seen. Neural network training that completes in minutes instead of hours. Your research could be the missing piece that makes this commercially viable. The potential is staggering.",
        choices: [
            {
                text: "Express amazement at the technology",
                nextScene: 33
            },
            {
                text: "Ask technical questions about the implementation",
                nextScene: 34
            },
            {
                text: "Share how your research could enhance this",
                nextScene: 35
            }
        ]
    },
    // Scene 33: Express amazement
    {
        background: "nvidiaoffice",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*grins* I knew you'd understand. Most people see the numbers, the specs. But you... you see the potential. The way this could change everything. *pauses* That's why I brought you here. You're not just a researcher - you're a visionary.",
        choices: null,
        nextScene: 36
    },
    // Scene 34: Technical questions
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*his eyes light up* Perfect questions. You're thinking like an engineer, not just a researcher. *leans in* The memory bandwidth is the key bottleneck. That's where your tensor optimization could be revolutionary. The way you've structured the neural network architecture... it's exactly what we need.",
        choices: null,
        nextScene: 36
    },
    // Scene 35: Share research insights
    {
        background: "nvidiaoffice",
        character: "surprised",
        speaker: "Jensen Huang",
        text: "*stops the demonstration* Wait. You're saying your approach could increase efficiency by how much? *pulls out a tablet* Show me. Right now. I need to see this. The way you've optimized the tensor operations... it's not just efficient, it's beautiful.",
        choices: null,
        nextScene: 36
    },
    // Scene 36: Extended lab tour
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*leading you through more sections* This is our AI research lab. *gestures to massive server racks* We're training models that would have taken years just a decade ago. But we're still hitting limits. Your work... it could be the key. The way you've reimagined the memory hierarchy could solve bottlenecks we've been struggling with for years.",
        choices: null,
        nextScene: 37
    },
    // Scene 37: Personal workspace
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*opening a door to a smaller, more intimate lab* This is my personal workspace. *gestures to a desk covered in prototypes* I come here when I need to think, to experiment. I've never brought anyone here before. *his voice softens* But with you... I feel like I'm talking to someone who truly understands what we're trying to build.",
        choices: null,
        nextScene: 38
    },
    // Scene 38: The deeper conversation
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*sits down at a workstation* You know, I've been in this industry for thirty years. I've seen technologies come and go. But what you're working on... *looks at you intently* This could be the breakthrough that defines the next decade. The way you approach problems... it's not just about making things faster, it's about making the impossible possible.",
        choices: null,
        nextScene: 39
    },
    // Scene 39: Personal connection
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*his voice softens* I don't usually do this. Bring people here, show them unreleased technology. But with you... *pauses* I feel like I'm talking to someone who truly understands what we're trying to build. The way you think about optimization... it's not just about efficiency, it's about elegance.",
        choices: null,
        nextScene: 40
    },
    // Scene 40: The moment of vulnerability
    {
        background: "nvidiaoffice",
        character: "blush",
        speaker: "Jensen Huang",
        text: "*takes a deep breath* I've been looking for someone like you for a long time. Not just brilliant - there are plenty of brilliant people. But someone who sees the bigger picture, who understands that technology is about changing the world, not just making money. *reaches across the table* I want to show you something. Something that could change how you think about your research.",
        choices: null,
        nextScene: 41
    },
    // Scene 41: The confession
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*his eyes meet yours* I know this is unprofessional. I know we just met. But I can't stop thinking about what we could build together. Not just as colleagues, but as... *pauses* as something more. The way you approach problems... it's exactly what we need. I want to show you things we haven't even announced yet. Things I think only you would truly understand.",
        choices: [
            {
                text: "Express mutual feelings",
                nextScene: 42
            },
            {
                text: "Suggest taking it slow",
                nextScene: 43
            },
            {
                text: "Focus on the professional relationship",
                nextScene: 44
            }
        ]
    },
    // Scene 42: Mutual feelings
    {
        background: "nvidiaoffice",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*his eyes light up with pure joy* You feel it too? *reaches for your hand* I was so worried you'd think this was inappropriate. But this connection... it's real, isn't it? What we have... it's real. The way you think about problems... it's exactly what we need.",
        choices: null,
        nextScene: 45
    },
    // Scene 43: Taking it slow
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*nods understandingly* You're absolutely right. We should be careful. But I want you to know - I'm serious about this. About you. I'll wait as long as it takes. The way you approach problems... it's exactly what we need. I want to show you things we haven't even announced yet.",
        choices: null,
        nextScene: 45
    },
    // Scene 44: Professional focus
    {
        background: "nvidiaoffice",
        character: "sad",
        speaker: "Jensen Huang",
        text: "*tries to hide his disappointment* Of course. You're absolutely right. We should keep this professional. I respect that decision completely. Let's focus on building something amazing together in the business world. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 45
    },
    // Scene 45: The evening continues
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Narrator",
        text: "The afternoon continues with more technical discussions and demonstrations. Jensen shows you prototypes that won't be released for years, shares insights about the future of AI, and the connection between you grows stronger with each passing hour. The building feels alive with possibility.",
        choices: null,
        nextScene: 46
    },
    // Scene 46: The GTC offer
    {
        background: "nvidiaoffice",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*checking his watch* You know, I have an idea. The GTC Conference is tomorrow, and I think the world needs to hear about your research. *grins* What do you say we get you on stage? I want you to present your work to the entire AI community. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 47
    },
    // Scene 47: The GTC invitation
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*his eyes light up* I want you to speak at GTC. Not just present your research, but share your vision for the future of AI. *pauses* I think you're ready to change the world. The way you've structured your neural network optimization... it's exactly what the industry needs to hear.",
        choices: [
            {
                text: "Accept enthusiastically",
                nextScene: 48
            },
            {
                text: "Express nervousness about speaking",
                nextScene: 49
            },
            {
                text: "Ask about the audience and expectations",
                nextScene: 50
            }
        ]
    },
    // Scene 48: Accepted enthusiastically
    {
        background: "nvidiaoffice",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*grins* Perfect! I knew you'd be excited. This is going to be incredible. *reaches for your hand* Together, we're going to show the world what's possible. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 51
    },
    // Scene 49: Express nervousness
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*places a reassuring hand on your shoulder* I understand the nerves. But trust me - you're ready for this. Your research is groundbreaking, and you have the passion to inspire others. *smiles* I'll be right there with you. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 51
    },
    // Scene 50: Ask about audience
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*his eyes light up* Great question. You'll be speaking to the brightest minds in AI - researchers, engineers, visionaries from around the world. *pauses* They're hungry for innovation, for someone who can show them the future. That's you. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 51
    },
    // Scene 51: Preparation begins
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*leading you to a conference room* Let's prepare your presentation. I want to make sure you have everything you need. *gestures to a massive screen* This is where we'll rehearse. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 52
    },
    // Scene 52: The rehearsal
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*watching you present* That was incredible. You have a natural gift for explaining complex concepts. *pauses* I can see why your research is so groundbreaking. The way you've structured the neural network architecture... it's exactly what we need.",
        choices: null,
        nextScene: 53
    },
    // Scene 53: The night before
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*checking his watch* It's getting late. You should get some rest. Tomorrow is going to be a big day. *pauses* I'm so proud of you. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 54,
        transition: "Tomorrow morning..."
    },
    // ACT 3: THE GTC CONFERENCE PRESENTATION
    // Scene 54: The morning of
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "The next morning, you arrive at the Moscone Center for the GTC Conference. The energy is electric - thousands of AI researchers, engineers, and visionaries all gathered in one place. Your presentation is in two hours, and you can't shake the memory of yesterday's intimate tour with Jensen Huang.",
        choices: null,
        nextScene: 55
    },
    // Scene 55: Pre-presentation nerves
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "You're in the green room, going over your presentation one last time. The room is filled with other speakers, all preparing for their own presentations. Your research on neural network acceleration is about to be shared with the world. The weight of the moment is overwhelming.",
        choices: [
            {
                text: "Focus on calming your nerves",
                nextScene: 56
            },
            {
                text: "Review your key points one more time",
                nextScene: 57
            },
            {
                text: "Look around at the other speakers",
                nextScene: 58
            }
        ]
    },
    // Scene 56: Calming nerves
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "You take a deep breath and remind yourself why you're here. Your research is solid, your presentation is ready. The nerves are just excitement in disguise. You straighten your posture and prepare to change the world of AI with your groundbreaking work.",
        choices: null,
        nextScene: 59
    },
    // Scene 57: Reviewing key points
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "You pull out your research folder and quickly scan through your key points. The equations are elegant, the methodology is sound. You've prepared for this moment for years. You feel more centered and ready, knowing that your work could revolutionize how we think about neural network optimization.",
        choices: null,
        nextScene: 59
    },
    // Scene 58: Observing other speakers
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "You scan the room, noticing other researchers with their own presentations. The energy is electric - everyone here is working on the cutting edge of AI. You feel a sense of belonging among these brilliant minds, knowing that your work will be among the most groundbreaking presented today.",
        choices: null,
        nextScene: 59
    },
    // Scene 59: The presentation begins
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "You step onto the stage, the spotlight on you. The audience is filled with the brightest minds in AI. You begin your presentation on neural network acceleration, and within minutes, you can see the audience leaning forward, completely captivated by your research.",
        choices: null,
        nextScene: 60
    },
    // Scene 60: The presentation continues
    {
        background: "nvidiaconference",
        character: null,
        speaker: "You",
        text: "The key innovation in our approach is the dynamic tensor restructuring algorithm. By optimizing the memory hierarchy and implementing quantum-inspired optimization techniques, we've achieved a 300% improvement in neural network training efficiency while maintaining accuracy.",
        choices: null,
        nextScene: 61
    },
    // Scene 61: Audience reaction
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "The audience is completely silent, hanging on your every word. You can see the excitement in their eyes as you demonstrate the real-time optimization capabilities. The room is filled with the energy of discovery, of witnessing something revolutionary.",
        choices: null,
        nextScene: 62
    },
    // Scene 62: Q&A session
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "The Q&A session begins, and the questions are intense. Researchers from around the world are asking about your methodology, your results, your vision for the future. You answer each question with confidence, knowing that your work could change everything.",
        choices: null,
        nextScene: 63
    },
    // Scene 63: Post-presentation buzz
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "As you step off the stage, the room erupts in applause. Researchers are already approaching you, eager to discuss your work. The buzz is electric - your presentation has been the highlight of the conference so far.",
        choices: null,
        nextScene: 64
    },
    // Scene 64: Meeting other researchers
    {
        background: "nvidiaconference",
        character: null,
        speaker: "Narrator",
        text: "You're surrounded by researchers from around the world, all eager to discuss your work. The conversations are intense, technical, and inspiring. You realize that you're not just presenting research - you're building a community of innovators who share your vision for the future of AI.",
        choices: null,
        nextScene: 65
    },
    // Scene 65: Jensen appears at the conference
    {
        background: "nvidiaconference",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*approaching through the crowd* That was incredible. I've been watching from the back, and I have to say - your presentation was the most impressive thing I've seen at this conference. The way you explained the optimization techniques... it was brilliant.",
        choices: null,
        nextScene: 66
    },
    // Scene 66: Conference conversation
    {
        background: "nvidiaconference",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*leaning in closer* You know, I've been thinking about your work all day. The way you've structured the neural network architecture... it's not just about making things faster, it's about making the impossible possible. I want to show you something. Something that could change how you think about your research.",
        choices: null,
        nextScene: 67
    },
    // Scene 67: The invitation continues
    {
        background: "nvidiaconference",
        character: "blush",
        speaker: "Jensen Huang",
        text: "*his voice drops to a whisper* NVIDIA headquarters, tonight. After hours when it's quiet and we can really talk. I'll show you things we haven't even announced yet. *pauses* Things I think only you would truly understand. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 68
    },
    // Scene 68: The decision moment
    {
        background: "nvidiaconference",
        character: "nervous",
        speaker: "Narrator",
        text: "Jensen Huang is standing right in front of you, his eyes intense with anticipation. The conference buzzes around you, but in this moment, it's just the two of you. The opportunity of a lifetime is right in front of you.",
        choices: [
            {
                text: "Accept enthusiastically",
                nextScene: 69
            },
            {
                text: "Politely decline the invitation",
        nextScene: 70
            }
        ]
    },
    // Scene 69: Accepted - enthusiastic
    {
        background: "nvidiaconference",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "*smiles warmly* Perfect. I'll send a car at 10 PM. *hands you his business card with a handwritten note on the back* Text me when you're at your hotel. And... bring your research. All of it. I want to see everything. *his eyes sparkle with excitement*",
        choices: null,
        nextScene: 71,
        transition: "That night, 10 PM..."
    },
    // Scene 70: Politely declined
    {
        background: "nvidiaconference",
        character: "sad",
        speaker: "Jensen Huang",
        text: "*his expression falls slightly* I understand. I know this is unusual, and I respect your decision. *pauses* But I want you to know - your research is incredible. The way you've approached neural network optimization... it's exactly what the industry needs.",
        choices: null,
        nextScene: 72
    },
    // Scene 71: The evening continues
    {
        background: "nvidiaconference",
        character: "neutral",
        speaker: "Narrator",
        text: "The night continues with more technical discussions and demonstrations. Jensen shows you prototypes that won't be released for years, shares insights about the future of AI, and the connection between you grows stronger with each passing hour. The building feels alive with possibility.",
        choices: null,
        nextScene: 73
    },
    // Scene 72: The professional offer
    {
        background: "nvidiaconference",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "*his voice becomes more business-like* Your work on neural network acceleration is groundbreaking. We'd love to explore potential collaboration opportunities. *pauses* Sometimes the best partnerships start with professional respect.",
        choices: null,
        nextScene: 74
    },
    // Scene 73: Final choice
    {
        background: "nvidiaconference",
        character: "nervous",
        speaker: "Narrator",
        text: "Jensen Huang has just bared his soul to you in the intimate setting of NVIDIA headquarters. This moment will define your future together. How do you respond?",
        choices: [
            {
                text: "Kiss him passionately",
                nextScene: 75
            },
            {
                text: "Tell him you feel the same way",
                nextScene: 76
            },
            {
                text: "Suggest focusing on the business partnership",
                nextScene: 77
            },
            {
                text: "Say you need time to think",
                nextScene: 78
            }
        ]
    },
    // Scene 74: The ending
    {
        background: "nvidiaconference",
        character: "neutral",
        speaker: "Narrator",
        text: "The conference continues, but your path with Jensen Huang takes a different direction. While the romantic connection wasn't meant to be, your professional relationship with NVIDIA opens doors you never imagined. Your research becomes the foundation for future AI breakthroughs, and you learn that sometimes the most meaningful relationships are built on mutual respect and shared vision rather than romance.",
        choices: null,
        nextScene: 'ending_jensen_professional'
    },
    // Scene 75: Passionate path
    {
        background: "nvidiaconference",
        character: "laugh",
        speaker: "Narrator",
        text: "You lean across the table and kiss him. The office fades away as you both get lost in the moment. Jensen responds with equal passion, and you both realize this is the beginning of something extraordinary. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 'ending_jensen_passionate'
    },
    // Scene 76: Mutual confession
    {
        background: "nvidiaconference",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "*takes your hands* You do? *laughs with relief* I was so worried you'd think this was inappropriate. But this connection... it's real, isn't it? What we have... it's real. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 'ending_jensen_romance'
    },
    // Scene 77: Professional focus
    {
        background: "nvidiaconference",
        character: "sad",
        speaker: "Jensen Huang",
        text: "*nods understandingly* You're absolutely right. We should keep this professional. I respect that decision completely. Let's focus on building something amazing together in the business world. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 'ending_jensen_professional'
    },
    // Scene 78: Need time
    {
        background: "nvidiaconference",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "*nods* Of course. This is a lot to process. I don't want to rush you into anything. Take all the time you need. I'll be here when you're ready. The way you approach problems... it's exactly what we need.",
        choices: null,
                nextScene: 'ending_jensen_slow_burn'
    }
];

// Jensen Huang Endings
export const endings = {
    ending_jensen_passionate: {
        title: "Passionate Innovation",
        description: "Your connection with Jensen Huang transcends the professional world as you both realize you're meant to build the future together. Your research becomes the foundation for NVIDIA's next generation of AI technology, while your personal relationship blossoms into a love story that begins in a ramen shop and changes the world.",
        background: "outdoor"
    },
    ending_jensen_romance: {
        title: "True Love in Tech",
        description: "You and Jensen Huang discover that the best partnerships are built on mutual respect, shared vision, and genuine love. Together, you revolutionize AI technology while building a relationship that proves that sometimes the most important discoveries aren't just technological - they're personal.",
        background: "outdoor"
    },
    ending_jensen_professional: {
        title: "Professional Excellence",
        description: "You and Jensen Huang maintain a strictly professional relationship, focusing on building the future of AI together. Your research becomes integral to NVIDIA's success, and you learn that sometimes the most meaningful relationships are built on shared goals and mutual respect rather than romance.",
        background: "outdoor"
    },
    ending_jensen_slow_burn: {
        title: "Slow and Steady Innovation",
        description: "You and Jensen Huang take your time building both your professional partnership and personal relationship. The respect and admiration you have for each other grows into something deeper over time, proving that the best relationships are built on a foundation of trust, mutual respect, and genuine friendship.",
        background: "outdoor"
    }
};