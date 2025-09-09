// import type { Metadata } from "next";
'use client'
import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

// export const metadata: Metadata = {
//   title: "درباره پارس آموز - پیشرو در سیستم‌های مدیریت آموزشی",
//   description: "آشنایی با پارس آموز، پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران. تاریخچه، مأموریت، چشم‌انداز و ارزش‌های ما در توسعه نرم‌افزارهای آموزشی.",
//   keywords: [
//     "درباره پارس آموز",
//     "تاریخچه پارس آموز",
//     "مأموریت پارس آموز",
//     "چشم انداز پارس آموز",
//     "شرکت نرم افزاری آموزشی",
//     "سیستم مدیریت مدرسه"
//   ],
//   openGraph: {
//     title: "درباره پارس آموز - پیشرو در سیستم‌های مدیریت آموزشی",
//     description: "آشنایی با پارس آموز، پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران",
//     url: "https://parsamooz.com/about-us",
//   }
// };

export default function AboutUs() {
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
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>درباره پارس آموز</h1>
                <p className="lead fs-lg mb-0 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  پیشرو در توسعه سیستم‌های مدیریت آموزشی و نوآوری در حوزه فناوری اطلاعات آموزشی
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== about content ========== */}
        <section className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="row gx-md-5 gy-5">
                  <div className="col-6">
                    <img 
                      src="/img/photos/about1.jpg" 
                      className="img-fluid rounded shadow-lg mb-5" 
                      alt="تیم پارس آموز در حال کار"
                      loading="lazy"
                    />
                    <img 
                      src="/img/photos/about2.jpg" 
                      className="img-fluid rounded shadow-lg d-flex col-10 ms-auto" 
                      alt="محیط کار پارس آموز"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-6">
                    <img 
                      src="/img/photos/about3.jpg" 
                      className="img-fluid rounded shadow-lg my-5" 
                      alt="جلسه تیم پارس آموز"
                      loading="lazy"
                    />
                    <img 
                      src="/img/photos/about4.jpg" 
                      className="img-fluid rounded shadow-lg d-flex col-10" 
                      alt="توسعه نرم افزار در پارس آموز"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <h2 className="display-4 mb-3">مأموریت ما</h2>
                <p className="lead fs-lg">
                  ما در پارس آموز بر این باوریم که آموزش پایه و اساس توسعه هر جامعه‌ای است.
                </p>
                <p className="mb-6">
                  با بیش از ۵ سال تجربه در حوزه توسعه نرم‌افزارهای آموزشی، پارس آموز به عنوان پیشرو در ارائه راه‌حل‌های 
                  جامع مدیریت مدرسه، تلاش می‌کند تا با بهره‌گیری از جدیدترین فناوری‌ها، فرآیند یاددهی و یادگیری را 
                  بهبود بخشد.
                </p>
                
                <div className="row gy-3 gx-xl-8">
                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                      <li><i className="uil uil-check"></i>نوآوری مستمر</li>
                      <li><i className="uil uil-check"></i>کیفیت بالا</li>
                      <li><i className="uil uil-check"></i>پشتیبانی ۲۴/۷</li>
                    </ul>
                  </div>
                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                      <li><i className="uil uil-check"></i>امنیت اطلاعات</li>
                      <li><i className="uil uil-check"></i>سهولت استفاده</li>
                      <li><i className="uil uil-check"></i>قیمت مناسب</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== vision section ========== */}
        <section className="wrapper bg-gradient-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row text-center">
              <div className="col-lg-8 mx-auto">
                <h2 className="display-4 mb-4  text-gray-600">چشم‌انداز ما</h2>
                <p className="lead fs-lg  opacity-90 mb-8 text-gray-600">
                  تبدیل شدن به پیشرو و مرجع اصلی سیستم‌های مدیریت آموزشی در خاورمیانه و ارائه راه‌حل‌های 
                  هوشمند و نوآورانه برای بهبود کیفیت آموزش
                </p>
              </div>
            </div>

            <div className="row gy-6 text-center">
              <div className="col-md-4">
                <div className="icon btn btn-circle btn-lg btn-white text-primary mx-auto mb-4">
                  <i className="uil uil-rocket"></i>
                </div>
                <h4 className=" mb-2 text-gray-600">نوآوری</h4>
                <p className=" opacity-80 text-gray-600">استفاده از جدیدترین فناوری‌ها برای ایجاد راه‌حل‌های نوآورانه</p>
              </div>
              <div className="col-md-4">
                <div className="icon btn btn-circle btn-lg btn-white text-primary mx-auto mb-4">
                  <i className="uil uil-users-alt"></i>
                </div>
                <h4 className=" mb-2 text-gray-600">مشارکت</h4>
                <p className=" opacity-80 text-gray-600">همکاری نزدیک با مدارس و مراکز آموزشی برای بهبود مستمر</p>
              </div>
              <div className="col-md-4">
                <div className="icon btn btn-circle btn-lg btn-white text-primary mx-auto mb-4">
                  <i className="uil uil-award"></i>
                </div>
                <h4 className=" mb-2 text-gray-600">تعالی</h4>
                <p className=" opacity-80 text-gray-600">تلاش مستمر برای ارائه بهترین کیفیت و خدمات</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== values section ========== */}
        <section className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3">ارزش‌های ما</h2>
                <p className="lead fs-lg">
                  اصول و ارزش‌هایی که ما را در مسیر رسیدن به اهدافمان راهنمایی می‌کنند
                </p>
              </div>
            </div>

            <div className="row gy-6">
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-shield-check"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">اعتماد و شفافیت</h4>
                    <p className="mb-0">
                      ما بر پایه اعتماد متقابل با مشتریان خود کار می‌کنیم و در تمام فرآیندها شفافیت کامل داریم.
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
                    <h4 className="mb-1">یادگیری مستمر</h4>
                    <p className="mb-0">
                      ما همواره در حال یادگیری و به‌روزرسانی دانش خود هستیم تا بتوانیم بهترین خدمات را ارائه دهیم.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-heart"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">تعهد به کیفیت</h4>
                    <p className="mb-0">
                      کیفیت محصولات و خدمات ما اولویت اصلی است و هرگز در این زمینه مصالحه نمی‌کنیم.
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
                    <h4 className="mb-1">خلاقیت و نوآوری</h4>
                    <p className="mb-0">
                      ما به دنبال راه‌حل‌های خلاقانه و نوآورانه هستیم که بتوانند نیازهای واقعی مشتریان را برآورده کنند.
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
                    <h4 className="mb-1">کار تیمی</h4>
                    <p className="mb-0">
                      ما بر قدرت کار تیمی باور داریم و معتقدیم که موفقیت حاصل همکاری و تلاش جمعی است.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-globe"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">مسئولیت اجتماعی</h4>
                    <p className="mb-0">
                      ما خود را متعهد به بهبود جامعه و کمک به پیشرفت نظام آموزشی کشور می‌دانیم.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== stats section ========== */}
        <section className="wrapper bg-gradient-reverse-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>آمار و ارقام</h2>
                <p className="lead fs-lg text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  نگاهی به دستاوردها و پیشرفت‌های ما در طول سال‌های فعالیت
                </p>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-md-3">
                <h3 className="counter text-gray-600 fs-40 mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>500+</h3>
                <p className="text-gray-600 opacity-90 mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مدرسه فعال</p>
              </div>
              <div className="col-md-3">
                <h3 className="counter text-gray-600 fs-40 mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>50000+</h3>
                <p className="text-gray-600 opacity-90 mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>دانش‌آموز</p>
              </div>
              <div className="col-md-3">
                <h3 className="counter text-gray-600 fs-40 mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>5000+</h3>
                <p className="text-gray-600 opacity-90 mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>معلم</p>
              </div>
              <div className="col-md-3">
                <h3 className="counter text-gray-600 fs-40 mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>99%</h3>
                <p className="text-gray-600 opacity-90 mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>رضایت کاربران</p>
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
