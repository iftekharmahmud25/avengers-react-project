import React from 'react';
import './Cart.css'

const Cart = ({selectedActors,totalCost}) => {
    return (
        <div>
             
             <h3 className="text-4xl text-white">Total Actors {selectedActors.length}</h3>
             
             {
                 selectedActors.map((actor) =>(
                    
                      <li className='text-2xl text-white'>{actor.name}</li>
                 ))
             }
        </div>
    );
};

export default Cart;