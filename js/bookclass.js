//defines a Book class with properties for the book's values 

class Book {
  constructor (form, title, author, subject, language, comment = []) {
    this.form = form
    this.title = title
    this.author = author
    this.subject = subject
    this.language = language
    this.comment = comment //can comment later
   
  }
  // converts book properties to HTML 
  /**
   * 
   * <form id="book-form">
   *  <h2> Title: </h2>
   *  <h2> Author: </h2>
   *  <h2> Subject: </h2>
   *  <h3> Language: </h3>
   *  <h3> Comment: </h3>
   * <
   * @returns 
   */
  render() {

  let form = document.createElement('form')
  form.innerHTML = `${this.form} book-form`

  let title = document.createElement('h1');
  title.innerHTML = `${this.title} Title`

  let author = document.createElement('h2');
  author.innerHTML = `${this.author} Author`

  let subject = document.createElement('h2');
  subject.innerHTML = `${this.subject} Subject`

  let language = document.createElement('h2');
  language.innerHTML = `${this.language} Language`


  let comment = document.createElement('h3');
  comment.innerHTML = `${this.comment} Comment`

  // comment(this.comments); {
  //   this.comments.push(comment);
  //   let addComment = document.createElement('comment-input');
  //   comment.appendChild(addComment)

    form.append(title)
    form.append(author)
    form.append(subject)
    form.append(language)
    form.append(comment)
  
    return form

  }  
// end of render function

}    
//  end of class


let myBook = new Book( 'The JungleBook', 'Steve', 'Fiction', 'en', 'love')
  
   
     

  
   
