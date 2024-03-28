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
        id: uuidv4(),
        oneSide: e.target.elements.oneSide.value,
        otherSide: e.target.elements.otherSide.value
    })
    
    e.target.elements.oneSide.value = ""
    e.target.elements.otherSide.value = ""

    const flashcardsArrayJSON = JSON.stringify(flashcardsArray)
    localStorage.setItem("flashcards", flashcardsArrayJSON)
 
    // myFlashcard = localStorage.getItem("flashcards")
    // myFlashcardJSON = JSON.parse(myFlashcard)


// write the text on the list
    generateHTMLStructure()
    
})

// delete one flashcard


// document.querySelector(".delete-flashcard").addEventListener("click", (oneFlashcard, id) => {
//     // const listOfFlashcards = localStorage.getItem("flashcards")
//     // const listOfFlashcardsJSON = JSON.parse(listOfFlashcards)

//     const index = oneFlashcard.findIndex( (checkingCard) => {
//         return checkingCard.id === id
        
//     })

//     if(index > -1){
//         ourNames.splice(index,1)}

//     // const newListOfFlashcards = () => {
//         document.querySelector(".list-of-flashcards").textContent = ""

//         const newData = getSavedNames()
//         newData.forEach( (oneText) => {
//             const newList = generateHTMLStructure(oneText)
//             document.querySelector(".list-of-flashcards").appendChild(newList)
//         })

        
//     // }
// })

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
learnFleshcards.addEventListener(("click"), () => {
    const listOfFlashcards = localStorage.getItem("flashcards")
    const listOfFlashcardsJSON = JSON.parse(listOfFlashcards)



    listOfFlashcardsJSON.forEach ((oneFlashcard) => {
    const newOneSideText = document.createElement("p")
    const newOtherSideText = document.createElement("p")

    newOneSideText.textContent = oneFlashcard["oneSide"]
    newOtherSideText.textContent = oneFlashcard["otherSide"]

    document.querySelector(".one-side").appendChild(newOneSideText)
    document.querySelector(".other-side").appendChild(newOtherSideText)
    
    })
})

    

