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
        text: "Okay, full-on panic. Oh no—my research! I'm so sorry, I wasn't looking. Papers everywhere. This is my entire deck for tomorrow!",
        choices: null,
        nextScene: 7
    },
    // Scene 7: Jensen appears
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "He sprints after the papers. 'Hey, it's okay! I’ve got this one.' He snags a page mid-air and scans it. 'Neural acceleration through dynamic tensor restructuring?' His eyes go wide. 'This is... brilliant.'",
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
        text: "Still reading, totally absorbed: 'This is...' He looks up. 'You wrote this?' He kneels to help. 'We’ve been trying to crack this for months. Your architecture is elegant—most people chase algorithms; you respect the hardware.'",
        choices: null,
        nextScene: 10
    },
    // Scene 10: The conversation begins
    {
        background: "outdoor",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "He stacks your papers into a clean pile. 'You're presenting at GTC, right?' He clocks your badge. 'I approved the track and still missed this. What’s your name?' His curiosity practically glows.",
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
        text: "His eyes widen. 'Wait, you’re using quantum‑inspired optimization for tensor decomposition? That’s brilliant. We were aiming from the wrong angle.' He leans in. 'Walk me through your memory hierarchy—your data flow is borderline revolutionary.'",
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
        text: "He listens like he’s profiling every line. 'This is exactly what we need. Your dynamic memory approach patches issues we’ve wrestled with for years.' He studies your equations. 'Those tensor ops aren’t just efficient—they’re beautiful. I need to see more.'",
        choices: null,
        nextScene: 16
    },
    // Scene 14: NVIDIA's challenges
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "His expression firms. 'We’re slamming into walls with old approaches. Demand’s exponential—the architecture isn’t.' He nods at your pages. 'Your reimagined memory hierarchy could finally crack our bottlenecks.'",
        choices: null,
        nextScene: 16
    },
    // Scene 15: Vision sharing
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "His eyes light up. 'You see it—the merge of AI and real‑time rendering, compute for everyone.' He taps your work. 'This is the path. Your optimization isn’t just speed—it makes the impossible shippable.'",
        choices: null,
        nextScene: 16
    },
    // Scene 16: Extended technical discussion
    {
        background: "outdoor",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "He scrutinizes the pages. 'Your architecture is elegant. Most people chase algorithms; you respect the hardware. That’s real engineering.' He looks up. 'Tech isn’t just software—it’s the whole system.'",
        choices: null,
        nextScene: 17
    },
    // Scene 17: Personal connection begins
    {
        background: "outdoor",
        character: "blush",
        speaker: "Jensen Huang",
        text: "He looks up. 'Thirty years in this game, thousands of papers. But this—' he gestures—'this feels different. You’re not just solving problems, you’re building the future. Your optimization has elegance, not just efficiency.'",
        choices: null,
        nextScene: 18
    },
    // Scene 18: The unusual request
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "He hands your now‑organized stack back. 'I know it’s unusual—we literally collided—but are you free this afternoon?' He checks his watch. 'I want to show you something that might rewrite how you see your own work.'",
        choices: null,
        nextScene: 19
    },
    // Scene 19: The invitation
    {
        background: "outdoor",
        character: "blush",
        speaker: "Jensen Huang",
        text: "I want to see the rest of your work. NVIDIA headquarters, this afternoon. When it’s quiet and we can really talk. I’ll show you things we haven’t even announced yet—things I think only you would truly understand. The way you approach problems... it’s exactly what we need.",
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
        text: "He smiles like he just found a unicorn startup. 'Perfect. I’ll send a car at 5 PM.' He hands you a card with a handwritten note. 'Text me when you’re at the hotel. And bring everything—I want the whole repo.'",
        choices: null,
        nextScene: 28,
        transition: "That afternoon, 5 PM..."
    },
    // Scene 22: Politely declined
    {
        background: "outdoor",
        character: "sad",
        speaker: "Jensen Huang",
        text: "His expression dips. 'I get it. It’s unusual, and I respect that.' He breathes out. 'But your research is incredible. Your approach to neural optimization is exactly what the industry needs.'",
        choices: null,
        nextScene: 23
    },
    // Scene 23: Jensen's continued interest
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "He tries to keep it cool. 'No pressure. If you change your mind—or want a purely professional deep‑dive—my door’s open.' He hands you his card.",
        choices: null,
        nextScene: 24
    },
    // Scene 24: The professional offer
    {
        background: "outdoor",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "His tone shifts to boardroom mode. 'Your neural acceleration work is groundbreaking. We’d love to explore collaboration. Sometimes the best partnerships start with mutual respect.'",
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
        text: "He’s by the entrance, leather jacket back on. 'You came.' Relief flashes across his face. 'I wasn’t sure you would. I forget how unusual this sounds. Come in.' His excitement feels contagious.",
        choices: null,
        nextScene: 29
    },
    // Scene 29: Inside the building
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "He guides you through the lobby. 'Daytime is chaos—three thousand people, nonstop meetings. But afternoons?' He nods at walls of GPU prototypes. 'That’s when it’s just the dreams.'",
        choices: null,
        nextScene: 30
    },
    // Scene 30: The main lab
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "He leads you into a room packed with prototypes. 'This is where the magic happens.' Rows of experimental GPUs hum quietly. 'None of this is on a roadmap. These are possibilities.'",
        choices: null,
        nextScene: 31
    },
    // Scene 31: The demonstration
    {
        background: "nvidiaoffice",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "He powers up a workstation. 'I want to show you something.' A rapid burst of keystrokes. 'Next‑gen architecture—not public. But I think you’ll get what we’re building. Your approach fits perfectly.'",
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
        text: "He grins. 'I knew you’d get it. Most people see specs—you see potential. This could change everything.' He nods. 'That’s why you’re here. You’re not just a researcher—you’re a visionary.'",
        choices: null,
        nextScene: 36
    },
    // Scene 34: Technical questions
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "His eyes brighten. 'Perfect questions. You’re thinking like an engineer, not just a researcher.' He leans in. 'Bandwidth is the bottleneck—that’s where your tensor work could be revolutionary.'",
        choices: null,
        nextScene: 36
    },
    // Scene 35: Share research insights
    {
        background: "nvidiaoffice",
        character: "surprised",
        speaker: "Jensen Huang",
        text: "He pauses the demo. 'Hold on—your approach boosts efficiency by how much?' Tablet out. 'Show me. Now. Those tensor ops aren’t just efficient—they’re art.'",
        choices: null,
        nextScene: 36
    },
    // Scene 36: Extended lab tour
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "He guides you deeper. 'This is our AI research lab.' Rows of servers blink. 'We train models in hours that used to take years—but we still hit limits. Your memory rethink might be the key.'",
        choices: null,
        nextScene: 37
    },
    // Scene 37: Personal workspace
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "He opens a smaller lab. 'My personal workspace.' Prototypes cover the desk. 'I come here to think. I’ve never brought anyone here.' His voice softens. 'With you, it feels understood.'",
        choices: null,
        nextScene: 38
    },
    // Scene 38: The deeper conversation
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "He settles at a workstation. 'Thirty years in—tech comes and goes. But what you’re building?' He meets your eyes. 'This could define the next decade. You don’t just chase speed—you make the impossible practical.'",
        choices: null,
        nextScene: 39
    },
    // Scene 39: Personal connection
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "His voice softens. 'I don’t usually do this—unreleased tech, private labs. But with you, it feels like talking to someone who actually gets the build. Your optimization has elegance, not just speed.'",
        choices: null,
        nextScene: 40
    },
    // Scene 40: The moment of vulnerability
    {
        background: "nvidiaoffice",
        character: "blush",
        speaker: "Jensen Huang",
        text: "He exhales. 'I’ve been looking for someone like you for a long time. Not just brilliant—plenty of those—but big‑picture. Tech that changes the world, not just the quarterly.' He leans forward. 'I want to show you something that might reframe your research.'",
        choices: null,
        nextScene: 41
    },
    // Scene 41: The confession
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "He meets your eyes. 'I know this is unorthodox. We just met. But I can’t stop thinking about what we could build—maybe more than colleagues.' He smiles. 'I want to show you things we haven’t even announced—stuff only you’d truly get.'",
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
        text: "His face lights up. 'You feel it too?' He reaches for your hand without overthinking it. 'I worried it was too much. But this connection—it's real, right?'",
        choices: null,
        nextScene: 45
    },
    // Scene 43: Taking it slow
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "He nods. 'You’re right—we should be careful. But I’m serious about this. About you. I can take the slow path.'",
        choices: null,
        nextScene: 45
    },
    // Scene 44: Professional focus
    {
        background: "nvidiaoffice",
        character: "sad",
        speaker: "Jensen Huang",
        text: "He masks the disappointment. 'Of course. Professional it is. I respect that. Let’s still build something amazing together.'",
        choices: null,
        nextScene: "ending_jensen_professional"
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
        text: "He checks his watch. 'Idea: you’re on stage tomorrow. The world should hear this.' A half‑grin. 'Let’s put your research in front of the entire AI crowd.'",
        choices: null,
        nextScene: 47
    },
    // Scene 47: The GTC invitation
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "His eyes brighten. 'I want you to speak at GTC—not just the research, your vision. You’re ready to move the room.'",
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
        text: "He grins. 'Knew you’d say yes. This is going to be incredible.' He squeezes your hand. 'Let’s show the world what’s possible.'",
        choices: null,
        nextScene: 51
    },
    // Scene 49: Express nervousness
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "He rests a reassuring hand on your shoulder. 'Nerves are normal. You’re ready. The work is groundbreaking—and you sell it with heart. I’ll be right there with you.'",
        choices: null,
        nextScene: 51
    },
    // Scene 50: Ask about audience
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "He nods. 'Great question. Audience is the best of AI—researchers, engineers, visionaries. They’re hungry for someone to point at the future. That’s you.'",
        choices: null,
        nextScene: 51
    },
    // Scene 51: Preparation begins
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "He leads you into a conference room. 'Let’s prep your talk—I want you fully loaded.' He gestures at a wall‑sized screen. 'Rehearsal happens here.'",
        choices: null,
        nextScene: 52
    },
    // Scene 52: The rehearsal
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "He watches you present, impressed. 'That was incredible. You’re a natural at translating the complex. No wonder the research hits so hard.'",
        choices: null,
        nextScene: 53
    },
    // Scene 53: The night before
    {
        background: "nvidiaoffice",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "He checks the time. 'It’s late. Get some rest—tomorrow’s huge.' He smiles. 'I’m proud of you.'",
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
        text: "He threads through the crowd. 'That was incredible. I watched from the back—easily the standout talk. The way you explained those optimizations was chef’s kiss.'",
        choices: null,
        nextScene: 66
    },
    // Scene 66: Conference conversation
    {
        background: "nvidiaconference",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "He leans in. 'I’ve been thinking about your work all day. Your architecture doesn’t just go faster—it makes the impossible feel shippable. I want to show you something that might reframe it.'",
        choices: null,
        nextScene: 67
    },
    // Scene 67: The invitation continues
    {
        background: "nvidiaconference",
        character: "blush",
        speaker: "Jensen Huang",
        text: "He lowers his voice. ' Dennys, tonight. After hours, when it's quiet. I'll show you things we haven't announced—stuff only you'll really get.'",
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
        text: "He smiles. 'Perfect. I'll send a car at 10 PM.' He hands you a card with a handwritten note. 'Text me when you're back. And bring everything—I want to see it all.'",
        choices: null,
        nextScene: 71,
        transition: "Later that night"
    },
    // Scene 70: Politely declined
    {
        background: "nvidiaconference",
        character: "sad",
        speaker: "Jensen Huang",
        text: "His expression dips. 'I get it. It’s unusual, and I respect your call.' He softens. 'But your research is incredible. The industry needs this.'",
        choices: null,
        nextScene: "ending_jensen_professional"
    },
    // Scene 71: The evening continues
    {
        background: "dennys",
        character: "neutral",
        speaker: "Narrator",
        text: "The night continues with more technical discussions and demonstrations. Jensen shows you prototypes that won't be released for years, shares insights about the future of AI, and the connection between you grows stronger with each passing hour. The building feels alive with possibility.",
        choices: null,
        nextScene: 72
    },
    // Scene 72: Intimate conversation begins
    {
        background: "dennys",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "He leans closer across the table, his voice dropping to a whisper. 'You know, I've never shown anyone these prototypes before. There's something about you... the way you see the potential in everything. It's like you understand the vision before I even explain it.'",
        choices: null,
        nextScene: 73
    },
    // Scene 73: Personal sharing
    {
        background: "dennys",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "He takes a deep breath, looking vulnerable for the first time. 'I've been building this company for thirty years, but sometimes I wonder... am I just chasing the next breakthrough, or am I actually building something that matters? With you here, I feel like I'm finally talking to someone who gets it.'",
        choices: [
            {
                text: "Share your own doubts and dreams",
                nextScene: 74
            },
            {
                text: "Reassure him about his impact",
                nextScene: 75
            },
            {
                text: "Ask about his personal life",
                nextScene: 76
            }
        ]
    },
    // Scene 74: Mutual vulnerability
    {
        background: "dennys",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "His eyes light up as you share your own struggles. 'You feel it too? The weight of trying to change the world while wondering if you're just fooling yourself?' He reaches across the table, his hand finding yours. 'I've never met anyone who understands this pressure.'",
        choices: null,
        nextScene: 77
    },
    // Scene 75: Reassurance
    {
        background: "dennys",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "He smiles warmly, his confidence returning. 'You really think so? Sometimes I forget that what we're building here actually matters to people. Your research, your passion... it reminds me why I started this journey in the first place.'",
        choices: null,
        nextScene: 77
    },
    // Scene 76: Personal connection
    {
        background: "dennys",
        character: "blush",
        speaker: "Jensen Huang",
        text: "He looks surprised, then thoughtful. 'Personal life? That's... not something I usually talk about. But with you...' He pauses, studying your face. 'I feel like I can be more than just the CEO. I can be Jensen.'",
        choices: null,
        nextScene: 77
    },
    // Scene 77: The moment of truth
    {
        background: "dennys",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "The conversation has grown deeper, more personal. Jensen's guard is completely down now. He looks at you with an intensity that makes your heart race. 'I know this is crazy, and I know we just met, but... I can't stop thinking about what we could build together. Not just as colleagues, but as... something more.'",
        choices: null,
        nextScene: 78
    },
    // Scene 78: Final choice
    {
        background: "dennys",
        character: "nervous",
        speaker: "Narrator",
        text: "Jensen Huang has just bared his soul to you in the intimate setting of Denny's. This moment will define your future together. How do you respond?",
        choices: [
            {
                text: "Kiss him passionately",
                nextScene: 79
            },
            {
                text: "Tell him you feel the same way",
                nextScene: 80
            },
            {
                text: "Suggest focusing on the business partnership",
                nextScene: 81
            },
            {
                text: "Say you need time to think",
                nextScene: 82
            }
        ]
    },
    // Scene 79: The ending
    {
        background: "dennys",
        character: "neutral",
        speaker: "Narrator",
        text: "The conference continues, but your path with Jensen Huang takes a different direction. While the romantic connection wasn't meant to be, your professional relationship with NVIDIA opens doors you never imagined. Your research becomes the foundation for future AI breakthroughs, and you learn that sometimes the most meaningful relationships are built on mutual respect and shared vision rather than romance.",
        choices: null,
        nextScene: 'ending_jensen_professional'
    },
    // Scene 80: Passionate path
    {
        background: "dennys",
        character: "laugh",
        speaker: "Narrator",
        text: "You lean across the table and kiss him. The office fades away as you both get lost in the moment. Jensen responds with equal passion, and you both realize this is the beginning of something extraordinary. The way you approach problems... it's exactly what we need.",
        choices: null,
        nextScene: 'ending_jensen_passionate'
    },
    // Scene 81: Mutual confession
    {
        background: "dennys",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "He takes your hands, relieved laugh escaping. 'You do? I worried it’d feel inappropriate. But this—us—it’s real, right?'",
        choices: null,
        nextScene: 'ending_jensen_romance'
    },
    // Scene 82: Professional focus
    {
        background: "dennys",
        character: "sad",
        speaker: "Jensen Huang",
        text: "He nods. 'You’re right. Let’s keep it professional. I respect it—and I still want to build something amazing together.'",
        choices: null,
        nextScene: 'ending_jensen_professional'
    },
    // Scene 83: Need time
    {
        background: "dennys",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "He nods. 'Totally fair. No rush. Take the time you need—I’ll be here when you’re ready.'",
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