const add = document.querySelector(".add-button");
const clear = document.querySelector(".delete-button");
const bookLibrary = document.querySelector(".book-stack");
const bookLibrary2 = document.querySelector(".book-stack-2");

// MODAL SELECTORS
const modal = document.querySelector(".modal-container");
const form = document.getElementById("form");
const bookName = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookRead = document.querySelector("#book-read");
const addBtn = document.querySelector("#add-button");

// GLOBAL VARIABLES
let library = [];
let i = 0;
let isRead = false;

// FUNCTIONS
function reset(){
    i = 0;
    library = [];
    bookName.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    isRead = false;
}

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBook(a, b, c, d){
    library.push(new book(a, b, c, d));
};

function newBook(stack){
    const book = document.createElement('div');
    book.classList.add('book');
    stack.appendChild(book);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    book.appendChild(titleContainer);

    const title = document.createElement('h3');
    title.innerHTML = `"${library[i].title}"`;
    titleContainer.appendChild(title);

    const autorContainer = document.createElement('div');
    autorContainer.classList.add('autor-container');
    book.appendChild(autorContainer);

    const author = document.createElement('h3');
    author.innerHTML = library[i].author;
    autorContainer.appendChild(author);

    const pagesContainer = document.createElement('div');
    pagesContainer.classList.add('pages-container');
    book.appendChild(pagesContainer);

    const pages = document.createElement('h3');
    pages.innerHTML = `${library[i].pages} pages`;
    pagesContainer.appendChild(pages);

    const readContainer = document.createElement('div');
    readContainer.classList.add('read-container');
    book.appendChild(readContainer);

    const read = document.createElement('h3');
    if(isRead){
        read.innerHTML = "Read";
        readContainer.classList.add('read');
    }else if(!isRead){
        read.innerHTML = "Not read";
        readContainer.classList.add('not-read');
    }
    readContainer.appendChild(read);

    readContainer.addEventListener('click', () => {
        isRead = !isRead;
        readContainer.classList.toggle('read');
        readContainer.classList.toggle('not-read');
        if(isRead){
            read.innerHTML = "Read";
        }else if(!isRead){
            read.innerHTML = "Not read";
        }
    })

    const deleteCont = document.createElement('div');
    deleteCont.classList.add('delete');
    book.appendChild(deleteCont);

    const deleteText = document.createElement('h3');
    deleteText.innerHTML = "Remove";
    deleteCont.appendChild(deleteText);

    deleteCont.addEventListener('click', () => {
        book.classList.add('disable');
        library.pop(i);
        i--;
    });

    i++;
}

add.addEventListener('click', () => {
    modal.style.display = "block";
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(i < 4){
        a = bookName.value;
        b = bookAuthor.value;
        c = bookPages.value;
        d = bookRead;
        addBook(a, b, c, d);
        newBook(bookLibrary);
    }else if(i >= 4 && i<9){
        a = bookName.value.toUpperCase();
        b = bookAuthor.value.toUpperCase();
        c = bookPages.value.toUpperCase();
        d = bookRead.value.toUpperCase();
        addBook(a, b, c, d);
        newBook(bookLibrary2);
    }else{
        alert('cant add more books');
    }
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};

bookRead.addEventListener('click', () => {
    isRead = !isRead;
});

clear.addEventListener('click', () => {
    bookLibrary.innerHTML = "";
    bookLibrary2.innerHTML = "";
    reset();
});