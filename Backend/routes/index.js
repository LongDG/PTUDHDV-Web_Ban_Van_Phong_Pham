const express = require('express');
const router = express.Router();

// Import routes
const authRoutes = require('./authRoutes');
// const userRoutes = require('./userRoutes');
// const productRoutes = require('./productRoutes');

// Use routes
router.use('/auth', authRoutes);
// router.use('/users', userRoutes);
// router.use('/products', productRoutes);

// Test route
router.get('/test', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API route đang hoạt động!' 
  });
});

module.exports = router;

