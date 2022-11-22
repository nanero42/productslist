import { useContext, useEffect, useReducer, useState } from 'react';
import { ProductContext } from '../../contexts/ProductsContext';
import { CREATE_BOOK } from '../../reducers/BooksReducer';
import { Card } from './components';
import './index.scss';
import { v4 as uuidv4 } from 'uuid';

export default function Products(props) {
  const { products, dispatch } = useContext(ProductContext);
  const [product, setProduct] = useState({
    id: '',
    desc: '',
    price: '',
  });
  const productInput = e => {
    setProduct({
      ...product,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };
  const productSubmit = e => {
    e.preventDefault();
    if (product.desc && product.price) {
      dispatch({type: CREATE_BOOK, payload: {
        id: product.id,
        desc: product.desc,
        price: product.price,
      }})
      e.target.reset();
      setProduct('');
    }
  };

  return(
    <div className="products">
      <header className="products__header">
        <h1 className="products__title">Products</h1>
      </header>
      <div className="products__container">
        <main className="products__content">
          {products?.map(item => <Card key={item.id} id={item.id} desc={item.desc} price={item.price} />)}
          <form onSubmit={productSubmit} className="products__form">
            <div className="products__container">
              <input name="desc" onInput={productInput} defaultValue={product.desc} placeholder="Description" className="products__input"></input>
              <input name="price" onInput={productInput} defaultValue={product.price} placeholder="Price in $" className="products__input"></input>
              <button type="submit" className="products__button">add a product</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}