import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Manrope } from "next/font/google";

import ThemeProvider from "theme/ThemeProvider";
import Progress from "components/Progress";
import ScrollCue from "components/ScrollCue";
import PageProgress from "components/common/PageProgress";
// ANIMATE CSS
import "animate.css";
// SWIPER CSS
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// REACT VIDEO PLYR CSS
import "plyr-react/plyr.css";
// G-LIGHTBOX CSS
import "glightbox/dist/css/glightbox.css";
// SCROLL CUE CSS
import "plugins/scrollcue/scrollCue.css";
// BOOTSTRAP & CUSTOM CSS
import "assets/scss/style.scss";

const manrope = Manrope({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: "پارس آموز - سیستم مدیریت مدرسه آنلاین | نرم افزار مدرسه",
    template: "%s | پارس آموز - سیستم مدیریت مدرسه آنلاین"
  },
  description: "پارس آموز، پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران. مدیریت دانش‌آموزان، آزمون آنلاین، حسابداری، ارتباطات و بیش از ۱۴ سرویس تخصصی برای مدارس مدرن.",
  keywords: [
    "سیستم مدیریت مدرسه",
    "نرم افزار مدرسه آنلاین", 
    "آزمون آنلاین",
    "مدیریت دانش آموزان",
    "حسابداری مدرسه",
    "پارس آموز",
    "سیستم آموزشی",
    "مدیریت آموزشی",
    "نرم افزار آموزشی",
    "سیستم مدرسه ای",
    "کارنامه آنلاین",
    "بانک سوالات",
    "چت مدرسه",
    "تقویم مدرسه"
  ],
  authors: [{ name: "پارس آموز", url: "https://parsamooz.com" }],
  creator: "پارس آموز",
  publisher: "پارس آموز",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://parsamooz.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://parsamooz.com",
    title: "پارس آموز - سیستم مدیریت مدرسه آنلاین",
    description: "پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران با بیش از ۱۴ سرویس تخصصی",
    siteName: "پارس آموز",
    images: [
      {
        url: "/img/logo-purple@2x.png",
        width: 1200,
        height: 630,
        alt: "پارس آموز - سیستم مدیریت مدرسه آنلاین",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "پارس آموز - سیستم مدیریت مدرسه آنلاین",
    description: "پیشرفته‌ترین سیستم مدیریت مدرسه آنلاین ایران",
    images: ["/img/logo-purple@2x.png"],
    creator: "@parsamooz",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fa" dir="rtl">
      <body className={manrope.className}>
        <ThemeProvider>{children}</ThemeProvider>

        {/* USED FOR SCROLL ANIMATION */}
        <ScrollCue />

        {/* USED FOR PAGE SCROLL PROGRESS BAR */}
        <PageProgress />

        {/* USED FOR PROGRESS BAR ANIMATE */}
        <Progress />
      </body>
    </html>
  );
}
