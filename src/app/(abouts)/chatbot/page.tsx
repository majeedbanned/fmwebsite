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

// AI Chatbot System Overview Data
const chatbotSystemOverview = `
دستیار هوش مصنوعی پارس آموز، سیستم پیشرفته و هوشمندی است که با بهره‌گیری از جدیدترین تکنولوژی‌های هوش مصنوعی و یادگیری ماشین، قابلیت گفتگوی طبیعی و روان به زبان فارسی را فراهم می‌کند. این دستیار قادر است به انواع سؤالات کاربران پاسخ دهد، اطلاعات مورد نیاز را از پایگاه داده‌های مدرسه استخراج کند و راهنمایی‌های تخصصی ارائه دهد.

پردازش زبان طبیعی فارسی (Persian Natural Language Processing):
• درک عمیق متن فارسی با پشتیبانی کامل از دستور زبان و قواعد نگارشی
• تشخیص خودکار قصد کاربر (Intent Recognition) و استخراج موجودیت‌های مهم از جملات
• پردازش انواع سؤالات شامل اطلاعاتی، راهنمایی، محاسباتی و تحلیلی
• قابلیت درک متن‌های پیچیده و چندبخشی با حفظ زمینه گفتگو
• پشتیبانی از زبان عامیانه و رسمی فارسی با تطبیق مناسب با مخاطب
• تصحیح خودکار املا و پیشنهاد کلمات مناسب در صورت ابهام
• درک اختصارات، اصطلاحات تخصصی و عبارات محاوره‌ای
• تحلیل احساسات و تون مکالمه برای ارائه پاسخ‌های متناسب

مدیریت گفتگوهای چندنخه‌ای (Multi-Thread Conversation Management):
• سیستم پیشرفته مدیریت گفتگوهای موازی با حفظ زمینه هر نخ گفتگو
• ایجاد، ذخیره و مدیریت نامحدود گفتگوهای مجزا برای موضوعات مختلف
• حفظ تاریخچه کامل مکالمات با امکان جستجو و بازیابی آسان
• نام‌گذاری خودکار گفتگوها بر اساس موضوع یا تاریخ ایجاد
• امکان ادامه گفتگوهای قبلی حتی پس از قطع ارتباط
• مدیریت حافظه گفتگو برای حفظ زمینه در طول مکالمات طولانی
• گروه‌بندی گفتگوها بر اساس موضوع، اهمیت یا دسته‌بندی کاربری
• ارسال خلاصه گفتگوها و نکات کلیدی به درخواست کاربر

ادغام با پایگاه داده (Database Integration):
• اتصال مستقیم به پایگاه داده MongoDB برای دسترسی به اطلاعات به‌روز مدرسه
• تولید خودکار کوئری‌های پیچیده بر اساس سؤالات طبیعی کاربر
• جستجوی هوشمند در میان اطلاعات دانش‌آموزان، معلمان، دروس و نمرات
• دسترسی به آمار و گزارش‌های آموزشی، مالی و اداری مدرسه
• به‌روزرسانی خودکار اطلاعات و ارائه داده‌های لحظه‌ای
• حفظ امنیت اطلاعات با کنترل دسترسی و رمزنگاری داده‌ها
• پشتیبانی از کوئری‌های پیچیده با فیلترها، مرتب‌سازی و گروه‌بندی
• امکان دسترسی به داده‌های تاریخی و تحلیل روندها

رابط کاربری پیشرفته (Advanced User Interface):
• طراحی واکنش‌گرا و بهینه شده برای تمام دستگاه‌ها از موبایل تا دسکتاپ
• پشتیبانی کامل از چیدمان راست به چپ (RTL) برای زبان فارسی
• تایپوگرافی حرفه‌ای با فونت‌های فارسی زیبا و خوانا
• طراحی مدرن با انیمیشن‌های نرم و تجربه کاربری روان
• نمایش وضعیت پردازش پیام‌ها با اندیکاتورهای بصری
• اسکرول خودکار به آخرین پیام‌های ارسالی
• کیبوردشورت‌ها برای دسترسی سریع به عملکردهای مختلف
• حالت تمام‌صفحه برای تمرکز بیشتر روی گفتگو

قابلیت‌های تخصصی و پیشرفته (Advanced Features):
• حالت دیباگ برای توسعه‌دهندگان و کاربران فنی جهت مشاهده جزئیات فنی
• نمایش اطلاعات عملکرد شامل زمان پردازش، مصرف توکن و آمار استفاده
• مانیتورینگ لحظه‌ای مصرف منابع و بهینه‌سازی عملکرد سیستم
• لاگ‌گیری کامل از تمام تعاملات برای تحلیل و بهبود عملکرد
• تنظیمات قابل شخصی‌سازی برای تطبیق با نیازهای مختلف کاربران
• امکان صادرات گفتگوها به فرمت‌های مختلف (PDF، Word، Text)
• تحلیل الگوهای استفاده و ارائه پیشنهادات بهبود
• پشتیبانی از API برای ادغام با سیستم‌های خارجی

امنیت و حریم خصوصی (Security & Privacy):
• رمزنگاری کامل اطلاعات در حین انتقال و ذخیره‌سازی
• کنترل دسترسی مبتنی بر نقش‌های کاربری (RBAC)
• احراز هویت امن و مدیریت نشست‌های کاربری
• مطابقت با استانداردهای امنیتی و قوانین حفاظت از داده‌ها
• حذف خودکار داده‌های حساس پس از مدت زمان تعریف شده
• کنترل IP و محدودیت‌های جغرافیایی در صورت نیاز
• مانیتورینگ امنیتی و تشخیص تهدیدات احتمالی
• پشتیبان‌گیری خودکار و سیستم بازیابی در شرایط اضطراری

هوش مصنوعی و یادگیری (AI & Machine Learning):
• استفاده از مدل‌های زبانی پیشرفته برای درک و تولید متن فارسی
• یادگیری مداوم از تعاملات کاربر برای بهبود دقت پاسخ‌ها
• تشخیص خودکار الگوهای رفتاری کاربران و شخصی‌سازی تجربه
• پیش‌بینی نیازهای کاربر بر اساس تاریخچه گفتگوها
• بهینه‌سازی خودکار عملکرد بر اساس بازخورد کاربران
• قابلیت تعمیم دانش از یک حوزه به حوزه‌های مرتبط
• تحلیل عمیق متن برای استخراج معنا و مفهوم از پیام‌ها
• ادغام چندین منبع اطلاعاتی برای ارائه پاسخ‌های جامع‌تر

پیکربندی و سفارشی‌سازی (Configuration & Customization):
• قابلیت تنظیم شخصیت و سبک پاسخ‌گویی دستیار
• امکان تعریف دستورالعمل‌های اختصاصی برای حوزه‌های مختلف
• پیکربندی سطوح دسترسی برای انواع مختلف کاربران
• تنظیم زمان پاسخ‌دهی و محدودیت‌های کاربری
• امکان اضافه کردن دانش تخصصی و اطلاعات سفارشی
• پیکربندی زبان، لهجه و سبک نوشتاری مناسب با مخاطب
• تعریف میانبرها و دستورات سریع برای عملیات رایج
• امکان ادغام با سیستم‌های خارجی و منابع اطلاعاتی

گزارش‌گیری و تحلیل (Reporting & Analytics):
• تولید گزارش‌های تفصیلی از الگوهای استفاده و سؤالات رایج
• آمار کامل عملکرد شامل زمان پاسخ، دقت و رضایت کاربران
• تحلیل روندهای استفاده و شناسایی نیازهای جدید کاربران
• گزارش‌های مدیریتی برای بهینه‌سازی منابع و عملکرد سیستم
• نمودارهای بصری و چارت‌های تعاملی برای نمایش آمار
• مقایسه عملکرد در دوره‌های زمانی مختلف
• شناسایی موضوعات پرتکرار و ایجاد پاسخ‌های استاندارد
• تحلیل رضایت کاربران و ارائه پیشنهادات بهبود

این دستیار هوش مصنوعی پیشرفته، ابزاری بی‌نظیر برای ارتقای تجربه کاربری و ارائه خدمات هوشمند در محیط آموزشی محسوب می‌شود که با ترکیب فناوری‌های نوین، کاربری آسان و قابلیت‌های گسترده، نقشی کلیدی در دیجیتالی کردن و هوشمندسازی فرآیندهای آموزشی ایفا می‌کند. از پاسخگویی به ساده‌ترین سؤالات تا انجام پیچیده‌ترین تحلیل‌های آموزشی، این سیستم پاسخگوی تمام نیازهای اطلاعاتی و ارتباطی جامعه آموزشی است.
`;

const coreFeatures = [
  {
    id: 1,
    title: "پردازش زبان طبیعی فارسی",
    description: "درک عمیق زبان فارسی و پاسخ‌گویی هوشمند",
    features: [
      "درک کامل دستور زبان فارسی",
      "تشخیص قصد و استخراج موجودیت‌ها",
      "پشتیبانی از زبان رسمی و عامیانه",
      "تصحیح خودکار املا",
      "تحلیل احساسات و تون گفتگو",
      "درک اصطلاحات تخصصی"
    ],
    icon: "uil-brain",
    color: "bg-blue-500",
    link: "/admin/chatbot7"
  },
  {
    id: 2,
    title: "مدیریت گفتگوهای چندنخه‌ای",
    description: "سازماندهی و مدیریت گفتگوهای موازی",
    features: [
      "ایجاد گفتگوهای نامحدود",
      "حفظ زمینه هر نخ گفتگو",
      "تاریخچه کامل مکالمات",
      "نام‌گذاری خودکار گفتگوها",
      "ادامه گفتگوهای قبلی",
      "گروه‌بندی موضوعی"
    ],
    icon: "uil-chat",
    color: "bg-green-500",
    link: "/admin/chatbot7"
  },
  {
    id: 3,
    title: "ادغام با پایگاه داده",
    description: "دسترسی هوشمند به اطلاعات مدرسه",
    features: [
      "اتصال مستقیم به MongoDB",
      "تولید کوئری‌های خودکار",
      "جستجوی هوشمند اطلاعات",
      "داده‌های لحظه‌ای",
      "کنترل امنیت دسترسی",
      "پشتیبانی از کوئری‌های پیچیده"
    ],
    icon: "uil-database",
    color: "bg-purple-500",
    link: "/admin/chatbot7"
  },
  {
    id: 4,
    title: "رابط کاربری پیشرفته",
    description: "طراحی مدرن و کاربرپسند",
    features: [
      "طراحی واکنش‌گرا",
      "پشتیبانی کامل RTL",
      "تایپوگرافی فارسی زیبا",
      "انیمیشن‌های نرم",
      "اسکرول خودکار",
      "کیبوردشورت‌ها"
    ],
    icon: "uil-desktop",
    color: "bg-orange-500",
    link: "/admin/chatbot7"
  }
];

const chatbotCapabilities = [
  {
    title: "پاسخ‌گویی آموزشی",
    description: "پاسخ به سؤالات مربوط به دروس و برنامه آموزشی",
    examples: ["جدول کلاس‌ها", "نمرات و عملکرد", "تکالیف و پروژه‌ها", "تقویم آموزشی", "منابع درسی", "راهنمایی تحصیلی"],
    icon: "uil-book-reader",
    color: "bg-blue-600"
  },
  {
    title: "اطلاعات اداری",
    description: "دسترسی به اطلاعات اداری و مدیریتی مدرسه",
    examples: ["اطلاعات معلمان", "آمار دانش‌آموزان", "رویدادهای مدرسه", "اطلاعیه‌ها", "قوانین و مقررات", "تماس با مسئولان"],
    icon: "uil-clipboard-notes",
    color: "bg-green-600"
  },
  {
    title: "گزارش‌گیری هوشمند",
    description: "تولید گزارش‌های مختلف از عملکرد و آمار",
    examples: ["آمار حضور و غیاب", "گزارش پیشرفت تحصیلی", "تحلیل عملکرد کلاس", "آمار مالی", "گزارش فعالیت‌ها", "نمودارهای عملکرد"],
    icon: "uil-chart-bar",
    color: "bg-purple-600"
  },
  {
    title: "راهنمایی و پشتیبانی",
    description: "کمک و راهنمایی در استفاده از سیستم‌های مدرسه",
    examples: ["آموزش استفاده از سیستم", "راهنمای فنی", "حل مشکلات رایج", "درخواست پشتیبانی", "آموزش‌های گام به گام", "پاسخ به سؤالات فنی"],
    icon: "uil-question-circle",
    color: "bg-orange-600"
  }
];

const userRoles = [
  {
    role: "مدیران مدرسه",
    description: "دسترسی کامل به تمام امکانات و اطلاعات",
    permissions: ["دسترسی به تمام داده‌ها", "گزارش‌گیری جامع", "مدیریت کاربران", "تنظیمات سیستم", "آمار و تحلیل‌ها", "پیکربندی دستیار"],
    icon: "uil-estate",
    color: "bg-purple-600"
  },
  {
    role: "معلمان",
    description: "دسترسی به اطلاعات کلاس‌ها و دانش‌آموزان",
    permissions: ["اطلاعات کلاس‌های تدریسی", "نمرات و عملکرد دانش‌آموزان", "حضور و غیاب", "برنامه درسی", "تکالیف و ارزیابی‌ها", "گزارش‌های آموزشی"],
    icon: "uil-graduation-cap",
    color: "bg-blue-600"
  },
  {
    role: "دانش‌آموزان",
    description: "دسترسی به اطلاعات شخصی و تحصیلی",
    permissions: ["نمرات شخصی", "برنامه کلاسی", "تکالیف و پروژه‌ها", "حضور و غیاب شخصی", "اطلاعیه‌های کلاس", "منابع آموزشی"],
    icon: "uil-user",
    color: "bg-green-600"
  },
  {
    role: "والدین",
    description: "پیگیری وضعیت تحصیلی فرزندان",
    permissions: ["عملکرد تحصیلی فرزند", "حضور و غیاب", "گزارش‌های پیشرفت", "ارتباط با معلمان", "اطلاعیه‌های مدرسه", "برنامه‌ها و رویدادها"],
    icon: "uil-home",
    color: "bg-orange-600"
  }
];

const systemWorkflow = [
  {
    step: "۱",
    title: "شروع گفتگو",
    description: "ایجاد گفتگوی جدید یا انتخاب از تاریخچه",
    icon: "uil-play-circle",
    color: "primary",
    duration: "فوری"
  },
  {
    step: "۲",
    title: "ارسال سؤال",
    description: "تایپ سؤال به زبان فارسی طبیعی",
    icon: "uil-message",
    color: "success",
    duration: "۳۰ ثانیه"
  },
  {
    step: "۳",
    title: "پردازش هوشمند",
    description: "تحلیل سؤال و جستجو در پایگاه داده",
    icon: "uil-brain",
    color: "info",
    duration: "۲-۵ ثانیه"
  },
  {
    step: "۴",
    title: "دریافت پاسخ",
    description: "ارائه پاسخ دقیق و مفصل به فارسی",
    icon: "uil-check-circle",
    color: "warning",
    duration: "فوری"
  }
];

const advancedFeatures = [
  {
    id: 1,
    title: "حالت دیباگ پیشرفته",
    description: "مشاهده جزئیات فنی و عملکرد سیستم",
    features: [
      "نمایش کوئری‌های تولید شده",
      "آمار مصرف توکن",
      "زمان‌بندی عملیات",
      "داده‌های خام دریافتی",
      "لاگ‌های تفصیلی سیستم",
      "تحلیل عملکرد"
    ],
    icon: "uil-bug",
    color: "bg-indigo-500"
  },
  {
    id: 2,
    title: "پیکربندی هوشمند",
    description: "تنظیمات پیشرفته و شخصی‌سازی دستیار",
    features: [
      "تنظیم شخصیت دستیار",
      "پیکربندی سطح دسترسی",
      "تعریف دستورالعمل‌های سفارشی",
      "مدیریت منابع اطلاعاتی",
      "تنظیم محدودیت‌های کاربری",
      "بهینه‌سازی عملکرد"
    ],
    icon: "uil-cog",
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "تحلیل و گزارش‌گیری",
    description: "آمار جامع استفاده و عملکرد",
    features: [
      "آمار استفاده کاربران",
      "تحلیل سؤالات رایج",
      "گزارش رضایت کاربران",
      "روندهای استفاده",
      "عملکرد زمان‌بندی شده",
      "نمودارهای تعاملی"
    ],
    icon: "uil-analytics",
    color: "bg-red-500"
  },
  {
    id: 4,
    title: "امنیت و حریم خصوصی",
    description: "محافظت کامل از اطلاعات و ارتباطات",
    features: [
      "رمزنگاری end-to-end",
      "کنترل دسترسی نقش‌محور",
      "مانیتورینگ امنیتی",
      "پشتیبان‌گیری خودکار",
      "حذف داده‌های موقت",
      "مطابقت با استانداردها"
    ],
    icon: "uil-shield-check",
    color: "bg-yellow-500"
  }
];

const benefits = [
  {
    title: "دسترسی ۲۴/۷",
    description: "پاسخگویی در هر زمان از شبانه‌روز",
    icon: "uil-clock",
    stat: "۲۴/۷"
  },
  {
    title: "دقت بالا",
    description: "پاسخ‌های دقیق و مبتنی بر داده",
    icon: "uil-bullseye",
    stat: "۹۸٪"
  },
  {
    title: "پاسخ سریع",
    description: "زمان پاسخ‌دهی کمتر از ۵ ثانیه",
    icon: "uil-rocket",
    stat: "<۵ ثانیه"
  },
  {
    title: "رضایت کاربران",
    description: "میزان رضایت بالا از خدمات ارائه شده",
    icon: "uil-smile",
    stat: "۹۵٪"
  }
];

const statistics = [
  {
    number: "۱۰۰+",
    label: "نوع سؤال پشتیبانی شده",
    color: "bg-blue-500"
  },
  {
    number: "نامحدود",
    label: "گفتگوهای همزمان",
    color: "bg-green-500"
  },
  {
    number: "فارسی",
    label: "پشتیبانی کامل از زبان",
    color: "bg-purple-500"
  },
  {
    number: "AI",
    label: "هوش مصنوعی پیشرفته",
    color: "bg-orange-500"
  }
];

export default function ChatbotAbout() {
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

        .chatbot-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 25px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .chatbot-demo:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .chatbot-demo::before {
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

        .capability-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border-top: 3px solid #3b82f6;
        }

        .capability-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .ai-interface {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border-radius: 12px;
          padding: 20px;
          color: white;
          transition: all 0.3s ease;
        }

        .ai-interface:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(240, 147, 251, 0.3);
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container pt-10 pt-md-14 text-center">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <h1 className="display-1 mb-4">دستیار هوش مصنوعی پارس آموز</h1>
              <p className="lead fs-lg mb-0">
                پلتفرم پیشرفته
                <span className="underline"> گفتگوی هوشمند</span> با پشتیبانی کامل فارسی
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
              <h3 className="display-4 mb-5">آشنایی جامع با دستیار هوش مصنوعی</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="دستیار هوش مصنوعی پارس آموز" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {chatbotSystemOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-brain fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">هوش مصنوعی</h4>
                      <p className="mb-0">پردازش زبان طبیعی</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-chat fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">گفتگوی چندنخه‌ای</h4>
                      <p className="mb-0">مدیریت مکالمات</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-database fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">ادغام داده</h4>
                      <p className="mb-0">دسترسی هوشمند</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-desktop fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">رابط پیشرفته</h4>
                      <p className="mb-0">تجربه کاربری عالی</p>
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
              <h3 className="display-4 mb-5">ویژگی‌های کلیدی دستیار هوش مصنوعی</h3>
              <p className="lead">فناوری‌های پیشرفته برای گفتگوی هوشمند</p>
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
                        شروع گفتگو
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== capabilities section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">قابلیت‌های کاربردی</h2>
              <h3 className="display-4 mb-5">زمینه‌های کاربرد دستیار هوشمند</h3>
              <p className="lead">پوشش کامل نیازهای آموزشی و اداری</p>
            </div>
          </div>

          <div className="row gy-6">
            {chatbotCapabilities.map((capability, index) => (
              <div className="col-lg-6" key={index}>
                <div className="capability-card h-100">
                  <div className="d-flex align-items-center mb-4">
                    <div className={`${capability.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                         style={{ width: '50px', height: '50px' }}>
                      <i className={`${capability.icon} fs-22`}></i>
                    </div>
                    <h5 className="mb-0">{capability.title}</h5>
                  </div>
                  
                  <p className="text-muted mb-4">{capability.description}</p>
                  
                  <ul className="list-unstyled">
                    {capability.examples.map((example, idx) => (
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
              <h3 className="display-4 mb-5">مراحل گفتگو با دستیار</h3>
              <p className="lead">راهنمای گام به گام استفاده</p>
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
              <h3 className="display-4 mb-5">امکانات حرفه‌ای دستیار</h3>
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
              <h3 className="display-4 mb-5">شروع گفتگو با دستیار هوشمند</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-4">
              <div className="chatbot-demo">
                <i className="uil uil-chat fs-40 mb-3"></i>
                <h5 className="mb-3">گفتگوی جدید</h5>
                <p className="mb-3 small opacity-90">شروع • سؤال • پاسخ</p>
                <a href="/admin/chatbot7" className="btn btn-white btn-sm rounded-pill">شروع</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="chatbot-demo">
                <i className="uil uil-brain fs-40 mb-3"></i>
                <h5 className="mb-3">هوش مصنوعی</h5>
                <p className="mb-3 small opacity-90">تحلیل • درک • پاسخ</p>
                <a href="/admin/chatbot7" className="btn btn-white btn-sm rounded-pill">تجربه</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="chatbot-demo">
                <i className="uil uil-database fs-40 mb-3"></i>
                <h5 className="mb-3">دسترسی داده</h5>
                <p className="mb-3 small opacity-90">جستجو • یافتن • ارائه</p>
                <a href="/admin/chatbot7" className="btn btn-white btn-sm rounded-pill">آزمایش</a>
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
              <h3 className="display-4 mb-5">چرا دستیار هوش مصنوعی پارس آموز؟</h3>
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
              <h3 className="display-4 mb-5">قدرت دستیار در اعداد</h3>
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
              <h3 className="display-4 mb-5 text-white">آماده تجربه گفتگوی هوشمند هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین حالا با دستیار هوش مصنوعی پارس آموز شروع به گفتگو کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/chatbot7" className="btn btn-lg btn-white rounded-pill">
                  شروع گفتگو
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
