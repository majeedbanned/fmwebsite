"use client";

import Link from "next/link";
// GLOBAL CUSTOM HOOKS
import useIsotope from "hooks/useIsotope";

// School software features data in Farsi
const filterList = [
  { id: 1, title: 'همه', value: '*' },
  { id: 2, title: 'مدیریت', value: '.management' },
  { id: 3, title: 'آموزش', value: '.education' },
  { id: 4, title: 'ارتباطات', value: '.communication' },
  { id: 5, title: 'گزارشات', value: '.reports' },
  { id: 6, title: 'مالی', value: '.financial' }
];

const schoolFeatures = [
  { id: 1, image: 'dc1', title: 'سیستم مدیریت دانش‌آموزان', category: 'management' },
  { id: 2, image: 'dc2', title: 'مدیریت کادر آموزشی', category: 'management' },
  { id: 3, image: 'dc3', title: 'کلاس‌های مجازی', category: 'education' },
  { id: 4, image: 'dc4', title: 'سیستم آزمون آنلاین', category: 'education' },
  { id: 5, image: 'dc5', title: 'ارتباط با والدین', category: 'communication' },
  { id: 6, image: 'dc6', title: 'پیامک و اطلاع‌رسانی', category: 'communication' },
  { id: 7, image: 'dc7', title: 'چت و پشتیبانی', category: 'communication' },
  { id: 8, image: 'dc8', title: 'گزارش عملکرد تحصیلی', category: 'reports' },
  { id: 9, image: 'dc9', title: 'آمار حضور و غیاب', category: 'reports' },
  { id: 10, image: 'dc10', title: 'گزارشات مالی', category: 'reports' },
  { id: 11, image: 'dc11', title: 'مدیریت شهریه', category: 'financial' },
  { id: 12, image: 'dc12', title: 'حسابداری مدرسه', category: 'financial' }
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
          {schoolFeatures.map(({ category, id, image, title }) => (
            <div className={`project item col-md-6 col-xl-4 ${category}`} key={id}>
              <figure className="itooltip itooltip-primary rounded shadow-lg" title={title}>
                <Link href="#demo">
                  <img src={`/img/demos/${image}.jpg`} srcSet={`/img/demos/${image}@2x.jpg 2x`} alt={title} />
                  <div className="overlay bg-primary" style={{ opacity: 0.9 }}>
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <div className="text-center text-white">
                        <h5 className="mb-2">{title}</h5>
                        <p className="mb-0">مشاهده جزئیات</p>
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
