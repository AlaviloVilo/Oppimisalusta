import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch (err){
        res.status(500).json({message: err.message});
    }
}

export const getUserById = async (req, res) => {
    try {
      console.log('got request for user by id')
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      else{
        console.log('this is user:', user);
        res.status(200).json(user);
      }
     
    } catch (err) {
      console.error('Error fetching user:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
