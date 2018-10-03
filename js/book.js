// not creating an instance here but on the fly inside engine.js

function Book(title, author, numPages, pubDate)
{
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate; //eventually use a date object

}

// method that takes in a book obj
Book.prototype.editBook = function(oBook)
{

};

var book1 = new Book("Harry Potter and the Goblet of Fire", "JK Rowling", 636, "July 8, 2000");

var book2 = new Book("Choke", "Chuck Palahniuk", 304, "October 17, 2001");

var book3 = new Book("A Heartbreaking Work of Staggering Genius", "Dave Eggers", 375, "March 14, 2000");

var book4 = new Book("Murder on the Orient Express", "Agatha Christie", 210, "January 1, 1934");

var book5 = new Book("Eragon", "Christopher Paolini", 509, "August 26, 2003");

var book6 = new Book ("What is the What", "Dave Eggers", 475, "October 25, 2006");

var book7 = new Book ("The Glass Castle", "Jeannette Walls", 289, "March 8, 2005");
