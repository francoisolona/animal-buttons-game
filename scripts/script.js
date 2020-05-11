// Get all DOM elements

const allButtons = document.querySelector('.allButtons')

const dogButton = allButtons.querySelector('.dog')
const dog = // Using objects makes it more easy to change details later.
{
    url: './audio/dogSound.mp3',
    volume: 1
}
const catButton = allButtons.querySelector('.cat')
const cat =
{
    url: './audio/catSound.mp3',
    volume: 1
}
const cowButton = allButtons.querySelector('.cow')
const cow =
{
    url: './audio/cowSound.mp3',
    volume: 1
}
const pigButton = allButtons.querySelector('.pig')
const pig =
{
    url: './audio/pigSound.mp3',
    volume: 1
}
const chickenButton = allButtons.querySelector('.chicken')
const chicken =
{
    url: './audio/chickenSound.mp3',
    volume: 1
}
const horseButton = allButtons.querySelector('.horse')
const horse =
{
    url: './audio/horseSound.mp3',
    volume: 1
}

const sheepButton = allButtons.querySelector('.sheep')
const sheep =
{
    url: './audio/sheepSound.mp3',
    volume: 1
}

const donkeyButton = allButtons.querySelector('.donkey')
const donkey =
{
    url: './audio/donkeySound.mp3',
    volume: 1
}

const changeNoise = document.querySelector('.changeNoise')

const checkAnswer = document.querySelector('.checkAnswer')
const wasClicked = document.querySelector('.wasClicked')
const result = document.querySelector('.result')

let score = 0 // Creating a score in order to incremente it with every right answer and stop the game once every animals were found

const dogFace = document.querySelector('.dogFace')
const catFace = document.querySelector('.catFace')
const cowFace = document.querySelector('.cowFace')
const pigFace = document.querySelector('.pigFace')
const chickenFace = document.querySelector('.chickenFace')
const horseFace = document.querySelector('.horseFace')
const sheepFace = document.querySelector('.sheepFace')
const donkeyFace = document.querySelector('.donkeyFace')

const restart = document.querySelector('.restart')
const oldCalagan = document.querySelector('.oldCalagan')

const endScreen = document.querySelector('.endScreen')
const animalGame = document.querySelector('.animalGame')

// Game

const dogQuestion = 'le chien'
const catQuestion = 'le chat'
const cowQuestion = 'la vache'
const pigQuestion = 'le cochon'
const chickenQuestion = 'la poule'
const horseQuestion = 'le cheval'
const sheepQuestion = 'le mouton'
const donkeyQuestion = `l'âne`

let allQuestions = [dogQuestion, catQuestion, cowQuestion, pigQuestion, chickenQuestion, horseQuestion, sheepQuestion, donkeyQuestion]
const startButton = document.querySelector('.startButton')
let question = dogQuestion
const newQuestion = document.querySelector('.newQuestion')

// Get all sounds

let dogSound = new Audio(dog.url)
dogSound.volume = dog.volume
let catSound = new Audio(cat.url)
catSound.volume = cat.volume
let cowSound = new Audio(cow.url)
cowSound.volume = cow.volume
let pigSound = new Audio(pig.url)
pigSound.volume = pig.volume
let chickenSound = new Audio(chicken.url)
chickenSound.volume = chicken.volume
let horseSound = new Audio(horse.url)
horseSound.volume = horse.volume
let sheepSound = new Audio(sheep.url)
sheepSound.volume = sheep.volume
let donkeySound = new Audio(donkey.url)
donkeySound.volume = donkey.volume

// Change sounds according to funnyVoice menu

const funnyVoice = document.querySelector('.funnyVoice')
let higherPitch = false // Funny noises are not activated unless you activate it.

funnyVoice.addEventListener('input', () =>
{
    if(higherPitch === false) // If animals are set on "normal sound" you can activate the funny voice option, which will replace every sound by a higher pitched one.
    {
        higherPitch = true
        dog.url = "./audio/dogSoundFunny.mp3"
        dogSound = new Audio(dog.url)
        cat.url = "./audio/catSoundFunny.mp3"
        catSound = new Audio(cat.url)
        cow.url = "./audio/cowSoundFunny.mp3"
        cowSound = new Audio(cow.url)
        pig.url = "./audio/pigSoundFunny.mp3"
        pigSound = new Audio(pig.url)
        chicken.url = "./audio/chickenSoundFunny.mp3"
        chickenSound = new Audio(chicken.url)
        horse.url = "./audio/horseSoundFunny.mp3"
        horseSound = new Audio(horse.url)
        sheep.url = "./audio/sheepSoundFunny.mp3"
        sheepSound = new Audio(sheep.url)
        donkey.url = "./audio/donkeySoundFunny.mp3"
        donkeySound = new Audio(donkey.url)
    }
    else if(higherPitch === true) // If animals are set on "funny sound" you can set it back to normal.
    {
        higherPitch = false
        dog.url = "./audio/dogSound.mp3"
        dogSound = new Audio(dog.url)
        cat.url = "./audio/catSound.mp3"
        catSound = new Audio(cat.url)
        cow.url = "./audio/cowSound.mp3"
        cowSound = new Audio(cow.url)
        pig.url = "./audio/pigSound.mp3"
        pigSound = new Audio(pig.url)
        chicken.url = "./audio/chickenSound.mp3"
        chickenSound = new Audio(chicken.url)
        horse.url = "./audio/horseSound.mp3"
        horseSound = new Audio(horse.url)
        sheep.url = "./audio/sheepSound.mp3"
        sheepSound = new Audio(sheep.url)
        donkey.url = "./audio/donkeySound.mp3"
        donkeySound = new Audio(donkey.url)
    }
})

// Background music toggle

const backgroundMusic = new Audio('./audio/backgroundMusic.mp3')
const musicToggle = document.querySelector('.musicToggle')
const musicOnOff = document.querySelector('.musicOnOff')
let isPlaying = false // Music is not playing until you activate it.
backgroundMusic.volume = 0.4

musicToggle.addEventListener('click', () =>
{
    if(isPlaying === false) // if the background music is not already playing, you can activate it.
    {
        isPlaying = true
        musicOnOff.setAttribute('src', './images/soundOn.png')
        backgroundMusic.play()
    }
    else if(isPlaying === true) // if the background music is already playing, you can pause it.
    {
        isPlaying = false
        musicOnOff.setAttribute('src', './images/soundOff.png')
        backgroundMusic.pause()
    }
    
})

// Show result

const rightAnswer = () =>
{
    score = score + 1
    checkAnswer.style.display = 'flex'
    checkAnswer.style.background = '#1dd1a1'
    result.textContent = 'Bravo !'
    wasClicked.textContent = `C'était bien ${question} !`
    removeAskedQuestions()
    question = allQuestions[Math.floor(Math.random() * allQuestions.length)] // Selects a new random question in the array amongst the remaining animals.
    newQuestion.textContent = `Où est ${question} ?`
    setTimeout(()=>
    {
        checkAnswer.style.display = 'none'
    }, 3000)

}
const wrongAnswer = (x) =>
{
    checkAnswer.style.display = 'flex'
    checkAnswer.style.background = '#ff6b6b'
    result.textContent = 'Zut !'
    wasClicked.textContent = `Tu as cliqué sur ${x} !` // Tells you on which button you clicked so you can learn which animal it was.
    setTimeout(()=>
    {
        checkAnswer.style.display = 'none'
    }, 3000)
}
 
// Play button Events

dogButton.addEventListener('click', () =>
{
    dogFace.setAttribute('src', './images/dogPt3.png') // Thanks to the third image, it looks like we are pushing a button
    dogSound.currentTime = 0
    dogSound.play()
    if (question === dogQuestion)
    {
        setTimeout(rightAnswer, 1000) // Leads you to the right answer screen and adds +1 to the score if you found the good button.
    }
    else
    {
        setTimeout(() =>
        {
            wrongAnswer('le chien') // Tells you you mistook the animals and simply allows you to try again as much as you want.
        }, 1000)
    }
})

catButton.addEventListener('click', () =>
{
    catFace.setAttribute('src', './images/catPt3.png')
    catSound.currentTime = 0
    catSound.play()
    if (question === catQuestion)
    {
        setTimeout(rightAnswer, 1000)
    }
    else
    {
        setTimeout(() =>
        {
            wrongAnswer('le chat')
        }, 1000)
    }
})
cowButton.addEventListener('click', () =>
{
    cowFace.setAttribute('src', './images/cowPt3.png')
    cowSound.currentTime = 0
    cowSound.play()
    if (question === cowQuestion)
    {
        setTimeout(rightAnswer, 1000)
    }
    else
    {
        setTimeout(() =>
        {
            wrongAnswer('la vache')
        }, 1000)
    }
})
pigButton.addEventListener('click', () =>
{
    pigFace.setAttribute('src', './images/pigPt3.png')
    pigSound.currentTime = 0
    pigSound.play()
    setTimeout(() => {pigSound.play()}, 500)
    if (question === pigQuestion)
    {
        setTimeout(rightAnswer, 1000)
    }
    else
    {
        setTimeout(() =>
        {
            wrongAnswer('le cochon')
        }, 1000)
    }
})
chickenButton.addEventListener('click', () =>
{
    chickenFace.setAttribute('src', './images/chickenPt3.png')
    chickenSound.currentTime = 0
    chickenSound.play()
    if (question === chickenQuestion)
    {
        setTimeout(rightAnswer, 1000)
    }
    else
    {
        setTimeout(() =>
        {
            wrongAnswer('la poule')
        }, 1000)
    }
})
horseButton.addEventListener('click', () =>
{
    horseFace.setAttribute('src', './images/horsePt3.png')
    horseSound.currentTime = 0
    horseSound.play()
    if (question === horseQuestion)
    {
        setTimeout(rightAnswer, 1000)
    }
    else
    {
        setTimeout(() =>{
            wrongAnswer('le cheval')
        }, 1000)
    }
})
sheepButton.addEventListener('click', () =>
{
    sheepFace.setAttribute('src', './images/sheepPt3.png')
    sheepSound.currentTime = 0
    sheepSound.play()
    if (question === sheepQuestion)
    {
        setTimeout(rightAnswer, 1000)
    }
    else
    {
        setTimeout(() =>
        {
            wrongAnswer('le mouton')
        }, 1000)
    }
})
donkeyButton.addEventListener('click', () =>
{
    donkeyFace.setAttribute('src', './images/donkeyPt3.png')
    donkeySound.currentTime = 0
    donkeySound.play()
    if (question === donkeyQuestion)
    {
        setTimeout(rightAnswer, 1000)
    }
    else
    {
        setTimeout(() =>
        {
            wrongAnswer(`l'âne`)
        }, 1000)
    }
})

// Buttons animations
// Using mouseleave and mouseenter and not mouseover and mouseout

dogButton.addEventListener('mouseleave', () =>
{
    dogFace.setAttribute('src', './images/dogPt1.png')
})
dogButton.addEventListener('mouseenter', () =>
{
    dogFace.setAttribute('src', './images/dogPt2.png')
})

catButton.addEventListener('mouseleave', () =>
{
    catFace.setAttribute('src', './images/catPt1.png')
})
catButton.addEventListener('mouseenter', () =>
{
    catFace.setAttribute('src', './images/catPt2.png')
})

cowButton.addEventListener('mouseleave', () =>
{
    cowFace.setAttribute('src', './images/cowPt1.png')
})
cowButton.addEventListener('mouseenter', () =>
{
    cowFace.setAttribute('src', './images/cowPt2.png')
})

pigButton.addEventListener('mouseleave', () =>
{
    pigFace.setAttribute('src', './images/pigPt1.png')
})
pigButton.addEventListener('mouseenter', () =>
{
    pigFace.setAttribute('src', './images/pigPt2.png')
})

chickenButton.addEventListener('mouseleave', () =>
{
    chickenFace.setAttribute('src', './images/chickenPt1.png')
})
chickenButton.addEventListener('mouseenter', () =>
{
    chickenFace.setAttribute('src', './images/chickenPt2.png')
})

horseButton.addEventListener('mouseleave', () =>
{
    horseFace.setAttribute('src', './images/horsePt1.png')
})
horseButton.addEventListener('mouseenter', () =>
{
    horseFace.setAttribute('src', './images/horsePt2.png')
})

sheepButton.addEventListener('mouseleave', () =>
{
    sheepFace.setAttribute('src', './images/sheepPt1.png')
})
sheepButton.addEventListener('mouseenter', () =>
{
    sheepFace.setAttribute('src', './images/sheepPt2.png')
})

donkeyButton.addEventListener('mouseleave', () =>
{
    donkeyFace.setAttribute('src', './images/donkeyPt1.png')
})
donkeyButton.addEventListener('mouseenter', () =>
{
    donkeyFace.setAttribute('src', './images/donkeyPt2.png')
})

// Removing the question ID in the array in order to prevent it from appearing again
const removeAskedQuestions = () =>
{
    let questionIndex = allQuestions.indexOf(question)
    if (questionIndex !== -1) allQuestions.splice(questionIndex, 1);
}

// Game start

const startGame = () =>
{
    allButtons.style.display = 'flex' // Shows all buttons
    changeNoise.style.display = 'flex' // Shows funny voice toggle menu
    startButton.style.display = 'none'
    newQuestion.textContent = `Où est ${question} ?`
}

startButton.addEventListener('click', () =>
{
    startGame()
})

// Ending screen

oldCalagan.addEventListener('mouseleave', () =>
{
    oldCalagan.setAttribute('src', './images/ranchman.png')
})

oldCalagan.addEventListener('mouseenter', () =>
{
    oldCalagan.setAttribute('src', './images/ranchmanPt2.png')
})

restart.addEventListener('click', () => // Refresh page when clicking on the funny face
{
    location.reload()
})

// Showing ending screen

const congratsAudio = new Audio('./audio/audioCongrats.mp3')

const gameEnd = () =>
{
    setTimeout(() =>
    {
    endScreen.style.display = 'flex' // Shows the end screen
    congratsAudio.play()
    }, 3000)
    animalGame.style.display = 'none' // Hides the game interface
}

const checkScore = () => // Stops the game once the player has guessed every single animal
{
   if (score === 8)
   {
      return gameEnd() // Using return stops the function and prevents infinite loop
   }
   requestAnimationFrame(checkScore)
}
checkScore()