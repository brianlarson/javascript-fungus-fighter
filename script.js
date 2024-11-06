
// Set vars to track enemy hit points as well as our attack points
let attackPoints = 100;
let hitPoints = 100;

// Get AP and HP values
let apDisplay = document.querySelector(".ap-text span");
let hpDisplay = document.querySelector(".hp-text span");

// Get our enemy fungus element
let enemy = document.querySelector(".freaky-fungus");

// Get our attack buttons in an array
let attackButtons = document.querySelectorAll(".attacks button");

// Get progress bars
let apProgressBar = document.querySelector("#ap-meter");
let hpProgressBar = document.querySelector("#hp-meter");

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
    default:
      console.log(`No attack type defined`);
  }

  // Prevent AP and HP values falling below 0
  if (attackPoints < 0) {
    attackPoints = 0;
  }
  if (hitPoints < 0) {
    hitPoints = 0;
  }

  // When enemy HP is 0 then change a class that shows it dying
  if (hitPoints === 0) {
    enemy.classList.remove("walk");
    enemy.classList.add("dead");
    disableAttackButtons();
  }

  // When AP is 0 disable attack buttons and show enemy jumping
  if (attackPoints === 0) {
    enemy.classList.remove("walk");
    enemy.classList.add("jump");
    disableAttackButtons();
  }

  // Render AP and HP number output on screen
  apDisplay.innerText = attackPoints;
  hpDisplay.innerText = hitPoints;

  // Update AP and HP progress bars
  apProgressBar.setAttribute("value", attackPoints);
  hpProgressBar.setAttribute("value", hitPoints);

}

// Create function to disable attack buttons
function disableAttackButtons() {
  for (const button of attackButtons) {
    button.setAttribute("disabled", "disabled");
  }
}