"use client";

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from "components/blocks/facts";
import { Banner3 } from "components/blocks/banner";
import { Pricing1 } from "components/blocks/pricing";
import { Contact3 } from "components/blocks/contact";
import { Process6 } from "components/blocks/process";
import { Services8 } from "components/blocks/services";

// Accounting System Overview Data
const accountingSystemOverview = `
سامانه حسابداری و مدیریت مالی پارس آموز، سیستم جامع و یکپارچه‌ای برای مدیریت تمام تراکنش‌های مالی، ثبت درآمدها و هزینه‌ها، پیگیری بدهی‌ها و تولید گزارش‌های مالی تفصیلی مدرسه است. این سیستم با ترکیب دو بخش اصلی "حسابداری" و "گزارش‌گیری مالی"، امکان مدیریت کامل امور مالی از کوچک‌ترین تراکنش تا جامع‌ترین گزارش‌های مدیریتی را فراهم می‌کند.

مدیریت تراکنش‌های مالی (Financial Transaction Management):
• ثبت تراکنش‌های فردی برای دانش‌آموزان و معلمان با اطلاعات کامل
• سیستم تراکنش‌های دسته‌جمعی برای کلاس‌ها و گروه‌های مختلف
• پشتیبانی از انواع تراکنش‌های بدهکاری (شهریه، کتاب، امتحان، غذا) و بستانکاری (حقوق، پاداش، بورسیه)
• مدیریت روش‌های مختلف پرداخت شامل نقدی، بانکی، حواله، چک، کارتی و بورسیه
• ثبت شماره فیش، شماره مرجع بانکی و مدارک پشتیبان برای هر تراکنش
• امکان ویرایش و حذف تراکنش‌ها توسط مدیران با حفظ تاریخچه کامل
• اعتبارسنجی خودکار مبالغ و اطلاعات ورودی برای جلوگیری از خطاهای انسانی
• تاریخ‌گذاری دقیق با تقویم شمسی و قابلیت جستجوی تاریخی

انتخاب و مدیریت اشخاص (Person Selection & Management):
• سیستم جستجوی پیشرفته برای یافتن دانش‌آموزان و معلمان بر اساس نام، کد و کلاس
• نمایش اطلاعات کامل شخص شامل نام، کد، نوع (دانش‌آموز/معلم) و کلاس‌های مربوطه
• خودکارسازی انتخاب برای کاربران دانش‌آموز و معلم (انتخاب خودکار خودشان)
• فیلترینگ بر اساس کلاس، رشته تحصیلی و وضعیت تحصیلی
• امکان تغییر سریع بین اشخاص مختلف بدون از دست دادن اطلاعات جلسه
• نمایش خلاصه مالی هر شخص شامل مجموع بدهی، بستانکاری و تراز حساب
• پیگیری تاریخچه کامل تراکنش‌های هر فرد با امکان مرتب‌سازی و فیلتر
• ارتباط مستقیم با سیستم مدیریت دانش‌آموزان و معلمان

مدیریت اسناد و مدارک (Document Management):
• آپلود فایل‌های پشتیبان برای هر تراکنش شامل فیش‌ها، رسیدها و قراردادها
• پشتیبانی از فرمت‌های مختلف فایل شامل PDF، تصاویر (JPG, PNG) و فایل‌های متنی
• سیستم ذخیره‌سازی ایمن با رمزنگاری کامل اطلاعات
• امکان مشاهده، دانلود و حذف اسناد با کنترل دسترسی مناسب
• تشخیص خودکار نوع فایل و نمایش پیش‌نمایش مناسب
• محدودیت اندازه فایل قابل تنظیم توسط مدیر سیستم
• سیستم آرشیو خودکار با امکان بازیابی آسان اسناد
• ثبت تاریخچه کامل عملیات انجام شده روی هر سند

کنترل دسترسی و امنیت (Access Control & Security):
• مدیران مدرسه: دسترسی کامل به تمام تراکنش‌ها، ثبت، ویرایش، حذف و گزارش‌گیری
• معلمان: مشاهده تراکنش‌های مالی شخصی خود و دریافت گزارش‌های مربوطه
• دانش‌آموزان: دسترسی به تراکنش‌های شخصی، مشاهده تراز حساب و تاریخچه پرداخت‌ها
• والدین: دسترسی به اطلاعات مالی فرزندان و دریافت گزارش‌های پرداختی
• رمزنگاری کامل اطلاعات مالی حساس و محافظت از حریم خصوصی
• ثبت کامل لاگ‌های دسترسی و عملیات انجام شده توسط هر کاربر
• سیستم احراز هویت دوعاملی برای تراکنش‌های مالی مهم
• تنظیمات مجوز انعطاف‌پذیر برای سطوح مختلف دسترسی

گزارش‌گیری مالی جامع (Comprehensive Financial Reporting):
• داشبورد مالی لحظه‌ای با نمایش کلیه آمار و ارقام مهم مالی
• تحلیل درآمدها و هزینه‌ها با نمودارهای بصری و قابل فهم
• گزارش روندهای ماهانه و سالانه با تحلیل مقایسه‌ای
• تحلیل دسته‌بندی تراکنش‌ها و شناسایی منابع اصلی درآمد و هزینه
• گزارش روش‌های پرداخت و میزان استفاده از هر روش
• پیگیری بدهی‌های معوق و شناسایی بدهکاران پرریسک
• تحلیل عملکرد مالی هر کلاس و مقایسه آن‌ها با یکدیگر
• محاسبه شاخص‌های مالی کلیدی مانند نرخ وصولی و متوسط تراکنش

تحلیل‌های پیشرفته مالی (Advanced Financial Analytics):
• صورت سود و زیان خودکار با محاسبه سود/زیان خالص
• تحلیل جریان نقدینگی و پیش‌بینی نیازهای مالی آینده
• محاسبه شاخص‌های عملکرد مالی مانند درآمد هر دانش‌آموز و هزینه هر معلم
• نمودارهای مقایسه‌ای درآمد و هزینه در بازه‌های زمانی مختلف
• تحلیل فصلی و تشخیص الگوهای پرداخت و دریافت
• پیگیری بازده مالی و محاسبه نرخ بازگشت سرمایه
• گزارش‌های تخصصی برای ارائه به مسئولان و سهامداران
• پیش‌بینی مالی بر اساس روندهای تاریخی و الگوهای موجود

صادرات و ادغام اطلاعات (Data Export & Integration):
• صادرات گزارش‌ها به فرمت‌های مختلف شامل Excel، PDF و CSV
• قابلیت چاپ گزارش‌های مالی با قالب‌بندی حرفه‌ای
• ادغام با نرم‌افزارهای حسابداری خارجی و سیستم‌های بانکی
• تولید فایل‌های ورودی برای سیستم‌های حسابداری استاندارد
• پشتیبان‌گیری خودکار از اطلاعات مالی با رمزنگاری کامل
• امکان وارد کردن اطلاعات از سیستم‌های قدیمی و فایل‌های Excel
• سازگاری با استانداردهای حسابداری ایران و قوانین مالیاتی
• ارتباط مستقیم با سیستم‌های پرداخت آنلاین و درگاه‌های بانکی

ویژگی‌های تخصصی و کاربردی (Specialized Features):
• سیستم هشدارهای هوشمند برای بدهی‌های سررسید و پرداخت‌های عقب‌افتاده
• محاسبه خودکار جریمه‌های تأخیر و کارمزدهای بانکی
• مدیریت بورسیه‌ها و کمک‌های هزینه تحصیلی
• سیستم اقساط و تقسیط هزینه‌ها با پیگیری خودکار
• مدیریت صندوق‌های داخلی مدرسه و پیگیری نقدینگی
• تنظیم یادآوری‌های خودکار برای پرداخت‌های آتی
• سیستم تسویه حساب پایان سال تحصیلی
• مدیریت هزینه‌های اضافی و فعالیت‌های فوق‌برنامه

رابط کاربری و تجربه کاربری (User Interface & Experience):
• طراحی واکنش‌گرا و بهینه شده برای تمام دستگاه‌ها (دسکتاپ، تبلت، موبایل)
• پشتیبانی کامل از زبان فارسی با طراحی راست به چپ (RTL)
• رابط کاربری ساده و قابل فهم برای کاربران غیرمتخصص
• کیبوردشورت‌های کاربردی برای تسریع عملیات روزانه (F1 برای راهنما)
• سیستم راهنمای جامع داخلی با آموزش‌های تصویری
• تم‌های مختلف رنگی قابل تنظیم توسط کاربر
• انیمیشن‌های نرم و زیبا برای بهبود تجربه کاربری
• پشتیبانی از عملیات کلیدی به صورت آفلاین با همگام‌سازی خودکار

این سیستم جامع حسابداری و مدیریت مالی، ابزاری ضروری و قدرتمند برای مدیریت مؤثر امور مالی مدارس محسوب می‌شود که با ارائه کنترل دقیق بر تراکنش‌ها، گزارش‌گیری هوشمند، تحلیل‌های عمیق مالی و امکانات پیشرفته مدیریتی، به مدیران کمک می‌کند تا تصمیمات مالی آگاهانه‌تری اتخاذ کنند. با تأکید بر امنیت، شفافیت و قابلیت استفاده، این سیستم پاسخگوی نیازهای مالی پیچیده و متنوع مؤسسات آموزشی از کوچک‌ترین مدارس تا بزرگ‌ترین مجتمع‌های آموزشی است.
`;

const coreFeatures = [
  {
    id: 1,
    title: "مدیریت تراکنش‌های مالی",
    description: "ثبت و مدیریت کامل تراکنش‌های فردی و دسته‌جمعی",
    features: [
      "ثبت تراکنش‌های فردی و گروهی",
      "پشتیبانی از انواع بدهکاری و بستانکاری",
      "مدیریت روش‌های مختلف پرداخت",
      "ثبت شماره فیش و مرجع بانکی",
      "اعتبارسنجی خودکار مبالغ",
      "تاریخ‌گذاری دقیق با تقویم شمسی"
    ],
    icon: "uil-credit-card",
    color: "bg-blue-500",
    link: "/admin/accounting"
  },
  {
    id: 2,
    title: "گزارش‌گیری مالی پیشرفته",
    description: "تولید گزارش‌های جامع و تحلیل‌های مالی تفصیلی",
    features: [
      "داشبورد مالی لحظه‌ای",
      "تحلیل درآمدها و هزینه‌ها",
      "گزارش روندهای ماهانه",
      "تحلیل دسته‌بندی تراکنش‌ها",
      "پیگیری بدهی‌های معوق",
      "صورت سود و زیان خودکار"
    ],
    icon: "uil-chart-line",
    color: "bg-green-500",
    link: "/admin/accountantreport"
  },
  {
    id: 3,
    title: "مدیریت اسناد و مدارک",
    description: "آپلود و نگهداری اسناد پشتیبان تراکنش‌ها",
    features: [
      "آپلود فایل‌های پشتیبان",
      "پشتیبانی از فرمت‌های مختلف",
      "ذخیره‌سازی ایمن با رمزنگاری",
      "مشاهده و دانلود اسناد",
      "سیستم آرشیو خودکار",
      "ثبت تاریخچه عملیات"
    ],
    icon: "uil-file-alt",
    color: "bg-purple-500",
    link: "/admin/accounting"
  },
  {
    id: 4,
    title: "کنترل دسترسی امن",
    description: "مدیریت دسترسی‌ها بر اساس نقش کاربری",
    features: [
      "دسترسی کامل برای مدیران",
      "مشاهده محدود برای معلمان",
      "دسترسی شخصی برای دانش‌آموزان",
      "رمزنگاری اطلاعات حساس",
      "ثبت لاگ‌های دسترسی",
      "احراز هویت دوعاملی"
    ],
    icon: "uil-shield-check",
    color: "bg-orange-500",
    link: "/admin/accounting"
  }
];

const transactionTypes = [
  {
    title: "تراکنش‌های بدهکاری",
    description: "مبالغی که باید پرداخت شوند",
    examples: ["پرداخت شهریه ماهانه", "خرید کتاب و لوازم التحریر", "هزینه‌های امتحانات", "هزینه غذا و بوفه", "کارمزد خدمات اضافی", "هزینه‌های فوق‌برنامه"],
    icon: "uil-minus-circle",
    color: "bg-red-600"
  },
  {
    title: "تراکنش‌های بستانکاری",
    description: "مبالغی که دریافت شده",
    examples: ["پرداخت حقوق معلمان", "پاداش و جایزه", "کمک هزینه تحصیلی", "بازگشت وجه", "درآمد از فعالیت‌های جانبی", "سود سرمایه‌گذاری"],
    icon: "uil-plus-circle",
    color: "bg-green-600"
  },
  {
    title: "روش‌های پرداخت",
    description: "انواع روش‌های انجام تراکنش",
    examples: ["پرداخت نقدی", "انتقال بانکی", "حواله پستی", "چک بانکی", "پرداخت کارتی", "بورسیه و کمک‌هزینه"],
    icon: "uil-wallet",
    color: "bg-blue-600"
  },
  {
    title: "دسته‌بندی تراکنش‌ها",
    description: "طبقه‌بندی تراکنش‌ها برای گزارش‌گیری",
    examples: ["آموزش و تدریس", "امور اداری و مدیریت", "تغذیه و رفاه", "فرهنگی و ورزشی", "تعمیرات و نگهداری", "تجهیزات و ملزومات"],
    icon: "uil-tags",
    color: "bg-purple-600"
  }
];

const userRoles = [
  {
    role: "مدیران مدرسه",
    description: "کنترل کامل بر تمام عملیات مالی و گزارش‌گیری",
    permissions: ["ثبت و ویرایش تمام تراکنش‌ها", "حذف تراکنش‌ها", "مشاهده گزارش‌های کامل", "مدیریت دسترسی‌ها", "صادرات گزارش‌ها", "تنظیم پارامترهای مالی"],
    icon: "uil-crown",
    color: "bg-purple-600"
  },
  {
    role: "معلمان",
    description: "دسترسی به اطلاعات مالی شخصی و گزارش‌های مربوطه",
    permissions: ["مشاهده تراکنش‌های شخصی", "دانلود گزارش حقوق", "مشاهده تاریخچه پرداخت‌ها", "دریافت گزارش‌های مالی", "مشاهده جزئیات حساب", "درخواست تسویه حساب"],
    icon: "uil-graduation-cap",
    color: "bg-blue-600"
  },
  {
    role: "دانش‌آموزان",
    description: "مشاهده وضعیت مالی شخصی و تراکنش‌های مربوطه",
    permissions: ["مشاهده تراز حساب شخصی", "مشاهده تاریخچه پرداخت‌ها", "دانلود صورتحساب", "مشاهده بدهی‌ها", "دریافت فاکتور", "پیگیری وضعیت پرداخت"],
    icon: "uil-book-reader",
    color: "bg-green-600"
  },
  {
    role: "والدین",
    description: "اطلاع از وضعیت مالی فرزندان و پرداخت‌ها",
    permissions: ["مشاهده هزینه‌های فرزندان", "دریافت صورتحساب", "مشاهده بدهی‌ها", "پیگیری پرداخت‌ها", "دریافت یادآوری‌ها", "مشاهده گزارش مالی"],
    icon: "uil-home",
    color: "bg-orange-600"
  }
];

const systemWorkflow = [
  {
    step: "۱",
    title: "انتخاب شخص",
    description: "انتخاب دانش‌آموز یا معلم برای ثبت تراکنش",
    icon: "uil-user-check",
    color: "primary",
    duration: "۳۰ ثانیه"
  },
  {
    step: "۲",
    title: "ثبت تراکنش",
    description: "وارد کردن جزئیات تراکنش مالی",
    icon: "uil-edit",
    color: "success",
    duration: "۲ دقیقه"
  },
  {
    step: "۳",
    title: "آپلود مدارک",
    description: "ضمیمه کردن اسناد پشتیبان",
    icon: "uil-upload",
    color: "info",
    duration: "۱ دقیقه"
  },
  {
    step: "۴",
    title: "تأیید و ذخیره",
    description: "بررسی نهایی و ثبت در سیستم",
    icon: "uil-check-circle",
    color: "warning",
    duration: "۱۰ ثانیه"
  }
];

const reportingFeatures = [
  {
    id: 1,
    title: "داشبورد مالی",
    description: "نمای کلی لحظه‌ای از وضعیت مالی",
    features: [
      "آمار کلی درآمد و هزینه",
      "تعداد کل تراکنش‌ها",
      "متوسط مبلغ تراکنش‌ها",
      "نرخ وصولی مطالبات",
      "نمودارهای بصری",
      "شاخص‌های عملکرد"
    ],
    icon: "uil-dashboard",
    color: "bg-indigo-500"
  },
  {
    id: 2,
    title: "تحلیل روندها",
    description: "بررسی روندهای مالی در طول زمان",
    features: [
      "گزارش ماهانه و سالانه",
      "مقایسه دوره‌ای",
      "نمودار جریان نقدی",
      "پیش‌بینی مالی",
      "تحلیل فصلی",
      "شناسایی الگوها"
    ],
    icon: "uil-graph-bar",
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "گزارش دسته‌بندی‌ها",
    description: "تحلیل تراکنش‌ها بر اساس دسته‌بندی",
    features: [
      "تفکیک درآمد و هزینه",
      "تحلیل هر دسته",
      "مقایسه دسته‌ها",
      "درصد هر دسته از کل",
      "گزارش تفصیلی",
      "نمودار دایره‌ای"
    ],
    icon: "uil-layers",
    color: "bg-red-500"
  },
  {
    id: 4,
    title: "مدیریت بدهی‌ها",
    description: "پیگیری و مدیریت مطالبات معوق",
    features: [
      "فهرست بدهکاران",
      "روزهای گذشته از سررسید",
      "اولویت‌بندی بدهی‌ها",
      "یادآوری خودکار",
      "گزارش وصولی",
      "تحلیل ریسک"
    ],
    icon: "uil-exclamation-triangle",
    color: "bg-yellow-500"
  }
];

const benefits = [
  {
    title: "شفافیت مالی",
    description: "کنترل کامل بر جریان‌های مالی",
    icon: "uil-eye",
    stat: "۱۰۰٪"
  },
  {
    title: "کاهش خطا",
    description: "حذف خطاهای انسانی در محاسبات",
    icon: "uil-shield-check",
    stat: "۹۵٪"
  },
  {
    title: "صرفه‌جویی زمان",
    description: "تسریع فرآیندهای مالی",
    icon: "uil-clock",
    stat: "۸۰٪"
  },
  {
    title: "بهبود گزارش‌گیری",
    description: "گزارش‌های دقیق و به‌موقع",
    icon: "uil-chart-bar",
    stat: "۹۰٪"
  }
];

const statistics = [
  {
    number: "۱۰+",
    label: "نوع تراکنش پشتیبانی شده",
    color: "bg-blue-500"
  },
  {
    number: "۷",
    label: "روش پرداخت مختلف",
    color: "bg-green-500"
  },
  {
    number: "نامحدود",
    label: "ظرفیت ذخیره‌سازی تراکنش",
    color: "bg-purple-500"
  },
  {
    number: "لحظه‌ای",
    label: "به‌روزرسانی گزارش‌ها",
    color: "bg-orange-500"
  }
];

export default function AccountingServices() {
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

        .accounting-demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 25px;
          color: white;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .accounting-demo:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .accounting-demo::before {
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

        .role-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          border-left: 4px solid;
          transition: all 0.3s ease;
        }

        .role-card:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .transaction-type {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border-top: 3px solid #3b82f6;
        }

        .transaction-type:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .financial-card {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border-radius: 12px;
          padding: 20px;
          color: white;
          transition: all 0.3s ease;
        }

        .financial-card:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(240, 147, 251, 0.3);
        }
      `}</style>

      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary rtl-content">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-11">
              <h1 className="display-1 mb-3">سامانه حسابداری مدرسه</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                سیستم جامع
                <span className="underline"> مدیریت مالی و حسابداری</span> برای مؤسسات آموزشی
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
              <h3 className="display-4 mb-5">آشنایی جامع با سامانه حسابداری</h3>
            </div>
          </div>
          
          <div className="row gy-10 align-items-center">
            <div className="col-lg-6">
              <figure>
                <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="سامانه حسابداری پارس آموز" className="rounded shadow-lg" />
              </figure>
            </div>
            
            <div className="col-lg-6">
              <div className="overview-text text-gray-700 mb-6">
                {accountingSystemOverview}
              </div>
              
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-credit-card fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">مدیریت تراکنش‌ها</h4>
                      <p className="mb-0">ثبت و پیگیری کامل</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-chart-line fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">گزارش‌گیری</h4>
                      <p className="mb-0">تحلیل‌های پیشرفته</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6">
                  <div className="d-flex">
                    <div className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <i className="uil uil-file-alt fs-26"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">مدیریت اسناد</h4>
                      <p className="mb-0">ذخیره امن مدارک</p>
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
                      <p className="mb-0">امنیت و حریم خصوصی</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== core features section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">قابلیت‌های اصلی</h2>
              <h3 className="display-4 mb-5">ویژگی‌های کلیدی سامانه حسابداری</h3>
              <p className="lead">ابزارهای کامل مدیریت مالی و حسابداری</p>
            </div>
          </div>

          <div className="row gy-8">
            {coreFeatures.map((feature) => (
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
                    
                    <ul className="list-unstyled mb-4">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="uil uil-check text-success me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center">
                      <a href={feature.link} className="btn btn-soft-primary rounded-pill">
                        ورود به سیستم
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== transaction types section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">انواع تراکنش‌ها</h2>
              <h3 className="display-4 mb-5">دسته‌بندی تراکنش‌های مالی</h3>
              <p className="lead">مدیریت انواع مختلف عملیات مالی</p>
            </div>
          </div>

          <div className="row gy-6">
            {transactionTypes.map((type, index) => (
              <div className="col-lg-6" key={index}>
                <div className="transaction-type h-100">
                  <div className="d-flex align-items-center mb-4">
                    <div className={`${type.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                         style={{ width: '50px', height: '50px' }}>
                      <i className={`${type.icon} fs-22`}></i>
                    </div>
                    <h5 className="mb-0">{type.title}</h5>
                  </div>
                  
                  <p className="text-muted mb-4">{type.description}</p>
                  
                  <ul className="list-unstyled">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="uil uil-arrow-left text-primary me-2"></i>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== user roles section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نقش‌های کاربری</h2>
              <h3 className="display-4 mb-5">سطوح دسترسی مختلف کاربران</h3>
              <p className="lead">مجوزها و امکانات هر گروه کاربری</p>
            </div>
          </div>

          <div className="row gy-6">
            {userRoles.map((role, index) => (
              <div className="col-lg-6" key={index}>
                <div className={`role-card h-100`} style={{ borderLeftColor: role.color.replace('bg-', '#').replace('-600', '') }}>
                  <div className="d-flex align-items-center mb-4">
                    <div className={`${role.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} 
                         style={{ width: '50px', height: '50px' }}>
                      <i className={`${role.icon} fs-22`}></i>
                    </div>
                    <h5 className="mb-0">{role.role}</h5>
                  </div>
                  
                  <p className="text-muted mb-4">{role.description}</p>
                  
                  <ul className="list-unstyled">
                    {role.permissions.map((permission, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="uil uil-check text-success me-2"></i>
                        {permission}
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
              <h3 className="display-4 mb-5">مراحل ثبت تراکنش مالی</h3>
              <p className="lead">راهنمای گام به گام ثبت تراکنش</p>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6">
            {systemWorkflow.map((workflow, index) => (
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

      {/* ========== reporting features section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">گزارش‌گیری پیشرفته</h2>
              <h3 className="display-4 mb-5">ابزارهای تحلیل و گزارش مالی</h3>
              <p className="lead">تحلیل‌های عمیق از عملکرد مالی</p>
            </div>
          </div>

          <div className="row gy-8">
            {reportingFeatures.map((feature) => (
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

      {/* ========== demo section ========== */}
      <section className="wrapper bg-light rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">نمایش سیستم</h2>
              <h3 className="display-4 mb-5">دسترسی به سامانه حسابداری</h3>
            </div>
          </div>

          <div className="row gy-6">
            <div className="col-lg-6">
              <div className="accounting-demo">
                <i className="uil uil-credit-card fs-40 mb-3"></i>
                <h5 className="mb-3">مدیریت تراکنش‌ها</h5>
                <p className="mb-3 small opacity-90">ثبت • ویرایش • مشاهده</p>
                <a href="/admin/accounting" className="btn btn-white btn-sm rounded-pill">ورود</a>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="accounting-demo">
                <i className="uil uil-chart-line fs-40 mb-3"></i>
                <h5 className="mb-3">گزارش‌گیری مالی</h5>
                <p className="mb-3 small opacity-90">تحلیل • آمار • صادرات</p>
                <a href="/admin/accountantreport" className="btn btn-white btn-sm rounded-pill">ورود</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== benefits section ========== */}
      <section className="wrapper bg-gray rtl-content">
        <div className="container py-14 py-md-16">
          <div className="row text-center mb-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">مزایای سیستم</h2>
              <h3 className="display-4 mb-5">چرا سامانه حسابداری پارس آموز؟</h3>
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
      <section className="wrapper bg-light rtl-content">
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

      {/* ========== call to action section ========== */}
      <section className="wrapper bg-primary text-white rtl-content">
        <div className="container py-14 py-md-16 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="display-4 mb-5 text-white">آماده شروع مدیریت مالی هوشمند هستید؟</h3>
              <p className="lead mb-6 text-white opacity-75">
                همین امروز از قدرت سامانه حسابداری پیشرفته پارس آموز استفاده کنید
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/admin/accounting" className="btn btn-lg btn-white rounded-pill">
                  ورود به حسابداری
                </a>
                <a href="/admin/accountantreport" className="btn btn-lg btn-outline-white rounded-pill">
                  مشاهده گزارش‌ها
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
