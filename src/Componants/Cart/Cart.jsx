import React from 'react';
import './Cart.css'

const Cart = ({selectedActors,totalCost,remaining}) => {
    return (
        <div>
             <h3 className="text-3xl text-green-300">Total Cost : ${totalCost}</h3>
             <h3 className="text-3xl text-green-300">Total Remaining : ${remaining}</h3>
             <h3 className="text-3xl text-green-300">Total Actors {selectedActors.length}</h3>
             
             {
                 selectedActors.map((actor) =>(
                    
                      <li className='text-2xl text-green-300'>{actor.name}</li>
                 ))
             }
        </div>
    );
};

export default Cart;