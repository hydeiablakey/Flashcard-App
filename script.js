class Flashcard {
    constructor (title, description, card) {
        this.title = title; 
        this.description = description; 
        this.card = card;  
    }

    
    // event listener button for adding a new flashcard
    addCard() {

    }
    //create a popup window after a button click
    modal() {

    }

    addTitle() {
        let personPrompt = prompt("Enter your name to personalize your flashcards or leave blank for generic name.")
        let newTitle = document.getElementById("flashcardTitle");
        if (personPrompt === "") {
            newTitle.innerHTML = `Flashcards`;
        } else {
            newTitle.innerHTML = `${personPrompt}'s Flashcards`

        }
    }
}

let newCard = new Flashcard(); 
// newCard.addTitle(); 