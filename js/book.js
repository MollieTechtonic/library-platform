// not creating an instance here but on the fly inside engine.js

function Book(title, author numPages, pubDate)
{
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;

}

// method that takes in a book obj
Book.prototype.editBook = function(oBook)
{

}
