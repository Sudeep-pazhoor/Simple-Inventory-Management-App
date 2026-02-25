const express = require('express');
const jwt = require('jsonwebtoken');
const Product = require('../models/Product');

const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

router.use(authMiddleware);

router.get('/', async (req, res) => {
  const products = await Product.find({ owner: req.user.id });
  res.json(products);
});

router.post('/', async (req, res) => {
  const product = new Product({ ...req.body, owner: req.user.id });
  await product.save();
  res.status(201).json(product);
});

router.put('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ error: 'Not found' });
  if (!product.owner || product.owner.toString() !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
  Object.assign(product, req.body);
  await product.save();
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ error: 'Not found' });
  if (!product.owner || product.owner.toString() !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
  await product.remove();
  res.json({ message: 'Deleted' });
});

module.exports = router;