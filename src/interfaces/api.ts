import { Response } from 'express';
export interface ResponsBody {
    statusCode: number;
    status: string;
    data: any;
    error: any;
}

export interface SendResponse {
    res: Response;
    body: ResponsBody;
    includeBodyOnSlack: boolean;
}
