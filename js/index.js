
class Bookshelf {}
  constructor (); {}
  {  this.bookshelf = new Bookshelf  (); }
    this.books = [];
  

  addBook(book); {
    this.books.push(book);
  }

  removeBook(book); {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  function addBook() {
  // Get the values from the form inputs
  const bookshelfDiv = document.getElementById('bookshelf');
  const addBookForm = document.getElementById('add-book-form');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const sortBy = document.getElementById('sort-by');
  const sortDirectionBtn = document.getElementById('sort-direction-btn');
  const favoriteList = document.querySelector('.favorite-list');
  const favoritesCount = document.querySelector('.favorites-count');
}


  toggleFavorite(book); {
    book.toggleFavorite();
  }

  addComment(book, comment); {
    book.addComment(comment);
  }


  // Create a new Book instance with the values
  const bookshelf = new Bookshelf();

  // Add books to the bookshelf
  const book = new book(title, author, subject, language);
bookshelf.addBook(book);

  
  
  // Render the bookshelf
  renderBookshelf(bookshelf, bookshelfDiv);
  
  function updateBook() 
    //  Implement book updating


  // Set up event listeners for the add book form
addBookForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  // Get the values from the form inputs
  const title = document.querySelector('#title-input').value;
  const author = document.querySelector('#author-input').value;
  const subject = document.querySelector('#subject-input').value;
  const language = document.querySelector('#language-input').value;

  // Create a new Book instance with the values
  const newBook = new Book(title, author, subject, language);

  // Add the new book to the bookshelf
  bookshelf.addBook(newBook);

  // Re-render the bookshelf
  renderBookshelf(bookshelf, bookshelfDiv);

  // Reset the form inputs
  addBookForm.reset();
});

// Set up event listener for search button
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim().toLowerCase(); // ignore leading/trailing white space and make case-insensitive
  bookshelf.setFilterQuery(query);
  renderBookshelf(bookshelf, bookshelfDiv);
});

// Set up event listener for sort by select menu
sortBy.addEventListener('change', () => {
  const sortByValue = sortBy.value;
  bookshelf.setSortBy(sortByValue);
  renderBookshelf(bookshelf, bookshelfDiv);
});

// Set up event listener for sort direction button
sortDirectionBtn.addEventListener('click', () => {
  bookshelf.toggleSortDirection();
  renderBookshelf(bookshelf, bookshelfDiv);
});

// Render the favorites list and count
renderFavorites(bookshelf.favorites, favoriteList);
renderFavoritesCount(bookshelf.favorites.size, favoritesCount);

// Set up event listener for adding/removing favorites
bookshelfDiv.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('favorite-btn')) {
    const bookElem = target.closest('.book-card');
    const book = bookshelf.getBookByTitle(bookElem.querySelector('.book-title').textContent);

    bookshelf.toggleFavorite(book);

    renderFavorites(bookshelf.favorites, favoriteList);
    renderFavoritesCount(bookshelf.favorites.size, favoritesCount);
  }
});
console.log('hello world ')


}




