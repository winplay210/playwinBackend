const history = require("../models/history");

exports.winnerPage=async(req,res)=>{
try{
console.log(req.params.date,"here");
let winnerNumber=await history.find({newDate:req.params.date});

if(winnerNumber && winnerNumber.length>0){
    res.json({
        data:winnerNumber
    })
}
}catch(e){
    console.log(e);
}

}