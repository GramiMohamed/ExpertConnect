const express = require("express");
const multer = require("multer");
const path = require("path");
const User = require("../models/User");
const authMiddleware = require("../middlewares/authMiddleware"); // Importation du middleware

const router = express.Router();

// Multer configuration for file uploads (expert documents)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../uploads/");
    cb(null, uploadPath); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

const upload = multer({ storage });

// Become Expert Route
router.post(
  "/become-expert",
  authMiddleware,
  upload.single("documents"),
  async (req, res) => {
    const { expertiseDomain, experience, rates } = req.body;
    const documents = req.file ? req.file.path : null; // Save file path

    if (!expertiseDomain || !experience || !rates || !documents) {
      return res
        .status(400)
        .json({ message: "Tous les champs doivent être remplis" });
    }

    try {
      const user = await User.findById(req.userId); // Utilisation de l'ID récupéré dans le middleware
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }

      const newExpert = new Expert({
        email: user.email,
        expertiseDomain,
        experience,
        rates,
        documents,
      });

      await newExpert.save();

      res
        .status(200)
        .json({
          message: "Vous êtes maintenant un expert !",
          expert: newExpert,
        });
    } catch (error) {
      console.error("Erreur lors de la création de l'expert :", error);
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  }
);

module.exports = router;
