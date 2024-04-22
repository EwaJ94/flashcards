const getSavedFlashcards = () => {
    const allFlashcards = localStorage.getItem("flashcards")


    if (allFlashcards === null){
        return []
    } else {
        return JSON.parse(allFlashcards)
    }

}

const saveFlashcard = (newFlashcard) => {
    const allFlashcards = getSavedFlashcards()

    allFlashcards.push(newFlashcard)
    localStorage.setItem("flashcards", JSON.stringify(allFlashcards))
}

const generatelistOfFlashcards = () => {
    const listOfFlashcards = getSavedFlashcards()
    document.querySelector(".list-of-flashcards").textContent = ""
    document.querySelector(".counter").textContent = ""

    let number = document.createElement("p")

    number.textContent = "Number of flashcards: " + (listOfFlashcards.length)

    document.querySelector(".counter").appendChild(number)

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






const deleteFlashcard = (id) => {
    const allFlashcards = getSavedFlashcards()

    const indexToDelete = allFlashcards.findIndex( (oneCard) => {
        return oneCard.id === id  
    })

    allFlashcards.splice(indexToDelete, 1)
    localStorage.setItem("flashcards", JSON.stringify(allFlashcards))
}

const studyOneFlashcard = (id) => {
    const allFlashcards = getSavedFlashcards()

    const indexToStudy = allFlashcards.findIndex( (oneCard) => {
        return oneCard.id === id
    })

    studyAllFlashcards(indexToStudy)
   
}

const studyAllFlashcards = (id) => {
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



