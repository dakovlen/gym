import React, { createElement as e, useState } from 'react';
import { Product } from './components/Product'
import { products } from './data/products'

  // return e('div', {className: 'container'}, [
  //   e('h1', {className: 'h1'}, `${count}`),
  //   e('button', {
  //     className: 'py-2 px-2 border',
  //     onClick: () => setCount(count +1)
  //   }, 'Read more'),
  // ])

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Product product={products[0]} />
      <Product product={products[1]} />
    </div>
  );


}

export default App;
