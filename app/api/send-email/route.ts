// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, company, employees, email, message } = await request.json();

    // Validación básica de campos recibidos
    if (!name || !company || !employees || !email || !message) {
      return NextResponse.json({ error: 'Campos faltantes' }, { status: 400 });
    }

    // Envío usando Resend API
    const data = await resend.emails.send({
      from: 'Óptica Nexo Web <onboarding@resend.dev>', // Al verificar tu dominio propio podrás cambiarlo por ej. (contacto@opticanexo.cl)
      to: 'serviciosopticosintegrales.mt@gmail.com',
      subject: `Nuevo Operativo Solicitado: ${company}`,
      html: `
        <div style="font-family: sans-serif; color: #1e293b; max-w: 600px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 24px; rounded: 12px;">
          <h2 style="color: #0f172a; border-b: 1px solid #f1f5f9; padding-bottom: 12px; font-size: 20px;">Nueva Solicitud de Cotización B2B</h2>
          
          <p style="font-size: 14px; margin: 16px 0;"><strong>Nombre de Contacto:</strong> ${name}</p>
          <p style="font-size: 14px; margin: 16px 0;"><strong>Empresa / Organización:</strong> ${company}</p>
          <p style="font-size: 14px; margin: 16px 0;"><strong>Número de Colaboradores:</strong> ${employees}</p>
          <p style="font-size: 14px; margin: 16px 0;"><strong>Correo Electrónico:</strong> <a href="mailto:${email}">${email}</a></p>
          
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin-top: 20px;">
            <p style="font-size: 13px; font-weight: bold; margin-top: 0; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Requerimientos Especiales:</p>
            <p style="font-size: 14px; margin: 0; white-space: pre-line; line-height: 1.5; color: #334155;">${message}</p>
          </div>
          
          <footer style="margin-top: 24px; padding-top: 12px; border-t: 1px solid #f1f5f9; text-align: center; font-size: 11px; color: #94a3b8;">
            Este correo fue generado automáticamente desde el formulario de Óptica Nexo.
          </footer>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}