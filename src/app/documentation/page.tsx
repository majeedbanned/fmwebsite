'use client'

import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

export default function Documentation() {
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
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مستندات</h1>
                <p className="lead fs-lg mb-0 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  راهنمای کامل و مستندات فنی برای استفاده از تمام امکانات پارس آموز
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row gy-6">
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body p-6 text-center">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary mx-auto mb-4">
                      <i className="uil uil-rocket"></i>
                    </div>
                    <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>راهنمای شروع</h4>
                    <p className="mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      مستندات کامل برای شروع کار و راه‌اندازی اولیه سیستم
                    </p>
                    <a href="#" className="btn btn-primary rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      مطالعه مستندات
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body p-6 text-center">
                    <div className="icon btn btn-circle btn-lg btn-soft-green mx-auto mb-4">
                      <i className="uil uil-code-branch"></i>
                    </div>
                    <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مستندات API</h4>
                    <p className="mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      راهنمای کامل API برای توسعه‌دهندگان و یکپارچه‌سازی
                    </p>
                    <a href="#" className="btn btn-green rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      مشاهده API
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body p-6 text-center">
                    <div className="icon btn btn-circle btn-lg btn-soft-yellow mx-auto mb-4">
                      <i className="uil uil-question-circle"></i>
                    </div>
                    <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>سوالات متداول</h4>
                    <p className="mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      پاسخ سوالات رایج و راه‌حل مشکلات متداول کاربران
                    </p>
                    <a href="/help-center" className="btn btn-yellow rounded-pill" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      مشاهده سوالات
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
