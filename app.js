const add = document.querySelector(".add-book-card");
const bookLibrary = document.querySelector(".book-stack");

let library = [];
let i = 0;

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBook(){
    a = prompt("Title").toUpperCase();
    b = prompt("Author").toUpperCase();
    c = prompt("Pages").toUpperCase();
    d = prompt("Read").toUpperCase();
    library.push(new book(a, b, c, d));
};

function showLibrary(){
    for(i = 0; i < library.length; i++){
        console.log(library[i]);
    }
};

add.addEventListener('click', () => {
    addBook();
    const book = document.createElement('div');
    book.classList.add('book');
    bookLibrary.appendChild(book);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    book.appendChild(titleContainer);

    const title = document.createElement('h3');
    title.innerHTML = library[i].title;
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
    pages.innerHTML = library[i].pages;
    pagesContainer.appendChild(pages);

    const readContainer = document.createElement('div');
    readContainer.classList.add('read-container');
    book.appendChild(readContainer);

    const read = document.createElement('h3');
    read.innerHTML = library[i].read;
    readContainer.appendChild(read);

    const deleteCont = document.createElement('div');
    deleteCont.classList.add('delete');
    book.appendChild(deleteCont);

    const deleteText = document.createElement('h3');
    deleteText.innerHTML = "DELETE";
    deleteCont.appendChild(deleteText);

    deleteCont.addEventListener('click', () => {
        book.classList.add('disable');
    });

    i++;
})