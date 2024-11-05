
// Set vars to track enemy hit points as well as our attack points
let hitPoints = 100;
let attackPoints = 100;

// Get AP and HP elements
let attackPointsDisplay = document.querySelector(".ap-text span");
let hitPointsDisplay = document.querySelector(".hp-text span");

console.log(attackPointsDisplay);
console.log(hitPointsDisplay);

// Create function to handle attacks and handle AP and HP
function attack(type) {

  // Check for attack type and adjust AP and HP accordingly
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

  // Handle AP and HP values falling below 0 and force to 0
  if (attackPoints < 0) {
    attackPoints = 0;
  }
  if (hitPoints < 0) {
    hitPoints = 0;
  }

  // Update AP and HP outputs on screen
  attackPointsDisplay.innerText = attackPoints;
  hitPointsDisplay.innerText = hitPoints;

  // Output AP and HP to console
  console.log(`attackPoints`, attackPoints);
  console.log(`hitPoints`, hitPoints);

}