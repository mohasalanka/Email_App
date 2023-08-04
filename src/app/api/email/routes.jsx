import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { WelcomeEmail } from '../../../../src/emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);
    
export async function POST(){
    await resend.sendEmail({
        from: 'mohasalanka2020@gmail.com',
        to: 'chweyamark@gmail.com',
        subject: 'hello world',
        react: WelcomeEmail({
            firstName: 'Mohamed'
        }),
    });

    return NextResponse.json({
        status: 'Ok'
    })

}