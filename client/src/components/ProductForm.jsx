import React, { useState, useEffect } from 'react';

function ProductForm({ onSubmit, initialData }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description || '');setPrice(initialData.price);
      setQuantity(initialData.quantity);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, description, price, quantity };
    if (initialData) product._id = initialData._id;
    onSubmit(product);
    setName('');setDescription('');
    setPrice(0);setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit} >
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="number" min="0" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
      <input type="number" min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
      <button type="submit" className="btn btn-warning rounded-pill">{initialData ? 'Update' : 'Add'} Product</button>
      
    </form>
  );
}
export default ProductForm;