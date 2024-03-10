const myLibrary = [];


class Book {
    constructor(name,author,pages,read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
var aw;
const bookshelf = document.querySelector(".bookshelf")
console.log(bookshelf)
const addBookToLibrary = () => {
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    if(!name || !author || pages==0) {
        document.querySelector('#modal-container').style.visibility = 'visible' ;
        return;
    }
    const newBook = 
        new Book(
            name,author,pages,read
        )
    const book = document.createElement('div');
    book.setAttribute('class','book')
    book.innerHTML=`
        <div class="book-close" style="visibility:hidden";>
            <p>X</p>
        </div>
        <h2>${newBook.name}</h2>
        <p>${newBook.author}</p>
        <p>${newBook.pages} pages</p>
        <p>${newBook.read?'read':'not read'}</p>
    `
    bookshelf.appendChild(book)
    
    book.addEventListener('mouseover', (event)=>{
        book.querySelector('div').style="visibility: visible";
    })

    book.addEventListener('mouseout', (event)=> {
        book.querySelector('div').style="visibility: hidden";
    })

    book.querySelector('div').addEventListener('click', (event)=>{
        bookshelf.removeChild(book)
    })

    document.getElementById('name').value='';
    document.getElementById('author').value ='';
    document.getElementById('pages').value='';
    document.getElementById('read').checked=false;
}

document.querySelector('#close-modal').addEventListener('click',(event)=>{
    document.querySelector('#modal-container').style.visibility = 'hidden';
})


