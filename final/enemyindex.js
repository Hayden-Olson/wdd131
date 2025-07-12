const enemies = [
    {
        number: 1,
        name: 'Shot',
        image: './pictures/Shot.png',
        health: 1,
        defense: 0,
        location: ['Cannon Canyon', 'Various'],
        tags: ['Normal', 'Creature', 'Enemy', 'Shot'],
        description: 'Cannon shots fired by Cannon Troopers that came alive for some reason. They are very simple creatures that usually try to fend off others by bonking into them.'
    },
    {
        number: 2,
        name: "Bowler Shot",
        image: './pictures/Bowler_Shot.png',
        health: 1,
        defense: 4,
        location: ["Cannon Castle"],
        tags: ['Steel', 'Creature', 'Enemy', 'Shot'],
        description: 'The ironclad variant of a Shot. Due to their immense weight, they struggle to move around. They also can no longer jump, so they specialize in rolling. Countering is a great way to handle this foe. They also come in many different colors!'
    },
    {

    }
]

// Now this sets the enemy portrait
function displayPicture(enemyName, indexNumber, enemyPortrait) {
    let oldpicture = document.querySelector(".enemy_picture");
    if (oldpicture) {
        oldpicture.remove();
    };
    let headerText = `#${indexNumber} ${enemyName}`;
    let header = document.querySelector(".enemy_name");
    header.textContent = headerText;
    let picture = document.createElement("img");
    picture.classList.add("enemy_picture");
    picture.src = enemyPortrait;
    let div = document.querySelector(".enemy_portrait");
    div.appendChild(picture);
}

// Displays in the enemy_information container.
function displayInformation(enemyHealth, enemyDefense, enemyLocation, enemyTags, enemyDescription) {
    let healthText = `Health: ${enemyHealth}`;
    let healthP = document.querySelector(".enemy_health");
    healthP.textContent = healthText;

    let defenseText = `Defense: ${enemyDefense}`;
    let defenseP = document.querySelector(".enemy_defense");
    defenseP.textContent = defenseText;

    let locationP = document.querySelector(".location");
    locationP.textContent = `Location: ${enemyLocation.join(", ")}`;

    let tagsP = document.querySelector(".tags");
    tagsP.innerHTML = `<u>Tags</u>: <br>${enemyTags.join("<br>")}`;

    let descP = document.querySelector(".enemy_description");
    descP.textContent = enemyDescription;
}

function changeInfo(number) {

    // Getting the needed information for enemy_picture

    let enemyName = enemies[number].name;
    let indexNumber = enemies[number].number;
    let enemyPortrait = enemies[number].image;

    // Getting the needed information for enemy_information

    let enemyHealth = enemies[number].health;
    let enemyDefense = enemies[number].defense;
    let enemyLocation = enemies[number].location;
    let enemyTags = enemies[number].tags;
    let enemyDescription = enemies[number].description;

    // Call the display functions

    displayPicture(enemyName, indexNumber, enemyPortrait);
    displayInformation(enemyHealth, enemyDefense, enemyLocation, enemyTags, enemyDescription);

}

// User input is tracked here
//function enemySelect()

changeInfo(0);