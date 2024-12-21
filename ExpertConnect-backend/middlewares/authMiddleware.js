const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ success: false, message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;  // Add user ID to request
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
