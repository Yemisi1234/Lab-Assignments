import addBook from "./addBook.js";

export const findBooks = (title) => {
  const libraryBooks = addBook("Rich Dad Poor Dad", "Steve Jobs", 5676);
  addBook("Rich Dad Poor Dad", "Steve Jobs", 5677);
  const result = libraryBooks
    .filter((elem) => elem.title.toLowerCase().includes(title.toLowerCase()))
    .sort((a, b) => a.ID - b.ID);
  return result;
};
console.log(findBooks("Road"));
