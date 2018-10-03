function Library()
{
  this.bookshelf = new Array();
  // could also do this.bookshelf = []; ? still an object this way
};

Library.prototype.addBook = function(book)
{
  // check if book is already in my array(bookshelf)
  for(var i=0; i<this.bookshelf.length; i++) {
    if (this.bookshelf[i].title === book.title) {
      //false if not added or already exists
      return false;
    }
  }
  // add book that's coming from book param if title isn't already in arr
  this.bookshelf.push(book);
  // return true if book was added
  return true;
};

Library.prototype.removeBookByTitle = function(title)
{
  // loop through books and search for a title that matches the input param
  for (var i=0; i<this.bookshelf.length; i++) {
    // if a match is found,
    if (this.bookshelf[i].title === title) {
      // delete that book object
      // this method leaves a hole in the array
      // delete this.bookshelf[i];

      // trying splice method - WORKS!!
      this.bookshelf.splice(i, 1);
      // return true of book was removed
      return true;
    }
  }
  // return false if no books match
  return false;
};

Library.prototype.removeBookByAuthor = function(AuthorName)
{
  // loop through books and search for an author that matches the input param
  // delete any books that are by that author
  // return true if book(s) were removed
  // return false if no books match
};

Library.prototype.getRandomBook = function()
{
  // use Math.random to find a random book
  // return random book object (or null if there are no books)
};

Library.prototype.getBookByTitle = function(title)
{
   // loop through all books for a match of the input title param
   // return an array of all book objects that have a full or partial match (or empty array if none are found)
};

Library.prototype.getBookByAuthor = function(AuthorName)
{
  // loop through all books for a match of the input author param
  // return an array of all book objects that have a full or partial author name match (or empty array if no books match)
};

// LEVERAGE ADDBOOK
Library.prototype.addBooks = function(books)
{
  // take in multiple books in the form of an array of book objects and add them to the bookShelf array
  // return the # of books successfully added (0 if no books are added)
};

Library.prototype.getAuthors = function()
{
  // find the distinct author's names from all books in the Library
  // return and array of strings of the names of all distinct authors (empty array if no books exist or authors exist)
};

// LEVERAGE RANDOMBOOK
Library.prototype.getRandomAuthorName = function()
{
  // use Math.random to find a random author
  // return random author name as a string (or null if there are no books)
};


// where we're creating the instance - new Library created that has a bookShelf property (which is an array that eventually will be filled with books.)
document.addEventListener("DOMContentLoaded", function(e) {
  // how we access all our methods
  // WHY CALLED WINDOW.GLIBRARY????????????????
  window.gLibrary = new Library();

  // adding all the seed books from book.js
  window.gLibrary.addBook(book1);
  window.gLibrary.addBook(book2);
  window.gLibrary.addBook(book3);
  window.gLibrary.addBook(book4);
  window.gLibrary.addBook(book5);
  // console.log(window.gLibrary, "<== current window.gLibrary");


  window.gLibrary.removeBookByTitle("Harry Potter and the Goblet of Fire");
  // console.log(window.gLibrary, "<== bookshelf after book removed");

  
});
