"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

// Agenda System Overview Data
const agendaSystemOverview = `
سامانه تقویم و مدیریت رویدادهای پارس آموز، سیستم هوشمند و یکپارچه‌ای برای برنامه‌ریزی، سازماندهی و پیگیری رویدادهای آموزشی، اداری و فرهنگی مدرسه است. این سیستم با استفاده از تقویم شمسی و طراحی کاربرپسند، امکان مدیریت کامل برنامه‌های مدرسه را از جزئی‌ترین رویدادهای کلاسی تا بزرگ‌ترین مناسبت‌های مدرسه فراهم می‌کند.

مدیریت تقویم شمسی و رویدادها (Persian Calendar & Event Management):
• نمایش تقویم کامل با تاریخ‌های شمسی دقیق و پشتیبانی کامل از زبان فارسی
• ناوبری آسان بین ماه‌ها با نمایش کامل ساختار هفته‌های شمسی
• برجسته‌سازی روز جاری و نمایش تعداد رویدادهای هر روز
• ایجاد رویدادهای جدید با کلیک بر روی تاریخ مورد نظر
• تنظیم عنوان، توضیحات تفصیلی و زمان دقیق برای هر رویداد
• پشتیبانی از رویدادهای چندروزه و تکراری
• جستجوی پیشرفته در عناوین و توضیحات رویدادها
• فیلترینگ رویدادها بر اساس نوع، تاریخ و ایجادکننده

سیستم زمان‌بندی و زنگ‌های درسی (Time Scheduling & Class Periods):
• تعریف رویدادها بر اساس زنگ‌های درسی (۱ تا ۱۲)
• مدیریت برنامه زمانی دقیق کلاس‌ها و معلمان
• جلوگیری از تداخل زمانی رویدادها و کلاس‌ها
• نمایش برنامه روزانه هر معلم و کلاس
• تنظیم یادآوری‌های خودکار قبل از شروع رویدادها
• مدیریت تعطیلات، روزهای آزاد و برنامه‌های ویژه
• امکان جابجایی و تغییر زمان رویدادها با حفظ یکپارچگی
• محاسبه و نمایش زمان باقی‌مانده تا شروع هر رویداد

کنترل دسترسی نقش‌محور (Role-Based Access Control):
• مدیران مدرسه: دسترسی کامل به ایجاد، ویرایش و حذف تمام رویدادها
• معلمان: ایجاد رویدادهای مربوط به کلاس‌ها و دروس تحت تدریس خود
• دانش‌آموزان: مشاهده رویدادهای مربوط به کلاس‌ها و فعالیت‌های مدرسه
• والدین: دسترسی به رویدادهای مربوط به فرزندان و اطلاعیه‌های عمومی
• تنظیم سطوح دسترسی مختلف برای انواع رویدادها
• کنترل مجوز ویرایش و حذف بر اساس ایجادکننده رویداد
• سیستم تأیید برای رویدادهای حساس و مهم
• ثبت کامل تاریخچه تغییرات و ایجادکنندگان رویدادها

ارتباط با سیستم آموزشی (Educational System Integration):
• ربط مستقیم رویدادها با معلمان، کلاس‌ها و دروس مشخص
• نمایش اطلاعات کامل معلم، کلاس و درس در جزئیات هر رویداد
• فیلترینگ رویدادها بر اساس کلاس، درس یا معلم مورد نظر
• دسترسی سریع به اطلاعات دانش‌آموزان حاضر در رویداد
• تولید گزارش‌های تخصصی از رویدادهای هر معلم یا کلاس
• همگام‌سازی با سیستم حضور و غیاب برای رویدادهای کلاسی
• یکپارچگی با سیستم نمره‌دهی برای امتحانات و آزمون‌ها
• ارتباط با سیستم اطلاع‌رسانی برای ارسال یادآوری‌های خودکار

انواع رویدادها و دسته‌بندی (Event Types & Categories):
• رویدادهای آموزشی: امتحانات، آزمون‌ها، ارائه‌ها، پروژه‌ها
• رویدادهای اداری: جلسات، کنفرانس‌ها، برنامه‌ریزی‌ها
• رویدادهای فرهنگی: مناسبت‌ها، جشن‌ها، نمایشگاه‌ها
• رویدادهای ورزشی: مسابقات، تمرینات، المپیادها
• رویدادهای اجتماعی: اردوها، بازدیدها، فعالیت‌های گروهی
• رویدادهای مدرسه: مراسم رسمی، اعلان‌های مهم، تعطیلات
• رنگ‌بندی خودکار رویدادها بر اساس نوع و اهمیت
• نشان‌گذاری ویژه برای رویدادهای اضطراری و فوری

نمایش تفصیلی و گزارش‌گیری (Detailed Display & Reporting):
• نمایش جزئیات کامل هر رویداد شامل تاریخ، زمان، مکان و توضیحات
• محاسبه و نمایش روزهای باقی‌مانده تا شروع هر رویداد
• تفکیک رویدادهای گذشته، امروز و آینده با رنگ‌بندی مناسب
• آمار کامل تعداد رویدادهای هر ماه، هفته و روز
• گزارش فعالیت‌های هر معلم و میزان مشارکت در رویدادها
• تولید تقویم ماهانه قابل چاپ برای استفاده آفلاین
• صادرات اطلاعات رویدادها به فرمت‌های مختلف
• پیگیری حضور و مشارکت در رویدادهای مختلف

ویژگی‌های پیشرفته و کاربردی (Advanced Features):
• رابط کاربری واکنش‌گرا و بهینه شده برای تمام دستگاه‌ها
• پشتیبانی کامل از طراحی راست به چپ (RTL) برای زبان فارسی
• سیستم یادآوری‌های هوشمند از طریق پیام، ایمیل و پیامک
• امکان اشتراک‌گذاری رویدادها با سایر اعضای مدرسه
• ثبت نظرات و بازخوردها در مورد رویدادهای برگزار شده
• پیش‌نمایش تصویری تقویم برای چاپ و نمایش روی تابلوها
• ادغام با تقویم‌های محبوب (Google Calendar، Outlook)
• پشتیبان‌گیری خودکار از اطلاعات تقویم و رویدادها

امنیت و حفظ اطلاعات (Security & Data Protection):
• رمزنگاری کامل اطلاعات رویدادها و دسترسی‌ها
• ثبت کامل لاگ‌های دسترسی و تغییرات انجام شده
• سیستم بازیابی اطلاعات در صورت حذف اشتباهی
• کنترل دقیق مجوزهای مشاهده و ویرایش رویدادها
• حفاظت از اطلاعات شخصی و حریم خصوصی کاربران
• پشتیبان‌گیری منظم و خودکار از پایگاه داده تقویم
• سیستم تأیید برای عملیات حساس و مهم
• رعایت کامل استانداردهای امنیتی بین‌المللی

این سیستم جامع تقویم و مدیریت رویدادها، ابزاری ضروری برای مدیریت مؤثر زمان، منابع و فعالیت‌های مدرسه محسوب می‌شود که با ارائه نمای کلی از تمام برنامه‌ها، امکان برنامه‌ریزی بهتر، جلوگیری از تداخل فعالیت‌ها و افزایش هماهنگی بین تمام اعضای جامعه آموزشی را فراهم می‌کند. با طراحی کاربرپسند و قابلیت‌های پیشرفته، این سیستم تجربه‌ای منحصر به فرد از مدیریت زمان و رویدادها در محیط آموزشی ارائه می‌دهد.
`;

const coreFeatures = [
  {
    id: 1,
    title: "تقویم شمسی هوشمند",
    description: "نمایش کامل تقویم با تاریخ‌های شمسی و ناوبری آسان",
    features: [
      "نمایش تقویم کامل شمسی",
      "ناوبری بین ماه‌ها و سال‌ها",
      "برجسته‌سازی روز جاری",
      "نمایش تعداد رویدادهای هر روز",
      "پشتیبانی کامل از زبان فارسی",
      "طراحی واکنش‌گرا برای موبایل"
    ],
    icon: "uil-calendar-alt",
    color: "bg-blue-500",
    link: "/admin/agenda"
  },
  {
    id: 2,
    title: "مدیریت رویدادهای آموزشی",
    description: "ایجاد و مدیریت انواع رویدادهای مدرسه",
    features: [
      "ایجاد رویدادهای جدید با کلیک ساده",
      "تنظیم عنوان و توضیحات تفصیلی",
      "ربط با معلمان، کلاس‌ها و دروس",
      "انتخاب زنگ درسی (۱ تا ۱۲)",
      "ویرایش و حذف رویدادها",
      "دسته‌بندی انواع رویدادها"
    ],
    icon: "uil-clipboard-notes",
    color: "bg-green-500",
    link: "/admin/agenda"
  },
  {
    id: 3,
    title: "کنترل دسترسی نقش‌محور",
    description: "مدیریت مجوزها بر اساس نقش کاربری",
    features: [
      "مدیران: دسترسی کامل به همه رویدادها",
      "معلمان: ایجاد رویداد برای کلاس‌های خود",
      "دانش‌آموزان: مشاهده رویدادهای مربوطه",
      "کنترل مجوز ویرایش و حذف",
      "تمایز رویدادهای مدرسه و معلمان",
      "ثبت ایجادکننده هر رویداد"
    ],
    icon: "uil-shield-check",
    color: "bg-purple-500",
    link: "/admin/agenda"
  },
  {
    id: 4,
    title: "یکپارچگی با سیستم آموزشی",
    description: "ادغام کامل با سایر بخش‌های مدیریت مدرسه",
    features: [
      "ربط مستقیم با اطلاعات معلمان",
      "اتصال به کلاس‌ها و دروس",
      "همگام‌سازی با برنامه درسی",
      "فیلترینگ بر اساس کلاس و درس",
      "گزارش‌گیری تخصصی",
      "یکپارچگی با سیستم حضور و غیاب"
    ],
    icon: "uil-sitemap",
    color: "bg-orange-500",
    link: "/admin/agenda"
  }
];

const eventTypes = [
  {
    title: "رویدادهای آموزشی",
    description: "امتحانات، آزمون‌ها، ارائه‌ها و فعالیت‌های درسی",
    examples: ["امتحانات میان‌ترم و پایان‌ترم", "آزمون‌های کلاسی و عملکردی", "ارائه پروژه‌های دانش‌آموزی", "کلاس‌های تقویتی و مشاوره"],
    icon: "uil-book-open",
    color: "bg-blue-600"
  },
  {
    title: "رویدادهای اداری",
    description: "جلسات، برنامه‌ریزی‌ها و امور اداری مدرسه",
    examples: ["جلسات شورای معلمان", "کنفرانس‌های آموزشی", "برنامه‌ریزی ترم جدید", "ارزیابی عملکرد معلمان"],
    icon: "uil-briefcase",
    color: "bg-green-600"
  },
  {
    title: "رویدادهای فرهنگی",
    description: "مناسبت‌ها، جشن‌ها و برنامه‌های فرهنگی",
    examples: ["جشن روز معلم و دانش‌آموز", "هفته کتاب و کتابخوانی", "نمایشگاه علوم و هنر", "مسابقات ادبی و شعر"],
    icon: "uil-palette",
    color: "bg-purple-600"
  },
  {
    title: "رویدادهای ورزشی",
    description: "مسابقات، تمرینات و فعالیت‌های ورزشی",
    examples: ["مسابقات ورزشی بین کلاس‌ها", "تمرینات تیم‌های مدرسه", "المپیاد ورزشی استانی", "روز ورزش و نشاط"],
    icon: "uil-football",
    color: "bg-orange-600"
  }
];

const userRoles = [
  {
    role: "مدیران مدرسه",
    description: "کنترل کامل بر تمام رویدادها و تقویم مدرسه",
    permissions: ["ایجاد و ویرایش همه رویدادها", "حذف هر نوع رویداد", "مشاهده آمار کامل", "مدیریت دسترسی‌ها", "تولید گزارش‌های مدیریتی", "تنظیم تقویم سالانه"],
    icon: "uil-crown",
    color: "bg-purple-600"
  },
  {
    role: "معلمان",
    description: "مدیریت رویدادهای کلاس‌های تحت تدریس",
    permissions: ["ایجاد رویداد برای کلاس‌های خود", "ویرایش رویدادهای ایجاد شده", "مشاهده تقویم کامل مدرسه", "دسترسی به اطلاعات دانش‌آموزان", "ثبت رویدادهای آموزشی", "برنامه‌ریزی امتحانات"],
    icon: "uil-graduation-cap",
    color: "bg-blue-600"
  },
  {
    role: "دانش‌آموزان",
    description: "مشاهده برنامه‌ها و رویدادهای مربوط به خود",
    permissions: ["مشاهده تقویم کلاس‌ها", "دیدن جزئیات رویدادها", "دریافت یادآوری‌ها", "مشاهده امتحانات و آزمون‌ها", "دسترسی به برنامه روزانه", "نمایش روزهای تعطیل"],
    icon: "uil-book-reader",
    color: "bg-green-600"
  },
  {
    role: "والدین",
    description: "اطلاع از برنامه‌ها و رویدادهای فرزندان",
    permissions: ["مشاهده رویدادهای فرزندان", "دریافت اطلاعیه‌های مهم", "مشاهده تاریخ امتحانات", "دسترسی به تقویم مدرسه", "دریافت یادآوری‌ها", "مشاهده تعطیلات"],
    icon: "uil-home",
    color: "bg-orange-600"
  }
];

const systemWorkflow = [
  {
    step: "۱",
    title: "انتخاب تاریخ",
    description: "کلیک بر روی تاریخ مورد نظر در تقویم شمسی",
    icon: "uil-calendar-alt",
    color: "primary",
    duration: "۵ ثانیه"
  },
  {
    step: "۲",
    title: "ایجاد رویداد",
    description: "پر کردن فرم رویداد با عنوان، توضیحات و جزئیات",
    icon: "uil-plus-circle",
    color: "success",
    duration: "۲ دقیقه"
  },
  {
    step: "۳",
    title: "انتخاب زمان و کلاس",
    description: "تعیین زنگ درسی، معلم، کلاس و درس مربوطه",
    icon: "uil-clock",
    color: "info",
    duration: "۱ دقیقه"
  },
  {
    step: "۴",
    title: "ذخیره و نمایش",
    description: "ذخیره رویداد و نمایش در تقویم برای همه کاربران",
    icon: "uil-check-circle",
    color: "warning",
    duration: "فوری"
  }
];

const advancedFeatures = [
  {
    id: 1,
    title: "محاسبه روزهای باقی‌مانده",
    description: "نمایش هوشمند زمان باقی‌مانده تا رویدادها",
    features: [
      "محاسبه دقیق با تقویم شمسی",
      "نمایش امروز، فردا، گذشته",
      "رنگ‌بندی بر اساس زمان باقی‌مانده",
      "هشدار برای رویدادهای نزدیک",
      "یادآوری‌های خودکار",
      "اولویت‌بندی رویدادها"
    ],
    icon: "uil-hourglass",
    color: "bg-indigo-500"
  },
  {
    id: 2,
    title: "جستجو و فیلترینگ پیشرفته",
    description: "یافتن سریع رویدادها با ابزارهای قدرتمند",
    features: [
      "جستجو در عنوان و توضیحات",
      "فیلتر بر اساس نوع رویداد",
      "فیلتر بر اساس معلم یا کلاس",
      "جستجوی تاریخی",
      "ذخیره فیلترهای پرکاربرد",
      "جستجوی پیشرفته چندمعیاره"
    ],
    icon: "uil-search",
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "گزارش‌گیری و آمارها",
    description: "تولید گزارش‌های مفصل از رویدادها",
    features: [
      "آمار ماهانه و سالانه رویدادها",
      "گزارش فعالیت هر معلم",
      "تحلیل پراکندگی رویدادها",
      "گزارش حضور در رویدادها",
      "صادرات به فرمت‌های مختلف",
      "نمودارهای تحلیلی"
    ],
    icon: "uil-chart-bar",
    color: "bg-red-500"
  },
  {
    id: 4,
    title: "یادآوری‌ها و اطلاع‌رسانی",
    description: "سیستم هوشمند اطلاع‌رسانی رویدادها",
    features: [
      "یادآوری‌های خودکار",
      "ارسال پیامک و ایمیل",
      "اعلان‌های درون سیستمی",
      "تنظیم زمان یادآوری",
      "اطلاع‌رسانی تغییرات",
      "یادآوری‌های شخصی‌سازی شده"
    ],
    icon: "uil-bell",
    color: "bg-yellow-500"
  }
];

const benefits = [
  {
    title: "برنامه‌ریزی بهتر",
    description: "سازماندهی مؤثر زمان و منابع مدرسه",
    icon: "uil-schedule",
    stat: "۸۰٪"
  },
  {
    title: "هماهنگی بیشتر",
    description: "جلوگیری از تداخل و بهبود هماهنگی",
    icon: "uil-sync",
    stat: "۹۰٪"
  },
  {
    title: "شفافیت اطلاعات",
    description: "دسترسی آسان همه به برنامه‌ها",
    icon: "uil-eye",
    stat: "۱۰۰٪"
  },
  {
    title: "صرفه‌جویی زمان",
    description: "کاهش زمان برنامه‌ریزی و هماهنگی",
    icon: "uil-clock",
    stat: "۷۰٪"
  }
];

const statistics = [
  {
    number: "۱۲",
    label: "زنگ درسی پشتیبانی شده",
    color: "bg-blue-500"
  },
  {
    number: "نامحدود",
    label: "تعداد رویدادهای قابل ثبت",
    color: "bg-green-500"
  },
  {
    number: "۴",
    label: "نوع اصلی رویداد",
    color: "bg-purple-500"
  },
  {
    number: "لحظه‌ای",
    label: "به‌روزرسانی تقویم",
    color: "bg-orange-500"
  }
];

export default function AgendaServices() {
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

        .agenda-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 25px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .agenda-demo:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .agenda-demo::before {
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

        .event-type {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border-top: 3px solid #3b82f6;
        }

        .event-type:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .calendar-preview {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border-radius: 12px;
          padding: 20px;
          color: white;
          transition: all 0.3s ease;
        }

        .calendar-preview:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(240, 147, 251, 0.3);
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">تقویم و مدیریت رویدادها</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                سامانه هوشمند
                <span className="underline"> تقویم شمسی و مدیریت رویدادها</span> برای مدارس
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
              <h3 className="display-4 mb-5">آشنایی جامع با سامانه تقویم</h3>
            </div>
          </div>

          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="سامانه تقویم پارس آموز" className="rounded shadow-lg" />
              </figure>
            </div>

            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {agendaSystemOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-calendar-alt fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">تقویم شمسی</h4>
                      <p className="mb-0">هوشمند و دقیق</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-clipboard-notes fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">مدیریت رویدادها</h4>
                      <p className="mb-0">ایجاد و سازماندهی</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-shield-check fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">کنترل دسترسی</h4>
                      <p className="mb-0">نقش‌محور و امن</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-sitemap fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">یکپارچگی</h4>
                      <p className="mb-0">ادغام با سیستم آموزشی</p>
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
              <h3 className="display-4 mb-5">ویژگی‌های کلیدی سامانه تقویم</h3>
              <p className="lead">ابزارهای پیشرفته مدیریت زمان و رویدادها</p>
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
                        ورود به تقویم
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== event types section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">انواع رویدادها</h2>
              <h3 className="display-4 mb-5">دسته‌بندی رویدادهای مدرسه</h3>
              <p className="lead">مدیریت انواع مختلف فعالیت‌ها و برنامه‌ها</p>
            </div>
          </div>

          <div className="row gy-6">
            {eventTypes.map((type, index) => (
              <div className="col-lg-6" key={index}>
                <div className="event-type h-100">
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
              <h3 className="display-4 mb-5">مراحل ایجاد رویداد</h3>
              <p className="lead">راهنمای گام به گام ثبت رویداد جدید</p>
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
              <h3 className="display-4 mb-5">امکانات حرفه‌ای سامانه تقویم</h3>
              <p className="lead">ابزارهای تخصصی مدیریت رویدادها</p>
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
              <h3 className="display-4 mb-5">دسترسی به تقویم رویدادها</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-4">
              <div className="agenda-demo">
                <i className="uil uil-calendar-alt fs-40 mb-3"></i>
                <h5 className="mb-3">تقویم شمسی</h5>
                <p className="mb-3 small opacity-90">نمایش • ناوبری • مدیریت</p>
                <a href="/admin/agenda" className="btn btn-white btn-sm rounded-pill">ورود</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="agenda-demo">
                <i className="uil uil-plus-circle fs-40 mb-3"></i>
                <h5 className="mb-3">ایجاد رویداد</h5>
                <p className="mb-3 small opacity-90">سریع • ساده • کامل</p>
                <a href="/admin/agenda" className="btn btn-white btn-sm rounded-pill">ورود</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="agenda-demo">
                <i className="uil uil-chart-bar fs-40 mb-3"></i>
                <h5 className="mb-3">گزارش‌گیری</h5>
                <p className="mb-3 small opacity-90">آمار • تحلیل • صادرات</p>
                <a href="/admin/agenda" className="btn btn-white btn-sm rounded-pill">ورود</a>
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
              <h3 className="display-4 mb-5">چرا سامانه تقویم پارس آموز؟</h3>
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
              <h3 className="display-4 mb-5 text-white">آماده شروع برنامه‌ریزی هوشمند هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین امروز از قدرت سامانه تقویم و مدیریت رویدادهای پارس آموز استفاده کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/agenda" className="btn btn-lg btn-white rounded-pill">
                  ورود به تقویم
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
