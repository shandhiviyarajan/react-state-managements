import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetProducts } from '../redux/products.action';



const AllProducts = () => {

  const dispatchAction = useDispatch();

  // @ts-ignore
  const all_products = useSelector(state=>state?.products.all_products);


  React.useEffect(()=>{
    dispatchAction(actionGetProducts(null))
  },[])

  return (
    <div>
      <h1>All Products</h1>
      <p>
        {
          JSON.stringify(all_products)
        }
      </p>
    </div>
  );
};


export {
    AllProducts
}