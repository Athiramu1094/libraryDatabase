const bcrypt = require('bcrypt');
const User = require("../model/userModel")
const jwt = require('jsonwebtoken')


const login = async (req,res)=>{
    
    const {email,password} = req.body
    
    const user = await User.findOne({
        email:email
    })

    if(!user){
        return res.status(401).send("User not found")
    }
   
    const passwordsMatch = bcrypt.compareSync(password, user.password) 
    
  
    if(passwordsMatch){
        var token = jwt.sign({_id:user._id, email:user.email },'45880ae501a64c748520684d21e81e1929fbbaf986d2b3b9aba2f9fdbd218df576427ee76a9d12e23fc92388adc8d32bff0478d6fdc7a5f59f3fff472223da35',
             {expiresIn:'1h'});
        res.cookie('token', token)
        res.send("Login success")
    }

    else{
        return res.status(401).send("Password does not match")
    
    }
}


const verifyLogin = async(req, res) =>{
    if(req.cookies.token){
        res.send("logged in")
    }
    else{
        res.status(401).send("Unauthorized access!")
    }

}

const logout = async(req, res)=>{
    res.clearCookie('token')
    res.send("Logged out")

}



module.exports ={
    login,
    verifyLogin,
    logout
}