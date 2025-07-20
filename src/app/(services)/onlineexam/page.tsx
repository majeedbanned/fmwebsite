"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

// Online Exam System Overview Data
const onlineExamSystemOverview = `
سامانه آزمون آنلاین پارس آموز، پلتفرم پیشرفته و جامعی برای برگزاری، مدیریت و ارزیابی آزمون‌های الکترونیکی است که با استفاده از تکنولوژی‌های مدرن وب و طراحی کاربرپسند، امکان برگزاری آزمون‌های استاندارد و حرفه‌ای را با حداکثر امنیت و دقت فراهم می‌کند. این سیستم قادر است انواع مختلف آزمون‌ها از ساده‌ترین تست‌های چندگزینه‌ای تا پیچیده‌ترین آزمون‌های ریاضی و علمی را پشتیبانی کند.

مدیریت آزمون‌ها و زمان‌بندی (Exam Management & Scheduling):
• سیستم مدیریت کامل آزمون‌ها با امکان تعیین تاریخ شروع و پایان دقیق با تقویم شمسی
• پشتیبانی از انواع مختلف زمان‌بندی: آزمون‌های زمان‌دار کلی، زمان‌بندی سوال به سوال، آزمون‌های آزاد
• نمایش وضعیت‌های مختلف آزمون شامل فعال، آینده، گذشته با رنگ‌بندی بصری مناسب
• محاسبه و نمایش زمان باقی‌مانده تا شروع یا پایان آزمون به صورت لحظه‌ای
• امکان تنظیم پیام‌های قبل و بعد از آزمون برای ارائه دستورالعمل‌ها و توضیحات
• سیستم یادآوری خودکار و اعلان‌رسانی برای آزمون‌های نزدیک
• پشتیبانی از آزمون‌های چندجلسه‌ای و تکراری با برنامه‌ریزی پیشرفته
• امکان تعلیق موقت، تغییر زمان و اصلاح تنظیمات آزمون در حین برگزاری

کنترل دسترسی نقش‌محور (Role-Based Access Control):
• مدیران مدرسه: دسترسی کامل به تمام آزمون‌ها، آمار و گزارش‌های جامع مدرسه
• معلمان: دسترسی به آزمون‌های اختصاصی که برای آن‌ها تعریف شده و کلاس‌هایی که تدریس می‌کنند
• دانش‌آموزان: دسترسی به آزمون‌های مربوط به کلاس، گروه یا شخصی‌سازی شده برای آن‌ها
• والدین: امکان مشاهده نتایج فرزندان و پیگیری پیشرفت تحصیلی
• سیستم احراز هویت امن با رمزنگاری دوعاملی برای آزمون‌های مهم
• کنترل IP و مکان برای جلوگیری از دسترسی غیرمجاز
• ثبت کامل لاگ‌های دسترسی و فعالیت‌های کاربران در طول آزمون
• امکان محدودسازی دسترسی بر اساس زمان، مکان و دستگاه

رابط آزمون‌دهی پیشرفته (Advanced Exam Interface):
• طراحی واکنش‌گرا و بهینه شده برای تمام دستگاه‌ها از موبایل تا دسکتاپ
• پشتیبانی کامل از زبان فارسی با چیدمان راست به چپ (RTL) و فونت‌های مناسب
• نمایش تایمر لحظه‌ای با هشدارهای بصری و صوتی برای زمان‌های حساس
• سیستم ناوبری پیشرفته بین سؤالات با امکان علامت‌گذاری و بازگشت سریع
• ذخیره خودکار پاسخ‌ها برای جلوگیری از از دست رفتن اطلاعات
• حالت تمام‌صفحه برای تمرکز بیشتر و جلوگیری از حواس‌پرتی
• پشتیبانی از کیبوردشورت‌ها برای ناوبری سریع‌تر (جهت‌نماها، Enter، Space)
• سیستم هشدار برای سؤالات بی‌پاسخ و یادآوری قبل از اتمام آزمون

پشتیبانی از انواع سؤالات (Question Types Support):
• سؤالات چندگزینه‌ای کلاسیک با 2 تا 8 گزینه قابل تنظیم
• سؤالات متنی کوتاه و بلند با امکان بررسی دستی یا خودکار
• سؤالات ریاضی با پشتیبانی کامل از MathJax برای فرمول‌ها و معادلات پیچیده
• سؤالات تصویری با قابلیت بارگذاری تصاویر با کیفیت بالا
• سؤالات صوتی و ویدئویی برای ارزیابی مهارت‌های شنیداری و بصری
• سؤالات ترتیبی و تطبیقی برای ارزیابی‌های خلاقانه
• سؤالات پر کردن جای خالی با امکان چندین پاسخ صحیح
• سؤالات ترکیبی با قسمت‌های مختلف در یک سؤال واحد

سیستم امتیازدهی و ارزیابی (Scoring & Assessment System):
• امتیازدهی انعطاف‌پذیر با امکان تعیین وزن مختلف برای هر سؤال
• محاسبه خودکار نمرات با دقت بالا و سرعت بالا
• سیستم امتیاز منفی قابل تنظیم برای پاسخ‌های غلط
• دسته‌بندی سؤالات بر اساس موضوع و محاسبه نمره هر دسته جداگانه
• آمار تفصیلی شامل تعداد پاسخ‌های صحیح، غلط و بی‌پاسخ
• محاسبه رتبه دانش‌آموز در کلاس، مدرسه و سطح ملی
• تحلیل عملکرد با نمودارها و چارت‌های بصری قابل فهم
• مقایسه عملکرد با میانگین کلاس و شناسایی نقاط قوت و ضعف

گزارش‌گیری جامع و تحلیل نتایج (Comprehensive Reporting & Analytics):
• داشبورد نتایج شخصی با نمایش کامل عملکرد فردی
• گزارش‌های آماری دقیق شامل میانگین، واریانس و انحراف معیار
• تحلیل عملکرد بر اساس دسته‌بندی سؤالات و موضوعات درسی
• رتبه‌بندی و مقایسه با سایر شرکت‌کنندگان آزمون
• نمودارهای پیشرفت زمانی برای ردیابی بهبود عملکرد
• گزارش زمان صرف شده برای هر سؤال و تحلیل سرعت پاسخ‌دهی
• آمار تفصیلی برای معلمان شامل تحلیل سؤالات دشوار و آسان
• صادرات گزارش‌ها به فرمت‌های مختلف (PDF، Excel، Word)

مشاهده پاسخنامه و بررسی (Answer Sheet Review):
• نمایش کامل پاسخنامه با مقایسه پاسخ‌های داده شده با پاسخ‌های صحیح
• رنگ‌بندی بصری برای تشخیص سریع پاسخ‌های صحیح، غلط و بی‌پاسخ
• نمایش توضیحات تفصیلی برای هر سؤال در صورت تعریف شدن
• امکان مقایسه پاسخ‌های خود با میانگین کلاس
• نمایش زمان صرف شده برای هر سؤال و تحلیل استراتژی آزمون‌دهی
• امکان چاپ پاسخنامه برای مطالعه آفلاین
• ذخیره و آرشیو تمام پاسخنامه‌ها برای مراجعه آینده
• سیستم نظردهی و ارزیابی کیفیت سؤالات توسط شرکت‌کنندگان

امنیت و مقابله با تقلب (Security & Anti-Cheating):
• سیستم نظارت هوشمند با ردیابی فعالیت‌های مشکوک
• جلوگیری از کپی کردن متن سؤالات و پاسخ‌ها
• غیرفعال کردن کلیک راست و دسترسی به منوهای سیستمی
• تشخیص تعویض تب یا خروج از حالت تمام‌صفحه
• محدودیت زمانی برای بازگشت به آزمون پس از قطع ارتباط
• رمزنگاری کامل اطلاعات آزمون و ارتباطات
• سیستم تشخیص دستگاه‌های مختلف و جلوگیری از ورود همزمان
• ثبت تصاویر تصادفی از وب‌کم در طول آزمون (اختیاری)

مدیریت تصاویر و رسانه (Media & Image Management):
• بارگذاری و مدیریت تصاویر سؤالات با کیفیت بالا
• فشرده‌سازی هوشمند تصاویر برای بارگذاری سریع‌تر
• پشتیبانی از فرمت‌های مختلف تصویری (JPG، PNG، GIF، SVG)
• سیستم CDN برای سرعت بالای نمایش تصاویر
• امکان زوم و بزرگنمایی تصاویر در حین آزمون
• پشتیبانی از فایل‌های صوتی برای آزمون‌های شنیداری
• قابلیت نمایش ویدئو برای سؤالات تخصصی
• سیستم واترمارک خودکار برای محافظت از کپی‌رایت

تنظیمات پیشرفته آزمون (Advanced Exam Settings):
• انتخاب جهت نمایش سؤالات (عمودی یا افقی)
• تنظیم حالت نمایش (تک صفحه، چند صفحه، سؤال به سؤال)
• امکان اختلاط تصادفی سؤالات و گزینه‌ها برای جلوگیری از تقلب
• تعیین تعداد دفعات مجاز برای شرکت در آزمون
• تنظیم پیام‌های سفارشی برای شروع، پایان و وسط آزمون
• امکان تعریف پیش‌نیازها و شرایط شرکت در آزمون
• سیستم رمز عبور اختصاصی برای آزمون‌های محرمانه
• تنظیم محدودیت‌های جغرافیایی و زمانی برای دسترسی

همگام‌سازی و پشتیبان‌گیری (Sync & Backup):
• همگام‌سازی خودکار اطلاعات بین دستگاه‌های مختلف
• پشتیبان‌گیری لحظه‌ای از پاسخ‌ها و پیشرفت آزمون
• سیستم بازیابی اطلاعات در صورت قطع اینترنت یا مشکل فنی
• ذخیره‌سازی ابری با رمزنگاری برای امنیت بالا
• قابلیت ادامه آزمون از جایی که قطع شده حتی با تغییر دستگاه
• آرشیو کامل تاریخچه آزمون‌ها و نتایج برای سال‌های متمادی
• صادرات و واردات اطلاعات برای انتقال بین سیستم‌های مختلف
• پشتیبانی از استانداردهای بین‌المللی تبادل اطلاعات آموزشی

این سیستم آزمون آنلاین پیشرفته، ابزاری بی‌نظیر برای ارزیابی دقیق، منصفانه و استاندارد دانش‌آموزان محسوب می‌شود که با ترکیب تکنولوژی‌های نوین، امنیت بالا، کاربری آسان و قابلیت‌های گسترده، تجربه‌ای منحصر به فرد از آزمون‌دهی مدرن ارائه می‌دهد. از ساده‌ترین کوئیزهای کلاسی تا پیچیده‌ترین آزمون‌های ورودی، این سیستم پاسخگوی تمام نیازهای ارزیابی در محیط‌های آموزشی مختلف است.
`;

const coreFeatures = [
  {
    id: 1,
    title: "رابط آزمون‌دهی پیشرفته",
    description: "تجربه آزمون‌دهی روان و کاربرپسند با امکانات پیشرفته",
    features: [
      "طراحی واکنش‌گرا برای همه دستگاه‌ها",
      "تایمر لحظه‌ای با هشدارهای بصری",
      "ذخیره خودکار پاسخ‌ها",
      "ناوبری آسان بین سؤالات",
      "حالت تمام‌صفحه برای تمرکز",
      "پشتیبانی کامل از زبان فارسی"
    ],
    icon: "uil-desktop",
    color: "bg-blue-500",
    link: "/admin/onlineexam"
  },
  {
    id: 2,
    title: "انواع سؤالات متنوع",
    description: "پشتیبانی از انواع مختلف سؤالات برای ارزیابی جامع",
    features: [
      "سؤالات چندگزینه‌ای",
      "سؤالات متنی کوتاه و بلند",
      "سؤالات ریاضی با MathJax",
      "سؤالات تصویری با کیفیت بالا",
      "سؤالات صوتی و ویدئویی",
      "سؤالات ترتیبی و تطبیقی"
    ],
    icon: "uil-question-circle",
    color: "bg-green-500",
    link: "/admin/onlineexam"
  },
  {
    id: 3,
    title: "سیستم امتیازدهی هوشمند",
    description: "محاسبه دقیق نمرات و ارائه تحلیل‌های جامع",
    features: [
      "امتیازدهی انعطاف‌پذیر",
      "محاسبه خودکار نمرات",
      "دسته‌بندی موضوعی سؤالات",
      "رتبه‌بندی و مقایسه",
      "آمار تفصیلی عملکرد",
      "تحلیل نقاط قوت و ضعف"
    ],
    icon: "uil-award",
    color: "bg-purple-500",
    link: "/admin/onlineexam"
  },
  {
    id: 4,
    title: "امنیت و مقابله با تقلب",
    description: "سیستم امنیتی پیشرفته برای آزمون‌های معتبر",
    features: [
      "نظارت هوشمند فعالیت‌ها",
      "جلوگیری از کپی کردن",
      "تشخیص تعویض تب",
      "رمزنگاری کامل اطلاعات",
      "کنترل دسترسی نقش‌محور",
      "ثبت لاگ‌های کامل"
    ],
    icon: "uil-shield-check",
    color: "bg-orange-500",
    link: "/admin/onlineexam"
  }
];

const examTypes = [
  {
    title: "آزمون‌های زمان‌دار",
    description: "آزمون‌ها با زمان‌بندی دقیق و کنترل شده",
    examples: ["آزمون‌های ورودی", "امتحانات میان‌ترم", "آزمون‌های تعیین سطح", "المپیادهای علمی", "آزمون‌های استخدامی", "کوئیزهای سریع"],
    icon: "uil-clock",
    color: "bg-blue-600"
  },
  {
    title: "آزمون‌های موضوعی",
    description: "آزمون‌های تخصصی در حوزه‌های مختلف علمی",
    examples: ["ریاضی و فیزیک", "زبان انگلیسی", "علوم تجربی", "ادبیات فارسی", "تاریخ و جغرافیا", "کامپیوتر و فناوری"],
    icon: "uil-book-open",
    color: "bg-green-600"
  },
  {
    title: "آزمون‌های تصویری",
    description: "آزمون‌هایی با محتوای بصری و تصویری",
    examples: ["هندسه و نقشه‌کشی", "آناتومی پزشکی", "شناسایی گیاهان", "تفسیر نمودار", "تحلیل تصاویر", "آزمون‌های هنری"],
    icon: "uil-image",
    color: "bg-purple-600"
  },
  {
    title: "آزمون‌های تطبیقی",
    description: "آزمون‌های هوشمند که با عملکرد تطبیق می‌یابند",
    examples: ["تعیین سطح زبان", "ارزیابی مهارت", "آزمون‌های شخصیت‌شناسی", "سنجش استعداد", "تست‌های روان‌شناختی", "ارزیابی مهارت‌های فنی"],
    icon: "uil-brain",
    color: "bg-orange-600"
  }
];

const userRoles = [
  {
    role: "مدیران مدرسه",
    description: "کنترل کامل بر تمام آزمون‌ها و آمار مدرسه",
    permissions: ["مشاهده تمام آزمون‌های مدرسه", "دسترسی به آمار جامع", "مدیریت دسترسی کاربران", "تنظیم پارامترهای امنیتی", "صادرات گزارش‌های کامل", "نظارت بر فرآیند آزمون‌ها"],
    icon: "uil-building",
    color: "bg-purple-600"
  },
  {
    role: "معلمان",
    description: "دسترسی به آزمون‌های اختصاصی و کلاس‌های تدریسی",
    permissions: ["مشاهده آزمون‌های مربوطه", "دسترسی به نتایج دانش‌آموزان", "تحلیل عملکرد کلاس‌ها", "مشاهده آمار تفصیلی", "دانلود گزارش‌های آموزشی", "پیگیری پیشرفت دانش‌آموزان"],
    icon: "uil-graduation-cap",
    color: "bg-blue-600"
  },
  {
    role: "دانش‌آموزان",
    description: "شرکت در آزمون‌ها و مشاهده نتایج شخصی",
    permissions: ["شرکت در آزمون‌های مجاز", "مشاهده نتایج شخصی", "بررسی پاسخنامه", "مقایسه با میانگین کلاس", "پیگیری پیشرفت تحصیلی", "دریافت آمار عملکرد"],
    icon: "uil-user",
    color: "bg-green-600"
  },
  {
    role: "والدین",
    description: "پیگیری عملکرد و نتایج فرزندان",
    permissions: ["مشاهده نتایج فرزندان", "دریافت گزارش‌های پیشرفت", "مقایسه با میانگین کلاس", "پیگیری حضور در آزمون‌ها", "دسترسی به تحلیل‌های آموزشی", "دریافت اعلان‌های مهم"],
    icon: "uil-home",
    color: "bg-orange-600"
  }
];

const systemWorkflow = [
  {
    step: "۱",
    title: "ورود به سیستم",
    description: "احراز هویت و مشاهده فهرست آزمون‌های قابل دسترس",
    icon: "uil-signin",
    color: "primary",
    duration: "۳۰ ثانیه"
  },
  {
    step: "۲",
    title: "انتخاب آزمون",
    description: "انتخاب آزمون مطلوب و مطالعه دستورالعمل‌ها",
    icon: "uil-clipboard-alt",
    color: "success",
    duration: "۱ دقیقه"
  },
  {
    step: "۳",
    title: "شرکت در آزمون",
    description: "پاسخ‌دهی به سؤالات با تایمر و ذخیره خودکار",
    icon: "uil-edit",
    color: "info",
    duration: "متغیر"
  },
  {
    step: "۴",
    title: "مشاهده نتایج",
    description: "دریافت نمرات، رتبه و تحلیل عملکرد",
    icon: "uil-chart-bar",
    color: "warning",
    duration: "فوری"
  }
];

const advancedFeatures = [
  {
    id: 1,
    title: "تحلیل عملکرد پیشرفته",
    description: "ارائه تحلیل‌های عمیق از عملکرد و پیشرفت",
    features: [
      "آمار تفصیلی به تفکیک موضوع",
      "مقایسه با میانگین کلاس",
      "نمودارهای پیشرفت زمانی",
      "شناسایی نقاط قوت و ضعف",
      "پیشنهادات بهبود عملکرد",
      "رتبه‌بندی و صدک‌بندی"
    ],
    icon: "uil-analytics",
    color: "bg-indigo-500"
  },
  {
    id: 2,
    title: "پاسخنامه هوشمند",
    description: "بررسی کامل پاسخ‌ها با تحلیل‌های دقیق",
    features: [
      "مقایسه پاسخ‌ها با کلید صحیح",
      "نمایش توضیحات تفصیلی",
      "آمار زمان صرف شده",
      "تحلیل استراتژی آزمون‌دهی",
      "رنگ‌بندی بصری پاسخ‌ها",
      "امکان چاپ و ذخیره"
    ],
    icon: "uil-document-text",
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "گزارش‌گیری جامع",
    description: "تولید گزارش‌های تخصصی و قابل تنظیم",
    features: [
      "گزارش‌های فردی و گروهی",
      "صادرات به فرمت‌های مختلف",
      "نمودارها و چارت‌های بصری",
      "گزارش‌های مقایسه‌ای",
      "آمار زمان‌بندی شده",
      "قالب‌های سفارشی گزارش"
    ],
    icon: "uil-file-chart-line",
    color: "bg-red-500"
  },
  {
    id: 4,
    title: "مدیریت زمان هوشمند",
    description: "کنترل دقیق زمان با انعطاف‌پذیری بالا",
    features: [
      "تایمر لحظه‌ای با دقت بالا",
      "هشدارهای زمانی چندمرحله‌ای",
      "زمان‌بندی انعطاف‌پذیر",
      "توقف و ادامه آزمون",
      "تنظیم زمان اضافی",
      "محاسبه زمان مؤثر"
    ],
    icon: "uil-clock-five",
    color: "bg-yellow-500"
  }
];

const benefits = [
  {
    title: "دقت بالا",
    description: "ارزیابی دقیق و منصفانه عملکرد",
    icon: "uil-bullseye",
    stat: "۹۹٪"
  },
  {
    title: "صرفه‌جویی زمان",
    description: "کاهش زمان برگزاری و تصحیح",
    icon: "uil-clock",
    stat: "۸۵٪"
  },
  {
    title: "امنیت بالا",
    description: "محافظت از سؤالات و جلوگیری از تقلب",
    icon: "uil-shield-check",
    stat: "۱۰۰٪"
  },
  {
    title: "کاربری آسان",
    description: "رابط ساده و قابل فهم برای همه",
    icon: "uil-smile",
    stat: "۹۵٪"
  }
];

const statistics = [
  {
    number: "۱۰+",
    label: "نوع سؤال پشتیبانی شده",
    color: "bg-blue-500"
  },
  {
    number: "نامحدود",
    label: "ظرفیت برگزاری آزمون",
    color: "bg-green-500"
  },
  {
    number: "لحظه‌ای",
    label: "محاسبه و نمایش نتایج",
    color: "bg-purple-500"
  },
  {
    number: "۲۴/۷",
    label: "دسترسی و پشتیبانی",
    color: "bg-orange-500"
  }
];

export default function OnlineExamServices() {
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

        .exam-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 25px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .exam-demo:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .exam-demo::before {
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

        .exam-type {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border-top: 3px solid #3b82f6;
        }

        .exam-type:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .exam-interface {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border-radius: 12px;
          padding: 20px;
          color: white;
          transition: all 0.3s ease;
        }

        .exam-interface:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(240, 147, 251, 0.3);
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">سامانه آزمون آنلاین</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                پلتفرم پیشرفته
                <span className="underline"> برگزاری آزمون‌های الکترونیکی</span> با امنیت بالا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== overview section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-12">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمای کلی سیستم</h2>
              <h3 className="display-4 mb-5">آشنایی جامع با سامانه آزمون آنلاین</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="سامانه آزمون آنلاین پارس آموز" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {onlineExamSystemOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-desktop fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">رابط پیشرفته</h4>
                      <p className="mb-0">آزمون‌دهی آسان و روان</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-question-circle fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">انواع سؤالات</h4>
                      <p className="mb-0">پشتیبانی گسترده</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-award fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">امتیازدهی هوشمند</h4>
                      <p className="mb-0">محاسبه دقیق نمرات</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-shield-check fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">امنیت بالا</h4>
                      <p className="mb-0">مقابله با تقلب</p>
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
              <h3 className="display-4 mb-5">ویژگی‌های کلیدی سامانه آزمون آنلاین</h3>
              <p className="lead">ابزارهای پیشرفته برگزاری آزمون‌های الکترونیکی</p>
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
                        ورود به آزمون‌ها
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== exam types section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">انواع آزمون‌ها</h2>
              <h3 className="display-4 mb-5">طیف گسترده آزمون‌های پشتیبانی شده</h3>
              <p className="lead">از کوئیزهای ساده تا آزمون‌های تخصصی</p>
            </div>
          </div>

          <div className="row gy-6">
            {examTypes.map((type, index) => (
              <div className="col-lg-6" key={index}>
                <div className="exam-type h-100">
                  <div className="d-flex align-items-center mb-4">
                    <div className={`${type.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                         style={{ width: '50px', height: '50px' }}>
                      <i className={`${type.icon} fs-22`}></i>
                    </div>
                    <h5 className="mb-0">{type.title}</h5>
                  </div>
                  
                  <p className="text-muted mb-4">{type.description}</p>
                  
                  <ul className="list-unstyled">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="uil uil-arrow-left text-primary me-2"></i>
                        {example}
                      </li>
                    ))}
                  </ul>
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
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">فرآیند کار</h2>
              <h3 className="display-4 mb-5">مراحل شرکت در آزمون</h3>
              <p className="lead">راهنمای گام به گام آزمون‌دهی</p>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6">
            {systemWorkflow.map((workflow, index) => (
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
              <h3 className="display-4 mb-5">امکانات حرفه‌ای سامانه آزمون</h3>
              <p className="lead">ابزارهای تخصصی ارزیابی و تحلیل</p>
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
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمایش سیستم</h2>
              <h3 className="display-4 mb-5">دسترسی به آزمون‌های آنلاین</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-4">
              <div className="exam-demo">
                <i className="uil uil-clipboard-alt fs-40 mb-3"></i>
                <h5 className="mb-3">فهرست آزمون‌ها</h5>
                <p className="mb-3 small opacity-90">مشاهده • انتخاب • شرکت</p>
                <a href="/admin/onlineexam" className="btn btn-white btn-sm rounded-pill">ورود</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="exam-demo">
                <i className="uil uil-edit fs-40 mb-3"></i>
                <h5 className="mb-3">شرکت در آزمون</h5>
                <p className="mb-3 small opacity-90">پاسخ‌دهی • تایمر • ذخیره</p>
                <a href="/admin/onlineexam" className="btn btn-white btn-sm rounded-pill">ورود</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="exam-demo">
                <i className="uil uil-chart-bar fs-40 mb-3"></i>
                <h5 className="mb-3">نتایج و تحلیل</h5>
                <p className="mb-3 small opacity-90">نمرات • رتبه • پاسخنامه</p>
                <a href="/admin/onlineexam" className="btn btn-white btn-sm rounded-pill">ورود</a>
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
              <h3 className="display-4 mb-5">چرا سامانه آزمون آنلاین پارس آموز؟</h3>
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
              <h3 className="display-4 mb-5">قدرت سیستم در اعداد</h3>
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
              <h3 className="display-4 mb-5 text-white">آماده تجربه آزمون‌دهی مدرن هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین امروز از امکانات پیشرفته سامانه آزمون آنلاین پارس آموز استفاده کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/onlineexam" className="btn btn-lg btn-white rounded-pill">
                  شروع آزمون‌دهی
                </a>
                <a href="#features" className="btn btn-lg btn-outline-white rounded-pill">
                  مشاهده ویژگی‌ها
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
