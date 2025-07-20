"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

// Dashboard Features Data
const dashboardOverview = `
داشبورد هوشمند و قابل شخصی‌سازی قلب تپنده سیستم مدرسه آنلاین است که تجربه‌ای منحصر به فرد و کاملاً شخصی‌سازی شده برای هر کاربر فراهم می‌کند. این داشبورد با استفاده از فناوری‌های پیشرفته طراحی شده تا نقطه مرکزی دسترسی به تمام ابزارها، اطلاعات و خدمات مورد نیاز هر نوع کاربر (دانش‌آموز، معلم، مدیر) باشد.

ویژگی‌های کلیدی داشبورد:
• رابط کاربری شخصی‌سازی شده با خوشامدگویی نام‌گذاری شده و اطلاعات کاربری
• سیستم ویجت‌های قابل کشیدن و رها کردن (Drag & Drop) برای چیدمان دلخواه
• ۴ نوع ویجت تخصصی: نظرسنجی‌ها، تولدهای امروز، جستجوی دانش‌آموزان، فرم‌ها
• حالت شخصی‌سازی تعاملی با امکان افزودن، حذف و جابجایی ویجت‌ها
• طراحی واکنش‌گرا با قابلیت تطبیق خودکار با اندازه صفحه نمایش
• انیمیشن‌های روان و زیبا برای تمام تعاملات کاربری
• مدیریت چیدمان با قابلیت ذخیره، بازنشانی و بازیابی تنظیمات
• دسترسی سریع به اطلاعات کلیدی کاربر شامل نوع کاربر، نقش و مجوزها

محتوای متفاوت بر اساس نقش کاربری:
• دانش‌آموزان: دسترسی به نمرات، تکالیف، برنامه کلاسی و اطلاعیه‌ها
• معلمان: ابزارهای تدریس، مدیریت کلاس، ثبت نمرات و ارتباط با دانش‌آموزان
• مدیران: آمار و گزارشات کلی، مدیریت کاربران، نظارت بر عملکرد مدرسه

این داشبورد با ترکیب قدرت فناوری و سهولت استفاده، محیطی کاربرپسند و کارآمد برای تمام اعضای جامعه آموزشی فراهم می‌کند که هر کاربر بتواند آن را مطابق نیازها و ترجیحات خود تنظیم کند.
`;

const coreFeatures = [
  {
    id: 1,
    title: "رابط کاربری شخصی‌سازی شده",
    description: "صفحه خوشامدگویی منحصر به فرد با اطلاعات و محتوای مخصوص هر کاربر",
    features: [
      "خوشامدگویی با نام کاربر و نقش سازمانی",
      "نمایش اطلاعات کلیدی: نوع کاربر، نام کاربری، نقش",
      "رنگ‌بندی متفاوت بر اساس نوع کاربری",
      "دسترسی سریع به اطلاعات حساب کاربری",
      "نمایش وضعیت آنلاین و آخرین ورود",
      "پیام‌های ویژه بر اساس نوع کاربر"
    ]
  },
  {
    id: 2,
    title: "سیستم ویجت‌های تعاملی",
    description: "مجموعه ویجت‌های تخصصی قابل چیدمان و شخصی‌سازی برای دسترسی سریع",
    features: [
      "ویجت نظرسنجی‌ها برای شرکت در آرای عمومی",
      "ویجت تولدهای امروز برای تبریک و ارتباط",
      "ویجت جستجوی دانش‌آموزان برای یافتن سریع",
      "ویجت فرم‌ها برای دسترسی به فرم‌های مورد نیاز",
      "قابلیت افزودن ویجت‌های جدید در آینده",
      "تنظیمات فردی برای هر ویجت"
    ]
  },
  {
    id: 3,
    title: "سیستم کشیدن و رها کردن پیشرفته",
    description: "فناوری Drag & Drop برای چیدمان آسان و سریع ویجت‌ها در داشبورد",
    features: [
      "جابجایی ویجت‌ها با کشیدن و رها کردن",
      "تغییر اندازه و موقعیت ویجت‌ها",
      "نمایش بصری در حین جابجایی",
      "انیمیشن‌های روان و زیبا",
      "تشخیص خودکار بهترین موقعیت",
      "ذخیره خودکار چیدمان جدید"
    ]
  },
  {
    id: 4,
    title: "مدیریت چیدمان هوشمند",
    description: "ابزارهای کامل برای کنترل و مدیریت چیدمان داشبورد شخصی",
    features: [
      "حالت شخصی‌سازی با کنترل‌های ویژه",
      "افزودن ویجت‌های جدید از منوی انتخاب",
      "حذف ویجت‌های غیرضروری",
      "بازنشانی به تنظیمات پیش‌فرض",
      "ذخیره و بازیابی چیدمان‌های مختلف",
      "پیش‌نمایش زنده تغییرات"
    ]
  }
];

const widgetTypes = [
  {
    type: "ویجت نظرسنجی‌ها",
    icon: "uil-chart-pie",
    description: "مشاهده و شرکت در نظرسنجی‌های فعال مدرسه",
    features: [
      "نمایش نظرسنجی‌های جاری",
      "شرکت سریع در آرا",
      "مشاهده نتایج (در صورت مجاز بودن)",
      "اطلاع‌رسانی نظرسنجی‌های جدید",
      "تاریخچه شرکت در نظرسنجی‌ها"
    ],
    color: "bg-blue-500"
  },
  {
    type: "ویجت تولدهای امروز",
    icon: "uil-gift",
    description: "نمایش تولدهای امروز اعضای مدرسه برای تبریک و ارتباط",
    features: [
      "لیست تولدهای امروز",
      "اطلاعات تماس برای تبریک",
      "یادآوری تولدهای آینده",
      "ارسال پیام تبریک",
      "آمار تولدها در ماه جاری"
    ],
    color: "bg-pink-500"
  },
  {
    type: "ویجت جستجوی دانش‌آموزان",
    icon: "uil-search",
    description: "ابزار جستجوی سریع برای یافتن دانش‌آموزان و اطلاعاتشان",
    features: [
      "جستجوی سریع با نام و کد",
      "فیلتر بر اساس کلاس و رشته",
      "نمایش اطلاعات پایه",
      "دسترسی به پروفایل کامل",
      "تاریخچه جستجوهای اخیر"
    ],
    color: "bg-green-500"
  },
  {
    type: "ویجت فرم‌ها",
    icon: "uil-file-alt",
    description: "دسترسی سریع به فرم‌های پر شده و قابل پر کردن",
    features: [
      "لیست فرم‌های در دسترس",
      "وضعیت پر کردن فرم‌ها",
      "دسترسی سریع به فرم‌های جدید",
      "تاریخچه فرم‌های ارسال شده",
      "اطلاع‌رسانی فرم‌های ضروری"
    ],
    color: "bg-purple-500"
  }
];

const userRoles = [
  {
    role: "دانش‌آموزان",
    access: "محتوای آموزشی و شخصی",
    permissions: [
      "مشاهده نمرات و پیشرفت تحصیلی",
      "دسترسی به تکالیف و پروژه‌ها",
      "مشاهده برنامه کلاسی و اطلاعیه‌ها",
      "شرکت در نظرسنجی‌های دانش‌آموزی",
      "ارتباط با همکلاسی‌ها و معلمان",
      "تبریک تولدها و مناسبت‌ها"
    ],
    color: "bg-blue-500"
  },
  {
    role: "معلمان",
    access: "ابزارهای تدریس و مدیریت کلاس",
    permissions: [
      "مدیریت کلاس‌ها و دانش‌آموزان",
      "ثبت نمرات و ارزیابی‌ها",
      "ایجاد و مدیریت فرم‌ها",
      "دسترسی به آمار عملکرد کلاس",
      "ارتباط با والدین و همکاران",
      "شخصی‌سازی کامل داشبورد"
    ],
    color: "bg-green-500"
  },
  {
    role: "مدیران مدرسه",
    access: "گزارشات جامع و مدیریت کلی",
    permissions: [
      "نظارت بر عملکرد کلی مدرسه",
      "مدیریت کاربران و دسترسی‌ها",
      "مشاهده آمار و گزارشات مدیریتی",
      "کنترل تنظیمات سیستم",
      "دسترسی به تمام ویجت‌ها",
      "مدیریت محتوا و اطلاعیه‌ها"
    ],
    color: "bg-purple-500"
  }
];

const customizationFeatures = [
  {
    title: "حالت شخصی‌سازی",
    description: "امکان ورود به حالت ویرایش برای تنظیم داشبورد",
    benefits: ["تغییر به حالت ویرایش", "راهنمای بصری", "ذخیره خودکار تغییرات"]
  },
  {
    title: "مدیریت ویجت‌ها",
    description: "افزودن، حذف و جابجایی ویجت‌ها به سادگی",
    benefits: ["منوی انتخاب ویجت", "حذف با یک کلیک", "جابجایی با Drag & Drop"]
  },
  {
    title: "چیدمان انطباقی",
    description: "تطبیق خودکار با اندازه صفحه نمایش",
    benefits: ["Grid واکنش‌گرا", "بهینه‌سازی موبایل", "تنظیم خودکار اندازه"]
  },
  {
    title: "انیمیشن‌های زیبا",
    description: "حرکات روان و انیمیشن‌های جذاب",
    benefits: ["تعاملات روان", "بازخورد بصری", "تجربه کاربری لذت‌بخش"]
  }
];

const workflowSteps = [
  {
    step: "۱",
    title: "ورود به داشبورد",
    description: "پس از ورود به سیستم، به صفحه داشبورد شخصی هدایت می‌شوید",
    icon: "uil-signin",
    color: "primary"
  },
  {
    step: "۲",
    title: "مشاهده اطلاعات شخصی",
    description: "اطلاعات کاربری، نقش و دسترسی‌های شما نمایش داده می‌شود",
    icon: "uil-user-circle",
    color: "success"
  },
  {
    step: "۳",
    title: "استفاده از ویجت‌ها",
    description: "با ویجت‌های موجود در داشبورد تعامل کنید و از امکانات استفاده کنید",
    icon: "uil-apps",
    color: "info"
  },
  {
    step: "۴",
    title: "شخصی‌سازی چیدمان",
    description: "داشبورد را مطابق نیاز خود تنظیم کنید و ویجت‌ها را جابجا کنید",
    icon: "uil-edit",
    color: "warning"
  }
];

const statistics = [
  {
    number: "۴",
    label: "نوع ویجت تخصصی",
    color: "bg-blue-500"
  },
  {
    number: "۳",
    label: "نوع کاربر پشتیبانی شده",
    color: "bg-green-500"
  },
  {
    number: "۱۰۰٪",
    label: "قابلیت شخصی‌سازی",
    color: "bg-purple-500"
  },
  {
    number: "کامل",
    label: "واکنش‌گرایی طراحی",
    color: "bg-orange-500"
  }
];

export default function DashboardServices() {
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

        .widget-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 20px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
        }

        .widget-demo:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">داشبورد هوشمند و قابل شخصی‌سازی</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                مرکز فرمان شخصی شما با
                <span className="underline"> ویجت‌های تعاملی و چیدمان دلخواه</span> برای تجربه‌ای منحصر به فرد
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
              <h3 className="display-4 mb-5">آشنایی کامل با داشبورد هوشمند</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="داشبورد هوشمند و قابل شخصی‌سازی" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {dashboardOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-apps fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">ویجت‌های تعاملی</h4>
                      <p className="mb-0">قابل کشیدن و جابجایی</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-palette fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">شخصی‌سازی کامل</h4>
                      <p className="mb-0">چیدمان دلخواه شما</p>
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
              <h3 className="display-4 mb-5">ویژگی‌های کلیدی داشبورد هوشمند</h3>
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

      {/* ========== widget types section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">انواع ویجت‌ها</h2>
              <h3 className="display-4 mb-5">ویجت‌های تخصصی برای نیازهای مختلف</h3>
            </div>
          </div>

          <div className="row gy-8">
            {widgetTypes.map((widget, index) => (
              <div className="col-lg-6" key={index}>
                <div className="card h-100 border-0 shadow-lg">
                  <div className="card-body p-6">
                    <div className="d-flex align-items-center mb-4">
                      <div className={`${widget.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                           style={{ width: '60px', height: '60px' }}>
                        <i className={`${widget.icon} fs-24`}></i>
                      </div>
                      <h4 className="mb-0">{widget.type}</h4>
                    </div>
                    
                    <p className="text-muted mb-4">{widget.description}</p>
                    
                    <ul className="list-unstyled">
                      {widget.features.map((feature, idx) => (
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

      {/* ========== workflow section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">فرآیند کار</h2>
              <h3 className="display-4 mb-5">چگونه از داشبورد استفاده کنیم؟</h3>
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
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نقش‌های کاربری</h2>
              <h3 className="display-4 mb-5">دسترسی‌ها و محتوای مختلف</h3>
            </div>
          </div>

          <div className="row gy-8">
            {userRoles.map((role, index) => (
              <div className="col-lg-4" key={index}>
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

      {/* ========== customization features section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">ویژگی‌های شخصی‌سازی</h2>
              <h3 className="display-4 mb-5">قابلیت‌های پیشرفته تنظیمات</h3>
            </div>
          </div>

          <div className="row gy-6">
            {customizationFeatures.map((feature, index) => (
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
              <h3 className="display-4 mb-5">قدرت داشبورد در اعداد</h3>
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
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمونه ویجت‌ها</h2>
              <h3 className="display-4 mb-5">نمایش تعاملی قابلیت‌ها</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-3 col-md-6">
              <div className="widget-demo">
                <i className="uil uil-chart-pie fs-40 mb-3"></i>
                <h5 className="mb-2">نظرسنجی‌ها</h5>
                <p className="mb-0 small">۳ نظرسنجی فعال</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="widget-demo">
                <i className="uil uil-gift fs-40 mb-3"></i>
                <h5 className="mb-2">تولدها</h5>
                <p className="mb-0 small">۲ تولد امروز</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="widget-demo">
                <i className="uil uil-search fs-40 mb-3"></i>
                <h5 className="mb-2">جستجو</h5>
                <p className="mb-0 small">جستجوی سریع</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="widget-demo">
                <i className="uil uil-file-alt fs-40 mb-3"></i>
                <h5 className="mb-2">فرم‌ها</h5>
                <p className="mb-0 small">۵ فرم در انتظار</p>
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
              <h3 className="display-4 mb-5 text-white">آماده تجربه داشبورد شخصی خود هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین حالا وارد داشبورد هوشمند شوید و آن را مطابق نیاز خود شخصی‌سازی کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/dashboard" className="btn btn-lg btn-white rounded-pill">
                  ورود به داشبورد
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
