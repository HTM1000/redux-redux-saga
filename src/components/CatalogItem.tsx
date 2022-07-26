import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { IState } from '../store';
import { addProductToCartResquet } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

function CatalogItem({ product }: CatalogItemProps){
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartResquet(product))
  }, [dispatch, product])

  return (
    <article>
    <strong>{product.title}</strong> {" - "}
    <span>{product.price}</span> {"  "}

    <button type="button" onClick={handleAddProductToCart}>Comprar</button>

    { hasFailedStockCheck && <span style={{ color: 'red'}}>Falta de estoque</span>}

  </article>
  );
}

export default CatalogItem;