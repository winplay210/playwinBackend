
const User=require("../models/user")

exports.updatePassword=async(req,res)=>{
    const userObject = await User.find({ email: req.body.email });

  if (userObject && userObject.length>0) {
      console.log(userObject,"Ok",req.body.password);
        if(userObject[0].password==req.body.old){
            await User.updateOne({_id:userObject[0]._id},{$set:{password:req.body.password}});
            res.json({
                success:true,
                data:"Updated"
            })
        }else{
            res.json({
                success:false,
                data:"Old password does not match with the given input"
            })
            return;
        }
  } else {
    res.json({
      data: "Wrong Credentials"
    })
  }

}