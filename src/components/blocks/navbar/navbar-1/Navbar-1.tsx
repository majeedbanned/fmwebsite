"use client";

import { Fragment, memo, ReactElement, useRef } from "react";
import clsx from "clsx";
// -------- CUSTOM HOOKS -------- //
import useSticky from "hooks/useSticky";
import useNestedDropdown from "hooks/useNestedDropdown";
// -------- CUSTOM COMPONENTS -------- //
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// LOCAL CUSTOM COMPONENTS
import Info from "../components/Info";
import Search from "../components/search";
import Signin from "../components/signin";
import Signup from "../components/signup";
import MiniCart from "../components/mini-cart";
import HeaderRight from "../components/header-right";
import FancyHeader from "../components/fancy-header";
import BlogNavItem from "../components/blog-nav-item";
import DemosNavItem from "../components/demos-nav-item";
import PagesNavItem from "../components/pages-nav-item";
import BlocksNavItem from "../components/blocks-nav-item";
import ProjectsNavItem from "../components/projects-nav-item";
import DocumentationNavItem from "../components/documentation-nav-item";

// ===================================================================
interface NavbarProps {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
}
// ===================================================================

export default function NavbarOne({
  button,
  cart = false,
  info = false,
  fancy = false,
  social = false,
  search = false,
  language = false,
  stickyBox = true,
  logoAlt = "logo-dark",
  navOtherClass = "navbar-other w-100 d-flex ms-auto",
  navClassName = "navbar navbar-expand-lg center-nav transparent navbar-light"
}: NavbarProps) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? "logo-dark" : logoAlt;

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink href="/" title={<img alt="logo" src={`/img/${logo}.png`} srcSet={`/img/${logo}@2x.png 2x`} />} />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif" }}>پارس آ موز</h3>
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-auto"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", direction: 'rtl', textAlign: 'right' }}>
            {/* ===================== services nav item ===================== */}
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">خدمات</a>
              <ul className="dropdown-menu" style={{ direction: 'rtl', textAlign: 'right' }}>
                <li className="dropdown dropdown-submenu dropend">
                  <a href="#" className="dropdown-item dropdown-toggle" style={{ textAlign: 'right' }}>سیستم‌های مدیریت</a>
                  <ul className="dropdown-menu" style={{ direction: 'rtl', textAlign: 'right' }}>
                    <li><a className="dropdown-item" href="/initiation" style={{ textAlign: 'right' }} title="سیستم مدیریت پایه مدرسه - ثبت نام، مدیریت دانش آموزان و معلمان" aria-label="سیستم مدیریت پایه مدرسه">مدیریت پایه</a></li>
                    <li><a className="dropdown-item" href="/dashboard" style={{ textAlign: 'right' }} title="داشبورد هوشمند مدیریت مدرسه - آمار و گزارشات جامع" aria-label="داشبورد هوشمند مدیریت مدرسه">داشبورد هوشمند</a></li>
                  </ul>
                </li>
                <li className="dropdown dropdown-submenu dropend">
                  <a href="#" className="dropdown-item dropdown-toggle" style={{ textAlign: 'right' }}>ارزیابی و آزمون</a>
                  <ul className="dropdown-menu" style={{ direction: 'rtl', textAlign: 'right' }}>
                    <li><a className="dropdown-item" href="/onlineexam" style={{ textAlign: 'right' }} title="سیستم آزمون آنلاین - برگزاری آزمون دیجیتال و ارزیابی خودکار" aria-label="سیستم آزمون آنلاین">آزمون آنلاین</a></li>
                    <li><a className="dropdown-item" href="/questionbank" style={{ textAlign: 'right' }} title="بانک سوالات آزمون - مخزن سوالات تخصصی برای تمام دروس" aria-label="بانک سوالات آزمون">بانک سوالات</a></li>
                    <li><a className="dropdown-item" href="/gradingsystem" style={{ textAlign: 'right' }} title="سیستم نمره دهی هوشمند - محاسبه و ثبت نمرات خودکار" aria-label="سیستم نمره دهی هوشمند">نمره‌دهی</a></li>
                  </ul>
                </li>
                <li className="dropdown dropdown-submenu dropend">
                  <a href="#" className="dropdown-item dropdown-toggle" style={{ textAlign: 'right' }}>ارتباطات</a>
                  <ul className="dropdown-menu" style={{ direction: 'rtl', textAlign: 'right' }}>
                    <li><a className="dropdown-item" href="/communications" style={{ textAlign: 'right' }} title="سیستم پیام رسانی مدرسه - ارسال پیامک انبوه و اطلاع رسانی" aria-label="سیستم پیام رسانی مدرسه">پیام‌رسانی</a></li>
                    <li><a className="dropdown-item" href="/mychat" style={{ textAlign: 'right' }} title="چت آنلاین مدرسه - ارتباط فوری بین معلمان، دانش آموزان و والدین" aria-label="چت آنلاین مدرسه">چت مدرسه</a></li>
                    <li><a className="dropdown-item" href="/agenda" style={{ textAlign: 'right' }} title="تقویم مدرسه و مدیریت رویدادها - برنامه ریزی و یادآوری هوشمند" aria-label="تقویم مدرسه و مدیریت رویدادها">تقویم و رویدادها</a></li>
                  </ul>
                </li>
                <li className="dropdown dropdown-submenu dropend">
                  <a href="#" className="dropdown-item dropdown-toggle" style={{ textAlign: 'right' }}>گزارشات و ابزارها</a>
                  <ul className="dropdown-menu" style={{ direction: 'rtl', textAlign: 'right' }}>
                    <li><a className="dropdown-item" href="/classsheet" style={{ textAlign: 'right' }}>گزارش کلاسی</a></li>
                    <li><a className="dropdown-item" href="/monthlygrade" style={{ textAlign: 'right' }}>نمرات ماهانه</a></li>
                    <li><a className="dropdown-item" href="/tactivities" style={{ textAlign: 'right' }}>فعالیت‌های معلمان</a></li>
                    <li><a className="dropdown-item" href="/accounting" style={{ textAlign: 'right' }}>حسابداری</a></li>
                    <li><a className="dropdown-item" href="/fileexplorer" style={{ textAlign: 'right' }}>فایل اکسپلورر</a></li>
                  </ul>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/services-2" style={{ textAlign: 'right' }}>همه خدمات</a></li>
              </ul>
            </li>

            {/* ===================== about nav item ===================== */}
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">درباره ما</a>
              <ul className="dropdown-menu" style={{ direction: 'rtl', textAlign: 'right' }}>
                <li><a className="dropdown-item" href="/about-us" style={{ textAlign: 'right' }}>درباره پارس آ موز</a></li>
                <li><a className="dropdown-item" href="/our-team" style={{ textAlign: 'right' }}>تیم ما</a></li>
                <li><a className="dropdown-item" href="/our-story" style={{ textAlign: 'right' }}>داستان ما</a></li>
                <li><a className="dropdown-item" href="/careers" style={{ textAlign: 'right' }}>فرصت‌های شغلی</a></li>
              </ul>
            </li>

            {/* ===================== solutions nav item ===================== */}
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">راه‌حل‌ها</a>
              <ul className="dropdown-menu" style={{ direction: 'rtl', textAlign: 'right' }}>
                <li><a className="dropdown-item" href="/pricing" style={{ textAlign: 'right' }}>تعرفه‌ها</a></li>
                <li><a className="dropdown-item" href="/demo" style={{ textAlign: 'right' }}>درخواست دمو</a></li>
                <li><a className="dropdown-item" href="/case-studies" style={{ textAlign: 'right' }}>مطالعات موردی</a></li>
                <li><a className="dropdown-item" href="/integrations" style={{ textAlign: 'right' }}>یکپارچه‌سازی</a></li>
              </ul>
            </li>

            {/* ===================== support nav item ===================== */}
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">پشتیبانی</a>
              <ul className="dropdown-menu" style={{ direction: 'rtl', textAlign: 'right' }}>
                <li><a className="dropdown-item" href="/help-center" style={{ textAlign: 'right' }}>مرکز راهنمایی</a></li>
                <li><a className="dropdown-item" href="/documentation" style={{ textAlign: 'right' }}>مستندات</a></li>
                <li><a className="dropdown-item" href="/tutorials" style={{ textAlign: 'right' }}>آموزش‌ها</a></li>
                <li><a className="dropdown-item" href="/contact" style={{ textAlign: 'right' }}>تماس با ما</a></li>
              </ul>
            </li>

            {/* ===================== blog nav item ===================== */}
            <li className="nav-item">
              <a href="/blog" className="nav-link">وبلاگ</a>
            </li>
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none" style={{ fontFamily: "'IRANYekanX', 'Arial', sans-serif", direction: 'rtl' }}>
            <div>
              <NextLink title="info@parsamooz.com" className="link-inverse" href="mailto:info@parsamooz.com" />
              <br />
              <NextLink href="tel:+982122334455" title="۰۲۱-۲۲۳۳۴۴۵۵" />
              <br />
              <p className="text-white small mb-2">پشتیبانی ۲۴ ساعته</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <HeaderRight
        cart={cart}
        info={info}
        button={button}
        search={search}
        social={social}
        language={language}
        navOtherClass={navOtherClass}
      />
    </Fragment>
  );

  const navbarClassName = clsx(sticky ? navClassName.replace("navbar-dark", "navbar-light") : navClassName, {
    "navbar-clone fixed navbar-stick": sticky
  });

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={navbarClassName}>
        {fancy ? (
          <FancyHeader>{headerContent}</FancyHeader>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>

      {/* ============= signin modal ============= */}
      <Signin />

      {/* ============= signup modal ============= */}
      <Signup />

      {/* ============= info sidebar ============= */}
      {info && <Info />}

      {/* ============= show search box ============= */}
      {search && <Search />}

      {/* ============= cart sidebar ============= */}
      {cart && <MiniCart />}
    </Fragment>
  );
}
