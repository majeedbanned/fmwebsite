'use client'

import { Fragment, useState } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer8 } from "components/blocks/footer";

export default function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    studentCount: '',
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
    // Handle form submission here
    console.log('Demo request:', formData);
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
                <h1 className="display-1 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>درخواست دمو رایگان</h1>
                <p className="lead fs-lg mb-6 text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  ۳۰ روز دمو کامل و رایگان از پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران
                </p>
                <a href="#demo-form" className="btn btn-primary btn-lg rounded-pill">
                  شروع دمو رایگان
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========== demo features ========== */}
        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>چه چیزی در دمو دریافت می‌کنید؟</h2>
                <p className="lead fs-lg" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  دسترسی کامل به تمام امکانات و ویژگی‌های سیستم برای ۳۰ روز
                </p>
              </div>
            </div>

            <div className="row gy-6">
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body text-center p-6">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary mx-auto mb-4">
                      <i className="uil uil-users-alt"></i>
                    </div>
                    <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>دسترسی کامل</h4>
                    <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      به تمام ۱۴+ سرویس و امکانات سیستم دسترسی خواهید داشت
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body text-center p-6">
                    <div className="icon btn btn-circle btn-lg btn-soft-green mx-auto mb-4">
                      <i className="uil uil-headphones-alt"></i>
                    </div>
                    <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>پشتیبانی اختصاصی</h4>
                    <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      تیم پشتیبانی ما در طول دوره دمو در خدمت شما خواهد بود
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body text-center p-6">
                    <div className="icon btn btn-circle btn-lg btn-soft-yellow mx-auto mb-4">
                      <i className="uil uil-graduation-cap"></i>
                    </div>
                    <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>آموزش رایگان</h4>
                    <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      جلسات آموزشی آنلاین برای آشنایی با تمام قابلیت‌ها
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== demo form ========== */}
        <section id="demo-form" className="wrapper bg-gradient-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card bg-white border-0 shadow-lg">
                  <div className="card-body p-6 p-md-8">
                    <div className="text-center mb-6">
                      <h2 className="display-5 mb-3" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>فرم درخواست دمو</h2>
                      <p className="lead mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                        اطلاعات خود را وارد کنید تا در کمتر از ۲۴ ساعت دمو شما آماده شود
                      </p>
                    </div>

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
                            شماره تماس *
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", textAlign: 'right' }}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="schoolName" className="form-label" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                            نام مدرسه/مؤسسه *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="schoolName"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleInputChange}
                            required
                            style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", textAlign: 'right' }}
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="studentCount" className="form-label" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                            تعداد دانش‌آموزان
                          </label>
                          <select
                            className="form-select"
                            id="studentCount"
                            name="studentCount"
                            value={formData.studentCount}
                            onChange={handleInputChange}
                            style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", textAlign: 'right' }}
                          >
                            <option value="">انتخاب کنید</option>
                            <option value="1-50">۱ تا ۵۰ نفر</option>
                            <option value="51-100">۵۱ تا ۱۰۰ نفر</option>
                            <option value="101-300">۱۰۱ تا ۳۰۰ نفر</option>
                            <option value="301-500">۳۰۱ تا ۵۰۰ نفر</option>
                            <option value="500+">بیش از ۵۰۰ نفر</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                            توضیحات اضافی
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="نیازهای خاص یا سوالات خود را بنویسید..."
                            style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", textAlign: 'right' }}
                          />
                        </div>
                      </div>

                      <div className="text-center mt-6">
                        <button type="submit" className="btn btn-primary btn-lg rounded-pill px-6" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                          درخواست دمو رایگان
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== process steps ========== */}
        <section className="wrapper bg-light rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مراحل دریافت دمو</h2>
                <p className="lead fs-lg" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  فرآیند ساده و سریع برای شروع استفاده از سیستم
                </p>
              </div>
            </div>

            <div className="row gy-6 text-center">
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-primary mx-auto mb-4">
                  <span className="fs-20 fw-bold" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>۱</span>
                </div>
                <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>تکمیل فرم</h4>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>اطلاعات خود را در فرم بالا وارد کنید</p>
              </div>
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-primary mx-auto mb-4">
                  <span className="fs-20 fw-bold" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>۲</span>
                </div>
                <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>تماس تیم ما</h4>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>در کمتر از ۴ ساعت با شما تماس می‌گیریم</p>
              </div>
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-primary mx-auto mb-4">
                  <span className="fs-20 fw-bold" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>۳</span>
                </div>
                <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>راه‌اندازی دمو</h4>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>دمو اختصاصی شما در کمتر از ۲۴ ساعت آماده می‌شود</p>
              </div>
              <div className="col-md-3">
                <div className="icon btn btn-circle btn-lg btn-primary mx-auto mb-4">
                  <span className="fs-20 fw-bold" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>۴</span>
                </div>
                <h4 className="mb-2" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>شروع استفاده</h4>
                <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>۳۰ روز استفاده کامل و رایگان از سیستم</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== testimonials ========== */}
        <section className="wrapper bg-gradient-reverse-primary rtl-content" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-3 text-gray-600" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>نظرات مدیران مدارس</h2>
                <p className="lead fs-lg text-gray-600 opacity-90" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                  تجربه مدیران مدارس از استفاده از دمو پارس آموز
                </p>
              </div>
            </div>

            <div className="row gy-6">
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body p-6">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="/img/avatars/te1.jpg"
                        className="rounded-circle me-3"
                        alt="مدیر مدرسه"
                        width="50"
                        height="50"
                        loading="lazy"
                      />
                      <div>
                        <h5 className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>آقای احمدی</h5>
                        <small className="text-muted" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مدیر مدرسه شهید بهشتی</small>
                      </div>
                    </div>
                    <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      "دمو ۳۰ روزه به ما کمک کرد تا تمام جزئیات سیستم را بررسی کنیم. واقعاً فوق‌العاده بود!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body p-6">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="/img/avatars/te2.jpg"
                        className="rounded-circle me-3"
                        alt="مدیر مدرسه"
                        width="50"
                        height="50"
                        loading="lazy"
                      />
                      <div>
                        <h5 className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>خانم رضایی</h5>
                        <small className="text-muted" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مدیر مدرسه فاطمیه</small>
                      </div>
                    </div>
                    <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      "پشتیبانی تیم پارس آموز در طول دوره دمو عالی بود. همه سوالات ما پاسخ داده شد."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-white border-0 shadow-lg h-100">
                  <div className="card-body p-6">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="/img/avatars/te3.jpg"
                        className="rounded-circle me-3"
                        alt="مدیر مدرسه"
                        width="50"
                        height="50"
                        loading="lazy"
                      />
                      <div>
                        <h5 className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>آقای موسوی</h5>
                        <small className="text-muted" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>مدیر مجتمع آموزشی امام علی</small>
                      </div>
                    </div>
                    <p className="mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>
                      "بعد از تست دمو، بلافاصله تصمیم گرفتیم که از سیستم پارس آموز استفاده کنیم."
                    </p>
                  </div>
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
