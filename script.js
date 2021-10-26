class Flashcard {
    constructor (title, description, card) {
        this.title = title; 
        this.description = description; 
        this.card = card;  
    }

    
    // event listener button for adding/creating a new flashcard
    addCard() {
        let addButton = document.getElementById('addBtn');
        addButton.addEventListener('click', function() {
            let showCard = document.getElementById('card');
            // console.log('i am being pressed');
            showCard.style.visibility = 'visible';

        } )

    }

    //event listener button for removing/deleting the card 
    removeCard(){
        let removeButton = document.getElementById('exitBtn');
        removeButton.addEventListener('click', function () {
            let removeCard = document.getElementById('card'); 
            removeCard.style.visibility = 'hidden';
           
        })

    }

    //event listener for saving the card to the screen

    saveCard() {

    }


    // //create a popup window after a button click
    // modal() {

    // }

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
newCard.addCard(); 
newCard.removeCard(); 