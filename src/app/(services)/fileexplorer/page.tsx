"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

// File Explorer System Overview Data
const fileExplorerSystemOverview = `
فایل اکسپلورر پارس آموز، سیستم مدیریت فایل پیشرفته و یکپارچه‌ای است که امکان ذخیره‌سازی، سازماندهی و اشتراک‌گذاری فایل‌ها و پوشه‌ها را در محیط آموزشی فراهم می‌کند. این سیستم با قابلیت‌های امنیتی بالا و کنترل دسترسی دقیق، محیطی امن و کاربرپسند برای مدیریت منابع دیجیتال مدرسه ایجاد می‌کند.

مدیریت فایل‌ها و پوشه‌ها (File & Folder Management):
• ایجاد پوشه‌های سازمان‌یافته با قابلیت محافظت با رمز عبور
• آپلود فایل‌های متنوع شامل اسناد، تصاویر، ویدیو، فایل‌های صوتی و ارائه‌ها
• تغییر نام پوشه‌ها و فایل‌ها با کنترل مجوز مالکیت
• حذف ایمن فایل‌ها و پوشه‌ها با تأییدیه کاربر
• کپی و انتقال فایل‌ها بین پوشه‌های مختلف
• جستجوی سریع در نام فایل‌ها و پوشه‌ها
• مرتب‌سازی بر اساس نام، تاریخ، اندازه و نوع فایل
• پیش‌نمایش فایل‌ها با آیکون‌های تخصصی بر اساس نوع

سیستم دسترسی و مجوزها (Permission & Access Control):
• کنترل دسترسی بر اساس نقش کاربری (مدیر مدرسه، معلم، دانش‌آموز)
• تخصیص دسترسی به کلاس‌ها، گروه‌های آموزشی و کاربران خاص
• مدیریت مجوزهای مشاهده، دانلود و ویرایش برای هر فایل و پوشه
• سیستم مالکیت فایل‌ها با امکان کنترل کامل توسط ایجادکننده
• محدودیت دسترسی بر اساس سطح کاربری و مسئولیت‌های آموزشی
• ثبت کامل اطلاعات ایجادکننده فایل‌ها برای شفافیت و مسئولیت‌پذیری
• امکان تغییر مجوزها به صورت انبوه برای چندین کلاس یا گروه همزمان

حالت‌های نمایش مختلف (Multiple View Modes):
• نمایش آیکون‌های بزرگ برای مشاهده بهتر فایل‌ها و پوشه‌ها
• نمایش آیکون‌های متوسط برای تعادل بین جزئیات و فضای صفحه
• نمایش آیکون‌های کوچک برای نمایش حداکثر تعداد فایل در صفحه
• نمایش فهرست‌وار برای دسترسی سریع به فهرست فایل‌ها
• نمایش جدولی تفصیلی شامل نام، نوع، اندازه، تاریخ ایجاد و عملیات
• تنظیمات شخصی‌سازی نمایش برای هر کاربر
• حفظ تنظیمات نمایش در جلسات مختلف

امکانات آپلود و دانلود (Upload & Download Features):
• آپلود فایل‌های متعدد به صورت همزمان با نوار پیشرفت لحظه‌ای
• پشتیبانی از drag & drop برای آپلود آسان فایل‌ها
• تشخیص خودکار نوع فایل و اعمال آیکون مناسب
• محدودیت اندازه فایل قابل تنظیم توسط مدیر سیستم
• دانلود مستقیم فایل‌ها با حفظ نام و ساختار اصلی
• آپلود در پوشه‌های مشخص با کنترل مجوز ایجادکننده
• نمایش اطلاعات کامل فایل شامل اندازه، تاریخ و ایجادکننده

قابلیت‌های اشتراک‌گذاری (Sharing Capabilities):
• تولید لینک‌های مستقیم برای اشتراک‌گذاری فایل‌ها
• کپی خودکار لینک فایل‌ها در کلیپ‌بورد سیستم
• کنترل زمان‌بندی انقضای لینک‌های اشتراکی
• امکان اشتراک‌گذاری پوشه‌های کامل با تمام محتویات
• ارسال لینک‌های اشتراکی از طریق سیستم‌های پیام‌رسانی داخلی
• پیگیری تعداد دانلود و مشاهده فایل‌های اشتراکی
• تنظیم مجوزهای خاص برای لینک‌های اشتراکی

ناوبری و سازماندهی (Navigation & Organization):
• سیستم breadcrumb برای نمایش مسیر فعلی و ناوبری سریع
• ساختار درختی پوشه‌ها برای سازماندهی منطقی فایل‌ها
• امکان بازگشت سریع به پوشه‌های والد و اصلی
• نشان‌گذاری پوشه‌های محافظت شده با رمز عبور
• نمایش اطلاعات تکمیلی شامل تعداد فایل‌ها و حجم کل پوشه‌ها
• جستجوی پیشرفته در محتوای پوشه‌ها و زیرپوشه‌ها
• فیلترینگ فایل‌ها بر اساس نوع، اندازه و تاریخ ایجاد

امنیت و حفاظت اطلاعات (Security & Data Protection):
• رمزگذاری پوشه‌ها برای محافظت از اطلاعات حساس
• سیستم احراز هویت یکپارچه با پلتفرم آموزشی
• ثبت کامل لاگ‌های دسترسی و عملیات کاربران
• پشتیبان‌گیری خودکار از فایل‌ها و ساختار پوشه‌ها
• محافظت در برابر دسترسی‌های غیرمجاز و نفوذ
• رعایت استانداردهای امنیتی و حریم خصوصی
• امکان بازیابی فایل‌های حذف شده برای مدیران سیستم

تجربه کاربری بهینه (Optimized User Experience):
• رابط کاربری واکنش‌گرا متناسب با تمام دستگاه‌ها
• طراحی راست به چپ بهینه شده برای زبان فارسی
• منوهای زمینه‌ای (context menu) برای دسترسی سریع به عملیات
• کیبوردشورت‌های کاربردی برای عملیات سریع
• انیمیشن‌های نرم و طبیعی برای تعاملات کاربری
• نمایش پیام‌های راهنما و tooltip‌های توضیحی
• سازگاری کامل با مرورگرهای مختلف و نسخه‌های موبایل

این سیستم مدیریت فایل پیشرفته، ابزاری ضروری برای مدارس مدرن محسوب می‌شود که امکان ذخیره‌سازی منظم منابع آموزشی، اشتراک‌گذاری آسان مطالب درسی، مدیریت تکالیف و پروژه‌های دانش‌آموزان و ایجاد آرشیو دیجیتال جامع را فراهم می‌کند. با تأکید بر امنیت، قابلیت استفاده و انعطاف‌پذیری، این سیستم پاسخگوی نیازهای متنوع جامعه آموزشی از مدیران تا دانش‌آموزان است.
`;

const coreFeatures = [
  {
    id: 1,
    title: "مدیریت فایل‌ها و پوشه‌ها",
    description: "ایجاد، ویرایش و سازماندهی فایل‌ها و پوشه‌ها",
    features: [
      "ایجاد پوشه‌های محافظت شده با رمز",
      "آپلود فایل‌های متنوع (اسناد، تصاویر، ویدیو)",
      "تغییر نام و حذف با کنترل مالکیت",
      "کپی و انتقال بین پوشه‌ها",
      "جستجوی سریع و پیشرفته",
      "مرتب‌سازی بر اساس معیارهای مختلف"
    ],
    icon: "uil-folder",
    color: "bg-blue-500",
    link: "/admin/fileexplorer"
  },
  {
    id: 2,
    title: "سیستم دسترسی پیشرفته",
    description: "کنترل دقیق مجوزها و دسترسی‌ها",
    features: [
      "کنترل دسترسی نقش‌محور",
      "تخصیص مجوز به کلاس‌ها و گروه‌ها",
      "مدیریت مالکیت فایل‌ها",
      "سطوح دسترسی متنوع (مشاهده، دانلود، ویرایش)",
      "ثبت کامل اطلاعات ایجادکننده",
      "تغییر مجوزها به صورت انبوه"
    ],
    icon: "uil-shield-check",
    color: "bg-green-500",
    link: "/admin/fileexplorer"
  },
  {
    id: 3,
    title: "حالت‌های نمایش متنوع",
    description: "انواع نمایش برای تجربه بهینه کاربری",
    features: [
      "نمایش آیکون‌های بزرگ، متوسط و کوچک",
      "نمایش فهرست‌وار ساده",
      "نمایش جدولی تفصیلی",
      "تنظیمات شخصی‌سازی نمایش",
      "حفظ تنظیمات کاربر",
      "سازگاری با تمام دستگاه‌ها"
    ],
    icon: "uil-apps",
    color: "bg-purple-500",
    link: "/admin/fileexplorer"
  },
  {
    id: 4,
    title: "اشتراک‌گذاری هوشمند",
    description: "امکانات پیشرفته اشتراک‌گذاری فایل‌ها",
    features: [
      "تولید لینک‌های مستقیم",
      "کپی خودکار در کلیپ‌بورد",
      "کنترل زمان انقضای لینک‌ها",
      "اشتراک‌گذاری پوشه‌های کامل",
      "پیگیری آمار دانلود",
      "ارسال از طریق سیستم پیام‌رسانی"
    ],
    icon: "uil-share",
    color: "bg-orange-500",
    link: "/admin/fileexplorer"
  }
];

const advancedFeatures = [
  {
    id: 1,
    title: "آپلود و دانلود پیشرفته",
    description: "امکانات کامل مدیریت فایل‌ها",
    features: [
      "آپلود چندتایی با نوار پیشرفت",
      "پشتیبانی از drag & drop",
      "تشخیص خودکار نوع فایل",
      "محدودیت اندازه قابل تنظیم",
      "دانلود مستقیم با حفظ ساختار",
      "آپلود در پوشه‌های مشخص"
    ],
    icon: "uil-upload",
    color: "bg-indigo-500"
  },
  {
    id: 2,
    title: "ناوبری و سازماندهی",
    description: "ابزارهای قدرتمند سازماندهی محتوا",
    features: [
      "سیستم breadcrumb پیشرفته",
      "ساختار درختی پوشه‌ها",
      "بازگشت سریع به پوشه‌های والد",
      "نشان‌گذاری پوشه‌های محافظت شده",
      "نمایش اطلاعات تکمیلی پوشه‌ها",
      "جستجوی عمقی در زیرپوشه‌ها"
    ],
    icon: "uil-sitemap",
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "امنیت و حفاظت",
    description: "سیستم امنیتی چندلایه برای محافظت از داده‌ها",
    features: [
      "رمزگذاری پوشه‌ها",
      "احراز هویت یکپارچه",
      "ثبت کامل لاگ‌های دسترسی",
      "پشتیبان‌گیری خودکار",
      "محافظت از نفوذ غیرمجاز",
      "رعایت استانداردهای حریم خصوصی"
    ],
    icon: "uil-lock",
    color: "bg-red-500"
  },
  {
    id: 4,
    title: "تجربه کاربری بهینه",
    description: "طراحی متمرکز بر کاربر و سهولت استفاده",
    features: [
      "رابط واکنش‌گرا",
      "طراحی RTL بهینه شده",
      "منوهای زمینه‌ای",
      "کیبوردشورت‌های کاربردی",
      "انیمیشن‌های نرم",
      "سازگاری کامل با مرورگرها"
    ],
    icon: "uil-user-check",
    color: "bg-yellow-500"
  }
];

const viewModes = [
  {
    mode: "آیکون‌های بزرگ",
    description: "نمایش فایل‌ها با آیکون‌های بزرگ و جذاب",
    benefits: ["مشاهده بهتر نوع فایل‌ها", "تشخیص سریع محتوا", "مناسب برای تصاویر", "نمایش اطلاعات ایجادکننده"]
  },
  {
    mode: "نمایش فهرست‌وار",
    description: "فهرست ساده و فشرده فایل‌ها",
    benefits: ["دسترسی سریع", "صرفه‌جویی در فضا", "مناسب برای فایل‌های متعدد", "ناوبری آسان"]
  },
  {
    mode: "نمایش جدولی",
    description: "جدول تفصیلی با تمام اطلاعات فایل‌ها",
    benefits: ["اطلاعات کامل", "مرتب‌سازی پیشرفته", "مقایسه آسان", "عملیات دسته‌ای"]
  },
  {
    mode: "آیکون‌های متوسط",
    description: "تعادل بین جزئیات و تعداد فایل‌ها",
    benefits: ["نمایش متعادل", "فضای بهینه", "سرعت بارگذاری", "تجربه متعادل"]
  }
];

const userRoles = [
  {
    role: "مدیران مدرسه",
    description: "دسترسی کامل به تمام فایل‌ها و امکانات مدیریتی",
    permissions: ["مدیریت کامل فایل‌ها", "تنظیم مجوزهای سراسری", "مشاهده آمار استفاده", "بازیابی فایل‌های حذف شده"],
    icon: "uil-crown",
    color: "bg-purple-600"
  },
  {
    role: "معلمان",
    description: "مدیریت فایل‌های شخصی و کلاس‌های تحت تدریس",
    permissions: ["آپلود فایل برای کلاس‌ها", "اشتراک‌گذاری با دانش‌آموزان", "مدیریت فایل‌های شخصی", "دسترسی به منابع مشترک"],
    icon: "uil-graduation-cap",
    color: "bg-blue-600"
  },
  {
    role: "دانش‌آموزان",
    description: "دسترسی به فایل‌های مشترک و مدیریت فایل‌های شخصی",
    permissions: ["مشاهده فایل‌های کلاس", "دانلود منابع درسی", "آپلود تکالیف", "مدیریت فایل‌های شخصی"],
    icon: "uil-book-reader",
    color: "bg-green-600"
  },
  {
    role: "والدین",
    description: "دسترسی محدود به منابع مربوط به فرزندان",
    permissions: ["مشاهده منابع درسی", "دانلود گزارش‌ها", "دسترسی به اطلاعیه‌ها", "مشاهده عملکرد فرزندان"],
    icon: "uil-home",
    color: "bg-orange-600"
  }
];

const workflowSteps = [
  {
    step: "۱",
    title: "ایجاد ساختار پوشه‌ها",
    description: "سازماندهی فایل‌ها در پوشه‌های منطقی",
    icon: "uil-folder-plus",
    color: "primary",
    duration: "۲ دقیقه"
  },
  {
    step: "۲",
    title: "آپلود فایل‌ها",
    description: "بارگذاری منابع و مطالب درسی",
    icon: "uil-upload",
    color: "success",
    duration: "۵ دقیقه"
  },
  {
    step: "۳",
    title: "تنظیم مجوزها",
    description: "اختصاص دسترسی به کاربران مناسب",
    icon: "uil-shield-check",
    color: "info",
    duration: "۱ دقیقه"
  },
  {
    step: "۴",
    title: "اشتراک‌گذاری",
    description: "ارسال لینک‌ها و دسترسی‌ها",
    icon: "uil-share",
    color: "warning",
    duration: "۳۰ ثانیه"
  }
];

const fileTypes = [
  {
    title: "اسناد متنی",
    description: "فایل‌های Word، PDF، PowerPoint",
    examples: ["تست‌ها و آزمون‌ها", "جزوات درسی", "ارائه‌های کلاسی", "راهنماهای آموزشی"],
    icon: "uil-file-alt",
    color: "bg-blue-600"
  },
  {
    title: "تصاویر و گرافیک",
    description: "عکس‌ها، نمودارها و تصاویر آموزشی",
    examples: ["تصاویر آموزشی", "نمودارها و چارت‌ها", "عکس‌های فعالیت‌ها", "پوستر و اعلانات"],
    icon: "uil-image",
    color: "bg-green-600"
  },
  {
    title: "فایل‌های ویدیویی",
    description: "ویدیوهای آموزشی و ضبط کلاس‌ها",
    examples: ["ضبط جلسات کلاسی", "ویدیوهای آموزشی", "مستندات علمی", "ارائه‌های تصویری"],
    icon: "uil-video",
    color: "bg-purple-600"
  },
  {
    title: "فایل‌های صوتی",
    description: "ضبط‌های صوتی و موزیک آموزشی",
    examples: ["ضبط محاضرات", "تلفظ زبان‌های خارجی", "موزیک و شعر", "فایل‌های صوتی آموزشی"],
    icon: "uil-music",
    color: "bg-orange-600"
  }
];

const benefits = [
  {
    title: "سازماندهی بهتر",
    description: "مدیریت منظم و سیستماتیک منابع آموزشی",
    icon: "uil-sitemap",
    stat: "۷۵٪"
  },
  {
    title: "دسترسی آسان",
    description: "دسترسی سریع از هر مکان و زمان",
    icon: "uil-clock",
    stat: "۲۴/۷"
  },
  {
    title: "امنیت بالا",
    description: "محافظت کامل از اطلاعات و فایل‌ها",
    icon: "uil-shield-check",
    stat: "۱۰۰٪"
  },
  {
    title: "صرفه‌جویی فضا",
    description: "کاهش نیاز به ذخیره‌سازی فیزیکی",
    icon: "uil-database",
    stat: "۹۰٪"
  }
];

const statistics = [
  {
    number: "۵",
    label: "حالت نمایش مختلف",
    color: "bg-blue-500"
  },
  {
    number: "نامحدود",
    label: "ظرفیت ذخیره‌سازی",
    color: "bg-green-500"
  },
  {
    number: "۱۰+",
    label: "نوع فایل پشتیبانی شده",
    color: "bg-purple-500"
  },
  {
    number: "امن",
    label: "سیستم مجوزهای پیشرفته",
    color: "bg-orange-500"
  }
];

export default function FileExplorerServices() {
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

        .file-explorer-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 25px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .file-explorer-demo:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .file-explorer-demo::before {
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

        .view-mode {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border-top: 3px solid #3b82f6;
        }

        .view-mode:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .file-type-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .file-type-card:hover {
          border-color: #3b82f6;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">فایل اکسپلورر پارس آموز</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                سیستم مدیریت فایل
                <span className="underline"> پیشرفته و امن</span> برای محیط آموزشی
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
              <h3 className="display-4 mb-5">آشنایی جامع با فایل اکسپلورر</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="فایل اکسپلورر پارس آموز" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {fileExplorerSystemOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-folder fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">مدیریت فایل‌ها</h4>
                      <p className="mb-0">سازماندهی هوشمند</p>
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
                      <p className="mb-0">مجوزهای پیشرفته</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-apps fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">حالت‌های نمایش</h4>
                      <p className="mb-0">تجربه بهینه کاربری</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-share fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">اشتراک‌گذاری</h4>
                      <p className="mb-0">لینک‌های هوشمند</p>
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
              <h3 className="display-4 mb-5">ویژگی‌های کلیدی فایل اکسپلورر</h3>
              <p className="lead">ابزارهای کامل برای مدیریت فایل‌ها و پوشه‌ها</p>
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
                        ورود به فایل اکسپلورر
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== advanced features section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">قابلیت‌های پیشرفته</h2>
              <h3 className="display-4 mb-5">امکانات حرفه‌ای فایل اکسپلورر</h3>
              <p className="lead">ابزارهای تخصصی برای مدیریت حرفه‌ای فایل‌ها</p>
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

      {/* ========== view modes section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">حالت‌های نمایش</h2>
              <h3 className="display-4 mb-5">انواع نمایش برای تجربه بهینه</h3>
              <p className="lead">انتخاب حالت نمایش متناسب با نیاز شما</p>
            </div>
          </div>

          <div className="row gy-6">
            {viewModes.map((mode, index) => (
              <div className="col-lg-6" key={index}>
                <div className="view-mode h-100">
                  <h5 className="mb-3 text-primary">{mode.mode}</h5>
                  <p className="text-muted mb-4">{mode.description}</p>
                  
                  <ul className="list-unstyled">
                    {mode.benefits.map((benefit, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="uil uil-arrow-left text-primary me-2"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== file types section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">انواع فایل‌ها</h2>
              <h3 className="display-4 mb-5">پشتیبانی از انواع فایل‌های آموزشی</h3>
              <p className="lead">مدیریت تمام منابع دیجیتال آموزشی</p>
            </div>
          </div>

          <div className="row gy-6">
            {fileTypes.map((type, index) => (
              <div className="col-lg-6" key={index}>
                <div className="file-type-card h-100">
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
                        <i className="uil uil-check text-success me-2"></i>
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
              <p className="lead">کنترل دقیق مجوزها بر اساس نقش کاربری</p>
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
              <h3 className="display-4 mb-5">مراحل استفاده از فایل اکسپلورر</h3>
              <p className="lead">راهنمای گام به گام برای شروع کار</p>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6">
            {workflowSteps.map((workflow, index) => (
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

      {/* ========== demo section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمایش سیستم</h2>
              <h3 className="display-4 mb-5">دسترسی به فایل اکسپلورر</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-4">
              <div className="file-explorer-demo">
                <i className="uil uil-folder-open fs-40 mb-3"></i>
                <h5 className="mb-3">مدیریت فایل‌ها</h5>
                <p className="mb-3 small opacity-90">سازماندهی • آپلود • دانلود</p>
                <a href="/admin/fileexplorer" className="btn btn-white btn-sm rounded-pill">ورود</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="file-explorer-demo">
                <i className="uil uil-shield-check fs-40 mb-3"></i>
                <h5 className="mb-3">کنترل دسترسی</h5>
                <p className="mb-3 small opacity-90">مجوزها • امنیت • حریم خصوصی</p>
                <a href="/admin/fileexplorer" className="btn btn-white btn-sm rounded-pill">ورود</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="file-explorer-demo">
                <i className="uil uil-share fs-40 mb-3"></i>
                <h5 className="mb-3">اشتراک‌گذاری</h5>
                <p className="mb-3 small opacity-90">لینک‌ها • دسترسی مشترک</p>
                <a href="/admin/fileexplorer" className="btn btn-white btn-sm rounded-pill">ورود</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== benefits section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مزایای سیستم</h2>
              <h3 className="display-4 mb-5">چرا فایل اکسپلورر پارس آموز؟</h3>
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
      <section className="wrapper bg-gray rtl-content">
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
              <h3 className="display-4 mb-5 text-white">آماده شروع مدیریت فایل‌ها هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین امروز از قدرت فایل اکسپلورر پیشرفته پارس آموز استفاده کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/fileexplorer" className="btn btn-lg btn-white rounded-pill">
                  ورود به فایل اکسپلورر
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
