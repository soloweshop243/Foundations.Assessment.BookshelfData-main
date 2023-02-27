class Bookshelf {
  constructor() {
    this.books = [];
    this.favorites = []; // Initialize favorites as an empty array
    this.sortBy = 'title'; // default sort by title
    this.filterQuery = ''; // default filter query is empty string
  }


  addBook(book) {
    this.books.push(book)
  }

  removeBook(book) {
    // find index of books to remove
    let index = this.books.indexOf(book);
    if (index !== -1) {
      // remove it from the list
      this.books.splice(index, 1);
    }
  }

  render() {
    let allBookRenders = this.books.map(book => book.render())

    // grabs the section from html
    const book = document.querySelector('.bookshelf-class');

    // loop through allBookRenders and append them to the section
    for (let bookSection of allBookRenders) {
      bookSection.append(form) 
    }
    
    return allBookRenders
  }
}



// 
