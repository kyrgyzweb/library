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

addBookToLibrary("Birinchi mugalim", "Chyngyz Aitmatov", 299, true);

function displayBooks(bookToDisplay = myLibrary) {
    
}