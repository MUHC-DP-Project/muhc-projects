import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import helmet from "helmet";
const app = express();
const port = 8080; // default port to listen

// allow cors and security headers
app.use(cors());
app.use(helmet());
app.use(express.json());

dotenv.config();

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );