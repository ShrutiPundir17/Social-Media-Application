import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
// require('events').EventEmitter.defaultMaxListeners = 20;


//Routes


const app = express();

//middleware
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

dotenv.config()


mongoose
.connect(
    process.env.MONGO_DB, {useUnifiedTopology: true}
)
.then(()=>app.listen(process.env.PORT, ()=>console.log(`Listening at ${process.env.PORT}`))).catch((error)=>console.log(error));

//usage of route
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)
