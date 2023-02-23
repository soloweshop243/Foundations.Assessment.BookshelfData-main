// Defines Book and Bookshelf classes 
class Book {
  constructor(title, author, genre, pageCount) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.render = false;
    this.favorite = false;
    this.comments = []
  }
}

class Bookshelf {
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
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }

  updateBook() {
    //  Implement book updating
  }

  clearBooks() {
    this.books = [];
  }

  getBooks() {
    return this.books;
  }

  setSortBy(sortBy) {
    this.sortBy = sortBy;
  }

  setSortDirection(sortDirection) {
    this.sortDirection = sortDirection;
  }

  setFilterQuery(filterQuery) {
    this.filterQuery = filterQuery;
  }

  sortBooks() {
    //  Implement book sorting
  }

  filterBooks() {
    //  Implement book filtering
  }

  render() {
    let bookshelfElem = document.createElement('div');
    bookshelfElem.classList.add('bookshelf');

    let controlsElem = document.createElement('div');
    controlsElem.classList.add('controls');
    bookshelfElem.append(controlsElem);

    let searchInputElem = document.createElement('input');
    searchInputElem.setAttribute('type', 'text');
    searchInputElem.setAttribute('id', 'search-input');
    searchInputElem.setAttribute('placeholder', 'Title, author, or subject');
    controlsElem.append(searchInputElem);

    let searchBtnElem = document.createElement('button');
    searchBtnElem.setAttribute('id', 'search-btn');
    searchBtnElem.textContent = 'Search';
    controlsElem.append(searchBtnElem);

   let sortByElem = document.createElement('select');
    sortByElem.setAttribute('id', 'sort-by');
    controlsElem.append(sortByElem);

   let titleOptionElem = document.createElement('option');
    titleOptionElem.setAttribute('value', 'title');
    titleOptionElem.textContent = 'Title';
    sortByElem.append(titleOptionElem);

    let authorOptionElem = document.createElement('option');
    authorOptionElem.setAttribute('value', 'author');
    authorOptionElem.textContent = 'Author';
    sortByElem.append(authorOptionElem);

   let subjectOptionElem = document.createElement('option');
    subjectOptionElem.setAttribute('value', 'subject');
    subjectOptionElem.textContent = 'Subject';
    sortByElem.append(subjectOptionElem);

   let sortDirectionBtnElem = document.createElement('button');
    sortDirectionBtnElem.setAttribute('id', 'sort-direction-btn');
    sortDirectionBtnElem.innerHTML = '&#x2191;';
    controlsElem.append(sortDirectionBtnElem);

  let bookListElem = document.createElement('ul');
    bookshelfElem.appendChild(bookListElem);

    this.books.forEach(book => {
      const bookElem = document.createElement('li');
      bookElem.textContent = `${book.title} by ${book.author}`;
      bookListElem.appendChild(bookElem);
    });

    return bookshelfElem;
  }
}
console.log("hello world")






