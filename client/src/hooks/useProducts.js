import { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/api';
import { useAuth } from './useAuth';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      setProducts([]);
      return;
    }
    fetchProducts();
  }, [token]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error('Failed to fetch products');
    }
  };

  const handleAdd = async (product) => {
    await addProduct(product);
    fetchProducts();
  };

  const handleUpdate = async (product) => {
    await updateProduct(product._id, product);
    fetchProducts();
    setEditingProduct(null);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return {
    products,
    editingProduct,
    addProduct: handleAdd,
    updateProduct: handleUpdate,
    deleteProduct: handleDelete,
    setEditingProduct,
  };
};

export default useProducts;