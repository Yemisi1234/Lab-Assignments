import addBook from "./addBook.js";

export const getTitle = function () {
  const libraryBooks = addBook("Rich Dad Poor Dad", "Steve Jobs", 5678);
  const result = libraryBooks.map((book) => book.title).sort();
  return result;
};

console.log(getTitle());
