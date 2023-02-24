//defines a Book class with properties for the book's 
//title

class Book {
    constructor(title, author, subject, language) {
      this.title = title;
      this.author = author;
      this.subject = subject;
      this.language = language;
      this.comments = [];
      this.favorite = false;
    }
    toggleFavorite() {
      this.favorite = !this.favorite;
    }

    addComment(comment) {
      this.comments.push(comment);
    }
  }
  
  
  // ... render book element with comments section ...
  const bookshelf = new Bookshelf();

  // Get a reference to the form element and listen for the submit event
  const addBookForm = document.getElementById('add-book-form');
  addBookForm.addEventListener('submit', event => {
    event.preventDefault();
  
    // Extract the data from the form
    const title = document.getElementById('title-input').value;
    const author = document.getElementById('author-input').value;
    const subject = document.getElementById('subject-input').value;
    const language = document.getElementById('language-input').value;
  
    // Create a new Book instance with the data
    const book = new Book(title, author, subject, language);
  
    // Add the new book to the bookshelf
    bookshelf.addBook(book);
  
    // Re-render the bookshelf to display the updated list of books
    renderBookshelf(bookshelf);
  });
  

    // Create book element and populate with data
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const title = document.createElement('h2');
    title.textContent = this.title;
    bookDiv.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `by ${this.author}`;
    bookDiv.appendChild(author);

    const subject = document.createElement('p');
    subject.textContent = `Subject: ${this.subject}`;
    bookDiv.appendChild(subject);

    const language = document.createElement('p');
    language.textContent = `Language: ${this.language}`;
    bookDiv.appendChild(language);

    // Render comments section
    const commentsSection = document.createElement('div');
    commentsSection.classList.add('comments-section');
    bookDiv.appendChild(commentsSection);

    const commentsTitle = document.createElement('h3');
    commentsTitle.textContent = 'Comments';
    commentsSection.appendChild(commentsTitle);

    const commentsList = document.createElement('ul');
    commentsList.classList.add('comments-list');
    commentsSection.appendChild(commentsList);

    this.comments.forEach((comment) => {
      const commentLi = document.createElement('li');
      commentLi.textContent = comment;
      commentsList.appendChild(commentLi);
    });

    const addCommentBtn = document.createElement('button');
    addCommentBtn.textContent = 'Add Comment';
    commentsSection.appendChild(addCommentBtn);

    const commentInput = document.createElement('input');
    commentInput.setAttribute('type', 'text');
    commentInput.setAttribute('placeholder', 'Add a comment (max 280 characters)');
    commentsSection.appendChild(commentInput);

    const commentSendBtn = document.createElement('button');
    commentSendBtn.textContent
    renderBookshelf  = function (comment) { return comment; }; 
  
   
  
     

  
    
  