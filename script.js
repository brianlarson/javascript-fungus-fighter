
// Set vars to track enemy hit points as well as our attack points
let hitPoints = 100;
let attackPoints = 100;

// Create function to handle attacks and handle AP and HP
function attack(type, cost, damage) {
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
  console.log(`AP:`, attackPoints);
  console.log(`HP:`, hitPoints);
}