"use client";

import { Fragment, useState } from "react";
import type { Metadata } from "next";
// GLOBAL CUSTOM COMPONENTS
import Tooltip from "components/Tooltip";
import Navbar from "components/blocks/navbar/navbar-1";
import Hero36 from "components/blocks/hero/Hero36";
import { Facts21 } from "components/blocks/facts";
import { Footer8 } from "components/blocks/footer";
import CountUp from "components/reuseable/CountUp";
import NextLink from "components/reuseable/links/NextLink";
import ContactPopup from "components/ContactPopup";
import Projects from "./projects";

export const metadata: Metadata = {
  title: "پارس آموز - سیستم مدیریت مدرسه آنلاین | نرم افزار مدرسه",
  description: "پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران با ۱۴+ سرویس تخصصی: آزمون آنلاین، مدیریت دانش‌آموزان، حسابداری، چت مدرسه و بیشتر. دمو رایگان دریافت کنید.",
  keywords: [
    "سیستم مدیریت مدرسه آنلاین",
    "نرم افزار مدرسه",
    "آزمون آنلاین",
    "پارس آموز",
    "مدیریت دانش آموزان",
    "حسابداری مدرسه",
    "بانک سوالات",
    "کارنامه آنلاین",
    "چت مدرسه",
    "تقویم مدرسه",
    "سیستم نمره دهی",
    "مدیریت معلمان",
    "داشبورد مدرسه"
  ],
  openGraph: {
    title: "پارس آموز - سیستم مدیریت مدرسه آنلاین",
    description: "پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران با ۱۴+ سرویس تخصصی",
    url: "https://parsamooz.com",
    images: [
      {
        url: "/img/demos/vc1@2x.jpg",
        width: 1200,
        height: 630,
        alt: "پارس آموز - نمای کلی سیستم مدیریت مدرسه"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "پارس آموز - سیستم مدیریت مدرسه آنلاین",
    description: "پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران",
    images: ["/img/demos/vc1@2x.jpg"]
  },
  alternates: {
    canonical: "https://parsamooz.com"
  }
};

// Define custom font style
const yekanFont = {
  fontFamily: "'IRANYekanX', 'Arial', sans-serif",
  direction: 'rtl' as const,
  textAlign: 'right' as const
};

export default function Demo36() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState<"contact" | "demo">("contact");

  const openContactPopup = () => {
    setPopupType("contact");
    setIsContactPopupOpen(true);
  };

  const openDemoPopup = () => {
    setPopupType("demo");
    setIsContactPopupOpen(true);
  };

  const closePopup = () => {
    setIsContactPopupOpen(false);
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://parsamooz.com/#organization",
        "name": "پارس آموز",
        "alternateName": "Parsamooz",
        "url": "https://parsamooz.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://parsamooz.com/img/logo-purple@2x.png",
          "width": 400,
          "height": 100
        },
        "description": "پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران",
        "foundingDate": "2020",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+98-21-22334455",
          "contactType": "customer service",
          "email": "info@parsamooz.com",
          "availableLanguage": ["Persian", "English"]
        },
        "sameAs": [
          "https://instagram.com/parsamooz",
          "https://linkedin.com/company/parsamooz",
          "https://twitter.com/parsamooz"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://parsamooz.com/#website",
        "url": "https://parsamooz.com",
        "name": "پارس آموز",
        "description": "سیستم مدیریت مدرسه آنلاین",
        "publisher": {
          "@id": "https://parsamooz.com/#organization"
        },
        "inLanguage": "fa-IR"
      },
      {
        "@type": "WebPage",
        "@id": "https://parsamooz.com/#webpage",
        "url": "https://parsamooz.com",
        "name": "پارس آموز - سیستم مدیریت مدرسه آنلاین",
        "isPartOf": {
          "@id": "https://parsamooz.com/#website"
        },
        "about": {
          "@id": "https://parsamooz.com/#organization"
        },
        "description": "پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران با ۱۴+ سرویس تخصصی",
        "breadcrumb": {
          "@id": "https://parsamooz.com/#breadcrumb"
        },
        "inLanguage": "fa-IR"
      },
      {
        "@type": "SoftwareApplication",
        "name": "پارس آموز",
        "description": "سیستم جامع مدیریت مدرسه آنلاین با قابلیت‌های پیشرفته",
        "applicationCategory": "EducationApplication",
        "operatingSystem": "Web Browser, iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "IRR",
          "description": "دمو رایگان"
        },
        "featureList": [
          "مدیریت دانش‌آموزان",
          "آزمون آنلاین",
          "بانک سوالات",
          "حسابداری مدرسه",
          "چت مدرسه",
          "تقویم و رویدادها",
          "گزارش‌گیری",
          "داشبورد هوشمند"
        ]
      }
    ]
  };

  return (
    <Fragment>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
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
              نرم‌افزار مدرسه آنلاین پارس آ موز آماده است!{" "}
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
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
          button={
            <div className="d-flex gap-2">
              <a
                href="#services"
                className="btn btn-outline-primary rounded-pill rtl-content">
                خدمات ما
              </a>
              <button
                onClick={openContactPopup}
                className="btn btn-primary rounded-pill rtl-content">
                تماس با ما
              </button>
            </div>
          }
        />
      </header>

      <main className="content-wrapper rtl-content">
        {/* ========== hero section ========== */}
        <Hero36 onDemoClick={openDemoPopup} />

        {/* ========== services navigation menu ========== */}
        <section className="wrapper bg-gradient-primary rtl-content">
          <div className="container py-8">
            <div className="row text-center mb-6">
              <div className="col-lg-10 mx-auto">
                <h2 className="display-6 text-gray-600 mb-3">دسترسی سریع به خدمات</h2>
                <p className="lead text-gray-600 opacity-90">با یک کلیک به تمام سرویس‌های مدرسه آنلاین دسترسی داشته باشید</p>
              </div>
            </div>
            
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="card bg-white border-0 shadow-lg h-100 hover-effect">
                  <article className="card-body text-center p-4">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary mb-3" aria-hidden="true">
                      <i className="uil uil-users-alt"></i>
                    </div>
                    <h3 className="mb-2">سیستم‌های مدیریت</h3>
                    <p className="mb-3 text-muted">مدیریت دانش‌آموزان، معلمان و کلاس‌ها</p>
                    <div className="d-flex gap-1 justify-content-center">
                      <a href="/initiation" className="btn btn-sm btn-primary rounded-pill">پایه</a>
                      <a href="/dashboard" className="btn btn-sm btn-outline-primary rounded-pill">داشبورد</a>
                    </div>
                  </article>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <div className="card bg-white border-0 shadow-lg h-100 hover-effect">
                  <div className="card-body text-center p-4">
                    <div className="icon btn btn-circle btn-lg btn-soft-yellow mb-3">
                      <i className="uil uil-graduation-cap"></i>
                    </div>
                    <h3 className="mb-2">ارزیابی و آزمون</h3>
                    <p className="mb-3 text-muted">آزمون آنلاین، بانک سوالات و نمره‌دهی</p>
                    <div className="d-flex gap-1 justify-content-center flex-wrap">
                      <a href="/onlineexam" className="btn btn-sm btn-yellow rounded-pill">آزمون</a>
                      <a href="/questionbank" className="btn btn-sm btn-outline-yellow rounded-pill">سوالات</a>
                      <a href="/gradingsystem" className="btn btn-sm btn-outline-yellow rounded-pill">نمرات</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <div className="card bg-white border-0 shadow-lg h-100 hover-effect">
                  <div className="card-body text-center p-4">
                    <div className="icon btn btn-circle btn-lg btn-soft-green mb-3">
                      <i className="uil uil-comment-dots"></i>
                    </div>
                    <h3 className="mb-2">ارتباطات</h3>
                    <p className="mb-3 text-muted">پیام‌رسانی، چت و مدیریت رویدادها</p>
                    <div className="d-flex gap-1 justify-content-center flex-wrap">
                      <a href="/communications" className="btn btn-sm btn-green rounded-pill">پیام</a>
                      <a href="/mychat" className="btn btn-sm btn-outline-green rounded-pill">چت</a>
                      <a href="/agenda" className="btn btn-sm btn-outline-green rounded-pill">تقویم</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <div className="card bg-white border-0 shadow-lg h-100 hover-effect">
                  <div className="card-body text-center p-4">
                    <div className="icon btn btn-circle btn-lg btn-soft-purple mb-3">
                      <i className="uil uil-chart-bar"></i>
                    </div>
                    <h3 className="mb-2">گزارشات و ابزارها</h3>
                    <p className="mb-3 text-muted">گزارشات، حسابداری و فایل منیجر</p>
                    <div className="d-flex gap-1 justify-content-center flex-wrap">
                      <a href="/accounting" className="btn btn-sm btn-purple rounded-pill">حسابداری</a>
                      <a href="/classsheet" className="btn btn-sm btn-outline-purple rounded-pill">گزارشات</a>
                      <a href="/fileexplorer" className="btn btn-sm btn-outline-purple rounded-pill">فایل‌ها</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== services section ========== */}
        <section className="wrapper bg-light rtl-content" id="services">
          <div className="container py-14 py-md-18 pb-md-19">
            <div className="row mb-10">
              <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5 mx-auto">
                <div className="row gy-6 text-center">
                  <div className="col-md-3">
                    <div className="counter-wrapper">
                      <h3 className="fs-40 mb-2 text-primary counter">
                        <CountUp end={14} />+
                      </h3>
                      <p className="mb-0">سرویس اختصاصی</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="counter-wrapper">
                      <h3 className="fs-40 mb-2 text-green counter">
                        <CountUp end={100} />+
                      </h3>
                      <p className="mb-0">قابلیت منحصربه‌فرد</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="counter-wrapper">
                      <h3 className="fs-40 mb-2 text-yellow counter">
                        <CountUp end={24} />/<CountUp end={7} />
                      </h3>
                      <p className="mb-0">پشتیبانی</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="counter-wrapper">
                      <h3 className="fs-40 mb-2 text-purple counter">
                        <CountUp end={99} />%
                      </h3>
                      <p className="mb-0">رضایت کاربران</p>
                    </div>
                  </div>
                </div>
                <div className="row mt-10">
                  <div className="col-md-10 mx-auto text-center">
                    <h2 className="display-3 mb-4">پلتفرم کامل مدیریت مدرسه آنلاین</h2>
                    <p className="lead mb-0">
                      از مدیریت دانش‌آموزان تا سیستم‌های پیشرفته ارزیابی، ارتباطات و گزارش‌گیری - همه چیز در یک مکان
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* USER FOR TOOLTIP FUNCTIONALITY */}
            <Tooltip />

            <div className="demos-wrapper">
              {/* Feature 1 - Management Systems */}
              <div className="demo mb-10">
                <div className="card bg-soft-primary">
                    <div className="card-body px-4 px-md-8 ps-xl-12 py-0 overflow-hidden">
                      <div className="row gx-md-8 gx-xl-12 d-flex align-items-center">
                        <div className="col-lg-7">
                          <div className="row gx-4 gx-md-7">
                            <div className="col-6">
                            <figure className="itooltip itooltip-yellow mt-9" title="سیستم‌های مدیریت پایه">
                              <div>
                                  <img
                                  alt="سیستم‌های مدیریت پایه پارس آموز - مدیریت دانش آموزان و معلمان"
                                    className="shadow-lg rounded-top"
                                  src="/img/demos/fe1.jpg"
                                  srcSet="/img/demos/fe1@2x.jpg 2x"
                                  loading="lazy"
                                  width="300"
                                  height="200"
                                  />
                              </div>
                              </figure>
                            </div>

                            <div className="col-6">
                            <figure className="itooltip itooltip-yellow" title="داشبورد هوشمند">
                              <div>
                                  <img
                                  alt="داشبورد شخصی‌سازی شده"
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
                        <h2 className="post-title fs-30 mb-4">سیستم‌های مدیریت و داشبورد</h2>
                        <ul className="icon-list bullet-primary row ms-0 gy-2">
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>مدیریت دانش‌آموزان</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>مدیریت معلمان</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>مدیریت کلاس‌ها</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>داشبورد شخصی‌سازی</span>
                          </li>
                        </ul>

                        <div className="d-flex gap-2">
                          <a
                            href="/initiation"
                            className="btn btn-sm btn-primary rounded-pill mt-1">
                            سیستم‌های پایه
                          </a>
                          <a
                            href="/dashboard"
                            className="btn btn-sm btn-outline-primary rounded-pill mt-1">
                            داشبورد
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Assessment & Evaluation */}
              <div className="demo mb-10">
                <div className="card bg-soft-yellow">
                  <div className="card-body px-4 px-md-8 ps-xl-12 py-0 overflow-hidden">
                    <div className="row gx-md-8 gx-xl-12 d-flex align-items-center">
                      <div className="col-lg-7">
                        <div className="row gx-4 gx-md-7">
                          <div className="col-6">
                            <figure className="itooltip itooltip-yellow mt-9" title="آزمون آنلاین و بانک سوالات">
                              <div>
                                <img
                                  alt="سیستم آزمون آنلاین"
                                  className="shadow-lg rounded-top"
                                  src="/img/demos/fe3.jpg"
                                  srcSet="/img/demos/fe3@2x.jpg 2x"
                                />
                              </div>
                            </figure>
                          </div>

                          <div className="col-6">
                            <figure className="itooltip itooltip-yellow" title="سیستم نمره‌دهی">
                              <div>
                                <img
                                  alt="نمره‌دهی و کارنامه"
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
                        <h2 className="post-title fs-30 mb-4">ارزیابی و آزمون‌سازی</h2>
                        <ul className="icon-list bullet-yellow row ms-0 gy-2">
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>آزمون آنلاین</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>بانک سوالات</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>نمره‌دهی هوشمند</span>
                          </li>
                          <li className="col-md-6">
                                <i className="uil uil-check" />
                            <span>کارنامه ساز</span>
                              </li>
                          </ul>

                          <div className="d-flex gap-2 flex-wrap">
                            <a
                              href="/onlineexam"
                              className="btn btn-sm btn-yellow rounded-pill mt-1">
                              آزمون آنلاین
                            </a>
                            <a
                              href="/questionbank"
                              className="btn btn-sm btn-outline-yellow rounded-pill mt-1">
                              بانک سوالات
                            </a>
                            <a
                              href="/gradingsystem"
                              className="btn btn-sm btn-outline-yellow rounded-pill mt-1">
                              نمره‌دهی
                            </a>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 - Management & Communication */}
              <div className="demo mb-10">
                <div className="card bg-soft-green">
                  <div className="card-body px-4 px-md-8 ps-xl-12 py-0 overflow-hidden">
                    <div className="row gx-md-8 gx-xl-12 d-flex align-items-center">
                      <div className="col-lg-7">
                        <div className="row gx-4 gx-md-7">
                          <div className="col-6">
                            <figure className="itooltip itooltip-yellow mt-9" title="مدیریت مالی و حسابداری">
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
                            <figure className="itooltip itooltip-yellow" title="ارتباطات و تقویم">
                              <div>
                                <img
                                  alt="ارتباطات و مدیریت رویدادها"
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
                        <h2 className="post-title fs-30 mb-4">مدیریت و ارتباطات</h2>
                        <ul className="icon-list bullet-green row ms-0 gy-2">
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>حسابداری مدرسه</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>تقویم و رویدادها</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>ارتباطات</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>مدیریت فایل</span>
                          </li>
                        </ul>

                        <div className="d-flex gap-2 flex-wrap">
                          <a
                            href="/accounting"
                            className="btn btn-sm btn-green rounded-pill mt-1">
                            حسابداری
                          </a>
                          <a
                            href="/agenda"
                            className="btn btn-sm btn-outline-green rounded-pill mt-1">
                            تقویم
                          </a>
                          <a
                            href="/communications"
                            className="btn btn-sm btn-outline-green rounded-pill mt-1">
                            ارتباطات
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Services Section */}
              <div className="demo mb-10">
                <div className="card bg-soft-purple">
                  <div className="card-body px-4 px-md-8 ps-xl-12 py-0 overflow-hidden">
                    <div className="row gx-md-8 gx-xl-12 d-flex align-items-center">
                      <div className="col-lg-7">
                        <div className="row gx-4 gx-md-7">
                          <div className="col-6">
                            <figure className="itooltip itooltip-yellow mt-9" title="گزارشات پیشرفته">
                              <div>
                                <img
                                  alt="گزارشات کلاسی"
                                  className="shadow-lg rounded-top"
                                  src="/img/demos/fe7.jpg"
                                  srcSet="/img/demos/fe7@2x.jpg 2x"
                                />
                              </div>
                            </figure>
                          </div>

                          <div className="col-6">
                            <figure className="itooltip itooltip-yellow" title="گزارشات نمرات">
                              <div>
                                <img
                                  alt="گزارشات نمرات ماهانه"
                                  className="shadow-lg rounded-bottom"
                                  src="/img/demos/fe8.jpg"
                                  srcSet="/img/demos/fe8@2x.jpg 2x"
                                />
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-5 d-none d-lg-block py-3">
                        <h2 className="post-title fs-30 mb-4">گزارشات و فعالیت‌ها</h2>
                        <ul className="icon-list bullet-purple row ms-0 gy-2">
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>گزارش کلاسی</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>نمرات ماهانه</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span>فعالیت‌های معلم</span>
                          </li>
                          <li className="col-md-6">
                            <i className="uil uil-check" />
                            <span className="text-gray-600">چت مدرسه</span>
                          </li>
                        </ul>

                        <div className="d-flex gap-2 flex-wrap">
                          <a
                            href="/classsheet"
                            className="btn btn-sm btn-purple rounded-pill mt-1">
                            گزارش کلاسی
                          </a>
                          <a
                            href="/monthlygrade"
                            className="btn btn-sm btn-outline-purple rounded-pill mt-1">
                            نمرات ماهانه
                          </a>
                          <a
                            href="/tactivities"
                            className="btn btn-sm btn-outline-purple rounded-pill mt-1">
                            فعالیت‌ها
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <NextLink title="مشاهده همه خدمات" href="/services-2" className="btn btn-primary rounded-pill" />
                <NextLink title="فایل اکسپلورر" href="/fileexplorer" className="btn btn-outline-primary rounded-pill" />
                <NextLink title="چت مدرسه" href="/mychat" className="btn btn-outline-primary rounded-pill" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== comprehensive overview section ========== */}
        <section className="wrapper bg-gradient-reverse-primary rtl-content">
          <div className="container py-16 py-md-18">
            <div className="row text-center mb-12">
              <div className="col-lg-8 mx-auto">
                <h2 className="fs-15 text-uppercase text-line text-white mb-3">نظام جامع آموزش</h2>
                <h3 className="display-4 text-gray-600 mb-5 text-gray-600">راه‌حل کامل مدیریت مدرسه دیجیتال</h3>
                <p className="lead text-gray-600 opacity-90">
                  سیستم پارس آ موز با بیش از ۱۴ سرویس تخصصی، تمام نیازهای مدیریتی، آموزشی و اداری مدارس مدرن را پوشش می‌دهد
                </p>
              </div>
            </div>

            <div className="row gy-10 gx-lg-8 gx-xl-12 align-items-center">
              {/* Left Column - Key Benefits */}
              <div className="col-lg-6">
                <div className="row gy-6">
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div>
                        <div className="icon btn btn-circle btn-lg btn-white text-primary me-4">
                          <i className="uil uil-brain"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-gray-600 mb-2">هوش مصنوعی</h4>
                        <p className="text-gray-600 opacity-80 mb-0">تحلیل‌های هوشمند و پیش‌بینی عملکرد دانش‌آموزان</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div>
                        <div className="icon btn btn-circle btn-lg btn-white text-primary me-4">
                          <i className="uil uil-cloud-computing"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-gray-600 mb-2">پلتفرم ابری</h4>
                        <p className="text-gray-600 opacity-80 mb-0">دسترسی از هر مکان و در هر زمان بدون نیاز به نصب</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div>
                        <div className="icon btn btn-circle btn-lg btn-white text-primary me-4">
                          <i className="uil uil-shield-check"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-gray-600 mb-2">امنیت بالا</h4>
                        <p className="text-gray-600 opacity-80 mb-0">رمزنگاری کامل و پشتیبان‌گیری خودکار اطلاعات</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div>
                        <div className="icon btn btn-circle btn-lg btn-white text-primary me-4">
                          <i className="uil uil-mobile-android"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-gray-600 mb-2">اپلیکیشن موبایل</h4>
                        <p className="text-gray-600 opacity-80 mb-0">دسترسی کامل از طریق اپ اختصاصی iOS و Android</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Service Categories */}
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-12">
                    <div className="card bg-white border-0 shadow-lg">
                      <div className="card-body p-5">
                        <div className="d-flex align-items-center mb-3">
                          <div className="icon btn btn-circle btn-soft-primary me-3">
                            <i className="uil uil-users-alt"></i>
                          </div>
                          <h5 className="mb-0">سیستم‌های مدیریت پایه</h5>
                        </div>
                        <p className="mb-3">مدیریت جامع دانش‌آموزان، معلمان، کلاس‌ها و داشبورد شخصی‌سازی شده</p>
                        <div className="d-flex gap-2">
                          <span className="badge bg-soft-primary text-primary">مدیریت کاربران</span>
                          <span className="badge bg-soft-primary text-primary">داشبورد هوشمند</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="card bg-white border-0 shadow-lg">
                      <div className="card-body p-5">
                        <div className="d-flex align-items-center mb-3">
                          <div className="icon btn btn-circle btn-soft-yellow me-3">
                            <i className="uil uil-graduation-cap"></i>
                          </div>
                          <h5 className="mb-0">سیستم‌های آموزشی و ارزیابی</h5>
                        </div>
                        <p className="mb-3">آزمون آنلاین، بانک سوالات، نمره‌دهی هوشمند و تولید کارنامه</p>
                        <div className="d-flex gap-2">
                          <span className="badge bg-soft-yellow text-yellow">آزمون‌سازی</span>
                          <span className="badge bg-soft-yellow text-yellow">ارزیابی خودکار</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="card bg-white border-0 shadow-lg">
                      <div className="card-body p-5">
                        <div className="d-flex align-items-center mb-3">
                          <div className="icon btn btn-circle btn-soft-green me-3">
                            <i className="uil uil-comment-message"></i>
                          </div>
                          <h5 className="mb-0">ارتباطات و مدیریت</h5>
                        </div>
                        <p className="mb-3">چت لحظه‌ای، پیامک انبوه، تقویم رویدادها و حسابداری مدرسه</p>
                        <div className="d-flex gap-2">
                          <span className="badge bg-soft-green text-green">ارتباط مؤثر</span>
                          <span className="badge bg-soft-green text-green">مدیریت مالی</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== facts section ========== */}
        <Facts21 />

        {/* ========== detailed features section ========== */}
        <section className="wrapper bg-light rtl-content" id="all-features">
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
        <section className="wrapper bg-gradient-primary rtl-content">
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
        <section className="wrapper bg-gradient-reverse-primary rtl-content">
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
        {/* <section className="wrapper bg-light">
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
                    نرم‌افزار مدرسه آنلاین پارس آ موز ریسپانسیو است و طرح‌بندی آن با اندازه‌های مختلف صفحه سازگار است که باعث می‌شود وب‌سایت شما با هر دستگاهی مانند گوشی‌های هوشمند، تبلت و کامپیوتر سازگار باشد.
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
        </section> */}

        {/* ========== call to action section ========== */}
        <section className="wrapper bg-gradient-reverse-primary rtl-content" id="contact">
          <div className="container pt-xl-10 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                <img src="/img/demos/icon.png" srcSet="/img/demos/icon@2x.png 2x" alt="آیکون" />
                <h2 className="display-3 mt-3 mb-3 px-lg-8">
                  فکر کنید منحصر به فرد و خلاق باشید. با نرم‌افزار مدرسه آنلاین پارس آ موز تفاوت ایجاد کنید.
                </h2>

                <p className="lead fs-lg mb-6">
                  همه چیزهایی که برای ایجاد وب‌سایت منحصر به فرد و حرفه‌ای بعدی خود نیاز دارید، شامل بلوک‌ها و صفحات چشمگیر و آماده.
                </p>
                <button
                  onClick={openContactPopup}
                  className="btn btn-lg btn-primary rounded-pill mb-10">
                  تماس با ما
                </button>
              </div>
            </div>

            
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
      
      {/* ========== contact popup ========== */}
      <ContactPopup 
        isOpen={isContactPopupOpen}
        onClose={closePopup}
        type={popupType}
      />
    </Fragment>
  );
}
