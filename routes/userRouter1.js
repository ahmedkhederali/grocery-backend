const router=require('express').Router();
const {register,refreshToken,login,logout,getUser, getUserById,}= require('../controllers/userCtrl')
const auth=require("../middleware/auth")
router.post('/register',register)
router.post('/login',login)
router.get('/logout',logout)
router.get('/refresh_token',refreshToken)
router.get("/infor",auth,getUser)
router.route('/user/:id').get(getUserById);



module.exports=router;