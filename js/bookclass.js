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
      let bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
    
      let title = document.createElement('h2');
      title.textContent = this.title;
      bookDiv.appendChild(title);
    
      let author = document.createElement('p');
      author.textContent = `by ${this.author}`;
      bookDiv.appendChild(author);
    
      let subject = document.createElement('p');
      subject.textContent = `Subject: ${this.subject}`;
      bookDiv.appendChild(subject);
    
      let language = document.createElement('p');
      language.textContent = `Language: ${this.language}`;
      bookDiv.appendChild(language);
    
      let favoriteBtn = document.createElement('button');
      favoriteBtn.textContent = this.favorite ? 'Unfavorite' : 'Favorite';
      favoriteBtn.addEventListener('click', () => {
        this.toggleFavorite();
        renderBookshelf(bookshelf);
      });
      bookDiv.appendChild(favoriteBtn);
    
      let favoriteIndicator = document.createElement('span');
      favoriteIndicator.textContent = '❤️';
      favoriteIndicator.classList.add('favorite-indicator');
      if (this.favorite) {
        favoriteIndicator.classList.add('favorite');
      }
      bookDiv.appendChild(favoriteIndicator);
      let commentSection = document.createElement('div');
      commentSection.classList.add('comment-section');
  
      let commentHeader = document.createElement('h3');
      commentHeader.textContent = 'Comments';
      commentSection.appendChild(commentHeader);
  
      let commentList = document.createElement('ul');
      commentList.classList.add('comment-list');
      commentSection.appendChild(commentList);
  
      let commentForm = document.createElement('form');
      commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = commentForm.querySelector('input[type="text"]');
        if (input.value.trim() !== '') {
          this.addComment(input.value.trim());
          input.value = '';
          renderBookshelf(bookshelf);
        }
      });
  
     let commentInput = document.createElement('input');
      commentInput.setAttribute('type', 'text');
      commentInput.setAttribute('placeholder', 'Type your comment here');
      commentForm.appendChild(commentInput);
  
      let commentButton = document.createElement('button');
      commentButton.setAttribute('type', 'submit');
      commentButton.textContent = 'Send';
      commentForm.appendChild(commentButton);
  
      commentSection.appendChild(commentForm);
  
      this.comments.forEach((comment) => {
        const commentItem = document.createElement('li');
        commentItem.textContent = comment;
        commentList.appendChild(commentItem);
      
  
      bookDiv.append(div)
      title.append(title) 
      author.append(by)
      subject.append(subject)
      language.append(language)
      
      favoriteBtn.append(click) 
      comment.append(button)
      return bookDiv

    })
    
  