"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Team8 } from "components/blocks/team";
import { Clients1 } from "components/blocks/clients";
import { Process8 } from "components/blocks/process";
import Carousel from "components/reuseable/Carousel";
import ProgressList from "components/common/ProgressList";
import AccordionList from "components/common/AccordionList";
import { TestimonialCard2 } from "components/reuseable/testimonial-cards";
// CUSTOM ICON COMPONENTS
import Target from "icons/lineal/Target";
import BarChart from "icons/lineal/BarChart";
import Megaphone from "icons/lineal/Megaphone";
import SettingsThree from "icons/lineal/SettingsThree";

// Form Builder Features Data
const formBuilderFeatures = [
  {
    id: 1,
    title: "ایجاد فرم هوشمند",
    Icon: <SettingsThree />,
    description: `سیستم پیشرفته ایجاد فرم با ۱۴ نوع فیلد مختلف، منطق شرطی و قابلیت چندمرحله‌ای برای تمام نیازهای آموزشی شما.`
  },
  {
    id: 2,
    title: "مدیریت داده‌ها",
    Icon: <BarChart className="icon-svg-md text-green mb-3" />,
    description: `گزارش‌گیری جامع، صادرات داده‌ها به فرمت‌های مختلف و تحلیل عملکرد فرم‌ها با نمودارهای تعاملی.`
  },
  {
    id: 3,
    title: "اختصاص هوشمند",
    Icon: <Target />,
    description: `امکان اختصاص فرم‌ها به کلاس‌ها، گروه‌های خاص، زمان‌بندی دقیق و کنترل دسترسی برای هر کاربر.`
  },
  {
    id: 4,
    Icon: <Megaphone />,
    title: "ارتباط مؤثر",
    description: `ایجاد فرم‌های تعاملی برای نظرسنجی، ارزیابی، ثبت‌نام و ارتباط مستقیم با دانش‌آموزان و والدین.`
  }
];

const fieldTypes = [
  { name: "متن کوتاه", count: "برای ورود نام، عنوان و متون یک خطی" },
  { name: "متن بلند", count: "برای توضیحات، نظرات و متون چند خطی" },
  { name: "ایمیل", count: "با اعتبارسنجی خودکار آدرس ایمیل" },
  { name: "عدد", count: "برای ورود اعداد با محدودیت‌های دلخواه" },
  { name: "تاریخ شمسی", count: "انتخابگر تاریخ با تقویم فارسی" },
  { name: "منوی کشویی", count: "انتخاب از فهرست از پیش تعریف شده" },
  { name: "دکمه رادیویی", count: "انتخاب یکی از چندین گزینه" },
  { name: "چک باکس", count: "امکان انتخاب چندگانه" },
  { name: "کلید", count: "حالت روشن/خاموش یا بله/خیر" },
  { name: "امتیازدهی", count: "سیستم ستاره‌ای ۱ تا ۵" },
  { name: "آپلود فایل", count: "بارگذاری اسناد و تصاویر" },
  { name: "امضاء دیجیتال", count: "ثبت امضاء الکترونیکی" },
  { name: "گروه‌بندی", count: "سازماندهی فیلدها در گروه‌ها" },
  { name: "منطق شرطی", count: "نمایش فیلدها بر اساس شرایط" }
];

const advancedFeatures = [
  {
    title: "فرم‌های چندمرحله‌ای",
    description: "تقسیم فرم‌های پیچیده به مراحل قابل مدیریت",
    benefits: ["کاهش پیچیدگی ظاهری", "بهبود تجربه کاربری", "افزایش نرخ تکمیل"]
  },
  {
    title: "منطق شرطی پیشرفته",
    description: "نمایش یا مخفی کردن فیلدها بر اساس پاسخ‌های قبلی",
    benefits: ["فرم‌های هوشمند", "کاهش فیلدهای غیرضروری", "تجربه شخصی‌سازی شده"]
  },
  {
    title: "زمان‌بندی دقیق",
    description: "تعیین زمان شروع و پایان دقیق برای هر فرم",
    benefits: ["کنترل زمانی دقیق", "برنامه‌ریزی بهتر", "مدیریت خودکار"]
  },
  {
    title: "گزارش‌گیری جامع",
    description: "تحلیل کامل داده‌ها با نمودارها و آمار",
    benefits: ["بینش عمیق از داده‌ها", "تصمیم‌گیری بهتر", "ردیابی عملکرد"]
  }
];

export default function FormBuilderIntro() {
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
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-20 pt-md-14 pb-md-23 text-center">
          <div className="row">
            <div className="col-xl-6 mx-auto mb-6">
              <h1 className="display-1 mb-3">فرم ساز پیشرفته</h1>
              <p className="lead mb-0">ابزار قدرتمند ایجاد فرم‌های هوشمند و تعاملی برای مدارس</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== main features section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container pb-14 pb-md-16">
          <div className="row text-center mb-12 mb-md-15">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22">
              <figure>
                <img
                  alt="فرم ساز پیشرفته"
                  className="w-auto"
                  src="/img/illustrations/i8.png"
                  srcSet="/img/illustrations/i8@2x.png 2x"
                />
              </figure>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="space-y-4">
                <div className="progress-wrapper">
                  <div className="d-flex justify-content-between mb-2">
                    <span>قابلیت‌های اصلی</span>
                    <span className="persian-numbers">۹۵٪</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-primary" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div className="progress-wrapper">
                  <div className="d-flex justify-content-between mb-2">
                    <span>انواع فیلدها</span>
                    <span className="persian-numbers">۱۰۰٪</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="progress-wrapper">
                  <div className="d-flex justify-content-between mb-2">
                    <span>منطق شرطی</span>
                    <span className="persian-numbers">۹۰٪</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-info" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div className="progress-wrapper">
                  <div className="d-flex justify-content-between mb-2">
                    <span>گزارش‌گیری</span>
                    <span className="persian-numbers">۸۵٪</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-warning" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="display-5 mb-5">
                سیستم فرم ساز جامع و کاملی که تمام نیازهای آموزشی شما را پوشش می‌دهد
              </h3>

              <p>
                با استفاده از ۱۴ نوع فیلد مختلف، منطق شرطی پیشرفته و قابلیت چندمرحله‌ای، 
                می‌توانید فرم‌های ساده تا پیچیده‌ای بسازید که دقیقاً با نیازهای مدرسه شما تطبیق دارد.
              </p>
              
              <p>
                سیستم ما امکان زمان‌بندی دقیق، اختصاص به کلاس‌های خاص و گزارش‌گیری جامع را فراهم می‌کند.
              </p>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
            {formBuilderFeatures.map(({ id, Icon, title, description }) => (
              <div className="col-md-6 col-lg-3" key={id}>
                {Icon}
                <h4>{title}</h4>
                <p className="mb-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== field types section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row mb-10">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">انواع فیلدها</h2>
              <h3 className="display-4 mb-5">۱۴ نوع فیلد مختلف برای تمام نیازها</h3>
              <p className="lead">
                از فیلدهای ساده متنی تا فیلدهای پیشرفته امضاء دیجیتال و منطق شرطی
              </p>
            </div>
          </div>

          <div className="row gx-md-8 gy-4">
            {fieldTypes.map((field, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                           style={{ width: '40px', height: '40px', fontSize: '14px' }}>
                        {index + 1}
                      </div>
                      <h5 className="mb-0">{field.name}</h5>
                    </div>
                    <p className="text-muted mb-0">{field.count}</p>
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
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center mb-14 mb-md-16">
            <div className="col-lg-6 position-relative">
              <figure>
                <img
                  alt="ویژگی‌های پیشرفته"
                  className="w-auto"
                  src="/img/illustrations/i2.png"
                  srcSet="/img/illustrations/i2@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-6">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">ویژگی‌های پیشرفته</h2>
              <h3 className="display-5 mb-7">قابلیت‌هایی که فرم ساز ما را متمایز می‌کند</h3>
              
              <div className="space-y-4">
                {advancedFeatures.map((feature, index) => (
                  <div key={index} className="card border-0 shadow-sm mb-4">
                    <div className="card-body">
                      <h5 className="card-title text-primary">{feature.title}</h5>
                      <p className="card-text">{feature.description}</p>
                      <div className="row">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="col-12 mb-1">
                            <small className="text-success">
                              <i className="uil uil-check-circle me-1"></i>
                              {benefit}
                            </small>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== workflow section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row mb-10">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">فرآیند کار</h2>
              <h3 className="display-4 mb-5">چگونه فرم ساز کار می‌کند؟</h3>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" 
                   style={{ width: '80px', height: '80px' }}>
                <i className="uil uil-plus fs-28"></i>
              </div>
              <h5>۱. ایجاد فرم</h5>
              <p>شروع با انتخاب نوع فرم و افزودن فیلدهای مورد نیاز</p>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="bg-success text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" 
                   style={{ width: '80px', height: '80px' }}>
                <i className="uil uil-cog fs-28"></i>
              </div>
              <h5>۲. تنظیمات</h5>
              <p>پیکربندی فیلدها، اعتبارسنجی و منطق شرطی</p>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="bg-info text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" 
                   style={{ width: '80px', height: '80px' }}>
                <i className="uil uil-users-alt fs-28"></i>
              </div>
              <h5>۳. اختصاص</h5>
              <p>انتساب فرم به کلاس‌ها، گروه‌ها یا کاربران خاص</p>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="bg-warning text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" 
                   style={{ width: '80px', height: '80px' }}>
                <i className="uil uil-chart-line fs-28"></i>
              </div>
              <h5>۴. گزارش‌گیری</h5>
              <p>مشاهده نتایج، تحلیل داده‌ها و صادرات گزارشات</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== benefits section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7">
              <figure>
                <img
                  alt="مزایای فرم ساز"
                  className="w-auto"
                  src="/img/illustrations/i4.png"
                  srcSet="/img/illustrations/i4@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مزایای کلیدی</h2>
              <h3 className="display-4 mb-7">چرا فرم ساز ما را انتخاب کنید؟</h3>
              
              <div className="accordion" id="accordionExample">
                <div className="card mb-3">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        <i className="uil uil-rocket text-primary me-2"></i>
                        سرعت و سادت استفاده
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" data-bs-parent="#accordionExample">
                    <div className="card-body">
                      رابط کاربری بصری و بدون نیاز به دانش فنی خاص، امکان ایجاد سریع فرم‌های پیچیده را فراهم می‌کند.
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        <i className="uil uil-mobile-android text-success me-2"></i>
                        پشتیبانی کامل از موبایل
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" data-bs-parent="#accordionExample">
                    <div className="card-body">
                      فرم‌های شما در تمام دستگاه‌ها به صورت کامل و بهینه نمایش داده می‌شوند.
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        <i className="uil uil-shield-check text-info me-2"></i>
                        امنیت و حریم خصوصی
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" data-bs-parent="#accordionExample">
                    <div className="card-body">
                      داده‌های شما با بالاترین استانداردهای امنیتی محافظت و ذخیره می‌شوند.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseFour">
                        <i className="uil uil-analytics text-warning me-2"></i>
                        تحلیل و گزارش‌گیری پیشرفته
                      </button>
                    </h5>
                  </div>
                  <div id="collapseFour" className="collapse" data-bs-parent="#accordionExample">
                    <div className="card-body">
                      ابزارهای قدرتمند تحلیل داده، نمودارهای تعاملی و صادرات در فرمت‌های مختلف.
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
              <h3 className="display-4 mb-5 text-white">آماده شروع هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین حالا شروع کنید و فرم‌های حرفه‌ای خود را بسازید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/formbuilder" className="btn btn-lg btn-white rounded-pill">
                  شروع رایگان
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
