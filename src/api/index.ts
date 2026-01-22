import express, {request} from 'express';
import membersRoute from "./routes/members_routes";
import cors from "cors";
import {db} from "./db/dbConntection";
import {checkBody} from "./middleware/middleware.ts";
const app = express();
app.use(express.json());


const allowedOrigins = ['http://localhost:5173'];
db.on('error', (error: unknown) => console.log(error));
db.once('open', () => console.log('connected to db'));
app.use(cors({
    origin: (requestOrigin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!requestOrigin) return callback(null, true);
        if (allowedOrigins.includes(requestOrigin)) {
            return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));


app.use('/members' ,membersRoute);
app.listen(8000,()=> console.log('server is running'))