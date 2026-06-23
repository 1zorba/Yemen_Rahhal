import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './TeamSection.css'; // استدعاء التصميم الاحترافي المظلم

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "محمد الشرعبي",
      role: "مطور تطبيقات ومواقع (Full-Stack Developer)",
      image: "/images/me.jpg",
      bio: "متخصص في بناء وتطوير الأنظمة السحابية وتطبيقات الهاتف بأحدث التقنيات التقنية المعاصرة.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      id: 2,
      name: "محمد الشيعاني",
      role: "مدير المشروع (Project Manager)",
      image: "/images/kian.jpg",
      bio: "خبير في إدارة المشاريع التقنية، تنظيم المهام، وقيادة الفرق لتحقيق الأهداف بجودة عالية.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      id: 3,
      name: "وسيم مفتاح",
      role: "إدارة وتخطيط (Project Management)",
      image: "/images/wassem.jpg",
      bio: "متخصص في وضع الخطط الاستراتيجية، تحليل المخاطر، ومتابعة مراحل التنفيذ خطوة بخطوة.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      id: 4,
      name: "مهند سامي",
      role: "مهندس واجهات مستخدم (UI/UX Designer)",
      image: "/images/v.jpg",
      bio: "مسؤول عن رسم وتصميم تجربة المستخدم وشاشات الموقع لتظهر بشكل خيالي وعصري قبل برمجتها.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      id: 5,
      name: "سند",
      role: "متخصص سيو وتسويق رقمي (SEO & Marketing)",
      image: "/images/sanad.jfif",
      bio: "مسؤول عن تهيئة المواقع لمحركات البحث وإدارة الحملات الإعلانية لجلب الزوار والعملاء للمنصة.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    }
  ];

  return (
    <section id="TeamSection" className="team-container" style={{ direction: 'rtl' }}>
      <div className="team-wrapper">
        
        <div className="team-header">
          <h2>فريق العمل المتميز</h2>
          <p>نخبة من الكفاءات والشغوفين بالابتكار، نعمل معاً لتحويل الأفكار إلى واقع رقمي ملموس.</p>
          <div className="team-line"></div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              
              <div className="member-img-container">
                <img 
                  className="member-img" 
                  src={member.image} 
                  alt={member.name} 
                />
              </div>

              <h3 className="member-name">{member.name}</h3>
              <div className="role-container">
                <span className="member-role">{member.role}</span>
              </div>

              <p className="member-bio">{member.bio}</p>

              <div className="member-socials">
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} className="social-link linkedin" target="_blank" rel="noreferrer">
                    <FaLinkedin size={18} />
                  </a>
                )}
                {member.socials.github && (
                  <a href={member.socials.github} className="social-link github" target="_blank" rel="noreferrer">
                    <FaGithub size={18} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} className="social-link twitter" target="_blank" rel="noreferrer">
                    <FaTwitter size={18} />
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

export default TeamSection;