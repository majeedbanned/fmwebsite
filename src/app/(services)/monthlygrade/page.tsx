"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { About5 } from "components/blocks/about";
import { Facts4 } from "components/blocks/facts";
import { Pricing2 } from "components/blocks/pricing";
import { Process4 } from "components/blocks/process";
import { Services9 } from "components/blocks/services";

// Monthly Grading Systems Overview Data
const gradingSystemsOverview = `
سیستم‌های گزارش‌گیری و ارزیابی ماهانه، ابزارهای قدرتمند و جامعی برای پیگیری عملکرد تحصیلی دانش‌آموزان هستند که دو بخش اصلی شامل گزارش ماهانه نمرات و گزارش نمرات تمام دروس را در برمی‌گیرند. این سیستم‌ها به معلمان، مدیران و والدین امکان نظارت دقیق و مستمر بر پیشرفت آموزشی فراهم می‌کنند.

گزارش ماهانه نمرات (Monthly Grade Report):
• نمایش تفصیلی نمرات هر درس بر اساس معلم و کلاس انتخابی
• ثبت و پیگیری نمرات کتبی، شفاهی، عملکردی و ارزیابی‌های توصیفی
• سیستم وزن‌دهی برای انواع مختلف ارزیابی‌ها و آزمون‌ها
• پیگیری وضعیت حضور و غیاب دانش‌آموزان در کنار نمرات
• امکان ثبت یادداشت‌ها و توضیحات تکمیلی برای هر دانش‌آموز
• دسترسی نقش‌محور: معلمان فقط کلاس‌های خود، مدیران تمام کلاس‌ها
• تولید گزارش‌های تخصصی برای بازه‌های زمانی مشخص

گزارش نمرات تمام دروس (Monthly Grade Overall):
• نمایش جامع عملکرد دانش‌آموزان در تمام دروس به صورت یکجا
• محاسبه میانگین کلی و رتبه‌بندی دانش‌آموزان در کلاس
• ارزیابی‌های کیفی با سطوح: عالی، خوب، متوسط، ضعیف، بسیار ضعیف
• نمودارهای پیشرفت و مقایسه عملکرد در دروس مختلف
• شناسایی نقاط قوت و ضعف هر دانش‌آموز
• گزارش‌های تحلیلی برای مشاوره تحصیلی و برنامه‌ریزی آینده

ویژگی‌های مشترک هر دو سیستم:
• رابط کاربری فارسی با پشتیبانی کامل از تقویم شمسی
• امکان صادرات گزارش‌ها در فرمت اکسل برای آنالیز بیشتر
• قابلیت چاپ با بهینه‌سازی برای صفحات افقی و عمودی
• تبدیل خودکار اعداد به فارسی برای خوانایی بهتر
• سیستم فیلترینگ پیشرفته بر اساس کلاس، درس، معلم و بازه زمانی
• بک‌آپ خودکار داده‌ها و قابلیت بازیابی اطلاعات
• سطوح امنیتی مختلف برای محافظت از اطلاعات حساس دانش‌آموزان

این دو سیستم با یکدیگر یک مجموعه کامل برای ارزیابی و گزارش‌گیری تشکیل می‌دهند که از جزئی‌ترین نمرات تا جامع‌ترین تحلیل‌های عملکردی را پوشش می‌دهند و امکان تصمیم‌گیری آگاهانه در زمینه آموزشی را برای تمام ذینفعان فراهم می‌کنند.
`;

const monthlyGradeFeatures = [
  {
    id: 1,
    title: "گزارش تفصیلی درس‌محور",
    description: "ارائه جزئیات کامل نمرات و ارزیابی‌های هر درس به تفکیک معلم",
    features: [
      "انتخاب کلاس و معلم مورد نظر",
      "نمایش تاریخچه کامل نمرات",
      "ثبت نمرات کتبی، شفاهی و عملکردی",
      "یادداشت‌های توضیحی برای هر نمره",
      "پیگیری وضعیت حضور و غیاب",
      "تاریخ‌گذاری دقیق با تقویم شمسی"
    ],
    icon: "uil-clipboard-notes",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "سیستم ارزیابی‌های توصیفی",
    description: "ثبت و مدیریت ارزیابی‌های کیفی با سیستم وزن‌دهی پیشرفته",
    features: [
      "ارزیابی‌های عالی، خوب، متوسط، ضعیف",
      "وزن‌دهی برای انواع مختلف آزمون‌ها",
      "توضیحات تکمیلی برای هر ارزیابی",
      "تاریخ ثبت و ویرایش ارزیابی‌ها",
      "محاسبه میانگین وزنی",
      "پیشنهادات بهبود عملکرد"
    ],
    icon: "uil-star",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "کنترل دسترسی نقش‌محور",
    description: "مدیریت هوشمند دسترسی بر اساس نوع کاربر و مسئولیت‌ها",
    features: [
      "معلمان: دسترسی به کلاس‌های خود",
      "مدیران: نمایش تمام کلاس‌ها",
      "والدین: مشاهده فرزند خاص",
      "دانش‌آموزان: نمایش نمرات شخصی",
      "سطوح امنیتی مختلف",
      "ثبت تاریخچه دسترسی‌ها"
    ],
    icon: "uil-shield-check",
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "تولید گزارش‌های تخصصی",
    description: "ایجاد گزارش‌های دقیق و قابل تنظیم برای نیازهای مختلف",
    features: [
      "فیلترینگ بر اساس بازه زمانی",
      "انتخاب نوع نمرات و ارزیابی‌ها",
      "صادرات اکسل با فرمت‌بندی",
      "چاپ بهینه شده برای کاغذ",
      "نمودارهای تصویری پیشرفت",
      "آمار عملکرد کلاسی"
    ],
    icon: "uil-file-chart-line",
    color: "bg-orange-500"
  }
];

const overallGradeFeatures = [
  {
    id: 1,
    title: "نمای جامع عملکرد",
    description: "ارائه تصویر کلی از عملکرد دانش‌آموز در تمام دروس",
    features: [
      "نمایش تمام دروس در یک صفحه",
      "محاسبه میانگین کلی خودکار",
      "مقایسه عملکرد بین دروس مختلف",
      "شناسایی الگوهای پیشرفت",
      "نمودارهای مقایسه‌ای",
      "پیش‌بینی روند تحصیلی"
    ],
    icon: "uil-analytics",
    color: "bg-indigo-500"
  },
  {
    id: 2,
    title: "رتبه‌بندی و مقایسه",
    description: "سیستم رتبه‌بندی دقیق و مقایسه عملکرد با همکلاسی‌ها",
    features: [
      "رتبه کلاسی در هر درس",
      "رتبه کلی در مجموع دروس",
      "درصدک عملکرد دانش‌آموز",
      "مقایسه با میانگین کلاس",
      "نمودار توزیع نمرات",
      "شناسایی دانش‌آموزان برتر"
    ],
    icon: "uil-trophy",
    color: "bg-yellow-500"
  },
  {
    id: 3,
    title: "تحلیل نقاط قوت و ضعف",
    description: "شناسایی هوشمند توانایی‌ها و زمینه‌های نیازمند بهبود",
    features: [
      "تشخیص دروس قوی و ضعیف",
      "پیشنهاد برنامه مطالعاتی",
      "راهکارهای بهبود عملکرد",
      "مشاوره تحصیلی هدفمند",
      "برنامه‌ریزی آینده تحصیلی",
      "ارجاع به متخصصان در صورت نیاز"
    ],
    icon: "uil-brain",
    color: "bg-red-500"
  },
  {
    id: 4,
    title: "گزارش‌های تحلیلی پیشرفته",
    description: "تولید گزارش‌های علمی و تحلیلی برای تصمیم‌گیری‌های آموزشی",
    features: [
      "آنالیز روند پیشرفت ماهانه",
      "پیش‌بینی عملکرد ترم آینده",
      "شناسایی الگوهای یادگیری",
      "گزارش برای مشاوران تحصیلی",
      "آمار و ارقام کلی کلاس",
      "مقایسه با استانداردهای ملی"
    ],
    icon: "uil-chart-pie",
    color: "bg-teal-500"
  }
];

const technicalFeatures = [
  {
    title: "پشتیبانی کامل از فارسی",
    description: "طراحی اختصاصی برای محیط آموزشی ایران",
    benefits: ["تقویم شمسی", "اعداد فارسی", "راست‌چین", "فونت مناسب"]
  },
  {
    title: "صادرات و چاپ",
    description: "امکان صادرات و چاپ با کیفیت بالا",
    benefits: ["فرمت اکسل", "بهینه‌سازی چاپ", "حفظ رنگ‌ها", "صفحه افقی"]
  },
  {
    title: "امنیت و پشتیبان‌گیری",
    description: "حفاظت از اطلاعات حساس دانش‌آموزان",
    benefits: ["رمزگذاری داده‌ها", "بک‌آپ خودکار", "ثبت تاریخچه", "کنترل دسترسی"]
  },
  {
    title: "عملکرد بالا",
    description: "پردازش سریع حجم بالای داده‌ها",
    benefits: ["بارگذاری سریع", "فیلترینگ لحظه‌ای", "محاسبات پیچیده", "رابط روان"]
  }
];

const workflowSteps = [
  {
    step: "۱",
    title: "انتخاب کلاس و درس",
    description: "انتخاب کلاس، معلم و درس مورد نظر برای مشاهده گزارش",
    icon: "uil-class",
    color: "primary",
    duration: "۳۰ ثانیه"
  },
  {
    step: "۲",
    title: "تنظیم فیلترها",
    description: "تعیین بازه زمانی، نوع نمرات و سایر فیلترهای مورد نیاز",
    icon: "uil-filter",
    color: "success", 
    duration: "۱ دقیقه"
  },
  {
    step: "۳",
    title: "مشاهده گزارش",
    description: "نمایش اطلاعات با قابلیت مرتب‌سازی و جستجو در داده‌ها",
    icon: "uil-eye",
    color: "info",
    duration: "نامحدود"
  },
  {
    step: "۴",
    title: "صادرات یا چاپ",
    description: "ذخیره گزارش در فرمت اکسل یا چاپ مستقیم با فرمت بهینه",
    icon: "uil-print",
    color: "warning", 
    duration: "۱ دقیقه"
  }
];

const gradingLevels = [
  {
    level: "عالی",
    range: "۱۸-۲۰",
    description: "عملکرد فوق‌العاده و تسلط کامل بر مطالب",
    color: "bg-green-600",
    weight: "+۲"
  },
  {
    level: "خوب", 
    range: "۱۵-۱۷.۹۹",
    description: "عملکرد مطلوب و یادگیری مناسب",
    color: "bg-blue-600",
    weight: "+۱"
  },
  {
    level: "متوسط",
    range: "۱۲-۱۴.۹۹", 
    description: "عملکرد قابل قبول نیازمند بهبود",
    color: "bg-yellow-600",
    weight: "۰"
  },
  {
    level: "ضعیف",
    range: "۱۰-۱۱.۹۹",
    description: "عملکرد نامطلوب نیازمند توجه ویژه",
    color: "bg-orange-600",
    weight: "-۱"
  },
  {
    level: "بسیار ضعیف",
    range: "زیر ۱۰",
    description: "عملکرد غیرقابل قبول نیاز به بازنگری",
    color: "bg-red-600",
    weight: "-۲"
  }
];

const benefits = [
  {
    title: "شفافیت کامل",
    description: "دسترسی همه ذینفعان به اطلاعات دقیق و به‌روز",
    icon: "uil-eye",
    stat: "۱۰۰٪"
  },
  {
    title: "تصمیم‌گیری آگاهانه",
    description: "ارائه داده‌های دقیق برای برنامه‌ریزی آموزشی",
    icon: "uil-brain",
    stat: "هوشمند"
  },
  {
    title: "صرفه‌جویی زمان",
    description: "کاهش زمان تهیه گزارش از ساعت‌ها به دقایق",
    icon: "uil-clock",
    stat: "۹۵٪"
  },
  {
    title: "دقت بالا",
    description: "حذف خطاهای انسانی در محاسبات و گزارش‌ها",
    icon: "uil-bullseye",
    stat: "۹۹.۹٪"
  }
];

const statistics = [
  {
    number: "۲",
    label: "سیستم گزارش‌گیری تخصصی",
    color: "bg-blue-500"
  },
  {
    number: "۵",
    label: "سطح ارزیابی کیفی",
    color: "bg-green-500"
  },
  {
    number: "۱۰۰٪",
    label: "سازگاری با تقویم شمسی",
    color: "bg-purple-500"
  },
  {
    number: "لحظه‌ای",
    label: "بروزرسانی اطلاعات",
    color: "bg-orange-500"
  }
];

export default function MonthlyGradeServices() {
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

        .grading-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 25px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .grading-demo:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .grading-demo::before {
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

        .grading-level {
          background: white;
          border-radius: 10px;
          padding: 20px;
          border-left: 4px solid;
          transition: all 0.3s ease;
        }

        .grading-level:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">سیستم‌های ارزیابی و گزارش‌گیری ماهانه</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                ابزارهای پیشرفته
                <span className="underline"> ارزیابی عملکرد و تولید گزارش‌های تفصیلی</span> برای پیگیری پیشرفت تحصیلی
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
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمای کلی سیستم‌ها</h2>
              <h3 className="display-4 mb-5">آشنایی جامع با سیستم‌های ارزیابی ماهانه</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="سیستم‌های ارزیابی و گزارش‌گیری ماهانه" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {gradingSystemsOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-clipboard-notes fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">گزارش ماهانه نمرات</h4>
                      <p className="mb-0">تفصیلی و درس‌محور</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-analytics fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">گزارش نمرات تمام دروس</h4>
                      <p className="mb-0">جامع و تحلیلی</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-file-chart-line fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">صادرات و چاپ</h4>
                      <p className="mb-0">اکسل و PDF بهینه</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-shield-check fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">کنترل دسترسی</h4>
                      <p className="mb-0">نقش‌محور و امن</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== monthly grade features section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">گزارش ماهانه نمرات</h2>
              <h3 className="display-4 mb-5">سیستم تفصیلی گزارش‌گیری درس‌محور</h3>
              <p className="lead">ارائه جزئیات کامل نمرات و ارزیابی‌ها در هر درس با امکانات پیشرفته</p>
            </div>
          </div>

          <div className="row gy-8">
            {monthlyGradeFeatures.map((feature) => (
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

      {/* ========== overall grade features section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">گزارش نمرات تمام دروس</h2>
              <h3 className="display-4 mb-5">سیستم جامع نمایش عملکرد کلی</h3>
              <p className="lead">ارائه تصویر کامل از عملکرد دانش‌آموز در تمام دروس با تحلیل‌های پیشرفته</p>
            </div>
          </div>

          <div className="row gy-8">
            {overallGradeFeatures.map((feature) => (
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

      {/* ========== grading levels section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">سطوح ارزیابی</h2>
              <h3 className="display-4 mb-5">سیستم وزن‌دهی و ارزیابی کیفی</h3>
              <p className="lead">۵ سطح ارزیابی با وزن‌های مختلف برای تحلیل دقیق عملکرد</p>
            </div>
          </div>

          <div className="row gy-6">
            {gradingLevels.map((level, index) => (
              <div className="col-lg-4" key={index}>
                <div className={`grading-level h-100`} style={{ borderLeftColor: level.color.replace('bg-', '#').replace('-600', ''), borderLeftWidth: '4px' }}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">{level.level}</h5>
                    <span className={`${level.color} text-white px-3 py-1 rounded-pill persian-numbers`}>
                      وزن: {level.weight}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-muted small">دامنه نمرات: </span>
                    <span className="persian-numbers font-bold">{level.range}</span>
                  </div>
                  
                  <p className="text-muted mb-0">{level.description}</p>
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
              <h3 className="display-4 mb-5">مراحل استفاده از سیستم‌های گزارش‌گیری</h3>
              <p className="lead">راهنمای گام به گام برای دسترسی به گزارش‌های مورد نیاز</p>
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

      {/* ========== technical features section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">ویژگی‌های فنی</h2>
              <h3 className="display-4 mb-5">قابلیت‌های تکنیکی پیشرفته</h3>
            </div>
          </div>

          <div className="row gy-6">
            {technicalFeatures.map((feature, index) => (
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
              <h3 className="display-4 mb-5">چرا سیستم‌های ارزیابی ماهانه؟</h3>
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
              <h3 className="display-4 mb-5">قدرت سیستم‌ها در اعداد</h3>
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
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمایش سیستم‌ها</h2>
              <h3 className="display-4 mb-5">نگاهی به رابط کاربری</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-6">
              <div className="grading-demo">
                <i className="uil uil-clipboard-notes fs-40 mb-3"></i>
                <h5 className="mb-3">گزارش ماهانه نمرات</h5>
                <p className="mb-0 small opacity-90">تفصیلی • درس‌محور • قابل فیلتر</p>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="grading-demo">
                <i className="uil uil-analytics fs-40 mb-3"></i>
                <h5 className="mb-3">گزارش نمرات تمام دروس</h5>
                <p className="mb-0 small opacity-90">جامع • تحلیلی • مقایسه‌ای</p>
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
              <h3 className="display-4 mb-5 text-white">آماده تجربه سیستم‌های ارزیابی پیشرفته هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین امروز شروع کنید و از گزارش‌گیری دقیق و جامع بهره‌مند شوید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/monthlygrade" className="btn btn-lg btn-white rounded-pill">
                  گزارش ماهانه نمرات
                </a>
                <a href="/admin/monthlygradeoverall" className="btn btn-lg btn-outline-white rounded-pill">
                  گزارش تمام دروس
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
