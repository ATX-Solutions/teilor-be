export interface BasicEmailOptions {
    to: string;
    text: string;
    html: string;
    subject: string;
    transporterType: 'mailtrap' | 'gmail';
}

// just an example of the TS beauty.
// The Basic interface can be extended with additional properties for other use cases.
export interface AdvanceEmailOptions extends BasicEmailOptions {}
