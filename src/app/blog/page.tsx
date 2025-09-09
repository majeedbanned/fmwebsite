'use client'

import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "۱۰ نکته مهم برای مدیریت بهتر مدرسه در عصر دیجیتال",
      excerpt: "با پیشرفت تکنولوژی، مدیریت مدارس نیز دچار تحولات زیادی شده است. در این مقاله به ۱۰ نکته کلیدی می‌پردازیم...",
      image: "/img/blog/blog1.jpg",
      date: "۱۵ اسفند ۱۴۰۲",
      author: "دکتر علی محمدی",
      category: "مدیریت آموزشی",
      readTime: "۸ دقیقه"
    },
    {
      id: 2,
      title: "چگونه آزمون‌های آنلاین کیفیت آموزش را بهبود می‌بخشند؟",
      excerpt: "آزمون‌های آنلاین یکی از مهم‌ترین ابزارهای ارزیابی در نظام آموزش مدرن محسوب می‌شوند...",
      image: "/img/blog/blog2.jpg",
      date: "۱۰ اسفند ۱۴۰۲",
      author: "مهندس فاطمه احمدی",
      category: "فناوری آموزشی",
      readTime: "۶ دقیقه"
    },
    {
      id: 3,
      title: "اهمیت ارتباط مؤثر بین مدرسه و خانواده",
      excerpt: "ارتباط مناسب بین مدرسه و خانواده یکی از عوامل کلیدی موفقیت تحصیلی دانش‌آموزان است...",
      image: "/img/blog/blog3.jpg",
      date: "۵ اسفند ۱۴۰۲",
      author: "خانم مریم کریمی",
      category: "روانشناسی تربیتی",
      readTime: "۷ دقیقه"
    },
    {
      id: 4,
      title: "مزایای استفاده از سیستم‌های مدیریت یکپارچه در مدارس",
      excerpt: "سیستم‌های مدیریت یکپارچه می‌توانند فرآیندهای اداری و آموزشی را به طور قابل توجهی بهبود بخشند...",
      image: "/img/blog/blog4.jpg",
      date: "۲۸ بهمن ۱۴۰۲",
      author: "مهندس حسین رضایی",
      category: "سیستم‌های اطلاعاتی",
      readTime: "۱۰ دقیقه"
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

      <header className="wrapper bg-soft-primary">
        <Navbar logoAlt="logo-purple" navClassName="navbar navbar-expand-lg center-nav transparent navbar-light" />
      </header>

      <main className="content-wrapper rtl-content">
        <section className="wrapper bg-gradient-reverse-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>وبلاگ پارس آموز</h1>
                <p className="lead fs-lg mb-0 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  مقالات، نکات و راهنماهای کاربردی در حوزه مدیریت آموزشی و فناوری
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row gy-6">
              {blogPosts.map((post) => (
                <div key={post.id} className="col-lg-6">
                  <article className="card bg-white border-0 shadow-lg h-100">
                    <div className="card-img-top">
                      <img
                        src={post.image}
                        className="img-fluid"
                        alt={post.title}
                        loading="lazy"
                        width="400"
                        height="250"
                      />
                    </div>
                    <div className="card-body p-6">
                      <div className="d-flex align-items-center mb-3">
                        <span className="badge bg-soft-primary text-primary me-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          {post.category}
                        </span>
                        <small className="text-muted" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          {post.readTime} مطالعه
                        </small>
                      </div>
                      
                      <h4 className="mb-3" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                        <a href="#" className="text-dark text-decoration-none">
                          {post.title}
                        </a>
                      </h4>
                      
                      <p className="mb-4 text-muted" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                        {post.excerpt}
                      </p>
                      
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <small className="text-muted me-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                            {post.author}
                          </small>
                          <small className="text-muted" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                            {post.date}
                          </small>
                        </div>
                        <a href="#" className="btn btn-sm btn-outline-primary rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          ادامه مطلب
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a href="#" className="btn btn-primary btn-lg rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                مشاهده مقالات بیشتر
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer8 />
    </Fragment>
  );
}
