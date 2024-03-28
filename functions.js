const generateHTMLStructure = () => {
    const listOfFlashcards = localStorage.getItem("flashcards")
    const listOfFlashcardsJSON = JSON.parse(listOfFlashcards)

    document.querySelector(".list-of-flashcards").textContent = ""

    listOfFlashcardsJSON.forEach ((oneFlashcard) => {
    const newDiv = document.createElement("div")
    const newText = document.createElement("p")
    const newButton = document.createElement("button")
    
    newDiv.className = "one-add-flashcard"
    newText.textContent = oneFlashcard["oneSide"]
    newButton.textContent = "x"
    newButton.className = "delete-flashcard"

    newDiv.appendChild(newText)
    newDiv.appendChild(newButton)
    document.querySelector(".list-of-flashcards").appendChild(newDiv)
})}

const getSavedNames = () => {
    if (localStorage.getItem("flashcards") === null){
        var flashcardsArray = []
    } else {
        flashcardsArray = JSON.parse(localStorage.getItem("flashcards"))
    }
}