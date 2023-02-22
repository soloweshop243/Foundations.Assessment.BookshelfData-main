// Define Book and Bookshelf classes first
class Book {
  constructor(title, author, genre, pageCount) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.render = false;
    this.favorite = false;
  }
}

class Bookshelf {
  constructor(book) {
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
    // TODO: Implement book updating
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
    // TODO: Implement book sorting
  }

  filterBooks() {
    // TODO: Implement book filtering
  }

  render() {
    const bookshelfElem = document.createElement('div');
    bookshelfElem.classList.add('bookshelf');

    const controlsElem = document.createElement('div');
    controlsElem.classList.add('controls');
    bookshelfElem.appendChild(controlsElem);

    const searchInputElem = document.createElement('input');
    searchInputElem.setAttribute('type', 'text');
    searchInputElem.setAttribute('id', 'search-input');
    searchInputElem.setAttribute('placeholder', 'Title, author, or subject');
    controlsElem.appendChild(searchInputElem);

    const searchBtnElem = document.createElement('button');
    searchBtnElem.setAttribute('id', 'search-btn');
    searchBtnElem.textContent = 'Search';
    controlsElem.appendChild(searchBtnElem);

    const sortByElem = document.createElement('select');
    sortByElem.setAttribute('id', 'sort-by');
    controlsElem.appendChild(sortByElem);

    const titleOptionElem = document.createElement('option');
    titleOptionElem.setAttribute('value', 'title');
    titleOptionElem.textContent = 'Title';
    sortByElem.appendChild(titleOptionElem);

    const authorOptionElem = document.createElement('option');
    authorOptionElem.setAttribute('value', 'author');
    authorOptionElem.textContent = 'Author';
    sortByElem.appendChild(authorOptionElem);

    const subjectOptionElem = document.createElement('option');
    subjectOptionElem.setAttribute('value', 'subject');
    subjectOptionElem.textContent = 'Subject';
    sortByElem.appendChild(subjectOptionElem);

    const sortDirectionBtnElem = document.createElement('button');
    sortDirectionBtnElem.setAttribute('id', 'sort-direction-btn');
    sortDirectionBtnElem.innerHTML = '&#x2191;';
    controlsElem.appendChild(sortDirectionBtnElem);

    const bookListElem = document.createElement('ul');
    bookshelfElem.appendChild(bookListElem);

    this.books.forEach(book => {
      const bookElem = document.createElement('li');
      bookElem.textContent = `${book.title} by ${book.author}`;
      bookListElem.appendChild(bookElem);
    });

    return bookshelfElem;
  }
}

const bookshelf = new Bookshelf();





