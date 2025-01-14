import Author from "../models/authorModel.js";
import mongoose from "mongoose";
const getAllAuthors =  async(req, res, next) => {
  try {
    const authors = await Author.find({});
    res.json(authors);
    
   
    
    
  } catch (error) {
    console.error(`Error fetching  authors: ${error}`)
    next(error);
  }
};


const getAuthorById = async (req, res) => {
  try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          return res.status(400).json({ message: "ID autore non valido." }); // 400 Bad Request
      }

      const author = await Author.findById(req.params.id);

      if (!author) {
          return res.status(404).json({ message: "Autore non trovato." }); // 404 Not Found
      }

      res.json(author);
  } catch (error) {
      console.error("Errore nel backend:", error); // Log dell'errore completo
      res.status(500).json({ message: "Errore interno del server." });
  }

}
const createAuthor = async (req, res) => {
  try {
      const newAuthor = await Author.create(req.body);
      res.status(201).json(newAuthor);
  } catch (error) {
      console.error("Errore nel backend:", error); // Log dell'errore completo
      res.status(500).json({ message: "Errore interno del server." });
  }
};
const putAuthor = async (req, res) => {
  try {
    const id =req.params.id
      const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, 
      res.json("autore aggiornato"));
  } catch (error) {
      console.error("Errore nel backend:", error); // Log dell'errore completo
      res.status(500).json({ message: "Errore interno del server." });
  }
};

const deleteAuthor = async (req, res) => {
  try {
      const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
      res.json(deletedAuthor);
  } catch (error) {
      console.error("Errore nel backend:", error); // Log dell'errore completo
      res.status(500).json({ message: "Errore interno del server." });
  }
};

export {getAllAuthors, getAuthorById,createAuthor,putAuthor,deleteAuthor};
