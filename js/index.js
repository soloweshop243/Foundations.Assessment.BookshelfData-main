
// Define the BookList class
class BookList {
  constructor() {
    this.books = [];
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

}

// Create some dummy book objects
const myBook1 = {title: 'Book 1', author: 'Author 1', subject: 'Subject 1', language: 'English'};
const myBook2 = {title: 'Book 2', author: 'Author 2', subject: 'Subject 2', language: 'French'};
const myBook3 = {title: 'Book 3', author: 'Author 3', subject: 'Subject 3', language: 'Spanish'};

// Initialize the book list and add the books
const bookList = new BookList()
bookList.addBook(myBook1)
bookList.addBook(myBook2)
bookList.addBook(myBook3)

console.log(bookList)
bookList.removeBook(myBook1)
console.log(bookList)


// let myBook1= new Book( 'The JungleBook', 'Steve', 'Fiction', 'en', 'love')
// let myBook2 = new Book( 'The Monkey Show', 'Mr X', 'Fiction', 'esp', 'peace')
// let myBook3 = new Book( 'Mrs. Monkey mouth', 'Mrs. Nobody', 'Fiction', 'en', 'hate')

// let bookList= new bookList()
// bookList.addBook(myBook1)
// bookList.addBook(myBook2)
// bookList.addBook(myBook3)
// console.log(new Book);
