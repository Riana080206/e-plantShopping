import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ plantsArray }) {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
  dispatch(addItem(plant));

  setAddedItems((prev) => [
    ...prev,
    plant.name
  ]);
};

  return (
    <div className="product-grid">

      {/* Loop through each category */}
      {plantsArray.map((category) => (

        <div key={category.category}>

          <h2>{category.category}</h2>

          <div className="plants-container">

            {/* Loop through plants in this category */}
            {category.plants.map((plant) => (

             <div className="plant-card" key={plant.name}>

                <img
                  src={plant.image}
                  alt={plant.name}
                />

                <h3>{plant.name}</h3>

                <p>{plant.description}</p>

                <p>{plant.cost}</p>

               <button
  onClick={() => handleAddToCart(plant)}
  disabled={addedItems.includes(plant.name)}
>
  {addedItems.includes(plant.name)
    ? 'Added to Cart'
    : 'Add to Cart'}
</button>

              </div>

            ))}

          </div>
        </div>

      ))}
    </div>
  );
}

export default ProductList;
