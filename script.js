import {
  get_items,
  add_item,
  update_item_title_by_id,
  delete_item_by_id,
  get_item_title_by_id,
} from "./data.js";

console.log(add_item({ id: 1, title: "Item 1" }));

console.log(add_item({ id: 2, title: "Item 2" }));

console.log(update_item_title_by_id(1, "Updated Item 1"));

console.log(get_item_title_by_id(1));

console.log(delete_item_by_id(1));

console.log(get_items());
