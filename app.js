// parent class Media
class Media {
  constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title () {
    return this._title;
  }
  get isCheckedOut () {
    return this._isCheckedOut;
  }
  get ratings () {
    return this._ratings;
  }
  set isCheckedOut (checkedOut) {
    this._isCheckedOut = checkedOut;
  }
  toggleCheckOutStatus () {
    this.isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating () {
    let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum / this.ratings.length;
  }
  addRating (newRating) {
    if (newRating >= 1 && newRating <= 5) {
      this.ratings.push(newRating);
  } else {
    console.log('Rating must be between 1 and 5.');
    }
  }
}

// Book sub class
class Book extends Media {
  constructor (author, title, pages) {
    super (title);
    this._author = author;
    this._pages = pages;
  }
  get author () {
    return this._author;
  }
  get pages () {
    return this._pages;
  }
}

// Movie sub class
class Movie extends Media {
  constructor (director, title, runTime) {
    super (title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = [];
  }
  get director () {
    return this._director;
  }
  get runTime () {
    return this._runTime;
  }
  get movieCast () {
    return this._movieCast;
  }
  addMovieCast (castName) {
    this.movieCast.push(castName);
  }
  getMovieCastAmount () {
    return this.movieCast.length;
  }
}

// CD sub class
class CD extends Media {
  constructor (artist, title, tracks) {
    super (title);
    this._artist = artist;
    this._tracks = tracks;
    this._songTitles = [];
  }
  get artist () {
    return this._artist;
  }
  get tracks () {
    return this._tracks;
  }
  get songTitles () {
    if (this._tracks === this._songTitles.length) {
      return this._songTitles;
    } else if (this._tracks > this._songTitles.length) {
      let moreTracks = this._tracks - this._songTitles.length;
      return this._songTitles + `, and ${moreTracks} unknown track(s).`;
    } else if (this._tracks < this._songTitles.length) {
      let moreTitles = this._songTitles.length - this._tracks;
      return this._tracks + moreTitles;
    }
  }
  addSongTitles (songTitle) {
    this._songTitles.push(songTitle);
  }
  shuffle () {
    let trackLength = this._songTitles.length;
    let randomNumber = Math.floor(Math.random() * trackLength);
    return this._songTitles[randomNumber];
  }
}

// Instance - Book
const ikigai = new Book ('Hector Garcia', 'Ikigai: The Japanese Secret to a Long and Happy Life', 208);
ikigai.toggleCheckOutStatus();
console.log(ikigai.isCheckedOut); // prints true - worked since method changed from false to true (checked out)
ikigai.addRating(4);
ikigai.addRating(5);
ikigai.addRating(5);
console.log(ikigai.getAverageRating()); // prints 4.666666666666667

// Instance - Movie
const interstellar = new Movie ('Christopher Nolan', 'Interstellar', 169);
interstellar.toggleCheckOutStatus();
console.log(interstellar.isCheckedOut); // prints true
interstellar.addRating(5);
interstellar.addRating(4.5);
interstellar.addRating(5);
console.log(interstellar.getAverageRating()); // prints 4.833333333333333
interstellar.addMovieCast('Matthew McConaughey');
interstellar.addMovieCast('Anne Hathaway');
interstellar.addMovieCast('Jessica Chastain');
console.log(interstellar.getMovieCastAmount()); // prints 3

// Instance - CD
const yeezus = new CD ('Kanye West', 'Yeezus', 10);
yeezus.toggleCheckOutStatus();
console.log(yeezus.isCheckedOut); // prints true
yeezus.addRating(5);
yeezus.addRating(5);
yeezus.addRating(5);
console.log(yeezus.getAverageRating()); // prints 5.
console.log(yeezus.tracks + ' tracks'); // prints '10 tracks'

yeezus.addSongTitles('On Sight');
yeezus.addSongTitles('Black Skinhead');
yeezus.addSongTitles('I Am a God');
yeezus.addSongTitles('New Slaves');
yeezus.addSongTitles('Hold My Liquor');
yeezus.addSongTitles('I\'m in It');
yeezus.addSongTitles('Blood on the Leaves');
yeezus.addSongTitles('Guilt Trip');
yeezus.addSongTitles('Send It Up');
console.log(yeezus.songTitles); // prints 'On Sight,Black Skinhead,I Am a God,New Slaves,Hold My Liquor,I'm in It,Blood on the Leaves,Guilt Trip,Send It Up, and 1 unknown track(s).'
console.log(yeezus.shuffle()); // prints random song from above

