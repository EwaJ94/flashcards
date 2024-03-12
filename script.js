const addCard = document.getElementsByClassName(".add-card")
const studyCards = document.getElementsByClassName(".study-cards")
const removeAllCards = document.getElementsByClassName(".remove-all")
const previousCard = document.getElementsByClassName(".previous-card")
const nextCard = document.getElementsByClassName(".next-card")
const turnCard = document.getElementsByClassName(".turn-card")
const deleteCard = document.getElementsByClassName(".delete-card")

addCard.addEventListener("click", () => {
    const newCard = document.createElement("input")
    newCard.type = "text"
    document.querySelector(".one-card").appendChild(newCard)

})
