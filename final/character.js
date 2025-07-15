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
        speed: 3,
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
        description: "An overconfident Willow who believes he knows what he's doing, even when most of the time, he doesn't. Even if he comes off a bit too egotistical, he really does care for others and wants to help any person in need. He lacks real firepower with his magic since he severed his sacred tie to it, and instead uses the miniscule amount of magic he has left to create enhanced weapons. He will most often use a gun that fires elemental bullets. After being rescued in Candy Woods and after discovering the disappearance of his village, he joins Rocket with Rex and goes undercover with Rex in a trenchcoat. On top of rescuing his people, he also wants to become a great detective."
    },
    {
        name: 'Waylon',
        title: "Slow and Sturdy Batter",
        health: '',
        attack: '',
        defense: '',
        specialAttack: '',
        specialDefense: '',
        speed: '',
        description: ""
    },
    {
        name: 'Waylon',
        title: "Slow and Sturdy Batter",
        health: '',
        attack: '',
        defense: '',
        specialAttack: '',
        specialDefense: '',
        speed: '',
        description: ""
    },
    {
        name: 'Waylon',
        title: "Slow and Sturdy Batter",
        health: '',
        attack: '',
        defense: '',
        specialAttack: '',
        specialDefense: '',
        speed: '',
        description: ""
    },
]

var rotation = 0
setInterval(function() {
    $('div').css({
        "-moz-transform": "rotate(" + rotation + "deg)",
        "-webkit-transform": "rotate(" + rotation + "deg)",
        "-o-transform": "rotate(" + rotation + "deg)",
        "-ms-transform": "rotate(" + rotation + "deg)"
    });

    rotation = (rotation + 10) % 361
}, 200)

function statStars(number){
    for (let index=0; index<=10; index++) {
		if (index <= number) {
			html += "⭐"
		} else {
			html += "☆"
		}
	}
}
