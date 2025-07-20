"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Team3 } from "components/blocks/team";
import { About6 } from "components/blocks/about";
import { Facts5 } from "components/blocks/facts";
import { Process7 } from "components/blocks/process";
import { Contact7 } from "components/blocks/contact";
import { Testimonial5 } from "components/blocks/testimonial";
import FigureImage from "components/reuseable/FigureImage";

// Website Builder System Overview Data
const websiteBuilderSystemOverview = `
سیستم سایت‌ساز پارس آموز، یک پلتفرم پیشرفته و جامع برای ایجاد و مدیریت وب‌سایت‌های مدرن است که با ترکیب فناوری‌های نوین، قابلیت‌های بصری پیشرفته و رابط کاربری ساده، امکان طراحی و توسعه وب‌سایت‌های حرفه‌ای را بدون نیاز به دانش برنامه‌نویسی فراهم می‌کند. این سیستم با بهره‌گیری از معماری ماژولار، کشیدن و رها کردن، و ویرایش بصری، تجربه‌ای بی‌نظیر در زمینه طراحی وب ارائه می‌دهد.

سیستم ماژولار پیشرفته (Advanced Modular System):
• معماری ماژولار انعطاف‌پذیر با بیش از ۱۳ ماژول پیش‌ساخته تخصصی
• ماژول‌های کاملاً قابل شخصی‌سازی با تنظیمات پیشرفته و گزینه‌های متنوع
• سیستم دسته‌بندی هوشمند شامل هدر، هیرو، محتوا، اجتماعی، تماس و فوتر
• قابلیت ایجاد ماژول‌های سفارشی با HTML، CSS و JavaScript
• پشتیبانی از ماژول‌های ضروری و اختیاری با کنترل دقیق نمایش
• سیستم وراثت و قالب‌بندی خودکار برای یکپارچگی طراحی
• مدیریت نسخه‌گذاری ماژول‌ها و ردیابی تغییرات لحظه‌ای
• امکان کپی، تکثیر و اشتراک‌گذاری ماژول‌ها بین صفحات مختلف

رابط کاربری کشیدن و رها کردن (Drag & Drop Interface):
• سیستم کشیدن و رها کردن پیشرفته با DnD Kit برای مرتب‌سازی آسان ماژول‌ها
• پیش‌نمایش بصری زنده در حین جابجایی با انیمیشن‌های نرم و روان
• تنظیم ترتیب ماژول‌ها با کشیدن ساده و تأیید فوری تغییرات
• نشانگرهای بصری برای موقعیت‌های قابل رها کردن و راهنمایی کاربر
• پشتیبانی از کیبورد برای دسترسی آسان و استفاده بدون ماوس
• حالت شبکه‌ای و فهرستی برای مدیریت بهتر ماژول‌های متعدد
• امکان گروه‌بندی و دسته‌بندی ماژول‌ها برای سازماندهی بهتر
• سیستم تاریخچه برای بازگردانی تغییرات و Undo/Redo

ویرایش بصری زنده (Live Visual Editing):
• ویرایشگر بصری آنلاین با پیش‌نمایش لحظه‌ای تغییرات
• حالت‌های مختلف نمایش شامل دسکتاپ، تبلت و موبایل
• ویرایش در محل (In-place editing) برای تغییر سریع محتوا
• سیستم ویرایش متنی پیشرفته با پشتیبانی از فونت‌های فارسی
• انتخابگر رنگ هوشمند با پالت‌های پیش‌تعریف شده
• آپلودر تصاویر و مدیا با پردازش خودکار و بهینه‌سازی
• ویرایش CSS مستقیم برای کاربران پیشرفته
• سیستم ذخیره خودکار و پیش‌نویس برای جلوگیری از از دست رفتن اطلاعات

مدیریت محتوا و رسانه (Content & Media Management):
• سیستم مدیریت محتوای یکپارچه با پشتیبانی از انواع محتوا
• آپلودر پیشرفته تصاویر با پشتیبانی از فرمت‌های مختلف (JPG, PNG, WebP, SVG)
• بهینه‌سازی خودکار تصاویر برای سرعت بارگذاری بهتر
• گالری تصاویر با قابلیت‌های جستجو، فیلتر و دسته‌بندی
• مدیریت فایل‌های ویدئو و صوتی با پخش‌کننده‌های توکار
• ویرایشگر متن غنی با پشتیبانی از HTML، Markdown و فارسی
• سیستم تگ‌گذاری و کلیدواژه‌گذاری برای سازماندهی محتوا
• امکان وارد کردن محتوا از منابع خارجی و رسانه‌های اجتماعی

ماژول‌های تخصصی پیش‌ساخته (Specialized Pre-built Modules):
• ماژول هیرو (Hero) با امکانات پیشرفته نمایش ویدئو، اسلایدر و محتوای تعاملی
• ماژول ویژگی‌ها (Features) با آیکون‌های متنوع و انیمیشن‌های جذاب
• ماژول درباره ما (About) با نمایش تیم، مأموریت و ارزش‌های سازمان
• ماژول گالری (Gallery) با نمایش تصاویر در قالب‌های مختلف
• ماژول اخبار و مقالات (News & Articles) با سیستم مدیریت محتوا
• ماژول تماس (Contact) با فرم تماس پیشرفته و نقشه تعاملی
• ماژول نظرات کاربران (Testimonials) با نمایش بازخوردها
• ماژول دانلود اپلیکیشن (App Download) با لینک‌های مستقیم
• ماژول اساتید (Teachers) برای نمایش کادر آموزشی
• ماژول قیمت‌گذاری (Pricing) برای نمایش پلان‌های مختلف

طراحی واکنش‌گرا و بهینه‌سازی (Responsive Design & Optimization):
• طراحی کاملاً واکنش‌گرا با تست خودکار روی تمام دستگاه‌ها
• پیش‌نمایش همزمان در ابعاد مختلف (موبایل، تبلت، دسکتاپ)
• بهینه‌سازی خودکار سرعت بارگذاری و عملکرد
• فشرده‌سازی CSS و JavaScript برای سرعت بیشتر
• پشتیبانی از Progressive Web App (PWA)
• سئو خودکار با متاتگ‌ها و structured data
• بهینه‌سازی تصاویر و lazy loading برای تجربه بهتر
• کش هوشمند و CDN برای سرعت بارگذاری جهانی

کنترل دسترسی و مجوزها (Access Control & Permissions):
• سیستم نقش‌محور (RBAC) برای کنترل دقیق دسترسی‌ها
• مجوزهای متفاوت برای مدیران مدرسه، ویراستاران و کاربران
• کنترل سطح ویرایش و انتشار برای هر ماژول
• سیستم تأیید و workflow برای انتشار تغییرات
• ورود امن با احراز هویت دوعاملی
• لاگ‌گیری کامل تمام تغییرات و فعالیت‌های کاربران
• پشتیبان‌گیری خودکار و نسخه‌گیری از تغییرات
• امکان بازگردانی نسخه‌های قبلی و مدیریت نسخه‌ها

رابط‌های برنامه‌نویسی و ادغام (APIs & Integration):
• API کامل RESTful برای ادغام با سیستم‌های خارجی
• وب‌هوک‌ها برای اتصال با سرویس‌های شخص ثالث
• پشتیبانی از GraphQL برای کوئری‌های پیچیده
• ادغام با سیستم‌های مدیریت محتوا و CRM
• اتصال با سرویس‌های آنالیتیکس و رصد عملکرد
• پشتیبانی از فرمت‌های داده مختلف (JSON, XML, CSV)
• SDK برای توسعه‌دهندگان و ایجاد افزونه‌های سفارشی
• امکان صادرات و وارد کردن طرح‌ها و قالب‌ها

تحلیل و گزارش‌گیری (Analytics & Reporting):
• داشبورد تحلیلی پیشرفته با نمودارهای تعاملی
• آمار بازدید، تعامل کاربران و عملکرد سایت
• گزارش‌های SEO و بهینه‌سازی موتورهای جستجو
• تحلیل سرعت بارگذاری و عملکرد فنی
• نظارت بر خطاها و مشکلات فنی
• آمار استفاده از ماژول‌ها و محبوبیت بخش‌ها
• گزارش‌های قابل تنظیم و صادرات داده‌ها
• اعلان‌های هوشمند برای مشکلات و بهبودهای پیشنهادی

امنیت و پشتیبان‌گیری (Security & Backup):
• رمزنگاری SSL/TLS برای تمام ارتباطات
• محافظت در برابر حملات XSS، CSRF و SQL Injection
• فایروال وب اپلیکیشن (WAF) برای امنیت پیشرفته
• پشتیبان‌گیری خودکار روزانه با امکان بازیابی سریع
• مانیتورینگ امنیتی ۲۴/۷ و تشخیص تهدیدات
• کنترل IP و محدودیت‌های جغرافیایی
• دو عاملی (2FA) برای حساب‌های کاربری
• اسکن مداوم آسیب‌پذیری‌ها و به‌روزرسانی امنیتی

پشتیبانی چندزبانه و محلی‌سازی (Multi-language & Localization):
• پشتیبانی کامل از زبان فارسی با تایپوگرافی مناسب
• قابلیت چندزبانه با مدیریت ترجمه‌های مختلف
• پشتیبانی از چیدمان راست به چپ (RTL) و چپ به راست (LTR)
• تقویم شمسی و تاریخ‌گذاری فارسی
• واحدهای پولی و عددی مناسب با منطقه
• فونت‌های فارسی بهینه‌شده و زیبا
• قالب‌های آماده مخصوص فرهنگ ایرانی
• پشتیبانی از محتوای دوزبانه و چندزبانه همزمان

این سیستم سایت‌ساز پیشرفته، ابزاری قدرتمند و جامع برای ایجاد وب‌سایت‌های مدرن و حرفه‌ای است که با ترکیب سادگی استفاده، قابلیت‌های پیشرفته و امنیت بالا، امکان ایجاد حضور دیجیتال قوی و تأثیرگذار را برای مؤسسات آموزشی فراهم می‌کند. از طراحی ساده‌ترین صفحات تا پیاده‌سازی پیچیده‌ترین قابلیت‌های وب، این پلتفرم پاسخگوی تمام نیازهای طراحی و توسعه وب است.
`;

const coreFeatures = [
  {
    id: 1,
    title: "سیستم ماژولار پیشرفته",
    description: "بیش از ۱۳ ماژول تخصصی برای طراحی صفحات",
    features: [
      "ماژول‌های هیرو، ویژگی‌ها و درباره ما",
      "ماژول گالری و نمایش محتوا",
      "ماژول تماس و فرم‌های پیشرفته",
      "ماژول نظرات و اجتماعی",
      "ماژول HTML سفارشی",
      "دسته‌بندی هوشمند ماژول‌ها"
    ],
    icon: "uil-apps",
    color: "bg-blue-500",
    link: "/admin"
  },
  {
    id: 2,
    title: "ویرایش بصری زنده",
    description: "ویرایش آنلاین با پیش‌نمایش لحظه‌ای",
    features: [
      "ویرایش در محل (In-place)",
      "پیش‌نمایش تغییرات فوری",
      "حالت‌های مختلف نمایش",
      "ویرایش متن و تصاویر",
      "ذخیره خودکار",
      "سیستم بازگردانی تغییرات"
    ],
    icon: "uil-edit",
    color: "bg-green-500",
    link: "/admin"
  },
  {
    id: 3,
    title: "کشیدن و رها کردن",
    description: "مرتب‌سازی آسان ماژول‌ها با کشیدن",
    features: [
      "رابط کاربری ساده",
      "انیمیشن‌های نرم",
      "نشانگرهای بصری",
      "پشتیبانی از کیبورد",
      "مرتب‌سازی فوری",
      "حالت شبکه‌ای و فهرستی"
    ],
    icon: "uil-draggabledots",
    color: "bg-purple-500",
    link: "/admin"
  },
  {
    id: 4,
    title: "طراحی واکنش‌گرا",
    description: "سازگار با تمام دستگاه‌ها",
    features: [
      "موبایل، تبلت و دسکتاپ",
      "تست خودکار واکنش‌گرایی",
      "بهینه‌سازی سرعت",
      "پیش‌نمایش همزمان",
      "فشرده‌سازی خودکار",
      "PWA پشتیبانی"
    ],
    icon: "uil-mobile-android",
    color: "bg-orange-500",
    link: "/admin"
  }
];

const websiteModules = [
  {
    category: "ماژول‌های هدر و ناوبری",
    description: "مدیریت نوار ناوبری و بخش‌های فوقانی",
    modules: [
      { name: "نوار ناوبری", icon: "🧭", description: "منوی اصلی و لوگو سایت", required: true },
    ],
    icon: "uil-navigator",
    color: "bg-blue-600"
  },
  {
    category: "ماژول‌های هیرو و معرفی",
    description: "بخش‌های جذاب و معرفی اصلی",
    modules: [
      { name: "بخش هیرو", icon: "🚀", description: "صفحه اول جذاب با تصاویر و متن", required: false },
    ],
    icon: "uil-rocket",
    color: "bg-green-600"
  },
  {
    category: "ماژول‌های محتوایی",
    description: "نمایش محتوا و اطلاعات اصلی",
    modules: [
      { name: "ویژگی‌ها", icon: "⭐", description: "نمایش امکانات و مزایا", required: false },
      { name: "درباره ما", icon: "👥", description: "معرفی شرکت و تیم", required: false },
      { name: "اساتید", icon: "👨‍🏫", description: "معرفی کادر آموزشی", required: false },
      { name: "گالری", icon: "🖼️", description: "نمایش تصاویر و نمونه کارها", required: false },
      { name: "اخبار", icon: "📰", description: "آخرین اخبار و اطلاعیه‌ها", required: false },
      { name: "مقالات", icon: "📝", description: "محتوای آموزشی و مقالات", required: false },
      { name: "قیمت‌گذاری", icon: "💰", description: "پلان‌ها و قیمت‌های خدمات", required: false },
      { name: "محتوای HTML", icon: "📄", description: "محتوای سفارشی HTML/CSS/JS", required: false }
    ],
    icon: "uil-layer-group",
    color: "bg-purple-600"
  },
  {
    category: "ماژول‌های اجتماعی",
    description: "نظرات و تعاملات کاربران",
    modules: [
      { name: "نظرات کاربران", icon: "💬", description: "نمایش بازخوردها و تجربیات", required: false },
    ],
    icon: "uil-comments",
    color: "bg-orange-600"
  },
  {
    category: "ماژول‌های تماس",
    description: "راه‌های ارتباطی و تماس",
    modules: [
      { name: "تماس با ما", icon: "📞", description: "فرم تماس و اطلاعات ارتباطی", required: false },
    ],
    icon: "uil-phone",
    color: "bg-red-600"
  },
  {
    category: "ماژول‌های فوتر",
    description: "بخش پایانی سایت",
    modules: [
      { name: "فوتر", icon: "🦶", description: "اطلاعات تماس و لینک‌های مفید", required: true },
    ],
    icon: "uil-corner-down-left",
    color: "bg-gray-600"
  },
  {
    category: "ماژول‌های خاص",
    description: "ماژول‌های تخصصی و کاربردی",
    modules: [
      { name: "دانلود اپلیکیشن", icon: "📱", description: "معرفی و دانلود اپ موبایل", required: false },
    ],
    icon: "uil-apps",
    color: "bg-indigo-600"
  }
];

const userRoles = [
  {
    role: "مدیران مدرسه",
    description: "دسترسی کامل به ویرایش و مدیریت سایت",
    permissions: ["مدیریت تمام ماژول‌ها", "ویرایش محتوا و تصاویر", "تنظیم ترتیب ماژول‌ها", "کنترل نمایش/مخفی کردن", "دسترسی به تنظیمات پیشرفته", "مدیریت کاربران و دسترسی‌ها"],
    icon: "uil-estate",
    color: "bg-purple-600"
  },
  {
    role: "ویراستاران محتوا",
    description: "ویرایش محتوا و مدیریت ماژول‌های تعیین شده",
    permissions: ["ویرایش محتوای ماژول‌ها", "آپلود و مدیریت تصاویر", "ویرایش متن و توضیحات", "مدیریت گالری و رسانه", "ایجاد و ویرایش مقالات", "انتشار محتوای جدید"],
    icon: "uil-edit-alt",
    color: "bg-blue-600"
  },
  {
    role: "بازدیدکنندگان عمومی",
    description: "مشاهده سایت نهایی بدون امکان ویرایش",
    permissions: ["مشاهده سایت کامل", "دسترسی به تمام صفحات عمومی", "استفاده از فرم‌های تماس", "مشاهده گالری و محتوا", "دانلود منابع عمومی", "تعامل با المان‌های تعاملی"],
    icon: "uil-users-alt",
    color: "bg-green-600"
  },
  {
    role: "توسعه‌دهندگان",
    description: "دسترسی به کد و API برای توسعه",
    permissions: ["دسترسی به API سایت", "ویرایش محتوای HTML سفارشی", "افزودن CSS و JavaScript", "تنظیمات پیشرفته", "مدیریت بکاپ و نسخه‌ها", "مانیتورینگ و عملکرد"],
    icon: "uil-code-branch",
    color: "bg-orange-600"
  }
];

const buildingWorkflow = [
  {
    step: "۱",
    title: "انتخاب ماژول‌ها",
    description: "از کتابخانه ماژول‌ها انتخاب کنید",
    icon: "uil-apps",
    color: "primary",
    duration: "۵ دقیقه"
  },
  {
    step: "۲",
    title: "چیدمان و مرتب‌سازی",
    description: "ماژول‌ها را با کشیدن مرتب کنید",
    icon: "uil-draggabledots",
    color: "success",
    duration: "۱۰ دقیقه"
  },
  {
    step: "۳",
    title: "ویرایش محتوا",
    description: "متن‌ها و تصاویر را ویرایش کنید",
    icon: "uil-edit",
    color: "info",
    duration: "۲۰ دقیقه"
  },
  {
    step: "۴",
    title: "پیش‌نمایش و انتشار",
    description: "تست نهایی و انتشار سایت",
    icon: "uil-rocket",
    color: "warning",
    duration: "۵ دقیقه"
  }
];

const advancedFeatures = [
  {
    id: 1,
    title: "مدیریت رسانه پیشرفته",
    description: "آپلود، ویرایش و بهینه‌سازی تصاویر",
    features: [
      "آپلود چندگانه تصاویر",
      "بهینه‌سازی خودکار سایز",
      "فرمت‌های مختلف (JPG, PNG, WebP)",
      "گالری تصاویر تعاملی",
      "ویرایشگر تصاویر آنلاین",
      "فشرده‌سازی بدون کاهش کیفیت"
    ],
    icon: "uil-image",
    color: "bg-indigo-500"
  },
  {
    id: 2,
    title: "ویرایشگر محتوای غنی",
    description: "ابزارهای پیشرفته ویرایش متن",
    features: [
      "ویرایشگر WYSIWYG کامل",
      "پشتیبانی از فونت‌های فارسی",
      "فرمت‌بندی پیشرفته متن",
      "درج لینک و جدول",
      "کد رنگی HTML",
      "پیش‌نمایش زنده تغییرات"
    ],
    icon: "uil-pen",
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "سئو و بهینه‌سازی",
    description: "ابزارهای SEO و عملکرد",
    features: [
      "متاتگ‌های خودکار",
      "URL‌های SEO-friendly",
      "نقشه سایت XML",
      "بهینه‌سازی سرعت",
      "تحلیل عملکرد",
      "گزارش‌های SEO"
    ],
    icon: "uil-search",
    color: "bg-red-500"
  },
  {
    id: 4,
    title: "امنیت و بکاپ",
    description: "حفاظت و پشتیبان‌گیری خودکار",
    features: [
      "SSL و رمزنگاری",
      "بکاپ خودکار روزانه",
      "نسخه‌گیری تغییرات",
      "بازیابی سریع",
      "کنترل دسترسی",
      "مانیتورینگ امنیتی"
    ],
    icon: "uil-shield-check",
    color: "bg-yellow-500"
  }
];

const benefits = [
  {
    title: "راه‌اندازی سریع",
    description: "سایت خود را در کمتر از یک ساعت راه‌اندازی کنید",
    icon: "uil-rocket",
    stat: "<۱ ساعت"
  },
  {
    title: "بدون کد نویسی",
    description: "هیچ دانش فنی نیاز نیست",
    icon: "uil-smile",
    stat: "۰ کد"
  },
  {
    title: "واکنش‌گرای ۱۰۰٪",
    description: "کاملاً سازگار با تمام دستگاه‌ها",
    icon: "uil-mobile-android",
    stat: "۱۰۰٪"
  },
  {
    title: "پشتیبانی ۲۴/۷",
    description: "پشتیبانی فنی در تمام اوقات",
    icon: "uil-headphones",
    stat: "۲۴/۷"
  }
];

const statistics = [
  {
    number: "۱۳+",
    label: "ماژول آماده استفاده",
    color: "bg-blue-500"
  },
  {
    number: "۱۰۰٪",
    label: "واکنش‌گرا و موبایل فرندلی",
    color: "bg-green-500"
  },
  {
    number: "فارسی",
    label: "پشتیبانی کامل RTL",
    color: "bg-purple-500"
  },
  {
    number: "۰",
    label: "دانش فنی مورد نیاز",
    color: "bg-orange-500"
  }
];

export default function WebsiteBuilderAbout() {
  return (
    <Fragment>
      <style jsx global>{`
        @font-face {
          font-family: 'IRANYekanX';
          src: url('/fonts/yekan/IRANYekanX-Regular.woff2') format('woff2'),
               url('/fonts/yekan/IRANYekanX-Regular.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'IRANYekanX';
          src: url('/fonts/yekan/IRANYekanX-Bold.woff2') format('woff2'),
               url('/fonts/yekan/IRANYekanX-Bold.woff') format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'IRANYekanX';
          src: url('/fonts/yekan/IRANYekanX-Medium.woff2') format('woff2'),
               url('/fonts/yekan/IRANYekanX-Medium.woff') format('woff');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        
        .rtl-content {
          font-family: 'IRANYekanX', 'Arial', sans-serif;
          direction: rtl;
          text-align: right;
        }
        
        .rtl-content .text-center {
          text-align: center !important;
        }
        
        .rtl-content .text-left {
          text-align: right !important;
        }
        
        .persian-numbers {
          font-family: 'IRANYekanX', 'Arial', sans-serif;
        }

        .feature-card {
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .overview-text {
          line-height: 2;
          white-space: pre-line;
        }

        .builder-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 25px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .builder-demo:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .builder-demo::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
          pointer-events: none;
        }

        .workflow-step {
          position: relative;
          padding: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .workflow-step:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .role-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          border-left: 4px solid;
          transition: all 0.3s ease;
        }

        .role-card:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .module-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border-top: 3px solid #3b82f6;
        }

        .module-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .website-interface {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border-radius: 12px;
          padding: 20px;
          color: white;
          transition: all 0.3s ease;
        }

        .website-interface:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(240, 147, 251, 0.3);
        }

        .module-badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          margin: 2px;
        }

        .module-badge.required {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container pt-10 pt-md-14 text-center">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <h1 className="display-1 mb-4">سیستم سایت‌ساز پارس آموز</h1>
              <p className="lead fs-lg mb-0">
                پلتفرم پیشرفته
                <span className="underline"> طراحی وب بدون کد</span> با قابلیت‌های ماژولار
              </p>
            </div>
          </div>
        </div>

        <FigureImage
          width={2800}
          height={1000}
          src="/img/photos/bg12.jpg"
          className="position-absoute"
          style={{ bottom: 0, left: 0, zIndex: 2 }}
        />
      </section>

      {/* ========== overview section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-12">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمای کلی سیستم</h2>
              <h3 className="display-4 mb-5">آشنایی جامع با سیستم سایت‌ساز</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="سیستم سایت‌ساز پارس آموز" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {websiteBuilderSystemOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-apps fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">سیستم ماژولار</h4>
                      <p className="mb-0">۱۳+ ماژول آماده</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-draggabledots fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">کشیدن و رها کردن</h4>
                      <p className="mb-0">مرتب‌سازی آسان</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-edit fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">ویرایش زنده</h4>
                      <p className="mb-0">پیش‌نمایش لحظه‌ای</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-mobile-android fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">طراحی واکنش‌گرا</h4>
                      <p className="mb-0">سازگار با همه دستگاه‌ها</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== core features section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">قابلیت‌های اصلی</h2>
              <h3 className="display-4 mb-5">ویژگی‌های کلیدی سیستم سایت‌ساز</h3>
              <p className="lead">فناوری‌های پیشرفته برای طراحی وب بدون کد</p>
            </div>
          </div>

          <div className="row gy-8">
            {coreFeatures.map((feature) => (
              <div className="col-lg-6" key={feature.id}>
                <div className="card h-100 feature-card border-0 shadow-lg">
                  <div className="card-body p-6">
                    <div className="d-flex align-items-center mb-4">
                      <div className={`${feature.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                           style={{ width: '60px', height: '60px' }}>
                        <i className={`${feature.icon} fs-24`}></i>
                      </div>
                      <h4 className="mb-0">{feature.title}</h4>
                    </div>
                    
                    <p className="text-muted mb-4">{feature.description}</p>
                    
                    <ul className="list-unstyled mb-4">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="uil uil-check text-success me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center">
                      <a href={feature.link} className="btn btn-soft-primary rounded-pill">
                        شروع طراحی
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== modules section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">ماژول‌های سایت‌ساز</h2>
              <h3 className="display-4 mb-5">کتابخانه کامل ماژول‌های آماده</h3>
              <p className="lead">انتخاب از بیش از ۱۳ ماژول تخصصی برای طراحی سایت</p>
            </div>
          </div>

          <div className="row gy-8">
            {websiteModules.map((category, index) => (
              <div className="col-lg-6" key={index}>
                <div className="module-card h-100">
                  <div className="d-flex align-items-center mb-4">
                    <div className={`${category.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                         style={{ width: '50px', height: '50px' }}>
                      <i className={`${category.icon} fs-22`}></i>
                    </div>
                    <h5 className="mb-0">{category.category}</h5>
                  </div>
                  
                  <p className="text-muted mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    {category.modules.map((module, idx) => (
                      <div key={idx} className="d-flex align-items-center mb-3">
                        <span className="me-3 fs-20">{module.icon}</span>
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center">
                            <h6 className="mb-0 me-2">{module.name}</h6>
                            <span className={`module-badge ${module.required ? 'required' : ''}`}>
                              {module.required ? 'ضروری' : 'اختیاری'}
                            </span>
                          </div>
                          <p className="text-muted small mb-0">{module.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== user roles section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نقش‌های کاربری</h2>
              <h3 className="display-4 mb-5">سطوح دسترسی مختلف کاربران</h3>
              <p className="lead">مجوزها و امکانات هر گروه کاربری</p>
            </div>
          </div>

          <div className="row gy-6">
            {userRoles.map((role, index) => (
              <div className="col-lg-6" key={index}>
                <div className={`role-card h-100`} style={{ borderLeftColor: role.color.replace('bg-', '#').replace('-600', '') }}>
                  <div className="d-flex align-items-center mb-4">
                    <div className={`${role.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                         style={{ width: '50px', height: '50px' }}>
                      <i className={`${role.icon} fs-22`}></i>
                    </div>
                    <h5 className="mb-0">{role.role}</h5>
                  </div>
                  
                  <p className="text-muted mb-4">{role.description}</p>
                  
                  <ul className="list-unstyled">
                    {role.permissions.map((permission, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="uil uil-check text-success me-2"></i>
                        {permission}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== workflow section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">فرآیند طراحی</h2>
              <h3 className="display-4 mb-5">مراحل ساخت سایت با سیستم ساز</h3>
              <p className="lead">راهنمای گام به گام طراحی سایت</p>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6">
            {buildingWorkflow.map((workflow, index) => (
              <div className="col-lg-6 col-xl-3" key={index}>
                <div className="workflow-step text-center h-100">
                  <div className={`bg-${workflow.color} text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center`} 
                       style={{ width: '80px', height: '80px' }}>
                    <i className={`${workflow.icon} fs-28`}></i>
                  </div>
                  <h5 className="mb-3">{workflow.step}. {workflow.title}</h5>
                  <p className="text-muted mb-3">{workflow.description}</p>
                  <div className="bg-soft-primary text-primary px-3 py-1 rounded-pill small">
                    زمان: {workflow.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== advanced features section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">قابلیت‌های پیشرفته</h2>
              <h3 className="display-4 mb-5">امکانات حرفه‌ای سیستم سایت‌ساز</h3>
              <p className="lead">ابزارهای تخصصی و فناوری‌های نوین</p>
            </div>
          </div>

          <div className="row gy-8">
            {advancedFeatures.map((feature) => (
              <div className="col-lg-6" key={feature.id}>
                <div className="card h-100 feature-card border-0 shadow-lg">
                  <div className="card-body p-6">
                    <div className="d-flex align-items-center mb-4">
                      <div className={`${feature.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                           style={{ width: '60px', height: '60px' }}>
                        <i className={`${feature.icon} fs-24`}></i>
                      </div>
                      <h4 className="mb-0">{feature.title}</h4>
                    </div>
                    
                    <p className="text-muted mb-4">{feature.description}</p>
                    
                    <ul className="list-unstyled">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="uil uil-check text-success me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== demo section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">تجربه سیستم</h2>
              <h3 className="display-4 mb-5">شروع طراحی سایت با سیستم ساز</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-4">
              <div className="builder-demo">
                <i className="uil uil-apps fs-40 mb-3"></i>
                <h5 className="mb-3">انتخاب ماژول‌ها</h5>
                <p className="mb-3 small opacity-90">انتخاب • افزودن • چیدمان</p>
                <a href="/admin" className="btn btn-white btn-sm rounded-pill">شروع</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="builder-demo">
                <i className="uil uil-edit fs-40 mb-3"></i>
                <h5 className="mb-3">ویرایش محتوا</h5>
                <p className="mb-3 small opacity-90">متن • تصویر • رنگ</p>
                <a href="/admin" className="btn btn-white btn-sm rounded-pill">ویرایش</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="builder-demo">
                <i className="uil uil-rocket fs-40 mb-3"></i>
                <h5 className="mb-3">انتشار سایت</h5>
                <p className="mb-3 small opacity-90">پیش‌نمایش • تست • انتشار</p>
                <a href="/admin" className="btn btn-white btn-sm rounded-pill">انتشار</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== benefits section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مزایای سیستم</h2>
              <h3 className="display-4 mb-5">چرا سیستم سایت‌ساز پارس آموز؟</h3>
            </div>
          </div>

          <div className="row gy-6">
            {benefits.map((benefit, index) => (
              <div className="col-lg-3 col-md-6 text-center" key={index}>
                <div className="bg-white rounded-lg p-6 shadow-sm h-100">
                  <div className="bg-soft-primary rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className={`${benefit.icon} text-primary fs-28`}></i>
                  </div>
                  <h4 className="mb-3">{benefit.title}</h4>
                  <p className="text-muted mb-3">{benefit.description}</p>
                  <div className="bg-primary text-white rounded-pill px-3 py-1 persian-numbers">
                    {benefit.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== statistics section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">آمار و ارقام</h2>
              <h3 className="display-4 mb-5">قدرت سیستم سایت‌ساز در اعداد</h3>
            </div>
          </div>

          <div className="row gy-6">
            {statistics.map((stat, index) => (
              <div className="col-lg-3 col-md-6 text-center" key={index}>
                <div className={`${stat.color} text-white rounded-lg p-6 mx-auto mb-4`}>
                  <h2 className="counter text-white persian-numbers mb-2">{stat.number}</h2>
                  <p className="mb-0 text-white opacity-90">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== call to action section ========== */}
      <section className="wrapper bg-primary text-white rtl-content">
        <div className="container py-14 py-md-16 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="display-4 mb-5 text-white">آماده ساخت سایت رویایی‌تان هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین حالا با سیستم سایت‌ساز پارس آموز شروع به طراحی کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin" className="btn btn-lg btn-white rounded-pill">
                  شروع طراحی
                </a>
                <a href="#features" className="btn btn-lg btn-outline-white rounded-pill">
                  مشاهده قابلیت‌ها
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
