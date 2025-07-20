"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

// Real-time Chat System Overview Data
const chatSystemOverview = `
سامانه گفتگوی لحظه‌ای پارس آموز، پلتفرم پیشرفته و یکپارچه‌ای برای برقراری ارتباط مؤثر بین اعضای جامعه آموزشی است. این سیستم با استفاده از تکنولوژی Socket.IO و امکانات مدرن وب، محیطی امن، سریع و کاربرپسند برای تبادل پیام، فایل و اطلاعات فراهم می‌کند.

قابلیت‌های پیام‌رسانی لحظه‌ای (Real-time Messaging):
• ارسال و دریافت پیام‌ها در زمان واقعی بدون نیاز به بروزرسانی صفحه
• نمایش وضعیت آنلاین/آفلاین کاربران و آخرین زمان حضور
• اعلان‌های فوری برای پیام‌های جدید با صدای اختصاصی
• پشتیبانی کامل از زبان فارسی و طراحی راست به چپ (RTL)
• همگام‌سازی خودکار پیام‌ها در تمام دستگاه‌های کاربر
• قابلیت نمایش تعداد کاربران آنلاین در هر اتاق گفتگو

مدیریت اتاق‌های گفتگو (Chatroom Management):
• نمایش فهرست کامل اتاق‌های گفتگوی موجود با امکان جستجو
• دسته‌بندی اتاق‌ها بر اساس کلاس، گروه، معلمان و دانش‌آموزان
• نشان‌گذاری اتاق‌های دارای پیام خوانده نشده با شمارنده دقیق
• امکان ایجاد اتاق‌های جدید توسط مدیران و معلمان مجاز
• تنظیمات دسترسی برای هر اتاق (عمومی، خصوصی، محدود)
• نمایش اطلاعات اتاق شامل تعداد اعضا و آخرین فعالیت

تاریخچه و آرشیو پیام‌ها (Message History):
• ذخیره و نمایش کامل تاریخچه مکالمات قبلی
• قابلیت جستجوی پیشرفته در متن پیام‌ها و فایل‌های ضمیمه
• فیلترینگ پیام‌ها بر اساس تاریخ، فرستنده و نوع محتوا
• بارگذاری تدریجی پیام‌های قدیمی‌تر با اسکرول به بالا
• حفظ موقعیت اسکرول و بازگشت به آخرین پیام مشاهده شده
• امکان صادرات تاریخچه گفتگوها برای آرشیو

پیوست فایل و رسانه (File Attachments):
• ارسال انواع فایل شامل تصاویر، اسناد، ویدیو و فایل‌های متنی
• پیش‌نمایش خودکار تصاویر و فایل‌های قابل مشاهده
• دانلود مستقیم فایل‌ها با نمایش اندازه و نوع فایل
• فشرده‌سازی خودکار تصاویر برای صرفه‌جویی در پهنای باند
• محدودیت اندازه فایل قابل تنظیم توسط مدیر سیستم
• اسکن خودکار فایل‌ها برای تشخیص محتوای مخرب

واکنش‌ها و تعاملات (Reactions & Interactions):
• امکان واکنش سریع به پیام‌ها با ایموجی‌های پرکاربرد
• انتخاب ایموجی دلخواه از پنل کامل ایموجی‌ها
• نمایش لیست کاربرانی که به هر پیام واکنش نشان داده‌اند
• آمار کلی واکنش‌ها و محبوب‌ترین ایموجی‌های استفاده شده
• قابلیت حذف یا تغییر واکنش‌های ثبت شده
• اعلان‌های اختصاصی برای واکنش‌های دریافتی

ویرایش و مدیریت پیام‌ها (Message Management):
• ویرایش پیام‌های ارسال شده با نشان‌گذاری "ویرایش شده"
• حذف پیام‌های خود توسط فرستنده با امکان بازیابی موقت
• پاسخ مستقیم به پیام‌های خاص با ارجاع به متن اصلی
• کپی کردن متن پیام‌ها برای استفاده مجدد
• گزارش پیام‌های نامناسب به مدیران سیستم
• علامت‌گذاری پیام‌های مهم برای دسترسی آسان

احراز هویت و امنیت (Authentication & Security):
• یکپارچگی کامل با سیستم احراز هویت مدرسه
• کنترل دسترسی بر اساس نقش کاربری (مدیر، معلم، دانش‌آموز)
• رمزنگاری انتها به انتها برای محافظت از محتوای پیام‌ها
• ثبت کامل لاگ‌های فعالیت برای نظارت مدیران
• تنظیمات محدودیت زمانی برای دسترسی دانش‌آموزان
• قابلیت مسدودسازی موقت یا دائم کاربران متخلف

طراحی واکنش‌گرا و تجربه کاربری (Responsive Design & UX):
• رابط کاربری بهینه شده برای موبایل، تبلت و دسکتاپ
• تطبیق خودکار با اندازه صفحه و وضوح نمایشگر
• دسترسی آسان به تمام قابلیت‌ها در تمام دستگاه‌ها
• انیمیشن‌های نرم و طبیعی برای تعاملات کاربری
• پشتیبانی کامل از کیبوردهای فارسی و انگلیسی
• حالت تاریک و روشن قابل تنظیم توسط کاربر

این سیستم گفتگوی پیشرفته، ابزاری قدرتمند برای تقویت ارتباطات درون مدرسه‌ای، ارائه پشتیبانی فوری، برگزاری جلسات مجازی و ایجاد فضایی امن برای تبادل نظر بین معلمان، دانش‌آموزان و والدین محسوب می‌شود. با ترکیب تکنولوژی‌های نوین و توجه به نیازهای ویژه محیط آموزشی، تجربه‌ای منحصر به فرد از ارتباط دیجیتال ارائه می‌دهد.
`;

const messagingFeatures = [
  {
    id: 1,
    title: "پیام‌رسانی لحظه‌ای",
    description: "ارسال و دریافت پیام‌ها در زمان واقعی با تکنولوژی Socket.IO",
    features: [
      "ارسال فوری پیام‌ها بدون تأخیر",
      "نمایش وضعیت آنلاین/آفلاین کاربران",
      "اعلان‌های صوتی برای پیام‌های جدید",
      "همگام‌سازی در تمام دستگاه‌ها",
      "پشتیبانی کامل از زبان فارسی",
      "نمایش زمان دقیق ارسال پیام‌ها"
    ],
    icon: "uil-message",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "مدیریت اتاق‌های گفتگو",
    description: "سازماندهی و دسترسی به اتاق‌های مختلف گفتگو",
    features: [
      "فهرست کامل اتاق‌های موجود",
      "جستجوی سریع در نام اتاق‌ها",
      "دسته‌بندی بر اساس کلاس و گروه",
      "شمارنده پیام‌های خوانده نشده",
      "نمایش اعضای آنلاین در هر اتاق",
      "تنظیمات دسترسی و مجوزها"
    ],
    icon: "uil-users-alt",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "پیوست فایل و رسانه",
    description: "ارسال و اشتراک‌گذاری انواع فایل‌ها و رسانه‌ها",
    features: [
      "پشتیبانی از تصاویر، اسناد و ویدیو",
      "پیش‌نمایش خودکار تصاویر",
      "دانلود مستقیم فایل‌ها",
      "فشرده‌سازی هوشمند تصاویر",
      "نمایش اندازه و نوع فایل",
      "محدودیت اندازه قابل تنظیم"
    ],
    icon: "uil-paperclip",
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "واکنش‌ها و تعاملات",
    description: "ابراز احساسات و تعامل با پیام‌ها از طریق ایموجی",
    features: [
      "واکنش سریع با ایموجی‌های پرکاربرد",
      "انتخاب از پنل کامل ایموجی‌ها",
      "نمایش لیست کاربران واکنش‌دهنده",
      "آمار واکنش‌های محبوب",
      "امکان تغییر یا حذف واکنش",
      "اعلان‌های واکنش‌های دریافتی"
    ],
    icon: "uil-smile",
    color: "bg-orange-500"
  }
];

const advancedFeatures = [
  {
    id: 1,
    title: "ویرایش و مدیریت پیام‌ها",
    description: "کنترل کامل بر پیام‌های ارسالی",
    features: [
      "ویرایش پیام‌های ارسال شده",
      "حذف پیام‌ها با امکان بازیابی",
      "پاسخ مستقیم به پیام‌های خاص",
      "کپی کردن متن پیام‌ها",
      "گزارش پیام‌های نامناسب",
      "علامت‌گذاری پیام‌های مهم"
    ],
    icon: "uil-edit",
    color: "bg-indigo-500"
  },
  {
    id: 2,
    title: "تاریخچه و آرشیو",
    description: "دسترسی کامل به تاریخچه مکالمات",
    features: [
      "ذخیره کامل تاریخچه گفتگوها",
      "جستجوی پیشرفته در پیام‌ها",
      "فیلترینگ بر اساس تاریخ و فرستنده",
      "بارگذاری تدریجی پیام‌های قدیمی",
      "حفظ موقعیت اسکرول",
      "صادرات تاریخچه برای آرشیو"
    ],
    icon: "uil-history",
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "احراز هویت و امنیت",
    description: "حفاظت کامل از اطلاعات و ارتباطات",
    features: [
      "یکپارچگی با سیستم احراز هویت",
      "کنترل دسترسی نقش‌محور",
      "رمزنگاری انتها به انتها",
      "ثبت لاگ‌های کامل فعالیت",
      "محدودیت‌های زمانی دسترسی",
      "مسدودسازی کاربران متخلف"
    ],
    icon: "uil-shield-check",
    color: "bg-red-500"
  },
  {
    id: 4,
    title: "طراحی واکنش‌گرا",
    description: "تجربه بهینه در تمام دستگاه‌ها",
    features: [
      "بهینه‌سازی برای موبایل و تبلت",
      "تطبیق با اندازه صفحه نمایش",
      "دسترسی آسان به تمام قابلیت‌ها",
      "انیمیشن‌های نرم و طبیعی",
      "پشتیبانی از کیبوردهای فارسی",
      "حالت تاریک و روشن"
    ],
    icon: "uil-mobile-android",
    color: "bg-yellow-500"
  }
];

const userRoles = [
  {
    role: "مدیران مدرسه",
    description: "دسترسی کامل به تمام اتاق‌ها و قابلیت‌های مدیریتی",
    permissions: ["ایجاد اتاق‌های جدید", "مدیریت کاربران", "مشاهده گزارش‌ها", "تنظیمات سیستم"],
    icon: "uil-crown",
    color: "bg-purple-600"
  },
  {
    role: "معلمان",
    description: "ارتباط با دانش‌آموزان کلاس‌ها و همکاران",
    permissions: ["گفتگو با دانش‌آموزان", "اتاق معلمان", "ارسال فایل", "مدیریت کلاس"],
    icon: "uil-graduation-cap",
    color: "bg-blue-600"
  },
  {
    role: "دانش‌آموزان",
    description: "ارتباط با معلمان و همکلاسی‌ها در محیط کنترل شده",
    permissions: ["گفتگوی کلاسی", "پرسش از معلمان", "دریافت اعلان‌ها", "مطالعه گروهی"],
    icon: "uil-book-reader",
    color: "bg-green-600"
  },
  {
    role: "والدین",
    description: "دریافت اطلاعات و ارتباط با معلمان فرزندان",
    permissions: ["پیام‌های اطلاع‌رسانی", "ارتباط با معلمان", "دریافت گزارش‌ها", "مشاوره"],
    icon: "uil-home",
    color: "bg-orange-600"
  }
];

const workflowSteps = [
  {
    step: "۱",
    title: "ورود به سیستم",
    description: "احراز هویت و دسترسی به داشبورد گفتگو",
    icon: "uil-signin",
    color: "primary",
    duration: "۳۰ ثانیه"
  },
  {
    step: "۲",
    title: "انتخاب اتاق گفتگو",
    description: "مشاهده فهرست اتاق‌ها و انتخاب مورد نظر",
    icon: "uil-chat",
    color: "success",
    duration: "۱۵ ثانیه"
  },
  {
    step: "۳",
    title: "تبادل پیام و فایل",
    description: "ارسال پیام، فایل و استفاده از قابلیت‌های تعاملی",
    icon: "uil-message",
    color: "info",
    duration: "بدون محدودیت"
  },
  {
    step: "۴",
    title: "مدیریت و آرشیو",
    description: "ویرایش، حذف پیام‌ها و دسترسی به تاریخچه",
    icon: "uil-archive",
    color: "warning",
    duration: "در صورت نیاز"
  }
];

const benefits = [
  {
    title: "بهبود ارتباطات",
    description: "تقویت ارتباط بین معلمان، دانش‌آموزان و والدین",
    icon: "uil-comments",
    stat: "۸۰٪"
  },
  {
    title: "پاسخ‌گویی سریع",
    description: "دریافت پاسخ فوری برای سؤالات و مشکلات",
    icon: "uil-rocket",
    stat: "لحظه‌ای"
  },
  {
    title: "صرفه‌جویی زمان",
    description: "کاهش زمان انتظار و افزایش بهره‌وری",
    icon: "uil-clock",
    stat: "۵۰٪"
  },
  {
    title: "دسترسی همه‌جا",
    description: "امکان ارتباط از هر مکان و زمان",
    icon: "uil-globe",
    stat: "۲۴/۷"
  }
];

const statistics = [
  {
    number: "لحظه‌ای",
    label: "سرعت تبادل پیام‌ها",
    color: "bg-blue-500"
  },
  {
    number: "۱۰+",
    label: "نوع فایل پشتیبانی شده",
    color: "bg-green-500"
  },
  {
    number: "امن",
    label: "رمزنگاری انتها به انتها",
    color: "bg-purple-500"
  },
  {
    number: "نامحدود",
    label: "ظرفیت ذخیره‌سازی پیام‌ها",
    color: "bg-orange-500"
  }
];

export default function MyChatServices() {
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

        .chat-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 25px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .chat-demo:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .chat-demo::before {
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

        .message-bubble {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border-radius: 15px 15px 5px 15px;
          padding: 12px 16px;
          color: white;
          display: inline-block;
          margin: 8px 0;
          animation: slideInLeft 0.5s ease-out;
        }

        .message-bubble.sender {
          background: linear-gradient(135deg, #10b981 0%, #047857 100%);
          border-radius: 15px 15px 15px 5px;
          animation: slideInRight 0.5s ease-out;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">سامانه گفتگوی لحظه‌ای پارس آموز</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                پلتفرم پیشرفته
                <span className="underline"> ارتباط آنلاین و پیام‌رسانی</span> برای جامعه آموزشی
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
              <h3 className="display-4 mb-5">آشنایی جامع با سامانه گفتگوی لحظه‌ای</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="سامانه گفتگوی لحظه‌ای پارس آموز" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {chatSystemOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-message fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">پیام‌رسانی لحظه‌ای</h4>
                      <p className="mb-0">Socket.IO و سرعت بالا</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-users-alt fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">اتاق‌های گفتگو</h4>
                      <p className="mb-0">مدیریت هوشمند گروه‌ها</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-paperclip fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">پیوست فایل</h4>
                      <p className="mb-0">تصاویر، اسناد و ویدیو</p>
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
                      <p className="mb-0">رمزنگاری انتها به انتها</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== messaging features section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">قابلیت‌های اصلی</h2>
              <h3 className="display-4 mb-5">ویژگی‌های کلیدی سامانه گفتگو</h3>
              <p className="lead">امکانات جامع برای ارتباط مؤثر و امن</p>
            </div>
          </div>

          <div className="row gy-8">
            {messagingFeatures.map((feature) => (
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

      {/* ========== advanced features section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">قابلیت‌های پیشرفته</h2>
              <h3 className="display-4 mb-5">امکانات حرفه‌ای و پیشرفته</h3>
              <p className="lead">ابزارهای قدرتمند برای مدیریت و کنترل کامل</p>
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

      {/* ========== user roles section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نقش‌های کاربری</h2>
              <h3 className="display-4 mb-5">دسترسی‌های مختلف برای هر کاربر</h3>
              <p className="lead">کنترل دقیق دسترسی بر اساس نقش در مدرسه</p>
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
              <h3 className="display-4 mb-5">مراحل استفاده از سامانه گفتگو</h3>
              <p className="lead">راهنمای گام به گام برای شروع گفتگو</p>
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
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمایش عملی</h2>
              <h3 className="display-4 mb-5">نگاهی به رابط کاربری</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-8 mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center mb-4">
                  <h5 className="text-primary">نمونه گفتگو</h5>
                </div>
                
                <div className="chat-demo-container">
                  <div className="text-left mb-3">
                    <div className="message-bubble">
                      سلام استاد! سؤالی در مورد تکلیف ریاضی داشتم
                    </div>
                    <small className="text-muted">محمد احمدی - ۱۰:۳۰</small>
                  </div>
                  
                  <div className="text-right mb-3">
                    <div className="message-bubble sender">
                      سلام محمد! حتماً. چه سؤالی داری؟
                    </div>
                    <small className="text-muted">استاد رضایی - ۱۰:۳۲</small>
                  </div>
                  
                  <div className="text-left mb-3">
                    <div className="message-bubble">
                      <i className="uil uil-paperclip me-1"></i>
                      تصویر مسئله ارسال شد
                    </div>
                    <small className="text-muted">محمد احمدی - ۱۰:۳۵</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="chat-demo">
                <i className="uil uil-mobile-android fs-40 mb-3"></i>
                <h5 className="mb-3">دسترسی موبایل</h5>
                <p className="mb-0 small opacity-90">همه‌جا • همیشه</p>
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
              <h3 className="display-4 mb-5">چرا سامانه گفتگوی پارس آموز؟</h3>
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
              <h3 className="display-4 mb-5">قدرت سامانه در اعداد</h3>
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
              <h3 className="display-4 mb-5 text-white">آماده شروع گفتگو هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین امروز وارد سامانه شوید و از امکانات پیشرفته ارتباط آنلاین بهره‌مند شوید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/mychat" className="btn btn-lg btn-white rounded-pill">
                  ورود به سامانه گفتگو
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
