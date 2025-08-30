// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// CUSTOM DATA
import footerNav, { helps, learnMore, services } from "data/footer";

export default function Footer8() {
  return (
    <footer className="bg-dark text-inverse" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", direction: 'rtl' }}>
      <div className="container py-13 py-md-15">
        <div className="row gy-6 gy-lg-0">
          {/* Brand and Company Info */}
          <div className="col-lg-3 col-md-6">
            <div className="widget">
              <img className="mb-4" src="/img/logo-light.png" srcSet="/img/logo-light@2x.png 2x" alt="پارس آ موز" />
              
              <h5 className="text-white mb-3">سیستم مدرسه آنلاین پارس آ موز</h5>
              <p className="mb-4 text-white opacity-80">
                راه‌حل کامل و یکپارچه برای مدیریت مدارس مدرن با بیش از ۱۴ سرویس تخصصی
              </p>

              <div className="d-flex align-items-center mb-3">
                <i className="uil uil-phone text-primary me-2"></i>
                <NextLink title="۰۲۱-۲۲۳۳۴۴۵۵" href="tel:+982122334455" className="text-white" />
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <i className="uil uil-envelope text-primary me-2"></i>
                <NextLink title="info@parsamooz.com" href="mailto:info@parsamooz.com" className="text-white" />
              </div>

              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          {/* Quick Services */}
          <div className="col-lg-2 col-md-6">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">خدمات اصلی</h4>
              <ul className="list-unstyled mb-0">
                {services.map(({ id, title, url }) => (
                  <li key={id} className="mb-2">
                    <NextLink title={title} href={url} className="text-white opacity-80 hover:opacity-100" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">شرکت</h4>
              <ul className="list-unstyled mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title} className="mb-2">
                    <NextLink title={title} href={url} className="text-white opacity-80 hover:opacity-100" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Help & Support */}
          <div className="col-lg-2 col-md-6">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">راهنمایی و پشتیبانی</h4>
              <ul className="list-unstyled mb-0">
                {helps.map(({ id, title, url }) => (
                  <li key={id} className="mb-2">
                    <NextLink title={title} href={url} className="text-white opacity-80 hover:opacity-100" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter and Contact */}
          <div className="col-lg-3 col-md-12">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">اطلاعیه‌ها و اخبار</h4>
              <p className="mb-4 text-white opacity-80">
                برای دریافت آخرین اخبار، به‌روزرسانی‌ها و پیشنهادات ویژه عضو شوید
              </p>

              <div className="newsletter-wrapper">
                <form className="validate dark-fields">
                  <div className="mc-field-group input-group form-floating">
                    <input
                      type="email"
                      name="EMAIL"
                      id="newsletter-email"
                      placeholder="آدرس ایمیل"
                      className="form-control"
                      style={{ direction: 'ltr', textAlign: 'left' }}
                    />
                    <label htmlFor="newsletter-email">آدرس ایمیل</label>
                    <button
                      type="submit"
                      className="btn btn-primary">
                      عضویت
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-4">
                <h6 className="text-white mb-2">ساعات پشتیبانی:</h6>
                <p className="text-white opacity-80 small mb-1">شنبه تا چهارشنبه: ۸:۰۰ - ۱۷:۰۰</p>
                <p className="text-white opacity-80 small mb-0">پنج‌شنبه: ۸:۰۰ - ۱۳:۰۰</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8 mb-6 border-white opacity-20" />
        
        {/* Bottom Footer */}
        <div className="row gy-4 align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-white opacity-70">
              © ۱۴۰۳ سیستم مدرسه آنلاین پارس آ موز. تمام حقوق محفوظ است.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end gap-4">
              <NextLink title="شرایط استفاده" href="/terms" className="text-white opacity-70 small" />
              <NextLink title="حریم خصوصی" href="/privacy" className="text-white opacity-70 small" />
              <NextLink title="قوانین" href="/rules" className="text-white opacity-70 small" />
            </div>
          </div>
        </div>

        {/* Certifications or Trust Badges */}
        <div className="row mt-6">
          <div className="col-12 text-center">
            <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
              <div className="d-flex align-items-center">
                <i className="uil uil-shield-check text-primary me-2"></i>
                <span className="text-white opacity-80 small">SSL محفوظ</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="uil uil-cloud-database-tree text-primary me-2"></i>
                <span className="text-white opacity-80 small">پشتیبان‌گیری ابری</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="uil uil-headphones-alt text-primary me-2"></i>
                <span className="text-white opacity-80 small">پشتیبانی ۲۴/۷</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="uil uil-award text-primary me-2"></i>
                <span className="text-white opacity-80 small">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
