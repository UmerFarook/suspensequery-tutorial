import express, {request} from 'express';
import membersRoute from "./routes/members_routes";
import cors from "cors";
import {db} from "./db/dbConntection";
const app = express();
app.use(express.json());


const allowedOrigins = ['"http://localhost:5173"']
db.on('error',(error:unknown)=>console.log(error))
db.once('open',()=>console.log('connected to db'))
app.use(cors({
    origin: (requestOrigin :string, callback)=>{
        if (!origin) return callback(null, true);
        if(allowedOrigins.includes(requestOrigin)){
            return callback(null,true)
        } else {
            return callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
  }));
app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
  });

app.use('/members',membersRoute);
app.listen(8000,()=> console.log('server is running'))