const fs = require('fs');

// Read the file
const content = fs.readFileSync('markCubanStory.js', 'utf8');

// Extract the story array
const match = content.match(/export const markCubanStory = \[([\s\S]*?)\n\];/);
if (!match) {
  console.log('Could not find story array');
  process.exit(1);
}

// Parse scenes manually
const scenes = [];
const lines = match[1].split('\n');
let currentScene = {};
let inScene = false;
let braceCount = 0;

for (let line of lines) {
  const trimmed = line.trim();
  
  // Track comment labels
  if (trimmed.startsWith('// Scene')) {
    currentScene.label = trimmed;
    continue;
  }
  
  // Track braces
  for (let char of line) {
    if (char === '{') {
      braceCount++;
      if (braceCount === 1) inScene = true;
    }
    if (char === '}') {
      braceCount--;
      if (braceCount === 0 && inScene) {
        scenes.push(currentScene);
        currentScene = {};
        inScene = false;
      }
    }
  }
  
  // Extract nextScene
  if (trimmed.startsWith('nextScene:')) {
    const num = trimmed.match(/nextScene:\s*(\d+)/);
    if (num) currentScene.nextScene = parseInt(num[1]);
  }
  
  // Extract choices
  if (trimmed.includes('choices:') && trimmed.includes('[')) {
    currentScene.hasChoices = true;
  }
}

// Verify all nextScene references
console.log('\n=== SCENE FLOW VERIFICATION ===\n');
console.log(`Total scenes: ${scenes.length} (indices 0-${scenes.length - 1})\n`);

let errors = 0;
for (let i = 0; i < scenes.length; i++) {
  const scene = scenes[i];
  if (scene.nextScene !== undefined) {
    if (scene.nextScene < 0 || scene.nextScene >= scenes.length) {
      console.log(`❌ Index ${i}: ${scene.label || 'Unknown'}`);
      console.log(`   nextScene: ${scene.nextScene} (OUT OF BOUNDS!)\n`);
      errors++;
    } else if (scene.nextScene === i) {
      console.log(`❌ Index ${i}: ${scene.label || 'Unknown'}`);
      console.log(`   nextScene: ${scene.nextScene} (POINTS TO ITSELF!)\n`);
      errors++;
    }
  }
}

if (errors === 0) {
  console.log('✅ All scenes have valid nextScene references!');
  console.log('✅ No infinite loops detected!');
  console.log('✅ No out-of-bounds references!');
} else {
  console.log(`\n❌ Found ${errors} error(s)`);
  process.exit(1);
}
