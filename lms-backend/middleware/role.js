module.exports = (requiredRole) => {
  return (req, res, next) => {
    if (!req.userId) return res.status(401).json({ message: "Unauthorized" });
    const prisma = require('../services/prisma.service');
    prisma.user.findUnique({ where: { id: req.userId } })
      .then(user => {
        if (user?.role !== requiredRole) {
          return res.status(403).json({ message: "Forbidden: insufficient permissions" });
        }
        next();
      })
      .catch(() => res.status(500).json({ message: "Internal Server Error" }));
  };
};