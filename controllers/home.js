const history=require("../models/history")
exports.home=async(req,res)=>{
    try{
      let histList=await history.find({}).sort({creation_date:-1});
  

        res.json({
            success:true,
            data:histList[0]
        })
    }catch(e){
        console.log(e);
    }
}