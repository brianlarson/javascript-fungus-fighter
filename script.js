
// Set vars to track enemy hit points as well as our attack points
let attackPoints = 100;
let hitPoints = 100;

// Get AP and HP elements
let apDisplay = document.querySelector(".ap-text span");
let hpDisplay = document.querySelector(".hp-text span");

// Get our enemy fungus
let enemy = document.querySelector(".freaky-fungus");

// Get our attack buttons
let attackButtons = document.querySelectorAll(".attacks button");

// Create function to handle attacks
function attack(type) {

  // Check for attack type and update AP and HP
  switch (type) {
    case "arcane-scepter":
      attackPoints -= 12;
      hitPoints -= 14;
      break;
    case "entangle": // kill yourself
      attackPoints -= 23;
      hitPoints -= 9;
      break;
    case "dragon-blade": // kill the monster
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

  // When enemy HP is 0 then change a class that shows it dying 🧙🏽‍♂️
  if (hitPoints === 0) {
    enemy.classList.remove("walk");
    enemy.classList.add("dead");
  }

  // If we run out of AP then disable the attack buttons and make
  // our enemy jump for joy 🍄
  if (attackPoints === 0) {
    for (const button of attackButtons) {
      button.setAttribute("disabled", "disabled");
    }
    enemy.classList.remove("walk");
    enemy.classList.add("jump");
  }

  // Render AP and HP output on screen
  apDisplay.innerText = attackPoints;
  hpDisplay.innerText = hitPoints;

}