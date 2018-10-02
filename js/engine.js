function Library(){
  this.bookshelf = new Array();
};

Library.prototype.addBook = function(book)
{

};

Library.prototype.removeBookByTitle = function(title)
{

};

// where we're creating the instance -
document.addEventListener("DOMContentLoaded", function(e) {
  // how we access all our methods
  window.gLibrary = new Library();
});
