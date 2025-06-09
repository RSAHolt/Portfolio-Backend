import express from "express"
import { getVisitorsCon,getVisitorIpCon,getVisitorTimestampCon,insertVisitorCon } from "../controller/mainController.js"

//initializing router using express
const router = express.Router()

router.get('/',getVisitorsCon)
router.get('/ip/:ip',getVisitorIpCon)
router.get('/timestamp/:timestamp',getVisitorTimestampCon)
router.post('/',insertVisitorCon)

export default router