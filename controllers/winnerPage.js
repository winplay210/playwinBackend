const history = require("../models/history");

exports.winnerPage=async(req,res)=>{
try{
console.log(req.params.date,"here");
let winnerNumber=await history.find({newDate:req.params.date});
console.log(winnerNumber)
if(winnerNumber && winnerNumber.rowLength>0){
    res.json({
        data:winnerNumber
    })
}
}catch(e){
    console.log(e);
}

}