import { createContext, useReducer } from 'react';
import { getLocalStorageItem } from '../providers/utils';
import { BooksReducer } from '../reducers/BooksReducer';

export const ProductContext = createContext(null);

export default function ProductContextProvider(props) {
  const [products, dispatch] = useReducer(BooksReducer, [], () => {
    const localProducts = getLocalStorageItem('products');
    
    return localProducts ? localProducts : [];
  });
  return(
    <ProductContext.Provider value={{products, dispatch}}>
      {props.children}
    </ProductContext.Provider>
  );
}