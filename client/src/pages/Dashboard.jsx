import React from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import useProducts from '../hooks/useProducts';

function Dashboard() {
  const { products, editingProduct, addProduct, updateProduct, deleteProduct, setEditingProduct } = useProducts();

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Inventory Dashboard</h1>
        <ProductForm 
          onSubmit={editingProduct ? updateProduct : addProduct} 
          initialData={editingProduct} 
        />
        <ProductList 
          products={products} 
          onEdit={setEditingProduct} 
          onDelete={deleteProduct} 
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #2e3037, #764ba2)',padding: '40px 20px',
  },
  content: {
    maxWidth: '900px', margin: '0 auto',
    background: 'white',
    padding: '30px',borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  },
  title: {
    textAlign: 'center',marginBottom: '30px',
  },
};

export default Dashboard;