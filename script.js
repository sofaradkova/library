let myReadLibrary = [
    {title: "Lord of the Flies", author: "William Golding", pages: "224", status: true},
    {title: "Animal Farm", author: "George Orwell", pages: "128", status: true}
];
let myWantLibrary = [
    {title: "A Clockwork Orange", author: "Anthony Burgess", pages: "192", status: false}
];

const readField = document.querySelector('#read-container > .cards-container');
const wantField = document.querySelector('#want-container > .cards-container');
const form = document.querySelector('form');
const inputField = document.querySelector('#input-field');

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = title.replace(/[^A-Z0-9]/ig, "");
    this.lineTwo = function () {
        return author + ' | ' + pages;
    }
}

function displayBooks() {
    myReadLibrary.forEach((element) => createCard(element));
    myWantLibrary.forEach((element) => createCard(element));
}

function createCard(book) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.setAttribute("id", book.id);
        
    const newTitle = document.createElement('div');
    newTitle.classList.add('card-title');
    newTitle.textContent = book.title;

    const newAuthor = document.createElement('div');
    newAuthor.classList.add('card-author');
    newAuthor.textContent = book.author;

    /*
    const newRemove = document.createElement('button');
    newRemove.classList.add('remove');
    newRemove.textContent = 'X';
    */

    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    /*
    newCard.appendChild(newRemove);
    */
    if (book.status === true) {
        readField.appendChild(newCard);
    }
    else if (!book.status === true) {
        wantField.appendChild(newCard);
    }
}

window.addEventListener("load", displayBooks);

const submitTitle = document.querySelector('#title');
const submitAuthor = document.querySelector('#author');
const submitPages = document.querySelector('#pages');
const submitStatus = document.querySelector('#status');

function addBookToLibrary(event) {
    event.preventDefault();
    if (submitTitle.value !== '' && submitAuthor.value !== '' && submitPages.value !== '') {
        const newBook = new Book(submitTitle.value, submitAuthor.value, submitPages.value, submitStatus.checked);
        if (submitStatus.checked === true) {
            myReadLibrary.push(newBook);
        }
        else {
            myWantLibrary.push(newBook);
        }
        createCard(newBook);
        form.reset();
    }
    else {
        const errorMsg = document.createElement('div');
        errorMsg.textContent = 'Please provide all the info';
        inputField.appendChild(errorMsg);
    }
}

submitBtn = document.querySelector('#adding');
submitBtn.addEventListener('click', addBookToLibrary, false);

/*function removeBookFromLibrary() {
    const removedCard = removeBtn.parentElement;
    removedCard.parentElement.removeChild(removedCard);
}*/

/*
const removeBtns = document.querySelectorAll('.remove');

removeBtns.forEach((button) => {
    button.addEventListener('click', function() {
        console.log('bfiuebf');
        const removedCard = button.parentElement;
        console.log(removedCard.id);
        for(let i = 0; i<myReadLibrary.length; i++){
            if(myReadLibrary[i].id == card.id){
                myReadLibrary.splice(i,1);
                console.log(myReadLibrary[i]);
            }
        };
        for(let i = 0; i<myWantLibrary.length; i++){
            if(myWantLibrary[i].id == card.id){
                myWantLibrary.splice(i,1);
            }
        };
        displayBooks();
    });
});
*/
