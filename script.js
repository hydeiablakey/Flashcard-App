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

    // removeIndivdualCard() {
    //     let deleteButton = document.getElementById('delBtn');
    //     let newCardSection = document.getElementById('cardResults');

    //     deleteButton.addEventListener('click', function() {
    //         let deleteIndivCard = document.getElementById('newCard');
    //         newCardSection.removeChild(deleteIndivCard); 
    //     })


    // }

    // showAnswer() {
    //     let revealBtn = document.getElementById('showBtn'); 

    // }
    //event listener for saving the card to the screen

    submitCard() {

        let form = document.getElementById('flashcardForm'); 
        const question = document.getElementById('question');
        const answer = document.getElementById('answer');  

        let idVal = Math.floor(Math.random() * 100);

        

        form.addEventListener('submit', function(event) {
        event.preventDefault();
            let showNewCard = document.getElementById('cardResults'); 
            showNewCard.style.visibility = 'visible';

            const key = question.value; 
            const value = answer.value;
          

            console.log(`Question: ${key}`); 
            console.log(`Answer: ${value}`); 

            if (key && value) {  
            let flashID = idVal++; //Updating the id of each card submitted
      

            let div = document.createElement("div"); 
            div.setAttribute('class', 'col s6');
            div.setAttribute('id', flashID);
            div.innerHTML = 
            `   <div id="newCard" class="newCard row"> 
                <p class="keyTitle"> ${key}</p> 
                <p class="keyAnswer"> ${value}</p>

                <a id="showBtn" class="col s4 waves-effect waves-light btn pink lighten-4">Reveal</a>
                <a id="delBtn" class="col s4 waves-effect waves-light btn pink lighten-4">Delete</a>
                </div> `

            showNewCard.appendChild(div);

            } else {
                alert('You need either a question or an answer to create a flashcard!')
            }

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
newCard.addCard(); 
newCard.removeCard(); 
newCard.submitCard();
