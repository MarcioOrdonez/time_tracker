import express from 'express';
import { config } from 'dotenv';

import routes from './routes';

const port = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(routes);

console.log(`App running on port ${port}`);
app.listen(port);