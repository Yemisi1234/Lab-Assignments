let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    ID: 3257,
  },
];

export default function addBook(title, author, ID) {
  const doesNotExist = libraryBooks.filter(
    (elem) => elem.title === title && elem.author === author && elem.ID === ID
  );

  if (doesNotExist.length === 0) {
    let newBook = { title, author, ID };
    libraryBooks.push(newBook);
  }
  return libraryBooks;
}
console.log(addBook("Rich Dad Poor Dad", "Steve Jobs", 5678));
