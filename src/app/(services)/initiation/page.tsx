"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

// Management Systems Overview Data
const systemsOverview = `
سیستم‌های مدیریت پایه مدرسه آنلاین شامل سه بخش اصلی و بنیادین است که زیرساخت کامل یک مدرسه دیجیتال را تشکیل می‌دهند: مدیریت دانش‌آموزان، مدیریت معلمان، و مدیریت کلاس‌ها. این سه سیستم به عنوان ستون‌های اصلی پلتفرم آموزشی عمل کرده و تمام فعالیت‌های آموزشی بر پایه آنها شکل می‌گیرد.

سیستم مدیریت دانش‌آموزان:
• ثبت کامل اطلاعات شخصی دانش‌آموزان شامل نام، نام خانوادگی، کد ملی، تاریخ تولد
• مدیریت حساب‌های کاربری با رمز عبور و سطوح دسترسی مختلف
• ثبت اطلاعات تماس کامل شامل شماره تلفن والدین و دانش‌آموز
• تصویر پروفایل و مدارک شناسایی برای شناسایی بصری
• تعیین کلاس‌ها و گروه‌های مطالعاتی برای هر دانش‌آموز
• سیستم تقویم شمسی برای تاریخ تولد و مناسبت‌های مهم
• قابلیت وارد کردن گروهی از اکسل و فرمت‌های مختلف

سیستم مدیریت معلمان:
• ثبت کامل اطلاعات معلمان شامل مشخصات هویتی و شغلی
• سیستم مجوزهای پیشرفته برای دسترسی به ماژول‌های مختلف
• مدیریت وضعیت استخدامی (رسمی، غیررسمی، بازنشسته)
• تعیین پایه‌های تدریس و رشته‌های تخصصی
• ثبت اطلاعات تماس و مدارک شناسایی
• پیگیری سابقه کاری و مدارک تحصیلی
• سیستم ارزیابی عملکرد و بازخورد

سیستم مدیریت کلاس‌ها:
• ایجاد کلاس‌های درسی با کد یکتا و نام اختصاصی
• تعیین پایه تحصیلی از اول ابتدایی تا دوازدهم متوسطه
• انتخاب رشته تحصیلی (ریاضی، تجربی، انسانی و...)
• تخصیص معلمان به دروس مختلف در هر کلاس
• برنامه‌ریزی هفتگی کامل با ساعات درسی
• وارد کردن گروهی دانش‌آموزان از فایل‌های اکسل
• مدیریت جابجایی دانش‌آموزان بین کلاس‌ها

این سه سیستم با یکدیگر در ارتباط بوده و اطلاعات آنها به صورت لحظه‌ای همگام‌سازی می‌شود. تغییرات در هر بخش به طور خودکار در سایر بخش‌ها اعمال شده و یکپارچگی داده‌ها حفظ می‌شود. این ساختار منسجم امکان مدیریت دقیق و کارآمد تمام جنبه‌های آموزشی مدرسه را فراهم می‌کند.
`;

const studentsFeatures = [
  {
    id: 1,
    title: "مدیریت کامل پروفایل دانش‌آموزان",
    description: "ثبت و نگهداری جامع اطلاعات شخصی و تحصیلی هر دانش‌آموز",
    features: [
      "ثبت نام و نام خانوادگی با اعتبارسنجی",
      "کد دانش‌آموزی یکتا برای هر فرد",
      "تاریخ تولد با تقویم شمسی",
      "شماره تلفن والدین و دانش‌آموز",
      "آپلود تصویر پروفایل شخصی",
      "وضعیت فعال یا غیرفعال بودن"
    ],
    icon: "uil-user-circle",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "تخصیص کلاس و گروه‌بندی",
    description: "سازماندهی دانش‌آموزان در کلاس‌ها و گروه‌های مطالعاتی",
    features: [
      "انتخاب چندین کلاس برای یک دانش‌آموز",
      "عضویت در گروه‌های مطالعاتی مختلف",
      "جابجایی آسان بین کلاس‌ها",
      "پیگیری تاریخچه تغییرات کلاس",
      "گزارش‌گیری از توزیع دانش‌آموزان",
      "مدیریت ظرفیت کلاس‌ها"
    ],
    icon: "uil-users-alt",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "حساب کاربری و امنیت",
    description: "مدیریت دسترسی و امنیت حساب‌های دانش‌آموزی",
    features: [
      "ایجاد رمز عبور امن برای هر دانش‌آموز",
      "کنترل دسترسی به بخش‌های مختلف",
      "امکان فعال/غیرفعال کردن حساب‌ها",
      "پیگیری آخرین ورود به سیستم",
      "تنظیمات امنیتی پیشرفته",
      "بازیابی رمز عبور"
    ],
    icon: "uil-shield-check",
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "وارد کردن گروهی و مدیریت انبوه",
    description: "ابزارهای قدرتمند برای ثبت و مدیریت گروهی دانش‌آموزان",
    features: [
      "وارد کردن از فایل‌های اکسل",
      "پردازش فرمت SIDA آموزش‌پرورش",
      "اعتبارسنجی خودکار داده‌ها",
      "تشخیص و حذف تکراری‌ها",
      "ویرایش گروهی اطلاعات",
      "تولید گزارش‌های تجمعی"
    ],
    icon: "uil-import",
    color: "bg-orange-500"
  }
];

const teachersFeatures = [
  {
    id: 1,
    title: "مدیریت پروفایل معلمان",
    description: "ثبت کامل اطلاعات شخصی و حرفه‌ای معلمان",
    features: [
      "نام و مشخصات کامل معلم",
      "کد معلم یکتا برای شناسایی",
      "شماره پرسنلی و کد ملی",
      "تاریخ تولد با تقویم شمسی",
      "وضعیت تأهل و اطلاعات شخصی",
      "آپلود تصویر و مدارک"
    ],
    icon: "uil-graduation-cap",
    color: "bg-indigo-500"
  },
  {
    id: 2,
    title: "سیستم مجوزها و دسترسی‌ها",
    description: "کنترل دقیق دسترسی معلمان به ماژول‌های مختلف",
    features: [
      "تعیین دسترسی نمایش اطلاعات",
      "مجوز ایجاد و ویرایش محتوا",
      "اختیار حذف و مدیریت داده‌ها",
      "دسترسی به گزارش‌ها و آمار",
      "کنترل دسترسی به جستجو",
      "مدیریت مجوزهای خاص"
    ],
    icon: "uil-key-skeleton-alt",
    color: "bg-red-500"
  },
  {
    id: 3,
    title: "وضعیت استخدامی و پایه‌های تدریس",
    description: "مدیریت وضعیت شغلی و حوزه‌های تدریس معلمان",
    features: [
      "وضعیت رسمی، غیررسمی، بازنشسته",
      "تعیین پایه‌های قابل تدریس",
      "رشته تخصصی و حوزه فعالیت",
      "سابقه کاری و تجربه تدریس",
      "مدارک تحصیلی و گواهینامه‌ها",
      "ارزیابی عملکرد دوره‌ای"
    ],
    icon: "uil-award",
    color: "bg-yellow-500"
  },
  {
    id: 4,
    title: "اطلاعات تماس و ارتباطات",
    description: "مدیریت راه‌های ارتباطی و اطلاعات تماس معلمان",
    features: [
      "شماره تلفن و موبایل شخصی",
      "آدرس ایمیل رسمی",
      "آدرس محل سکونت",
      "اطلاعات تماس اضطراری",
      "شبکه‌های اجتماعی مرتبط",
      "تاریخچه تغییرات اطلاعات"
    ],
    icon: "uil-phone",
    color: "bg-teal-500"
  }
];

const classesFeatures = [
  {
    id: 1,
    title: "ایجاد و مدیریت کلاس‌های درسی",
    description: "تعریف کامل کلاس‌ها با مشخصات آموزشی دقیق",
    features: [
      "کد کلاس یکتا تولید خودکار",
      "نام کلاس با قابلیت شخصی‌سازی",
      "انتخاب پایه تحصیلی (۱ تا ۱۲)",
      "تعیین رشته (ریاضی، تجربی، انسانی)",
      "ظرفیت کلاس و محدودیت‌ها",
      "وضعیت فعال یا غیرفعال"
    ],
    icon: "uil-building",
    color: "bg-cyan-500"
  },
  {
    id: 2,
    title: "تخصیص معلم و برنامه‌ریزی درسی",
    description: "مدیریت معلمان و برنامه زمانی هر کلاس",
    features: [
      "انتخاب معلم برای هر درس",
      "تعیین کد درس و محتوای آموزشی",
      "برنامه‌ریزی هفتگی کامل",
      "تنظیم روزها و ساعات کلاس",
      "مدیریت تداخل برنامه‌ها",
      "جایگزینی معلم در مواقع ضروری"
    ],
    icon: "uil-schedule",
    color: "bg-emerald-500"
  },
  {
    id: 3,
    title: "مدیریت دانش‌آموزان کلاس",
    description: "ابزارهای جامع برای مدیریت اعضای هر کلاس",
    features: [
      "افزودن دانش‌آموزان به کلاس",
      "وارد کردن گروهی از اکسل",
      "پردازش فرمت SIDA رسمی",
      "جابجایی دانش‌آموزان بین کلاس‌ها",
      "مشاهده فهرست کامل اعضا",
      "تولید گزارش حضور و غیاب"
    ],
    icon: "uil-users-alt",
    color: "bg-violet-500"
  },
  {
    id: 4,
    title: "سیستم راهنما و پشتیبانی",
    description: "ابزارهای کمکی برای استفاده بهینه از سیستم",
    features: [
      "راهنمای جامع با تصاویر",
      "کلیدهای میانبر برای سرعت بیشتر",
      "نکات و ترفندهای کاربردی",
      "پیام‌های راهنما در هر مرحله",
      "پشتیبانی آنلاین",
      "آموزش‌های ویدئویی"
    ],
    icon: "uil-question-circle",
    color: "bg-pink-500"
  }
];

const workflowSteps = [
  {
    step: "۱",
    title: "ایجاد حساب معلمان",
    description: "ابتدا پروفایل معلمان را با تمام اطلاعات و مجوزها ثبت کنید",
    icon: "uil-user-plus",
    color: "primary",
    duration: "۱۰-۱۵ دقیقه"
  },
  {
    step: "۲", 
    title: "تعریف کلاس‌های درسی",
    description: "کلاس‌ها را با مشخص کردن پایه، رشته و معلمان مربوطه ایجاد کنید",
    icon: "uil-building",
    color: "success",
    duration: "۵-۱۰ دقیقه"
  },
  {
    step: "۳",
    title: "ثبت دانش‌آموزان",
    description: "دانش‌آموزان را به صورت تکی یا گروهی وارد کرده و به کلاس‌ها تخصیص دهید",
    icon: "uil-user-circle",
    color: "info",
    duration: "۱۵-۳۰ دقیقه"
  },
  {
    step: "۴",
    title: "بررسی و تأیید نهایی",
    description: "اطلاعات وارد شده را بررسی کرده و برای شروع فعالیت‌ها آماده کنید",
    icon: "uil-check-circle",
    color: "warning",
    duration: "۵ دقیقه"
  }
];

const importCapabilities = [
  {
    format: "اکسل (Excel)",
    description: "وارد کردن از فایل‌های اکسل استاندارد",
    features: [
      "پشتیبانی از فرمت‌های .xlsx و .xls",
      "تشخیص خودکار ستون‌ها",
      "اعتبارسنجی داده‌ها",
      "گزارش خطاها و تصحیحات"
    ],
    icon: "uil-file-excel-alt",
    color: "bg-green-600"
  },
  {
    format: "SIDA آموزش‌پرورش",
    description: "سیستم رسمی مدیریت دانش‌آموزان کشور",
    features: [
      "پردازش فرمت استاندارد SIDA",
      "تشخیص کد ۱۰ رقمی دانش‌آموزان",
      "حفظ ساختار اطلاعات رسمی",
      "همگام‌سازی با بانک اطلاعات ملی"
    ],
    icon: "uil-university",
    color: "bg-blue-600"
  },
  {
    format: "متن ساده (Text)",
    description: "وارد کردن از فایل‌های متنی و CSV",
    features: [
      "پشتیبانی از CSV و TXT",
      "انتخاب جداکننده دلخواه",
      "رمزگذاری UTF-8",
      "پردازش حجم‌های بالا"
    ],
    icon: "uil-file-alt",
    color: "bg-gray-600"
  }
];

const benefits = [
  {
    title: "صرفه‌جویی در زمان",
    description: "تا ۹۰٪ کاهش زمان ثبت دانش‌آموزان و معلمان",
    icon: "uil-clock-three",
    stat: "۹۰٪"
  },
  {
    title: "دقت بالا",
    description: "حذف خطاهای انسانی با اعتبارسنجی خودکار",
    icon: "uil-bullseye",
    stat: "۹۹٪"
  },
  {
    title: "مدیریت یکپارچه",
    description: "همگام‌سازی خودکار بین تمام بخش‌ها",
    icon: "uil-sync",
    stat: "۲۴/۷"
  },
  {
    title: "گزارش‌گیری",
    description: "دسترسی آنی به آمار و گزارشات کامل",
    icon: "uil-chart-line",
    stat: "لحظه‌ای"
  }
];

const statistics = [
  {
    number: "۳",
    label: "سیستم مدیریت یکپارچه",
    color: "bg-blue-500"
  },
  {
    number: "۱۰۰٪",
    label: "خودکارسازی فرآیندها",
    color: "bg-green-500"
  },
  {
    number: "۳",
    label: "فرمت ورودی پشتیبانی شده",
    color: "bg-purple-500"
  },
  {
    number: "نامحدود",
    label: "ظرفیت ذخیره‌سازی",
    color: "bg-orange-500"
  }
];

export default function InitiationServices() {
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

        .system-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 25px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .system-demo:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .system-demo::before {
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

        .import-format {
          background: white;
          border-radius: 10px;
          padding: 20px;
          border-left: 4px solid;
          transition: all 0.3s ease;
        }

        .import-format:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">سیستم‌های مدیریت پایه مدرسه</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                مجموعه کامل ابزارهای
                <span className="underline"> مدیریت دانش‌آموزان، معلمان و کلاس‌ها</span> برای راه‌اندازی مدرسه دیجیتال
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
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمای کلی سیستم‌ها</h2>
              <h3 className="display-4 mb-5">آشنایی جامع با سیستم‌های مدیریت پایه</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="سیستم‌های مدیریت پایه مدرسه" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {systemsOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-users-alt fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">مدیریت دانش‌آموزان</h4>
                      <p className="mb-0">ثبت و پیگیری کامل</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-graduation-cap fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">مدیریت معلمان</h4>
                      <p className="mb-0">کنترل دسترسی و مجوزها</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-building fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">مدیریت کلاس‌ها</h4>
                      <p className="mb-0">سازماندهی آموزشی</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-sync fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">همگام‌سازی یکپارچه</h4>
                      <p className="mb-0">اتصال تمام بخش‌ها</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== students management section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مدیریت دانش‌آموزان</h2>
              <h3 className="display-4 mb-5">سیستم جامع مدیریت دانش‌آموزان</h3>
              <p className="lead">ثبت، سازماندهی و پیگیری کامل اطلاعات دانش‌آموزان با امکانات پیشرفته</p>
            </div>
          </div>

          <div className="row gy-8">
            {studentsFeatures.map((feature) => (
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

      {/* ========== teachers management section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مدیریت معلمان</h2>
              <h3 className="display-4 mb-5">سیستم پیشرفته مدیریت معلمان</h3>
              <p className="lead">ثبت اطلاعات معلمان، کنترل دسترسی‌ها و مدیریت مجوزهای سیستم</p>
            </div>
          </div>

          <div className="row gy-8">
            {teachersFeatures.map((feature) => (
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

      {/* ========== classes management section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مدیریت کلاس‌ها</h2>
              <h3 className="display-4 mb-5">سیستم کامل مدیریت کلاس‌های درسی</h3>
              <p className="lead">ایجاد کلاس‌ها، تخصیص معلمان، برنامه‌ریزی درسی و مدیریت دانش‌آموزان</p>
            </div>
          </div>

          <div className="row gy-8">
            {classesFeatures.map((feature) => (
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

      {/* ========== workflow section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">فرآیند راه‌اندازی</h2>
              <h3 className="display-4 mb-5">مراحل پیاده‌سازی سیستم‌ها</h3>
              <p className="lead">راهنمای گام به گام برای راه‌اندازی کامل سیستم‌های مدیریت</p>
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
                    مدت زمان: {workflow.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== import capabilities section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">قابلیت‌های وارد کردن</h2>
              <h3 className="display-4 mb-5">فرمت‌های مختلف ورودی اطلاعات</h3>
              <p className="lead">پشتیبانی از انواع فرمت‌ها برای وارد کردن آسان اطلاعات</p>
            </div>
          </div>

          <div className="row gy-6">
            {importCapabilities.map((capability, index) => (
              <div className="col-lg-4" key={index}>
                <div className={`import-format h-100`} style={{ borderLeftColor: capability.color.replace('bg-', '').replace('-600', '') === 'green' ? '#059669' : capability.color.replace('bg-', '').replace('-600', '') === 'blue' ? '#2563eb' : '#4b5563' }}>
                  <div className="d-flex align-items-center mb-4">
                    <div className={`${capability.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                         style={{ width: '50px', height: '50px' }}>
                      <i className={`${capability.icon} fs-22`}></i>
                    </div>
                    <h5 className="mb-0">{capability.format}</h5>
                  </div>
                  
                  <p className="text-muted mb-4">{capability.description}</p>
                  
                  <ul className="list-unstyled">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="uil uil-check text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== benefits section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مزایای سیستم</h2>
              <h3 className="display-4 mb-5">چرا سیستم‌های مدیریت پایه؟</h3>
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
              <h3 className="display-4 mb-5">قدرت سیستم‌ها در اعداد</h3>
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

      {/* ========== demo section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمایش سیستم‌ها</h2>
              <h3 className="display-4 mb-5">نگاهی به رابط کاربری</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-4">
              <div className="system-demo">
                <i className="uil uil-users-alt fs-40 mb-3"></i>
                <h5 className="mb-3">مدیریت دانش‌آموزان</h5>
                <p className="mb-0 small opacity-90">۱۲۰۰+ دانش‌آموز ثبت شده</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="system-demo">
                <i className="uil uil-graduation-cap fs-40 mb-3"></i>
                <h5 className="mb-3">مدیریت معلمان</h5>
                <p className="mb-0 small opacity-90">۸۵ معلم با دسترسی‌های مختلف</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="system-demo">
                <i className="uil uil-building fs-40 mb-3"></i>
                <h5 className="mb-3">مدیریت کلاس‌ها</h5>
                <p className="mb-0 small opacity-90">۳۶ کلاس فعال در ۱۲ پایه</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== call to action section ========== */}
      <section className="wrapper bg-primary text-white rtl-content">
        <div className="container py-14 py-md-16 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="display-4 mb-5 text-white">آماده راه‌اندازی سیستم‌های مدیریت هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین امروز شروع کنید و مدرسه خود را به یک مدرسه دیجیتال تبدیل کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/students" className="btn btn-lg btn-white rounded-pill">
                  شروع با دانش‌آموزان
                </a>
                <a href="/admin/teachers" className="btn btn-lg btn-outline-white rounded-pill">
                  مدیریت معلمان
                </a>
                <a href="/admin/classes" className="btn btn-lg btn-outline-white rounded-pill">
                  ایجاد کلاس‌ها
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
