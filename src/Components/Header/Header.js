import React from 'react'
import Card from '../UI/Card';

const Header = () => {
  return (
    <Card>
    <div>
      <label>TshirtName</label>
      <input type='text'></input>

      <label>Description</label>
      <input type='text'></input>

      <label>Price</label>
      <input></input>

      <label>Quantity Available

        <label>L</label>
        <input
         type='number'
         defaultValue={100}

        />
        <label>M</label>
        <input type='number' defaultValue={20}/>
        <label>S</label>
        <input type='number' defaultValue={30}/>
      </label>
      <button >Add Products</button>
      </div>
    
    </Card>
  )
}
 
export default Header;