// Mark Zuckerberg Story - Meta Route

// Character sprites for Mark Zuckerberg
export const sprites = {
    neutral: "/Characters/MarkZuckeberg/MarkZuck.png",
    affectionate: "/Characters/MarkZuckeberg/MarkZuckDreamy.png",
    angry: "/Characters/MarkZuckeberg/MarkAngry.png",
    annoyed: "/Characters/MarkZuckeberg/MarkAngry.png",
    blush: "/Characters/MarkZuckeberg/MarkZuckBlushed.png",
    confused: "/Characters/MarkZuckeberg/MarkZuckConfused.png",
    flustered: "/Characters/MarkZuckeberg/MarkZuckFlustered.png",
    laugh: "/Characters/MarkZuckeberg/MarkZuckLaughing.png",
    nervous: "/Characters/MarkZuckeberg/MarkZuckFlustered.png",
    pained: "/Characters/MarkZuckeberg/MarkZuckSad.png",
    sad: "/Characters/MarkZuckeberg/MarkZuckSad.png",
    surprised: "/Characters/MarkZuckeberg/MarkZuckConfused.png"
};

// Mark Zuckerberg Story Array
export const markZuckerbergStory = [
    // ACT 1: FACEBOOK OFFICE - THE MEETING
    // Scene 0: Welcome to Facebook
    {
        background: "facebook",
        character: "neutral",
        speaker: "Narrator",
        text: "You've been invited to Facebook's headquarters in Menlo Park for a special meeting. The campus buzzes with innovation, and you can feel the energy of the world's largest social network all around you.",
        choices: null,
        nextScene: 1
    },
    // Scene 1: The reception
    {
        background: "facebook",
        character: "neutral",
        speaker: "Receptionist",
        text: "Welcome to Facebook! Mark is expecting you. He's in his office on the second floor. You can take the elevator or the stairs.",
        choices: [
            {
                text: "Take the elevator",
                nextScene: 2
            },
            {
                text: "Take the stairs",
                nextScene: 3
            },
            {
                text: "Ask about the campus",
                nextScene: 4
            }
        ]
    },
    // Scene 2: Elevator ride
    {
        background: "facebook",
        character: "neutral",
        speaker: "Narrator",
        text: "The elevator is sleek and modern, with Facebook's signature blue branding. As you ascend, you can see the open office spaces through the glass walls. The atmosphere is casual yet professional.",
        choices: null,
        nextScene: 5
    },
    // Scene 3: Staircase encounter
    {
        background: "facebook",
        character: "neutral",
        speaker: "Narrator",
        text: "You take the stairs and notice the vibrant murals and motivational quotes on the walls. A few employees pass by, all wearing casual attire and carrying laptops. The culture here is clearly different from traditional corporate environments.",
        choices: null,
        nextScene: 5
    },
    // Scene 4: Campus tour
    {
        background: "facebook",
        character: "neutral",
        speaker: "Receptionist",
        text: "This campus is amazing! We have everything here - restaurants, a gym, even a barbershop. Mark believes in creating an environment where people want to spend time, not just work.",
        choices: null,
        nextScene: 5
    },
    // Scene 5: Mark's office door
    {
        background: "facebook",
        character: "neutral",
        speaker: "Narrator",
        text: "You arrive at Mark's office. The door is slightly ajar, and you can hear the sound of typing. You knock gently.",
        choices: null,
        nextScene: 6
    },
    // Scene 6: First meeting
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "Come in! You must be the person I've been hearing so much about. I'm Mark. Please, have a seat.",
        choices: null,
        nextScene: 7
    },
    // Scene 7: The office
    {
        background: "facebook",
        character: "neutral",
        speaker: "Narrator",
        text: "Mark's office is surprisingly modest for someone of his stature. A simple desk, a few chairs, and walls covered with whiteboards filled with equations and diagrams. The most striking feature is the view of the campus below.",
        choices: null,
        nextScene: 8
    },
    // Scene 8: Initial conversation
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "I've been following your work on social connectivity algorithms. Your approach to understanding human relationships through data is... fascinating. Tell me, what drives you?",
        choices: [
            {
                text: "I'm passionate about connecting people",
                nextScene: 9
            },
            {
                text: "I love solving complex problems",
                nextScene: 10
            },
            {
                text: "I want to understand human behavior",
                nextScene: 11
            }
        ]
    },
    // Scene 9: Connection response
    {
        background: "facebook",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "That's exactly what I hoped you'd say. Connection is everything. When I started Facebook in my dorm room, I never imagined it would become what it is today. But the core mission remains the same - bringing people together.",
        choices: null,
        nextScene: 12
    },
    // Scene 10: Problem-solving response
    {
        background: "facebook",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "Interesting perspective. I've always been drawn to the human side of technology. The algorithms are just tools - the real challenge is understanding what people actually want and need.",
        choices: null,
        nextScene: 12
    },
    // Scene 11: Human behavior response
    {
        background: "facebook",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "Now that's something I can relate to. Understanding human behavior is at the heart of everything we do here. It's not just about data - it's about empathy, about truly understanding what drives people to connect.",
        choices: null,
        nextScene: 12
    },
    // Scene 12: Deeper conversation
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "I've been thinking about the future of social connection. We're at an inflection point where technology can either bring us closer together or drive us further apart. What do you think?",
        choices: [
            {
                text: "Technology should enhance human connection",
                nextScene: 13
            },
            {
                text: "We need to be careful about privacy",
                nextScene: 14
            },
            {
                text: "The future is about authentic relationships",
                nextScene: 15
            }
        ]
    },
    // Scene 13: Enhancement response
    {
        background: "facebook",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "Exactly! That's the vision I've been working toward. Technology should amplify our humanity, not replace it. When I see families connecting across continents, friends reuniting after years apart, that's when I know we're on the right path.",
        choices: null,
        nextScene: 16
    },
    // Scene 14: Privacy response
    {
        background: "facebook",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "Privacy is crucial, and it's something we take very seriously. But I believe we can have both - meaningful connections and privacy protection. It's about giving people control over their data while still enabling the connections that matter most.",
        choices: null,
        nextScene: 16
    },
    // Scene 15: Authentic relationships response
    {
        background: "facebook",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "That's beautiful. Authenticity is what makes social media powerful. When people share their real selves, their real experiences, that's when true connection happens. That's the kind of platform I want to build.",
        choices: null,
        nextScene: 16
    },
    // Scene 16: Personal moment
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "You know, I don't often get to have conversations like this. Most people want to talk about business metrics or technical details. But you... you understand the human element. That's rare.",
        choices: [
            {
                text: "I appreciate you sharing that",
                nextScene: 17
            },
            {
                text: "It must be lonely at the top",
                nextScene: 18
            },
            {
                text: "I'd love to hear more about your vision",
                nextScene: 19
            }
        ]
    },
    // Scene 17: Appreciation response
    {
        background: "facebook",
        character: "blush",
        speaker: "Mark Zuckerberg",
        text: "Thank you. It means a lot to hear that. Sometimes I wonder if people see me as just the CEO, not as... well, as a person with dreams and fears like everyone else.",
        choices: null,
        nextScene: 20
    },
    // Scene 18: Loneliness response
    {
        background: "facebook",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "You're perceptive. It can be isolating. The decisions I make affect billions of people, and that weight... it's something I carry every day. But I wouldn't trade it for anything. The mission is worth it.",
        choices: null,
        nextScene: 20
    },
    // Scene 19: Vision response
    {
        background: "facebook",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "I love talking about the vision! I see a world where distance doesn't matter, where people can connect across any barrier. Virtual reality, augmented reality, the metaverse... it's all about bringing people together in new ways.",
        choices: null,
        nextScene: 20
    },
    // Scene 20: The invitation
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "I have an idea. There's something I'd like to show you - a place that's very special to me. It's where it all began. Would you be interested in seeing where Facebook was born?",
        choices: [
            {
                text: "I'd love to see it!",
                nextScene: 21
            },
            {
                text: "That sounds amazing",
                nextScene: 22
            },
            {
                text: "I'm curious about your journey",
                nextScene: 23
            }
        ]
    },
    // Scene 21: Enthusiastic response
    {
        background: "facebook",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "Great! I'm excited to show you. It's been a while since I've been back there, but it holds so many memories. The place where a simple idea became something that changed the world.",
        choices: null,
        nextScene: 24
    },
    // Scene 22: Positive response
    {
        background: "facebook",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "I'm glad you're interested. It's not just about the history - it's about understanding where we came from and where we're going. That perspective is important.",
        choices: null,
        nextScene: 24
    },
    // Scene 23: Curious response
    {
        background: "facebook",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "The journey has been... complicated. There have been ups and downs, mistakes and successes. But every step has taught me something about people, about connection, about what really matters.",
        choices: null,
        nextScene: 24
    },
    // Scene 24: Transition to Harvard
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "Let's go. I have a car waiting. The drive to Cambridge will give us time to talk more about your work and your vision for the future of social connection.",
        choices: null,
        nextScene: 25
    },
    // Scene 25: The drive
    {
        background: "facebook",
        character: "neutral",
        speaker: "Narrator",
        text: "As you drive through the streets of Menlo Park and onto the highway, Mark seems more relaxed, more open. The formal CEO persona has given way to something more personal, more genuine.",
        choices: null,
        nextScene: 26
    },
    // Scene 26: Conversation in the car
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "You know, I don't get many chances to just... talk. Most of my conversations are about strategy, about numbers, about the next big thing. But this feels different. Natural.",
        choices: [
            {
                text: "I feel the same way",
                nextScene: 27
            },
            {
                text: "It must be hard to find genuine connections",
                nextScene: 28
            },
            {
                text: "I'm honored you're sharing this with me",
                nextScene: 29
            }
        ]
    },
    // Scene 27: Mutual feeling
    {
        background: "facebook",
        character: "blush",
        speaker: "Mark Zuckerberg",
        text: "That's exactly what I was hoping you'd say. There's something about talking to someone who really gets it, who understands both the technical and the human side of what we do.",
        choices: null,
        nextScene: 30
    },
    // Scene 28: Connection difficulty
    {
        background: "facebook",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "It is. The higher you climb, the harder it becomes to know who's genuine and who's just... interested in what you can do for them. But with you, I don't feel that pressure.",
        choices: null,
        nextScene: 30
    },
    // Scene 29: Honored response
    {
        background: "facebook",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "I appreciate that. It's not often I meet someone I feel comfortable being completely myself around. There's something special about this conversation.",
        choices: null,
        nextScene: 30
    },
    // Scene 30: Arrival at Harvard
    {
        background: "facebook",
        character: "neutral",
        speaker: "Narrator",
        text: "As you approach Cambridge, the familiar sights of Harvard University come into view. Mark's expression changes - there's nostalgia, but also something deeper, more complex.",
        choices: null,
        nextScene: 31
    },
    // Scene 31: Harvard memories
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "This place... it's where everything started. I was just a kid with an idea, trying to figure out how to connect people. I had no idea it would become what it is today.",
        choices: null,
        nextScene: 32
    },
    // Scene 32: The dorm building
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "That building right there - Kirkland House. That's where I lived, where I coded the first version of Facebook in my dorm room. It feels like a lifetime ago.",
        choices: null,
        nextScene: 33
    },
    // Scene 33: Emotional moment
    {
        background: "facebook",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "Sometimes I wonder what that young kid would think of what I've become. Would he be proud? Would he recognize the person I am now?",
        choices: [
            {
                text: "I think he'd be proud of your impact",
                nextScene: 34
            },
            {
                text: "Growth means change, but the core remains",
                nextScene: 35
            },
            {
                text: "What would you tell that young version of yourself?",
                nextScene: 36
            }
        ]
    },
    // Scene 34: Proud response
    {
        background: "facebook",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "Thank you. That means a lot. I hope so too. The mission hasn't changed - connecting people, making the world more open and connected. That's still what drives me every day.",
        choices: null,
        nextScene: 37
    },
    // Scene 35: Growth response
    {
        background: "facebook",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "You're right. The core of who I am, what I believe in, that hasn't changed. But the responsibility, the scale, the complexity... that's what's different now.",
        choices: null,
        nextScene: 37
    },
    // Scene 36: Advice question
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "That's a great question. I'd tell him to stay true to the mission, but also to be prepared for the weight of responsibility that comes with success. And to never lose sight of the human element in everything we do.",
        choices: null,
        nextScene: 37
    },
    // Scene 37: Transition to dorm
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "Come on, let me show you the actual room where it all began. I have special access to the building. It's been preserved as a kind of historical site.",
        choices: null,
        nextScene: 38
    },
    
    // ACT 2: HARVARD DORM ROOM - THE FLASHBACK
    // Scene 38: Entering the dorm
    {
        background: "harvard",
        character: "neutral",
        speaker: "Narrator",
        text: "You step into Kirkland House, and immediately the atmosphere changes. The walls are covered with photos of students, bulletin boards with announcements, and the unmistakable energy of college life.",
        choices: null,
        nextScene: 39
    },
    // Scene 39: The hallway
    {
        background: "harvard",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "This hallway... I walked it hundreds of times. Late nights coming back from the computer lab, early mornings heading to class. Every step felt like it mattered, like I was building something important.",
        choices: null,
        nextScene: 40
    },
    // Scene 40: Approaching the room
    {
        background: "harvard",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "Room 13. That's where it all started. A simple dorm room that became the birthplace of the world's largest social network. It's surreal to be back here.",
        choices: null,
        nextScene: 41
    },
    // Scene 41: The dorm room
    {
        background: "harvard",
        character: "neutral",
        speaker: "Narrator",
        text: "The room has been preserved exactly as it was. Two beds, two desks, books scattered everywhere, and most importantly - the computer setup where Facebook was born. The walls are covered with equations, sketches, and the original Facebook logo.",
        choices: null,
        nextScene: 42
    },
    // Scene 42: Mark's memories
    {
        background: "harvard",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "I spent so many nights here, coding until dawn. Eduardo would be sleeping in that bed, and I'd be at this desk, trying to figure out how to make people connect. I had no idea what I was creating.",
        choices: [
            {
                text: "What was it like in those early days?",
                nextScene: 43
            },
            {
                text: "Did you know it would become this big?",
                nextScene: 44
            },
            {
                text: "What was Eduardo like?",
                nextScene: 45
            }
        ]
    },
    // Scene 43: Early days question
    {
        background: "harvard",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "It was chaotic, exciting, terrifying. We were just kids trying to solve a problem - how do you connect people at a university? The first version was so simple, but it worked. People started using it, and we couldn't stop.",
        choices: null,
        nextScene: 46
    },
    // Scene 44: Scale question
    {
        background: "harvard",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "Not at all. I thought maybe a few thousand people would use it. Harvard, then maybe a few other schools. The idea that it would connect billions of people... that seemed impossible. But here we are.",
        choices: null,
        nextScene: 46
    },
    // Scene 45: Eduardo question
    {
        background: "harvard",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "Eduardo was my best friend. He believed in the idea when no one else did. He was the business side, I was the technical side. We were supposed to build this together, but... things got complicated.",
        choices: null,
        nextScene: 46
    },
    // Scene 46: The computer
    {
        background: "harvard",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "This is the actual computer where I wrote the first line of Facebook code. It's hard to believe that a few lines of code in this room would change the world.",
        choices: null,
        nextScene: 47
    },
    // Scene 47: Emotional moment
    {
        background: "harvard",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "You know, being back here makes me remember why I started this. It wasn't about money or fame or power. It was about connection. About making the world feel smaller, more connected.",
        choices: [
            {
                text: "That's a beautiful mission",
                nextScene: 48
            },
            {
                text: "Do you still feel that way?",
                nextScene: 49
            },
            {
                text: "What would you change if you could?",
                nextScene: 50
            }
        ]
    },
    // Scene 48: Beautiful mission response
    {
        background: "harvard",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "Thank you. Sometimes I lose sight of that, get caught up in the business side of things. But being here reminds me of what really matters - the human connections we enable every day.",
        choices: null,
        nextScene: 51
    },
    // Scene 49: Still feel that way response
    {
        background: "harvard",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "I do, but it's more complex now. The mission is the same, but the responsibility is enormous. Every decision affects billions of people. It's not just about connecting friends anymore.",
        choices: null,
        nextScene: 51
    },
    // Scene 50: What would you change response
    {
        background: "harvard",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "I'd be more careful about privacy from the beginning. I'd think more about the unintended consequences. But I wouldn't change the core mission - connecting people is still the most important thing we do.",
        choices: null,
        nextScene: 51
    },
    // Scene 51: The photo
    {
        background: "harvard",
        character: "neutral",
        speaker: "Narrator",
        text: "Mark points to a photo on the wall - a group of young students, all smiling, all full of dreams. 'That's us,' he says quietly. 'Before everything changed.'",
        choices: null,
        nextScene: 52
    },
    // Scene 52: Reflection
    {
        background: "harvard",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "We were just kids with big ideas. We wanted to change the world, and we did. But I sometimes wonder if we knew what we were getting into. The responsibility, the scrutiny, the weight of it all.",
        choices: [
            {
                text: "You've done amazing things",
                nextScene: 53
            },
            {
                text: "The weight must be overwhelming",
                nextScene: 54
            },
            {
                text: "What advice would you give your younger self?",
                nextScene: 55
            }
        ]
    },
    // Scene 53: Amazing things response
    {
        background: "harvard",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "Thank you. I'm proud of what we've built, but I'm also aware of the challenges. Every day, I try to make decisions that will help people connect in meaningful ways.",
        choices: null,
        nextScene: 56
    },
    // Scene 54: Overwhelming response
    {
        background: "harvard",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "It is. But it's also a privilege. To have the opportunity to impact so many lives, to help people connect across the world. I wouldn't trade it for anything, but I don't take it lightly.",
        choices: null,
        nextScene: 56
    },
    // Scene 55: Advice question
    {
        background: "harvard",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "I'd tell him to stay true to the mission, but also to be prepared for the responsibility that comes with success. And to never forget that behind every algorithm, every data point, there are real people with real lives.",
        choices: null,
        nextScene: 56
    },
    // Scene 56: The transition
    {
        background: "harvard",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "You know, there's something else I'd like to show you. A movie that was made about this time in my life. It's... complicated, but it might help you understand the journey better.",
        choices: [
            {
                text: "I'd love to see it",
                nextScene: 57
            },
            {
                text: "Is it accurate?",
                nextScene: 58
            },
            {
                text: "What's it like seeing your life on screen?",
                nextScene: 59
            }
        ]
    },
    // Scene 57: Love to see it response
    {
        background: "harvard",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "Great! It's called 'The Social Network.' It's not entirely accurate, but it captures the energy of that time. The intensity, the ambition, the complexity of building something from nothing.",
        choices: null,
        nextScene: 60
    },
    // Scene 58: Is it accurate response
    {
        background: "harvard",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "It's a movie, so it's dramatized. But it gets the core of what it was like - the late nights, the arguments, the pressure. Some of the details are wrong, but the feeling is right.",
        choices: null,
        nextScene: 60
    },
    // Scene 59: Life on screen response
    {
        background: "harvard",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "It's strange. To see your life interpreted by someone else, to see yourself portrayed in a way that's both familiar and foreign. But it's also a reminder of how far we've come.",
        choices: null,
        nextScene: 60
    },
    // Scene 60: Transition to theatre
    {
        background: "harvard",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "Let's go. I have a private screening set up. It'll be interesting to watch it with someone who understands both the technical and human side of what we do.",
        choices: null,
        nextScene: 61
    },
    
    // ACT 3: MOVIE THEATRE - THE SOCIAL NETWORK
    // Scene 61: Arriving at the theatre
    {
        background: "theatre",
        character: "neutral",
        speaker: "Narrator",
        text: "You arrive at a private movie theatre in Cambridge. The building is elegant and historic, with plush red seats and ornate decorations. It's clear this is a special place for a special screening.",
        choices: null,
        nextScene: 62
    },
    // Scene 62: The screening room
    {
        background: "theatre",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "I've arranged for a private screening. It's been a while since I've watched this, but I thought it might help you understand the journey better. The good, the bad, and the complicated.",
        choices: null,
        nextScene: 63
    },
    // Scene 63: Before the movie
    {
        background: "theatre",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "I should warn you - this movie doesn't paint me in the most flattering light. But that's okay. It's important to see different perspectives, to understand how others see what we've built.",
        choices: [
            {
                text: "I'm interested in your perspective",
                nextScene: 64
            },
            {
                text: "How do you feel about the portrayal?",
                nextScene: 65
            },
            {
                text: "Let's watch it together",
                nextScene: 66
            }
        ]
    },
    // Scene 64: Interested in perspective response
    {
        background: "theatre",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "Good. Because the real story is more complex than any movie could capture. There were mistakes, there were conflicts, but there was also genuine passion for the mission.",
        choices: null,
        nextScene: 67
    },
    // Scene 65: How do you feel response
    {
        background: "theatre",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "It's complicated. Some of it is accurate, some of it isn't. But what matters is that it shows the human side of building something big. The relationships, the conflicts, the growth.",
        choices: null,
        nextScene: 67
    },
    // Scene 66: Let's watch response
    {
        background: "theatre",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "I'm glad you're here. It's not often I get to share this experience with someone who really understands what we do. This should be interesting.",
        choices: null,
        nextScene: 67
    },
    // Scene 67: The movie begins
    {
        background: "theatre",
        character: "neutral",
        speaker: "Narrator",
        text: "The lights dim and the movie begins. The opening scene shows a young Mark Zuckerberg in a Harvard dorm room, coding late into the night. The energy is electric, the ambition palpable.",
        choices: null,
        nextScene: 68
    },
    // Scene 68: Watching the early scenes
    {
        background: "theatre",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "This part is pretty accurate. The late nights, the coding marathons, the obsession with getting it right. I was completely consumed by the idea of connecting people.",
        choices: null,
        nextScene: 69
    },
    // Scene 69: The conflicts
    {
        background: "theatre",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "The conflicts with Eduardo... those were real. We were young, we made mistakes. I wish I had handled things differently, but I was learning how to be a leader.",
        choices: [
            {
                text: "Do you still talk to Eduardo?",
                nextScene: 70
            },
            {
                text: "What would you do differently?",
                nextScene: 71
            },
            {
                text: "It must be hard to watch this",
                nextScene: 72
            }
        ]
    },
    // Scene 70: Still talk to Eduardo response
    {
        background: "theatre",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "Not really. We've both moved on, but I think about those early days often. Eduardo was a good friend, and I wish things had turned out differently.",
        choices: null,
        nextScene: 73
    },
    // Scene 71: What would you do differently response
    {
        background: "theatre",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "I would have been more patient, more understanding. I was so focused on the product that I sometimes forgot about the people. That's something I've learned to be better at.",
        choices: null,
        nextScene: 73
    },
    // Scene 72: Hard to watch response
    {
        background: "theatre",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "It is. But it's also important. It reminds me of where I came from, of the mistakes I made, of the growth that was necessary. It's not always comfortable, but it's real.",
        choices: null,
        nextScene: 73
    },
    // Scene 73: The growth
    {
        background: "theatre",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "The movie shows the growth, the evolution. From a kid in a dorm room to someone running a company that affects billions of people. It's been quite a journey.",
        choices: null,
        nextScene: 74
    },
    // Scene 74: The impact
    {
        background: "theatre",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "What the movie doesn't show is the impact. The families reconnecting, the friends staying in touch, the communities forming around shared interests. That's what makes it all worth it.",
        choices: null,
        nextScene: 75
    },
    // Scene 75: The future
    {
        background: "theatre",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "And the future is even more exciting. Virtual reality, augmented reality, the metaverse. We're just getting started on the next chapter of human connection.",
        choices: [
            {
                text: "What excites you most about the future?",
                nextScene: 76
            },
            {
                text: "How do you see the metaverse evolving?",
                nextScene: 77
            },
            {
                text: "What's your biggest hope for the future?",
                nextScene: 78
            }
        ]
    },
    // Scene 76: What excites you most response
    {
        background: "theatre",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "The possibility of truly immersive connection. Imagine being able to feel like you're in the same room with someone on the other side of the world. That's the future I'm building toward.",
        choices: null,
        nextScene: 79
    },
    // Scene 77: How do you see metaverse evolving response
    {
        background: "theatre",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "It's not just about virtual reality - it's about creating new ways for people to connect, to work, to play. The metaverse will be the next evolution of the internet, more immersive and social.",
        choices: null,
        nextScene: 79
    },
    // Scene 78: Biggest hope response
    {
        background: "theatre",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "My biggest hope is that we can use technology to bring people together, not drive them apart. To create a world where distance doesn't matter, where everyone can feel connected and valued.",
        choices: null,
        nextScene: 79
    },
    // Scene 79: The movie ends
    {
        background: "theatre",
        character: "neutral",
        speaker: "Narrator",
        text: "The movie ends with a young Mark Zuckerberg sending a friend request to his ex-girlfriend. The credits roll, and the lights come up. Mark sits quietly, lost in thought.",
        choices: null,
        nextScene: 80
    },
    // Scene 80: After the movie
    {
        background: "theatre",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "That ending... it's not how it really happened, but it captures something true. The loneliness, the isolation that comes with building something big. The cost of success.",
        choices: [
            {
                text: "Do you still feel that loneliness?",
                nextScene: 81
            },
            {
                text: "What's the cost of success?",
                nextScene: 82
            },
            {
                text: "How do you find balance?",
                nextScene: 83
            }
        ]
    },
    // Scene 81: Still feel loneliness response
    {
        background: "theatre",
        character: "sad",
        speaker: "Mark Zuckerberg",
        text: "Sometimes. The higher you climb, the harder it becomes to know who's genuine. But conversations like this, with someone who really understands... they help. They remind me of what's real.",
        choices: null,
        nextScene: 84
    },
    // Scene 82: Cost of success response
    {
        background: "theatre",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "The cost is privacy, normalcy, the ability to just be yourself without scrutiny. But it's also the opportunity to make a real difference, to connect billions of people. It's worth it, but it's not easy.",
        choices: null,
        nextScene: 84
    },
    // Scene 83: How do you find balance response
    {
        background: "theatre",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "It's a constant struggle. I try to stay grounded, to remember why I started this. Family, friends, the mission. Those are what matter most, even when everything else gets complicated.",
        choices: null,
        nextScene: 84
    },
    // Scene 84: The connection
    {
        background: "theatre",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "You know, this has been one of the most meaningful conversations I've had in a long time. You understand both the technical and human side of what we do. That's rare.",
        choices: [
            {
                text: "I feel the same way",
                nextScene: 85
            },
            {
                text: "Thank you for sharing so much",
                nextScene: 86
            },
            {
                text: "What happens next?",
                nextScene: 87
            }
        ]
    },
    // Scene 85: Feel the same way response
    {
        background: "theatre",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "I'm glad. There's something special about connecting with someone who really gets it. It reminds me of why I started this whole thing in the first place.",
        choices: null,
        nextScene: 88
    },
    // Scene 86: Thank you response
    {
        background: "theatre",
        character: "blush",
        speaker: "Mark Zuckerberg",
        text: "Thank you for listening, for understanding. It's not often I get to be completely myself with someone. This has been... refreshing.",
        choices: null,
        nextScene: 88
    },
    // Scene 87: What happens next response
    {
        background: "theatre",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "That's a great question. I'd like to continue this conversation, to explore what we could build together. There's something here, something special.",
        choices: null,
        nextScene: 88
    },
    // Scene 88: The moment of truth
    {
        background: "theatre",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "I have to ask... would you be interested in working with me? Not just on algorithms, but on the human side of connection. I think we could build something amazing together.",
        choices: [
            {
                text: "I'd love to work with you",
                nextScene: 89
            },
            {
                text: "I need to think about it",
                nextScene: 90
            },
            {
                text: "What kind of work are you thinking?",
                nextScene: 91
            }
        ]
    },
    // Scene 89: Love to work response
    {
        background: "theatre",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "Excellent! I'm excited about what we could build together. Your understanding of both technology and human connection is exactly what we need for the next phase of our mission.",
        choices: null,
        nextScene: 92
    },
    // Scene 90: Need to think response
    {
        background: "theatre",
        character: "confused",
        speaker: "Mark Zuckerberg",
        text: "I understand. It's a big decision. Take all the time you need. I believe in what we could accomplish together, but I want you to be sure it's right for you.",
        choices: null,
        nextScene: 93
    },
    // Scene 91: What kind of work response
    {
        background: "theatre",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "I'm thinking about a new division focused on human-centered AI. Not just algorithms, but technology that truly understands and enhances human connection. Your background would be perfect for leading that effort.",
        choices: null,
        nextScene: 94
    },
    // Scene 92: Accepted - enthusiastic
    {
        background: "theatre",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "This is going to be amazing! I can already see the impact we'll have. Together, we can build the next generation of social technology - technology that truly serves humanity.",
        choices: null,
        nextScene: 95
    },
    // Scene 93: Need time - understanding
    {
        background: "theatre",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "I respect that. When you're ready, I'll be here. This conversation has shown me that you're exactly the kind of person we need for this mission.",
        choices: null,
        nextScene: 96
    },
    // Scene 94: Work discussion - interested
    {
        background: "theatre",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "That sounds incredible. A division focused on human-centered AI... it's exactly what the world needs. I'm excited about the possibility of working together on something so meaningful.",
        choices: null,
        nextScene: 97
    },
    // Scene 95: The future together
    {
        background: "theatre",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "I can't wait to see what we'll build together. This is just the beginning of something extraordinary. Welcome to the team!",
        choices: null,
        nextScene: 98
    },
    // Scene 96: The connection remains
    {
        background: "theatre",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "Even if you decide not to join us, I want you to know that this conversation has meant a lot to me. You've reminded me of what's truly important in this work.",
        choices: null,
        nextScene: 99
    },
    // Scene 97: The collaboration begins
    {
        background: "theatre",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "I'm thrilled about this collaboration. Together, we can create technology that truly serves humanity. This is going to be incredible!",
        choices: null,
        nextScene: 100
    },
    // Scene 98: Ending - Professional Partnership
    {
        background: "theatre",
        character: "neutral",
        speaker: "Narrator",
        text: "Your partnership with Mark Zuckerberg begins a new chapter in the evolution of social technology. Together, you build the next generation of human-centered AI, creating tools that truly enhance human connection while protecting privacy and authenticity.",
        choices: null,
        nextScene: 'ending_zuck_professional'
    },
    // Scene 99: Ending - Deep Connection
    {
        background: "theatre",
        character: "neutral",
        speaker: "Narrator",
        text: "Your conversation with Mark Zuckerberg creates a lasting connection that transcends professional boundaries. You become trusted advisors to each other, sharing insights about technology, humanity, and the future of connection.",
        choices: null,
        nextScene: 'ending_zuck_connection'
    },
    // Scene 100: Ending - Romantic Partnership
    {
        background: "theatre",
        character: "neutral",
        speaker: "Narrator",
        text: "Your partnership with Mark Zuckerberg evolves into something deeper than professional collaboration. Together, you build not just technology, but a life centered around meaningful connection and shared vision for the future.",
        choices: null,
        nextScene: 'ending_zuck_romance'
    }
];

// Mark Zuckerberg Endings
export const endings = {
    ending_zuck_professional: {
        title: "🤝 Professional Partnership 🤝",
        description: "Your partnership with Mark Zuckerberg marks the beginning of a new era in social technology. Together, you build the next generation of human-centered AI, creating tools that truly enhance human connection while protecting privacy and authenticity. Your work impacts billions of lives, bringing people together in meaningful ways while respecting their digital rights. It's a collaboration that changes the world, one connection at a time.",
        image: "/Characters/MarkZuckeberg/MarkZuck.png",
        background: "facebook"
    },
    ending_zuck_connection: {
        title: "💫 Deep Connection 💫",
        description: "Your conversation with Mark Zuckerberg creates a lasting bond that transcends professional boundaries. You become trusted advisors to each other, sharing insights about technology, humanity, and the future of connection. While you may not work directly together, your friendship influences both of your paths, creating ripples of positive change in the world of social technology. Sometimes the most meaningful connections are the ones that inspire us to be better versions of ourselves.",
        image: "/Characters/MarkZuckeberg/MarkZuck.png",
        background: "harvard"
    },
    ending_zuck_romance: {
        title: "💕 Romantic Partnership 💕",
        description: "Your partnership with Mark Zuckerberg evolves into something deeper than professional collaboration. Together, you build not just technology, but a life centered around meaningful connection and shared vision for the future. You become each other's anchor in the storm of public scrutiny, supporting each other through the challenges of building something that affects billions of people. Your love story becomes a testament to the power of genuine connection in a digital age.",
        image: "/Characters/MarkZuckeberg/MarkZuck.png",
        background: "theatre"
    }
};

