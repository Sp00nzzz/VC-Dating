// Import story modules
import { markCubanStory, sprites as cubanSprites, endings as cubanEndings } from './markCubanStory.js';
import { jensenHuangStory, sprites as jensenSprites, endings as jensenEndings } from './jensenHuangStory.js';
import { markZuckerbergStory, sprites as zuckerbergSprites, endings as zuckEndings } from './markZuckerbergStory.js';

// Game State
const gameState = {
    currentScene: 0,
    choices: [],
    playerName: "You",
    selectedCharacter: null // Track which character's story is active
};

// Side character sprites
const mrWonderfulSprites = {
    neutral: "/Characters/Sharks/MrWonderful.png",

};

const loriSprites = {
    neutral: "/Characters/Sharks/Lori.png"
};

const directorSprites = {
    neutral: "/Characters/SideCharacters/Director.png"
};

const producerSprites = {
    neutral: "/Characters/SideCharacters/Producer.png"
};

// Merge all endings
const endings = {
    ...cubanEndings,
    ...jensenEndings,
    ...zuckEndings
};

// Current active story and sprites (will be set based on character selection)
// Story and sprites will be set based on character selection
let story = markCubanStory;
let currentSprites = cubanSprites;

// DOM Elements
let dialogueBox, characterName, dialogueText, continueIndicator;
let choiceContainer, characterSprite, background, characterContainer;
let secondCharacterContainer, secondCharacterSprite;
let thirdCharacterContainer, thirdCharacterSprite;
let titleScreen, startButton, endingScreen, endingChapterSelect;
let characterSelectionScreen, characterCards, chapterSelectButton, gameplayChapterSelect;
let bgMusic, titleMusic, sparkleSound, markCubanSound, jensenHuangSound, markZuckerbergSound;
let transitionScreen, transitionText;
let splashScreen;
let enableMusicListener = null; // Store reference to the listener
let settingsPopup, settingsButton, volumeSlider, volumeValue, settingsClose;
let globalVolume = 0.5; // Default volume (50%)
let mobileScreen;

// Test image loading for debugging
function testImageLoading() {
    const testImages = [
        '/TitleScreen.png',
        '/DateATechie-Logo.png',
        '/Characters/MarkCuban/MarkCuban.png',
        '/Characters/JensenHuang/JensenHuang.png',
        '/Characters/MarkZuckeberg/MarkZuck.png'
    ];
    
    testImages.forEach(src => {
        const img = new Image();
        img.onload = () => console.log(`✅ Image loaded: ${src}`);
        img.onerror = () => console.log(`❌ Image failed: ${src}`);
        img.src = src;
    });
}

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
    endingChapterSelect = document.getElementById('endingChapterSelect');
    characterSelectionScreen = document.getElementById('characterSelectionScreen');
    settingsPopup = document.getElementById('settingsPopup');
    settingsButton = document.querySelector('.settings-btn');
    volumeSlider = document.getElementById('volumeSlider');
    volumeValue = document.getElementById('volumeValue');
    settingsClose = document.getElementById('settingsClose');
    mobileScreen = document.getElementById('mobileScreen');
    characterCards = document.querySelectorAll('.selection-card');
    chapterSelectButton = document.querySelector('#characterSelectionScreen .selection-label');
    gameplayChapterSelect = document.getElementById('gameplayChapterSelect');
    bgMusic = document.getElementById('bgMusic');
    titleMusic = document.getElementById('titleMusic');
    sparkleSound = document.getElementById('sparkleSound');
    markCubanSound = document.getElementById('markCubanSound');
    jensenHuangSound = document.getElementById('jensenHuangSound');
    markZuckerbergSound = document.getElementById('markZuckerbergSound');
    transitionScreen = document.getElementById('transitionScreen');
    transitionText = document.getElementById('transitionText');
    splashScreen = document.getElementById('splashScreen');

    // Event listeners
    splashScreen.addEventListener('click', hideSplashScreen);
    startButton.addEventListener('click', showCharacterSelection);
    endingChapterSelect.addEventListener('click', returnToMenu);
    dialogueBox.addEventListener('click', advanceDialogue);
    
    // Settings event listeners
    settingsButton.addEventListener('click', showSettings);
    settingsClose.addEventListener('click', hideSettings);
    volumeSlider.addEventListener('input', updateVolume);
    
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
    
    // Gameplay chapter select button to return to character selection
    gameplayChapterSelect.addEventListener('click', () => {
        // Use the same logic as the ending screen return to menu button
        returnToMenu();
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
    
    // Test image loading for debugging
    testImageLoading();
}

// Hide splash screen and show title screen
function hideSplashScreen() {
    // Start title music with user interaction
    titleMusic.volume = globalVolume;
    titleMusic.play().catch(e => console.log("Title music error:", e));
    
    // Preload title screen background
    const titleBg = new Image();
    titleBg.src = '/TitleScreen.png';
    
    // Function to transition to title screen
    const transitionToTitle = () => {
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
    
    titleBg.onload = () => {
        console.log("Title screen image loaded successfully");
        transitionToTitle();
    };
    titleBg.onerror = (e) => {
        console.log("Title screen image failed to load:", e);
        console.log("Attempted to load:", titleBg.src);
        transitionToTitle();
    };
    
    // Fallback in case image is already cached
    if (titleBg.complete) {
        transitionToTitle();
    }
    
    // Fallback timeout in case image loading hangs
    setTimeout(() => {
        if (!titleScreen.classList.contains('hidden')) {
            console.log("Title screen transition timeout, forcing transition");
            transitionToTitle();
        }
    }, 3000);
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
    
    // Update URL based on character selection
    const urlMap = {
        'cuban': '/markcuban',
        'jensen': '/jensenhuang',
        'zuckerberg': '/markzuckerberg'
    };
    
    if (urlMap[character]) {
        window.history.pushState({}, '', urlMap[character]);
    }
    
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
    
    // Play Mark Zuckerberg sound if Mark Zuckerberg is selected
    if (character === 'zuckerberg' && markZuckerbergSound) {
        // Play after a short delay so it plays after the sparkle sound
        setTimeout(() => {
            markZuckerbergSound.currentTime = 0;
            markZuckerbergSound.volume = 0.5;
            markZuckerbergSound.play().catch(e => console.log("Mark Zuckerberg sound error:", e));
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
            bgMusic.volume = globalVolume;
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
            currentSprites = cubanSprites;
        } else if (character === 'zuckerberg') {
            story = markZuckerbergStory;
            currentSprites = zuckerbergSprites;
        } else {
            // Default to Mark Cuban if unknown character
            story = markCubanStory;
            currentSprites = cubanSprites;
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
    // Navigate to root if on a character route
    if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
    }
    
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

// Return to main menu
function returnToMenu() {
    // Simply refresh the website and go to root directory
    window.location.href = '/';
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
                img.src = currentSprites[nextScene.character];
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
        // Check if it's a side character (director, producer, sharks, etc.)
        if (scene.character === 'director') {
            characterSprite.src = directorSprites.neutral;
        } else if (scene.character === 'producer') {
            characterSprite.src = producerSprites.neutral;
        } else if (scene.character === 'lori') {
            characterSprite.src = loriSprites.neutral;
        } else if (scene.character === 'mrwonderful') {
            characterSprite.src = mrWonderfulSprites.neutral;
        } else {
            characterSprite.src = currentSprites[scene.character];
        }
        
        // Add error handling for character sprites
        characterSprite.onerror = (e) => {
            console.log("Character sprite failed to load:", e);
            console.log("Attempted to load:", characterSprite.src);
        };
        
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
            spriteSet = currentSprites;
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
                thirdSpriteSet = currentSprites;
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
    
    // Show gameplay chapter select button during story scenes
    gameplayChapterSelect.classList.remove('hidden');
}

// Advance dialogue
function advanceDialogue() {
    const scene = story[gameState.currentScene];
    
    if (!scene) {
        console.error('Scene not found at index:', gameState.currentScene);
        return;
    }
    
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
    
    // Set character image and name tag based on current character
    const characterImage = document.getElementById('endingCharacterImage');
    const characterNametag = document.getElementById('endingCharacterNametag');
    
    if (gameState.selectedCharacter === 'jensen') {
        characterImage.src = '/CharacterSelectScreen/JensenSelect.png';
        characterNametag.src = '/CharacterSelectScreen/JensenHuangNameTag.png';
    } else if (gameState.selectedCharacter === 'cuban') {
        characterImage.src = '/CharacterSelectScreen/MarkCubanSelect.png';
        characterNametag.src = '/CharacterSelectScreen/MarkCubanNameTag.png';
    } else if (gameState.selectedCharacter === 'zuckerberg') {
        characterImage.src = '/CharacterSelectScreen/MarkZuckSelect.png';
        characterNametag.src = '/CharacterSelectScreen/MarkZuckNameTag.png';
    }
    
    // Update background
    background.className = 'background ' + ending.background;
    
    // Hide game elements
    dialogueBox.style.display = 'none';
    choiceContainer.classList.remove('active');
    characterContainer.style.display = 'none';
    secondCharacterContainer.style.display = 'none';
    thirdCharacterContainer.style.display = 'none';
    gameplayChapterSelect.classList.add('hidden');
    
    // Show ending screen with fade-in
    endingScreen.style.display = 'flex';
    // Trigger fade-in after a brief delay to ensure display is set
    setTimeout(() => {
        endingScreen.classList.add('active');
    }, 10);
}

// Router function to handle URL-based character selection
function handleRouting() {
    const path = window.location.pathname;
    console.log('Current path:', path);
    
    // Check if path matches a character route
    if (path === '/markcuban' || path === '/cuban') {
        return 'cuban';
    } else if (path === '/jensenhuang' || path === '/jensen') {
        return 'jensen';
    } else if (path === '/markzuckerberg' || path === '/zuckerberg') {
        return 'zuckerberg';
    }
    
    return null; // No character route, show selection screen
}

// Auto-start game if on a character route
function autoStartFromRoute() {
    const character = handleRouting();
    
    if (character) {
        console.log('Auto-starting with character:', character);
        
        // Hide splash screen immediately
        splashScreen.style.display = 'none';
        
        // Hide title screen
        titleScreen.classList.add('hidden');
        
        // Hide character selection
        characterSelectionScreen.classList.add('hidden');
        
        // Start game with selected character
        selectCharacter(character);
    }
}

// Settings functions
function showSettings() {
    settingsPopup.classList.remove('hidden');
    // Set current volume on slider
    volumeSlider.value = globalVolume * 100;
    volumeValue.textContent = Math.round(globalVolume * 100) + '%';
}

function hideSettings() {
    settingsPopup.classList.add('hidden');
}

function updateVolume() {
    globalVolume = volumeSlider.value / 100;
    volumeValue.textContent = Math.round(globalVolume * 100) + '%';
    
    // Apply volume to all audio elements
    if (bgMusic) bgMusic.volume = globalVolume;
    if (titleMusic) titleMusic.volume = globalVolume;
    if (sparkleSound) sparkleSound.volume = globalVolume;
    if (markCubanSound) markCubanSound.volume = globalVolume;
    if (jensenHuangSound) jensenHuangSound.volume = globalVolume;
    if (markZuckerbergSound) markZuckerbergSound.volume = globalVolume;
}

// Mobile detection function
function isMobileDevice() {
    const userAgent = navigator.userAgent;
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isMobileWidth = window.innerWidth <= 768;
    
    console.log('User Agent:', userAgent);
    console.log('Window Width:', window.innerWidth);
    console.log('Is Mobile UA:', isMobileUA);
    console.log('Is Mobile Width:', isMobileWidth);
    
    return isMobileUA || isMobileWidth;
}

// Show mobile screen if on mobile device
function checkMobileDevice() {
    console.log('Checking mobile device...');
    if (isMobileDeviceCached()) {
        console.log('Mobile device detected, showing mobile screen');
        // Hide all other screens
        if (splashScreen) {
            splashScreen.style.display = 'none';
            splashScreen.classList.add('hidden');
        }
        if (titleScreen) titleScreen.classList.add('hidden');
        if (characterSelectionScreen) characterSelectionScreen.classList.add('hidden');
        if (endingScreen) endingScreen.classList.remove('active');
        
        // Show mobile screen
        if (mobileScreen) {
            mobileScreen.classList.remove('hidden');
            createCherryBlossoms();
            console.log('Mobile screen should be visible now');
        } else {
            console.error('Mobile screen element not found');
        }
        return true;
    }
    console.log('Not a mobile device, continuing with normal initialization');
    return false;
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Check for mobile device first - do this immediately
    if (isMobileDeviceCached()) {
        console.log('Mobile detected on DOMContentLoaded');
        // Immediately hide splash screen
        const splash = document.getElementById('splashScreen');
        if (splash) {
            splash.style.display = 'none';
            splash.classList.add('hidden');
        }
        
        // Show mobile screen
        const mobile = document.getElementById('mobileScreen');
        if (mobile) {
            mobile.classList.remove('hidden');
        }
        return; // Stop initialization if on mobile
    }
    
    // Check for mobile device again with full check
    if (checkMobileDevice()) {
        return; // Stop initialization if on mobile
    }
    
    init();
    
    // Check if we should auto-start from URL
    setTimeout(() => {
        autoStartFromRoute();
    }, 100);
});

// Debug function to force show mobile screen (temporary)
window.showMobileScreen = function() {
    console.log('Force showing mobile screen for debugging');
    if (mobileScreen) {
        mobileScreen.classList.remove('hidden');
        console.log('Mobile screen should now be visible');
    } else {
        console.error('Mobile screen element not found');
    }
};

// Optimized resize handler with debouncing
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        console.log('Window resized, checking mobile device again...');
        if (isMobileDeviceCached()) {
            checkMobileDevice();
        }
    }, 250); // Debounce resize events
});

// Cherry Blossom Effect for Mobile - Optimized
let cherryBlossomInterval = null;
let cherryBlossomCreated = false;

function createCherryBlossoms() {
    const cherryContainer = document.getElementById('cherryBlossoms');
    if (!cherryContainer || cherryBlossomCreated) return;
    
    cherryBlossomCreated = true;
    
    // Clear existing petals
    cherryContainer.innerHTML = '';
    
    // Create fewer petals initially for better performance
    for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.className = 'cherry-petal';
        
        // Random horizontal position
        petal.style.left = Math.random() * 100 + '%';
        
        // Random animation duration (4-8 seconds)
        const duration = 4 + Math.random() * 4;
        petal.style.animationDuration = duration + 's';
        
        // Random delay (0-4 seconds)
        const delay = Math.random() * 4;
        petal.style.animationDelay = delay + 's';
        
        cherryContainer.appendChild(petal);
    }
    
    // Add new petals less frequently and with fewer petals
    cherryBlossomInterval = setInterval(() => {
        if (cherryContainer.children.length < 20) {
            const petal = document.createElement('div');
            petal.className = 'cherry-petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (4 + Math.random() * 4) + 's';
            petal.style.animationDelay = '0s';
            cherryContainer.appendChild(petal);
        }
    }, 5000); // Increased interval from 2s to 5s
}

// Clean up cherry blossom interval when not needed
function cleanupCherryBlossoms() {
    if (cherryBlossomInterval) {
        clearInterval(cherryBlossomInterval);
        cherryBlossomInterval = null;
    }
    cherryBlossomCreated = false;
}

// Optimized mobile detection with caching
let mobileDetectionCache = null;
let lastDetectionTime = 0;
const DETECTION_CACHE_DURATION = 1000; // Cache for 1 second

function isMobileDeviceCached() {
    const now = Date.now();
    if (mobileDetectionCache !== null && (now - lastDetectionTime) < DETECTION_CACHE_DURATION) {
        return mobileDetectionCache;
    }
    
    const result = isMobileDevice();
    mobileDetectionCache = result;
    lastDetectionTime = now;
    return result;
}


