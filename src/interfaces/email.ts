export enum TRANSPORTER_TYPE {
    MAILTRAP,
    GMAIL,
}
export interface BasicEmailOptions {
    to: string;
    text: string;
    html: string;
    subject: string;
    transporterType: TRANSPORTER_TYPE;
}

// just an example of the TS beauty.
// The Basic interface can be extended with additional properties for other use cases.
export interface AdvanceEmailOptions extends BasicEmailOptions {}
