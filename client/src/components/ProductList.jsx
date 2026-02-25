import React from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';

function ProductList({ products, onEdit, onDelete }) {
  return (
    <table className="table table-striped table-hover">
      <thead className="table-light">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
              <button 
                className="btn btn-success rounded-pill me-2" 
                onClick={() => onEdit(product)}
                title="Edit"
  >
                  <PencilFill size={16} className="me-1" />
                
              </button>
              <button 
                className="btn btn-danger rounded-pill"  onClick={() => onDelete(product._id)} title="Delete"
              >
                <TrashFill size={16} className="me-1" /> 
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;