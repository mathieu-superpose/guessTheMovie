const startButton = document.querySelector(".game__playground__start");
const questions = document.querySelector(".game__playground__questions");
const emojis = document.querySelector(".game__playground__questions__display__emojis");
const answer = document.querySelector(".game__playground__questions__display__answer");

const previousScoreDisplay = document.querySelector(".game__playground__questions__previous-score");
const scoreDisplay = document.querySelector(".game__playground__questions__score");

const previousScore = 0;
const score = 0;

const movies = [
	['🌻🌻🌻🌻🌻🌻🔪👂', 'Van Gogh'],
	['👨🧠🧠', 'The man with two brains'],
	['👂🐘👂', 'Dumbo'],
	['👴📰🛷', 'Citizen Kane'],
	['😷🐑🐑', 'Silence of the Lambs'],
	['👶👓⚡️🏰✨🎓💫😱😵', 'Harry Potter'],
	['📹🏃‍♂️🌲🌳', 'The Blair Witch Project'],
	['🌊👳🚣🐯', 'Life of Pi'],
	['🇯🇵💣🇺🇸⚓️', 'Pearl Harbor'],
	['👴➡️👨‍🦰➡️🧑‍🦱➡️👶', 'The Curious Case of Benjamin Button'],
	['👨‍🦰👨‍🦰🏕❤️🏔', 'Brokeback Mountain']
]

const startGame = () => {
	startButton.style.display = "none";
	questions.style.display = "contents";
	
	const randomMovie = movies[Math.floor(Math.random() * movies.length)];
	emojis.innerHTML = randomMovie[0];

	const reg = /\w/g
	answer.innerHTML = randomMovie[1].replace(" ", "   ").replace(reg, "-");;
}
