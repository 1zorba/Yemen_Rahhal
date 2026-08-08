import React, { useEffect, useState } from "react";
import "./style.css";

const team = [
  "محمد الشيعاني",
  "وسيم مفتاح",
  "مهند جواح",
  "نور الدين مفتاح",
  "فادي النويره",
  "محمد حميد",
  "بشير كردي",
];

const services = [
  {
    number: "01",
    title: "مكاتب السفر والخدمات",
    description:
      "التأشيرات والفيز، حجوزات الطيران، السفر الخارجي، العمرة والحج، الرحلات الداخلية، والشحن والتصدير.",
  },
  {
    number: "02",
    title: "الفنادق والإقامة",
    description:
      "البحث عن الفنادق، مقارنة الأسعار، التقييمات، والحجز الإلكتروني.",
  },
  {
    number: "03",
    title: "تأجير السيارات",
    description:
      "سيارات مع أو بدون سائق، مقارنة الأسعار، الحجز المسبق، وتقييم الشركات.",
  },
  {
    number: "04",
    title: "المرشد السياحي",
    description:
      "مرشدون محليون وخارجيون للمساعدة في اختيار الوجهات وتنظيم البرامج السياحية والترجمة والحجز.",
  },
  {
    number: "05",
    title: "السياحة الذكية بالذكاء الاصطناعي",
    description:
      "تحليل نوع السياحة والميزانية ومدة الرحلة وعدد الأشخاص والاهتمامات، ثم اقتراح رحلة متكاملة.",
  },
  {
    number: "06",
    title: "السياحة العلاجية",
    description:
      "المستشفيات، الأطباء، المترجمون الطبيون، الفنادق، النقل، وحجز المواعيد.",
  },
];

const goals = [
  "إنشاء منصة يمنية ذكية لخدمات السفر والسياحة.",
  "تسهيل تنظيم الرحلات الداخلية والخارجية.",
  "دعم السياحة اليمنية وإبراز المعالم السياحية.",
  "تسهيل الرحلات العلاجية خارج اليمن.",
  "ربط المسافرين بمقدمي الخدمات الموثوقين.",
  "دعم التحول الرقمي في قطاع السفر.",
];

const aiSteps = [
  {
    number: "01",
    title: "نوع السياحة",
    text: "يحدد المستخدم نوع السياحة التي يرغب بها.",
  },
  {
    number: "02",
    title: "الميزانية",
    text: "يحدد الميزانية المتاحة للرحلة.",
  },
  {
    number: "03",
    title: "مدة الرحلة",
    text: "يحدد مدة الرحلة وعدد الأشخاص.",
  },
  {
    number: "04",
    title: "الاهتمامات",
    text: "يحدد اهتماماته والأنشطة التي يرغب بها.",
  },
  {
    number: "05",
    title: "اقتراح الرحلة",
    text: "يقترح النظام رحلة متكاملة تناسب احتياجاته.",
  },
];

const technologies = [
  {
    name: "Flutter",
    description: "تطبيق الهاتف",
  },
  {
    name: "React.js",
    description: "موقع الويب",
  },
  {
    name: "Laravel",
    description: "Backend",
  },
  {
    name: "MySQL",
    description: "قاعدة البيانات",
  },
  {
    name: "Google Maps API",
    description: "الخرائط",
  },
  {
    name: "Firebase",
    description: "الإشعارات",
  },
  {
    name: "OpenAI API / Gemini",
    description: "الذكاء الاصطناعي",
  },
];

const profitModels = [
  "اشتراكات مكاتب السفر ومقدمي الخدمات.",
  "عمولات على الحجوزات.",
  "الإعلانات داخل التطبيق.",
  "الحسابات المميزة.",
  "الشراكات مع الفنادق والمستشفيات.",
];

const adminFeatures = [
  "إدارة المستخدمين",
  "اعتماد مقدمي الخدمات",
  "إدارة الحجوزات",
  "متابعة التقييمات",
  "إدارة المحتوى السياحي",
  "التقارير والإحصائيات",
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="yemen-tarhal">

      {/* ================= NAVBAR ================= */}
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container navbar-container">

          <button
            className="brand"
            onClick={() => scrollToSection("home")}
          >
            <span className="brand-icon">YT</span>

            <span className="brand-text">
              <strong>يمن ترحال</strong>
              <small>YEMEN TARHAL</small>
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <button onClick={() => scrollToSection("home")}>
              الرئيسية
            </button>

            <button onClick={() => scrollToSection("about")}>
              عن المشروع
            </button>

            <button onClick={() => scrollToSection("services")}>
              الخدمات
            </button>

            <button onClick={() => scrollToSection("ai")}>
              السياحة الذكية
            </button>

            <button onClick={() => scrollToSection("technology")}>
              التقنيات
            </button>

            <button onClick={() => scrollToSection("team")}>
              الفريق
            </button>
          </nav>

          <button
            className="nav-button"
            onClick={() => scrollToSection("vision")}
          >
            اكتشف المشروع
          </button>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="فتح القائمة"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <main>

        <section id="home" className="hero">
          <div className="container hero-container">

            <div className="hero-content">

              <div className="hero-label">
                <span></span>
                مشروع تخرج
              </div>

              <h1>
                يمن <span>ترحال</span>
              </h1>

              <h2>
                منصة رقمية ذكية
                <br />
                لخدمات السفر والسياحة والعلاج
              </h2>

              <p>
                يمن ترحال هو منصة رقمية ذكية
                <strong> تطبيق جوال + موقع ويب </strong>
                تهدف إلى جمع جميع خدمات السفر والسياحة والعلاج
                داخل اليمن وخارجها في مكان واحد.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => scrollToSection("about")}
                >
                  تعرف على المشروع
                  <span>←</span>
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollToSection("services")}
                >
                  خدمات المنصة
                </button>
              </div>

            </div>

            <div className="hero-card">

              <div className="hero-card-top">
                <span>YEMEN</span>
                <span>2026</span>
              </div>

              <div className="hero-logo">
                <span>YT</span>
              </div>

              <h3>يمن ترحال</h3>

              <p>
                رحلة واحدة تبدأ من التخطيط
                وتنتهي بتجربة متكاملة.
              </p>

              <div className="hero-card-line"></div>

              <small>
                TRAVEL · TOURISM · MEDICAL
              </small>

            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section about-section">

          <div className="container">

            <div className="section-header">

              <div>
                <span className="section-number">01</span>
                <span className="section-label">
                  نبذة عن المشروع
                </span>

                <h2>
                  رحلة واحدة،
                  <br />
                  <span>منصة واحدة.</span>
                </h2>
              </div>

              <p>
                يمن ترحال هو منصة رقمية ذكية تهدف إلى جمع جميع خدمات
                السفر والسياحة والعلاج داخل اليمن وخارجها في مكان واحد.
                تساعد المنصة المستخدم على التخطيط لرحلته واختيار
                الخدمات المناسبة وإتمام الحجوزات بسهولة.
              </p>

            </div>

            <div className="about-content">

              <div className="about-main-card">
                <span className="card-label">
                  فكرة المشروع
                </span>

                <h3>
                  جميع خدمات رحلتك
                  <br />
                  في مكان واحد.
                </h3>

                <p>
                  تقوم فكرة المشروع على إنشاء نظام يربط المسافرين
                  بجميع الجهات المرتبطة بالسفر، مثل مكاتب السفر
                  والتأشيرات، الفنادق، شركات تأجير السيارات،
                  المرشدين السياحيين، المترجمين، المستشفيات
                  وشركات الشحن.
                </p>
              </div>

              <div className="about-side">

                <div className="simple-card">
                  <span>01</span>
                  <h3>التخطيط</h3>
                  <p>
                    التخطيط للرحلة من خلال منصة واحدة.
                  </p>
                </div>

                <div className="simple-card">
                  <span>02</span>
                  <h3>الاختيار</h3>
                  <p>
                    اختيار الخدمات المناسبة لاحتياجات المستخدم.
                  </p>
                </div>

                <div className="simple-card">
                  <span>03</span>
                  <h3>الحجز</h3>
                  <p>
                    إتمام الحجوزات بسهولة من خلال المنصة.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= PROBLEM ================= */}
        <section className="section problem-section">

          <div className="container">

            <div className="section-header">

              <div>
                <span className="section-number">02</span>
                <span className="section-label">
                  المشكلة والحل
                </span>

                <h2>
                  لماذا نحتاج
                  <br />
                  <span>يمن ترحال؟</span>
                </h2>
              </div>

              <p>
                يعاني المسافر في اليمن من عدة مشاكل مرتبطة بتشتت
                خدمات السفر وصعوبة الوصول إليها وتنظيم الرحلات.
              </p>

            </div>

            <div className="problem-grid">

              <div className="problem-box">

                <h3>المشكلة</h3>

                <ul>
                  <li>
                    <span>01</span>
                    تشتت خدمات السفر بين جهات متعددة.
                  </li>

                  <li>
                    <span>02</span>
                    صعوبة الوصول إلى خدمات موثوقة.
                  </li>

                  <li>
                    <span>03</span>
                    عدم وجود منصة تجمع جميع الخدمات.
                  </li>

                  <li>
                    <span>04</span>
                    صعوبة تنظيم الرحلات السياحية والعلاجية.
                  </li>

                  <li>
                    <span>05</span>
                    الحاجة للتواصل مع أكثر من جهة.
                  </li>

                  <li>
                    <span>06</span>
                    عدم وجود نظام ذكي يساعد المستخدم.
                  </li>
                </ul>

              </div>

              <div className="solution-box">

                <div className="solution-icon">
                  ✓
                </div>

                <h3>الحل</h3>

                <p>
                  توفير منصة رقمية موحدة تجمع خدمات السفر والسياحة
                  والعلاج، مع مساعد ذكي يعتمد على الذكاء الاصطناعي
                  لتحليل احتياجات المستخدم واقتراح الخيارات المناسبة.
                </p>

                <div className="solution-items">

                  <span>الوجهات المناسبة</span>
                  <span>الفنادق</span>
                  <span>وسائل النقل</span>
                  <span>المرشدين السياحيين</span>
                  <span>البرامج السياحية</span>
                  <span>التكلفة المتوقعة</span>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= GOALS ================= */}
        <section className="section goals-section">

          <div className="container">

            <div className="center-heading">
              <span className="section-number">03</span>
              <span className="section-label">
                أهداف المشروع
              </span>

              <h2>
                أهداف
                <span> يمن ترحال</span>
              </h2>
            </div>

            <div className="goals-grid">

              {goals.map((goal, index) => (
                <div className="goal-card" key={goal}>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{goal}</p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="section services-section">

          <div className="container">

            <div className="section-header">

              <div>
                <span className="section-number">04</span>
                <span className="section-label">
                  أقسام النظام
                </span>

                <h2>
                  خدمات
                  <br />
                  <span>متكاملة.</span>
                </h2>
              </div>

              <p>
                تجمع المنصة مجموعة من الخدمات المرتبطة بالسفر
                والسياحة والعلاج في مكان واحد.
              </p>

            </div>

            <div className="services-grid">

              {services.map((service) => (
                <article
                  className="service-card"
                  key={service.number}
                >

                  <span className="service-number">
                    {service.number}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-arrow">
                    ↗
                  </span>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* ================= AI ================= */}
        <section id="ai" className="section ai-section">

          <div className="container">

            <div className="ai-header">

              <div>
                <span className="section-number">05</span>
                <span className="section-label">
                  السياحة الذكية
                </span>

                <h2>
                  الذكاء الاصطناعي
                  <br />
                  <span>يفهم رحلتك.</span>
                </h2>
              </div>

              <p>
                تعتبر السياحة الذكية أهم ميزة في المشروع، حيث يقوم
                النظام بسؤال المستخدم عن احتياجاته ثم يقترح له
                رحلة متكاملة.
              </p>

            </div>

            <div className="ai-process">

              {aiSteps.map((step) => (
                <div className="ai-step" key={step.number}>

                  <span className="ai-step-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                </div>
              ))}

            </div>

            <div className="ai-example">

              <div>
                <span>مثال</span>

                <h3>
                  السياحة الطبيعية
                </h3>
              </div>

              <p>
                إذا اختار المستخدم السياحة الطبيعية، يقترح له
                الذكاء الاصطناعي أفضل الوجهات الطبيعية مثل
                سقطرى وإب وحراز، مع الفنادق والسيارات والبرنامج
                اليومي المناسب.
              </p>

            </div>

          </div>
        </section>

        {/* ================= MEDICAL ================= */}
        <section className="section medical-section">

          <div className="container medical-grid">

            <div>

              <span className="section-number">06</span>
              <span className="section-label">
                السياحة العلاجية
              </span>

              <h2>
                عندما تكون
                <br />
                الرحلة
                <span> للعلاج.</span>
              </h2>

              <p>
                تساعد المنصة المرضى في تنظيم رحلات العلاج من خلال
                توفير المستشفيات والأطباء والمترجمين الطبيين
                والفنادق والنقل وحجز المواعيد.
              </p>

            </div>

            <div className="medical-list">

              <div>
                <span>01</span>
                <strong>المستشفيات</strong>
              </div>

              <div>
                <span>02</span>
                <strong>الأطباء</strong>
              </div>

              <div>
                <span>03</span>
                <strong>المترجمين الطبيين</strong>
              </div>

              <div>
                <span>04</span>
                <strong>الفنادق</strong>
              </div>

              <div>
                <span>05</span>
                <strong>النقل</strong>
              </div>

              <div>
                <span>06</span>
                <strong>حجز المواعيد</strong>
              </div>

            </div>

          </div>
        </section>

        {/* ================= ADMIN ================= */}
        <section className="section admin-section">

          <div className="container">

            <div className="center-heading">

              <span className="section-number">07</span>
              <span className="section-label">
                إدارة النظام
              </span>

              <h2>
                لوحة تحكم
                <span> متكاملة.</span>
              </h2>

            </div>

            <div className="admin-grid">

              {adminFeatures.map((item, index) => (
                <div className="admin-card" key={item}>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{item}</h3>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= TECHNOLOGY ================= */}
        <section id="technology" className="section technology-section">

          <div className="container">

            <div className="section-header">

              <div>
                <span className="section-number">08</span>
                <span className="section-label">
                  التقنيات المستخدمة
                </span>

                <h2>
                  مبني على
                  <br />
                  <span>تقنيات حديثة.</span>
                </h2>
              </div>

              <p>
                يعتمد المشروع على مجموعة من التقنيات لبناء تطبيق
                الهاتف وموقع الويب والـ Backend وقاعدة البيانات
                والخرائط والإشعارات والذكاء الاصطناعي.
              </p>

            </div>

            <div className="technology-grid">

              {technologies.map((technology, index) => (
                <div
                  className="technology-card"
                  key={technology.name}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{technology.name}</h3>

                  <p>{technology.description}</p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= PROFIT ================= */}
        <section className="section profit-section">

          <div className="container profit-grid">

            <div>

              <span className="section-number">09</span>
              <span className="section-label">
                نموذج الربح
              </span>

              <h2>
                كيف يحقق
                <br />
                <span>المشروع أرباحًا؟</span>
              </h2>

            </div>

            <div className="profit-list">

              {profitModels.map((item, index) => (
                <div key={item}>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{item}</p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= VALUE ================= */}
        <section className="section value-section">

          <div className="container">

            <div className="value-box">

              <div>

                <span className="section-number">10</span>
                <span className="section-label">
                  القيمة المضافة
                </span>

                <h2>
                  أكثر من مجرد
                  <br />
                  <span>تطبيق حجوزات.</span>
                </h2>

              </div>

              <p>
                يتميز يمن ترحال بأنه ليس مجرد تطبيق حجوزات، بل منصة
                ذكية متكاملة تجمع رحلة المسافر بالكامل في مكان واحد،
                وتستخدم الذكاء الاصطناعي لتقديم تجربة سفر شخصية
                وسهلة، مما يساهم في تطوير قطاع السياحة والسفر في اليمن.
              </p>

            </div>

          </div>
        </section>

        {/* ================= TEAM ================= */}
        <section id="team" className="section team-section">

          <div className="container">

            <div className="section-header">

              <div>
                <span className="section-number">11</span>
                <span className="section-label">
                  فريق المشروع
                </span>

                <h2>
                  وراء يمن ترحال
                  <br />
                  <span>فريق المشروع.</span>
                </h2>
              </div>

              <p>
                أسماء فريق مشروع التخرج.
              </p>

            </div>

            <div className="team-grid">

              {team.map((member, index) => (
                <div className="team-card" key={member}>

                  <div className="team-avatar">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <small>فريق المشروع</small>
                    <h3>{member}</h3>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= SUPERVISOR ================= */}
        <section className="section supervisor-section">

          <div className="container">

            <div className="supervisor-card">

              <div className="supervisor-photo-area">

                <div className="supervisor-photo-glow"></div>

                <img
                  src="/images/supervisor2.jfif"
                  alt="المشرف الأكاديمي"
                  className="supervisor-photo"
                />

              </div>

              <div className="supervisor-content">

                <span className="section-label">
                  المشرف الأكاديمي
                </span>

                <h2>
                  بإشراف
                  <span> أكاديمي.</span>
                </h2>

                <p>
                  بإشراف أكاديمي متخصص، تم تطوير مشروع يمن ترحال
                  ليجمع بين التقنية والذكاء الاصطناعي والسياحة الرقمية.
                </p>

                <div className="supervisor-name">
                  <small>PROJECT SUPERVISOR</small>

                  <h3>
                    د. اسم المشرف
                  </h3>

                  <p>
                    أستاذ / دكتور — التخصص
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= VISION ================= */}
        <section id="vision" className="section vision-section">

          <div className="container">

            <div className="vision-content">

              <span className="section-number">12</span>
              <span className="section-label">
                الرؤية المستقبلية
              </span>

              <h2>
                من اليمن
                <br />
                <span>إلى العالم.</span>
              </h2>

              <p>
                أن يصبح يمن ترحال المنصة الوطنية الأولى للسفر
                والسياحة والعلاج في اليمن، مع إمكانية التوسع
                مستقبلًا لخدمة المسافرين في المنطقة العربية.
              </p>

              <div className="vision-line">
                <span></span>
                <strong>YEMEN TARHAL · 2026</strong>
                <span></span>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="container">

          <div className="footer-top">

            <div className="footer-brand">

              <div className="footer-logo">
                <span>YT</span>

                <div>
                  <strong>يمن ترحال</strong>
                  <small>YEMEN TARHAL</small>
                </div>
              </div>

              <p>
                منصة رقمية ذكية تجمع جميع خدمات السفر والسياحة
                والعلاج داخل اليمن وخارجها في مكان واحد.
              </p>

            </div>

            <div className="footer-links">

              <div>
                <strong>استكشف</strong>

                <button onClick={() => scrollToSection("about")}>
                  عن المشروع
                </button>

                <button onClick={() => scrollToSection("services")}>
                  الخدمات
                </button>

                <button onClick={() => scrollToSection("ai")}>
                  السياحة الذكية
                </button>
              </div>

              <div>
                <strong>المشروع</strong>

                <button onClick={() => scrollToSection("technology")}>
                  التقنيات
                </button>

                <button onClick={() => scrollToSection("team")}>
                  الفريق
                </button>

                <button onClick={() => scrollToSection("vision")}>
                  الرؤية
                </button>
              </div>

            </div>

          </div>

          <div className="footer-bottom">

            <span>
              © 2026 Yemen Tarhal. Graduation Project.
            </span>

            <button
              onClick={() => scrollToSection("home")}
              className="back-top"
            >
              ↑
            </button>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;