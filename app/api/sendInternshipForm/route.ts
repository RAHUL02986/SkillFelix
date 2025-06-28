import { NextResponse } from 'next/server';
import { IncomingForm, File as FormidableFile } from 'formidable';
import { Readable } from 'stream';
import { readFileSync } from 'fs';
import nodemailer from 'nodemailer';

// Disable bodyParser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Convert Next.js Web Request -> Node-compatible stream
async function convertToNodeRequest(request: Request) {
  const contentType = request.headers.get('content-type') || '';
  const contentLength = request.headers.get('content-length') || '';

  const buffer = Buffer.from(await request.arrayBuffer());
  const stream = Readable.from(buffer);

  return Object.assign(stream, {
    headers: {
      'content-type': contentType,
      'content-length': contentLength,
    },
  });
}

export async function POST(req: Request) {
  const nodeReq = await convertToNodeRequest(req);

  const form = new IncomingForm({ multiples: false, keepExtensions: true });

  const { fields, files }: { fields: any; files: { file?: FormidableFile } } = await new Promise((resolve, reject) => {
    form.parse(nodeReq as any, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  const { firstName, lastName, email, mobile, location, message } = fields;
  const uploadedFile = files?.file;

  if (!firstName || !lastName || !email || !mobile || !location) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
     user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, 
    },
  });

  const mailOptions: any = {
    from: process.env.MAIL_USER,
    to: 'skillfelix026@gmail.com',
    subject: `New Internship Application - ${firstName} ${lastName}`,
    html: `
      <h2>Internship Application</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Message:</strong> ${message || '-'}</p>
    `,
  };

  if (uploadedFile?.filepath) {
    mailOptions.attachments = [
      {
        filename: uploadedFile.originalFilename || 'resume.pdf',
        content: readFileSync(uploadedFile.filepath),
      },
    ];
  }

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
  } catch (err) {
    console.error('Nodemailer error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
