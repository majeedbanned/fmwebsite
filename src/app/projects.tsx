"use client";

import Link from "next/link";
// GLOBAL CUSTOM HOOKS
import useIsotope from "hooks/useIsotope";

// School software comprehensive services data in Farsi
const filterList = [

  { id: 2, title: 'مدیریت پایه', value: '.management' },
  { id: 3, title: 'ارزیابی و آزمون', value: '.assessment' },
  { id: 4, title: 'ارتباطات', value: '.communication' },
  { id: 5, title: 'گزارشات', value: '.reports' },
  { id: 6, title: 'مالی و حسابداری', value: '.financial' },
  { id: 7, title: 'ابزارها', value: '.tools' }
];

const schoolServices = [
  // Management Systems
  { id: 1, image: 'dc1', title: 'سیستم‌های مدیریت پایه', category: 'management', link: '/initiation', description: 'مدیریت دانش‌آموزان، معلمان و کلاس‌ها' },
  { id: 2, image: 'dc2', title: 'داشبورد هوشمند', category: 'management', link: '/dashboard', description: 'داشبورد شخصی‌سازی شده با ویجت‌های تعاملی' },
  
  // Assessment & Education
  { id: 3, image: 'dc3', title: 'آزمون آنلاین', category: 'assessment', link: '/onlineexam', description: 'سیستم جامع برگزاری آزمون‌های الکترونیکی' },
  { id: 4, image: 'dc4', title: 'بانک سوالات', category: 'assessment', link: '/questionbank', description: 'مدیریت و طبقه‌بندی هزاران سوال' },
  { id: 5, image: 'dc5', title: 'نمره‌دهی و کارنامه', category: 'assessment', link: '/gradingsystem', description: 'سیستم هوشمند ثبت نمرات و تولید کارنامه' },
  
  // Communication Systems
  { id: 6, image: 'dc6', title: 'سامانه ارتباطات', category: 'communication', link: '/communications', description: 'پیام‌رسانی، اعلان‌ها و پیامک انبوه' },
  { id: 7, image: 'dc7', title: 'چت مدرسه', category: 'communication', link: '/mychat', description: 'گفتگوی لحظه‌ای با امکانات پیشرفته' },
  { id: 8, image: 'dc8', title: 'تقویم و رویدادها', category: 'communication', link: '/agenda', description: 'مدیریت کامل برنامه‌ها و رویدادها' },
  
  // Reports & Analytics
  { id: 9, image: 'dc9', title: 'گزارش کلاسی', category: 'reports', link: '/classsheet', description: 'گزارشات جامع عملکرد کلاس‌ها' },
  { id: 10, image: 'dc10', title: 'نمرات ماهانه', category: 'reports', link: '/monthlygrade', description: 'تحلیل نمرات و پیشرفت ماهانه' },
  { id: 11, image: 'dc11', title: 'فعالیت‌های معلمان', category: 'reports', link: '/tactivities', description: 'پیگیری و ارزیابی فعالیت‌های آموزشی' },
  
  // Financial Management
  { id: 12, image: 'dc12', title: 'سیستم حسابداری', category: 'financial', link: '/accounting', description: 'مدیریت کامل امور مالی و حسابداری' },
  
  // Additional Tools
  { id: 13, image: 'dc13', title: 'فایل اکسپلورر', category: 'tools', link: '/fileexplorer', description: 'مدیریت فایل‌ها و منابع آموزشی' },
  { id: 14, image: 'dc14', title: 'خدمات جانبی', category: 'tools', link: '/services-2', description: 'سایر ابزارها و امکانات تخصصی' }
];

export default function Projects() {
  // used for demo filtering and masonry layout
  const { filterKey, handleFilterKeyChange } = useIsotope();

  return (
    <div className="grid grid-view projects-masonry" style={{ 
      fontFamily: "'IRANYekanX', 'Arial', sans-serif", 
      direction: 'rtl' 
    }}>
      <div className="isotope-filter filter mb-10 text-start text-md-center">
        <p>فیلتر بر اساس دسته‌بندی:</p>
        <ul>
          {filterList.map(({ id, title, value }) => (
            <li key={id}>
              <a
                onClick={handleFilterKeyChange(value)}
                className={filterKey === value ? "filter-item active" : "filter-item"}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div data-cue="fadeIn">
        <div className="row gx-md-8 gx-xl-9 gy-8 gy-xl-9 isotope">
          {schoolServices.map(({ category, id, image, title, link, description }) => (
            <div className={`project item col-md-6 text-gray-600 col-xl-4 ${category}`} key={id}>
              <figure className="itooltip itooltip-primary rounded shadow-lg text-gray-600" title={description}>
                <Link href={link}>
                  <img src={`/img/demos/${image}.jpg`} srcSet={`/img/demos/${image}@2x.jpg 2x`} alt={title} />
                  <div className=" bg-gradient-primary" style={{ opacity: 0.95 }}>
                    <div className="d-flex align-items-center justify-content-center h-100 p-4">
                      <div className="text-center text-gray-600">
                        <h5 className="mb-3 fw-bold text-gray-600" style={{ color: '#343f52 !important' }}>{title}</h5>
                        <p className="mb-3 fs-14 text-gray-600 opacity-90">{description}</p>
                        <span className="btn btn-sm btn-gray-600 rounded-pill px-4">
                          <i className="uil uil-arrow-left me-1 text-gray-600"></i>
                          مشاهده سرویس
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
