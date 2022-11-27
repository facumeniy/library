let library = [];

function book(title, author, pages, readed){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
};

function addBook(){
    a = prompt("Title");
    b = prompt("Author");
    c = prompt("Pages");
    d = prompt("Readed");
    library.push(new book(a, b, c, d));
};

function showLibrary(){
    for(i = 0; i < library.length; i++){
        console.log(library[i]);
    }
};