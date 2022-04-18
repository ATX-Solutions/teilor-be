import { ProductResponse } from './interfaces';
import { sendInfoEmail } from '../../helpers/email';
import { TRANSPORTER_TYPE } from '../../interfaces/email';
import { sendSlackNotification } from '../../helpers/slack';

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

export const sendProductEmail = async (data: ProductResponse, productId: string, to: string) => {
    try {
        const result = await sendInfoEmail({
            transporterType: process.env.TRANSPORTER_TYPE as unknown as TRANSPORTER_TYPE,
            to,
            subject: `List of stores for ${productId}`,
            text: data.rows.map((row) => `${row.magazin} -> ${row.adresa}`).join('\n'),
            html: buildText(data),
        });

        await sendSlackNotification(
            `[🟢] Email sent successfully to: ${to}. TRANSPORTER_TYPE: ${process.env.TRANSPORTER_TYPE}.`,
            result,
        );

        console.log(result);
    } catch (err) {
        await sendSlackNotification(
            `[🔴] Email failed. To: ${to}. TRANSPORTER_TYPE: ${process.env.TRANSPORTER_TYPE}.`,
            err,
        );
        console.error(err);
    }
};
