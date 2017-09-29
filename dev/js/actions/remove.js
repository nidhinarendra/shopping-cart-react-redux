export const clickRemove = (item, destList) => {
  console.log('you clicked Remove button', item.item);
  var index;
  for (var i = 0; i <= destList.length; i++) {
    if (item == destList[i]) {
      index = i;
    } else {
      continue;
    }
  }
  destList.splice(index, 1);
  return {
    type: 'remove_button_clicked',
    payload: item
  };
};
