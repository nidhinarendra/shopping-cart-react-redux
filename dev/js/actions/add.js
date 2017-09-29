export const clickAdd = (item, destList) => {
  console.log('you cliked ADD button', item.item);

  destList.push(item);

  return {
    type: 'add_button_clicked',
    payload: item
  };
};
