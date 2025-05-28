const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
]

for (const article of articles) {
	const book = document.createElement("div")
	book.classList.add("book")

	book.id = article.id

	// This is the book information
	const book_information = document.createElement("div")
	book_information.classList.add("book_information")

	const date = document.createElement("h3")
	date.textContent = article.date
	const ages = document.createElement("p")
	ages.textContent = article.ages
	const genre = document.createElement("p")
	genre.textContent = article.genre
	const stars = document.createElement("p")
	stars.textContent = article.stars
	book_information.append(date,ages,genre,stars)

	// This is the book description
	const book_description = document.createElement("div")
	book_description.classList.add("book_description")
	
	const title = document.createElement("h2")
	title.textContent = article.title

	const picture = document.createElement("div")
	picture.classList.add("picture")
	const image = document.createElement("img")
	image.src = article.imgSrc
	image.alt = article.imgAlt
	picture.append(image)

	const description = document.createElement("p")
	description.textContent = article.description
	book_description.append(title,picture,description)

	book.append(book_information,book_description)
	const main = document.getElementsByTagName("main")[0]
	main.append(book)
};

const filter = document.querySelector(".filter")
filter.style.gridRow = `1 / ${articles.length + 1}`;