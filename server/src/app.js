require('dotenv/config');const express=require('express');const cors=require('cors');const helmet=require('helmet');const mongoose=require('./database');const app=express();
app.disable('x-powered-by');app.use(helmet());app.use(cors({origin:process.env.CORS_ORIGIN || 'http://localhost:5173'}));app.use(express.json({limit:'32kb'}));app.use(require('./router/routes'));
app.use((error,req,res,next)=>res.status(500).json({error:'Request could not be completed'}));
async function start(){await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/news',{serverSelectionTimeoutMS:5000});const server=app.listen(Number(process.env.SERVER_PORT || 8080));const close=()=>server.close(()=>mongoose.disconnect());process.once('SIGTERM',close);process.once('SIGINT',close);}
if(require.main===module)start().catch(()=>{console.error('Could not initialize API/database');process.exitCode=1;});module.exports=app;
