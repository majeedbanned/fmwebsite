# حل مشکل دریافت اعلان Discord در موبایل

## ✅ تست موفقیت‌آمیز
API شما کار می‌کند و پیام‌ها به Discord ارسال می‌شوند. مشکل احتمالاً در تنظیمات موبایل شماست.

## 📱 مراحل حل مشکل

### 1. بررسی اعلان‌های Discord در موبایل

#### Android:
1. **تنظیمات سیستم:**
   - Settings → Apps → Discord → Notifications → روشن کنید
   - Settings → Battery → Battery Optimization → Discord را از لیست حذف کنید

2. **تنظیمات Discord:**
   - Discord را باز کنید
   - User Settings (آیکون چرخ دنده) → Notifications
   - "Enable Mobile Push Notifications" را روشن کنید

#### iOS:
1. **تنظیمات سیستم:**
   - Settings → Notifications → Discord → Allow Notifications را روشن کنید
   - Badges, Sounds, Banners را فعال کنید

2. **تنظیمات Discord:**
   - Discord را باز کنید
   - User Settings → Notifications
   - "Enable Mobile Push Notifications" را روشن کنید

### 2. تنظیمات سرور Discord

1. **بررسی Notification Settings سرور:**
   - روی نام سرور کلیک کنید
   - Notification Settings → "All Messages" را انتخاب کنید

2. **بررسی تنظیمات کانال:**
   - روی کانال راست‌کلیک کنید
   - Notification Settings → "All Messages" را انتخاب کنید

### 3. بررسی وضعیت آنلاین

1. **Desktop Discord:**
   - اگر Discord روی کامپیوتر باز است، موبایل ممکن است اعلان نفرستد
   - Discord را روی کامپیوتر ببندید یا وضعیت خود را "Away" کنید

2. **وضعیت Do Not Disturb:**
   - مطمئن شوید وضعیت شما "Do Not Disturb" نیست

### 4. تست مستقیم

1. **از کسی بخواهید پیام بفرستد:**
   - در همان کانال پیامی بنویسید
   - ببینید اعلان می‌آید یا نه

2. **تست با API:**
   - به این آدرس بروید: `http://localhost:3000/api/test-discord`
   - باید پیام تستی در Discord ببینید

### 5. بررسی اتصال اینترنت

1. **WiFi vs Mobile Data:**
   - هر دو را تست کنید
   - ممکن است فیلترشکن مشکل ایجاد کند

2. **VPN:**
   - اگر از VPN استفاده می‌کنید، آن را خاموش/روشن کنید

## 🔧 راه‌حل‌های پیشرفته

### 1. Clear Cache (Android)
```
Settings → Apps → Discord → Storage → Clear Cache
```

### 2. Reinstall Discord
- Discord را حذف و دوباره نصب کنید

### 3. بررسی لاگ‌ها
- اگر هنوز مشکل دارید، Console لاگ‌های مرورگر را بررسی کنید

## 🧪 تست نهایی

1. **فرم تماس را پر کنید:**
   - به وب‌سایت خود بروید
   - فرم تماس را پر کنید
   - باید پیام در Discord ظاهر شود

2. **اگر در Discord دسکتاپ می‌بینید اما در موبایل نه:**
   - مشکل از تنظیمات موبایل است
   - مراحل بالا را دوباره بررسی کنید

## ⚠️ نکات مهم

- **فیلترشکن:** ممکن است بر Discord تأثیر بگذارد
- **باتری:** تنظیمات صرفه‌جویی باتری Discord را محدود می‌کند
- **Do Not Disturb:** حتی در سیستم عامل هم بررسی کنید

## 📞 تماس برای پشتیبانی

اگر هیچ‌کدام از راه‌حل‌ها کار نکرد:
1. اسکرین‌شات از تنظیمات Discord بفرستید
2. مدل گوشی و نسخه Discord را اعلام کنید
3. بگویید آیا در Discord دسکتاپ پیام را می‌بینید یا نه

