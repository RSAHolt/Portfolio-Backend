//imported npm installed modules
import express from 'express'
import cors from 'cors'
//imported routes
import mainRouter from './routes/mainRouter.js'

//setup for frontend access of api using cors and express
const PORT = process.env.PORT || 3000
const app = express()
app.use(cors({
    origin:'https://dev-lukesmart.pantheonsite.io'
}));
app.use(express.json());

//path for imported files
app.use('/api',mainRouter);

//protected paths if needed for things like login pages
// app.get('/protected',authenticateJWT, (req,res) => {
//     res.json({message:'This is a protected route', user: req.user});
// });

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT)
})