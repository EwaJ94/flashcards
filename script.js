const oneSide = document.querySelector(".one-side-text")
const otherSide = document.querySelector(".other-side-text")
const addFlashcard = document.querySelector(".add-new-flashcard")
const learnFleshcards = document.querySelector(".learn-flashcard")
const removeAllFlashcards = document.querySelector(".remove-all")
const previousFlashcard = document.querySelector(".previous-flashcard")
const nextFlashcard = document.querySelector(".next-flashcard")
const turnFlashcard = document.querySelector(".turn-flashcard")
const deleteFlashcard = document.querySelector(".delete-flashcard")


if (localStorage.getItem("flashcards") === null){
    var flashcardsArray = []
} else {
    flashcardsArray = JSON.parse(localStorage.getItem("flashcards"))
}

// save input text to local storage
addFlashcard.addEventListener("submit", (e) => {
    e.preventDefault()

    flashcardsArray.push({
        oneSide: e.target.elements.oneSide.value,
        otherSide: e.target.elements.otherSide.value
    })
    
    e.target.elements.oneSide.value = ""
    e.target.elements.otherSide.value = ""

    const flashcardsArrayJSON = JSON.stringify(flashcardsArray)
    localStorage.setItem("flashcards", flashcardsArrayJSON)
   
    console.log(flashcardsArray);
  
    
 
    myFlashcard = localStorage.getItem("flashcards")
    myFlashcardJSON = JSON.parse(myFlashcard)


})
const submitForm = document.querySelector(".submit-flashcard").addEventListener("click", () => {
    let myStorage = localStorage.getItem("flashcards")
    let myStorageJSON = JSON.parse(myStorage)

    myStorageJSON.forEach = (oneFlashcard) => {
        const newOneSideText = document.createElement("p")
        // const newOtherSideText = document.createElement("p")
        newOneSideText.textContent = oneFlashcard.oneSide
        // newOtherSideText.textContent = flashcardsArray[1]
        document.querySelector(".one-side").appendChild(newOneSideText)
        // document.querySelector(".other-side").appendChild(newOtherSideText)
    }
})
