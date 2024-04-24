generatelistOfFlashcards()

// save input text to local storage
const addFlashcard = document.querySelector(".add-new-flashcard")
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
const writeText = (id) => {
    document.querySelector(".study-flashcard").addEventListener("click", () => {
        studyAllFlashcards(id)
    })
}
writeText(0)
// next flashcard


// const allFlashcards = getSavedFlashcards()
// let nextClick = 0

// nextClick++
//     if(nextClick <= (allFlashcards.length -1)){
//         studyAllFlashcards(nextClick)
//     } else if (nextClick > (allFlashcards.length -1)){
//         nextClick = 0
//         studyAllFlashcards(0)
//     }
   
// })



// const nextCard = (id) => {
//     let nextClick = id
    
//     const allFlashcards = getSavedFlashcards()
//     document.querySelector(".next-flashcard").addEventListener("click", () =>{
        
//         nextClick = id++
//         console.log(id);
        
//         if(nextClick <= (allFlashcards.length )){
//             studyAllFlashcards(nextClick)
//             console.log(id);
//         } else if (nextClick > (allFlashcards.length )){
//             nextClick = 0
//             studyAllFlashcards(0)
//         }
//     })
// }

// previous flashcard
// let previousClick = 0
// document.querySelector(".previous-flashcard").addEventListener("click", () =>{
// previousClick--
//    studyAllFlashcards(previousClick)
// })