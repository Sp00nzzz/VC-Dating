// Game State
const gameState = {
    currentScene: 0,
    choices: [],
    playerName: "You",
    selectedCharacter: null // Track which character's story is active
};

// Import all stories and sprites directly
// Mark Cuban Story
const markCubanStory = [
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
    // Scene 4: Looking at Sharks
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "You scan the panel of Sharks. Each one represents a different path to success. But your eyes keep returning to one in particular—Mark Cuban. There's something magnetic about his presence, the way he studies everything with intense focus.",
        choices: null,
        nextScene: 5
    },
    // Scene 5: Meet Mark Cuban
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "Hey there! I'm Mark Cuban. I've been watching you prepare, and I have to say—I'm intrigued. What's this revolutionary startup you're about to pitch?",
        choices: [
            {
                text: "Tell him about your social media platform",
                nextScene: 6
            },
            {
                text: "Ask him about his investment philosophy",
                nextScene: 7
            },
            {
                text: "Stay focused on the pitch",
                nextScene: 8
            }
        ]
    },
    // Scene 6: Social media platform
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "A social media platform? Now you're speaking my language! I love disruptive tech. Tell me more about what makes yours different from the rest.",
        choices: null,
        nextScene: 9
    },
    // Scene 7: Investment philosophy
    {
        background: "sharktank",
        character: "affectionate",
        speaker: "Mark Cuban",
        text: "I invest in people first, ideas second. I want to see passion, drive, and someone who's willing to work harder than anyone else. You seem to have that fire. I like that.",
        choices: null,
        nextScene: 9
    },
    // Scene 8: Stay focused
    {
        background: "sharktank",
        character: "neutral",
        speaker: "Mark Cuban",
        text: "Smart move. Business first. I respect that focus. I'll be watching your pitch closely.",
        choices: null,
        nextScene: 9
    },
    // Scene 9: The pitch begins
    {
        background: "sharktank",
        character: null,
        speaker: "Narrator",
        text: "The lights dim, the cameras roll, and it's time for your pitch. Mark Cuban's eyes are locked on you with an intensity that makes your heart race. This is it—your moment to change everything.",
        choices: null,
        nextScene: 10
    },
    // Scene 10: The ending
    {
        background: "sharktank",
        character: "laugh",
        speaker: "Mark Cuban",
        text: "That was an incredible pitch! I'm in. I want to be part of this journey with you. What do you say we grab dinner tonight and discuss the details?",
        choices: [
            {
                text: "Accept his offer enthusiastically",
                nextScene: "ending_cuban_passionate"
            },
            {
                text: "Keep it professional for now",
                nextScene: "ending_cuban_professional"
            }
        ]
    }
];

const cubanSprites = {
    neutral: "Characters/MarkCuban/MarkCuban.png",
    angry: "Characters/MarkCuban/MarkCubanAngry.png",
    blush: "Characters/MarkCuban/MarkCubanBlush.png",
    laugh: "Characters/MarkCuban/MarkCubanLaugh.png",
    sad: "Characters/MarkCuban/MarkCubanSad.png",
    surprised: "Characters/MarkCuban/MarkCubanSuprised.png",
    affectionate: "Characters/MarkCuban/MarkCubanAffectionate.png",
    annoyed: "Characters/MarkCuban/MarkCubanAnnoyed.png",
    confused: "Characters/MarkCuban/MarkCubanConfused.png",
    flustered: "Characters/MarkCuban/MarkCubanFlustered.png",
    nervous: "Characters/MarkCuban/MarkCubanNervous.png",
    pained: "Characters/MarkCuban/MarkCubanPained.png"
};

// Jensen Huang Story
const jensenHuangStory = [
    // Scene 0: Welcome to San Francisco
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "San Francisco International Airport. You're here for NVIDIA's GTC Conference - the biggest moment of your career as a rising AI researcher. Your groundbreaking work on neural network acceleration could change everything.",
        choices: null,
        nextScene: 1
    },
    // Scene 1: The collision
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "Outside the terminal, juggling your conference badge, laptop bag, and a folder of research papers, you don't see him until it's too late. The collision sends your carefully organized papers flying into the San Francisco wind.",
        choices: null,
        nextScene: 2
    },
    // Scene 2: Jensen appears
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "Hey, it's okay! I've got this one. Wait a second... Neural acceleration through dynamic tensor restructuring? This is... this is brilliant work.",
        choices: null,
        nextScene: 3
    },
    // Scene 3: The realization
    {
        background: "outdoor",
        character: "surprised",
        speaker: "Narrator",
        text: "You look up from gathering papers. Black leather jacket. Silver hair. That unmistakable presence. Your heart stops. Jensen Huang is holding your research paper, actually READING it.",
        choices: null,
        nextScene: 4
    },
    // Scene 4: Jensen's recognition
    {
        background: "outdoor",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "This optimization approach - we've been trying to crack this for months. The way you've structured the neural network architecture... it's elegant. Most researchers focus on the algorithms, but you're thinking about the hardware constraints.",
        choices: null,
        nextScene: 5
    },
    // Scene 5: The invitation
    {
        background: "outdoor",
        character: "nervous",
        speaker: "Jensen Huang",
        text: "Look, I know this is unusual. We just met - literally collided - at an airport. But I have to ask... are you free this afternoon? I want to show you something. Something that could change how you think about your research.",
        choices: [
            {
                text: "Accept enthusiastically",
                nextScene: 6
            },
            {
                text: "Politely decline",
                nextScene: 7
            }
        ]
    },
    // Scene 6: Accepted
    {
        background: "nvidiaoffice",
        character: "laugh",
        speaker: "Jensen Huang",
        text: "Perfect! I'll send a car at 5 PM. Text me when you're at your hotel. And... bring your research. All of it. I want to see everything.",
        choices: null,
        nextScene: 8
    },
    // Scene 7: Declined
    {
        background: "outdoor",
        character: "sad",
        speaker: "Jensen Huang",
        text: "I understand. I know this is unusual, and I respect your decision. But I want you to know - your research is incredible. The way you've approached neural network optimization... it's exactly what the industry needs.",
        choices: null,
        nextScene: "ending_jensen_professional"
    },
    // Scene 8: The tour
    {
        background: "nvidiaoffice",
        character: "neutral",
        speaker: "Jensen Huang",
        text: "Welcome to NVIDIA headquarters. This is where the magic happens. These aren't in any product roadmap. They're... possibilities. The future of computing, right here in this room.",
        choices: null,
        nextScene: 9
    },
    // Scene 9: The confession
    {
        background: "nvidiaoffice",
        character: "affectionate",
        speaker: "Jensen Huang",
        text: "I know this is unprofessional. I know we just met. But I can't stop thinking about what we could build together. Not just as colleagues, but as... something more.",
        choices: [
            {
                text: "Express mutual feelings",
                nextScene: "ending_jensen_romance"
            },
            {
                text: "Keep it professional",
                nextScene: "ending_jensen_professional"
            }
        ]
    }
];

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

// Mark Zuckerberg Story
const markZuckerbergStory = [
    // Scene 0: Welcome to Meta
    {
        background: "outdoor",
        character: null,
        speaker: "Narrator",
        text: "Welcome to Meta headquarters! You're here for a job interview as a software engineer. The campus is buzzing with innovation, and you can feel the energy of the metaverse being built around you.",
        choices: null,
        nextScene: 1
    },
    // Scene 1: The interview
    {
        background: "outdoor",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "Hi! I'm Mark. I've been looking forward to meeting you. Your resume is impressive - tell me about your passion for building the future of social connection.",
        choices: [
            {
                text: "Talk about your vision for the metaverse",
                nextScene: 2
            },
            {
                text: "Discuss your technical expertise",
                nextScene: 3
            },
            {
                text: "Ask about Meta's culture",
                nextScene: 4
            }
        ]
    },
    // Scene 2: Metaverse vision
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "I love that vision! The metaverse is about bringing people together in ways that were never possible before. I think you'd be a perfect fit for our team.",
        choices: null,
        nextScene: 5
    },
    // Scene 3: Technical expertise
    {
        background: "outdoor",
        character: "affectionate",
        speaker: "Mark Zuckerberg",
        text: "Your technical skills are exactly what we need. I'm impressed by your understanding of distributed systems and your passion for innovation.",
        choices: null,
        nextScene: 5
    },
    // Scene 4: Company culture
    {
        background: "outdoor",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "At Meta, we believe in moving fast and breaking things. We want people who aren't afraid to take risks and push boundaries. You seem like that kind of person.",
        choices: null,
        nextScene: 5
    },
    // Scene 5: The offer
    {
        background: "outdoor",
        character: "laugh",
        speaker: "Mark Zuckerberg",
        text: "I'd love to have you join our team. What do you say we grab coffee and discuss the details? I think we could build something amazing together.",
        choices: [
            {
                text: "Accept enthusiastically",
                nextScene: "ending_zuck_romance"
            },
            {
                text: "Keep it professional",
                nextScene: "ending_zuck_professional"
            }
        ]
    }
];

const zuckerbergSprites = {
    neutral: "Characters/MarkZuckeberg/MarkZuck.png"
};

// Endings
const cubanEndings = {
    ending_cuban_passionate: {
        title: "Passionate Connection",
        description: "You and Mark Cuban share a passionate connection!",
        background: "basketball"
    }
};

const jensenEndings = {
    ending_jensen_professional: {
        title: "Professional Partnership",
        description: "You and Jensen Huang build a successful professional relationship!",
        background: "outdoor"
    },
    ending_jensen_romance: {
        title: "True Love in Tech",
        description: "You and Jensen Huang discover that the best partnerships are built on mutual respect, shared vision, and genuine love. Together, you revolutionize AI technology while building a relationship that proves that sometimes the most important discoveries aren't just technological - they're personal.",
        background: "outdoor"
    }
};

const zuckEndings = {
    ending_zuck_romance: {
        title: "Love in the Metaverse",
        description: "You and Mark Zuckerberg discover that the best connections happen when you share a vision for the future. Together, you build not just the metaverse, but a relationship that transcends the digital and physical worlds.",
        background: "outdoor"
    },
    ending_zuck_professional: {
        title: "Professional Partnership",
        description: "You and Mark Zuckerberg build a successful professional relationship at Meta, working together to shape the future of social connection and the metaverse.",
        background: "outdoor"
    }
};

// Merge all endings
const endings = {
    ...cubanEndings,
    ...jensenEndings,
    ...zuckEndings
};

// Current active story and sprites (will be set based on character selection)
let story = markCubanStory;
let currentSprites = cubanSprites;

// DOM Elements
let dialogueBox, characterName, dialogueText, continueIndicator;
let choiceContainer, characterSprite, background, characterContainer;
let secondCharacterContainer, secondCharacterSprite;
let thirdCharacterContainer, thirdCharacterSprite;
let titleScreen, startButton, endingScreen, restartButton, menuButton;
let characterSelectionScreen, characterCards, chapterSelectButton, gameplayChapterSelect;
let bgMusic, titleMusic, sparkleSound, markCubanSound, jensenHuangSound;
let transitionScreen, transitionText;
let splashScreen;
let enableMusicListener = null; // Store reference to the listener

// Initialize the game
function init() {
    console.log('Initializing game...');
    try {
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
        menuButton = document.getElementById('menuButton');
        characterSelectionScreen = document.getElementById('characterSelectionScreen');
        characterCards = document.querySelectorAll('.selection-card');
        chapterSelectButton = document.querySelector('#characterSelectionScreen .selection-label');
        gameplayChapterSelect = document.getElementById('gameplayChapterSelect');
        
        console.log('DOM elements found:', {
            titleScreen: !!titleScreen,
            startButton: !!startButton,
            characterSelectionScreen: !!characterSelectionScreen
        });
    } catch (error) {
        console.error('Error in init function:', error);
        throw error;
    }
    
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
    menuButton.addEventListener('click', returnToMenu);
    dialogueBox.addEventListener('click', advanceDialogue);
    
    // Character selection listeners
    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            const character = card.dataset.character;
            selectCharacter(character);
        });
    });
    
    // Chapter select button
    chapterSelectButton.addEventListener('click', returnToMenu);
    
    // Gameplay chapter select
    gameplayChapterSelect.addEventListener('click', showCharacterSelection);
    
    console.log('Event listeners attached');
}

// Show character selection screen
function showCharacterSelection() {
    console.log('showCharacterSelection called');
    try {
        // Remove the title music click listener if it exists
        if (enableMusicListener) {
            document.removeEventListener('click', enableMusicListener);
            enableMusicListener = null;
        }
        
        // Hide title screen and show character selection
        if (titleScreen) {
            titleScreen.classList.add('hidden');
            console.log('Title screen hidden');
        } else {
            console.error('titleScreen element not found');
        }
        
        if (characterSelectionScreen) {
            characterSelectionScreen.classList.remove('hidden');
            console.log('Character selection screen shown');
        } else {
            console.error('characterSelectionScreen element not found');
        }
    } catch (error) {
        console.error('Error in showCharacterSelection:', error);
    }
}

// Hide splash screen
function hideSplashScreen() {
    splashScreen.classList.add('hidden');
    titleScreen.classList.remove('hidden');
}

// Restart the game
function restartGame() {
    // Navigate to root if on a character route
    if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
    }
    
    // Reset game state
    gameState.currentScene = 0;
    gameState.choices = [];
    gameState.selectedCharacter = null;
    
    // Hide all screens and show title
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    titleScreen.classList.remove('hidden');
}

// Return to menu
function returnToMenu() {
    // Navigate to root
    if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
    }
    
    // Hide all screens and show title
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    titleScreen.classList.remove('hidden');
}

// Select character
function selectCharacter(character) {
    console.log('Selecting character:', character);
    gameState.selectedCharacter = character;
    
    // Set story and sprites based on character
    switch(character) {
        case 'markCuban':
            story = markCubanStory;
            currentSprites = cubanSprites;
            break;
        case 'jensenHuang':
            story = jensenHuangStory;
            currentSprites = jensenSprites;
            break;
        case 'markZuckerberg':
            story = markZuckerbergStory;
            currentSprites = zuckerbergSprites;
            break;
    }
    
    // Hide character selection and start game
    characterSelectionScreen.classList.add('hidden');
    startGame();
}

// Start the game
function startGame() {
    console.log('Starting game with character:', gameState.selectedCharacter);
    gameState.currentScene = 0;
    loadScene(0);
}

// Load scene
function loadScene(sceneIndex) {
    console.log('Loading scene:', sceneIndex);
    if (sceneIndex >= story.length) {
        console.error('Scene index out of bounds:', sceneIndex);
        return;
    }
    
    const scene = story[sceneIndex];
    gameState.currentScene = sceneIndex;
    
    // Update background
    if (scene.background) {
        background.className = `background ${scene.background}`;
    }
    
    // Update character
    if (scene.character && currentSprites[scene.character]) {
        characterSprite.src = currentSprites[scene.character];
        characterContainer.classList.remove('hidden');
    } else {
        characterContainer.classList.add('hidden');
    }
    
    // Update dialogue
    characterName.textContent = scene.speaker || '';
    dialogueText.textContent = scene.text || '';
    
    // Handle choices
    if (scene.choices && scene.choices.length > 0) {
        showChoices(scene.choices);
    } else {
        hideChoices();
    }
}

// Show choices
function showChoices(choices) {
    choiceContainer.innerHTML = '';
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.addEventListener('click', () => {
            if (typeof choice.nextScene === 'number') {
                loadScene(choice.nextScene);
            } else if (typeof choice.nextScene === 'string') {
                showEnding(choice.nextScene);
            }
        });
        choiceContainer.appendChild(button);
    });
    choiceContainer.classList.remove('hidden');
}

// Hide choices
function hideChoices() {
    choiceContainer.classList.add('hidden');
}

// Show ending
function showEnding(endingKey) {
    const ending = endings[endingKey];
    if (ending) {
        document.getElementById('endingTitle').textContent = ending.title;
        document.getElementById('endingDescription').textContent = ending.description;
        document.getElementById('endingImage').src = ending.background ? `Scenes/${ending.background}.png` : '';
        endingScreen.classList.remove('hidden');
    }
}

// Advance dialogue
function advanceDialogue() {
    const currentScene = story[gameState.currentScene];
    if (currentScene && currentScene.nextScene !== undefined) {
        if (typeof currentScene.nextScene === 'number') {
            loadScene(currentScene.nextScene);
        } else if (typeof currentScene.nextScene === 'string') {
            showEnding(currentScene.nextScene);
        }
    }
}

// Auto-start from route
function autoStartFromRoute() {
    const path = window.location.pathname;
    if (path.includes('/mark-cuban')) {
        selectCharacter('markCuban');
    } else if (path.includes('/jensen-huang')) {
        selectCharacter('jensenHuang');
    } else if (path.includes('/mark-zuckerberg')) {
        selectCharacter('markZuckerberg');
    }
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing game...');
    try {
        init();
        console.log('Game initialized successfully');
        
        // Check if we should auto-start from URL
        setTimeout(() => {
            autoStartFromRoute();
        }, 100);
    } catch (error) {
        console.error('Error initializing game:', error);
    }
});
