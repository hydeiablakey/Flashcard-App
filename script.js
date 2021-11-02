
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
        let question = document.getElementById('question');
        let answer = document.getElementById('answer');  
        let delButton = document.getElementById('delBtn'); 

        form.addEventListener('submit', function(event) {
        event.preventDefault();
            let showNewCard = document.getElementById('cardResults'); 
            showNewCard.style.visibility = 'visible';

            let idVal = Math.floor(Math.random() * 100);
            let key = question.value; 
            const value = answer.value;
          
            if (key && value) {  

            let div = document.createElement("div"); 
            div.setAttribute('class', 'col s6');
            div.setAttribute('id', idVal);
            div.innerHTML = 
            `   <div class="newCard row collapsible">
                <p class="keyQuestion collapsible-header"> ${key}</p>
                <p class="keyAnswer collapsible-body"> ${value}</p>
                </div> `


            showNewCard.appendChild(div);

            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.collapsible');
                var instances = M.Collapsible.init(elems, options);
              });
        
          //only toggles first element..  
            // let card = document.querySelectorAll(".newCard");

            // for (let i=0; i < card.length; i++) {
            //   card[i].addEventListener('click', textToggle)
            // }
            
            
            // function textToggle() { 
            // let answerEl = document.querySelector('.keyAnswer');
            //   if (answerEl.style.display === "block") {
            //     answerEl.style.display = "none";
            //   } else {
            //      answerEl.style.display = "block";
            //   }
            // }



            delButton.addEventListener('click', function(e) {
                e.preventDefault(); 

                while (showNewCard.firstChild) {
                    showNewCard.removeChild(showNewCard.firstChild)
                }
              
            })

            } else {
                alert('You need either a question or an answer to create a flashcard!')
            }

        })

    }


    // addTitle() {
    //     let personPrompt = prompt("Enter your name to personalize your flashcard title or leave blank for generic name.")
    //     let newTitle = document.getElementById("flashcardTitle");
    //     if (personPrompt === "") {
    //         newTitle.innerHTML = `Flashcards`;
    //     } else {
    //         newTitle.innerHTML = `${personPrompt}'s Flashcards`

    //     }
    // }
}

let newCard = new Flashcard(); 
// newCard.addTitle(); 
newCard.addCard(); 
newCard.removeCard(); 
newCard.submitCard();

