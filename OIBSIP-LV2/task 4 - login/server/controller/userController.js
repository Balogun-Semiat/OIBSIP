const mongoose = require('mongoose');
const User = require('../models/userSchema')
const bcrypt = require('bcrypt')

const registerUser = async(req, res) => {
    const { userName, password, email } = req.body;
    try {
        if(!userName || !password || !email){
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const hashedPassword = bcrypt.hash(password)
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: 'Email already exists' });
        }

        const newUser = await User.create({
            userName,
            password:hashedPassword,
            email
        })
        console.log(password)
        res.status(201).json({ message: 'User registered successfully', user: newUser });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });   
    }
}


module.exports = {
    registerUser
};