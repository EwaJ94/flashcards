const addNewFlashcard = document.querySelector(".add-new-flashcard")
const removeAll = document.querySelector(".remove-all")
const flashcardsList = document.querySelector(".list-of-flashcards")
const frontSides = document.querySelector(".one-side")
const backSides = document.querySelector(".other-side")

generatelistOfFlashcards()

// save input text to local storage
const addFlashcard = addNewFlashcard
addFlashcard.addEventListener("submit", (e) => {
    e.preventDefault()

    let oneSideText = e.target.elements.oneSide.value
    let otherSideText = e.target.elements.otherSide.value

    const newFlashcard = {
        id: uuidv4(),
        oneSide: oneSideText,
        otherSide: otherSideText
    }

    if(oneSideText && otherSideText){
        saveFlashcard(newFlashcard)
    } 
    
    e.target.elements.oneSide.value = ""
    e.target.elements.otherSide.value = ""

// write the text on the list
    generatelistOfFlashcards()
})

// remove all flashcards
removeAll.addEventListener("click", () => {
    const question = confirm("Are you sure you want to remove all?")

    if (question) {
        flashcardsList.textContent = ""
        frontSides.textContent = ""
        backSides.textContent = ""
        localStorage.clear()
    }
})