const mongoose = require('mongoose');

// Définir le schéma pour l'expert
const expertSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // L'email doit être unique
    },
    expertiseDomain: {
      type: String,
      required: true, // Le domaine d'expertise est requis
    },
    experience: {
      type: String,
      required: true, // L'expérience professionnelle est requise
    },
    rates: {
      type: String,
      required: true, // Les tarifs sont requis
    },
    documents: {
      type: String, // Vous pouvez stocker l'URL ou le chemin du fichier
      required: true, // Les documents sont requis
    },
  },
  {
    timestamps: true, // Ajouter des champs createdAt et updatedAt
  }
);

// Créer le modèle à partir du schéma
const Expert = mongoose.model('Expert', expertSchema);

// Exporter le modèle pour l'utiliser dans d'autres fichiers
module.exports = Expert;
