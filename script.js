
// save input text to local storage
const addFlashcard = document.querySelector(".add-new-flashcard")
addFlashcard.addEventListener("submit", (e) => {
    e.preventDefault()

    const newFlashcard = {
        id: uuidv4(),
        oneSide: e.target.elements.oneSide.value,
        otherSide: e.target.elements.otherSide.value
    }
    
    saveFlashcard(newFlashcard)

    e.target.elements.oneSide.value = ""
    e.target.elements.otherSide.value = ""


 
// write the text on the list
generateHTMLStructure()
})
// delete one flashcard


document.querySelector(".delete-flashcard").addEventListener("click", (oneFlashcard, id) => {

    const listOfFlashcards = JSON.parse(localStorage.getItem("flashcards"))

    const indexToDelete = oneFlashcard.findIndex( (oneCard) => {
        return oneCard.id === id
        
    })

    listOfFlashcards.splice(indexToDelete, 1)

    localStorage.setItem("flashcards", JSON.stringify(listOfFlashcards))
    generateHTMLStructure()
})


// remove all flashcards
removeAllFlashcards.addEventListener("click", () => {
    const question = confirm("Are you sure you want to remove all?")

    if (question) {
        document.querySelector(".list-of-flashcards").textContent = ""
        document.querySelector(".one-side").textContent = ""
        document.querySelector(".other-side").textContent = ""
        localStorage.clear()
    }

    
})


// write the text on the card
// learnFleshcards.addEventListener(("click"), () => {
//     const listOfFlashcards = JSON.parse(localStorage.getItem("flashcards"))
    
//     listOfFlashcards.forEach ((oneFlashcard) => {
//     const newOneSideText = document.createElement("p")
//     const newOtherSideText = document.createElement("p")

//     newOneSideText.textContent = oneFlashcard["oneSide"]
//     newOtherSideText.textContent = oneFlashcard["otherSide"]

//     document.querySelector(".one-side").appendChild(newOneSideText)
//     document.querySelector(".other-side").appendChild(newOtherSideText)
    
//     })
// })


