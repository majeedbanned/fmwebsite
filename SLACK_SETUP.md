# راه‌اندازی Slack Webhook برای دریافت اطلاعات تماس

## مراحل راه‌اندازی:

### 1. ایجاد Slack App
1. به [api.slack.com](https://api.slack.com/apps) بروید
2. روی "Create New App" کلیک کنید
3. "From scratch" را انتخاب کنید
4. نام اپ و workspace خود را انتخاب کنید

### 2. فعال‌سازی Incoming Webhooks
1. در صفحه App، به بخش "Incoming Webhooks" بروید
2. "Activate Incoming Webhooks" را روشن کنید
3. روی "Add New Webhook to Workspace" کلیک کنید
4. کانالی که می‌خواهید پیام‌ها را دریافت کنید انتخاب کنید
5. Webhook URL را کپی کنید

### 3. تنظیم متغیر Environment
1. فایل `.env.local` را در ریشه پروژه website ایجاد کنید
2. خط زیر را اضافه کنید:
```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/ACTUAL/WEBHOOK_URL
```

### 4. نمونه Webhook URL:
```
https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
```

## تست عملکرد:
1. سرور را restart کنید
2. فرم تماس را از وب‌سایت پر کنید
3. پیام باید در کانال Slack شما ظاهر شود

## نکات امنیتی:
- هرگز Webhook URL را در کد commit نکنید
- فقط در فایل `.env.local` استفاده کنید
- `.env.local` را به `.gitignore` اضافه کنید

## پیام‌های دریافتی شامل:
- نام و نام خانوادگی
- شماره تماس
- نوع درخواست (تماس یا دمو)
- زمان درخواست
- دکمه‌های عملیات (تماس گرفته شد / نیاز به پیگیری)

## مثال پیام Slack:
```
🔔 درخواست دمو - درخواست جدید

نام: علی احمدی
شماره تماس: 09123456789  
نوع درخواست: درخواست دمو
زمان: ۱۴۰۳/۰۸/۳۱ ۱۲:۳۰

📞 اقدام مورد نیاز: با شماره 09123456789 تماس بگیرید و اطلاعات کاملی درباره سیستم پارس آموز ارائه دهید.

[تماس گرفته شد ✅] [نیاز به پیگیری]
```
