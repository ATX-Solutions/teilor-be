import axios from 'axios';
import { Request, Response } from 'express';

import { sendInfoEmail } from '../../helpers/email';

export const findById = async (req: Request, res: Response) => {
    if (!req.params.id) {
    }

    console.log(req.params.id); // 54270
    try {
        const result = await sendInfoEmail({
            transporterType: 'gmail',
            to: 'parascarobert@gmail.com',
            subject: 'Test',
            text: 'test',
            html: '<h1>test</h1>',
        });
        console.log(result);
    } catch (err) {
        console.error(err);
    }

    return res.status(200).json({ message: 'ok' });

    // try {
    //     const { data } = await axios.get(`https://smeurei.teilor.ro/service/stoc_magazin?cod_produs=${req.params.id}`);
    //     console.log(data);

    //     return res.status(200).json(data);
    // } catch (e) {
    //     console.error(e.toJSON());
    //     return res.status(500).json({ error: 'Error' });
    // }

    // return res.status(200).json({ message: 'All good' });
};
