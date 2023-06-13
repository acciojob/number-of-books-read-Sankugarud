const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: true,
  },
];
let count = 0;
const numberOfBooksRead = () => {
  library.map( (event) => {
	  if(event.readingStatus == true){
		  count++;
	  }
  })
	return count;
};

// Do not change the code below

alert(numberOfBooksRead());
