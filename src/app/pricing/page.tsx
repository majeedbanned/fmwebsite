// import type { Metadata } from "next";
'use client'
import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

// export const metadata: Metadata = {
//   title: "تعرفه و قیمت پارس آموز - پکیج‌های سیستم مدیریت مدرسه آنلاین",
//   description: "مشاهده تعرفه و قیمت پکیج‌های مختلف سیستم مدیریت مدرسه آنلاین پارس آموز. از پکیج پایه تا حرفه‌ای با امکانات کامل. دمو رایگان و پشتیبانی ۲۴/۷.",
//   keywords: [
//     "قیمت پارس آموز",
//     "تعرفه سیستم مدیریت مدرسه",
//     "پکیج نرم افزار مدرسه",
//     "هزینه سیستم آموزشی",
//     "قیمت نرم افزار آموزشی",
//     "تعرفه آزمون آنلاین",
//     "قیمت سیستم مدرسه ای"
//   ],
//   openGraph: {
//     title: "تعرفه و قیمت پارس آموز - پکیج‌های سیستم مدیریت مدرسه آنلاین",
//     description: "مشاهده تعرفه و قیمت پکیج‌های مختلف سیستم مدیریت مدرسه آنلاین پارس آموز",
//     url: "https://parsamooz.com/pricing",
//   }
// };

export default function Pricing() {
  const plans = [
    {
      name: "پایه",
      price: "۲,۵۰۰,۰۰۰",
      period: "سالانه",
      description: "برای مدارس کوچک تا ۱۰۰ دانش‌آموز",
      popular: false,
      features: [
        "مدیریت دانش‌آموزان و معلمان",
        "سیستم حضور و غیاب",
        "کارنامه آنلاین",
        "پنل والدین",
        "گزارشات پایه",
        "پشتیبانی ایمیل",
        "فضای ذخیره‌سازی ۵ گیگابایت",
        "تا ۳ کاربر مدیر"
      ],
      limitations: [
        "بدون آزمون آنلاین",
        "بدون چت مدرسه",
        "بدون حسابداری"
      ]
    },
    {
      name: "استاندارد",
      price: "۴,۵۰۰,۰۰۰",
      period: "سالانه",
      description: "برای مدارس متوسط تا ۳۰۰ دانش‌آموز",
      popular: true,
      features: [
        "تمام امکانات پکیج پایه",
        "آزمون آنلاین و بانک سوالات",
        "سیستم نمره‌دهی هوشمند",
        "چت مدرسه",
        "پیام‌رسانی انبوه",
        "تقویم و رویدادها",
        "گزارشات پیشرفته",
        "پشتیبانی تلفنی",
        "فضای ذخیره‌سازی ۲۰ گیگابایت",
        "تا ۱۰ کاربر مدیر"
      ],
      limitations: [
        "بدون حسابداری کامل",
        "بدون API دسترسی"
      ]
    },
    {
      name: "حرفه‌ای",
      price: "۷,۵۰۰,۰۰۰",
      period: "سالانه",
      description: "برای مدارس بزرگ بالای ۳۰۰ دانش‌آموز",
      popular: false,
      features: [
        "تمام امکانات پکیج استاندارد",
        "سیستم حسابداری کامل",
        "مدیریت فایل پیشرفته",
        "فعالیت‌های معلمان",
        "گزارشات تحلیلی",
        "API دسترسی",
        "پشتیبانی اولویت‌دار ۲۴/۷",
        "فضای ذخیره‌سازی ۱۰۰ گیگابایت",
        "کاربران مدیر نامحدود",
        "پشتیبان‌گیری روزانه",
        "امکان سفارشی‌سازی"
      ],
      limitations: []
    },
    {
      name: "سازمانی",
      price: "تماس بگیرید",
      period: "",
      description: "برای مجموعه مدارس و سازمان‌های بزرگ",
      popular: false,
      features: [
        "تمام امکانات پکیج حرفه‌ای",
        "چندین مدرسه در یک پنل",
        "مدیریت متمرکز",
        "گزارشات مقایسه‌ای",
        "امکانات اختصاصی",
        "پیاده‌سازی On-Premise",
        "آموزش حضوری",
        "مشاور اختصاصی",
        "SLA تضمینی",
        "فضای ذخیره‌سازی نامحدود"
      ],
      limitations: []
    }
  ];

  const faqs = [
    {
      question: "آیا امکان تست رایگان وجود دارد؟",
      answer: "بله، ما ۳۰ روز دمو رایگان ارائه می‌دهیم تا بتوانید تمام امکانات را بررسی کنید."
    },
    {
      question: "آیا می‌توان پکیج را در طول سال تغییر داد؟",
      answer: "بله، شما می‌توانید در هر زمان پکیج خود را ارتقا دهید. هزینه اضافی به صورت تناسبی محاسبه می‌شود."
    },
    {
      question: "آیا آموزش استفاده از سیستم ارائه می‌شود؟",
      answer: "بله، برای تمام پکیج‌ها آموزش آنلاین رایگان و برای پکیج حرفه‌ای و سازمانی آموزش حضوری ارائه می‌شود."
    },
    {
      question: "چگونه می‌توان اطلاعات قبلی مدرسه را منتقل کرد؟",
      answer: "تیم فنی ما در انتقال اطلاعات از سیستم‌های قبلی به صورت رایگان کمک می‌کند."
    },
    {
      question: "آیا امکان پرداخت اقساطی وجود دارد؟",
      answer: "بله، امکان پرداخت در ۳ قسط برای پکیج‌های استاندارد و حرفه‌ای وجود دارد."
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
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>تعرفه و قیمت</h1>
                <p className="lead fs-lg mb-6 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  پکیج مناسب برای مدرسه خود را انتخاب کنید. تمام پکیج‌ها شامل ۳۰ روز دمو رایگان
                </p>
                <a href="#plans" className="btn btn-white btn-lg rounded-pill">
                  مشاهده پکیج‌ها
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========== pricing plans ========== */}
        <section id="plans" className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3">پکیج‌های قیمتی</h2>
                <p className="lead fs-lg">
                  پکیج مناسب اندازه و نیاز مدرسه خود را انتخاب کنید
                </p>
              </div>
            </div>

            <div className="row gy-6">
              {plans.map((plan, index) => (
                <div key={index} className="col-lg-3">
                  <div className={`card border-0 shadow-lg h-100 ${plan.popular ? 'border-primary' : ''}`}>
                    {plan.popular && (
                      <div className="position-absolute top-0 start-50 translate-middle">
                        <span className="badge bg-primary text-white px-3 py-2 rounded-pill">محبوب‌ترین</span>
                      </div>
                    )}
                    <div className="card-body p-6 text-center">
                      <h4 className="mb-2">{plan.name}</h4>
                      <div className="mb-4">
                        <span className="display-5 fw-bold text-primary">{plan.price}</span>
                        {plan.period && <span className="text-muted">/{plan.period}</span>}
                      </div>
                      <p className="text-muted mb-4">{plan.description}</p>
                      
                      <ul className="list-unstyled text-start mb-4">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="mb-2">
                            <i className="uil uil-check text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                        {plan.limitations.map((limitation, lIndex) => (
                          <li key={lIndex} className="mb-2 text-muted">
                            <i className="uil uil-times text-danger me-2"></i>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                      
                      <a 
                        href="/contact" 
                        className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline-primary'} rounded-pill w-100`}
                      >
                        {plan.price === "تماس بگیرید" ? "تماس با ما" : "شروع دمو رایگان"}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-10">
              <div className="col-lg-8 mx-auto text-center">
                <div className="alert alert-info">
                  <h5 className="mb-2">💡 نکته مهم</h5>
                  <p className="mb-0">
                    تمام قیمت‌ها برای یک سال استفاده است و شامل پشتیبانی، به‌روزرسانی و فضای ابری می‌باشد.
                    برای مدارس با بیش از ۱۰۰۰ دانش‌آموز، تخفیف ویژه در نظر گرفته شده است.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== comparison table ========== */}
        <section className="wrapper bg-gradient-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مقایسه پکیج‌ها</h2>
                <p className="lead fs-lg text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  مقایسه دقیق امکانات هر پکیج برای انتخاب بهتر
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="table-responsive">
                  <table className="table table-striped bg-white rounded shadow-lg">
                    <thead>
                      <tr>
                        <th className="text-start">ویژگی</th>
                        <th className="text-center">پایه</th>
                        <th className="text-center">استاندارد</th>
                        <th className="text-center">حرفه‌ای</th>
                        <th className="text-center">سازمانی</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>تعداد دانش‌آموز</td>
                        <td className="text-center">تا ۱۰۰</td>
                        <td className="text-center">تا ۳۰۰</td>
                        <td className="text-center">نامحدود</td>
                        <td className="text-center">نامحدود</td>
                      </tr>
                      <tr>
                        <td>مدیریت پایه</td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                      </tr>
                      <tr>
                        <td>آزمون آنلاین</td>
                        <td className="text-center"><i className="uil uil-times text-danger"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                      </tr>
                      <tr>
                        <td>چت مدرسه</td>
                        <td className="text-center"><i className="uil uil-times text-danger"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                      </tr>
                      <tr>
                        <td>حسابداری</td>
                        <td className="text-center"><i className="uil uil-times text-danger"></i></td>
                        <td className="text-center"><i className="uil uil-times text-danger"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                      </tr>
                      <tr>
                        <td>API دسترسی</td>
                        <td className="text-center"><i className="uil uil-times text-danger"></i></td>
                        <td className="text-center"><i className="uil uil-times text-danger"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                        <td className="text-center"><i className="uil uil-check text-success"></i></td>
                      </tr>
                      <tr>
                        <td>پشتیبانی</td>
                        <td className="text-center">ایمیل</td>
                        <td className="text-center">تلفنی</td>
                        <td className="text-center">۲۴/۷</td>
                        <td className="text-center">اختصاصی</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FAQ section ========== */}
        <section className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3">سوالات متداول</h2>
                <p className="lead fs-lg">
                  پاسخ سوالات رایج درباره قیمت‌گذاری و پکیج‌ها
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
                          <p className="mb-0">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== call to action ========== */}
        <section className="wrapper bg-gradient-reverse-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>آماده شروع هستید؟</h2>
                <p className="lead fs-lg text-gray-600 opacity-90 mb-6" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  ۳۰ روز دمو رایگان دریافت کنید و تفاوت پارس آموز را تجربه کنید
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="/contact" className="btn btn-white btn-lg rounded-pill">
                    شروع دمو رایگان
                  </a>
                  <a href="/contact" className="btn btn-outline-white btn-lg rounded-pill">
                    مشاوره تلفنی
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== money back guarantee ========== */}
        <section className="wrapper bg-light rtl-content">
          <div className="container py-10">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <div className="icon btn btn-circle btn-lg btn-soft-green me-3">
                    <i className="uil uil-shield-check"></i>
                  </div>
                  <h4 className="mb-0">ضمانت بازگشت وجه ۳۰ روزه</h4>
                </div>
                <p className="text-muted mb-0">
                  اگر در ۳۰ روز اول از خرید پکیج راضی نبودید، تمام وجه شما بازگردانده می‌شود.
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