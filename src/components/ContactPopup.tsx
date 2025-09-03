"use client";

import { useState } from "react";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: "contact" | "demo";
}

export default function ContactPopup({ isOpen, onClose, type }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert("لطفا تمام فیلدها را پر کنید");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: type === "demo" ? "درخواست دمو" : "تماس با ما"
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "" });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        throw new Error("خطا در ارسال اطلاعات");
      }
    } catch (error) {
      alert("خطا در ارسال اطلاعات. لطفا دوباره تلاش کنید.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(5px);
        }
        
        .popup-content {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          transform: scale(0.95);
          animation: popupEnter 0.3s ease-out forwards;
          font-family: 'IRANYekanX', 'Arial', sans-serif;
          direction: rtl;
          text-align: right;
        }
        
        @keyframes popupEnter {
          to {
            transform: scale(1);
          }
        }
        
        .popup-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .popup-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }
        
        .popup-title {
          font-size: 1.75rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.5rem;
        }
        
        .popup-subtitle {
          color: #666;
          font-size: 1rem;
          line-height: 1.6;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #333;
          font-size: 0.95rem;
        }
        
        .form-input {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid #e1e5e9;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: 'IRANYekanX', 'Arial', sans-serif;
          direction: rtl;
          text-align: right;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 1rem;
          font-family: 'IRANYekanX', 'Arial', sans-serif;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        
        .close-btn {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #f8f9fa;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #666;
          font-size: 1.25rem;
        }
        
        .close-btn:hover {
          background: #e9ecef;
          transform: scale(1.1);
        }
        
        .success-message {
          text-align: center;
          padding: 2rem 0;
        }
        
        .success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          animation: successPulse 0.6s ease-out;
        }
        
        @keyframes successPulse {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .success-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #11998e;
          margin-bottom: 0.5rem;
        }
        
        .success-text {
          color: #666;
          line-height: 1.6;
        }
      `}</style>
      
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <i className="uil uil-times"></i>
        </button>
        
        {isSuccess ? (
          <div className="success-message">
            <div className="success-icon">
              <i className="uil uil-check" style={{ fontSize: '2rem', color: 'white' }}></i>
            </div>
            <h3 className="success-title">تشکر از شما!</h3>
            <p className="success-text">
              اطلاعات شما با موفقیت ثبت شد.<br />
              به زودی کارشناسان ما با شما تماس خواهند گرفت.
            </p>
          </div>
        ) : (
          <>
            <div className="popup-header">
              <div className="popup-icon">
                <i 
                  className={type === "demo" ? "uil uil-play-circle" : "uil uil-phone"} 
                  style={{ fontSize: '2.5rem', color: 'white' }}
                ></i>
              </div>
              <h2 className="popup-title">
                {type === "demo" ? "درخواست مشاوره رایگان" : "تماس با ما"}
              </h2>
              <p className="popup-subtitle">
                {type === "demo" 
                  ? "برای دریافت مشاوره رایگان و مشاهده دمو سیستم، اطلاعات خود را وارد کنید" 
                  : "برای تماس و دریافت اطلاعات بیشتر، اطلاعات خود را وارد کنید"
                }
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">نام و نام خانوادگی *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">شماره تماس *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="09123456789"
                  className="form-input"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="uil uil-spinner-alt" style={{ animation: 'spin 1s linear infinite', marginLeft: '0.5rem' }}></i>
                    در حال ارسال...
                  </>
                ) : (
                  type === "demo" ? "درخواست مشاوره رایگان" : "ارسال درخواست"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

