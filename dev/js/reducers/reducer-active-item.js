export default function(state = null, action) {
  switch (action.type) {
    case 'add_button_clicked':
      return action.payload;
      break;

    case 'remove_button_clicked':
      return action.payload;
      break;
  }
  return state;
}
