'use client'

import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

export default function Tutorials() {
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
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>آموزش‌های ویدیویی</h1>
                <p className="lead fs-lg mb-0 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  یادگیری گام به گام استفاده از پارس آموز با ویدیوهای آموزشی تخصصی
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row gy-6">
              <div className="col-lg-6">
                <div className="card bg-white border-0 shadow-lg">
                  <div className="card-body p-6">
                    <div className="d-flex align-items-center mb-4">
                      <div className="icon btn btn-circle btn-lg btn-soft-primary me-4">
                        <i className="uil uil-play-circle"></i>
                      </div>
                      <div>
                        <h4 className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>شروع کار با پارس آموز</h4>
                        <small className="text-muted" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مدت: ۱۵ دقیقه</small>
                      </div>
                    </div>
                    <p className="mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      آموزش کامل راه‌اندازی اولیه سیستم و تنظیمات پایه
                    </p>
                    <a href="#" className="btn btn-primary rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      تماشای ویدیو
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card bg-white border-0 shadow-lg">
                  <div className="card-body p-6">
                    <div className="d-flex align-items-center mb-4">
                      <div className="icon btn btn-circle btn-lg btn-soft-green me-4">
                        <i className="uil uil-users-alt"></i>
                      </div>
                      <div>
                        <h4 className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مدیریت دانش‌آموزان</h4>
                        <small className="text-muted" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مدت: ۲۰ دقیقه</small>
                      </div>
                    </div>
                    <p className="mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      نحوه ثبت‌نام، مدیریت اطلاعات و گروه‌بندی دانش‌آموزان
                    </p>
                    <a href="#" className="btn btn-green rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      تماشای ویدیو
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer8 />
    </Fragment>
  );
}
