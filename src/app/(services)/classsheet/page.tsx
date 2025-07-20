"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

// ClassSheet Features Data
const classSheetOverview = `
سیستم کلاس‌برگ دیجیتال یکی از جامع‌ترین ابزارهای مدیریت کلاس در سیستم مدرسه آنلاین است که تمام جنبه‌های روزانه تدریس و یادگیری را پوشش می‌دهد. این سیستم به معلمان امکان ثبت حضور و غیاب، نمرات، ارزیابی‌های توصیفی، یادداشت‌های روزانه و مدیریت رویدادهای کلاسی را به صورت کاملاً دیجیتال و هوشمند فراهم می‌کند.

ویژگی‌های کلیدی سیستم شامل:
• مدیریت حضور و غیاب با انواع مختلف وضعیت (حاضر، غایب، مرخصی، تاخیر)
• سیستم نمره‌دهی پیشرفته با نمرات عددی و ارزیابی‌های توصیفی  
• ثبت یادداشت‌های معلم و رویدادهای کلاسی
• گزارش‌گیری ماهانه و نمودارهای پیشرفت تحصیلی
• پروفایل فردی هر دانش‌آموز با تحلیل عملکرد
• دسترسی متفاوت برای معلمان و مدیران مدرسه
• رابط کاربری ساده و بصری برای استفاده آسان
• ذخیره‌سازی خودکار و امن تمام اطلاعات

این سیستم نه تنها کار اداری معلمان را تسهیل می‌کند، بلکه امکان پیگیری دقیق پیشرفت هر دانش‌آموز و ارائه بازخورد مناسب به والدین را فراهم می‌آورد.
`;

const coreFeatures = [
  {
    id: 1,
    title: "مدیریت حضور و غیاب هوشمند",
    description: "ثبت سریع و آسان حضور و غیاب با انواع مختلف وضعیت و گزارش‌گیری خودکار",
    features: [
      "ثبت حضور با یک کلیک",
      "انواع وضعیت: حاضر، غایب، مرخصی، تاخیر، خروج زودهنگام",
      "محاسبه خودکار درصد حضور",
      "هشدار برای غیبت‌های مکرر",
      "گزارش ماهانه حضور و غیاب"
    ]
  },
  {
    id: 2,
    title: "سیستم نمره‌دهی و ارزیابی جامع",
    description: "ثبت نمرات عددی همراه با ارزیابی‌های توصیفی و محاسبه خودکار نمرات ماهانه",
    features: [
      "نمره‌دهی عددی با امتیاز کل قابل تنظیم",
      "ارزیابی‌های توصیفی: عالی، خوب، متوسط، ضعیف",
      "تأثیر ارزیابی‌ها روی نمره نهایی (+2 تا -2)",
      "محاسبه خودکار میانگین ماهانه",
      "امکان تعدیل نمرات بر اساس ارزیابی‌ها"
    ]
  },
  {
    id: 3,
    title: "یادداشت‌ها و رویدادهای کلاسی",
    description: "ثبت یادداشت‌های روزانه معلم و مدیریت رویدادهای کلاسی برای پیگیری بهتر",
    features: [
      "یادداشت روزانه فعالیت‌های کلاس",
      "ثبت رویدادها و مناسبت‌های خاص",
      "مشاهده تاریخچه یادداشت‌ها",
      "اشتراک‌گذاری رویدادها با سایر معلمان",
      "ذخیره خودکار یادداشت‌ها"
    ]
  },
  {
    id: 4,
    title: "گزارش‌گیری و تحلیل عملکرد",
    description: "تولید گزارشات جامع و نمودارهای تحلیلی برای بررسی پیشرفت دانش‌آموزان",
    features: [
      "نمای ماهانه نمرات و عملکرد",
      "نمودار پیشرفت تحصیلی هر دانش‌آموز",
      "آمار حضور و غیاب",
      "پروفایل فردی دانش‌آموزان",
      "مقایسه عملکرد در دروس مختلف"
    ]
  }
];

const userRoles = [
  {
    role: "معلمان",
    access: "کلاس‌های اختصاص یافته",
    permissions: [
      "ثبت حضور و غیاب دانش‌آموزان",
      "وارد کردن نمرات و ارزیابی‌ها",
      "نوشتن یادداشت‌های روزانه",
      "ایجاد و مدیریت رویدادهای کلاسی",
      "مشاهده پروفایل دانش‌آموزان",
      "تولید گزارش عملکرد کلاس"
    ],
    color: "bg-blue-500"
  },
  {
    role: "مدیران مدرسه",
    access: "تمام کلاس‌های مدرسه",
    permissions: [
      "نظارت بر تمام کلاس‌ها و معلمان",
      "مشاهده گزارشات جامع مدرسه",
      "تحلیل عملکرد کلی دانش‌آموزان",
      "مدیریت تنظیمات سیستم",
      "دسترسی به آمار کلی مدرسه",
      "صادرات گزارشات تفصیلی"
    ],
    color: "bg-purple-500"
  }
];

const workflowSteps = [
  {
    step: "۱",
    title: "انتخاب کلاس و درس",
    description: "ابتدا از لیست کلاس‌ها، کلاس مورد نظر و سپس درس را انتخاب کنید",
    icon: "uil-books",
    color: "primary"
  },
  {
    step: "۲",
    title: "مشاهده جدول کلاس",
    description: "جدول دو هفته‌ای کلاس با تاریخ‌ها و لیست دانش‌آموزان نمایش داده می‌شود",
    icon: "uil-calendar-alt",
    color: "success"
  },
  {
    step: "۳",
    title: "ثبت اطلاعات",
    description: "حضور، نمرات، ارزیابی‌ها و یادداشت‌های روزانه را ثبت کنید",
    icon: "uil-edit-alt",
    color: "info"
  },
  {
    step: "۴",
    title: "مشاهده گزارشات",
    description: "نمای ماهانه و پروفایل دانش‌آموزان را برای تحلیل عملکرد بررسی کنید",
    icon: "uil-chart-line",
    color: "warning"
  }
];

const advancedFeatures = [
  {
    title: "ناوبری زمانی پیشرفته",
    description: "جابجایی آسان بین هفته‌ها، ماه‌ها و بازگشت به تاریخ امروز",
    benefits: ["جابجایی با کلیدهای جهت‌دار", "انتخاب تاریخ خاص", "دکمه بازگشت سریع به امروز"]
  },
  {
    title: "سفارشی‌سازی ارزیابی‌ها",
    description: "امکان تنظیم عناوین ارزیابی و مقادیر امتیازی متناسب با نیاز مدرسه",
    benefits: ["عناوین قابل تنظیم", "مقادیر امتیازی سفارشی", "دسته‌بندی‌های مختلف ارزیابی"]
  },
  {
    title: "ذخیره‌سازی خودکار",
    description: "تمام اطلاعات وارد شده به صورت خودکار و فوری ذخیره می‌شود",
    benefits: ["عدم نیاز به ذخیره دستی", "محافظت از اطلاعات", "دسترسی از هر مکان"]
  },
  {
    title: "گزارش‌گیری هوشمند",
    description: "تولید خودکار گزارشات ماهانه و نمودارهای پیشرفت",
    benefits: ["نمودارهای تعاملی", "گزارش PDF و Excel", "تحلیل روند پیشرفت"]
  }
];

export default function ClassSheetServices() {
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
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">سیستم کلاس‌برگ دیجیتال</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                مدیریت جامع کلاس‌ها با قابلیت‌های
                <span className="underline"> ثبت حضور، نمرات و ارزیابی‌ها</span> در یک پلتفرم واحد
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
              <h3 className="display-4 mb-5">آشنایی کامل با کلاس‌برگ دیجیتال</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="سیستم کلاس‌برگ دیجیتال" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {classSheetOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-check fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">رابط کاربری ساده</h4>
                      <p className="mb-0">طراحی بصری و کاربردی</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-shield-check fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">امنیت اطلاعات</h4>
                      <p className="mb-0">ذخیره‌سازی امن و قابل اتکا</p>
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
              <h3 className="display-4 mb-5">ویژگی‌های کلیدی سیستم کلاس‌برگ</h3>
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
              <h3 className="display-4 mb-5">چگونه با سیستم کلاس‌برگ کار کنیم؟</h3>
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

      {/* ========== advanced features section ========== */}
      <section className="wrapper bg-light rtl-content">
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

      {/* ========== benefits summary section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مزایای کلیدی</h2>
              <h3 className="display-4 mb-7">چرا سیستم کلاس‌برگ دیجیتال؟</h3>
              
              <div className="accordion" id="benefitsAccordion">
                <div className="card mb-3">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        <i className="uil uil-rocket text-primary me-2"></i>
                        افزایش بهره‌وری معلمان
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      کاهش زمان ثبت اطلاعات و خودکار شدن فرآیندهای اداری تا ۷۰٪ زمان معلمان را صرفه‌جویی می‌کند.
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        <i className="uil uil-chart-line text-success me-2"></i>
                        پیگیری دقیق پیشرفت
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      امکان تحلیل دقیق عملکرد هر دانش‌آموز و شناسایی نقاط ضعف و قوت برای بهبود یادگیری.
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        <i className="uil uil-shield-check text-info me-2"></i>
                        شفافیت و قابلیت اطمینان
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      ثبت دقیق و قابل ردیابی تمام فعالیت‌ها با امکان دسترسی والدین و مدیران به گزارشات شفاف.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseFour">
                        <i className="uil uil-mobile-android text-warning me-2"></i>
                        دسترسی همه‌جا
                      </button>
                    </h5>
                  </div>
                  <div id="collapseFour" className="collapse" data-bs-parent="#benefitsAccordion">
                    <div className="card-body">
                      امکان استفاده از هر مکان و زمان با رابط ریسپانسیو و سازگار با تمام دستگاه‌ها.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row gy-6">
                <div className="col-md-6">
                  <div className="card bg-pale-primary text-center">
                    <div className="card-body p-4">
                      <h3 className="counter text-primary persian-numbers">۷۰٪</h3>
                      <p className="mb-0">کاهش زمان ثبت اطلاعات</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card bg-pale-green text-center">
                    <div className="card-body p-4">
                      <h3 className="counter text-green persian-numbers">۱۰۰٪</h3>
                      <p className="mb-0">دقت در ثبت اطلاعات</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card bg-pale-yellow text-center">
                    <div className="card-body p-4">
                      <h3 className="counter text-yellow persian-numbers">۲۴/۷</h3>
                      <p className="mb-0">دسترسی به سیستم</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card bg-pale-purple text-center">
                    <div className="card-body p-4">
                      <h3 className="counter text-purple persian-numbers">۱۵+</h3>
                      <p className="mb-0">نوع گزارش مختلف</p>
                    </div>
                  </div>
                </div>
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
              <h3 className="display-4 mb-5 text-white">آماده شروع کار با کلاس‌برگ دیجیتال هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین حالا سیستم مدیریت کلاس حرفه‌ای خود را راه‌اندازی کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/classsheet" className="btn btn-lg btn-white rounded-pill">
                  ورود به سیستم
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
