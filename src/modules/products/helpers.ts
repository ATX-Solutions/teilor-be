import { sendInfoEmail } from '../../helpers/email';
import { ProductResponse } from './interfaces';

const buildText = (data: ProductResponse) => {
    return `
<div>
    <h1>List of stores for product id: ${data.rows[0].CodProdus}</h1>
    <ul>
        ${data.rows.map((row) => {
            return `<li>${row.oras}: ${row.magazin} - ${row.adresa}</li>`;
        })}
    </ul>
</div>`;
};

export const sendProductEmail = async (data: ProductResponse, productId: string) => {
    try {
        const result = await sendInfoEmail({
            transporterType: 'gmail',
            to: 'parascarobert@gmail.com',
            subject: `List of stores for ${productId}`,
            text: data.rows.map((row) => `${row.magazin} -> ${row.adresa}`).join('\n'),
            html: buildText(data),
        });
        console.log(result);
    } catch (err) {
        console.error(err);
    }
};
