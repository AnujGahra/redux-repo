import React from 'react'

import Product from './components/Product'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
    const productsList = useSelector((state) => state.products)
    console.log(productsList)
  return (
    <div className='products-container'>
        {
            productsList.map(({id, title, rating, price, image}) => (
                <Product key={id} title={title} rating={rating.rate} price={price} imageUrl={image} />
            ))
        }
    </div>
  )
}

export default App