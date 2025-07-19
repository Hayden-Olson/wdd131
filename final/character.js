const characters = [
    {
        name: 'Rocket',
        title: "Rocket Propelled Bruiser",
        health: 10,
        attack: 8,
        defense: 5,
        specialAttack: 3,
        specialDefense: 3,
        speed: 10,
        image: './pictures/Rocket.png',
        alt: 'Image of Rocket',
        description: "A young amnesiac boy who has a hefty golden robotic right arm. He is the heart of the team, having an unending amount of hope and courage. His general goofiness and cheeriness helps the team's general mood. He is also very reckless and moronic, often having no plan and charging into any situation fist first. He is the first to really establish the team, having a dream to explore the land as an adventurer and fight off bad guys."
    },
    {
        name: 'Waylon',
        title: "Slow and Sturdy Batter",
        health: 5,
        attack: 7,
        defense: 9,
        specialAttack: 5,
        specialDefense: 6,
        speed: 4,
        image: './pictures/Waylon.png',
        alt: 'Image of Waylon',
        description: "An adult adventurer who is the last remaining member in his guild. Somewhat strict and forlorn. He wields a bat and has a mean swing, but is rather sluggish with the equipment he has on. While Rocket joins and gives him a new team to travel with, he can't help but wonder where everyone in his old team went. He wonders if he was what drove everyone to leave. His wish is to travel the land and uncover what happened to his old team members, hoping they are still alive and well."
    },
    {
        name: 'Rex',
        title: "Squishy Magic Caster",
        health: 5,
        attack: 0,
        defense: 0,
        specialAttack: 10,
        specialDefense: 10,
        speed: 5,
        image: './pictures/Rex.png',
        alt: 'Image of Rex',
        description: "A timid Willow who wants to be useful. In spite of his intelligence, he often doubts himself. Is the main magic caster in the group, being able to cast a wide variety of elemental attacks with potent power. He originally joins Rocket to find his friend Dec in the Candy Woods, who entered and never returned. After losing everyone else in his village, he stays with Rocket in hopes of finding his people and freeing them. Hopefully, he can find more courage and self-confidence along the way."
    },
    {
        name: 'Dec Tective',
        title: "Inventive Artificer",
        health: 4,
        attack: 4,
        defense: 0,
        specialAttack: 7,
        specialDefense: 10,
        speed: 5,
        image: './pictures/Dec_Tective.png',
        alt: 'Image of Dec Tective',
        description: "An overconfident Willow who believes he knows what he's doing, even when most of the time, he doesn't. He wears the trenchcoat to hide his true colors and form, which he finds embarrassing. Even if he comes off a bit too egotistical, he really does care for others and wants to help any person in need. He lacks real firepower with his magic since he severed his sacred tie to it, and instead uses the miniscule amount of magic he has left to create enhanced weapons. He will most often use a gun that fires elemental bullets. After being rescued in Candy Woods and after discovering the disappearance of his village, he joins Rocket with Rex and goes undercover with Rex in a trenchcoat. On top of rescuing his people, he also wants to become a great detective."
    },
    {
        name: 'Norman Guy',
        title: "Duel Caster",
        health: 8,
        attack: 5,
        defense: 5,
        specialAttack: 10,
        specialDefense: 10,
        speed: 1,
        image: './pictures/Norman_Guy.png',
        alt: 'Image of Norman Guy',
        description: "Rex and Dec join forces to create this wobbly persona, 'Guy Norman'. This disguise helps guard them from the eyes of SKIES and allows them to explore freely. Rex does his best to fix Dec's deductions while Dec says whatever is on his mind. Luckily, Dec can talk his way out of situations he puts himself in. In combat, this combines the duo's stats to help improve their chance of staying up in the field. They attack together, dealing much more damage together. The only issue is moving around in combat is a bit wonky. It IS two willows in a trenchcoat after all."
    },
    {
        name: 'Shredder',
        title: "Ranged Slasher",
        health: 7,
        attack: 10,
        defense: 4,
        specialAttack: 5,
        specialDefense: 5,
        speed: 7,
        image: './pictures/Shredder.png',
        alt: 'Image of Shredder',
        description: "A curious Candy Mecha who wishes to find a new and better purpose for himself. He is an efficient warrior, capable of ending battles in a single turn with his magnet blade that he can throw around like a boomerang. The biggest downside is an issue he is trying to overcome, his original programmed purpose to kill anything in sight. When overwhelmed in any situation, he switches into attack mode where he becomes a dangerous enemy for his allies. He joins Rocket in his quest after Rocket quite literally knocked his senses back in. He wishes to atone for the horrible things he cannot recall by becoming a hero with Rocket."
    },
    {
        name: 'Pierce',
        title: "Vicious Lancer",
        health: 4,
        attack: 2,
        defense: 10,
        specialAttack: 7,
        specialDefense: 7,
        speed: 10,
        image: './pictures/Pierce.png',
        alt: 'Image of Pierce',
        description: "An antagonistic candy mecha who holds a grudge against his brother, Shredder. He is the one Mecha in his line to not be designed for combat, and he will do anything to prove his worth in his family line. Not that any of his brothers mocked him for it, more that he feels isolated from the others having a purpose so mundane. In combat, he attacks like a fiend, giving rapid jabs to his foes and drilling into them. While his attack is low, his piercing damage allows him to always deal damage to even the most durable foe. He can also transform into a vehicle form, where he can quickly drive around and ram into things. He wishes to prove his worth...to himself. Even if it kills him."
    },
    {
        name: 'Electro',
        title: "Defensive DJ",
        health: 3,
        attack: 2,
        defense: 8,
        specialAttack: 4,
        specialDefense: 8,
        speed: 8,
        image: './pictures/Electro.png',
        alt: 'Image of Electro',
        description: "A famous musician Mech who is taking a break from his career after a musical accident. He is a somewhat laid back being who is trying to better understand people after being disassociated from normal people in his life of fame. He lacks any real attack power, but his music can help boost team members and disrupt opponents. His mechanical form also somehow forms 'holo' versions of things such as shields or clones from the music he plays. He joins Rocket to offer actual help after attempting to distract everyone from the inevitable issue at hand. He wishes to protect the common people who give his life purpose."
    },
    {
        name: 'Ribbon',
        title: "Tempest Warrior",
        health: 9,
        attack: 8,
        defense: 2,
        specialAttack: 6,
        specialDefense: 8,
        speed: 10,
        image: './pictures/Ribbon.png',
        alt: 'Image of Ribbon',
        description: "A royal guard in the Wraps pyramid who helped guard the red gem they dedicate their lives for. She is a bit too focused on the mission goal and lacks a real personality. She can be a bit intimidating and awkward in conversation. She wields a spear, but her real specialty comes from utilizing the nearby elements of the stage to turn the tables in combat. She can rearrange the stage and use some parts to throw at enemies. She was forced to join the team by the Queen to help them gather the three gems and check on Marvallo, their master. She has no real wish, but maybe she will develop her own desires after breaking out of the mold of her old life."
    }
]

// This function toggles a css query that handles the flipping of the card. Instead of hovering, I wanted the card to only flip on click.
const flipper = document.querySelector(".flip-card");
flipper.addEventListener('click', () => {
    flipper.classList.toggle('flipped');
});


const buttonleft = document.querySelector(".left");
const buttonright = document.querySelector(".right");
let currentIndex = 0;

buttonleft.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex == -1)
        currentIndex = characters.length - 1;
    changeInfo(currentIndex);
})

buttonright.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex == characters.length)
        currentIndex = 0;
    changeInfo(currentIndex);
})

// Places the stars for each stat. Amount of filled stars is equal to the given number in their stat.
function statStars(number){
    let html = '';
    for (let index=0; index<10; index++) {
		if (index <= number) {
			html += "★"
		} else {
			html += "☆"
		}
	}
    return html;
}

// Creates and places the character description onto the back of the card.
function setDescription(description) {
    let charDescript = `${description}`;
    let backbox = document.querySelector(".character_description");
    backbox.innerHTML = `
    <h2>Character Description</h2>
    <p>${charDescript}</p>`;
}

// Creates and places the character stats onto the front of the card.
function setStats(name,title,health,attack,defense,sA,sD,speed) {
    let frontbox = document.querySelector(".character_stats");
    let charName = `${name}`;
    let charTitle = `${title}`;
    let charHealth = `Health: ${statStars(health)}`;
    let charAttack = `Attack: ${statStars(attack)}`;
    let charDefense = `Defense: ${statStars(defense)}`;
    let charSA = `Special Attack: ${statStars(sA)}`;
    let charSD = `Special Defense: ${statStars(sD)}`;
    let charSpeed = `Speed: ${statStars(speed)}`;
    frontbox.innerHTML = `
    <h2>Character Stats</h2>
    <h3>${charName}</h3>
    <h4>${charTitle}</h4>
    <p>${charHealth}</p>
    <p>${charAttack}</p>
    <p>${charDefense}</p>
    <p>${charSA}</p>
    <p>${charSD}</p>
    <p>${charSpeed}</p>`;
}

// This function will create and display three images for the page.
function generatePictures(index) {
    let charImage1 = characters[index].image;
    let charAlt1 = characters[index].alt;
    let picture1 = document.createElement("img");
    picture1.src = charImage1;
    picture1.alt = charAlt1;
    picture1.className = "mainpic";

    let index2;
    if (index == characters.length - 1) {
        index2 = 0;
    } else {
        index2 = index + 1;
    }
    
    let charImage2 = characters[index2].image;
    let charAlt2 = characters[index2].alt;
    let picture2 = document.createElement("img");
    picture2.src = charImage2;
    picture2.alt = charAlt2;
    picture2.className = "smallerpic";

    let index3;
    if (index == 0) {
        index3 = characters.length - 1;
    } else {
        index3 = index - 1;
    }
    
    let charImage3 = characters[index3].image;
    let charAlt3 = characters[index3].alt;
    let picture3 = document.createElement("img");
    picture3.src = charImage3;
    picture3.alt = charAlt3;
    picture3.className = "smallerpic";

    let carosel = document.querySelector(".characters");
    carosel.innerHTML = ""; // clear previous content
    carosel.appendChild(picture3);
    carosel.appendChild(picture1);
    carosel.appendChild(picture2);
}

// Changes the displayed character information when a button is pressed.
function changeInfo(index) {

    // Generate the three images.
    generatePictures(index);

    // Front side of the box.

    let charName = characters[index].name;
    let charTitle = characters[index].title;
    let charHealth = characters[index].health;
    let charAttack = characters[index].attack;
    let charDefense = characters[index].defense;
    let charSA = characters[index].specialAttack;
    let charSD = characters[index].specialDefense;
    let charSpeed = characters[index].speed;
    setStats(charName,charTitle,charHealth,charAttack,charDefense,charSA,charSD,charSpeed);
    
    // Back side of the box.

    let charDescript = characters[index].description;
    setDescription(charDescript);
}

// Default page load.

changeInfo(0);
generatePictures();
