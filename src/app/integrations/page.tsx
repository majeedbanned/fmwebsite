'use client'

import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

export default function Integrations() {
  const integrations = [
    {
      category: "سیستم‌های پرداخت",
      items: [
        {
          name: "بانک پاسارگاد",
          logo: "/img/brands/bank1.png",
          description: "پرداخت آنلاین شهریه و هزینه‌های مدرسه",
          status: "فعال"
        },
        {
          name: "بانک ملت",
          logo: "/img/brands/bank2.png", 
          description: "درگاه پرداخت امن برای تراکنش‌های مالی",
          status: "فعال"
        },
        {
          name: "زرین‌پال",
          logo: "/img/brands/zarinpal.png",
          description: "پلتفرم پرداخت آنلاین محبوب ایران",
          status: "فعال"
        }
      ]
    },
    {
      category: "سیستم‌های پیام‌رسانی",
      items: [
        {
          name: "کاوه‌نگار",
          logo: "/img/brands/kavenegar.png",
          description: "ارسال پیامک انبوه به والدین و دانش‌آموزان",
          status: "فعال"
        },
        {
          name: "ایران‌سل",
          logo: "/img/brands/irancell.png",
          description: "سرویس پیامک و تماس صوتی",
          status: "فعال"
        },
        {
          name: "همراه اول",
          logo: "/img/brands/mci.png",
          description: "پلتفرم ارسال پیام و اطلاع‌رسانی",
          status: "فعال"
        }
      ]
    },
    {
      category: "ابزارهای آموزشی",
      items: [
        {
          name: "Google Classroom",
          logo: "/img/brands/google-classroom.png",
          description: "همگام‌سازی کلاس‌های آنلاین و تکالیف",
          status: "فعال"
        },
        {
          name: "Microsoft Teams",
          logo: "/img/brands/teams.png",
          description: "برگزاری جلسات آنلاین و همکاری تیمی",
          status: "فعال"
        },
        {
          name: "BigBlueButton",
          logo: "/img/brands/bbb.png",
          description: "پلتفرم وبینار و کلاس‌های مجازی",
          status: "فعال"
        }
      ]
    },
    {
      category: "سیستم‌های امنیتی",
      items: [
        {
          name: "reCAPTCHA",
          logo: "/img/brands/recaptcha.png",
          description: "محافظت از فرم‌ها در برابر ربات‌ها",
          status: "فعال"
        },
        {
          name: "SSL Certificate",
          logo: "/img/brands/ssl.png",
          description: "رمزنگاری و امنیت اتصالات",
          status: "فعال"
        },
        {
          name: "Two-Factor Auth",
          logo: "/img/brands/2fa.png",
          description: "احراز هویت دو مرحله‌ای",
          status: "فعال"
        }
      ]
    },
    {
      category: "ابزارهای تحلیل و گزارش",
      items: [
        {
          name: "Google Analytics",
          logo: "/img/brands/analytics.png",
          description: "تحلیل رفتار کاربران و آمار سایت",
          status: "فعال"
        },
        {
          name: "Chart.js",
          logo: "/img/brands/chartjs.png",
          description: "نمودارهای تعاملی و گزارش‌های بصری",
          status: "فعال"
        },
        {
          name: "Excel Export",
          logo: "/img/brands/excel.png",
          description: "خروجی گزارشات در فرمت اکسل",
          status: "فعال"
        }
      ]
    },
    {
      category: "خدمات ابری",
      items: [
        {
          name: "Amazon S3",
          logo: "/img/brands/aws-s3.png",
          description: "ذخیره‌سازی فایل‌ها و بک‌آپ در فضای ابری",
          status: "فعال"
        },
        {
          name: "Cloudflare",
          logo: "/img/brands/cloudflare.png",
          description: "شبکه توزیع محتوا و امنیت",
          status: "فعال"
        },
        {
          name: "Google Drive",
          logo: "/img/brands/gdrive.png",
          description: "همگام‌سازی و اشتراک‌گذاری فایل‌ها",
          status: "فعال"
        }
      ]
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
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>یکپارچه‌سازی</h1>
                <p className="lead fs-lg mb-0 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  اتصال آسان پارس آموز با بیش از ۵۰ سرویس و پلتفرم مختلف
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== overview section ========== */}
        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-10">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>اتصال به اکوسیستم کامل</h2>
                <p className="lead fs-lg mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  پارس آموز با بیش از ۵۰ سرویس داخلی و خارجی یکپارچه شده است تا تجربه کاملی از مدیریت مدرسه را فراهم کند
                </p>
              </div>
            </div>

            <div className="row gy-6 text-center">
              <div className="col-md-4">
                <div className="icon btn btn-circle btn-lg btn-soft-primary mx-auto mb-4">
                  <i className="uil uil-plug"></i>
                </div>
                <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>اتصال آسان</h4>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  تنها با چند کلیک سرویس‌های مورد نیاز خود را متصل کنید
                </p>
              </div>
              <div className="col-md-4">
                <div className="icon btn btn-circle btn-lg btn-soft-green mx-auto mb-4">
                  <i className="uil uil-sync"></i>
                </div>
                <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>همگام‌سازی خودکار</h4>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  اطلاعات به صورت خودکار بین سیستم‌ها همگام‌سازی می‌شود
                </p>
              </div>
              <div className="col-md-4">
                <div className="icon btn btn-circle btn-lg btn-soft-yellow mx-auto mb-4">
                  <i className="uil uil-shield-check"></i>
                </div>
                <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>امنیت بالا</h4>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  تمام اتصالات با بالاترین استانداردهای امنیتی برقرار می‌شود
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== integrations by category ========== */}
        {integrations.map((category, categoryIndex) => (
          <section 
            key={categoryIndex}
            className={`wrapper ${categoryIndex % 2 === 0 ? 'bg-gradient-primary' : 'bg-gradient-reverse-primary'} rtl-content`}
            style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}
          >
            <div className="container py-14 py-md-16">
              <div className="row mb-8">
                <div className="col-lg-8 mx-auto text-center">
                  <h2 className="display-5 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                    {category.category}
                  </h2>
                </div>
              </div>

              <div className="row gy-6">
                {category.items.map((integration, index) => (
                  <div key={index} className="col-lg-4">
                    <div className="card bg-white border-0 shadow-lg h-100">
                      <div className="card-body p-6 text-center">
                        <div className="mb-4">
                          <img
                            src={integration.logo}
                            alt={integration.name}
                            className="img-fluid"
                            style={{ maxHeight: '60px', maxWidth: '120px' }}
                            loading="lazy"
                          />
                        </div>
                        <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          {integration.name}
                        </h4>
                        <p className="mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          {integration.description}
                        </p>
                        <span className="badge bg-soft-success text-success" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          {integration.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ========== API section ========== */}
        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6">
                <h2 className="display-4 mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>API قدرتمند برای توسعه‌دهندگان</h2>
                <p className="lead fs-lg mb-6" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  با استفاده از API جامع پارس آموز، برنامه‌ها و سرویس‌های سفارشی خود را بسازید
                </p>

                <div className="row gy-4">
                  <div className="col-12">
                    <div className="d-flex">
                      <div>
                        <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                          <i className="uil uil-code-branch"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-1" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>RESTful API</h4>
                        <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          API استاندارد REST با مستندات کامل و نمونه کدهای آماده
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex">
                      <div>
                        <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                          <i className="uil uil-webhook"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-1" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>Webhooks</h4>
                        <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          دریافت اطلاع‌رسانی فوری از تغییرات و رویدادهای مهم سیستم
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex">
                      <div>
                        <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                          <i className="uil uil-key-skeleton-alt"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-1" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>احراز هویت امن</h4>
                        <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          سیستم احراز هویت OAuth 2.0 برای دسترسی امن به API
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a href="/documentation" className="btn btn-primary rounded-pill me-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                    مستندات API
                  </a>
                  <a href="/contact" className="btn btn-outline-primary rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                    درخواست API Key
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <div className="card bg-dark text-white">
                    <div className="card-body p-4">
                      <pre className="text-white mb-0" style={{ fontSize: '0.9rem', fontFamily: 'Monaco, Consolas, monospace' }}>
{`// نمونه فراخوانی API
fetch('https://api.parsamooz.com/v1/students', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('Students:', data);
});`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== custom integration ========== */}
        <section className="wrapper bg-gradient-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>نیاز به یکپارچه‌سازی سفارشی دارید؟</h2>
                <p className="lead fs-lg text-gray-600 opacity-90 mb-6" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  تیم فنی ما آماده است تا هر سرویس یا سیستمی که نیاز دارید را به پارس آموز متصل کند
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="/contact" className="btn btn-white btn-lg rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                    درخواست یکپارچه‌سازی
                  </a>
                  <a href="/documentation" className="btn btn-outline-white btn-lg rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                    مشاهده مستندات
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== support section ========== */}
        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-10">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <div className="icon btn btn-circle btn-lg btn-soft-primary me-3">
                    <i className="uil uil-headphones-alt"></i>
                  </div>
                  <h4 className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>پشتیبانی تخصصی یکپارچه‌سازی</h4>
                </div>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  تیم فنی ما ۲۴/۷ آماده کمک به شما در راه‌اندازی و پیکربندی یکپارچه‌سازی‌ها است
                </p>
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
