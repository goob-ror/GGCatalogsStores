const db = require('../db');
const bcrypt = require('bcrypt');

const adminLogin = async (req, res) => {    
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, error: 'Username and password are required' });
    }

    if (password.length < 8) {
      return res.status(400).json({ success: false, error: 'Password must be at least 8 characters' });
    }

    const [admins] = await db.execute('SELECT * FROM admins WHERE username = ?', [username]);
    const admin = admins[0];

    const hashToCompare = admin ? admin.password_hash : '$2b$10$N9qo8uLOickgx2ZMRZoMye.FQBY.TgLpfI9/uXaKWlgBKT.5O8Pxa';
    const isValidPassword = await bcrypt.compare(password, hashToCompare);

    if (!admin || !isValidPassword) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    req.session.cookie.maxAge = 1000 * 60 * 60 * 24;
    req.session.admin = { id: admin.id, username: admin.username };

    res.json({ success: true, message: 'Admin logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

const adminLogout = async (req, res, next) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ success: false, error: 'Could not log out' });
      }
      res.json({ success: true, message: 'Admin logged out successfully' });
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
    adminLogin,
    adminLogout
};