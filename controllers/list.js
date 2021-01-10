const history = require("../models/history");

exports.list =async (req, res) => {
  try {
    let historyList ;
    let dumbVari;
    if (req.params.pageState == 0) {
      historyList = await history.find({}).sort({creation_date:-1}).limit(10);
    } else {
        let val=parseInt(req.params.pageState);
      historyList = await history.find({}).skip(val).sort({creation_date:-1}).limit(10);
    }

    res.json({
      success: true,
      data: historyList,
    });
  } catch (e) {
    console.log("History error", e);
    res.json({
      success: false,
      data: "Internal server error",
    });
  }
};
