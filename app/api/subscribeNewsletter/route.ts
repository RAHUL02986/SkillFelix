import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
    to: "skillfelix026@gmail.com",
      subject: 'New Newsletter Subscriber',
      text: `You have a new subscriber: ${email}`,
    });

    return NextResponse.json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Newsletter Error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
