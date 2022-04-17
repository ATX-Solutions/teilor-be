import express from 'express';

import { findById } from './controller';

const productsRouter = express.Router();

productsRouter.get('/:id', findById);

export { productsRouter };
