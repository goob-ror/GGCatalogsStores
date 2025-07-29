const db = require('../db');

/**
 * Product Photo CRUD Operations
 * Handles all product photo-related database operations
 */

// Get photos for a product
const getPhotosByProductId = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM product_photos WHERE product_id = ?', [req.params.productId]);
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Add photo to product
const createPhoto = async (req, res) => {
  try {
    const { photo_url } = req.body;
    const [result] = await db.execute(
      'INSERT INTO product_photos (product_id, photo_url) VALUES (?, ?)',
      [req.params.productId, photo_url]
    );
    res.status(201).json({ success: true, id: result.insertId, message: 'Photo added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete photo
const deletePhoto = async (req, res) => {
  try {
    const [result] = await db.execute('DELETE FROM product_photos WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Photo not found' });
    }
    res.json({ success: true, message: 'Photo deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getPhotosByProductId,
  createPhoto,
  deletePhoto
};
