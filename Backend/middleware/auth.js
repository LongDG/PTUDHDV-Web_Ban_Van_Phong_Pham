// Authentication Middleware
// Middleware để xác thực JWT token

const jwt = require('jsonwebtoken');

exports.protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Không có quyền truy cập, vui lòng đăng nhập'
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      req.user = { id: decoded.id };
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Token không hợp lệ'
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Token không hợp lệ'
    });
  }
};

