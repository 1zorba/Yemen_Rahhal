import React from 'react';
// استيراد أيقونات السوشيال ميديا
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
// استيراد ملف التنسيق الجديد
 
const Opinions = () => {
  const teamMembers = [
    {
      id: 1,
      name: "محمد الشرعبي",
      role: "مطور تطبيقات ومواقع (Full-Stack Developer)",
      image: "/images/me.jpg",
      bio: "متخصص في بناء وتطوير الأنظمة السحابية وتطبيقات الهاتف بأحدث التقنيات.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      id: 2,
      name: " محمد الشيعاني",
      role: "مدير المشروع (Project Manager)",
      image: "/images/f.jpg",
      bio: "خبير في إدارة المشاريع التقنية، تنظيم المهام، وقيادة الفرق لتحقيق الأهداف بجودة عالية.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      id: 3,
      name: " مهند سامي",
      role: "إدارة وتخطيط (Project Management)",
      image: "/images/v.jpg",
      bio: "متخصص في وضع الخطط الاستراتيجية، تحليل المخاطر، ومتابعة مراحل التنفيذ خطوة بخطوة.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      id: 3,
      name: " وسيم مفتاح",
      role: "إدارة وتخطيط (Project Management)",
      image: "/images/me.jpg",
      bio: "متخصص في وضع الخطط الاستراتيجية، تحليل المخاطر، ومتابعة مراحل التنفيذ خطوة بخطوة.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      id: 3,
      name: " وسيم مفتاح",
      role: "إدارة وتخطيط (Project Management)",
      image: "/images/me.jpg",
      bio: "متخصص في وضع الخطط الاستراتيجية، تحليل المخاطر، ومتابعة مراحل التنفيذ خطوة بخطوة.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      id: 3,
      name: " وسيم مفتاح",
      role: "إدارة وتخطيط (Project Management)",
      image: "/images/me.jpg",
      bio: "متخصص في وضع الخطط الاستراتيجية، تحليل المخاطر، ومتابعة مراحل التنفيذ خطوة بخطوة.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    }
  ];

  return (
    <section id="Opinions" className="team-container" style={{ direction: 'rtl' }}>
      <div className="team-wrapper">
        
        {/* رأس الصفحة / العنوان */}
        <div className="team-header">
          <h2>فريق العمل المتميز</h2>
          <p>
            نخبة من الكفاءات والشغوفين بالابتكار، نعمل معاً لتحويل الأفكار إلى واقع رقمي ملموس .
          </p>
          <div className="team-line"></div>
        </div>

        {/* شبكة عرض الأعضاء */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              
              {/* صورة العضو */}
              <div className="member-img-container">
                <img 
                  className="member-img" 
                  src={member.image} 
                  alt={member.name} 
                />
              </div>

              {/* الاسم والمنصب */}
              <h3 className="member-name">{member.name}</h3>
              <div>
                <span className="member-role">{member.role}</span>
              </div>

              {/* نبذة مختصرة */}
              <p className="member-bio">{member.bio}</p>

              {/* روابط التواصل الاجتماعي */}
              <div className="member-socials">
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} className="social-link" target="_blank" rel="noreferrer">
                    <FaLinkedin size={22} />
                  </a>
                )}
                {member.socials.github && (
                  <a href={member.socials.github} className="social-link" target="_blank" rel="noreferrer">
                    <FaGithub size={22} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} className="social-link" target="_blank" rel="noreferrer">
                    <FaTwitter size={22} />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Opinions;