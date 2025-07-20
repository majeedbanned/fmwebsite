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

// Survey Features Data
const surveyFeatures = [
  {
    id: 1,
    title: "طراحی نظرسنجی هوشمند",
    Icon: <SettingsThree />,
    description: `سیستم پیشرفته ایجاد نظرسنجی با ۴ نوع سوال متنوع، امکان هدف‌گذاری دقیق و زمان‌بندی انعطاف‌پذیر برای جمع‌آوری بازخوردهای مؤثر.`
  },
  {
    id: 2,
    title: "تحلیل و گزارش‌گیری",
    Icon: <BarChart className="icon-svg-md text-green mb-3" />,
    description: `نمودارهای تعاملی، آمار جامع و تحلیل عمیق پاسخ‌ها با امکان صادرات در فرمت‌های مختلف برای تصمیم‌گیری بهتر.`
  },
  {
    id: 3,
    title: "هدف‌گذاری دقیق",
    Icon: <Target />,
    description: `اختصاص نظرسنجی‌ها به کلاس‌ها، معلمان یا گروه‌های خاص با کنترل دسترسی هوشمند و زمان‌بندی مناسب.`
  },
  {
    id: 4,
    Icon: <Megaphone />,
    title: "ارتباط مؤثر و ناشناس",
    description: `امکان دریافت نظرات صادقانه از طریق نظرسنجی‌های ناشناس و ایجاد ارتباط دوطرفه با دانش‌آموزان و معلمان.`
  }
];

const questionTypes = [
  { 
    name: "سوال متنی", 
    count: "برای دریافت پاسخ‌های باز و تشریحی",
    icon: "💬",
    example: "نظر خود را در مورد کیفیت تدریس بیان کنید"
  },
  { 
    name: "تک‌گزینه‌ای (رادیو)", 
    count: "انتخاب یکی از چند گزینه مشخص",
    icon: "◉",
    example: "سطح رضایت شما: عالی، خوب، متوسط، ضعیف"
  },
  { 
    name: "چندگزینه‌ای (چک‌باکس)", 
    count: "انتخاب چندین گزینه همزمان",
    icon: "☑",
    example: "کدام موضوعات را ترجیح می‌دهید؟ ریاضی، علوم، ادبیات"
  },
  { 
    name: "امتیازدهی (ستاره‌ای)", 
    count: "ارزیابی با سیستم ۱ تا ۵ ستاره",
    icon: "⭐",
    example: "کیفیت آموزش را از ۱ تا ۵ ستاره ارزیابی کنید"
  }
];

const surveyWorkflow = [
  {
    step: "۱",
    title: "اطلاعات پایه",
    description: "تعیین عنوان، توضیحات و هدف نظرسنجی",
    icon: "uil-edit-alt",
    color: "primary"
  },
  {
    step: "۲", 
    title: "طراحی سوالات",
    description: "افزودن سوالات با انواع مختلف و تنظیم گزینه‌ها",
    icon: "uil-question-circle",
    color: "success"
  },
  {
    step: "۳",
    title: "تعیین مخاطبان", 
    description: "انتخاب کلاس‌ها، معلمان یا گروه‌های هدف",
    icon: "uil-users-alt",
    color: "info"
  },
  {
    step: "۴",
    title: "تنظیمات پیشرفته",
    description: "زمان‌بندی، حالت ناشناس و سایر تنظیمات",
    icon: "uil-cog",
    color: "warning"
  },
  {
    step: "۵",
    title: "انتشار و تحلیل",
    description: "انتشار نظرسنجی و مشاهده نتایج به صورت زنده",
    icon: "uil-chart-line",
    color: "purple"
  }
];

const advancedFeatures = [
  {
    title: "نظرسنجی‌های ناشناس",
    description: "دریافت نظرات صادقانه بدون نمایش هویت پاسخ‌دهنده",
    benefits: ["افزایش صداقت پاسخ‌ها", "کاهش تعصب", "ایجاد اعتماد بیشتر"]
  },
  {
    title: "زمان‌بندی هوشمند",
    description: "تعیین دقیق زمان شروع و پایان نظرسنجی‌ها",
    benefits: ["کنترل دسترسی زمانی", "برنامه‌ریزی مؤثر", "مدیریت خودکار"]
  },
  {
    title: "هدف‌گذاری پیشرفته",
    description: "اختصاص دقیق به کلاس‌ها، معلمان یا گروه‌های خاص",
    benefits: ["نتایج هدفمند", "کاهش اطلاعات اضافی", "تحلیل دقیق‌تر"]
  },
  {
    title: "تحلیل زنده",
    description: "مشاهده نتایج و آمار در لحظه و به روزرسانی خودکار",
    benefits: ["بینش فوری", "تصمیم‌گیری سریع", "پیگیری مستمر"]
  }
];

const userRoles = [
  {
    role: "دانش‌آموزان",
    permissions: ["پاسخ به نظرسنجی‌های اختصاص یافته", "مشاهده نتایج (در صورت تنظیم)", "دسترسی از طریق موبایل"],
    icon: "uil-graduation-cap",
    color: "bg-blue-500"
  },
  {
    role: "معلمان", 
    permissions: ["ایجاد نظرسنجی برای کلاس‌های خود", "مشاهده و تحلیل پاسخ‌ها", "پاسخ به نظرسنجی‌های مدرسه"],
    icon: "uil-user",
    color: "bg-green-500"
  },
  {
    role: "مدیران",
    permissions: ["مدیریت کامل تمام نظرسنجی‌ها", "دسترسی به گزارشات جامع", "تنظیمات کلی سیستم"],
    icon: "uil-shield-check",
    color: "bg-purple-500"
  }
];

export default function SurveySystemIntro() {
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

        .workflow-step {
          transition: all 0.3s ease;
        }
        
        .workflow-step:hover {
          transform: translateY(-5px);
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-20 pt-md-14 pb-md-23 text-center">
          <div className="row">
            <div className="col-xl-6 mx-auto mb-6">
              <h1 className="display-1 mb-3">سیستم نظرسنجی پیشرفته</h1>
              <p className="lead mb-0">ابزار قدرتمند جمع‌آوری نظرات و بازخوردهای آموزشی</p>
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
                  alt="سیستم نظرسنجی پیشرفته"
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
                    <span>انواع سوالات</span>
                    <span className="persian-numbers">۱۰۰٪</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-primary" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="progress-wrapper">
                  <div className="d-flex justify-content-between mb-2">
                    <span>هدف‌گذاری</span>
                    <span className="persian-numbers">۹۵٪</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div className="progress-wrapper">
                  <div className="d-flex justify-content-between mb-2">
                    <span>تحلیل و گزارش‌گیری</span>
                    <span className="persian-numbers">۹۰٪</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-info" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div className="progress-wrapper">
                  <div className="d-flex justify-content-between mb-2">
                    <span>امنیت و ناشناس بودن</span>
                    <span className="persian-numbers">۱۰۰٪</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-warning" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="display-5 mb-5">
                سیستم نظرسنجی جامع برای دریافت بازخوردهای مؤثر از جامعه آموزشی
              </h3>

              <p>
                با ۴ نوع سوال متنوع، امکان هدف‌گذاری دقیق و تحلیل پیشرفته، 
                می‌توانید نظرسنجی‌های هدفمند ایجاد کرده و نتایج ارزشمندی برای بهبود کیفیت آموزش کسب کنید.
              </p>
              
              <p>
                سیستم ما امکان نظرسنجی ناشناس، زمان‌بندی دقیق و گزارش‌گیری زنده را فراهم می‌کند.
              </p>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
            {surveyFeatures.map(({ id, Icon, title, description }) => (
              <div className="col-md-6 col-lg-3" key={id}>
                {Icon}
                <h4>{title}</h4>
                <p className="mb-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== question types section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row mb-10">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">انواع سوالات</h2>
              <h3 className="display-4 mb-5">۴ نوع سوال برای هر نیاز</h3>
              <p className="lead">
                از سوالات متنی باز تا امتیازدهی ستاره‌ای برای جمع‌آوری انواع بازخوردها
              </p>
            </div>
          </div>

          <div className="row gx-md-8 gy-4">
            {questionTypes.map((question, index) => (
              <div className="col-md-6 col-lg-6" key={index}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                           style={{ width: '50px', height: '50px', fontSize: '20px' }}>
                        {question.icon}
                      </div>
                      <h5 className="mb-0 font-weight-bold">{question.name}</h5>
                    </div>
                    <p className="text-muted mb-3">{question.count}</p>
                    <div className="bg-light p-3 rounded">
                      <small className="text-dark">
                        <strong>مثال:</strong> {question.example}
                      </small>
                    </div>
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
          <div className="row mb-10">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">فرآیند ایجاد</h2>
              <h3 className="display-4 mb-5">نظرسنجی در ۵ مرحله ساده</h3>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6">
            {surveyWorkflow.map((workflow, index) => (
              <div className="col-lg-4 col-md-6 text-center workflow-step" key={index}>
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
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center mb-14 mb-md-16">
            <div className="col-lg-6 position-relative">
              <figure>
                <img
                  alt="ویژگی‌های پیشرفته نظرسنجی"
                  className="w-auto"
                  src="/img/illustrations/i2.png"
                  srcSet="/img/illustrations/i2@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-6">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">ویژگی‌های پیشرفته</h2>
              <h3 className="display-5 mb-7">قابلیت‌هایی که سیستم نظرسنجی ما را متمایز می‌کند</h3>
              
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

      {/* ========== user roles section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row mb-10">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نقش‌های کاربری</h2>
              <h3 className="display-4 mb-5">دسترسی متناسب با هر نقش</h3>
              <p className="lead">
                هر کاربر بر اساس نقش خود، دسترسی‌ها و اختیارات مناسب دارد
              </p>
            </div>
          </div>

          <div className="row gx-lg-8 gy-8">
            {userRoles.map((role, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-lg">
                  <div className="card-body text-center p-5">
                    <div className={`${role.color} text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center`} 
                         style={{ width: '80px', height: '80px' }}>
                      <i className={`${role.icon} fs-28`}></i>
                    </div>
                    <h4 className="mb-4">{role.role}</h4>
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

      {/* ========== analytics section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7">
              <figure>
                <img
                  alt="تحلیل و گزارش‌گیری"
                  className="w-auto"
                  src="/img/illustrations/i4.png"
                  srcSet="/img/illustrations/i4@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">تحلیل و گزارش‌گیری</h2>
              <h3 className="display-4 mb-7">بینش عمیق از نتایج نظرسنجی</h3>
              
              <div className="accordion" id="analyticsAccordion">
                <div className="card mb-3">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        <i className="uil uil-chart-pie text-primary me-2"></i>
                        نمودارهای تعاملی
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" data-bs-parent="#analyticsAccordion">
                    <div className="card-body">
                      نمایش داده‌ها در قالب نمودارهای دایره‌ای، ستونی و خطی با امکان تعامل و جزئیات بیشتر.
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        <i className="uil uil-analytics text-success me-2"></i>
                        آمار زنده
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" data-bs-parent="#analyticsAccordion">
                    <div className="card-body">
                      مشاهده تعداد پاسخ‌ها، درصد مشارکت و آمار کلی به صورت لحظه‌ای و به‌روزرسانی خودکار.
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        <i className="uil uil-file-download-alt text-info me-2"></i>
                        صادرات گزارشات
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" data-bs-parent="#analyticsAccordion">
                    <div className="card-body">
                      دانلود نتایج در فرمت‌های مختلف Excel، PDF و CSV برای تحلیل‌های بیشتر.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button className="btn btn-link text-right w-100 text-decoration-none collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseFour">
                        <i className="uil uil-eye text-warning me-2"></i>
                        پاسخ‌های فردی
                      </button>
                    </h5>
                  </div>
                  <div id="collapseFour" className="collapse" data-bs-parent="#analyticsAccordion">
                    <div className="card-body">
                      مشاهده جزئیات پاسخ هر شرکت‌کننده (در نظرسنجی‌های غیرناشناس) برای تحلیل دقیق‌تر.
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
              <h3 className="display-4 mb-5 text-white">آماده شروع نظرسنجی هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین حالا نظرسنجی‌های خود را ایجاد کنید و نظرات ارزشمند جمع‌آوری کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/surveys" className="btn btn-lg btn-white rounded-pill">
                  شروع نظرسنجی
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
