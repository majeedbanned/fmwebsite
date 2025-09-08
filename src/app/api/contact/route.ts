import { NextRequest, NextResponse } from "next/server";

// Notification service types
type NotificationService = 'discord' | 'telegram' | 'email' | 'slack';

// Get notification service from environment
function getNotificationService(): NotificationService {
  const service = process.env.NOTIFICATION_SERVICE?.toLowerCase() as NotificationService;
  return service || 'discord'; // Default to Discord
}

// Send notification based on configured service
async function sendNotification(name: string, phone: string, type: string) {
  const service = getNotificationService();
  
  switch (service) {
    case 'discord':
      return await sendDiscordNotification(name, phone, type);
    case 'telegram':
      return await sendTelegramNotification(name, phone, type);
    case 'email':
      return await sendEmailNotification(name, phone, type);
    case 'slack':
      return await sendSlackNotification(name, phone, type);
    default:
      throw new Error(`Unsupported notification service: ${service}`);
  }
}

// Discord webhook notification
async function sendDiscordNotification(name: string, phone: string, type: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) throw new Error("DISCORD_WEBHOOK_URL not configured");

  const embed = {
    title: `🔔 ${type} - درخواست جدید`,
    color: 0x7289DA, // Discord blue
    fields: [
      { name: "نام", value: name, inline: true },
      { name: "شماره تماس", value: phone, inline: true },
      { name: "نوع درخواست", value: type, inline: true },
      { 
        name: "زمان", 
        value: new Date().toLocaleString("fa-IR", {
          timeZone: "Asia/Tehran",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }), 
        inline: true 
      }
    ],
    footer: { text: "پارس آموز - سیستم مدیریت آموزشی" },
    timestamp: new Date().toISOString()
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `📞 **اقدام مورد نیاز:** با شماره ${phone} تماس بگیرید و اطلاعات کاملی درباره سیستم پارس آموز ارائه دهید.`,
      embeds: [embed]
    })
  });

  if (!response.ok) {
    throw new Error(`Discord webhook failed: ${response.statusText}`);
  }
}

// Telegram bot notification
async function sendTelegramNotification(name: string, phone: string, type: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  if (!botToken || !chatId) {
    throw new Error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured");
  }

  const message = `
🔔 *${type} - درخواست جدید*

👤 *نام:* ${name}
📞 *شماره تماس:* ${phone}
📋 *نوع درخواست:* ${type}
🕐 *زمان:* ${new Date().toLocaleString("fa-IR", {
    timeZone: "Asia/Tehran",
    year: "numeric",
    month: "long", 
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })}

📞 *اقدام مورد نیاز:* با شماره ${phone} تماس بگیرید و اطلاعات کاملی درباره سیستم پارس آموز ارائه دهید.
  `.trim();

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown"
    })
  });

  if (!response.ok) {
    throw new Error(`Telegram API failed: ${response.statusText}`);
  }
}

// Email notification
async function sendEmailNotification(name: string, phone: string, type: string) {
  const emailService = process.env.EMAIL_SERVICE; // 'resend' or 'sendgrid'
  
  if (emailService === 'resend') {
    return await sendResendEmail(name, phone, type);
  } else if (emailService === 'sendgrid') {
    return await sendSendGridEmail(name, phone, type);
  } else {
    throw new Error("EMAIL_SERVICE not configured (use 'resend' or 'sendgrid')");
  }
}

// Resend email service
async function sendResendEmail(name: string, phone: string, type: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.NOTIFICATION_EMAIL;
  
  if (!apiKey || !toEmail) {
    throw new Error("RESEND_API_KEY or NOTIFICATION_EMAIL not configured");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "noreply@yourdomain.com",
      to: [toEmail],
      subject: `🔔 ${type} - درخواست جدید از ${name}`,
      html: `
        <div dir="rtl" style="font-family: Tahoma, Arial; max-width: 600px;">
          <h2 style="color: #2563eb;">🔔 ${type} - درخواست جدید</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>نام:</strong> ${name}</p>
            <p><strong>شماره تماس:</strong> ${phone}</p>
            <p><strong>نوع درخواست:</strong> ${type}</p>
            <p><strong>زمان:</strong> ${new Date().toLocaleString("fa-IR", {
              timeZone: "Asia/Tehran",
              year: "numeric",
              month: "long",
              day: "numeric", 
              hour: "2-digit",
              minute: "2-digit"
            })}</p>
          </div>
          <div style="background: #dbeafe; padding: 15px; border-radius: 8px; border-right: 4px solid #2563eb;">
            <p><strong>📞 اقدام مورد نیاز:</strong> با شماره ${phone} تماس بگیرید و اطلاعات کاملی درباره سیستم پارس آموز ارائه دهید.</p>
          </div>
        </div>
      `
    })
  });

  if (!response.ok) {
    throw new Error(`Resend API failed: ${response.statusText}`);
  }
}

// SendGrid email service  
async function sendSendGridEmail(name: string, phone: string, type: string) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.NOTIFICATION_EMAIL;
  const fromEmail = process.env.FROM_EMAIL;
  
  if (!apiKey || !toEmail || !fromEmail) {
    throw new Error("SENDGRID_API_KEY, NOTIFICATION_EMAIL, or FROM_EMAIL not configured");
  }

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email: toEmail }],
        subject: `🔔 ${type} - درخواست جدید از ${name}`
      }],
      from: { email: fromEmail },
      content: [{
        type: "text/html",
        value: `
          <div dir="rtl" style="font-family: Tahoma, Arial; max-width: 600px;">
            <h2 style="color: #2563eb;">🔔 ${type} - درخواست جدید</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>نام:</strong> ${name}</p>
              <p><strong>شماره تماس:</strong> ${phone}</p>
              <p><strong>نوع درخواست:</strong> ${type}</p>
              <p><strong>زمان:</strong> ${new Date().toLocaleString("fa-IR", {
                timeZone: "Asia/Tehran",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit", 
                minute: "2-digit"
              })}</p>
            </div>
            <div style="background: #dbeafe; padding: 15px; border-radius: 8px; border-right: 4px solid #2563eb;">
              <p><strong>📞 اقدام مورد نیاز:</strong> با شماره ${phone} تماس بگیرید و اطلاعات کاملی درباره سیستم پارس آموز ارائه دهید.</p>
            </div>
          </div>
        `
      }]
    })
  });

  if (!response.ok) {
    throw new Error(`SendGrid API failed: ${response.statusText}`);
  }
}

// Original Slack function (kept for backward compatibility)
async function sendSlackNotification(name: string, phone: string, type: string) {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!slackWebhookUrl) throw new Error("SLACK_WEBHOOK_URL not configured");

  const slackMessage = {
    text: "درخواست جدید از وب‌سایت",
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `🔔 ${type} - درخواست جدید`,
          emoji: true
        }
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*نام:*\n${name}` },
          { type: "mrkdwn", text: `*شماره تماس:*\n${phone}` },
          { type: "mrkdwn", text: `*نوع درخواست:*\n${type}` },
          {
            type: "mrkdwn",
            text: `*زمان:*\n${new Date().toLocaleString("fa-IR", {
              timeZone: "Asia/Tehran",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            })}`
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `📞 *اقدام مورد نیاز:* با شماره ${phone} تماس بگیرید و اطلاعات کاملی درباره سیستم پارس آموز ارائه دهید.`
        }
      }
    ]
  };

  const response = await fetch(slackWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(slackMessage)
  });

  if (!response.ok) {
    throw new Error(`Slack webhook failed: ${response.statusText}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, type } = body;

    // Validate input
    if (!name || !phone || !type) {
      return NextResponse.json(
        { error: "نام، شماره تماس و نوع درخواست الزامی است" },
        { status: 400 }
      );
    }

    // Validate phone number (basic Iranian phone number validation)
    const phoneRegex = /^(\+98|0)?9\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "شماره تماس معتبر نیست" },
        { status: 400 }
      );
    }

    // Send notification using configured service
    try {
      await sendNotification(name, phone, type);
    } catch (error) {
      console.error("Failed to send notification:", error);
      return NextResponse.json(
        { error: "خطا در ارسال اطلاعات" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "اطلاعات شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت." 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

