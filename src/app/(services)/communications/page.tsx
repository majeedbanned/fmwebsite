"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

// Communication Systems Overview Data
const communicationSystemsOverview = `
سامانه‌های ارتباطی پارس آموز، مجموعه کاملی از ابزارهای پیشرفته برای برقراری ارتباط مؤثر و هدفمند بین اعضای جامعه آموزشی است. این سیستم شامل سه روش ارتباطی اصلی می‌باشد که هر کدام ویژگی‌ها و کاربردهای خاص خود را دارند.

سیستم پیام‌رسانی داخلی (Internal Messaging System):
• ارسال پیام‌های غنی متنی با قابلیت پیوست فایل‌های متنوع (تصاویر، اسناد، ویدیو)
• انتخاب گیرندگان به صورت انفرادی، گروهی، کلاسی یا بر اساس نقش کاربری
• پیگیری وضعیت پیام‌ها با جزئیات کامل (ارسال شده، تحویل داده شده، خوانده شده)
• آمارگیری دقیق از میزان مطالعه پیام‌ها توسط گیرندگان مختلف
• امکان ویرایش و حذف پیام‌های ارسالی با حفظ تاریخچه تغییرات
• جستجوی پیشرفته در محتوای پیام‌ها و پیوست‌های فایل
• نمایش گرافیکی آمار خوانده شدن پیام‌ها با تفکیک گیرندگان
• کنترل دسترسی بر اساس نقش کاربری (مدیر، معلم، دانش‌آموز)

سیستم اعلان‌رسانی هوشمند (Smart Notification System):
• ارسال اعلان‌های فوری به تمام دستگاه‌های کاربران (موبایل، تبلت، دسکتاپ)
• ترکیب اعلان‌های push با پیامک‌های SMS برای اطمینان از دریافت پیام
• تنظیم عنوان و متن اعلان با قابلیت شخصی‌سازی برای گروه‌های مختلف
• ارسال اعلان‌های اضطراری و فوری برای شرایط ویژه
• پیگیری وضعیت تحویل و خوانده شدن اعلان‌ها در زمان واقعی
• برنامه‌ریزی ارسال اعلان‌ها در زمان‌های مشخص شده
• ارسال خودکار اعلان‌ها بر اساس رویدادهای سیستمی (نمرات، حضور و غیاب)
• قابلیت ارسال اعلان‌های چندزبانه برای مدارس بین‌المللی

سیستم پیامک انبوه (Bulk SMS System):
• ثبت‌نام و فعالسازی خطوط پیامک با پنل‌های معتبر ایرانی
• مدیریت اعتبار پیامک با نمایش میزان باقی‌مانده و تاریخ انقضا
• ارسال پیامک‌های انبوه به شماره‌های دانش‌آموزان، معلمان و والدین
• پشتیبانی از پیامک‌های تبلیغاتی و خدماتی با تعرفه‌های متفاوت
• ترکیب محتوای پیامک با اطلاعات شخصی گیرندگان (نام، کلاس، نمره)
• رپورت‌گیری دقیق از وضعیت ارسال و تحویل پیامک‌ها
• امکان ارسال پیامک‌های زمان‌بندی شده برای یادآوری رویدادها
• فیلترینگ خودکار شماره‌های غیرفعال و اعتراض‌کننده

ویژگی‌های مشترک سیستم‌های ارتباطی:
• انتخاب هوشمند گیرندگان بر اساس کلاس، گروه، رشته تحصیلی و نقش کاربری
• تنظیمات دسترسی پیشرفته برای کنترل امکان ارسال پیام توسط کاربران مختلف
• یکپارچگی کامل با سیستم مدیریت مدرسه و دریافت خودکار اطلاعات کاربران
• پشتیبانی کامل از زبان فارسی با طراحی راست به چپ (RTL)
• رابط کاربری واکنش‌گرا و بهینه شده برای تمام دستگاه‌ها
• ثبت کامل لاگ‌های ارسال و دریافت برای نظارت و گزارش‌گیری

امنیت و حریم خصوصی:
• رمزنگاری انتها به انتها برای محافظت از محتوای پیام‌ها
• کنترل دقیق دسترسی بر اساس نقش و مجوزهای کاربری
• ثبت کامل فعالیت‌های کاربران برای حسابرسی و نظارت
• رعایت کامل قوانین حریم خصوصی و GDPR در ذخیره و پردازش اطلاعات
• امکان حذف خودکار پیام‌ها و اطلاعات پس از مدت زمان مشخص
• تأیید هویت دو مرحله‌ای برای دسترسی به بخش‌های حساس

این مجموعه ابزارهای ارتباطی، امکان برقراری ارتباط سریع، مؤثر و امن بین تمام اعضای مدرسه را فراهم می‌کند و به بهبود کیفیت آموزش، افزایش مشارکت والدین، تقویت انسجام اجتماعی و ایجاد فضایی پویا و تعاملی در محیط آموزشی کمک شایانی می‌نماید.
`;

const messagingFeatures = [
  {
    id: 1,
    title: "پیام‌رسانی داخلی",
    description: "سیستم پیام‌رسانی غنی با پیوست فایل",
    features: [
      "ارسال پیام‌های متنی و تصویری",
      "پیوست فایل‌های متنوع (اسناد، تصاویر، ویدیو)",
      "انتخاب گیرندگان انفرادی و گروهی",
      "پیگیری وضعیت خوانده شدن",
      "آمارگیری دقیق مطالعه پیام‌ها",
      "جستجوی پیشرفته در محتوا"
    ],
    icon: "uil-envelope",
    color: "bg-blue-500",
    link: "/admin/messages"
  },
  {
    id: 2,
    title: "اعلان‌رسانی هوشمند",
    description: "سیستم اعلان‌های فوری و push notification",
    features: [
      "اعلان‌های فوری به تمام دستگاه‌ها",
      "ترکیب اعلان با پیامک",
      "برنامه‌ریزی ارسال زمان‌بندی شده",
      "اعلان‌های اضطراری و ویژه",
      "پیگیری تحویل در زمان واقعی",
      "ارسال خودکار بر اساس رویدادها"
    ],
    icon: "uil-bell",
    color: "bg-green-500",
    link: "/admin/notificationsend"
  },
  {
    id: 3,
    title: "پیامک انبوه",
    description: "سیستم ارسال پیامک با پنل‌های معتبر",
    features: [
      "ثبت‌نام و فعالسازی خط پیامک",
      "مدیریت اعتبار و پنل پیامک",
      "ارسال پیامک‌های انبوه",
      "پیامک‌های تبلیغاتی و خدماتی",
      "ترکیب محتوا با اطلاعات شخصی",
      "رپورت دقیق ارسال و تحویل"
    ],
    icon: "uil-mobile-android",
    color: "bg-purple-500",
    link: "/admin/smssend"
  }
];

const advancedFeatures = [
  {
    id: 1,
    title: "انتخاب هوشمند گیرندگان",
    description: "سیستم پیشرفته انتخاب مخاطبان",
    features: [
      "انتخاب بر اساس کلاس‌ها",
      "دسته‌بندی گروه‌های آموزشی",
      "فیلتر بر اساس نقش کاربری",
      "انتخاب معلمان و دانش‌آموزان خاص",
      "ترکیب چندین معیار انتخاب",
      "ذخیره فهرست‌های گیرندگان"
    ],
    icon: "uil-users-alt",
    color: "bg-indigo-500"
  },
  {
    id: 2,
    title: "آمارگیری و گزارش‌گیری",
    description: "سیستم جامع آمار و تحلیل ارتباطات",
    features: [
      "آمار خوانده شدن پیام‌ها",
      "گزارش میزان مشارکت کاربران",
      "نمودارهای تحلیلی تعاملات",
      "رپورت ارسال موفق پیامک‌ها",
      "آمار زمان پاسخ‌گویی",
      "تحلیل الگوهای ارتباطی"
    ],
    icon: "uil-chart-line",
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "امنیت و کنترل دسترسی",
    description: "سیستم امنیتی پیشرفته و کنترل مجوزها",
    features: [
      "رمزنگاری انتها به انتها",
      "کنترل دسترسی نقش‌محور",
      "ثبت کامل لاگ فعالیت‌ها",
      "تأیید هویت دو مرحله‌ای",
      "حذف خودکار پیام‌های قدیمی",
      "رعایت قوانین حریم خصوصی"
    ],
    icon: "uil-shield-check",
    color: "bg-red-500"
  },
  {
    id: 4,
    title: "یکپارچگی و خودکارسازی",
    description: "ادغام با سایر سیستم‌ها و خودکارسازی",
    features: [
      "یکپارچگی با سیستم مدیریت مدرسه",
      "ارسال خودکار بر اساس رویدادها",
      "همگام‌سازی اطلاعات کاربران",
      "اعلان‌های هوشمند نمرات",
      "یادآوری‌های خودکار",
      "پیکربندی قوانین ارسال"
    ],
    icon: "uil-sync",
    color: "bg-yellow-500"
  }
];

const userRoles = [
  {
    role: "مدیران مدرسه",
    description: "دسترسی کامل به تمام سیستم‌های ارتباطی",
    permissions: ["ارسال به تمام کاربران", "مدیریت تنظیمات", "مشاهده آمار کامل", "کنترل مجوزها"],
    icon: "uil-crown",
    color: "bg-purple-600"
  },
  {
    role: "معلمان",
    description: "ارتباط با دانش‌آموزان کلاس‌ها و همکاران",
    permissions: ["ارسال به کلاس‌های تحت تدریس", "ارتباط با همکاران", "اعلان‌های آموزشی", "پیامک به والدین"],
    icon: "uil-graduation-cap",
    color: "bg-blue-600"
  },
  {
    role: "دانش‌آموزان",
    description: "دریافت اطلاعات و ارتباط محدود با معلمان",
    permissions: ["دریافت پیام‌ها و اعلان‌ها", "ارسال پیام به معلمان", "پیامک یادآوری", "اعلان‌های مدرسه"],
    icon: "uil-book-reader",
    color: "bg-green-600"
  },
  {
    role: "والدین",
    description: "دریافت اطلاعات فرزندان و ارتباط با مدرسه",
    permissions: ["پیامک گزارش نمرات", "اعلان‌های مدرسه", "ارتباط با معلمان", "پیام‌های اطلاع‌رسانی"],
    icon: "uil-home",
    color: "bg-orange-600"
  }
];

const workflowSteps = [
  {
    step: "۱",
    title: "انتخاب نوع ارتباط",
    description: "انتخاب روش ارتباطی مناسب (پیام، اعلان، پیامک)",
    icon: "uil-apps",
    color: "primary",
    duration: "۱۰ ثانیه"
  },
  {
    step: "۲",
    title: "تعیین گیرندگان",
    description: "انتخاب مخاطبان هدف از فهرست‌های موجود",
    icon: "uil-users-alt",
    color: "success",
    duration: "۳۰ ثانیه"
  },
  {
    step: "۳",
    title: "نوشتن محتوا",
    description: "تألیف پیام و اضافه کردن پیوست‌ها در صورت نیاز",
    icon: "uil-edit",
    color: "info",
    duration: "۲ دقیقه"
  },
  {
    step: "۴",
    title: "ارسال و پیگیری",
    description: "ارسال پیام و نظارت بر آمار دریافت و مطالعه",
    icon: "uil-chart-bar",
    color: "warning",
    duration: "فوری"
  }
];

const communicationTypes = [
  {
    title: "پیام‌های آموزشی",
    description: "ارسال محتوای آموزشی و تکالیف",
    examples: ["ارسال تکالیف و منابع مطالعاتی", "اعلام نمرات و عملکرد", "راهنمایی‌های آموزشی", "یادآوری امتحانات"]
  },
  {
    title: "اطلاع‌رسانی‌های مدیریتی",
    description: "اعلان‌های مربوط به مدیریت مدرسه",
    examples: ["تغییر برنامه کلاسی", "تعطیلی‌های پیش‌بینی نشده", "اعلان رویدادها", "دعوت به جلسات"]
  },
  {
    title: "ارتباطات والدین",
    description: "پیام‌های مربوط به والدین دانش‌آموزان",
    examples: ["گزارش حضور و غیاب", "اطلاع‌رسانی عملکرد", "دعوت به جلسات مدرسه", "یادآوری پرداخت‌ها"]
  },
  {
    title: "اعلان‌های اضطراری",
    description: "پیام‌های فوری و اضطراری",
    examples: ["شرایط آب و هوایی", "تغییرات ناگهانی برنامه", "اطلاعیه‌های امنیتی", "راهنمایی‌های بحرانی"]
  }
];

const benefits = [
  {
    title: "بهبود ارتباطات",
    description: "ارتقاء کیفیت ارتباط بین اعضای مدرسه",
    icon: "uil-comments-alt",
    stat: "۹۰٪"
  },
  {
    title: "صرفه‌جویی زمان",
    description: "کاهش زمان ارسال و دریافت اطلاعات",
    icon: "uil-clock",
    stat: "۷۰٪"
  },
  {
    title: "افزایش مشارکت",
    description: "بهبود مشارکت والدین و دانش‌آموزان",
    icon: "uil-users-alt",
    stat: "۸۵٪"
  },
  {
    title: "دسترسی آسان",
    description: "امکان دسترسی سریع از هر مکان و زمان",
    icon: "uil-globe",
    stat: "۲۴/۷"
  }
];

const statistics = [
  {
    number: "۳",
    label: "روش ارتباطی متنوع",
    color: "bg-blue-500"
  },
  {
    number: "۱۰۰٪",
    label: "میزان تحویل پیام‌ها",
    color: "bg-green-500"
  },
  {
    number: "لحظه‌ای",
    label: "سرعت ارسال اعلان‌ها",
    color: "bg-purple-500"
  },
  {
    number: "امن",
    label: "رمزنگاری پیام‌ها",
    color: "bg-orange-500"
  }
];

export default function CommunicationsServices() {
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

        .communication-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 25px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .communication-demo:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .communication-demo::before {
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

        .communication-type {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border-top: 3px solid #3b82f6;
        }

        .communication-type:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">سامانه‌های ارتباطی پارس آموز</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                مجموعه کامل
                <span className="underline"> ابزارهای ارتباطی پیشرفته</span> برای جامعه آموزشی
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
              <h3 className="display-4 mb-5">آشنایی جامع با سامانه‌های ارتباطی</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="سامانه‌های ارتباطی پارس آموز" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {communicationSystemsOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-envelope fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">پیام‌رسانی داخلی</h4>
                      <p className="mb-0">پیام‌های غنی با پیوست</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-bell fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">اعلان‌رسانی</h4>
                      <p className="mb-0">اعلان‌های فوری هوشمند</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-mobile-android fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">پیامک انبوه</h4>
                      <p className="mb-0">SMS با پنل‌های معتبر</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-chart-line fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">آمارگیری کامل</h4>
                      <p className="mb-0">تحلیل دقیق ارتباطات</p>
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
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">روش‌های ارتباطی</h2>
              <h3 className="display-4 mb-5">سه روش اصلی ارتباط</h3>
              <p className="lead">هر روش برای نیازهای خاص طراحی شده است</p>
            </div>
          </div>

          <div className="row gy-8">
            {messagingFeatures.map((feature) => (
              <div className="col-lg-4" key={feature.id}>
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
                        ورود به سیستم
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
              <h3 className="display-4 mb-5">ویژگی‌های مشترک سیستم‌ها</h3>
              <p className="lead">امکانات پیشرفته موجود در تمام روش‌های ارتباطی</p>
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

      {/* ========== communication types section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">انواع ارتباطات</h2>
              <h3 className="display-4 mb-5">کاربردهای مختلف سیستم</h3>
              <p className="lead">انواع پیام‌ها و ارتباطات قابل برقراری</p>
            </div>
          </div>

          <div className="row gy-6">
            {communicationTypes.map((type, index) => (
              <div className="col-lg-6" key={index}>
                <div className="communication-type h-100">
                  <h5 className="mb-3 text-primary">{type.title}</h5>
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
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نقش‌های کاربری</h2>
              <h3 className="display-4 mb-5">دسترسی‌های مختلف کاربران</h3>
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
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">فرآیند کار</h2>
              <h3 className="display-4 mb-5">مراحل ارسال پیام</h3>
              <p className="lead">راهنمای گام به گام ارسال پیام</p>
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
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمایش سیستم‌ها</h2>
              <h3 className="display-4 mb-5">دسترسی سریع به سیستم‌ها</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-4">
              <div className="communication-demo">
                <i className="uil uil-envelope fs-40 mb-3"></i>
                <h5 className="mb-3">پیام‌رسانی</h5>
                <p className="mb-3 small opacity-90">پیام‌های غنی • پیوست فایل</p>
                <a href="/admin/messages" className="btn btn-white btn-sm rounded-pill">ورود</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="communication-demo">
                <i className="uil uil-bell fs-40 mb-3"></i>
                <h5 className="mb-3">اعلان‌رسانی</h5>
                <p className="mb-3 small opacity-90">اعلان‌های فوری • Push Notification</p>
                <a href="/admin/notificationsend" className="btn btn-white btn-sm rounded-pill">ورود</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="communication-demo">
                <i className="uil uil-mobile-android fs-40 mb-3"></i>
                <h5 className="mb-3">پیامک انبوه</h5>
                <p className="mb-3 small opacity-90">SMS • پنل معتبر</p>
                <a href="/admin/smssend" className="btn btn-white btn-sm rounded-pill">ورود</a>
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
              <h3 className="display-4 mb-5">چرا سامانه‌های ارتباطی پارس آموز؟</h3>
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
              <h3 className="display-4 mb-5 text-white">آماده شروع ارتباط مؤثر هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین امروز از سامانه‌های ارتباطی پیشرفته پارس آموز استفاده کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/messages" className="btn btn-lg btn-white rounded-pill">
                  شروع پیام‌رسانی
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
