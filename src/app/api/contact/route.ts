import { NextRequest, NextResponse } from "next/server";

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

    // Slack webhook URL - you'll need to set this in environment variables
    const slackWebhookUrl = "https://hooks.slack.com/services/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";
    
    if (!slackWebhookUrl) {
      console.error("SLACK_WEBHOOK_URL not configured");
      return NextResponse.json(
        { error: "خطا در ارسال اطلاعات" },
        { status: 500 }
      );
    }

    // Format the message for Slack
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
            {
              type: "mrkdwn",
              text: `*نام:*\n${name}`
            },
            {
              type: "mrkdwn",
              text: `*شماره تماس:*\n${phone}`
            },
            {
              type: "mrkdwn",
              text: `*نوع درخواست:*\n${type}`
            },
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
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "تماس گرفته شد ✅",
                emoji: true
              },
              style: "primary",
              value: "contacted"
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "نیاز به پیگیری",
                emoji: true
              },
              style: "danger",
              value: "follow_up"
            }
          ]
        }
      ]
    };

    // Send to Slack
    const slackResponse = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      console.error("Failed to send Slack notification:", slackResponse.statusText);
      return NextResponse.json(
        { error: "خطا در ارسال اطلاعات" },
        { status: 508 }
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

