class Bookshelf {
  constructor() {
    this.books = [];
    this.favorites = new Set();
    
    this.filterQuery = ''; // default filter query is empty string
  }

  addBook(book) {
    this.books.push(book);
  }
render() {
  removeBook(book) ;
    let index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  updateBook(book) {
    this.books.push(book);
    // Update book
  }

  clearBooks() {
    this.books = [];
  }

  toggleFavorite(book) {
    if (this.favorites.has(book)) {
      this.favorites.delete(book);
      book.favorite = false;
    } else {
      this.favorites.add(book);
      book.favorite = true;
    }
  }
  

  setFilterQuery(query) {
    this.filterQuery = query.toLowerCase(); // case-insensitive search
  }

  getFilteredBooks() {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.filterQuery),
      book.author.toLowerCase().includes(this.filterQuery),
      book.subject.toLowerCase().includes(this.filterQuery),
      book.language.toLowerCase().includes(this.filterQuery)
    )
  }
}
  
  
