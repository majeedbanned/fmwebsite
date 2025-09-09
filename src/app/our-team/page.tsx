// import type { Metadata } from "next";
'use client'
import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

// export const metadata: Metadata = {
//   title: "تیم پارس آموز - متخصصان توسعه سیستم‌های آموزشی",
//   description: "آشنایی با تیم متخصص و با تجربه پارس آموز. مدیران، توسعه‌دهندگان، طراحان و متخصصان پشتیبانی که پشت موفقیت سیستم مدیریت مدرسه آنلاین ایستاده‌اند.",
//   keywords: [
//     "تیم پارس آموز",
//     "متخصصان نرم افزار آموزشی",
//     "توسعه دهندگان پارس آموز",
//     "مدیران پارس آموز",
//     "کارشناسان سیستم مدیریت مدرسه"
//   ],
//   openGraph: {
//     title: "تیم پارس آموز - متخصصان توسعه سیستم‌های آموزشی",
//     description: "آشنایی با تیم متخصص و با تجربه پارس آموز",
//     url: "https://parsamooz.com/our-team",
//   }
// };

export default function OurTeam() {
  const teamMembers = [
    {
      name: "دکتر علی محمدی",
      position: "مدیرعامل و بنیانگذار",
      image: "/img/avatars/te1.jpg",
      description: "دکترای مهندسی کامپیوتر با بیش از ۱۵ سال تجربه در حوزه فناوری اطلاعات آموزشی",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "مهندس فاطمه احمدی",
      position: "مدیر فنی و توسعه",
      image: "/img/avatars/te2.jpg",
      description: "متخصص توسعه نرم‌افزار با تجربه گسترده در طراحی سیستم‌های مقیاس‌پذیر",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "مهندس حسین رضایی",
      position: "مدیر محصول",
      image: "/img/avatars/te3.jpg",
      description: "متخصص UX/UI و مدیریت محصول با تمرکز بر تجربه کاربری بهینه",
      social: {
        linkedin: "#",
        dribbble: "#"
      }
    },
    {
      name: "دکتر مریم کریمی",
      position: "مشاور آموزشی",
      image: "/img/avatars/te4.jpg",
      description: "دکترای علوم تربیتی و مشاور در طراحی سیستم‌های آموزشی مؤثر",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "مهندس امیر حسینی",
      position: "مدیر امنیت اطلاعات",
      image: "/img/avatars/te5.jpg",
      description: "متخصص امنیت سایبری و حفاظت از داده‌های حساس آموزشی",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "خانم زهرا موسوی",
      position: "مدیر پشتیبانی مشتریان",
      image: "/img/avatars/te6.jpg",
      description: "متخصص خدمات مشتریان با تجربه در ارائه پشتیبانی تخصصی ۲۴/۷",
      social: {
        linkedin: "#",
        twitter: "#"
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
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>تیم ما</h1>
                <p className="lead fs-lg mb-0 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  تیمی متخصص، خلاق و متعهد که با تجربه و دانش خود، آینده آموزش را می‌سازند
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== team intro ========== */}
        <section className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row mb-10">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-4">قدرت تیم، رمز موفقیت ما</h2>
                <p className="lead fs-lg mb-0">
                  در پارس آموز، ما بر این باوریم که موفقیت حاصل تلاش جمعی و همکاری تیمی است. 
                  تیم ما متشکل از متخصصان با تجربه در حوزه‌های مختلف فناوری، آموزش و مدیریت است 
                  که با اشتیاق و تعهد کامل، بهترین راه‌حل‌های آموزشی را برای شما فراهم می‌کنند.
                </p>
              </div>
            </div>

            <div className="row gy-6">
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                      <i className="uil uil-users-alt"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">تنوع تخصص‌ها</h4>
                    <p className="mb-0">
                      تیم ما شامل متخصصان برنامه‌نویسی، طراحی، آموزش، امنیت و پشتیبانی است
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
                    <h4 className="mb-1">تجربه عملی</h4>
                    <p className="mb-0">
                      اعضای تیم ما سال‌ها تجربه عملی در پروژه‌های بزرگ و موفق دارند
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
                      همه ما عاشق کاری هستیم که انجام می‌دهیم و این انگیزه در محصولات ما نمایان است
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== team members ========== */}
        {/* <section className="wrapper bg-gradient-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>اعضای کلیدی تیم</h2>
                <p className="lead fs-lg text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  آشنایی با افرادی که پشت موفقیت پارس آموز ایستاده‌اند
                </p>
              </div>
            </div>

            <div className="row gy-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-lg-6">
                  <div className="card bg-white border-0 shadow-lg">
                    <div className="card-body p-6">
                      <div className="d-flex flex-row align-items-center">
                        <div className="me-4">
                          <img
                            src={member.image}
                            className="rounded-circle"
                            alt={`${member.name} - ${member.position}`}
                            width="80"
                            height="80"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h4 className="mb-1">{member.name}</h4>
                          <div className="meta mb-2 text-muted">{member.position}</div>
                          <nav className="nav social">
                            {member.social.linkedin && (
                              <a href={member.social.linkedin} className="text-muted me-2">
                                <i className="uil uil-linkedin"></i>
                              </a>
                            )}
                            {member.social.twitter && (
                              <a href={member.social.twitter} className="text-muted me-2">
                                <i className="uil uil-twitter"></i>
                              </a>
                            )}
                            {member.social.github && (
                              <a href={member.social.github} className="text-muted me-2">
                                <i className="uil uil-github"></i>
                              </a>
                            )}
                            {member.social.dribbble && (
                              <a href={member.social.dribbble} className="text-muted">
                                <i className="uil uil-dribbble"></i>
                              </a>
                            )}
                          </nav>
                        </div>
                      </div>
                      <p className="mt-4 mb-0">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ========== join team section ========== */}
        <section className="wrapper bg-light rtl-content">
          <div className="container py-14 py-md-16">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3">به تیم ما بپیوندید</h2>
                <p className="lead fs-lg mb-6">
                  آیا شما هم علاقه‌مند به همکاری با یکی از پیشروترین تیم‌های توسعه نرم‌افزار آموزشی هستید؟
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="/careers" className="btn btn-primary btn-lg rounded-pill">
                    مشاهده فرصت‌های شغلی
                  </a>
                  <a href="/contact" className="btn btn-outline-primary btn-lg rounded-pill">
                    تماس با ما
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== culture section ========== */}
        <section className="wrapper bg-gradient-reverse-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>فرهنگ سازمانی ما</h2>
                <p className="lead fs-lg text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  محیط کاری ما بر پایه احترام، یادگیری و رشد متقابل بنا شده است
                </p>
              </div>
            </div>

            <div className="row gy-6 text-center">
              <div className="col-md-4">
                <div className="icon btn btn-circle btn-lg btn-white text-primary mx-auto mb-4">
                  <i className="uil uil-lightbulb-alt"></i>
                </div>
                <h4 className="text-gray-600 mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>خلاقیت و نوآوری</h4>
                <p className="text-gray-600 opacity-80" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  ما از ایده‌های نو استقبال می‌کنیم و محیطی فراهم کرده‌ایم که خلاقیت شکوفا شود
                </p>
              </div>
              <div className="col-md-4">
                <div className="icon btn btn-circle btn-lg btn-white text-primary mx-auto mb-4">
                  <i className="uil uil-balance-scale"></i>
                </div>
                <h4 className="text-gray-600 mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>تعادل کار و زندگی</h4>
                <p className="text-gray-600 opacity-80" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  ما معتقدیم که تعادل میان کار و زندگی شخصی کلید موفقیت پایدار است
                </p>
              </div>
              <div className="col-md-4">
                <div className="icon btn btn-circle btn-lg btn-white text-primary mx-auto mb-4">
                  <i className="uil uil-award"></i>
                </div>
                <h4 className="text-gray-600 mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>رشد و توسعه</h4>
                <p className="text-gray-600 opacity-80" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  ما در رشد حرفه‌ای اعضای تیم سرمایه‌گذاری می‌کنیم و فرصت‌های یادگیری فراهم می‌کنیم
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
