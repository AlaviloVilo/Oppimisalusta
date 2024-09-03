import NewsCard from "../models/newsCard.js";

export const getAllNewsCards = async (req, res) => {
    try{
        const newsCards = await NewsCard.find();
        res.status(200).json(newsCards);
    } catch (err){
        res.status(500).json({message: err.message});
    }
}

export const getNewsCardById = async (req, res) => {
    try {
      console.log('got request for newsCard by id')
      const newsCard = await NewsCard.findById(req.params.id);
      if (!newsCard) {
        return res.status(404).json({ message: 'NewsCard not found' });
      }
      else{
        console.log('this is newsCard:', newsCard);
        res.status(200).json(newsCard);
      }
     
    } catch (err) {
      console.error('Error fetching newsCard:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };