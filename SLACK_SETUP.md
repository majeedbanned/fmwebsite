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

## حل مشکل حذف خودکار Webhook:
اگر Webhook شما هنگام push کردن تغییرات حذف می‌شود، مراحل زیر را دنبال کنید:

### 1. بررسی .gitignore
مطمئن شوید که `.env.local` در فایل `.gitignore` اضافه شده است:
```
# local env files
.env*.local
.env
```

### 2. تنظیمات Environment Variables در پلتفرم Deploy
برای پلتفرم‌های مختلف:

#### Vercel:
1. به پنل Vercel بروید
2. پروژه خود را انتخاب کنید
3. به تب "Settings" بروید
4. بخش "Environment Variables" را باز کنید
5. متغیر جدید اضافه کنید:
   - Name: `SLACK_WEBHOOK_URL`
   - Value: URL واقعی webhook شما
   - Environment: Production, Preview, Development (همه را انتخاب کنید)

#### Netlify:
1. به پنل Netlify بروید
2. Site settings > Environment variables
3. متغیر `SLACK_WEBHOOK_URL` را اضافه کنید

#### Railway/Render:
1. به پنل مربوطه بروید
2. بخش Environment Variables
3. متغیر `SLACK_WEBHOOK_URL` را اضافه کنید

### 3. بررسی Slack App Settings
1. به [api.slack.com](https://api.slack.com/apps) بروید
2. اپ خود را انتخاب کنید
3. در بخش "Incoming Webhooks" بررسی کنید که:
   - Webhooks فعال باشد
   - URL معتبر باشد
   - دسترسی‌های لازم تنظیم شده باشد

### 4. تست مجدد
پس از تنظیم Environment Variables:
1. دوباره deploy کنید
2. فرم تماس را تست کنید
3. پیام باید در Slack ظاهر شود

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

