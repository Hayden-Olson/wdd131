const enemies = [
    {
        number: 1,
        name: 'Shot',
        image: './pictures/Shot.png',
        alt: 'Image of a Shot',
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
        alt: 'Image of a Bowler Shot',
        health: 1,
        defense: 4,
        location: ["Cannon Castle"],
        tags: ['Steel', 'Creature', 'Enemy', 'Shot'],
        description: 'The ironclad variant of a Shot. Due to their immense weight, they struggle to move around. They also can no longer jump, so they specialize in rolling. Countering is a great way to handle this foe. They also come in many different colors!'
    },
    {
        number: 3,
        name: "Bubble Shot",
        image: './pictures/Bubble_Shot.png',
        alt: 'Image of a Bubble Shot',
        health: 4,
        defense: 0,
        location: ["Cavity Falls"],
        tags: ['Water','Flying','Creature','Enemy','Shot'],
        description: 'A floaty Shot. While it has a little more health than a normal Shot, this variant is unable to physically damage others. When it nudges into its foes, it soaks them and pushes them back a little bit.'
    },
    {
        number: 4,
        name: 'Sugar Shot',
        image: './pictures/Sugar_Shot.png',
        alt: 'Image of a Sugar Shot',
        health: 3,
        defense: 0,
        location: ['Candy Woods'],
        tags: ['Candy','Creature','Enemy','Shot'],
        description: 'A cylindrical shot fired from a Sugar Trooper. They roll around quickly into their opponents. When defeated, they explode into a cloud of sugar powder. When a character ends up inside the cloud, they are candified.'
    },
    {
        number: 5,
        name: 'Golden Shot',
        image: './pictures/Golden_Shot.png',
        alt: 'Image of a Golden Shot',
        health: 5,
        defense: '???',
        location: ['Cannon Canyon'],
        tags: ['Normal','Creature','Enemy','Shot'],
        description: ' Similar to the Golden Cannon Trooper, this golden orb deals massive damage and only takes a single point of damage from any attack. Luckily its health is low, but taking it out in a single turn will not be easy. Additional gold is granted to those who best these ads. Daring adventurers have farmed riches from these foes. '
    },
    {
        number: 6,
        name: 'Cannon Trooper',
        image: './pictures/Cannon_Trooper.png',
        alt: 'Image of a Cannon Trooper',
        health: 4,
        defense: 0,
        location: ['Cannon Canyon', 'Various'],
        tags: ['Normal','Creature','Enemy','Cannon Trooper'],
        description: 'Cannons with feet and the main inhabitants of Cannon Canyon. They usually sport a basic color hue and are plastic like. These beings live for battle and to improve their craft. This basic variety is in the beginning stage, full of potential but lacking in firepower. They believe in self strength, and find calling for help as a sign of weakness. '
    },
    {
        number: 7,
        name: 'Iron Trooper',
        image: './pictures/Iron_Trooper.png',
        alt: 'Image of a Iron Trooper',
        health: 2,
        defense: 4,
        location: ['Cannon Castle'],
        tags: ['Steel','Creature','Enemy','Cannon Trooper'],
        description: 'An ironclad variant of the Cannon Trooper. Very slow and hefty. Normal attacks typically do no damage, so alternative means of damage may be needed to put a dent in them. Try countering their iron cannonballs.'
    },
    {
        number: 8,
        name: 'Hydro Trooper',
        image: './pictures/Hydro_Trooper.png',
        alt: 'Image of a Hydro Trooper',
        health: 8,
        defense: 0,
        location: ['Cavity Falls','Various'],
        tags: ['Water','Creature','Enemy','Cannon Trooper'],
        description: 'A water filled Cannon Trooper that fires water. The water is harmless, so it is more of a nuisance than any real threat. This foe becomes a true danger when paired with electric and frost based enemies.'
    },
    {
        number: 9,
        name: 'Candy Trooper',
        image: './pictures/Candy_Trooper.png',
        alt: 'Image of a Candy Trooper',
        health: 7,
        defense: 0,
        location: ['Candy Woods'],
        tags: ['Candy','Creature','Enemy','Cannon Trooper'],
        description: 'A candified Cannon Trooper that has taken residence in the Candy Woods. The shots it fires will burst into a cloud that can easily candify the target. They are made of gumdrops.'
    },
    {
        number: 10,
        name: 'Gold Trooper',
        image: './pictures/Gold_Trooper.png',
        alt: 'Image of a Gold Trooper',
        health: 20,
        defense: '???',
        location: ['Cannon Canyon'],
        tags: ['Normal','Creature','Enemy','Cannon Trooper'],
        description: 'An extremely rare, gaudy, and durable Cannon Trooper. To find one it to either be very fortunate, or extremely unfortunate depending on the adventurers preparedness and skill. They only ever take 1 damage for any and every hit. Either run, or counter all attacks. Riches to those who best this foe.'
    },
    {
        number: 11,
        name: 'Stax',
        image: './pictures/Stax.png',
        alt: 'Image of a Stax',
        health: 6,
        defense: 0,
        location: ['Cannon Canyon'],
        tags: ['Normal','Creature','Enemy','Stax'],
        description: 'A tower of colored blocks with basic eyes that shuffles around. One of the odd denizens created with the canyon. They love stacking together to stand taller than everyone else. Cannon Troopers love using them for target practice, so the Stax dislike them. '
    },
    {
        number: 12,
        name: 'Obelix',
        image: './pictures/Obelix.png',
        alt: 'Image of a Obelix',
        health: 12,
        defense: 1,
        location: ['Wasteland'],
        tags: ['Psychic','Earth','Creature','Enemy','Stax'],
        description: 'Ancient clay blocks with hieroglyphs. Each glyph seem to grant some specific ability for the enemy team. Each block you break will remove the ability. This foe can create more blocks if not destroyed fast enough. Try dowsing them in water.'
    },
    {
        number: 13,
        name: 'Jax',
        image: './pictures/Jax.png',
        alt: 'Image of a Jax',
        health: 25,
        defense: 2,
        location: ["Charleton's Cove","Jack's Place"],
        tags: ['Steel','Dark','Creature','Enemy','Stax'],
        description: 'A living stack of jacks with a ball on top. The vicious nature of Jacks Place has instilled an evil magic in this pile of spike balls. It takes joy in pelting others ruthlessly. The ball seems to be the weakpoint as it lacks defense.'
    },
    {
        number: 14,
        name: 'Balleblaster',
        image: './pictures/Balleblaster.png',
        alt: 'Image of a Balleblaster',
        health: 10,
        defense: '1 / 0',
        location: ['Cannon Canyon'],
        tags: ['Normal','Creature','Enemy','Various'],
        description: 'The strangest being in Cannon Canyon. A pushdown detonator with one slinky arm that hops around. It attacks by exploding near opponents. This does not destroy the Balleblaster, as it then changes forms to a sort of ballerina, hence the name. The detonator box becomes a tutu and long womanish legs come out below. It then attacks with spin kicks and other leg related moves. It can return back into the box if it wants to explode again.'
    },
    {
        number: 15,
        name: 'Battleblaster',
        image: './pictures/Battleblaster.png',
        alt: 'Image of a Battleblaster',
        health: 30,
        defense: '5 / 0',
        location: ["Charleton's Cove","Jack's Place"],
        tags: ['Normal','Creature','Enemy','Various'],
        description: 'A weaponized variant of the Balleblaster. Fitted with blades and trained in combat to trick its opponents, this being lives to put on a good show for its host.'
    },
    {
        number: 16,
        name: 'Birdy',
        image: './pictures/Birdy.png',
        alt: 'Image of a Birdy',
        health: 2,
        defense: 0,
        location: ['Cannon Canyon'],
        tags: ['Flying','Creature','Enemy','Various'],
        description: 'A speedy, wingless bird that isn’t even a bird. The birdy loves swooping down in hopes of being smacked. If it isn’t smacked, then the target is bonked. Is immune to counter damage, but makes for a great projectile. It propels itself in the air by spinning its crown, and bobs around the skies like its constantly about to plummet. Their masochistic nature is as mysterious as their flight capability.'
    },
    {
        number: 17,
        name: 'Baseman',
        image: './pictures/Baseman.png',
        alt: 'Image of a Baseman',
        health: 7,
        defense: 0,
        location: ['Cannon Canyon'],
        tags: ['Normal','Ground','Creature','Enemy','Various'],
        description: 'An odd being that never reveals itself from under the flooring. The only part that is usually seen is their gloved hand that pops out. They lob various sports balls toward their opponent that have their own trajectory and speed. They’re a bit erratic in movement, seemingly teleporting to different tiles when they move.'
    },
    {
        number: 18,
        name: 'Umpire',
        image: './pictures/Umpire.png',
        alt: 'Image of an Umpire',
        health: 21,
        defense: 4,
        location: ["Charleton's Cove","Marvello's Castle"],
        tags: ['Dark','Ground','Creature','Enemy','Various'],
        description: 'A lanky, manlike magical being that resides in dark areas full of black magic. It wears a tile on its head, so there is speculation of this creature being related to the baseman. It is capable of going under the stage tiles and performing various devious stage actions. Physical attacks from this foe will sap energy from the opponent, so guard well. Light elemental attacks not only pierce its defense, but also deal massive damage.'
    },
    {
        number: 19,
        name: 'Crasher',
        image: './pictures/Crasher.png',
        alt: 'Image of Crasher',
        health: '15 | 30',
        defense: 0,
        location: ['Cannon Town','Wasteland'],
        tags: ['Normal','Human','Miniboss','Thug'],
        description: 'A wild hoodlum who is a demomancer. Crasher attacks with bomb tosses that deal heavy damage. Watch for launched blocks. / Crasher returns to get revenge against Waylon and Rocket for spoiling his fun. Now teamed up with Pug and Thug, Crasher is ready to go all out this time! Watch out for his high speed team attacks!'
    },
    {
        number: 20,
        name: 'Pug',
        image: './pictures/Pug.png',
        alt: 'Image of Pug',
        health: 24,
        defense: 0,
        location: ['Wasteland'],
        tags: ['Normal','Human','Miniboss','Thug'],
        description: "A close friend of Crasher's. When he isn't running his punk fashion shop, he's hanging out with him. He is actually a pretty nice dude, but if Crasher takes issue with someone then Pug will help defend him. Pug will ride around on his motorbike and lob molotavs around. He is pretty defenseless without his bike."
    },
    {
        number: 21,
        name: "Thug",
        image: "./pictures/Thug.png",
        alt: 'Image of Thug',
        health: 35,
        defense: 1,
        location: ['Wasteland'],
        tags: ['Earth','Zobster','Miniboss','Thug'],
        description: "A zobster who has taken a liking to Crasher and Pug. As quiet as he is, his attack screams the loudest. He will grapple his opponent and self destruct. Explosions deal no damage to him, similar for Crasher. He will reform the next turn. Douse him in water!"
    },
    {
        number: 22,
        name: "Tank Trooper",
        image: './pictures/Tank_Trooper.png',
        alt: 'Image of a Tank Trooper',
        health: 100,
        defense: 4,
        location: ['Cannon Castle',"Marvello's Castle"],
        tags: ['Normal','Creature','Miniboss','Cannon Trooper'],
        description: 'A frightening futuristic behemoth. It barely resembles a Cannon Trooper anymore with its vast upgrades. It functions as a rail gun that charges for a bit. While it charges, it attacks physically using its large body as a weapon. It will slam itself against surfaces wildly and recklessly. It has a charging bash it does with its spiked backside. Despite its large size, the fiend is fast and energized like a child on too much sugar. Avoid at all costs if you can.'
    },
    {
        number: 23,
        name: 'King Cannon the Marvelous',
        image: './pictures/King_Cannon_the_Marvelous.png',
        alt: 'Image of King Cannon the Marvelous',
        health: 120,
        defense: 2,
        location: ['Cannon Castle'],
        tags: ['Normal','Creature','Boss','Cannon Trooper'],
        description: 'The crowned ruler of all Cannon Troopers. Made king personally by Marvallo, who entrusted the rule over Cannon Troopers to him. He is large, golden, and wears a red regal cape over his back. While King Cannons are not meant for battle, when pushed into a corner and lacking in troops, they rise to power quickly and can resummon an army in mere seconds. They cannot fire cannonballs, but instead shoot out new Cannon Troopers. There is a limit to how many they can create in a given space and region, so they rely on their Troopers for battle first before joining the fight. King Cannons must be wise and mindful of their troops. King Cannon of Cannon Canyon utilizes great numbers of Troopers and wild spins to throw off opponents. He will fire Cannon Troopers at the opponent and barricade himself behind lines of Troopers.'
    },
    {
        number: 24,
        name: 'King Cannon the Usurper',
        image: './pictures/King_Cannon_the_Usurper.png',
        alt: 'Image of King Cannon the Usurper',
        health: 120,
        defense: 2,
        location: ["Charleton's Cove"],
        tags: ['Normal','Creature','Boss','Cannon Trooper'],
        description: 'Within the deepest depths of the dangerous cave in Cannon Canyon, Charlatans Cave, lies a second King Cannon. He lies in wait for a time to strike and hones his skills to overtake the golden king. The Usurper is large, bronze, and wears a spiked blue cape on his back. Being within a region he does not own and within such a confined space, he lacks great numbers for troops. He makes up for this by heavily leveling up and maintaining his only Troopers. He is also reckless, utilizing his own body for attacks. His physical attacks are similar to that of a Tank Trooper.'
    },
    {
        number: 25,
        name: 'Pirate',
        image: './pictures/Pirate.png',
        alt: 'Image of a Pirate',
        health: 5,
        defense: 0,
        location: ['Cavity Falls'],
        tags: ['Normal','Human','Enemy','Thug'],
        description: "A pirate from Marlin’s crew. These bandits specialize more in robbery than combat. They also seem to be doing this for fun, since they are armed with ridiculous objects for combat."
    },
    {
        number: 26,
        name: 'Captain Marlin',
        image: './pictures/Captain_Marlin.png',
        alt: 'Image of Captain Marlin',
        health: 20,
        defense: 0,
        location: ['Cavity Falls'],
        tags: ['Normal','Human','Miniboss','Thug'],
        description: 'The pirate captain himself. Marlin is a dwarvish man with two peg legs and a big toothy smile. He competes against his co-captain frequently for fun. His weapon of choice is a marlin, aka a swordfish. He is quite agile, so keep on your toes.'
    },
    {
        number: 27,
        name: 'Mecha Marlin',
        image: './pictures/Mecha_Marlin.png',
        alt: 'Image of Mecha Marlin',
        health: 30,
        defense: 1,
        location: ["Marlin's Tower"],
        tags: ['Normal','Mecha','Human','Boss','Thug'],
        description: "Marin’s special wooden pirate ship mecha. Pirate ship body with built in arms and legs and a painted smug grin on the front. It also wields a giant swordfish. Has similar moves to Marlin’s moveset, but with added giant based attacks and the rest of the crew pitching in as well."
    },
    {
        number: 28,
        name: 'Cider',
        image: './pictures/Cider.png',
        alt: 'Image of a Cider',
        health: 6,
        defense: 0,
        location: ["Candy Woods"],
        tags: ['Candy','Water','Creature','Enemy','Various'],
        description: "A candied spider that holds a vat of candy cider in its abdomen. It sprays its prey with the citric acid to dissolve them and drinks them up. Typically, its prey are other candied creatures. If the target is not candied, then it's not so bad. Just don’t let it get in your eyes. Ouch."
    },
    {
        number: 29,
        name: 'Sugar Sprite',
        image: './pictures/Sugar_Sprite.png',
        alt: 'Image of a Sugar Sprite',
        health: 5,
        defense: 0,
        location: ['Candy Woods'],
        tags: ['Candy','Spirit','Candybeing','Enemy','Candyfolk'],
        description: "These sugary spirits are born from the very woods. They are mischievous children with an insatiable curiosity. They eventually develop into one of the many creatures or residents of the woods. They lack a natural means of attacking, so they either play support or use dangerous weapons they randomly find."
    },
    {
        number: 30,
        name: 'Sugar Shinobi',
        image: './pictures/Sugar_Shinobi.png',
        alt: 'Image of a Sugar Shinobi',
        health: 15,
        defense: 0,
        location: ['Candy Woods'],
        tags: ['Candy','Humanoid','Candybeing','Enemy','Candyfolk'],
        description: "The remaining survivors of the old village. They hold immense resentment toward outsiders, and strike from the shadows."
    },
    {
        number: 31,
        name: 'Lichibald',
        image: './pictures/Lichibald.png',
        alt: 'Image of Lichibald',
        health: 176,
        defense: 0,
        location: ['Candy Woods'],
        tags: ['Candy','Plant','Humanoid','Candybeing','Miniboss','Candyfolk'],
        description: "The self appointed guardian of the forest. When he was nearly taken out by Shredder, he established his own guild and personally trained the warriors who were sworn in. He dispises outsiders and will do anything to protect his people. He attacks viciously with his whip like arms, and can summon the spirits in the forest to aid him in combat."
    },
    {
        number: 32,
        name: 'Shredder',
        image: './pictures/Enemy_Shredder.png',
        alt: 'Image of Shredder',
        health: 100,
        defense: 0,
        location: ['Candy Woods'],
        tags: ['Candy','Mech','Miniboss','Candymecha'],
        description: "The serial killer of the woods. You've got him surrounded! Make sure to heal other neural parties fighting him. Shredder specializes in wiping out individuals. His attacks will deal less damage the more people are still fighting, though he can sling his boomerang blade around to attack everyone at once. Water will dull his blade."
    },
    {
        number: 33,
        name: 'Candymecha',
        image: './pictures/Candymecha.png',
        alt: 'Image of a Candymecha',
        health: 27,
        defense: 1,
        location: ['Abandoned Base'],
        tags: ['Candy','Mech','Enemy','Candymecha'],
        description: "A military robot that slashes at anything that moves. Potent magic has altered its metal to take on properties of candy."
    },
    {
        number: 34,
        name: 'Stakataka',
        image: './pictures/Stakataka.png',
        alt: 'Image of a Stakataka',
        health: 10,
        defense: 1,
        location: ['Candy Woods'],
        tags: ['Candy','Steel','Creature','Enemy','Various'],
        description: "These walking walls love smashing smaller beings with its face. Its back is weakened from its smashing hobby, so attack there to bypass its defense."
    },
    {
        number: 35,
        name: 'Sugabooga',
        image: './pictures/Sugabooga.png',
        alt: 'Image of Sugabooga',
        health: 50,
        defense: 0,
        location: ['Candy Woods'],
        tags: ['Candy','Spirit','Boss','Candyfolk'],
        description: "The spirits have had enough! All Sugar Sprites in the woods have morphed together to form a giant sugar being, to get revenge against Shredder. The being is immune to damage, but will split when slashed. Keep dividing the giant until you can single out single Sugar Sprites and knock them out."
    }
]

// ...existing enemies array and display functions...

// Generate enemy links dynamically
const enemiesDiv = document.querySelector('.enemies');
function listFill(givenlist) {
    enemiesDiv.innerHTML = givenlist.map((enemy) =>
  enemyLinkTemplate(enemy)
).join('');

}

function enemyLinkTemplate(enemy) {
    return `<a href="#" data-index="${enemy.number - 1}" aria-label="Show info for ${enemy.name}">#${enemy.number} ${enemy.name}</a>`
}

const searchbar = document.querySelector('.searchbar');
const searchbutton = document.querySelector('.searchbutton');

function filterList(search) {
	// sort by tags
	const sorted = enemies.filter(enemy => enemy.tags.includes(capitalize(search)) || enemy.location.includes(capitalize(search)));
	listFill(sorted);
}

function capitalize(str) {
    if (!str) return "";
    return str
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

searchbutton.addEventListener('click', function(e) {
    e.preventDefault();
    filterList(searchbar.value);
});
searchbar.addEventListener('change', function() {
    let searchQuery = [];
    filterList(searchbar.value);
    if (searchbar.value == '') {
        listFill(enemies);
    }
});

// Use event delegation for click handling
enemiesDiv.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const index = parseInt(e.target.getAttribute('data-index'));
    changeInfo(index);
  }
});

// Now this sets the enemy portrait
function displayPicture(enemyName, indexNumber, enemyPortrait, enemyAlt) {
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
    picture.alt = enemyAlt;
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
    let enemyAlt = enemies[number].alt;

    // Getting the needed information for enemy_information

    let enemyHealth = enemies[number].health;
    let enemyDefense = enemies[number].defense;
    let enemyLocation = enemies[number].location;
    let enemyTags = enemies[number].tags;
    let enemyDescription = enemies[number].description;

    // Call the display functions

    displayPicture(enemyName, indexNumber, enemyPortrait, enemyAlt);
    displayInformation(enemyHealth, enemyDefense, enemyLocation, enemyTags, enemyDescription);

}

// Default page load.
listFill(enemies)
changeInfo(0);