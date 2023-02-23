//defines a Book class with properties for the book's 
//title

class Book {
    constructor(title, author, subject, language) {
      this.title = title;
      this.author = author;
      this.subject = subject;
      this.language = language;
      this.render = false;
      this.favorite = false;
      this.comments = [];
    }
    toggleFavorite() {
      this.favorite = !this.favorite;
    }

    addComment(comment) {
      this.comments.push(comment);
    }
      

  }
   
  // ... render book element with comments section ...
    render() ;
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
    
      const favoriteBtn = document.createElement('button');
      favoriteBtn.textContent = this.favorite ? 'Unfavorite' : 'Favorite';
      favoriteBtn.addEventListener('click', () => {
        this.toggleFavorite();
        renderBookshelf(bookshelf);
      });
      bookDiv.appendChild(favoriteBtn);
    
      const favoriteIndicator = document.createElement('span');
      favoriteIndicator.textContent = '❤️';
      favoriteIndicator.classList.add('favorite-indicator');
      if (this.favorite) {
        favoriteIndicator.classList.add('favorite');
      }
      bookDiv.appendChild(favoriteIndicator);
      const commentSection = document.createElement('div');
      commentSection.classList.add('comment-section');
  
      const commentHeader = document.createElement('h3');
      commentHeader.textContent = 'Comments';
      commentSection.appendChild(commentHeader);
  
      const commentList = document.createElement('ul');
      commentList.classList.add('comment-list');
      commentSection.appendChild(commentList);
  
      const commentForm = document.createElement('form');
      commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = commentForm.querySelector('input[type="text"]');
        if (input.value.trim() !== '') {
          this.addComment(input.value.trim());
          input.value = '';
          renderBookshelf(bookshelf);
        }
      });
  
      const commentInput = document.createElement('input');
      commentInput.setAttribute('type', 'text');
      commentInput.setAttribute('placeholder', 'Type your comment here');
      commentForm.appendChild(commentInput);
  
      const commentButton = document.createElement('button');
      commentButton.setAttribute('type', 'submit');
      commentButton.textContent = 'Send';
      commentForm.appendChild(commentButton);
  
      commentSection.appendChild(commentForm);
  
      this.comments.forEach((comment) => {
        const commentItem = document.createElement('li');
        commentItem.textContent = comment;
        commentList.appendChild(commentItem);
      });
  
      bookDiv.appendChild(commentSection);
      return bookDiv;
    
  