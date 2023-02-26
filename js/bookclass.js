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
  let title = document.createElement('title');
  title.innerHTML = this.title

  let author = document.createElement('author');
  author.innerHTML = this.author

  let subject = document.createElement('subject');
  subject.innerHTML = this.subject

  let language = document.createElement('language');
  language.innerHTML = this.language


  let comment = document.createElement('comment');
  comment.innerHTML = this.comment

  comment(this.comments); {
    this.comments.push(comment);
    let addComment = document.createElement('comment-input');
    comment.appendChild(addComment)

  }
   
  return Book
}}
     
   
  
   
     

  
   
