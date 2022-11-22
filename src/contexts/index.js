import { createContext } from 'react';
import ProductContextProvider from './ProductsContext';

export const MasterContext = createContext();

export default function MasterContextProvider(props) {
  return(
    <MasterContext.Provider value>
      <ProductContextProvider>
        {props.children}
      </ProductContextProvider>
    </MasterContext.Provider>
  );
}