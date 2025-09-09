'use client'

// import type { Metadata } from "next";
import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

// export const metadata: Metadata = {
//   title: "داستان پارس آموز - سفر از ایده تا پیشرفته‌ترین سیستم آموزشی",
//   description: "داستان تأسیس و رشد پارس آموز از یک ایده ساده تا تبدیل شدن به پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران. تاریخچه، نقاط عطف و دستاوردها.",
//   keywords: [
//     "داستان پارس آموز",
//     "تاریخچه پارس آموز",
//     "تأسیس پارس آموز",
//     "رشد پارس آموز",
//     "نقاط عطف پارس آموز",
//     "تاریخ سیستم مدیریت مدرسه"
//   ],
//   openGraph: {
//     title: "داستان پارس آموز - سفر از ایده تا پیشرفته‌ترین سیستم آموزشی",
//     description: "داستان تأسیس و رشد پارس آموز از یک ایده ساده تا پیشرفته‌ترین سیستم آموزشی",
//     url: "https://parsamooz.com/our-story",
//   }
// };

export default function OurStory() {
  const milestones = [
    {
      year: "۲۰۲۰",
      title: "تأسیس پارس آموز",
      description: "شروع کار با تیمی کوچک اما پرانگیزه برای حل مشکلات مدیریت مدارس",
      icon: "uil-rocket"
    },
    {
      year: "۲۰۲۱", 
      title: "اولین محصول",
      description: "عرضه نسخه اولیه سیستم مدیریت دانش‌آموزان و تست در ۱۰ مدرسه",
      icon: "uil-graduation-cap"
    },
    {
      year: "۲۰۲۲",
      title: "گسترش خدمات",
      description: "اضافه شدن سیستم آزمون آنلاین و بانک سوالات به مجموعه محصولات",
      icon: "uil-chart-growth"
    },
    {
      year: "۲۰۲۳",
      title: "رشد سریع",
      description: "رسیدن به ۱۰۰ مدرسه فعال و اضافه شدن سیستم‌های حسابداری و ارتباطات",
      icon: "uil-users-alt"
    },
    {
      year: "۲۰۲۴",
      title: "تکمیل اکوسیستم",
      description: "ارائه ۱۴ سرویس کامل و خدمت‌رسانی به بیش از ۵۰۰ مدرسه در سراسر کشور",
      icon: "uil-award"
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
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>داستان ما</h1>
                <p className="lead fs-lg mb-0 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  سفری از یک ایده ساده تا تبدیل شدن به پیشرفته‌ترین سیستم مدیریت آموزشی ایران
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== story beginning ========== */}
        <section className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6">
                <img 
                  src="/img/illustrations/i2.png" 
                  className="img-fluid" 
                  alt="آغاز داستان پارس آموز"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="display-4 mb-3">آغاز یک ایده</h2>
                <p className="lead fs-lg">
                  همه چیز با یک مشاهده ساده شروع شد...
                </p>
                <p className="mb-6">
                  در سال ۲۰۱۹، زمانی که بنیانگذار ما، دکتر علی محمدی، برای ثبت‌نام فرزندش به یکی از مدارس 
                  معتبر تهران مراجعه کرد، متوجه شد که هنوز بسیاری از فرآیندهای اداری و آموزشی به صورت سنتی 
                  و دستی انجام می‌شود. صف‌های طولانی، کاغذبازی‌های فراوان، و عدم دسترسی آسان به اطلاعات 
                  دانش‌آموزان، او را بر آن داشت تا به فکر راه‌حلی جامع و دیجیتال باشد.
                </p>
                <p className="mb-0">
                  همان شب، او تصمیم گرفت که تجربه‌اش در حوزه فناوری اطلاعات را برای حل این مشکل به کار گیرد. 
                  این تصمیم، نقطه شروع داستان پارس آموز بود.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== challenges section ========== */}
        <section className="wrapper bg-gradient-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>چالش‌های اولیه</h2>
                <p className="lead fs-lg text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  راه پر پیچ و خم از ایده تا محصول
                </p>
              </div>
            </div>

            <div className="row gy-6">
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body text-center p-6">
                    <div className="icon btn btn-circle btn-lg btn-soft-red mx-auto mb-4">
                      <i className="uil uil-money-withdraw"></i>
                    </div>
                    <h4 className="mb-2">محدودیت بودجه</h4>
                    <p className="mb-0">
                      شروع کار با بودجه محدود و تکیه بر منابع شخصی بنیانگذار
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body text-center p-6">
                    <div className="icon btn btn-circle btn-lg btn-soft-orange mx-auto mb-4">
                      <i className="uil uil-users-alt"></i>
                    </div>
                    <h4 className="mb-2">جذب تیم</h4>
                    <p className="mb-0">
                      پیدا کردن افراد متخصص و متعهد که به چشم‌انداز پروژه ایمان داشته باشند
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body text-center p-6">
                    <div className="icon btn btn-circle btn-lg btn-soft-yellow mx-auto mb-4">
                      <i className="uil uil-shield-exclamation"></i>
                    </div>
                    <h4 className="mb-2">اعتماد بازار</h4>
                    <p className="mb-0">
                      متقاعد کردن مدارس برای استفاده از یک سیستم جدید و ناشناخته
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== timeline section ========== */}
        <section className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row mb-10">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-4">مسیر رشد و پیشرفت</h2>
                <p className="lead fs-lg mb-0">
                  نگاهی به نقاط عطف و دستاوردهای مهم در طول سال‌های فعالیت
                </p>
              </div>
            </div>

            <div className="row gy-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="col-lg-6">
                  <div className="d-flex flex-row">
                    <div>
                      <div className={`icon btn btn-circle btn-lg btn-soft-primary me-4`}>
                        <i className={`uil ${milestone.icon}`}></i>
                      </div>
                    </div>
                    <div>
                      <div className="badge bg-primary text-white mb-2">{milestone.year}</div>
                      <h4 className="mb-1">{milestone.title}</h4>
                      <p className="mb-0">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== success story ========== */}
        <section className="wrapper bg-gradient-reverse-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <img 
                  src="/img/illustrations/i3.png" 
                  className="img-fluid" 
                  alt="موفقیت پارس آموز"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>موفقیت‌ها و دستاوردها</h2>
                <p className="lead fs-lg text-gray-600 opacity-90 mb-6" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  امروز، پس از گذشت ۴ سال از شروع کار، پارس آموز به جایگاه ویژه‌ای رسیده است.
                </p>
                
                <div className="row gy-3">
                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-white text-gray-600 mb-0">
                      <li><i className="uil uil-check"></i>بیش از ۵۰۰ مدرسه فعال</li>
                      <li><i className="uil uil-check"></i>۵۰,۰۰۰+ دانش‌آموز</li>
                      <li><i className="uil uil-check"></i>۵,۰۰۰+ معلم</li>
                    </ul>
                  </div>
                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-white text-gray-600 mb-0">
                      <li><i className="uil uil-check"></i>۱۴ سرویس تخصصی</li>
                      <li><i className="uil uil-check"></i>۹۹٪ رضایت کاربران</li>
                      <li><i className="uil uil-check"></i>پشتیبانی ۲۴/۷</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== values learned ========== */}
        <section className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3">درس‌های آموخته شده</h2>
                <p className="lead fs-lg">
                  آنچه در طول این سفر آموختیم و اکنون بخشی از DNA ما محسوب می‌شود
                </p>
              </div>
            </div>

            <div className="row gy-6">
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-ear"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">گوش دادن به مشتری</h4>
                    <p className="mb-0">
                      یاد گرفتیم که موفق‌ترین محصولات، آن‌هایی هستند که از نیازهای واقعی کاربران نشأت می‌گیرند.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-rocket"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">تکرار سریع</h4>
                    <p className="mb-0">
                      بهتر است محصولی ساده اما کاربردی داشته باشیم تا محصولی پیچیده اما غیرقابل استفاده.
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
                    <h4 className="mb-1">قدرت تیم</h4>
                    <p className="mb-0">
                      هیچ فردی به تنهایی نمی‌تواند محصولی عالی بسازد. موفقیت نتیجه کار جمعی است.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-shield-check"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">کیفیت بر کمیت</h4>
                    <p className="mb-0">
                      بهتر است یک ویژگی عالی داشته باشیم تا ده ویژگی متوسط.
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
                      دنیای فناوری به سرعت در حال تغییر است و ما باید همیشه در حال یادگیری باشیم.
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
                    <h4 className="mb-1">اشتیاق به کار</h4>
                    <p className="mb-0">
                      وقتی کاری را که دوست داریم انجام می‌دهیم، کار تبدیل به لذت می‌شود.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== future vision ========== */}
        <section className="wrapper bg-gradient-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row text-center">
              <div className="col-lg-8 mx-auto">
                <h2 className="display-4 mb-4 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>نگاه به آینده</h2>
                <p className="lead fs-lg text-gray-600 opacity-90 mb-8" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  داستان ما هنوز ادامه دارد و هر روز فصل جدیدی به آن اضافه می‌شود. 
                  هدف ما این است که پارس آموز را به بزرگ‌ترین و بهترین پلتفرم مدیریت آموزشی 
                  در خاورمیانه تبدیل کنیم.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="/about-us" className="btn btn-white btn-lg rounded-pill">
                    بیشتر درباره ما بدانید
                  </a>
                  <a href="/contact" className="btn btn-outline-white btn-lg rounded-pill">
                    با ما همراه شوید
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
