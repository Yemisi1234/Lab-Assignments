let data = [];

export function get_items() {
  return data;
}
export function add_item(new_item) {
  const checkIfItemIdExist = data.find((item) => item.id === new_item.id);
  if (!checkIfItemIdExist) {
    data.push(new_item);
    return true;
  } else {
    return false;
  }
}
export function update_item_title_by_id(id, new_title) {
  let checkIfItemIdExist = data.find((item) => item.id === id);
  if (checkIfItemIdExist) {
    checkIfItemIdExist.title = new_title;
    return true;
  } else {
    return false;
  }
}
export function delete_item_by_id(id) {
  const findIndex = data.findIndex((item) => item.id === id);
  if (findIndex !== -1) {
    data.splice(findIndex, 1);
    return true;
  } else {
    return false;
  }
}
export function get_item_title_by_id(id) {
  const checkIfItemIdExist = data.find((item) => item.id === id);
  if (checkIfItemIdExist) {
    return checkIfItemIdExist.title;
  } else {
    return null;
  }
}
