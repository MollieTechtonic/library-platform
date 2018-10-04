function Book(title, author, numPages, pubDate)
{
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate; //eventually use a date object

}

Book.prototype.editBook = function(oBook)
{
// this method assumes that a title will ALWAYS be given.... not sure if it works
  // for (var i=0; i<this.bookshelf.length; i++) {
  //  if (oBook.title === this.bookshelf[i].title) {
  //    this.bookshelf[i].author = oBook.author;
  //    this.bookshelf[i].numPages = oBook.numPages;
  //    this.bookshelf[i].pubDate = oBook.pubDate;
  //  }
  // }

// this method will change any number of attributes, even 0
  this.title = oBook.title || this.title;
  this.author = oBook.author || this.author;
  this.numPages = oBook.numPages || this.numPages;
  this.pubDate = oBook.pubDate || this.pubDate;

  return this;
};

var book1 = new Book("Harry Potter and the Goblet of Fire", "JK Rowling", 636, "July 8, 2000");

var book2 = new Book("Choke", "Chuck Palahniuk", 304, "October 17, 2001");

var book3 = new Book("A Heartbreaking Work of Staggering Genius", "Dave Eggers", 375, "March 14, 2000");

var book4 = new Book("Murder on the Orient Express", "Agatha Christie", 210, "January 1, 1934");

var book5 = new Book("Eragon", "Christopher Paolini", 509, "August 26, 2003");

var book6 = new Book ("What is the What", "Dave Eggers", 475, "October 25, 2006");

var book7 = new Book ("The Glass Castle", "Jeannette Walls", 289, "March 8, 2005");

var book8 = new Book ("The Prophet", "Kahlil Gibran", 107, "October 25, 1923");


// 3 more books and a book array to test addBooks function
var book9 = new Book ("Harry Potter and the Half Blood Prince", "JK Rowling", 652, "July 16, 2005");

var book10 = new Book ("The Pale Horse", "Agatha Christie", 256, "November 6, 1961");

var book11 = new Book ("You Shall Know Our Velocity", "Dave Eggers", 371, "October 25, 2002");

var book12 = new Book ("Heart of Darkness", "Joseph Conrad", 151, "October 25, 1902")

var bookArray = [book9, book10, book11, book12];
