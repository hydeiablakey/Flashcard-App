class Flashcard {
    constructor (id, question, answer) {
        this.id = id;  
        this.question =question; 
        this.answer = answer; 
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
        const answer = document.getElementById('answer');  

        let idVal = Math.floor(Math.random() * 100);

        

        form.addEventListener('submit', function(event) {
        event.preventDefault();
            let showNewCard = document.getElementById('cardResults'); 
            showNewCard.style.visibility = 'visible';

            const key = question.value; 
            const value = answer.value;
          

            console.log(key); 
            console.log(value); 
    
            // if ( key && value ) {
            //     idVal++
            //     localStorage.setItem("question", key);
            //     localStorage.setItem("Answer", value);
            //     localStorage.setItem("id", idVal)
    
            // }



         
            idVal++; //Updating the id of each card submitted
            let flashWindow = document.getElementById('flashcardWindow');
            let div = document.createElement("div"); 
            div.setAttribute('class', 'col s6');
            div.setAttribute('id', idVal);
            div.innerHTML = `<div> 
             <p> Question: ${key}</p>  
            <p>Answer: ${value}</p>
            </div>`
            showNewCard.appendChild(div);


            
        })

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
// newCard.setId(Math.floor(Math.random() * 100)); 
// // console.log(newCard.getId());
newCard.addCard(); 
newCard.removeCard(); 
newCard.submitCard();