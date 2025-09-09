'use client'

import { Fragment, useState } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
  };

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
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>تماس با ما</h1>
                <p className="lead fs-lg mb-0 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  ما آماده پاسخگویی به سوالات و درخواست‌های شما هستیم
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row gy-10">
              <div className="col-lg-8">
                <div className="card bg-white border-0 shadow-lg">
                  <div className="card-body p-6 p-md-8">
                    <h2 className="display-6 mb-4" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>ارسال پیام</h2>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="row gy-4">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                            نام و نام خانوادگی *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", textAlign: 'right' }}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                            ایمیل *
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", textAlign: 'right' }}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                            شماره تماس
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", textAlign: 'right' }}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="subject" className="form-label" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                            موضوع
                          </label>
                          <select
                            className="form-select"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", textAlign: 'right' }}
                          >
                            <option value="">انتخاب کنید</option>
                            <option value="demo">درخواست دمو</option>
                            <option value="support">پشتیبانی فنی</option>
                            <option value="sales">فروش و مشاوره</option>
                            <option value="other">سایر موارد</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                            پیام شما *
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", textAlign: 'right' }}
                          />
                        </div>
                      </div>

                      <div className="text-center mt-6">
                        <button type="submit" className="btn btn-primary btn-lg rounded-pill px-6" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          ارسال پیام
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="row gy-6">
                  <div className="col-12">
                    <div className="card bg-white border-0 shadow-lg">
                      <div className="card-body p-6 text-center">
                        <div className="icon btn btn-circle btn-lg btn-soft-primary mx-auto mb-4">
                          <i className="uil uil-phone"></i>
                        </div>
                        <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>تماس تلفنی</h4>
                        <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          ۰۲۱-۲۲۳۳۴۴۵۵<br />
                          پشتیبانی ۲۴/۷
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card bg-white border-0 shadow-lg">
                      <div className="card-body p-6 text-center">
                        <div className="icon btn btn-circle btn-lg btn-soft-green mx-auto mb-4">
                          <i className="uil uil-envelope"></i>
                        </div>
                        <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>ایمیل</h4>
                        <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          info@parsamooz.com<br />
                          support@parsamooz.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card bg-white border-0 shadow-lg">
                      <div className="card-body p-6 text-center">
                        <div className="icon btn btn-circle btn-lg btn-soft-yellow mx-auto mb-4">
                          <i className="uil uil-map-marker"></i>
                        </div>
                        <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>آدرس</h4>
                        <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          تهران، خیابان ولیعصر<br />
                          برج میلاد، طبقه ۱۵
                        </p>
                      </div>
                    </div>
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
