const history=require("../models/history")
const moment=require('moment');
exports.winner=async(req,res)=>{
    try{
      
            let date=moment().unix().toString();
                req.body.creation_date=date;
       await history.collection.insertOne(req.body);

       res.json({
           success:true,
           data:"Inserted"
       })
    }catch(e){
        console.log(e);
    }
}