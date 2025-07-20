"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Tooltip from "components/Tooltip";
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero36 } from "components/blocks/hero";
import { Facts21 } from "components/blocks/facts";
import { Footer8 } from "components/blocks/footer";
import CountUp from "components/reuseable/CountUp";
import NextLink from "components/reuseable/links/NextLink";
import Projects from "./projects";

// Define custom font style
const yekanFont = {
  fontFamily: "'IRANYekanX', 'Arial', sans-serif",
  direction: 'rtl' as const,
  textAlign: 'right' as const
};

export default function Demo36() {
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
          src: url('/fonts/yekan/IRANYekanX-Light.woff2') format('woff2'),
               url('/fonts/yekan/IRANYekanX-Light.woff') format('woff');
          font-weight: 300;
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
        
        .rtl-content .text-right {
          text-align: left !important;
        }
      `}</style>

      {/* ========== topbar alert section ========== */}
      <div className="alert bg-primary text-white fade show rounded-0 mb-1 text-center rtl-content" role="alert">
        <div className="container">
          <div className="alert-inner d-flex justify-content-center align-items-center p-0">
            <p className="mb-0">
              نرم‌افزار مدرسه آنلاین پارسا معوذ آماده است!{" "}
              <a
                href="#"
                className="link-white hover d-inline-flex align-items-center"
                target="_blank">
                همین حالا شروع کنید <i className="uil uil-arrow-up-left" />
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          logoAlt="logo-purple"
          button={
            <a
              href="#contact"
              className="btn btn-primary rounded-pill rtl-content">
              تماس با ما
            </a>
          }
        />
      </header>

      <main className="content-wrapper rtl-content">
        {/* ========== hero section ========== */}
        <Hero36 />

        {/* ========== features section ========== */}
        <section className="wrapper bg-light" id="features">
          <div className="container py-14 py-md-18 pb-md-19">
            <div className="row mb-10">
              <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5 mx-auto">
                <div className="counter-wrapper">
                  <h3 className="fs-70 mb-3 text-primary text-center counter">
                    <CountUp end={15} />+
                  </h3>
                </div>
                <h2 className="display-3 mb-3 text-center mb-0">امکانات کامل و پیشرفته برای مدیریت مدرسه</h2>
              </div>
            </div>

            {/* USER FOR TOOLTIP FUNCTIONALITY */}
            <Tooltip />

            <div className="demos-wrapper">
              {/* Feature 1 */}
              <div className="demo mb-10">
                <div className="card bg-soft-primary">
                    <div className="card-body px-4 px-md-8 ps-xl-12 py-0 overflow-hidden">
                      <div className="row gx-md-8 gx-xl-12 d-flex align-items-center">
                        <div className="col-lg-7">
                          <div className="row gx-4 gx-md-7">
                            <div className="col-6">
                            <figure className="itooltip itooltip-yellow mt-9" title="سیستم مدیریت دانش‌آموزان">
                              <div>
                                  <img
                                  alt="مدیریت دانش‌آموزان"
                                    className="shadow-lg rounded-top"
                                  src="/img/demos/fe1.jpg"
                                  srcSet="/img/demos/fe1@2x.jpg 2x"
                                  />
                              </div>
                              </figure>
                            </div>

                            <div className="col-6">
                            <figure className="itooltip itooltip-yellow" title="گزارش‌گیری پیشرفته">
                              <div>
                                  <img
                                  alt="گزارشات"
                                    className="shadow-lg rounded-bottom"
                                  src="/img/demos/fe2.jpg"
                                  srcSet="/img/demos/fe2@2x.jpg 2x"
                                />
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-5 d-none d-lg-block py-3">
                        <h2 className="post-title fs-30 mb-4">سیستم مدیریت دانش‌آموزان</h2>
                        <ul className="icon-list bullet-primary row ms-0 gy-2">
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>ثبت‌نام آنلاین</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>مدیریت اطلاعات</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>پیگیری تحصیلی</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>گزارش پیشرفت</span>
                          </li>
                        </ul>

                        <a
                          href="#demo"
                          className="btn btn-sm btn-primary rounded-pill mt-1">
                          مشاهده دمو
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="demo mb-10">
                <div className="card bg-soft-yellow">
                  <div className="card-body px-4 px-md-8 ps-xl-12 py-0 overflow-hidden">
                    <div className="row gx-md-8 gx-xl-12 d-flex align-items-center">
                      <div className="col-lg-7">
                        <div className="row gx-4 gx-md-7">
                          <div className="col-6">
                            <figure className="itooltip itooltip-yellow mt-9" title="کلاس‌های مجازی">
                              <div>
                                <img
                                  alt="کلاس مجازی"
                                  className="shadow-lg rounded-top"
                                  src="/img/demos/fe3.jpg"
                                  srcSet="/img/demos/fe3@2x.jpg 2x"
                                />
                              </div>
                            </figure>
                          </div>

                          <div className="col-6">
                            <figure className="itooltip itooltip-yellow" title="آزمون آنلاین">
                              <div>
                                <img
                                  alt="آزمون آنلاین"
                                  className="shadow-lg rounded-bottom"
                                  src="/img/demos/fe4.jpg"
                                  srcSet="/img/demos/fe4@2x.jpg 2x"
                                  />
                              </div>
                              </figure>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-5 d-none d-lg-block py-3">
                        <h2 className="post-title fs-30 mb-4">کلاس‌های مجازی و آزمون</h2>
                        <ul className="icon-list bullet-yellow row ms-0 gy-2">
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>کلاس زنده</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>ضبط جلسات</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>آزمون‌سازی</span>
                          </li>
                          <li className="col-md-6">
                                <i className="uil uil-check" />
                            <span>تصحیح خودکار</span>
                              </li>
                          </ul>

                          <a
                          href="#demo"
                          className="btn btn-sm btn-yellow rounded-pill mt-1">
                          مشاهده دمو
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="demo mb-10">
                <div className="card bg-soft-green">
                  <div className="card-body px-4 px-md-8 ps-xl-12 py-0 overflow-hidden">
                    <div className="row gx-md-8 gx-xl-12 d-flex align-items-center">
                      <div className="col-lg-7">
                        <div className="row gx-4 gx-md-7">
                          <div className="col-6">
                            <figure className="itooltip itooltip-yellow mt-9" title="مدیریت مالی">
                              <div>
                                <img
                                  alt="مدیریت مالی"
                                  className="shadow-lg rounded-top"
                                  src="/img/demos/fe5.jpg"
                                  srcSet="/img/demos/fe5@2x.jpg 2x"
                                />
                              </div>
                            </figure>
                          </div>

                          <div className="col-6">
                            <figure className="itooltip itooltip-yellow" title="ارتباط با والدین">
                              <div>
                                <img
                                  alt="ارتباط والدین"
                                  className="shadow-lg rounded-bottom"
                                  src="/img/demos/fe6.jpg"
                                  srcSet="/img/demos/fe6@2x.jpg 2x"
                                />
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-5 d-none d-lg-block py-3">
                        <h2 className="post-title fs-30 mb-4">مدیریت مالی و ارتباطات</h2>
                        <ul className="icon-list bullet-green row ms-0 gy-2">
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>حسابداری</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>شهریه‌ها</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>پیامک والدین</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>گزارش مالی</span>
                          </li>
                        </ul>

                        <a
                          href="#demo"
                          className="btn btn-sm btn-green rounded-pill mt-1">
                          مشاهده دمو
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <NextLink title="مشاهده همه امکانات" href="#all-features" className="btn btn-primary rounded-pill" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="divider text-soft-primary mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path
                  fill="currentColor"
                  d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ========== facts section ========== */}
        <Facts21 />

        {/* ========== detailed features section ========== */}
        <section className="wrapper bg-light" id="all-features">
          <div className="container pb-11 pb-md-14">
            <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center mb-14 mb-md-16">
              <div className="col-lg-6 position-relative">
                <div
                  className="shape rounded bg-soft-primary rellax d-block"
                  style={{
                    zIndex: 0,
                    top: "50%",
                    left: "50%",
                    width: "50%",
                    height: "60%",
                    transform: "translate(-50%,-50%)"
                  }}
                />

                <div className="row gx-md-5 gy-5 position-relative">
                  <div className="col-6">
                    <img
                      alt="مدیریت آموزش"
                      src="/img/demos/fe1.jpg"
                      srcSet="/img/demos/fe1@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg mb-5"
                    />
                    <img
                      alt="سیستم نمرات"
                      src="/img/demos/fe2.jpg"
                      srcSet="/img/demos/fe2@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    />
                  </div>

                  <div className="col-6">
                    <img
                      alt="حضور و غیاب"
                      src="/img/demos/fe3.jpg"
                      srcSet="/img/demos/fe3@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg my-5"
                    />
                    <img
                      alt="برنامه کلاسی"
                      src="/img/demos/fe4.jpg"
                      srcSet="/img/demos/fe4@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-10"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-5 col-xxl-4 offset-xl-1">
                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-graduation-cap" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">مدیریت کامل آموزش</h4>
                    <p className="mb-0">
                      سیستم جامع برای مدیریت دروس، اساتید، دانش‌آموزان و برنامه‌های درسی
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-chart-line" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">تحلیل و گزارش‌گیری</h4>
                    <p className="mb-0">
                      گزارشات تفصیلی از عملکرد دانش‌آموزان، اساتید و عملکرد کلی مدرسه
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-mobile-android" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">اپلیکیشن موبایل</h4>
                    <p className="mb-0">
                      دسترسی کامل از طریق اپلیکیشن موبایل برای والدین، دانش‌آموزان و اساتید
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center mb-16 mb-md-22">
              <div className="col-lg-6 offset-xl-1 position-relative order-lg-2">
                <div
                  className="shape rounded bg-soft-primary rellax d-block"
                  style={{
                    zIndex: 0,
                    top: "50%",
                    left: "50%",
                    width: "50%",
                    height: "60%",
                    transform: "translate(-50%,-50%)"
                  }}
                />

                <div className="row gx-md-5 gy-5 position-relative">
                  <div className="col-5">
                    <img
                      alt="امنیت داده"
                      src="/img/demos/fe5.jpg"
                      srcSet="/img/demos/fe5@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
                    />
                    <img
                      alt="پشتیبانی"
                      src="/img/demos/fe6.jpg"
                      srcSet="/img/demos/fe6@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    />
                  </div>

                  <div className="col-7">
                    <img
                      alt="یکپارچه‌سازی"
                      src="/img/demos/fe7.jpg"
                      srcSet="/img/demos/fe7@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg mb-5"
                    />
                    <img
                      alt="تحلیل داده"
                      src="/img/demos/fe8.jpg"
                      srcSet="/img/demos/fe8@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-11"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-5 col-xxl-4 offset-xxl-1">
                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-shield-check" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">امنیت و حریم خصوصی</h4>
                    <p className="mb-0">
                      حفاظت کامل از اطلاعات با بالاترین استانداردهای امنیتی
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-cloud-database-tree" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">پشتیبان‌گیری ابری</h4>
                    <p className="mb-0">
                      ذخیره‌سازی امن اطلاعات در فضای ابری با دسترسی ۲۴/۷
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-headphones-alt" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">پشتیبانی ۲۴/۷</h4>
                    <p className="mb-0">
                      تیم پشتیبانی فنی حرفه‌ای آماده کمک به شما در تمام ساعات روز
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="divider text-soft-primary mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path
                  fill="currentColor"
                  d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ========== technology section ========== */}
        <section className="wrapper bg-gradient-primary">
          <div className="container pb-14 pb-md-16">
            <div className="row gx-0 mb-14 mb-md-16">
              <div className="col-9 col-sm-10 col-lg-9 mx-auto mt-n15 mt-md-n23">
                <img
                  alt="تکنولوژی پیشرفته"
                  src="/img/demos/de1.jpg"
                  srcSet="/img/demos/de1@2x.jpg 2x"
                  className="img-fluid mx-auto rounded shadow-lg"
                />
                <img
                  alt="ابری"
                  src="/img/demos/de2.jpg"
                  srcSet="/img/demos/de2@2x.jpg 2x"
                  className="position-absolute rounded shadow-lg"
                  style={{ top: "25%", right: "-12%", maxWidth: "30%", height: "auto" }}
                />
                <img
                  alt="موبایل"
                  src="/img/demos/de3.jpg"
                  srcSet="/img/demos/de3@2x.jpg 2x"
                  className="position-absolute rounded shadow-lg"
                  style={{ top: "15%", left: "-15%", maxWidth: "30%", height: "auto" }}
                />
                <img
                  alt="تبلت"
                  src="/img/demos/de4.jpg"
                  srcSet="/img/demos/de4@2x.jpg 2x"
                  className="position-absolute rounded shadow-lg"
                  style={{ bottom: "15%", left: "-13%", maxWidth: "30%", height: "auto" }}
                />
              </div>
            </div>

            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 gx-md-8 gy-10 text-center justify-content-center">
              <div className="col">
                <img className="mb-4" src="/img/svg/next.js-circle.svg" alt="" />
                <h4>
                  ساخته شده با <br /> Next.js و React
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi1.png" srcSet="/img/demos/fi1@2x.png 2x" alt="" />
                <h4>
                  طراحی <br /> ریسپانسیو
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/svg/typescript.svg" alt="" />
                <h4>
                  کد تمیز <br /> و سازمان‌یافته
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi11.png" srcSet="/img/demos/fi11@2x.png 2x" alt="" />
                <h4>
                  رندر سمت <br /> سرور
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi2.png" srcSet="/img/demos/fi2@2x.png 2x" alt="" />
                <h4>
                  بهینه‌سازی <br /> برای SEO
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi4.png" srcSet="/img/demos/fi4@2x.png 2x" alt="" />
                <h4>
                  گرافیک <br /> با کیفیت
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi5.png" srcSet="/img/demos/fi5@2x.png 2x" alt="" />
                <h4>
                  طراحی <br /> یکپارچه
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi6.png" srcSet="/img/demos/fi6@2x.png 2x" alt="" />
                <h4>
                  گالری <br /> تصاویر
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi8.png" srcSet="/img/demos/fi8@2x.png 2x" alt="" />
                <h4>
                  فرم تماس <br /> هوشمند
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi10.png" srcSet="/img/demos/fi10@2x.png 2x" alt="" />
                <h4>
                  پشتیبانی حرفه‌ای <br /> و به‌روزرسانی رایگان
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* ========== inner page section ========== */}
        <section className="wrapper bg-gradient-reverse-primary">
          <div className="container pb-10 pb-md-13">
            <div className="row mb-8 text-center">
              <div className="col-lg-8 col-xl-7 mx-auto">
                <h2 className="fs-15 ls-xl text-uppercase text-muted">صفحات نمونه</h2>
                <h2 className="display-3 mt-3 mb-3 mb-0">
                  صفحات طراحی شده با دقت برای انتخاب شما
                </h2>
              </div>
            </div>

            <Projects />

            <div className="mb-15" />
          </div>

          <div className="overflow-hidden">
            <div className="divider text-light mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path
                  fill="currentColor"
                  d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ========== responsive section ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-lg-20 pb-18 pb-xxl-20 position-relative">
            <img
              alt="دستگاه‌های مختلف"
              data-cue="fadeIn"
              src="/img/demos/devices.png"
              srcSet="/img/demos/devices@2x.png 2x"
              className="position-lg-absolute col-12 col-lg-12 mt-xxl-n3 mb-3 mb-md-10 mb-lg-0"
              style={{ top: 0, left: "-23%" }}
            />

            <div className="row gx-lg-8 gx-xl-12 mt-lg-n16 mt-xl-n12 mt-xxl-0 align-items-xxl-center">
              <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-6 text-center text-lg-start">
                <div className="ps-xl-1 ps-xxl-5 pe-xxl-10">
                  <h2 className="fs-15 ls-xl text-uppercase text-muted mb-3">کاملاً ریسپانسیو</h2>
                  <h3 className="display-3 mb-5">تصاویر و متون ریسپانسیو در تمام اندازه‌های صفحه</h3>
                  <p className="lead mb-8">
                    نرم‌افزار مدرسه آنلاین پارسا معوذ ریسپانسیو است و طرح‌بندی آن با اندازه‌های مختلف صفحه سازگار است که باعث می‌شود وب‌سایت شما با هر دستگاهی مانند گوشی‌های هوشمند، تبلت و کامپیوتر سازگار باشد.
                  </p>

                  <img
                    src="/img/demos/qrcode.jpg"
                    srcSet="/img/demos/qrcode@2x.jpg 2x"
                    className="shadow-lg rounded"
                    alt="QR کد"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== call to action section ========== */}
        <section className="wrapper bg-gradient-reverse-primary" id="contact">
          <div className="container pt-xl-10 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                <img src="/img/demos/icon.png" srcSet="/img/demos/icon@2x.png 2x" alt="آیکون" />
                <h2 className="display-3 mt-3 mb-3 px-lg-8">
                  فکر کنید منحصر به فرد و خلاق باشید. با نرم‌افزار مدرسه آنلاین پارسا معوذ تفاوت ایجاد کنید.
                </h2>

                <p className="lead fs-lg mb-6">
                  همه چیزهایی که برای ایجاد وب‌سایت منحصر به فرد و حرفه‌ای بعدی خود نیاز دارید، شامل بلوک‌ها و صفحات چشمگیر و آماده.
                </p>
                <a
                  href="tel:+989120000000"
                  className="btn btn-lg btn-primary rounded-pill mb-10">
                  تماس با ما
                </a>
              </div>
            </div>

            <img className="img-fluid" src="/img/demos/f1.png" srcSet="/img/demos/f1@2x.png 2x" alt="تصویر نهایی" />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
