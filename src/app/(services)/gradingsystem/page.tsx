"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

// Grading System Features Data
const gradingSystemOverview = `
سیستم نمره‌دهی و سازنده کارنامه یکی از جامع‌ترین و پیشرفته‌ترین سیستم‌های مدیریت ارزیابی تحصیلی است که دو بخش اصلی را در بر می‌گیرد: سیستم نمره‌دهی هوشمند و سازنده کارنامه حرفه‌ای. این سیستم به معلمان و مدیران مدارس امکان ثبت، مدیریت و گزارش‌گیری کامل از نمرات و عملکرد دانش‌آموزان را با حداکثر دقت و کارآمدی فراهم می‌کند.

قابلیت‌های کلیدی سیستم نمره‌دهی:
• جریان کاری ۵ مرحله‌ای برای ثبت منظم نمرات (انتخاب کلاس، درس، عنوان، ثبت نمرات، بررسی و ذخیره)
• پشتیبانی همزمان از نمره‌دهی عددی (۰-۲۰) و نمره‌دهی توصیفی
• ثبت سریع نمرات با استفاده از کلیدهای میانبر (Enter، Tab، جهت‌دار)
• اعتبارسنجی لحظه‌ای و کنترل خودکار محدوده نمرات
• محاسبه خودکار آمار کلاس شامل میانگین، بالاترین و پایین‌ترین نمره، تعداد قبولی و مردودی
• سیستم کنترل دسترسی پیشرفته (معلمان فقط کلاس‌های خود، مدیران تمام مدرسه)
• امکان ویرایش و به‌روزرسانی نمرات ثبت شده با حفظ تاریخچه تغییرات

قابلیت‌های کلیدی سازنده کارنامه:
• انتخاب چندگانه از نمره‌دهی‌های مختلف برای ترکیب در یک کارنامه
• ۳ قالب متنوع کارنامه: تفصیلی، خلاصه و مینیمال
• تنظیمات پیشرفته شامل آمار کلاس، رتبه‌بندی، نظرات معلم و تفکیک عملکرد
• طراحی قابل تنظیم با لوگوی مدرسه، اطلاعات مؤسسه و پاورقی سفارشی
• پیش‌نمایش کامل و چاپ مستقیم کارنامه‌های چندگانه
• پشتیبانی کامل از ارزیابی‌های توصیفی و رتبه‌بندی هوشمند

این سیستم یکپارچه نه‌تنها فرآیند ثبت نمرات را تا ۸۰٪ تسریع می‌کند، بلکه امکان تولید کارنامه‌های استاندارد و حرفه‌ای را با حداقل زمان و حداکثر دقت فراهم می‌آورد.
`;

const coreFeatures = [
  {
    id: 1,
    title: "سیستم نمره‌دهی ۵ مرحله‌ای",
    description: "جریان کاری منطقی و ساده برای ثبت سریع و دقیق نمرات دانش‌آموزان",
    features: [
      "انتخاب کلاس از میان کلاس‌های تدریسی معلم",
      "انتخاب درس بر اساس برنامه تدریس",
      "تعیین عنوان و تاریخ برای ثبت نمره",
      "ثبت نمرات با کلیدهای میانبر",
      "بررسی آمار و ذخیره نهایی نمرات",
      "نوار پیشرفت و راهنمای مرحله‌ای"
    ]
  },
  {
    id: 2,
    title: "ثبت سریع و هوشمند نمرات",
    description: "ابزارهای پیشرفته برای ورود سریع نمرات با حداکثر دقت و کمترین زمان",
    features: [
      "پشتیبانی از نمرات عددی (۰-۲۰) با اعشار",
      "نمره‌دهی توصیفی با متن‌های تفصیلی",
      "کلیدهای میانبر Enter و Tab برای جابجایی",
      "اعتبارسنجی خودکار محدوده نمرات",
      "فوکوس خودکار روی فیلدهای خالی",
      "ذخیره خودکار در حین ورود"
    ]
  },
  {
    id: 3,
    title: "آمار و گزارش‌گیری جامع",
    description: "تحلیل‌های دقیق و آمار کامل از عملکرد کلاس و دانش‌آموزان",
    features: [
      "محاسبه خودکار میانگین کلاس",
      "شمارش دانش‌آموزان قبول و مردود",
      "نمایش بالاترین و پایین‌ترین نمره",
      "نمودارهای بصری آمار کلاس",
      "گزارش تفصیلی هر نمره‌دهی",
      "امکان صادرات و چاپ گزارش‌ها"
    ]
  },
  {
    id: 4,
    title: "سازنده کارنامه حرفه‌ای",
    description: "ایجاد کارنامه‌های استاندارد و قابل تنظیم با امکانات پیشرفته طراحی",
    features: [
      "انتخاب چندگانه از نمره‌دهی‌های مختلف",
      "۳ قالب کارنامه: تفصیلی، خلاصه، مینیمال",
      "تنظیمات آمار، رتبه‌بندی و نظرات",
      "طراحی با لوگو و اطلاعات مدرسه",
      "پیش‌نمایش و چاپ چندگانه",
      "پشتیبانی از ارزیابی‌های توصیفی"
    ]
  }
];

const systemWorkflow = [
  {
    step: "۱",
    title: "انتخاب کلاس و درس",
    description: "معلم کلاس و درس مورد نظر را از میان موارد تخصیص یافته انتخاب می‌کند",
    icon: "uil-users-alt",
    color: "primary"
  },
  {
    step: "۲",
    title: "تعیین عنوان نمره‌دهی",
    description: "عنوان مشخص (مثل آزمون میان‌ترم) و تاریخ برای ثبت نمره تعیین می‌شود",
    icon: "uil-file-edit-alt",
    color: "success"
  },
  {
    step: "۳",
    title: "ثبت نمرات دانش‌آموزان",
    description: "نمرات با استفاده از کلیدهای میانبر و اعتبارسنجی خودکار ثبت می‌شود",
    icon: "uil-edit",
    color: "info"
  },
  {
    step: "۴",
    title: "بررسی آمار و ذخیره",
    description: "آمار کلاس بررسی شده و نمرات به صورت نهایی در سیستم ذخیره می‌شود",
    icon: "uil-chart-line",
    color: "warning"
  },
  {
    step: "۵",
    title: "تولید کارنامه",
    description: "از نمره‌دهی‌های ثبت شده، کارنامه‌های حرفه‌ای تولید و چاپ می‌شود",
    icon: "uil-print",
    color: "purple"
  }
];

const userRoles = [
  {
    role: "معلمان",
    access: "کلاس‌ها و دروس تخصیصی",
    permissions: [
      "ثبت نمرات در کلاس‌های تدریسی خود",
      "ویرایش و حذف نمرات ثبت شده",
      "مشاهده آمار و گزارش کلاس‌های خود",
      "تولید کارنامه از نمره‌دهی‌های خود",
      "استفاده از تمام قالب‌های کارنامه",
      "تنظیم محتوا و ظاهر کارنامه‌ها"
    ],
    color: "bg-blue-500"
  },
  {
    role: "مدیران مدرسه",
    access: "تمام کلاس‌ها و نمرات مدرسه",
    permissions: [
      "نظارت بر تمام نمره‌دهی‌های مدرسه",
      "مشاهده آمار جامع عملکرد مدرسه",
      "ویرایش نمرات تمام معلمان",
      "تولید کارنامه از همه نمره‌دهی‌ها",
      "دسترسی به گزارش‌های مدیریتی",
      "تنظیمات سیستمی و قالب‌های کارنامه"
    ],
    color: "bg-purple-500"
  }
];

const reportCardTypes = [
  {
    type: "کارنامه تفصیلی",
    icon: "uil-file-alt",
    description: "شامل تمام اطلاعات دانش‌آموز، آمار کامل کلاس و تحلیل‌های جزئی",
    features: [
      "اطلاعات کامل دانش‌آموز",
      "تمام نمرات و ارزیابی‌ها",
      "آمار دقیق کلاس",
      "رتبه‌بندی و مقایسه",
      "نمودارها و تحلیل‌ها",
      "بخش نظرات معلم"
    ],
    color: "bg-green-500"
  },
  {
    type: "کارنامه خلاصه",
    icon: "uil-file-copy-alt",
    description: "حاوی اطلاعات کلیدی و آمار اصلی برای مرور سریع عملکرد",
    features: [
      "اطلاعات ضروری دانش‌آموز",
      "نمرات اصلی دروس",
      "میانگین کلی",
      "وضعیت قبولی",
      "آمار کلیدی کلاس",
      "خلاصه ارزیابی"
    ],
    color: "bg-blue-500"
  },
  {
    type: "کارنامه مینیمال",
    icon: "uil-file",
    description: "شامل حداقل اطلاعات ضروری برای تأیید عملکرد دانش‌آموز",
    features: [
      "نام و کد دانش‌آموز",
      "نمرات یا ارزیابی نهایی",
      "وضعیت کلی عملکرد",
      "مهر و امضای مدرسه",
      "تاریخ صدور",
      "کمترین جزئیات"
    ],
    color: "bg-orange-500"
  }
];

const advancedFeatures = [
  {
    title: "نمره‌دهی ترکیبی",
    description: "پشتیبانی همزمان از نمرات عددی و ارزیابی‌های توصیفی در یک سیستم",
    benefits: ["نمرات عددی ۰ تا ۲۰", "متن‌های توصیفی تفصیلی", "ترکیب دو روش در کارنامه"]
  },
  {
    title: "کلیدهای میانبر",
    description: "ابزارهای پیشرفته برای تسریع فرآیند ثبت نمرات",
    benefits: ["Enter برای رفتن به خانه بعد", "Tab برای جابجایی افقی", "کلیدهای جهت‌دار"]
  },
  {
    title: "رتبه‌بندی هوشمند",
    description: "محاسبه خودکار رتبه دانش‌آموزان با مدیریت رتبه‌های مساوی",
    benefits: ["رتبه‌بندی خودکار", "مدیریت نمرات مساوی", "نمایش رتبه در کارنامه"]
  },
  {
    title: "طراحی تطبیقی",
    description: "رابط کاربری واکنش‌گرا سازگار با تمام دستگاه‌ها",
    benefits: ["سازگار با موبایل و تبلت", "بهینه‌سازی برای چاپ", "پشتیبانی RTL کامل"]
  }
];

const statistics = [
  {
    number: "۸۰٪",
    label: "کاهش زمان ثبت نمرات",
    color: "bg-blue-500"
  },
  {
    number: "۵",
    label: "مرحله ثبت نمره",
    color: "bg-green-500"
  },
  {
    number: "۳",
    label: "نوع قالب کارنامه",
    color: "bg-purple-500"
  },
  {
    number: "۱۰۰٪",
    label: "دقت در محاسبات",
    color: "bg-orange-500"
  }
];

export default function GradingSystemServices() {
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
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .overview-text {
          line-height: 2;
          white-space: pre-line;
        }

        .workflow-step {
          position: relative;
        }

        .workflow-step::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 30px;
          background: #e5e7eb;
        }

        .workflow-step:last-child::after {
          display: none;
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">سیستم نمره‌دهی و سازنده کارنامه</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                مدیریت کامل ارزیابی تحصیلی از
                <span className="underline"> ثبت نمرات تا تولید کارنامه</span> در یک پلتفرم یکپارچه
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
              <h3 className="display-4 mb-5">آشنایی کامل با سیستم نمره‌دهی و سازنده کارنامه</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="سیستم نمره‌دهی و سازنده کارنامه" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {gradingSystemOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-edit fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">ثبت سریع نمرات</h4>
                      <p className="mb-0">با کلیدهای میانبر</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-print fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">کارنامه حرفه‌ای</h4>
                      <p className="mb-0">با قالب‌های متنوع</p>
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
              <h3 className="display-4 mb-5">ویژگی‌های کلیدی سیستم نمره‌دهی</h3>
            </div>
          </div>

          <div className="row gy-8">
            {coreFeatures.map((feature, index) => (
              <div className="col-lg-6" key={feature.id}>
                <div className="card h-100 feature-card border-0 shadow-lg">
                  <div className="card-body p-6">
                    <div className="d-flex align-items-center mb-4">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                           style={{ width: '50px', height: '50px', fontSize: '20px' }}>
                        {feature.id}
                      </div>
                      <h4 className="mb-0">{feature.title}</h4>
                    </div>
                    
                    <p className="text-muted mb-4">{feature.description}</p>
                    
                    <ul className="list-unstyled">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="uil uil-check text-primary me-2"></i>
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
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">فرآیند کار</h2>
              <h3 className="display-4 mb-5">مراحل کامل از ثبت نمره تا تولید کارنامه</h3>
            </div>
          </div>

          <div className="row justify-content-center">
            {systemWorkflow.map((workflow, index) => (
              <div className="col-lg-2 col-md-4 col-6 text-center workflow-step" key={index}>
                <div className={`bg-${workflow.color} text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center`} 
                     style={{ width: '80px', height: '80px' }}>
                  <i className={`${workflow.icon} fs-28`}></i>
                </div>
                <h6 className="mb-2">{workflow.step}</h6>
                <h5 className="mb-3">{workflow.title}</h5>
                <p className="text-muted text-sm">{workflow.description}</p>
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
              <h3 className="display-4 mb-5">دسترسی‌ها و اختیارات مختلف</h3>
            </div>
          </div>

          <div className="row gy-8 justify-content-center">
            {userRoles.map((role, index) => (
              <div className="col-lg-5 col-md-8" key={index}>
                <div className="card h-100 border-0 shadow-lg">
                  <div className="card-body text-center p-6">
                    <div className={`${role.color} text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center`} 
                         style={{ width: '80px', height: '80px' }}>
                      <i className="uil uil-user fs-28"></i>
                    </div>
                    
                    <h4 className="mb-3">{role.role}</h4>
                    <p className="text-muted mb-4">
                      <strong>دسترسی:</strong> {role.access}
                    </p>
                    
                    <ul className="list-unstyled text-start">
                      {role.permissions.map((permission, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="uil uil-check text-success me-2"></i>
                          {permission}
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

      {/* ========== report card types section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">انواع کارنامه</h2>
              <h3 className="display-4 mb-5">قالب‌های متنوع برای نیازهای مختلف</h3>
            </div>
          </div>

          <div className="row gy-8">
            {reportCardTypes.map((type, index) => (
              <div className="col-lg-4" key={index}>
                <div className="card h-100 border-0 shadow-lg">
                  <div className="card-body text-center p-6">
                    <div className={`${type.color} text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center`} 
                         style={{ width: '80px', height: '80px' }}>
                      <i className={`${type.icon} fs-28`}></i>
                    </div>
                    
                    <h4 className="mb-3">{type.type}</h4>
                    <p className="text-muted mb-4">{type.description}</p>
                    
                    <ul className="list-unstyled text-start">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="uil uil-check text-success me-2"></i>
                          {feature}
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
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">ویژگی‌های پیشرفته</h2>
              <h3 className="display-4 mb-5">قابلیت‌های تخصصی و حرفه‌ای</h3>
            </div>
          </div>

          <div className="row gy-6">
            {advancedFeatures.map((feature, index) => (
              <div className="col-lg-6" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-5">
                    <h5 className="card-title text-primary mb-3">{feature.title}</h5>
                    <p className="card-text mb-4">{feature.description}</p>
                    
                    <div className="row">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="col-12 mb-2">
                          <small className="text-success">
                            <i className="uil uil-check-circle me-1"></i>
                            {benefit}
                          </small>
                        </div>
                      ))}
                    </div>
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
              <h3 className="display-4 mb-5">عملکرد سیستم در اعداد</h3>
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

      {/* ========== benefits section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مزایای کلیدی</h2>
              <h3 className="display-4 mb-7">چرا سیستم نمره‌دهی و سازنده کارنامه؟</h3>
              
              <div className="accordion" id="benefitsAccordion">
                <div className="card mb-3">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        <i className="uil uil-rocket text-primary me-2"></i>
                        تسریع ۸۰٪ فرآیند ثبت نمرات
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      جریان کاری بهینه شده و کلیدهای میانبر زمان ثبت نمرات را به شدت کاهش می‌دهد.
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        <i className="uil uil-shield-check text-success me-2"></i>
                        دقت ۱۰۰٪ در محاسبات
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      اعتبارسنجی خودکار و محاسبات دقیق آمار با حذف کامل خطاهای انسانی.
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        <i className="uil uil-file-alt text-info me-2"></i>
                        کارنامه‌های حرفه‌ای
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      تولید خودکار کارنامه‌های استاندارد با قالب‌های متنوع و امکانات پیشرفته.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseFour">
                        <i className="uil uil-users-alt text-warning me-2"></i>
                        مدیریت دسترسی هوشمند
                      </button>
                    </h5>
                  </div>
                  <div id="collapseFour" className="collapse" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      کنترل دقیق دسترسی معلمان و مدیران با حفظ امنیت و حریم خصوصی داده‌ها.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="مزایای سیستم نمره‌دهی" className="rounded shadow-lg" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ========== call to action section ========== */}
      <section className="wrapper bg-primary text-white rtl-content">
        <div className="container py-14 py-md-16 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="display-4 mb-5 text-white">آماده شروع کار با سیستم نمره‌دهی هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین حالا سیستم جامع ارزیابی و کارنامه‌سازی خود را راه‌اندازی کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/gradingsystem" className="btn btn-lg btn-white rounded-pill">
                  شروع ثبت نمرات
                </a>
                <a href="/admin/reportcardcreator" className="btn btn-lg btn-outline-white rounded-pill">
                  ایجاد کارنامه
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
