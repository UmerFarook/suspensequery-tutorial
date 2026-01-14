import express, {request} from 'express';
import membersRoute from "./routes/members_routes";
import cors from "cors";
import {db} from "./db/dbConntection";
const app = express();
app.use(express.json());

db.on('error',(error:unknown)=>console.log(error))
db.once('open',()=>console.log('connected to db'))
app.use(cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true
  }));
app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
  });

app.use('/members',membersRoute);
app.listen(8000,()=> console.log('server is running'))