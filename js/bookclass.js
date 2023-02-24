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

  render() {
    // Implement book rendering
  }

  toggleFavorite() {
    this.favorite = !this.favorite;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

   
    
     

  
    
  