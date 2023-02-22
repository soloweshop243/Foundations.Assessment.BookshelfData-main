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
    }
  
    toggleFavorite() {
      this.favorite = !this.favorite;
    }
  
    render() {
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
    
      return bookDiv;
    }
  }
  