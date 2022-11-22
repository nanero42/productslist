import { useContext } from 'react';
import { ProductContext } from '../../../../contexts/ProductsContext';
import { DELETE_BOOK } from '../../../../reducers/BooksReducer';
import './index.scss';

export default function Card(props) {
  const {id, desc, price} = props;
  const { dispatch } = useContext(ProductContext);
  const deleteProduct = e => {
    dispatch({type: DELETE_BOOK, payload: {id}});
  }
  return(
    <li className="card">
      <div className="card__desc">{desc}</div>
      <div className="card__price">{price}</div>
      <div className="card__burron-container">
        <button className="card__button card__button-change">change</button>
        <button onClick={deleteProduct} className="card__button card__button-delete">delete</button>
      </div>
    </li>
  );
}