// define Book and Bookshelf classes first

// define searchBooks function
function searchBooks() {
  const query = document.getElementById('search-btn').value.toLowerCase();
  const bookshelf = new Bookshelf(bookData);
  bookshelf.setFilterQuery(query);
  bookshelf.render();
}

// attach event listener to the search button
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => searchBooks(bookshelf));

const app = document.querySelector('#app');
const bookData = [
  { title: 'Book 1', author: 'Author 1', genre: 'Fiction', subject: 'Book 1',language: 'English'},
  { title: 'Book 2', author: 'Author 2', genre: 'Non-fiction', subject: 'Book 2', language: 'English'},
  { title: 'Book 3', author: 'Author 3', genre: 'Fiction', subject: 'Book 3', language: 'English'},
  { title: 'Book 4', author: 'Author 4', genre: 'Non-fiction', subject: 'Book 4', language: 'English'},
  // add more books as needed
];
bookshelfElem.addEventListener('sort-books', (event) => {
  bookshelf.sortBooks(event.detail.sortBy);
  renderBookshelf(bookshelf);
});
const bookshelf = new Bookshelf();
bookData.forEach((book) => {
  const newBook = new Book(book.title, book.author, book.genre, book.pageCount);
  bookshelf.addBook(newBook);
});

const bookshelfElem = bookshelf.render();
app.appendChild(bookshelfElem);
  
bookshelfElem.addEventListener('add-book', (event) => {
  const newBook = new Book(event.detail.title, event.detail.author, event.detail.genre, event.detail.pageCount);
  bookshelf.addBook(newBook);
  renderBookshelf(bookshelf);
});

bookshelfElem.addEventListener('remove-book', (event) => {
  bookshelf.removeBook(event.detail.book);
  renderBookshelf(bookshelf);
});

bookshelfElem.addEventListener('update-book', (event) => {
  bookshelf.updateBook(event.detail.book);
  renderBookshelf(bookshelf);
});

bookshelfElem.addEventListener('clear-books', (event) => {
  bookshelf.clearBooks();
  renderBookshelf(bookshelf);
});



function renderBookshelf(bookshelf) {
  const bookshelfElem = bookshelf.render();
  app.replaceChild(bookshelfElem, app.firstChild);
}

// Load in book data
function loadBookData() {
  fetch('book-data.js')
    .then(response => response.js())
    .then(data => {
      const books = data.map(bookData => new Book(bookData.title, bookData.author, bookData.genre, bookData.pageCount));
      bookshelf.clearBooks();
      books.forEach(book => bookshelf.addBook(book));
      renderBookshelf(bookshelf);
    })
    .catch(error => console.error('Error loading book data', error));
}

document.addEventListener('DOMContentLoaded', loadBookData);

  
      // create DOM elements for each book
      document.addEventListener('book-Data.js', function () {
              loadBookData('book-data.js');
          });
    
// Removes the unnecessary code that creates a single book element and appends it to the bookList element

// Loop through the bookData and add a new Book instance to the bookshelf for each book
bookData.forEach((book) => {
  const newBook = new Book(book.title, book.author, book.genre, book.pageCount, book.publisher, book.ISBN, book.coverURL);
  bookshelf.addBook(newBook);
});


// Add event listener for adding a book
bookshelfElem.addEventListener('add-book', (event) => {
  const newBook = new Book(event.detail.title, event.detail.author, event.detail.genre, event.detail.pageCount, event.detail.publisher, event.detail.ISBN, event.detail.coverURL);
  bookshelf.addBook(newBook);
  renderBookshelf(bookshelf);
});

// Add event listener for removing a book
bookshelfElem.addEventListener('remove-book', (event) => {
  bookshelf.removeBook(event.detail.book);
  renderBookshelf(bookshelf);
});

// Add event listener for updating a book


bookshelfElem.addEventListener('update-book', (event) => {
  bookshelf.updateBook(event.detail.book);
  renderBookshelf(bookshelf);
});

// Add event listener for clearing all books
bookshelfElem.addEventListener('clear-books', () => {
  bookshelf.clearBooks();
  renderBookshelf(bookshelf);
});

// Add event listener for sorting books 
bookshelfElem.addEventListener('sort-books', (event) => {
  bookshelf.sortBooks(event.detail.sortBy);
  renderBookshelf(bookshelf);
});

      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
  
      const title = document.createElement('h2');
      title.textContent = Book.title;
      bookDiv.appendChild(title);
  
      const author = document.createElement('p');
      author.textContent = `by ${Book.author}`;
      bookDiv.appendChild(author);
  
      const topics = document.createElement('p');
      topics.textContent = `Topics: ${Book.topics.join(', ')}`;
      bookDiv.appendChild(topics);
  
      const favoriteBtn = document.createElement('button');
      favoriteBtn.textContent = Book.isFavorite ? 'Unfavorite' : 'Favorite';
      favoriteBtn.addEventListener('click', () => {
        toggleFavorite(Book);
        renderBookshelf(books); // re-render bookshelf after favorite is toggled
      });
      bookDiv.appendChild(favoriteBtn);
  
      const favoriteIndicator = document.createElement('span');
      favoriteIndicator.textContent = '❤️';
      favoriteIndicator.classList.add('favorite-indicator');
      if (Book.isFavorite) {
        favoriteIndicator.classList.add('favorite');
      }
      bookDiv.appendChild(favoriteIndicator);
  


  let books = [ ];
  bookshelf.getBooks().then(books => {
    books.forEach(_book => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      
    }
    );
  })




