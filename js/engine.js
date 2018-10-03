function Library()
{
  this.bookshelf = new Array();
  // could also do this.bookshelf = []; ? still an object this way right?
};

// Done
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

// Done
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

// Done
Library.prototype.removeBookByAuthor = function(AuthorName)
{
  var counter = 0;
  // loop through books and search for an author that matches the input param
  for (var i=0; i<this.bookshelf.length; i++) {
    // if any books found with author match
    if (this.bookshelf[i].author === AuthorName) {
        // delete any books that are by that author
        this.bookshelf.splice(i, 1);
        // common bug with splice: when an item is removed, the item at index i is not what WAS THE NEXT ITEM ON THE LIST. Therefore, each time an item is removed we need to decrement i back one to ensure we are checking EVERY book.
        i--;
        counter++;
    }
  }
  // return true if book(s) removed; return false if no books match
  if (counter !== 0) {
    return true;
  } else {
    return false;
  }
};

// Done
Library.prototype.getRandomBook = function()
{
  // use Math.random to find a random book
  var randomBook = this.bookshelf[Math.floor(Math.random() * this.bookshelf.length)];
  // return random book object (or null if there are no books)
  if (randomBook) {
    return randomBook;
  } else {
    return null;
  }
};

// Done
Library.prototype.getBookByTitle = function(titlePiece)
{
  // declare a var for our title matches to push into
  // outside our function for scoping reasons
  var titleMatchArray = [];
  // loop through all books for a match of the input title param
  for (var i=0; i<this.bookshelf.length; i++) {
    // checking to see the loop runs through each title
    // console.log(this.bookshelf[i].title);
     if (this.bookshelf[i].title.indexOf(titlePiece) !== -1) {
       titleMatchArray.push(this.bookshelf[i]);
     }
   }
  // return an array of all book objects that have a full or partial match (or empty array if none are found)
  return titleMatchArray;

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
  window.gLibrary.addBook(book6);
  window.gLibrary.addBook(book7);
  window.gLibrary.addBook(book8);
  // console.log(window.gLibrary, "<== current window.gLibrary");


  // window.gLibrary.removeBookByTitle("Harry Potter and the Goblet of Fire");
  // console.log(window.gLibrary, "<== bookshelf after book removed by title");

  // window.gLibrary.removeBookByAuthor("Dave Eggers");
  // console.log(window.gLibrary, "<== bookshelf after book(s) removed by author");

  // window.gLibrary.getRandomBook();

});
