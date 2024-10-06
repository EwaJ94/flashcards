const flashcardList = document.querySelector(".list-of-flashcards")
const numberOfCards = document.querySelector(".counter")
const nextFlashcard = document.querySelector(".next-flashcard")
const showPrevFlashcard = document.querySelector(".previous-flashcard")
const frontSide = document.querySelector(".one-side")
const backSide = document.querySelector(".other-side")

// get saved flashcard from LS
const getSavedFlashcards = () => {

    if (typeof Storage !== "undefined"){
        try {
            const allFlashcards = localStorage.getItem("flashcards")

            if (allFlashcards === null){
                return []
            } else {
                return JSON.parse(allFlashcards)
            }
        } catch (error) {
            console.log("Error accessing local storage")
        }
    } else {
        console.log("Local storage is not supported in this browser.");
    }
}

// save flashcard to LS
const saveFlashcard = (newFlashcard) => {

    if (typeof Storage !== "undefined"){
        try {
            const allFlashcards = getSavedFlashcards()
            allFlashcards.push(newFlashcard)
            localStorage.setItem("flashcards", JSON.stringify(allFlashcards))
        } catch (error) {
            console.log("Error accessing local storage")
        }
    } else {
        console.log("Local storage is not supported in this browser.");
    }
}

// display list of flashcards to aside panel
const generateListOfFlashcards = () => {
    const listOfFlashcards = getSavedFlashcards()
    flashcardList.textContent = ""
    numberOfCards.textContent = ""

    // display the total number of flashcards
    let number = document.createElement("p")
    number.textContent = "Number of flashcards: " + (listOfFlashcards.length)
    numberOfCards.appendChild(number)

    // generate html structure
    listOfFlashcards.forEach ((oneFlashcard) => {
        const newDiv = document.createElement("div")
        const newText = document.createElement("p")
        const newButtonsDiv = document.createElement("div")
        const newStudyButton = document.createElement("button")
        const newDeleteButton = document.createElement("button")
    
        newDiv.className = "one-add-flashcard"
        newText.textContent = oneFlashcard["oneSide"]
        newButtonsDiv.className = "buttons-in-list"
        newStudyButton.textContent = "✔"
        newStudyButton.className = "study-one-flashcard"
        newDeleteButton.textContent = "x"
        newDeleteButton.className = "delete-flashcard"

        newStudyButton.addEventListener("click", () => {
            studyOneFlashcard(oneFlashcard.id)
        })

        newDeleteButton.addEventListener("click", () => {
            deleteFlashcard(oneFlashcard.id)
            generateListOfFlashcards()
        })
        
        newButtonsDiv.appendChild(newStudyButton)
        newButtonsDiv.appendChild(newDeleteButton)
        newDiv.appendChild(newText)
        newDiv.appendChild(newButtonsDiv)
        flashcardList.appendChild(newDiv)
        }
)}

// find one flashcard
let indexToStudy

const studyOneFlashcard = (id) => {
    const allFlashcards = getSavedFlashcards()

    indexToStudy = allFlashcards.findIndex( (oneCard) => {
        return oneCard.id === id
    })
    generateFlashcard(indexToStudy)

}

// remove one flashcards
let indexToDelete

const deleteFlashcard = (id) => {
    const allFlashcards = getSavedFlashcards()

    indexToDelete = allFlashcards.findIndex( (oneCard) => {
        return oneCard.id === id  
    })

    if(allFlashcards.length > 1) {
        allFlashcards.splice(indexToDelete, 1)
        localStorage.setItem("flashcards", JSON.stringify(allFlashcards))
        
        let showPrevFlashcard
        if(indexToDelete === 0) {
            showPrevFlashcard = indexToDelete++
        } else if(indexToDelete === allFlashcards.length) {
            showPrevFlashcard = 0
        } else if(indexToDelete === indexToStudy) {
            showPrevFlashcard = indexToDelete++ 
        } else if(indexToDelete !== indexToStudy) {
            showPrevFlashcard = 0
        }
        generateFlashcard(showPrevFlashcard)
   
    } else {
        allFlashcards.length = 0
        localStorage.clear()
        const cleanOneSide = frontSide
        cleanOneSide.textContent = ""
        const cleanOtherSide = backSide
        cleanOtherSide.textContent = ""
    }
}

// show next flashcard
nextFlashcard.addEventListener("click", () => {
    const allFlashcards = getSavedFlashcards()

    indexToStudy++
    if(indexToStudy <= (allFlashcards.length-1)){
        generateFlashcard(indexToStudy)
    } else if (indexToStudy > (allFlashcards.length -1)){
        indexToStudy = 0
        generateFlashcard(indexToStudy)
    }
})
    
// show previous flashcard
showPrevFlashcard.addEventListener("click", () => {
    const allFlashcards = getSavedFlashcards()
    
    indexToStudy--
    if(indexToStudy < 0){
        indexToStudy = allFlashcards.length-1
        generateFlashcard(indexToStudy)
    } else if(indexToStudy <= (allFlashcards.length -1) && indexToStudy >= 0) {
        generateFlashcard(indexToStudy)
    }
    
})

// display picked flashcard - show html structure on the card
const generateFlashcard = (id) => {
    const listOfFlashcards = getSavedFlashcards()
    
    const cleanOneSide = frontSide
    cleanOneSide.textContent = ""
    const cleanOtherSide = backSide
    cleanOtherSide.textContent = ""
    
    const oneSideFlashcard = document.createElement("div")
    const otherSideFlashcard = document.createElement("div")
    const newOneSideText = document.createElement("p")
    const newOtherSideText = document.createElement("p")

    oneSideFlashcard.className = "one-side-flashcard"
    otherSideFlashcard.className = "other-side-flashcard"
    newOneSideText.textContent = listOfFlashcards[id]["oneSide"]
    newOtherSideText.textContent = listOfFlashcards[id]["otherSide"]
    
    oneSideFlashcard.appendChild(newOneSideText)
    otherSideFlashcard.appendChild(newOtherSideText)
    frontSide.appendChild(oneSideFlashcard)
    backSide.appendChild(otherSideFlashcard)
}