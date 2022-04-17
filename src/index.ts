import cors from 'cors';
import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();

import { productsRouter } from './modules/products';

const REQUIRED_ENV_VARS = {
    PORT: process.env.PORT,
    DEFAULT_SENDER: process.env.DEFAULT_SENDER,
    MAILTRAP_USER: process.env.MAILTRAP_USER,
    MAILTRAP_PASSWORD: process.env.MAILTRAP_PASSWORD,
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
};

if (Object.values(REQUIRED_ENV_VARS).some((x) => !x)) {
    console.error(`Default env variables are not defined correctly!\nDefined variables:`, REQUIRED_ENV_VARS);
    process.exit(1);
}

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productsRouter);

const PORT: number = parseInt(process.env.PORT as string, 10);
app.listen(PORT, () => {
    console.log(`All required variables are defined.\nListening on port ${PORT}`);
});

app.get('/api/healthcheck', (req: Request, res: Response) => res.json({ message: 'All good!' }));
