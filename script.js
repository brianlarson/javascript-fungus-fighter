
// Set vars to track enemy hit points as well as our attack points
let attackPoints = 100;
let hitPoints = 100;

// Get AP and HP elements
let apDisplay = document.querySelector(".ap-text span");
let hpDisplay = document.querySelector(".hp-text span");

// Get our enemy fungus
let enemy = document.querySelector(".freaky-fungus");

// Create function to handle attacks
function attack(type) {

  // Check for attack type and update AP and HP
  switch (type) {
    case "arcane-scepter":
      attackPoints -= 12;
      hitPoints -= 14;
      break;
    case "entangle":
      attackPoints -= 23;
      hitPoints -= 9;
      break;
    case "dragon-blade":
      attackPoints -= 38;
      hitPoints -= 47;
      break;
    case "star-fire":
      attackPoints -= 33;
      hitPoints -= 25;
      break;
  }

  // Prevent AP and HP values falling below 0
  if (attackPoints < 0) {
    attackPoints = 0;
  }
  if (hitPoints < 0) {
    hitPoints = 0;
  }

  // Handle the death of our enemy by changing a class
  if (hitPoints === 0) {
    enemy.classList.remove("walk");
    enemy.classList.add("dead");
  }

  // Render AP and HP output on screen
  apDisplay.innerText = attackPoints;
  hpDisplay.innerText = hitPoints;

}