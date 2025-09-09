'use client'

import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "مدرسه شهید بهشتی تهران",
      subtitle: "افزایش ۸۰٪ کارایی مدیریت با پارس آموز",
      image: "/img/photos/school1.jpg",
      stats: {
        students: "۱۲۰۰",
        teachers: "۸۵",
        efficiency: "۸۰٪",
        satisfaction: "۹۵٪"
      },
      challenge: "مدیریت دستی اطلاعات دانش‌آموزان و ارتباطات ضعیف بین معلمان و والدین",
      solution: "پیاده‌سازی کامل سیستم پارس آموز با تمرکز بر مدیریت دانش‌آموزان و ارتباطات",
      results: [
        "کاهش ۷۰٪ زمان صرف شده برای کارهای اداری",
        "افزایش ۹۰٪ رضایت والدین از ارتباطات مدرسه",
        "بهبود ۶۰٪ در سرعت تولید گزارشات",
        "صرفه‌جویی ۵۰٪ در هزینه‌های اداری"
      ],
      testimonial: {
        text: "پارس آموز مدرسه ما را متحول کرد. حالا همه چیز دیجیتال و منظم است.",
        author: "آقای احمد رضایی",
        position: "مدیر مدرسه شهید بهشتی"
      }
    },
    {
      id: 2,
      title: "مجتمع آموزشی فاطمیه",
      subtitle: "دیجیتالی‌سازی کامل فرآیندهای آموزشی",
      image: "/img/photos/school2.jpg",
      stats: {
        students: "۸۰۰",
        teachers: "۶۰",
        efficiency: "۷۵٪",
        satisfaction: "۹۲٪"
      },
      challenge: "نبود سیستم یکپارچه برای مدیریت آزمون‌ها و نمرات دانش‌آموزان",
      solution: "استقرار سیستم آزمون آنلاین و مدیریت نمرات پارس آموز",
      results: [
        "برگزاری ۱۰۰٪ آزمون‌ها به صورت آنلاین",
        "کاهش ۸۵٪ زمان تصحیح و نمره‌دهی",
        "افزایش ۴۰٪ دقت در محاسبه نمرات",
        "دسترسی فوری والدین به نتایج آزمون‌ها"
      ],
      testimonial: {
        text: "سیستم آزمون آنلاین پارس آموز کیفیت ارزیابی‌های ما را به شدت بهبود داد.",
        author: "خانم مریم کریمی",
        position: "معاون آموزشی مجتمع فاطمیه"
      }
    },
    {
      id: 3,
      title: "دبیرستان علامه طباطبایی",
      subtitle: "بهینه‌سازی مدیریت مالی و حسابداری",
      image: "/img/photos/school3.jpg",
      stats: {
        students: "۶۰۰",
        teachers: "۴۵",
        efficiency: "۹۰٪",
        satisfaction: "۹۸٪"
      },
      challenge: "پیچیدگی در مدیریت مالی و عدم شفافیت در گزارشات مالی",
      solution: "پیاده‌سازی ماژول حسابداری و مدیریت مالی پارس آموز",
      results: [
        "شفافیت کامل در تمام تراکنش‌های مالی",
        "کاهش ۹۰٪ خطاهای حسابداری",
        "تولید خودکار گزارشات مالی ماهانه",
        "کنترل بهتر بر هزینه‌ها و درآمدها"
      ],
      testimonial: {
        text: "ماژول حسابداری پارس آموز دقیقاً همان چیزی بود که ما نیاز داشتیم.",
        author: "آقای حسین محمدی",
        position: "مدیر مالی دبیرستان علامه"
      }
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
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مطالعات موردی</h1>
                <p className="lead fs-lg mb-0 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  داستان موفقیت مدارس و مؤسسات آموزشی با استفاده از سیستم پارس آموز
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== overview stats ========== */}
        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row text-center mb-10">
              <div className="col-lg-8 mx-auto">
                <h2 className="display-4 mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>نتایج حاصل از پیاده‌سازی</h2>
                <p className="lead fs-lg" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  آمار کلی بهبودهای حاصل در مدارس استفاده‌کننده از پارس آموز
                </p>
              </div>
            </div>

            <div className="row gy-6 text-center">
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-soft-primary mx-auto mb-4">
                  <i className="uil uil-chart-growth"></i>
                </div>
                <h3 className="fs-40 mb-2 text-primary" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>۸۵٪</h3>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>افزایش کارایی مدیریتی</p>
              </div>
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-soft-green mx-auto mb-4">
                  <i className="uil uil-users-alt"></i>
                </div>
                <h3 className="fs-40 mb-2 text-green" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>۹۵٪</h3>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>رضایت کاربران</p>
              </div>
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-soft-yellow mx-auto mb-4">
                  <i className="uil uil-money-stack"></i>
                </div>
                <h3 className="fs-40 mb-2 text-yellow" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>۶۰٪</h3>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>کاهش هزینه‌های اداری</p>
              </div>
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-soft-purple mx-auto mb-4">
                  <i className="uil uil-clock-three"></i>
                </div>
                <h3 className="fs-40 mb-2 text-purple" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>۷۵٪</h3>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>صرفه‌جویی در زمان</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== case studies ========== */}
        {caseStudies.map((study, index) => (
          <section 
            key={study.id} 
            className={`wrapper ${index % 2 === 0 ? 'bg-gradient-primary' : 'bg-gradient-reverse-primary'} rtl-content`}
            style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}
          >
            <div className="container py-14 py-md-16">
              <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-2' : ''}`}>
                  <img
                    src={study.image}
                    className="img-fluid rounded shadow-lg"
                    alt={study.title}
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="display-5 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                    {study.title}
                  </h2>
                  <h3 className="fs-20 mb-4 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                    {study.subtitle}
                  </h3>

                  {/* Stats */}
                  <div className="row gy-3 mb-6">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="icon btn btn-circle btn-sm btn-white text-primary me-3">
                          <i className="uil uil-users-alt"></i>
                        </div>
                        <div>
                          <h5 className="mb-0 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>{study.stats.students}</h5>
                          <small className="text-gray-600 opacity-80" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>دانش‌آموز</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="icon btn btn-circle btn-sm btn-white text-primary me-3">
                          <i className="uil uil-graduation-cap"></i>
                        </div>
                        <div>
                          <h5 className="mb-0 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>{study.stats.teachers}</h5>
                          <small className="text-gray-600 opacity-80" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>معلم</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="icon btn btn-circle btn-sm btn-white text-primary me-3">
                          <i className="uil uil-chart-growth"></i>
                        </div>
                        <div>
                          <h5 className="mb-0 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>{study.stats.efficiency}</h5>
                          <small className="text-gray-600 opacity-80" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>بهبود کارایی</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="icon btn btn-circle btn-sm btn-white text-primary me-3">
                          <i className="uil uil-heart"></i>
                        </div>
                        <div>
                          <h5 className="mb-0 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>{study.stats.satisfaction}</h5>
                          <small className="text-gray-600 opacity-80" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>رضایت</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>چالش:</h4>
                    <p className="text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>راه‌حل:</h4>
                    <p className="text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>نتایج:</h4>
                    <ul className="icon-list bullet-bg bullet-white text-gray-600 mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      {study.results.map((result, idx) => (
                        <li key={idx}>
                          <i className="uil uil-check"></i>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-0 ps-0">
                    <p className="text-gray-600 opacity-90 mb-3" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      "{study.testimonial.text}"
                    </p>
                    <footer className="blockquote-footer text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      <strong>{study.testimonial.author}</strong>, {study.testimonial.position}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ========== call to action ========== */}
        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>آماده شروع موفقیت خود هستید؟</h2>
                <p className="lead fs-lg mb-6" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  مدرسه شما هم می‌تواند جزو داستان‌های موفقیت پارس آموز باشد
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="/demo" className="btn btn-primary btn-lg rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                    درخواست دمو رایگان
                  </a>
                  <a href="/contact" className="btn btn-outline-primary btn-lg rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                    مشاوره رایگان
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
