function addBook() {
  // Get the values from the form inputs
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const subject = document.querySelector('#subject').value;
  const language = document.querySelector('#language').value;

  // Create a new Book instance with the values
  const bookshelf = new Bookshelf();

  // Add books to the bookshelf
  bookData.forEach((book) => {
    const newBook = new Book(book.title, book.author, book.subject, book.language);
    bookshelf.addBook(newBook);
  });
  
  // Render the bookshelf
  const bookshelfDiv = document.getElementById('bookshelf');
  renderBookshelf(bookshelf, bookshelfDiv);
  


  
 function removeBook(book)
    index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  

  function updateBook();{
    //  Implement book updating
  }

  render() ;{
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
    bookshelfElem.append(bookListElem);

    this.books.forEach(book => {
      const bookElem = document.createElement('li');
      bookElem.textContent = `${book.title} by ${book.author}`;
      bookListElem.append(bookElem);
    });

   
  }

console.log("hello world!");



}



