"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

// Question Bank Features Data
const questionBankOverview = `
بانک سوالات دیجیتال یکی از پیشرفته‌ترین سیستم‌های مدیریت سوالات در پلتفرم آموزشی است که امکان ذخیره، طبقه‌بندی، جستجو و مدیریت هزاران سوال را با کیفیت بالا فراهم می‌کند. این سیستم به معلمان، مدیران مدارس و سازندگان محتوای آموزشی امکان ایجاد، ویرایش و سازماندهی سوالات را در قالب‌های مختلف ارائه می‌دهد.

ویژگی‌های کلیدی سیستم شامل:
• سیستم فیلترینگ پیشرفته با ۵ سطح دسته‌بندی (پایه، درس، فصل، بخش، موضوع)
• پشتیبانی از انواع سوالات: تستی با ۴ گزینه و تشریحی
• قابلیت درج فرمول‌های ریاضی با MathJax و تصاویر در سوالات
• سیستم ارزیابی سختی سوالات (آسان، متوسط، سخت)
• تولید خودکار آزمون‌ها با انتخاب سوالات از بانک سوالات
• امکان ویرایش و مدیریت سوالات اضافه شده به آزمون‌ها
• رابط کاربری فارسی با پشتیبانی کامل از ارقام فارسی
• دسترسی محدود بر اساس مدرسه و نقش کاربری
• صفحه‌بندی هوشمند و نمایش تعداد کل سوالات
• پیش‌نمایش کامل سوالات با گزینه‌ها و پاسخ صحیح

این سیستم نه‌تنها فرآیند تهیه آزمون‌ها را تسریع می‌کند، بلکه امکان استفاده مجدد از سوالات با کیفیت، حفظ استانداردهای آموزشی و ایجاد آزمون‌های متنوع و جامع را فراهم می‌آورد.
`;

const coreFeatures = [
  {
    id: 1,
    title: "سیستم فیلترینگ و جستجوی پیشرفته",
    description: "جستجوی دقیق و سریع سوالات با استفاده از فیلترهای چندگانه و هوشمند",
    features: [
      "فیلتر بر اساس پایه تحصیلی (۱ تا ۱۲)",
      "دسته‌بندی ۵ سطحی: درس، فصل، بخش، موضوع",
      "فیلتر سطح سختی: آسان، متوسط، سخت", 
      "تفکیک نوع سوال: تستی و تشریحی",
      "بارگذاری پویای دسته‌بندی‌ها بر اساس انتخاب‌ها",
      "صفحه‌بندی هوشمند با ارقام فارسی"
    ]
  },
  {
    id: 2,
    title: "مدیریت سوالات چندرسانه‌ای",
    description: "ایجاد و مدیریت سوالات با پشتیبانی از متن، تصاویر و فرمول‌های ریاضی",
    features: [
      "ایجاد سوالات تستی با ۴ گزینه",
      "سوالات تشریحی با پاسخ تفصیلی",
      "درج فرمول‌های ریاضی با MathJax",
      "آپلود و مدیریت تصاویر در سوالات و گزینه‌ها",
      "پیش‌نمایش زنده سوالات قبل از ذخیره",
      "ویرایش و حذف سوالات موجود"
    ]
  },
  {
    id: 3,
    title: "ادغام با سیستم آزمون‌سازی",
    description: "اتصال مستقیم با سیستم آزمون‌ها برای ایجاد آزمون‌های استاندارد و متنوع",
    features: [
      "افزودن سوالات به آزمون‌ها با یک کلیک",
      "تعیین امتیاز و زمان پاسخ برای هر سوال",
      "دسته‌بندی سوالات در داخل آزمون",
      "ویرایش مشخصات سوالات در آزمون",
      "حذف سوالات از آزمون‌ها",
      "مشاهده آمار سوالات اضافه شده"
    ]
  },
  {
    id: 4,
    title: "رابط کاربری فارسی و تطبیقی",
    description: "طراحی کاربرپسند با پشتیبانی کامل از زبان فارسی و قابلیت استفاده در همه دستگاه‌ها",
    features: [
      "رابط کاربری راست‌چین (RTL)",
      "نمایش ارقام فارسی در تمام بخش‌ها",
      "پشتیبانی از فونت‌های فارسی استاندارد",
      "طراحی ریسپانسیو برای موبایل و تبلت",
      "رنگ‌بندی و آیکون‌های بصری",
      "راهنمای آنلاین و tooltipها"
    ]
  }
];

const questionTypes = [
  {
    type: "سوالات تستی",
    icon: "uil-check-circle",
    description: "سوالات چهار گزینه‌ای با مشخص کردن پاسخ صحیح",
    features: [
      "چهار گزینه قابل ویرایش",
      "امکان درج تصویر در هر گزینه", 
      "مشخص کردن گزینه صحیح",
      "پشتیبانی از فرمول‌های ریاضی",
      "نمایش بصری پاسخ صحیح"
    ],
    color: "bg-blue-500"
  },
  {
    type: "سوالات تشریحی",
    icon: "uil-edit-alt",
    description: "سوالات باز پاسخ با پاسخ تفصیلی و راهنمای تصحیح",
    features: [
      "متن سوال کامل و تفصیلی",
      "پاسخ نمونه برای تصحیح‌کننده",
      "امکان درج فرمول و تصویر",
      "راهنمای نمره‌دهی",
      "معیارهای ارزیابی"
    ],
    color: "bg-green-500"
  }
];

const categoryLevels = [
  {
    level: "سطح ۱",
    title: "پایه تحصیلی",
    description: "انتخاب پایه از اول تا دوازدهم",
    icon: "uil-graduation-cap",
    color: "primary"
  },
  {
    level: "سطح ۲", 
    title: "درس",
    description: "انتخاب درس مربوط به پایه انتخابی",
    icon: "uil-book-open",
    color: "success"
  },
  {
    level: "سطح ۳",
    title: "فصل",
    description: "تعیین فصل یا واحد آموزشی",
    icon: "uil-folder",
    color: "info"
  },
  {
    level: "سطح ۴",
    title: "بخش",
    description: "مشخص کردن بخش یا قسمت خاص",
    icon: "uil-layers",
    color: "warning"
  },
  {
    level: "سطح ۵",
    title: "موضوع",
    description: "انتخاب موضوع دقیق و جزئی",
    icon: "uil-target",
    color: "purple"
  }
];

const workflowSteps = [
  {
    step: "۱",
    title: "ورود به بانک سوالات",
    description: "از منوی اصلی به بخش بانک سوالات مراجعه کنید",
    icon: "uil-database",
    color: "primary"
  },
  {
    step: "۲", 
    title: "اعمال فیلترها",
    description: "پایه، درس و سایر فیلترهای مورد نظر را انتخاب کنید",
    icon: "uil-filter",
    color: "success"
  },
  {
    step: "۳",
    title: "مرور و انتخاب سوالات",
    description: "سوالات را مرور کرده و موارد مناسب را انتخاب کنید",
    icon: "uil-search",
    color: "info"
  },
  {
    step: "۴",
    title: "افزودن به آزمون یا ذخیره",
    description: "سوالات انتخابی را به آزمون اضافه کنید یا سوال جدید ایجاد کنید",
    icon: "uil-plus-circle",
    color: "warning"
  }
];

const advancedFeatures = [
  {
    title: "پشتیبانی از MathJax",
    description: "نمایش حرفه‌ای فرمول‌های ریاضی و فیزیک در سوالات",
    benefits: ["فرمول‌های LaTeX", "نمادهای ریاضی پیشرفته", "نمایش زیبا و استاندارد"]
  },
  {
    title: "مدیریت تصاویر",
    description: "آپلود و نمایش تصاویر با کیفیت بالا در سوالات و گزینه‌ها",
    benefits: ["فرمت‌های مختلف تصویر", "بهینه‌سازی خودکار", "نمایش ریسپانسیو"]
  },
  {
    title: "امنیت و دسترسی",
    description: "کنترل دقیق دسترسی بر اساس مدرسه و نقش کاربری",
    benefits: ["محدودیت دسترسی مدرسه‌ای", "نقش‌های مختلف کاربری", "حفاظت از اطلاعات"]
  },
  {
    title: "عملکرد بهینه",
    description: "بارگذاری سریع و کارآمد حتی با هزاران سوال",
    benefits: ["صفحه‌بندی هوشمند", "بارگذاری تدریجی", "کش کردن اطلاعات"]
  }
];

const statisticsData = [
  {
    number: "۱۰۰۰+",
    label: "سوال در هر مدرسه",
    color: "bg-blue-500"
  },
  {
    number: "۵+",
    label: "سطح دسته‌بندی",
    color: "bg-green-500"
  },
  {
    number: "۲",
    label: "نوع سوال پشتیبانی شده",
    color: "bg-purple-500"
  },
  {
    number: "۱۰۰%",
    label: "پشتیبانی از فارسی",
    color: "bg-orange-500"
  }
];

export default function QuestionBankServices() {
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

        .category-level {
          position: relative;
        }

        .category-level::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 30px;
          background: #e5e7eb;
        }

        .category-level:last-child::after {
          display: none;
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">بانک سوالات دیجیتال</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                مدیریت حرفه‌ای سوالات با قابلیت‌های
                <span className="underline"> جستجوی پیشرفته و طبقه‌بندی هوشمند</span> برای تولید آزمون‌های استاندارد
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
              <h3 className="display-4 mb-5">آشنایی کامل با بانک سوالات دیجیتال</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="بانک سوالات دیجیتال" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {questionBankOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-database fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">ذخیره‌سازی مطمئن</h4>
                      <p className="mb-0">حفظ امن هزاران سوال</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-search fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">جستجوی هوشمند</h4>
                      <p className="mb-0">یافتن سریع سوال مناسب</p>
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
              <h3 className="display-4 mb-5">ویژگی‌های کلیدی بانک سوالات</h3>
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

      {/* ========== question types section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">انواع سوالات</h2>
              <h3 className="display-4 mb-5">پشتیبانی از انواع مختلف سوالات</h3>
            </div>
          </div>

          <div className="row gy-8 justify-content-center">
            {questionTypes.map((type, index) => (
              <div className="col-lg-5 col-md-8" key={index}>
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

      {/* ========== category levels section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">سیستم دسته‌بندی</h2>
              <h3 className="display-4 mb-5">۵ سطح طبقه‌بندی هوشمند</h3>
            </div>
          </div>

          <div className="row justify-content-center">
            {categoryLevels.map((category, index) => (
              <div className="col-lg-2 col-md-4 col-6 text-center category-level" key={index}>
                <div className={`bg-${category.color} text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center`} 
                     style={{ width: '80px', height: '80px' }}>
                  <i className={`${category.icon} fs-28`}></i>
                </div>
                <h6 className="mb-2">{category.level}</h6>
                <h5 className="mb-2">{category.title}</h5>
                <p className="text-muted text-sm">{category.description}</p>
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
              <h3 className="display-4 mb-5">چگونه با بانک سوالات کار کنیم؟</h3>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6">
            {workflowSteps.map((workflow, index) => (
              <div className="col-lg-3 col-md-6 text-center" key={index}>
                <div className={`bg-${workflow.color} text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center`} 
                     style={{ width: '80px', height: '80px' }}>
                  <i className={`${workflow.icon} fs-28`}></i>
                </div>
                <h5>{workflow.step}. {workflow.title}</h5>
                <p className="text-muted">{workflow.description}</p>
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
              <h3 className="display-4 mb-5">قدرت بانک سوالات در اعداد</h3>
            </div>
          </div>

          <div className="row gy-6">
            {statisticsData.map((stat, index) => (
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

      {/* ========== benefits accordion section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مزایای کلیدی</h2>
              <h3 className="display-4 mb-7">چرا بانک سوالات دیجیتال؟</h3>
              
              <div className="accordion" id="benefitsAccordion">
                <div className="card mb-3">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        <i className="uil uil-rocket text-primary me-2"></i>
                        تسریع فرآیند آزمون‌سازی
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      دسترسی سریع به هزاران سوال طبقه‌بندی شده که زمان تهیه آزمون‌ها را تا ۸۰٪ کاهش می‌دهد.
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        <i className="uil uil-shield-check text-success me-2"></i>
                        تضمین کیفیت سوالات
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      سوالات بررسی شده و استاندارد با امکان مرور و ویرایش توسط تیم آموزشی مدرسه.
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        <i className="uil uil-layers text-info me-2"></i>
                        سازماندهی حرفه‌ای
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      دسته‌بندی ۵ سطحی و سیستم برچسب‌گذاری پیشرفته برای یافتن آسان سوالات مناسب.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseFour">
                        <i className="uil uil-chart-line text-warning me-2"></i>
                        بهبود کیفیت آموزش
                      </button>
                    </h5>
                  </div>
                  <div id="collapseFour" className="collapse" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      ایجاد آزمون‌های متنوع و جامع که پوشش کاملی از مطالب درسی ارائه می‌دهد.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="مزایای بانک سوالات" className="rounded shadow-lg" />
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
              <h3 className="display-4 mb-5 text-white">آماده شروع کار با بانک سوالات دیجیتال هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین حالا سیستم مدیریت سوالات پیشرفته خود را راه‌اندازی کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/questionbank" className="btn btn-lg btn-white rounded-pill">
                  ورود به بانک سوالات
                </a>
                <a href="#features" className="btn btn-lg btn-outline-white rounded-pill">
                  مشاهده راهنما
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
