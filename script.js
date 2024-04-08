
// save input text to local storage
const addFlashcard = document.querySelector(".add-new-flashcard")
addFlashcard.addEventListener("submit", (e) => {
    e.preventDefault()

    let oneSideText = e.target.elements.oneSide.value
    let otherSideText =e.target.elements.otherSide.value

    const newFlashcard = {
        id: uuidv4(),
        oneSide: oneSideText,
        otherSide: otherSideText
    }
    if(oneSideText && otherSideText){
        saveFlashcard(newFlashcard)
    } 
    
    oneSideText = ""
    otherSideText = ""

 
// write the text on the list
generateHTMLStructure()
})


// remove all flashcards
document.querySelector(".remove-all").addEventListener("click", () => {
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


