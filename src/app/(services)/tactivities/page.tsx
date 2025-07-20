"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { About5 } from "components/blocks/about";
import { Facts4 } from "components/blocks/facts";
import { Pricing2 } from "components/blocks/pricing";
import { Process4 } from "components/blocks/process";
import { Services9 } from "components/blocks/services";

// Teacher Activities System Overview Data
const teacherActivitiesOverview = `
سیستم پیگیری و تحلیل فعالیت‌های معلمان، ابزاری جامع و پیشرفته برای نظارت، ارزیابی و تحلیل عملکرد آموزشی معلمان در محیط مدرسه است. این سیستم با استفاده از تکنولوژی‌های مدرن، امکان پیگیری دقیق تمام فعالیت‌های آموزشی و تعاملات معلمان با دانش‌آموزان را فراهم می‌کند.

داشبورد خلاصه فعالیت‌ها (Summary Dashboard):
• شمارش کل فعالیت‌های هر معلم بر اساس نوع (نمرات، حضور و غیاب، ارزیابی‌ها، نظرات، رویدادها)
• شناسایی فعال‌ترین و کم‌فعال‌ترین معلمان در بازه زمانی مشخص
• محاسبه میانگین فعالیت‌های روزانه و ماهانه هر معلم
• نمایش معلمان با آخرین فعالیت‌های ثبت شده
• آمار کلی مشارکت معلمان در فرآیندهای آموزشی
• گزارش‌های تجمعی برای مدیریت مدرسه

رتبه‌بندی معلمان (Teacher Rankings):
• رتبه‌بندی بر اساس متریک‌های مختلف: کل فعالیت‌ها، تعداد نمرات ثبت شده، رکوردهای حضور و غیاب
• ارزیابی بر اساس تعداد ارزیابی‌های توصیفی، نظرات و رویدادهای ایجاد شده
• رتبه‌بندی بر مبنای تاریخ آخرین فعالیت و پوشش کلاسی
• شاخص پوشش دانش‌آموزان و میزان تعامل با آن‌ها
• نمودارهای مقایسه‌ای عملکرد معلمان
• امتیازدهی چندبعدی برای ارزیابی جامع

فعالیت تفصیلی معلمان (Detailed Teacher Activity):
• تفکیک فعالیت‌ها بر اساس کلاس‌ها و دروس تدریسی
• محاسبه درصد پوشش هر کلاس توسط معلم
• تایم‌لاین فعالیت‌های روزانه و هفتگی
• شمارش دقیق بر اساس نوع فعالیت (آموزشی، ارزیابی، مدیریتی)
• نمایش آمار تعامل با دانش‌آموزان مختلف
• گزارش عملکرد در دوره‌های زمانی متفاوت

تجسم و تحلیل فعالیت‌ها (Activity Visualization):
• نمودارهای روند فعالیت در طول زمان با قابلیت تنظیم بازه
• توزیع فعالیت‌ها بر اساس نوع و دسته‌بندی
• الگوهای فعالیت روزانه و شناسایی اوقات پرتردد
• آنالیز مقایسه‌ای بین معلمان مختلف
• پیش‌بینی روندهای فعالیت آینده
• گزارش‌های بصری برای ارائه به مدیریت

منابع داده و یکپارچگی:
• تحلیل داده‌ها از سوابق کلاس‌شیت (نمرات، حضور، ارزیابی‌ها، یادداشت‌ها)
• نظرات و بازخوردهای معلمان در سیستم
• رویدادها و فعالیت‌های ثبت شده
• اطلاعات ثبت‌نام کلاس‌ها و دانش‌آموزان
• همگام‌سازی با سایر ماژول‌های مدیریت مدرسه

این سیستم با ارائه گزارش‌های دقیق و تحلیل‌های علمی، به مدیران مدارس امکان تصمیم‌گیری آگاهانه برای بهبود کیفیت آموزش، توزیع بهینه منابع و تشویق معلمان فعال را می‌دهد. همچنین به معلمان نیز کمک می‌کند تا عملکرد خود را بهتر درک کرده و در مسیر بهبود مستمر قرار گیرند.
`;

const summaryFeatures = [
  {
    id: 1,
    title: "داشبورد خلاصه جامع",
    description: "نمای کلی از فعالیت‌های تمام معلمان با آمار و ارقام دقیق",
    features: [
      "شمارش کل فعالیت‌ها بر اساس نوع",
      "شناسایی فعال‌ترین معلمان",
      "محاسبه میانگین فعالیت‌ها",
      "نمایش معلمان با فعالیت اخیر",
      "آمار مشارکت در فرآیندهای آموزشی",
      "گزارش‌های تجمعی مدیریتی"
    ],
    icon: "uil-dashboard",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "آمار انواع فعالیت‌ها",
    description: "طبقه‌بندی و شمارش دقیق انواع مختلف فعالیت‌های آموزشی",
    features: [
      "ثبت نمرات و ارزیابی‌های کتبی",
      "رکوردهای حضور و غیاب",
      "ارزیابی‌های توصیفی و کیفی",
      "نظرات و بازخوردهای آموزشی",
      "رویدادهای کلاسی و مدرسه‌ای",
      "فعالیت‌های فوق‌برنامه"
    ],
    icon: "uil-chart-pie",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "شناسایی الگوهای فعالیت",
    description: "تشخیص الگوها و روندهای فعالیت معلمان در بازه‌های زمانی",
    features: [
      "تحلیل روندهای فعالیت روزانه",
      "شناسایی اوقات پرفعالیت",
      "الگوهای فعالیت هفتگی و ماهانه",
      "مقایسه عملکرد در دوره‌های مختلف",
      "پیش‌بینی روندهای آینده",
      "تشخیص کاهش یا افزایش فعالیت"
    ],
    icon: "uil-analysis",
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "گزارش‌گیری تخصصی",
    description: "تولید گزارش‌های تفصیلی و قابل تنظیم برای مدیریت",
    features: [
      "گزارش فعالیت در بازه زمانی دلخواه",
      "فیلترینگ بر اساس معلم خاص",
      "صادرات گزارش برای چاپ",
      "فرمت‌بندی حرفه‌ای گزارش‌ها",
      "آمار مقایسه‌ای بین معلمان",
      "گزارش‌های خلاصه برای مدیریت"
    ],
    icon: "uil-file-alt",
    color: "bg-orange-500"
  }
];

const rankingFeatures = [
  {
    id: 1,
    title: "رتبه‌بندی چندمعیاره",
    description: "ارزیابی و رتبه‌بندی معلمان بر اساس متریک‌های مختلف",
    features: [
      "رتبه‌بندی بر اساس کل فعالیت‌ها",
      "امتیازدهی تعداد نمرات ثبت شده",
      "ارزیابی رکوردهای حضور و غیاب",
      "امتیاز ارزیابی‌های توصیفی",
      "رتبه‌بندی نظرات و بازخوردها",
      "امتیازدهی رویدادهای ایجاد شده"
    ],
    icon: "uil-trophy",
    color: "bg-yellow-500"
  },
  {
    id: 2,
    title: "شاخص‌های عملکردی",
    description: "محاسبه شاخص‌های کلیدی عملکرد آموزشی",
    features: [
      "درصد پوشش کلاس‌های تحت تدریس",
      "شاخص تعامل با دانش‌آموزان",
      "نرخ فعالیت روزانه معلم",
      "تاریخ آخرین فعالیت ثبت شده",
      "میانگین فعالیت در هفته",
      "شاخص تنوع فعالیت‌های آموزشی"
    ],
    icon: "uil-graph-bar",
    color: "bg-indigo-500"
  },
  {
    id: 3,
    title: "مقایسه عملکرد",
    description: "ابزارهای مقایسه و تحلیل عملکرد نسبی معلمان",
    features: [
      "مقایسه با میانگین مدرسه",
      "رتبه در بین همکاران هم‌رشته",
      "مقایسه با دوره‌های قبلی",
      "نمودارهای مقایسه‌ای بصری",
      "شناسایی نقاط قوت و ضعف",
      "پیشنهادات بهبود عملکرد"
    ],
    icon: "uil-comparison",
    color: "bg-red-500"
  },
  {
    id: 4,
    title: "تحلیل روند عملکرد",
    description: "بررسی روند تغییرات عملکرد معلمان در طول زمان",
    features: [
      "نمودار روند فعالیت ماهانه",
      "تشخیص بهبود یا کاهش عملکرد",
      "مقایسه عملکرد فصلی",
      "پیش‌بینی روند آینده",
      "تحلیل فاکتورهای مؤثر",
      "گزارش پیشرفت شخصی"
    ],
    icon: "uil-chart-line",
    color: "bg-teal-500"
  }
];

const visualizationFeatures = [
  {
    title: "نمودارهای تعاملی",
    description: "ابزارهای بصری پیشرفته برای نمایش داده‌ها",
    benefits: ["نمودار خطی روندها", "نمودار دایره‌ای توزیع", "نمودار ستونی مقایسه", "هیت‌مپ فعالیت‌ها"]
  },
  {
    title: "فیلترینگ پیشرفته",
    description: "قابلیت فیلتر و جستجوی دقیق در داده‌ها",
    benefits: ["فیلتر بازه زمانی", "انتخاب معلم خاص", "فیلتر نوع فعالیت", "جستجوی پیشرفته"]
  },
  {
    title: "صادرات و چاپ",
    description: "امکان ذخیره و چاپ گزارش‌ها",
    benefits: ["صادرات PDF", "چاپ بهینه شده", "ذخیره تصاویر", "اشتراک‌گذاری آسان"]
  },
  {
    title: "واکنش‌گرایی",
    description: "طراحی متناسب با انواع دستگاه‌ها",
    benefits: ["نمایش موبایل", "رابط تبلت", "دسکتاپ کامل", "تطبیق خودکار"]
  }
];

const workflowSteps = [
  {
    step: "۱",
    title: "انتخاب بازه زمانی",
    description: "تعیین دوره زمانی مورد نظر برای تحلیل فعالیت‌ها",
    icon: "uil-calendar-alt",
    color: "primary",
    duration: "۳۰ ثانیه"
  },
  {
    step: "۲",
    title: "انتخاب معلم (اختیاری)",
    description: "فیلتر کردن گزارش‌ها برای معلم خاص یا نمایش همه",
    icon: "uil-user-check",
    color: "success",
    duration: "۱۵ ثانیه"
  },
  {
    step: "۳",
    title: "مشاهده تب‌های مختلف",
    description: "بررسی داده‌ها در بخش‌های خلاصه، رتبه‌بندی، جزئیات و نمودارها",
    icon: "uil-apps",
    color: "info",
    duration: "نامحدود"
  },
  {
    step: "۴",
    title: "تولید گزارش",
    description: "استفاده از دکمه چاپ برای تولید گزارش نهایی",
    icon: "uil-print",
    color: "warning",
    duration: "۱ دقیقه"
  }
];

const dataIntegrations = [
  {
    source: "سیستم کلاس‌شیت",
    description: "نمرات، حضور و غیاب، ارزیابی‌ها و یادداشت‌ها",
    icon: "uil-clipboard-notes",
    color: "bg-blue-600",
    items: ["نمرات کتبی و شفاهی", "حضور و غیاب روزانه", "ارزیابی‌های توصیفی", "یادداشت‌های کلاسی"]
  },
  {
    source: "سیستم مدیریت معلمان",
    description: "اطلاعات پروفایل و مشخصات معلمان",
    icon: "uil-graduation-cap",
    color: "bg-green-600",
    items: ["اطلاعات شخصی معلمان", "رشته‌های تدریس", "کلاس‌های تحت پوشش", "سابقه فعالیت"]
  },
  {
    source: "سیستم مدیریت کلاس‌ها",
    description: "اطلاعات کلاس‌ها و دانش‌آموزان",
    icon: "uil-building",
    color: "bg-purple-600",
    items: ["فهرست کلاس‌ها", "تعداد دانش‌آموزان", "برنامه درسی", "تقسیم‌بندی دروس"]
  },
  {
    source: "سیستم نظرات و رویدادها",
    description: "فعالیت‌های اضافی و تعاملات",
    icon: "uil-comments",
    color: "bg-orange-600",
    items: ["نظرات و بازخوردها", "رویدادهای کلاسی", "فعالیت‌های فوق‌برنامه", "ارتباطات والدین"]
  }
];

const benefits = [
  {
    title: "بهبود کیفیت آموزش",
    description: "شناسایی و تشویق معلمان فعال برای ارتقاء کیفیت",
    icon: "uil-award",
    stat: "۲۵٪"
  },
  {
    title: "مدیریت منابع",
    description: "توزیع بهینه کلاس‌ها و دروس بر اساس عملکرد",
    icon: "uil-balance-scale",
    stat: "هوشمند"
  },
  {
    title: "انگیزش معلمان",
    description: "ایجاد انگیزه از طریق رتبه‌بندی و تقدیر",
    icon: "uil-rocket",
    stat: "۴۰٪"
  },
  {
    title: "تصمیم‌گیری مبتنی بر داده",
    description: "استفاده از آمار دقیق برای تصمیمات مدیریتی",
    icon: "uil-brain",
    stat: "۱۰۰٪"
  }
];

const statistics = [
  {
    number: "۶",
    label: "نوع فعالیت تحت پیگیری",
    color: "bg-blue-500"
  },
  {
    number: "۴",
    label: "بخش تحلیلی جامع",
    color: "bg-green-500"
  },
  {
    number: "لحظه‌ای",
    label: "بروزرسانی اطلاعات",
    color: "bg-purple-500"
  },
  {
    number: "کامل",
    label: "یکپارچگی با سایر سیستم‌ها",
    color: "bg-orange-500"
  }
];

export default function TeacherActivitiesServices() {
  return (
    <Fragment>
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
        
        @font-face {
          font-family: 'IRANYekanX';
          src: url('/fonts/yekan/IRANYekanX-Medium.woff2') format('woff2'),
               url('/fonts/yekan/IRANYekanX-Medium.woff') format('woff');
          font-weight: 500;
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
        
        .rtl-content .text-left {
          text-align: right !important;
        }
        
        .persian-numbers {
          font-family: 'IRANYekanX', 'Arial', sans-serif;
        }

        .feature-card {
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .overview-text {
          line-height: 2;
          white-space: pre-line;
        }

        .analytics-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 25px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .analytics-demo:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .analytics-demo::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
          pointer-events: none;
        }

        .workflow-step {
          position: relative;
          padding: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .workflow-step:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .integration-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          border-left: 4px solid;
          transition: all 0.3s ease;
        }

        .integration-card:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">سیستم پیگیری و تحلیل فعالیت‌های معلمان</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                ابزار جامع
                <span className="underline"> نظارت، ارزیابی و تحلیل عملکرد آموزشی</span> معلمان با آنالیز پیشرفته
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== overview section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-12">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمای کلی سیستم</h2>
              <h3 className="display-4 mb-5">آشنایی جامع با سیستم پیگیری فعالیت‌های معلمان</h3>
            </div>
          </div>

          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="سیستم پیگیری و تحلیل فعالیت‌های معلمان" className="rounded shadow-lg" />
              </figure>
            </div>

            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {teacherActivitiesOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-dashboard fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">داشبورد خلاصه</h4>
                      <p className="mb-0">آمار کلی فعالیت‌ها</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-trophy fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">رتبه‌بندی معلمان</h4>
                      <p className="mb-0">چندمعیاره و دقیق</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-chart-line fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">تجسم فعالیت‌ها</h4>
                      <p className="mb-0">نمودارهای تعاملی</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-file-alt fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">گزارش‌گیری</h4>
                      <p className="mb-0">تخصصی و قابل چاپ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== summary features section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">داشبورد خلاصه</h2>
              <h3 className="display-4 mb-5">نمای کلی فعالیت‌های معلمان</h3>
              <p className="lead">ارائه آمار جامع و خلاصه‌ای از تمام فعالیت‌های آموزشی معلمان</p>
            </div>
          </div>

          <div className="row gy-8">
            {summaryFeatures.map((feature) => (
              <div className="col-lg-6" key={feature.id}>
                <div className="card h-100 feature-card border-0 shadow-lg">
                  <div className="card-body p-6">
                    <div className="d-flex align-items-center mb-4">
                      <div className={`${feature.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                           style={{ width: '60px', height: '60px' }}>
                        <i className={`${feature.icon} fs-24`}></i>
                      </div>
                      <h4 className="mb-0">{feature.title}</h4>
                    </div>
                    
                    <p className="text-muted mb-4">{feature.description}</p>
                    
                    <ul className="list-unstyled">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="uil uil-check text-success me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ranking features section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">رتبه‌بندی معلمان</h2>
              <h3 className="display-4 mb-5">سیستم جامع ارزیابی و رتبه‌بندی</h3>
              <p className="lead">ارزیابی چندبعدی معلمان بر اساس شاخص‌های مختلف عملکرد</p>
            </div>
          </div>

          <div className="row gy-8">
            {rankingFeatures.map((feature) => (
              <div className="col-lg-6" key={feature.id}>
                <div className="card h-100 feature-card border-0 shadow-lg">
                  <div className="card-body p-6">
                    <div className="d-flex align-items-center mb-4">
                      <div className={`${feature.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                           style={{ width: '60px', height: '60px' }}>
                        <i className={`${feature.icon} fs-24`}></i>
                      </div>
                      <h4 className="mb-0">{feature.title}</h4>
                    </div>
                    
                    <p className="text-muted mb-4">{feature.description}</p>
                    
                    <ul className="list-unstyled">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="uil uil-check text-success me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== data integration section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">منابع داده</h2>
              <h3 className="display-4 mb-5">یکپارچگی با سایر سیستم‌ها</h3>
              <p className="lead">جمع‌آوری و تحلیل داده‌ها از منابع مختلف سیستم مدرسه</p>
            </div>
          </div>

          <div className="row gy-6">
            {dataIntegrations.map((integration, index) => (
              <div className="col-lg-6" key={index}>
                <div className={`integration-card h-100`} style={{ borderLeftColor: integration.color.replace('bg-', '#').replace('-600', '') }}>
                  <div className="d-flex align-items-center mb-4">
                    <div className={`${integration.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                         style={{ width: '50px', height: '50px' }}>
                      <i className={`${integration.icon} fs-22`}></i>
                    </div>
                    <h5 className="mb-0">{integration.source}</h5>
                  </div>
                  
                  <p className="text-muted mb-4">{integration.description}</p>
                  
                  <ul className="list-unstyled">
                    {integration.items.map((item, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="uil uil-check text-success me-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== workflow section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">فرآیند کار</h2>
              <h3 className="display-4 mb-5">مراحل استفاده از سیستم تحلیل</h3>
              <p className="lead">راهنمای گام به گام برای دسترسی به تحلیل‌های مورد نیاز</p>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6">
            {workflowSteps.map((workflow, index) => (
              <div className="col-lg-6 col-xl-3" key={index}>
                <div className="workflow-step text-center h-100">
                  <div className={`bg-${workflow.color} text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center`} 
                       style={{ width: '80px', height: '80px' }}>
                    <i className={`${workflow.icon} fs-28`}></i>
                  </div>
                  <h5 className="mb-3">{workflow.step}. {workflow.title}</h5>
                  <p className="text-muted mb-3">{workflow.description}</p>
                  <div className="bg-soft-primary text-primary px-3 py-1 rounded-pill small">
                    زمان: {workflow.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== visualization features section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">ویژگی‌های تجسم</h2>
              <h3 className="display-4 mb-5">قابلیت‌های بصری‌سازی پیشرفته</h3>
            </div>
          </div>

          <div className="row gy-6">
            {visualizationFeatures.map((feature, index) => (
              <div className="col-lg-6" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-5">
                    <h5 className="card-title text-primary mb-3">{feature.title}</h5>
                    <p className="card-text mb-4">{feature.description}</p>
                    
          <div className="row">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="col-6 mb-2">
                          <small className="text-success">
                            <i className="uil uil-check-circle me-1"></i>
                            {benefit}
                          </small>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== benefits section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مزایای سیستم</h2>
              <h3 className="display-4 mb-5">چرا پیگیری فعالیت‌های معلمان؟</h3>
            </div>
          </div>

          <div className="row gy-6">
            {benefits.map((benefit, index) => (
              <div className="col-lg-3 col-md-6 text-center" key={index}>
                <div className="bg-white rounded-lg p-6 shadow-sm h-100">
                  <div className="bg-soft-primary rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className={`${benefit.icon} text-primary fs-28`}></i>
                  </div>
                  <h4 className="mb-3">{benefit.title}</h4>
                  <p className="text-muted mb-3">{benefit.description}</p>
                  <div className="bg-primary text-white rounded-pill px-3 py-1 persian-numbers">
                    {benefit.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== statistics section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">آمار و ارقام</h2>
              <h3 className="display-4 mb-5">قدرت سیستم در اعداد</h3>
            </div>
          </div>

          <div className="row gy-6">
            {statistics.map((stat, index) => (
              <div className="col-lg-3 col-md-6 text-center" key={index}>
                <div className={`${stat.color} text-white rounded-lg p-6 mx-auto mb-4`}>
                  <h2 className="counter text-white persian-numbers mb-2">{stat.number}</h2>
                  <p className="mb-0 text-white opacity-90">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== demo section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمایش سیستم</h2>
              <h3 className="display-4 mb-5">نگاهی به رابط کاربری</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-4">
              <div className="analytics-demo">
                <i className="uil uil-dashboard fs-40 mb-3"></i>
                <h5 className="mb-3">داشبورد خلاصه</h5>
                <p className="mb-0 small opacity-90">آمار کلی • معلمان فعال</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="analytics-demo">
                <i className="uil uil-trophy fs-40 mb-3"></i>
                <h5 className="mb-3">رتبه‌بندی</h5>
                <p className="mb-0 small opacity-90">چندمعیاره • مقایسه‌ای</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="analytics-demo">
                <i className="uil uil-chart-line fs-40 mb-3"></i>
                <h5 className="mb-3">تحلیل روند</h5>
                <p className="mb-0 small opacity-90">نمودارها • پیش‌بینی</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== call to action section ========== */}
      <section className="wrapper bg-primary text-white rtl-content">
        <div className="container py-14 py-md-16 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="display-4 mb-5 text-white">آماده تجربه سیستم پیگیری پیشرفته هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین امروز شروع کنید و از تحلیل‌های جامع فعالیت معلمان بهره‌مند شوید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/teacheractivities" className="btn btn-lg btn-white rounded-pill">
                  ورود به سیستم تحلیل
                </a>
                <a href="#features" className="btn btn-lg btn-outline-white rounded-pill">
                  مشاهده ویژگی‌ها
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
