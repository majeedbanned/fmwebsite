'use client'

import { Fragment, useState } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    {
      title: "شروع کار",
      icon: "uil-rocket",
      articles: [
        { title: "راه‌اندازی اولیه سیستم", views: "1.2k" },
        { title: "ایجاد حساب کاربری اول", views: "980" },
        { title: "تنظیمات پایه مدرسه", views: "856" },
        { title: "اضافه کردن معلمان و کلاس‌ها", views: "743" }
      ]
    },
    {
      title: "مدیریت دانش‌آموزان",
      icon: "uil-users-alt",
      articles: [
        { title: "ثبت‌نام دانش‌آموزان جدید", views: "2.1k" },
        { title: "مدیریت اطلاعات شخصی", views: "1.8k" },
        { title: "انتقال و تغییر کلاس", views: "1.3k" },
        { title: "تنظیمات حضور و غیاب", views: "1.1k" }
      ]
    },
    {
      title: "آزمون و ارزیابی",
      icon: "uil-graduation-cap",
      articles: [
        { title: "ایجاد آزمون آنلاین", views: "1.9k" },
        { title: "بانک سوالات و دسته‌بندی", views: "1.5k" },
        { title: "تصحیح خودکار و نمره‌دهی", views: "1.4k" },
        { title: "تولید کارنامه", views: "1.2k" }
      ]
    },
    {
      title: "ارتباطات و اطلاع‌رسانی",
      icon: "uil-comment-dots",
      articles: [
        { title: "ارسال پیامک به والدین", views: "1.6k" },
        { title: "استفاده از چت مدرسه", views: "1.3k" },
        { title: "مدیریت تقویم و رویدادها", views: "1.0k" },
        { title: "اطلاع‌رسانی خودکار", views: "890" }
      ]
    },
    {
      title: "مدیریت مالی",
      icon: "uil-money-stack",
      articles: [
        { title: "تنظیمات شهریه و پرداخت", views: "1.4k" },
        { title: "گزارشات مالی و حسابداری", views: "1.1k" },
        { title: "مدیریت بدهکاران", views: "980" },
        { title: "صدور فاکتور و رسید", views: "756" }
      ]
    },
    {
      title: "تنظیمات و پیکربندی",
      icon: "uil-setting",
      articles: [
        { title: "مدیریت دسترسی‌ها", views: "1.2k" },
        { title: "پشتیبان‌گیری از اطلاعات", views: "1.0k" },
        { title: "تنظیمات امنیتی", views: "890" },
        { title: "یکپارچه‌سازی با سیستم‌های خارجی", views: "678" }
      ]
    }
  ];

  const faqs = [
    {
      question: "چگونه می‌توانم رمز عبور خود را بازیابی کنم؟",
      answer: "برای بازیابی رمز عبور، روی لینک 'فراموشی رمز عبور' در صفحه ورود کلیک کنید و ایمیل خود را وارد کنید. لینک بازیابی به ایمیل شما ارسال خواهد شد."
    },
    {
      question: "آیا امکان استفاده همزمان چندین کاربر وجود دارد؟",
      answer: "بله، سیستم پارس آموز از استفاده همزمان کاربران متعدد پشتیبانی می‌کند. تعداد کاربران همزمان بسته به پکیج انتخابی شما متفاوت است."
    },
    {
      question: "چگونه می‌توانم از اطلاعات خود پشتیبان‌گیری کنم؟",
      answer: "سیستم به صورت خودکار روزانه از تمام اطلاعات شما پشتیبان‌گیری می‌کند. همچنین می‌توانید از بخش تنظیمات، پشتیبان‌گیری دستی انجام دهید."
    },
    {
      question: "آیا امکان دسترسی از موبایل وجود دارد؟",
      answer: "بله، سیستم کاملاً ریسپانسیو است و از طریق مرورگر موبایل قابل استفاده است. همچنین اپلیکیشن موبایل نیز در حال توسعه است."
    },
    {
      question: "در صورت بروز مشکل فنی چه کار کنم؟",
      answer: "می‌توانید از طریق تیکت پشتیبانی، ایمیل، یا تماس تلفنی با تیم پشتیبانی ۲۴/۷ ما در ارتباط باشید. همچنین در همین صفحه راهنماهای مفصلی موجود است."
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
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مرکز راهنمایی</h1>
                <p className="lead fs-lg mb-6 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  راهنماها، آموزش‌ها و پاسخ سوالات متداول برای استفاده بهتر از پارس آموز
                </p>
                
                {/* Search Box */}
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-pill ps-5"
                        placeholder="جستجو در راهنماها..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", textAlign: 'right' }}
                      />
                      <div className="position-absolute top-50 start-0 translate-middle-y ms-4">
                        <i className="uil uil-search text-muted"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== quick help ========== */}
        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>راهنمای سریع</h2>
                <p className="lead fs-lg" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  دسترسی سریع به پرکاربردترین راهنماها
                </p>
              </div>
            </div>

            <div className="row gy-6">
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100 text-center">
                  <div className="card-body p-6">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary mx-auto mb-4">
                      <i className="uil uil-rocket"></i>
                    </div>
                    <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>شروع سریع</h4>
                    <p className="mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      راهنمای گام به گام برای شروع کار با پارس آموز
                    </p>
                    <a href="/tutorials" className="btn btn-primary rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      مشاهده آموزش
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100 text-center">
                  <div className="card-body p-6">
                    <div className="icon btn btn-circle btn-lg btn-soft-green mx-auto mb-4">
                      <i className="uil uil-play-circle"></i>
                    </div>
                    <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>ویدیوهای آموزشی</h4>
                    <p className="mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      آموزش‌های ویدیویی برای یادگیری بهتر امکانات
                    </p>
                    <a href="/tutorials" className="btn btn-green rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      تماشای ویدیوها
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100 text-center">
                  <div className="card-body p-6">
                    <div className="icon btn btn-circle btn-lg btn-soft-yellow mx-auto mb-4">
                      <i className="uil uil-headphones-alt"></i>
                    </div>
                    <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>پشتیبانی فوری</h4>
                    <p className="mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      تماس مستقیم با تیم پشتیبانی ۲۴/۷
                    </p>
                    <a href="/contact" className="btn btn-yellow rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      تماس با پشتیبانی
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== help categories ========== */}
        <section className="wrapper bg-gradient-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>دسته‌بندی راهنماها</h2>
                <p className="lead fs-lg text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  راهنماهای تخصصی برای هر بخش از سیستم
                </p>
              </div>
            </div>

            <div className="row gy-6">
              {categories.map((category, index) => (
                <div key={index} className="col-lg-6">
                  <div className="card bg-white border-0 shadow-lg h-100">
                    <div className="card-body p-6">
                      <div className="d-flex align-items-center mb-4">
                        <div className={`icon btn btn-circle btn-lg btn-soft-primary me-4`}>
                          <i className={`uil ${category.icon}`}></i>
                        </div>
                        <h4 className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          {category.title}
                        </h4>
                      </div>
                      
                      <div className="list-group list-group-flush">
                        {category.articles.map((article, articleIndex) => (
                          <a 
                            key={articleIndex}
                            href="#" 
                            className="list-group-item list-group-item-action border-0 px-0 d-flex justify-content-between align-items-center"
                          >
                            <span style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                              {article.title}
                            </span>
                            <small className="text-muted" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                              {article.views} بازدید
                            </small>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FAQ section ========== */}
        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>سوالات متداول</h2>
                <p className="lead fs-lg" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  پاسخ سوالات پرتکرار کاربران
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="accordion accordion-wrapper" id="accordionFAQ">
                  {faqs.map((faq, index) => (
                    <div key={index} className="card plain accordion-item">
                      <div className="card-header" id={`heading${index}`}>
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`collapse${index}`}
                          style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}
                        >
                          {faq.question}
                        </button>
                      </div>
                      <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#accordionFAQ"
                      >
                        <div className="card-body">
                          <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== contact support ========== */}
        <section className="wrapper bg-gradient-reverse-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>پاسخ سوال خود را پیدا نکردید؟</h2>
                <p className="lead fs-lg text-gray-600 opacity-90 mb-6" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  تیم پشتیبانی ما آماده پاسخگویی به تمام سوالات شماست
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="/contact" className="btn btn-primary btn-lg rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                    تماس با پشتیبانی
                  </a>
                  <a href="/tutorials" className="btn btn-outline-primary btn-lg rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                    مشاهده آموزش‌ها
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
