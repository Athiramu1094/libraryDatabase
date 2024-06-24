const User = require("../model/userModel");
const bcrypt = require('bcrypt'); 
const saltRounds = 10; 

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(404).send('User not found');
  }
};

const getAUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).exec();
    res.json(user);
  } catch (error) {
    res.status(404).send('User not found');
  }
};

const addAUser = async (req, res) => {
  console.log(req.body);
  const userData = req.body;
  const hash  = bcrypt.hashSync(userData.password, saltRounds);
  
  const user  = new User({
    ...userData,
    password:hash
  })
    console.log(user); 
  await user.save();
  res.json(user);
};

const updateAUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(404).send('User not found');
  }
};

const deleteAUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).send('Deleted');
  } catch {
    res.status(404).send('User not found');
  }
};

module.exports = {
  getAllUsers,
  getAUser,
  addAUser,
  updateAUser,
  deleteAUser
};
