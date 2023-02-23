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
      
   
  
     

  
    
  