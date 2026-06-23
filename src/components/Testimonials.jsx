import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sara Al-Mansoori",
      role: "الرئيس التنفيذي، SkyTech",
      text: "الكيان ديجيتال حوّلوا رؤيتنا إلى واقع مذهل! احترافية وإبداع لا حدود لهما في التنفيذ والدعم المستمر.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    {
    id: 2,
    name: "Ahmed Khalid",
    role: "مؤسس Al-Oula",
    text: "فريقهم التقني عبقري، سرعة ودقة متناهية في تسليم الأنظمة البرمجية المدمجة. شكراً لكم بحجم السماء.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" // الرابط الجديد لأحمد
  },,
    {
      id: 3,
     name: "Fatima Yousif",
      role: "مديرة التسويق، شركة النور",
      text: "شركاء نجاح رائعين! اللمسة الفنية والحلول الذكية التي قدموها ساهمت بشكل مباشر في تنمية أعمالنا الرقمية.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
    },
    {
      id: 4,
      name: "Youssef Khalid",
role: "مدير العمليات، المتحدة للاستثمار",
text: "فريقهم التقني عبقري، سرعة ودقة متناهية في تسليم الأنظمة البرمجية المدمجة. شكراً لكم بحجم السماء.",      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Tariq Mansoor",
role: "مؤسس ومدير شركة ميرال الرقمية",
text: "التزام كامل بالمواعيد وجودة تفوق التوقعات. أنصح بشدة بالتعامل مع الكيان ديجيتال لكل من يبحث عن التميز الرقمي.",      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    // ربط المعرف هنا بالـ Navbar الخاص بك
    <section id="testimonials" className="testimonials-section" style={{ direction: 'rtl' }}>
      <div className="testimonials-container">
        
        {/* عنوان القسم */}
        <div className="testimonials-header">
          <h2>آراء شركاء النجاح</h2>
          <p>كلمات نعتز بها من عملائنا الذين شاركونا رحلة الابتكار الرقمي</p>
        </div>

        {/* شبكة البطاقات الزجاجية */}
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-glass-card">
              <span className="quote-icon">“</span>
              
              {/* النجوم المتوهجة */}
              <div className="stars-container">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>

              {/* نص التقييم */}
              <p className="testimonial-text">{review.text}</p>

              {/* تفاصيل العميل */}
              <div className="client-info">
                <img 
                  className="client-avatar" 
                  src={review.image} 
                  alt={review.name} 
                />
                <div className="client-details">
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;