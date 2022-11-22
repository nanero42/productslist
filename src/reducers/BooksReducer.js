import { setLocalStorageItem } from '../providers/utils';

export const CREATE_BOOK = 'CREATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';

export const BooksReducer = (state, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return createBook(state, action);
    case DELETE_BOOK:
      return deleteBook(state, action);
    case UPDATE_BOOK:
      return updateBook(state, action);
    default:
      return state;
  }
}

const createBook = (state, action) => {
  const newBook = {
    id: action.payload.id,
    desc: action.payload.desc,
    price: action.payload.price,
  }
  const newState = [...state, newBook];
  setLocalStorageItem('products', newState);

  return newState;
}
const deleteBook = (state, action) => {
  const newState = state.filter(product => product.id !== action.payload.id);
  setLocalStorageItem('products', newState);

  return newState;
}
const updateBook = (state, action) => {}