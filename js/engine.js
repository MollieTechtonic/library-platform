function Library()
{
  this.bookshelf = new Array();
  // could also do this.bookshelf = []; ? still an object this way right?
};

// Done - GO BACK AND USE TOLOWERCASE()
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
Library.prototype.removeBookByAuthor = function(authorName)
{
  var counter = 0;
  // loop through books and search for an author that matches the input param
  for (var i=0; i<this.bookshelf.length; i++) {
    // if any books found with author match
    if (this.bookshelf[i].author === authorName) {
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

// Done - GO BACK AND USE TO LOWERCASE
Library.prototype.getBookByTitle = function(titlePiece)
{
  // declare a var for our title matches to push into
  // outside our function for scoping reasons
  var titleMatchArray = [];
  // loop through all books for a match of the input title param
  for (var i=0; i<this.bookshelf.length; i++) {
    // checking to see the loop runs through each title
    // console.log(this.bookshelf[i].title);
    // if there is a full/partial match
    if (this.bookshelf[i].title.indexOf(titlePiece) !== -1) {
    // add to our title array
    titleMatchArray.push(this.bookshelf[i]);
    }
  }
  // return an array of all book objects that have a full or partial match (or empty array if none are found)
  return titleMatchArray;
};

// Done - GO BACK AND USE TO LOWERCASE
Library.prototype.getBookByAuthor = function(authorName)
{
  // declare a var for our author matches to push into
  // outside our function for scopng reasons
  var authorMatchArray = [];
  // loop through all books for a match of the input author param
  for (var i=0; i<this.bookshelf.length; i++) {
    // check to see the loop runs through each book author
    // console.log(this.bookshelf[i].author);
    // if there is a full/partial match,
    if (this.bookshelf[i].author.indexOf(authorName) !== -1) {
      // add to our author array
      authorMatchArray.push(this.bookshelf[i]);
    }
  }
  // return an array of all book objects that have a full or partial author name match (or empty array if no books match)
  return authorMatchArray;
};

// Done
Library.prototype.addBooks = function(books)
{
  // take in multiple books in the form of an array of book objects and add them to the bookShelf array

  // found that "this" here points to my object -
  // inside my forEach, "this" points to the window -
  // therefore, declare var This = this in object context
  var This = this;
  // log bookshelf length before adding book(s)
  var currentLength = this.bookshelf.length;

  // run established addBook function on each new book object in the argument array
  books.forEach(function(b) {
    This.addBook(b);
  });

  // log new bookshelf length after attempting to add book(s)
  var newLength = this.bookshelf.length;

  // return # of new books added to bookshelf
  return newLength - currentLength;
};

// Done BUT.... Definitely a better way to do this...
Library.prototype.getAuthors = function()
{
  // declare a var to contain all authors
  var allAuthorArray = [];
  // declar a var to contain unique authors
  var uniqueArray = [];

  // loop through bookshelf and add ALL authors to allAuthorArray
  for (var i=0; i<this.bookshelf.length; i++) {
    allAuthorArray.push(this.bookshelf[i].author);
  }

  // loop through allAuthorArray
  for (var j=0; j<allAuthorArray.length; j++) {
    // add to unique array if not already there
    if (uniqueArray.indexOf(allAuthorArray[j]) === -1) {
      uniqueArray.push(allAuthorArray[j]);
    }
  }
  // return array of strings of all unique authors; empty array if no books/no authors exist
  return uniqueArray;
}


// Done BUT... Definitely a better way to do this...
Library.prototype.getRandomAuthorName = function()
{
  var randomBook = this.bookshelf[Math.floor(Math.random() * this.bookshelf.length)];

  // return random author name as a string (or null if there are no books)
  if (randomBook) {
    return randomBook.author;
  } else {
    return null;
  }
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
});
