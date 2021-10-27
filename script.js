class Flashcard {
    constructor (question, answer, id) {
        this.question = question; 
        this.answer = answer; 
        this.id = id;  
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

    submitCard() {
        let form = document.getElementById('flashcardForm'); 
        let submitButton = document.getElementById('submitBtn'); 
        let newCardSection = document.getElementById('cardResults');
        const question = document.getElementById('question');
        // const answer = document.getElementById('answer').value; 

        // this.question = question;
        // this.answer = answer; 

  

    
        

        form.addEventListener('submit', function(event) {
        event.preventDefault();
            console.log("submitted"); 
            let showNewCard = document.getElementById('cardResults'); 
            showNewCard.style.visibility = 'visible';

            let div = document.createElement("div"); 
            div.setAttribute('class', 'col s12');
             div.innerHTML = `<p>Question: ${question} </p> 
            <p>Answer: ${answer}</p>`
            showNewCard.appendChild(div);

            // if (sub)
            // let clonedCard = flashCard.cloneNode(true); 
            // newCardSection.appendChild(clonedCard);
            
        })

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
newCard.submitCard();