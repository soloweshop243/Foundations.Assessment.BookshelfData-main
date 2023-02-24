class Bookshelf{
  constructor() {
    this.books = [];
    this.favorites = new Set();
    this.sortBy = 'title'; // default sort by title
    this.sortDirection = 'asc'; // default sort direction is ascending
    this.filterQuery = ''; // default filter query is empty string
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
render() {
  let allBookRenders = this.books.map(book => book.render())
  // grabs the section form html
  let shelfSection = document.querySelector('.bookshelfclass-section')
  //loop through allBookRenders and append them to the section
  for (let book of allBookRenders) {
    shelfSection.appendChild(book.render())
  return allBookRenders
}
addComment(book, comment);{
  const index = this.books.indexOf(book);
  if (index !== -1) {
    book.comments.push(comment);
    this.updateBook(book);
  }
}

  updateBook(book); {
    // Find index of book to update
    const index = this.books.findIndex(b => b.title === book.title);
    if (index !== -1) {
      // Update book at index
      this.books[index] = book;
    }
  }

  clearBooks(); {
    this.books = [];
  }

  toggleFavorite(book); {
    if (this.favorites.has(book)) {
      this.favorites.delete(book);
      book.favorite = false;
    } else {
      this.favorites.add(book);
      book.favorite = true;
    }
  }

  setSortBy(sortBy); {
    if (this.sortBy === sortBy) {
      // toggle sort direction if same sortBy field is clicked
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = sortBy;
      this.sortDirection = 'asc';
    }
  }

  setFilterQuery(query); {
    this.filterQuery = query.toLowerCase(); // case-insensitive search
  }

  getFilteredBooks(); {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.filterQuery) ||
      book.author.toLowerCase().includes(this.filterQuery) ||
      book.subject.toLowerCase().includes(this.filterQuery) ||
      book.language.toLowerCase().includes(this.filterQuery)
    );
  }

  
}}
