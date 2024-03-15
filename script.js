const oneSide = document.querySelector(".one-side-text")
const otherSide = document.querySelector(".other-side-text")
const addFlashcard = document.querySelector(".submit-flashcard")
const learnFleshcards = document.querySelector(".learn-flashcard")
const removeAllFlashcards = document.querySelector(".remove-all")
const previousFlashcard = document.querySelector(".previous-flashcard")
const nextFlashcard = document.querySelector(".next-flashcard")
const turnFlashcard = document.querySelector(".turn-flashcard")
const deleteFlashcard = document.querySelector(".delete-flashcard")

let oneCard = []

oneSide.addEventListener("change", (e) => {
    oneCard.push(e.target.value)
    
})

otherSide.addEventListener("change", (e) =>{
    oneCard.push(e.target.value)
})

addFlashcard.addEventListener("click", () => {
    const newOneSideText = document.createElement("p")
    const newOtherSideText = document.createElement("p")
    newOneSideText.textContent = oneCard[0]
    newOtherSideText.textContent = oneCard[1]
    document.querySelector(".one-side").appendChild(newOneSideText)
    document.querySelector(".other-side").appendChild(newOtherSideText)

    
})
