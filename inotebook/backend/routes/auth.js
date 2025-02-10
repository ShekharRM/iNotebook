
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');
const JWT_SECRET = 'shhhhh';

// ROUTE 1:creating a user with POST "/api/auth/createuser". Doesn't require login
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {
    // if tehre are errors, return bad request and the errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    try {
        //   check whether the user with this email exists already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success, error: "Sorry a user with this email already exists" });
        }
        const salt=await bcrypt.genSalt(10);
        const secPass=await bcrypt.hash(req.body.password,salt);
        // create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email, 
            password: secPass
        });
        const data={
            user:{
                id:user.id
            }};
        const autToken= jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success,autToken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
});

//ROUTE 2:Login a user with POST "/api/auth/login". Doesn't require login
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); 
    }

    const {email,password}=req.body;
    try {
        let user= await User.findOne({email});
        if(!user){
            success=false;
            return res.status(500).json({ success,error:"Please try to login with correct credentials"});
        }
        const passwordCompare=await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success=false;
            return res.status(500).json({success,error:"Please try to login with correct credentials"});
        }
        const data={
            user:{
                id:user.id
            }};
        const autToken= jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success,autToken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
});  

// ROUTE 3: Get loggedin user details using: POST "/api/auth/getuser". Login required
router.post('/getuser',fetchUser, async (req, res) => {

try {
    const userId=req.user.id;
    const user=await User.findById(userId).select("-password");
    res.send(user);
} catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
});

module.exports = router;  