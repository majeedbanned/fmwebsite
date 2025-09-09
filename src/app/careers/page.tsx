// import type { Metadata } from "next";
'use client'

import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

// export const metadata: Metadata = {
//   title: "فرصت‌های شغلی پارس آموز - استخدام در بهترین تیم نرم‌افزاری آموزشی",
//   description: "به تیم پارس آموز بپیوندید! فرصت‌های شغلی متنوع در حوزه توسعه نرم‌افزار، طراحی، مدیریت محصول، پشتیبانی و بازاریابی. محیط کاری دوستانه و امکانات رفاهی عالی.",
//   keywords: [
//     "استخدام پارس آموز",
//     "فرصت شغلی نرم افزار آموزشی",
//     "کار در پارس آموز",
//     "استخدام برنامه نویس",
//     "استخدام طراح UI/UX",
//     "شغل در حوزه آموزش",
//     "کاریابی فناوری اطلاعات"
//   ],
//   openGraph: {
//     title: "فرصت‌های شغلی پارس آموز - استخدام در بهترین تیم نرم‌افزاری آموزشی",
//     description: "به تیم پارس آموز بپیوندید! فرصت‌های شغلی متنوع در محیط کاری دوستانه",
//     url: "https://parsamooz.com/careers",
//   }
// };

export default function Careers() {
  const jobOpenings = [
    {
      title: "توسعه‌دهنده Senior React",
      department: "فناوری",
      type: "تمام وقت",
      location: "تهران / دورکاری",
      description: "جستجوی یک توسعه‌دهنده با تجربه React برای توسعه رابط کاربری پلتفرم آموزشی ما",
      requirements: [
        "حداقل ۳ سال تجربه با React و TypeScript",
        "تجربه کار با Next.js",
        "آشنایی با State Management (Redux/Zustand)",
        "تجربه کار با REST API و GraphQL"
      ]
    },
    {
      title: "طراح UX/UI",
      department: "طراحی",
      type: "تمام وقت", 
      location: "تهران",
      description: "طراح خلاق برای بهبود تجربه کاربری و طراحی رابط‌های کاربری جذاب و کاربردی",
      requirements: [
        "حداقل ۲ سال تجربه در طراحی UX/UI",
        "مسلط به Figma و Adobe Creative Suite",
        "آشنایی با اصول Design System",
        "تجربه طراحی برای پلتفرم‌های آموزشی مزیت است"
      ]
    },
    {
      title: "مهندس DevOps",
      department: "فناوری",
      type: "تمام وقت",
      location: "تهران / دورکاری",
      description: "مهندس DevOps برای مدیریت زیرساخت ابری و بهبود فرآیندهای CI/CD",
      requirements: [
        "تجربه کار با AWS یا Azure",
        "مسلط به Docker و Kubernetes",
        "آشنایی با Jenkins یا GitHub Actions",
        "تجربه کار با Terraform مزیت است"
      ]
    },
    {
      title: "کارشناس پشتیبانی فنی",
      department: "پشتیبانی",
      type: "تمام وقت",
      location: "تهران",
      description: "کارشناس پشتیبانی برای ارائه خدمات تخصصی به مشتریان و حل مشکلات فنی",
      requirements: [
        "مدرک کارشناسی در رشته‌های مرتبط",
        "توانایی برقراری ارتباط مؤثر",
        "آشنایی با مفاهیم فنی نرم‌افزار",
        "تجربه کار با سیستم‌های آموزشی مزیت است"
      ]
    },
    {
      title: "کارشناس بازاریابی دیجیتال",
      department: "بازاریابی",
      type: "تمام وقت",
      location: "تهران",
      description: "کارشناس بازاریابی برای توسعه استراتژی‌های دیجیتال و افزایش آگاهی از برند",
      requirements: [
        "تجربه در بازاریابی دیجیتال و SEO",
        "آشنایی با Google Analytics و ابزارهای مشابه",
        "مهارت در تولید محتوا",
        "آشنایی با بازار آموزش مزیت است"
      ]
    },
    {
      title: "مدیر محصول",
      department: "مدیریت محصول",
      type: "تمام وقت",
      location: "تهران",
      description: "مدیر محصول برای هدایت توسعه ویژگی‌های جدید و بهبود محصولات موجود",
      requirements: [
        "حداقل ۳ سال تجربه در مدیریت محصول",
        "آشنایی با Agile و Scrum",
        "مهارت تحلیل داده و تصمیم‌گیری",
        "تجربه در حوزه EdTech مزیت است"
      ]
    }
  ];

  const benefits = [
    {
      icon: "uil-money-stack",
      title: "حقوق رقابتی",
      description: "حقوق و مزایای مناسب متناسب با تجربه و مهارت"
    },
    {
      icon: "uil-clock",
      title: "ساعت کار منعطف",
      description: "امکان کار در ساعات منعطف و تعادل کار-زندگی"
    },
    {
      icon: "uil-laptop",
      title: "دورکاری",
      description: "امکان کار از راه دور برای برخی پست‌ها"
    },
    {
      icon: "uil-graduation-cap",
      title: "آموزش و توسعه",
      description: "فرصت‌های آموزشی و شرکت در کنفرانس‌ها"
    },
    {
      icon: "uil-medkit",
      title: "بیمه تکمیلی",
      description: "بیمه درمان تکمیلی برای کارمند و خانواده"
    },
    {
      icon: "uil-coffee",
      title: "محیط دوستانه",
      description: "محیط کار دوستانه و همکاران حرفه‌ای"
    }
  ];

  return (
    <Fragment>
      {/* Font Styles */}
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
        
        .rtl-content {
          font-family: 'IRANYekanX', 'Arial', sans-serif;
          direction: rtl;
          text-align: right;
        }
        
        .rtl-content .text-center {
          text-align: center !important;
        }
      `}</style>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          logoAlt="logo-purple"
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
        />
      </header>

      <main className="content-wrapper rtl-content">
        {/* ========== hero section ========== */}
        <section className="wrapper bg-gradient-reverse-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>فرصت‌های شغلی</h1>
                <p className="lead fs-lg mb-6 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  به تیم پیشرو پارس آموز بپیوندید و در ساخت آینده آموزش نقش داشته باشید
                </p>
                <a href="#jobs" className="btn btn-white btn-lg rounded-pill">
                  مشاهده موقعیت‌های شغلی
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========== why join us ========== */}
        <section className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3">چرا پارس آموز؟</h2>
                <p className="lead fs-lg">
                  دلایل خوبی وجود دارد که پارس آموز را به عنوان محل کار خود انتخاب کنید
                </p>
              </div>
            </div>

            <div className="row gy-6">
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-rocket"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">رشد سریع</h4>
                    <p className="mb-0">
                      در یک شرکت در حال رشد کار کنید و شاهد تأثیر مستقیم کار خود باشید
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-lightbulb-alt"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">نوآوری</h4>
                    <p className="mb-0">
                      در پروژه‌های نوآورانه مشارکت کنید و از جدیدترین فناوری‌ها استفاده کنید
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-users-alt"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">تیم قوی</h4>
                    <p className="mb-0">
                      با متخصصان برجسته همکاری کنید و از تجربیات آنها بیاموزید
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-graduation-cap"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">تأثیر اجتماعی</h4>
                    <p className="mb-0">
                      در بهبود کیفیت آموزش و تأثیرگذاری بر آینده نسل جوان نقش داشته باشید
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-chart-growth"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">رشد حرفه‌ای</h4>
                    <p className="mb-0">
                      فرصت‌های آموزشی و پیشرفت شغلی در محیطی پویا و چالش‌برانگیز
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-balance-scale"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">تعادل کار و زندگی</h4>
                    <p className="mb-0">
                      محیط کاری که به تعادل میان کار و زندگی شخصی اهمیت می‌دهد
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== benefits section ========== */}
        <section className="wrapper bg-gradient-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مزایا و امکانات</h2>
                <p className="lead fs-lg text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  ما معتقدیم که کارمندان خوشحال، محصولات بهتری می‌سازند
                </p>
              </div>
            </div>

            <div className="row gy-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="col-lg-4">
                  <div className="card bg-white border-0 shadow-lg h-100">
                    <div className="card-body text-center p-6">
                      <div className={`icon btn btn-circle btn-lg btn-soft-primary mx-auto mb-4`}>
                        <i className={`uil ${benefit.icon}`}></i>
                      </div>
                      <h4 className="mb-2">{benefit.title}</h4>
                      <p className="mb-0">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== job openings ========== */}
        <section id="jobs" className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3">موقعیت‌های شغلی باز</h2>
                <p className="lead fs-lg">
                  فرصت‌های شغلی فعلی ما - شاید یکی از آنها برای شما مناسب باشد
                </p>
              </div>
            </div>

            <div className="row gy-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="col-lg-12">
                  <div className="card border-0 shadow-lg">
                    <div className="card-body p-6">
                      <div className="row align-items-center">
                        <div className="col-lg-8">
                          <h4 className="mb-1">{job.title}</h4>
                          <div className="meta mb-3">
                            <span className="badge bg-soft-primary text-primary me-2">{job.department}</span>
                            <span className="badge bg-soft-green text-green me-2">{job.type}</span>
                            <span className="badge bg-soft-yellow text-yellow">{job.location}</span>
                          </div>
                          <p className="mb-3">{job.description}</p>
                          <div className="mb-0">
                            <h6 className="mb-2">الزامات:</h6>
                            <ul className="list-unstyled mb-0">
                              {job.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="mb-1">
                                  <i className="uil uil-check text-primary me-2"></i>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                          <a href="/contact" className="btn btn-primary rounded-pill">
                            ارسال رزومه
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== application process ========== */}
        <section className="wrapper bg-gradient-reverse-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>فرآیند استخدام</h2>
                <p className="lead fs-lg text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  مراحل ساده و شفاف برای پیوستن به تیم ما
                </p>
              </div>
            </div>

            <div className="row gy-6 text-center">
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-white text-primary mx-auto mb-4">
                  <span className="fs-20 fw-bold">۱</span>
                </div>
                <h4 className="text-gray-600 mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>ارسال رزومه</h4>
                <p className="text-gray-600 opacity-80" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>رزومه و نامه انگیزه خود را ارسال کنید</p>
              </div>
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-white text-primary mx-auto mb-4">
                  <span className="fs-20 fw-bold">۲</span>
                </div>
                <h4 className="text-gray-600 mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>بررسی اولیه</h4>
                <p className="text-gray-600 opacity-80" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>بررسی رزومه توسط تیم منابع انسانی</p>
              </div>
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-white text-primary mx-auto mb-4">
                  <span className="fs-20 fw-bold">۳</span>
                </div>
                <h4 className="text-gray-600 mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مصاحبه فنی</h4>
                <p className="text-gray-600 opacity-80" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مصاحبه تخصصی با تیم فنی</p>
              </div>
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-white text-primary mx-auto mb-4">
                  <span className="fs-20 fw-bold">۴</span>
                </div>
                <h4 className="text-gray-600 mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>شروع همکاری</h4>
                <p className="text-gray-600 opacity-80" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>خوشامدگویی و شروع کار</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== call to action ========== */}
        <section className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3">آماده پیوستن به تیم ما هستید؟</h2>
                <p className="lead fs-lg mb-6">
                  اگر موقعیت مناسب خود را پیدا نکردید، نگران نباشید! ما همیشه به دنبال استعدادهای جدید هستیم.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="/contact" className="btn btn-primary btn-lg rounded-pill">
                    ارسال رزومه
                  </a>
                  <a href="/our-team" className="btn btn-outline-primary btn-lg rounded-pill">
                    آشنایی با تیم
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
