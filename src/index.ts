import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import helmet from "helmet";
import connectDB from "./database/db_config";
import {projectRouter} from './routes/project';

const app = express();
const port = process.env.PORT || 8080; // default port to listen

// allow cors and security headers
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

dotenv.config();

// connect to database
connectDB(process.env.MONGO_DB_URI);

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.use('/projects', projectRouter);

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );