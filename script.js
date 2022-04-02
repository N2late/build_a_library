class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(check) {
      this._isCheckedOut = check;
    }
  
    toggleCheckOutStatus() {
     this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      let sumRating = this.ratings.reduce((prev, curr) => prev + curr, 0);
      let avgRating = sumRating / this.ratings.length;
      return avgRating.toFixed(2);
    }
  
    addRating(rate) {
       if(typeof rate === 'number' && rate >= 1 && rate <= 5) {
        this.ratings.push(rate);
      }
      else {
        console.log('Please insert a rating between 1 and 5.')
      }
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Billy Bryson', 544)
  
  historyOfEverything.toggleCheckOutStatus()
  
  //console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  //console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  
  speed.toggleCheckOutStatus();
  
  //console.log(speed.isCheckedOut)
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  //console.log(speed.getAverageRating())
  
  class Catalog {
    constructor() {
      this._books = [];
      this._movies = [];
    }
  
    get books() {
      return this._books;
    }
  
    get movies() {
      return this._movies;
    }
  
    addBook(obj) {
      Book.prototype.isPrototypeOf(obj) ? this._books.push(obj) : console.log('wrong argument');
    }
  
    addMovie(obj) {
      Movie.prototype.isPrototypeOf(obj)
      ? this._movies.push(obj) : console.log('wrong argument')
    }
  }
  
  const fullCatalog = new Catalog();
  
  fullCatalog.addBook(historyOfEverything);
  //fullCatalog.addBook(speed);
  fullCatalog.addMovie(speed);
  console.log(fullCatalog)