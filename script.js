// Create Book prototype
function Book (title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
};

const myLibrary = [];

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

addBookToLibrary("Prophet Muhammad (the infinite light)", "Fethullah Gülen", 270, true);
addBookToLibrary("The Day Lasts More Than a Hundred Years", "Chyngyz Aitmatov", 299, true);
addBookToLibrary("Jamilia", "Chyngyz Aitmatov", 299, true);
addBookToLibrary("Fethullah Gulen: A Life of Hizmet", "Jon Pahl", 450, false)

function displayBooks(bookToDisplay = myLibrary) {
    const container = document.querySelector(".library-container");
    container.innerHTML = "";

    bookToDisplay.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <div class="book-cover">
                <h3>${book.title}</h3>
                <span class="cover-author">${book.author}</span>
            </div>
            <p class="book-meta">${book.title} • ${book.pages} pages</p>
            <p class="book-status">${book.isRead ? "Read" : "Not Read Yet"}</p>
            <div class="card-actions">
                <button class="toggle-btn">Toggle Status</button>
                <button class="remove-btn">Remove</button>
            </div>
        `;

        const toggleBtn = bookCard.querySelector(".toggle-btn");
        const removeBtn = bookCard.querySelector(".remove-btn");

        toggleBtn.addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        })
        
        removeBtn.addEventListener("click", () => {
            const bookIndex = myLibrary.findIndex(
                (libraryBook) => libraryBook.id === book.id
            );
            if (bookIndex !== -1) {
                myLibrary.splice(bookIndex, 1);
                displayBooks();
            }
        });

        container.appendChild(bookCard);
    })
}

displayBooks()

// Getting data from Form
const bookForm = document.querySelector("#book-form");
bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookForm);
    const title = formData.get('title').trim();
    const author = formData.get('author').trim();
    const pages = Number(formData.get('pages'));
    const isRead = formData.get('isRead') === 'on';

    const bookExist = myLibrary.some(book => 
        book.title.toLowerCase() === title.toLowerCase() && book.author.toLowerCase() === author.toLowerCase()
);
if(bookExist) {
    alert('This book already exists!');

} else {
    addBookToLibrary(title, author, pages, isRead);
    displayBooks();
    bookForm.reset();
}
})