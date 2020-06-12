import React, {
  useContext
} from 'react';

import CartContext from './CartContext';


const AppContext: React.FC = () => {
  const { products } = useContext(CartContext);


  return (
    <div>
      {products?.map(product => product.id)}
    </div>
  )
}

export default AppContext;