import express, { Request, Response } from 'express';

import { findById } from './controller';
import { sendPredefinedResponse } from '../../helpers/api';
import { StatusCodes } from 'http-status-codes';

const productsRouter = express.Router();

productsRouter.use((req: Request, res: Response, next) => {
    if (req.headers.authorization !== `Bearer ${process.env.BEARER_TOKEN}`) {
        return sendPredefinedResponse(res, StatusCodes.UNAUTHORIZED);
    }

    next();
});

productsRouter.get('/:id', findById);

export { productsRouter };
