import { Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { ResponsBody, SendResponse } from '../interfaces/api';

export const sendResponse = ({ res, body }: SendResponse) => {
    return res.status(body.statusCode).json(body);
};

export const sendPredefinedResponse = (res: Response, statusCode: number) => {
    let body: ResponsBody;

    switch (statusCode) {
        case StatusCodes.UNAUTHORIZED: {
            body = { statusCode, data: null, error: ReasonPhrases.UNAUTHORIZED, status: ReasonPhrases.UNAUTHORIZED };
            break;
        }
        case StatusCodes.NOT_FOUND: {
            body = { statusCode, data: null, error: ReasonPhrases.NOT_FOUND, status: ReasonPhrases.NOT_FOUND };
            break;
        }
        case StatusCodes.UNPROCESSABLE_ENTITY: {
            body = {
                statusCode,
                data: null,
                error: ReasonPhrases.UNPROCESSABLE_ENTITY,
                status: ReasonPhrases.UNPROCESSABLE_ENTITY,
            };
            break;
        }
        case StatusCodes.INTERNAL_SERVER_ERROR:
        default: {
            body = {
                statusCode,
                data: null,
                error: ReasonPhrases.INTERNAL_SERVER_ERROR,
                status: ReasonPhrases.INTERNAL_SERVER_ERROR,
            };
            break;
        }
    }

    return sendResponse({ res, body });
};
