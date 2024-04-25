// get saved flashcard from LS
const getSavedFlashcards = () => {
    const allFlashcards = localStorage.getItem("flashcards")

    if (allFlashcards === null){
        return []
    } else {
        return JSON.parse(allFlashcards)
    }
}

// save flashcard to LS
const saveFlashcard = (newFlashcard) => {
    const allFlashcards = getSavedFlashcards()
    allFlashcards.push(newFlashcard)
    localStorage.setItem("flashcards", JSON.stringify(allFlashcards))
}

// display list of flashcards to aside panel
const generatelistOfFlashcards = () => {
    const listOfFlashcards = getSavedFlashcards()
    document.querySelector(".list-of-flashcards").textContent = ""
    document.querySelector(".counter").textContent = ""

    // display the total number of flashcards
    let number = document.createElement("p")
    number.textContent = "Number of flashcards: " + (listOfFlashcards.length)
    document.querySelector(".counter").appendChild(number)

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
        newStudyButton.textContent = "y"
        newStudyButton.className = "study-one-flashcard"
        newDeleteButton.textContent = "x"
        newDeleteButton.className = "delete-flashcard"

        newStudyButton.addEventListener("click", () => {
            studyOneFlashcard(oneFlashcard.id)
        })

        newDeleteButton.addEventListener("click", () => {
            deleteFlashcard(oneFlashcard.id)
            generatelistOfFlashcards()

        })
        
        newButtonsDiv.appendChild(newStudyButton)
        newButtonsDiv.appendChild(newDeleteButton)
        newDiv.appendChild(newText)
        newDiv.appendChild(newButtonsDiv)
        document.querySelector(".list-of-flashcards").appendChild(newDiv)
        }
)}

// find one flashcard¨
let indexToStudy
const studyOneFlashcard = (id) => {
    const allFlashcards = getSavedFlashcards()

    indexToStudy = allFlashcards.findIndex( (oneCard) => {
        return oneCard.id === id
    })
    generateFlashcard(indexToStudy)

    // show next flashcard
    document.querySelector(".next-flashcard").addEventListener("click", () => {
        indexToStudy++
        
        if(indexToStudy <= (allFlashcards.length -1)){
            generateFlashcard(indexToStudy)
        } else if (indexToStudy > (allFlashcards.length -1)){
            indexToStudy = 0
            generateFlashcard(indexToStudy)
        }
    })

    // show previous flashcard
    document.querySelector(".previous-flashcard").addEventListener("click", () => {
        indexToStudy--
        
        if(indexToStudy <= (allFlashcards.length -1) && indexToStudy >= 0){
            generateFlashcard(indexToStudy)
        } else if (indexToStudy < 0){
            indexToStudy = (allFlashcards.length -1)
            generateFlashcard(indexToStudy)
        }
    })
}

// display picked flashcard - show html structure on the card
const generateFlashcard = (id) => {
    const listOfFlashcards = getSavedFlashcards()
    
    const cleanOneSide = document.querySelector(".one-side")
    cleanOneSide.textContent = ""
    const cleanOtherSide = document.querySelector(".other-side")
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
    document.querySelector(".one-side").appendChild(oneSideFlashcard)
    document.querySelector(".other-side").appendChild(otherSideFlashcard)
}

// remove all flashcards
const deleteFlashcard = (id) => {
    const allFlashcards = getSavedFlashcards()

    const indexToDelete = allFlashcards.findIndex( (oneCard) => {
        return oneCard.id === id  
    })

    
    allFlashcards.splice(indexToDelete, 1)
    localStorage.setItem("flashcards", JSON.stringify(allFlashcards))

    let previousFlashcard
    if(indexToDelete === 0) {
        previousFlashcard = allFlashcards.length -1
    } else {
        previousFlashcard = indexToDelete - 1
    }
    generateFlashcard(previousFlashcard)
}