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

const generateHTMLStructure = () => {
    const listOfFlashcards = getSavedFlashcards()
    document.querySelector(".list-of-flashcards").textContent = ""

    listOfFlashcards.forEach ((oneFlashcard) => {
        const newDiv = document.createElement("div")
        const newText = document.createElement("p")
        const newButton = document.createElement("button")
    
        newDiv.className = "one-add-flashcard"
        newText.textContent = oneFlashcard["oneSide"]
        newButton.textContent = "x"
        newButton.className = "delete-flashcard"

        newButton.addEventListener("click", () => {
            deleteFlashcard(oneFlashcard.id)
            generateHTMLStructure()
        })

        newDiv.appendChild(newText)
        newDiv.appendChild(newButton)
        document.querySelector(".list-of-flashcards").appendChild(newDiv)

        
})}


const deleteFlashcard = (id) => {
    const allFlashcards = getSavedFlashcards()

    const indexToDelete = allFlashcards.findIndex( (oneCard) => {
        return oneCard.id === id  
    })

    allFlashcards.splice(indexToDelete, 1)
    localStorage.setItem("flashcards", JSON.stringify(allFlashcards))
}
