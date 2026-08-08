import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

export async function POST(request: Request) {
  try {
    const { name, email, phone, type, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Vita Inventio <onboarding@resend.dev>',
      to: 'vitainventio@gmail.com',
      subject: `New Lead: ${name} (${type || 'Not Specified'})`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #050b18; border-bottom: 2px solid #e8ff00; padding-bottom: 10px; font-weight: bold;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Project Type:</strong> ${type || 'Not specified'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #050b18; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold;">Message:</p>
            <p style="margin: 5px 0 0;">${message.replace(/\n/g, '<br />')}</p>
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 11px; color: #888;">This email was sent via the Vita Inventio Contact Form API integration.</p>
        </div>
      `
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    console.error('Inquiry submission crashed:', err)
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 })
  }
}
