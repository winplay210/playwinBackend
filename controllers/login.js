
const User=require("../models/user")

exports.login=async(req,res)=>{

    try{

    console.log(req.body);
    const userObject = await User.find({ email: req.body.email });
        console.log(userObject);
  if (userObject && userObject.length>0&& userObject[0].password == req.body.password) {
    const token = userObject[0].generateAuthToken();
    res.json({
      token: token,
      _id: userObject[0]._id,
      name: userObject[0].name,
      email: userObject[0].email
    });
  } else {
    res.json({
      data: "Wrong Credentials"
    })
  }
}catch(e){
    console.log(e);
}

}