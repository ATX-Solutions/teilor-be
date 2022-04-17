export interface BasicEmailOptions {
    transporterType: 'mailtrap' | 'gmail';
    to: string;
    subject: string;
    text: string;
    html: string;
}

// just an example of TS beauty
export interface AdvanceEmailOptions extends BasicEmailOptions {}
