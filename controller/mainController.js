import {getVisitors,getVisitorIp,getVisitorTimestamp,insertVisitor} from '../model/mainModel.js'

//getVisitors controller
const getVisitorsCon = async(req,res) => {
    res.json({visitors:await getVisitors()})
};

//getVisitorIp controller
const getVisitorIpCon = async(req,res) => {
    res.json({visitors:await getVisitorIp(req.params.id)})
}

//getVisitorTimestamp controller
const getVisitorTimestampCon = async(req,res) => {
    res.json({visitors:await getVisitorTimestamp(req.params.timestamp)})
}

//insertVisitor controller
const insertVisitorCon = async (req,res) => {
    let {ip} = req.body
    res.json({visitors:await insertVisitor(ip)})
}

export {getVisitorsCon,getVisitorIpCon,getVisitorTimestampCon,insertVisitorCon}