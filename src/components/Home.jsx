 
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
    icon: "✈",
    number: "01",
    title: "مكاتب السفر والخدمات",
    text: "التأشيرات والفيز، حجوزات الطيران، السفر الخارجي، العمرة والحج، الرحلات الداخلية، والشحن والتصدير.",
  },
  {
    icon: "⌂",
    number: "02",
    title: "الفنادق والإقامة",
    text: "البحث عن الفنادق، مقارنة الأسعار، التقييمات، والحجز الإلكتروني.",
  },
  {
    icon: "🚐",
    number: "03",
    title: "تأجير السيارات",
    text: "سيارات مع أو بدون سائق، مقارنة الأسعار، الحجز المسبق، وتقييم الشركات.",
  },
  {
    icon: "AI",
    number: "04",
    title: "المرشد السياحي",
    text: "مرشدون محليون وخارجيون للمساعدة في الوجهات والبرامج السياحية والترجمة والحجز.",
  },
  {
    icon: "✚",
    number: "05",
    title: "السياحة الذكية",
    text: "استخدام الذكاء الاصطناعي لفهم احتياجات المستخدم واقتراح رحلة متكاملة.",
  },
  {
    icon: "♡",
    number: "06",
    title: "السياحة العلاجية",
    text: "المستشفيات والأطباء والمترجمون الطبيون والفنادق والنقل وحجز المواعيد.",
  },
];

const problems = [
  "تشتت خدمات السفر بين جهات متعددة.",
  "صعوبة الوصول إلى خدمات موثوقة.",
  "عدم وجود منصة تجمع جميع الخدمات في مكان واحد.",
  "صعوبة تنظيم الرحلات السياحية والعلاجية.",
  "الحاجة للتواصل مع أكثر من جهة لإكمال رحلة واحدة.",
  "عدم وجود نظام ذكي يساعد المستخدم على اختيار أفضل الخيارات.",
];

const solutionItems = [
  "الوجهات المناسبة",
  "الفنادق",
  "وسائل النقل",
  "المرشدين السياحيين",
  "البرامج السياحية",
  "التكلفة المتوقعة",
];

const goals = [
  "إنشاء منصة يمنية ذكية لخدمات السفر والسياحة.",
  "تسهيل تنظيم الرحلات الداخلية والخارجية.",
  "دعم السياحة اليمنية وإبراز المعالم السياحية.",
  "تسهيل الرحلات العلاجية خارج اليمن.",
  "ربط المسافرين بمقدمي الخدمات الموثوقين.",
  "دعم التحول الرقمي في قطاع السفر.",
];

const technologies = [
  { icon: "◉", name: "Flutter", text: "تطبيق الهاتف" },
  { icon: "⚛", name: "React.js", text: "موقع الويب" },
  { icon: "⌘", name: "Laravel", text: "Backend" },
  { icon: "▦", name: "MySQL", text: "قاعدة البيانات" },
  { icon: "⌁", name: "Google Maps API", text: "الخرائط" },
  { icon: "●", name: "Firebase", text: "الإشعارات" },
  { icon: "YT", name: "OpenAI API أو Gemini", text: "الذكاء الاصطناعي" },
];

const revenue = [
  "اشتراكات مكاتب السفر ومقدمي الخدمات.",
  "عمولات على الحجوزات.",
  "الإعلانات داخل التطبيق.",
  "الحسابات المميزة.",
  "الشراكات مع الفنادق والمستشفيات.",
];

const destinations = [
  {
    number: "01",
    title: "سقطرى",
    text: "من الوجهات الطبيعية التي يمكن أن يقترحها النظام للمستخدم.",
    image:
      "images/soqatra.webp",
  },
  {
    number: "02",
    title: "إب",
    text: "من الوجهات الطبيعية التي يمكن أن تدخل ضمن الرحلات المقترحة.",
    image:
      "images/Ibb.jfif",
  },
  {
    number: "03",
    title: "حراز",
    text: "وجهة يمكن أن يقترحها الذكاء الاصطناعي ضمن برنامج سياحي مناسب.",
    image:
      "images/Haraz.jfif",
  },
];
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
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
    <div className="yemen-Rahhal">

      {/* ================= NAVBAR ================= */}

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container nav-inner">

          <button
            className="logo"
            onClick={() => scrollTo("home")}
          >
            <span className="logo-mark">
              <span>YT</span>
            </span>

            <span className="logo-content">
              <strong>يمن  رحال</strong>
              <small>YEMEN Rahhal</small>
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollTo("home")}>
              الرئيسية
            </button>

            <button onClick={() => scrollTo("about")}>
              عن المشروع
            </button>

            <button onClick={() => scrollTo("services")}>
              الخدمات
            </button>

            <button onClick={() => scrollTo("ai")}>
              السياحة الذكية
            </button>

            <button onClick={() => scrollTo("technology")}>
              التقنيات
            </button>

            <button onClick={() => scrollTo("team")}>
              الفريق
            </button>
          </nav>

          <button
            className="nav-button"
            onClick={() => scrollTo("vision")}
          >
            اكتشف المشروع
            <span>↗</span>
          </button>

          <button
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="القائمة"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <main>

        <section id="home" className="hero">
          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />

          <div className="container hero-grid">

            <div className="hero-content reveal">

              <div className="hero-label">
                <span />
                مشروع تخرج · منصة سفر وسياحة ذكية
              </div>
 
              <div className="cont">

             
              <h1>
                يمن  رحال
                <br />
                <span>رحلتك تبدأ من هنا.</span>
              </h1>
 </div>
              <p className="hero-text">
                يمن  رحال هو منصة رقمية ذكية تجمع جميع خدمات
                السفر والسياحة والعلاج داخل اليمن وخارجها في مكان واحد.
              </p>

              <p className="hero-text secondary">
                تساعد المنصة المستخدم على التخطيط لرحلته، واختيار
                الخدمات المناسبة، وإتمام الحجوزات بسهولة، مع الاعتماد
                على الذكاء الاصطناعي لتقديم اقتراحات وخطط سفر مخصصة.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => scrollTo("about")}
                >
                  <span>تعرف على المشروع</span>
                  <b>←</b>
                </button>

                <button
                  className="outline-button"
                  onClick={() => scrollTo("services")}
                >
                  استكشف الخدمات
                </button>
              </div>

            </div>

            <div className="hero-visual reveal">

              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />

              <div className="hero-main-card">

                <div className="hero-card-top">
                  <span>YEMEN Rahhal</span>
                  <span>2026</span>
                </div>

                <div className="hero-compass">
                  <div className="compass-ring">
                    <span className="compass-center">YT</span>
                    <span className="north">N</span>
                    <span className="east">E</span>
                    <span className="south">S</span>
                    <span className="west">W</span>
                  </div>
                </div>

                <div className="hero-card-title">
                  <small>SMART TRAVEL PLATFORM</small>
                  <h2>رحلة واحدة</h2>
                  <h3>منصة واحدة.</h3>
                </div>

                <div className="hero-card-footer">
                  <span>TRAVEL</span>
                  <span>TOURISM</span>
                  <span>MEDICAL</span>
                </div>

              </div>
 

            
            </div>

          </div>

          <div className="hero-bottom-line">
            <div>
              <span>01</span>
              <span>YEMEN Rahhal</span>
            </div>

            <div className="scroll-hint">
              مرر لاكتشاف المشروع
              <span>↓</span>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}

        <section className="intro section">
          <div className="container">

            <div className="intro-label reveal">
              <span>01</span>
              <div />
              <small>ABOUT THE IDEA</small>
            </div>

            <div className="intro-layout">

              <div className="intro-title reveal">
                <span className="section-kicker">
                  A NEW WAY TO TRAVEL
                </span>

                <h2>
                  رحلة واحدة،
                  <br />
                  <span>منصة واحدة.</span>
                </h2>
              </div>

              <div className="intro-description reveal">
                <p>
                  في عالم تتوزع فيه خدمات السفر بين جهات مختلفة،
                  يأتي <strong>يمن  رحال</strong> ليجمع رحلة المستخدم
                  في منصة رقمية واحدة.
                </p>

                <p>
                  من التخطيط واكتشاف الوجهات، إلى اختيار الفندق
                  والسيارة والمرشد والخدمات العلاجية، تهدف المنصة
                  إلى جعل التجربة أكثر سهولة ووضوحًا.
                </p>
              </div>

            </div>

            <div className="statement-card reveal">

              <div className="statement-icon">
                YT
              </div>

              <div>
                <span>YEMEN Rahhal</span>

                <h3>
                  ليست مجرد منصة حجوزات،
                  <br />
                  بل منظومة متكاملة للرحلة.
                </h3>
              </div>

              <div className="statement-number">
                01
              </div>

            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="about section">
          <div className="container">

            <div className="section-head reveal">
              <div>
                <span className="section-kicker">
                  ABOUT THE PROJECT
                </span>

                <h2>
                  فكرة المشروع
                  <br />
                  <span>بوضوح وبساطة.</span>
                </h2>
              </div>

              <p>
                تقوم فكرة المشروع على إنشاء نظام يربط المسافرين
                بجميع الجهات المرتبطة بالسفر، بدلًا من البحث بين
                عدة مكاتب وصفحات مختلفة.
              </p>
            </div>

            <div className="about-grid">

              <article className="large-about-card reveal">

                <div className="about-card-number">
                  01
                </div>

                <div className="about-icon">
                  YT
                </div>

                <h3>
                  منصة رقمية
                  <br />
                  <span>موحدة.</span>
                </h3>

                <p>
                  يستطيع المستخدم إدارة رحلته بالكامل من خلال
                  منصة واحدة تبدأ من التخطيط وحتى العودة.
                </p>

                <div className="about-card-line" />

              </article>

              <div className="about-side">

                <article className="mini-about-card reveal">
                  <div className="mini-icon">◎</div>
                  <div>
                    <span>01</span>
                    <h3>التخطيط</h3>
                    <p>
                      التخطيط للرحلة واختيار الخدمات المناسبة.
                    </p>
                  </div>
                </article>

                <article className="mini-about-card reveal">
                  <div className="mini-icon">◇</div>
                  <div>
                    <span>02</span>
                    <h3>الحجز</h3>
                    <p>
                      إتمام الحجوزات بسهولة من خلال منصة واحدة.
                    </p>
                  </div>
                </article>

                <article className="mini-about-card reveal">
                  <div className="mini-icon">YT</div>
                  <div>
                    <span>03</span>
                    <h3>الذكاء</h3>
                    <p>
                      اقتراحات وخطط سفر مخصصة حسب المستخدم.
                    </p>
                  </div>
                </article>

              </div>

            </div>

          </div>
        </section>

        {/* ================= PROBLEM ================= */}

        <section className="problem section">
          <div className="container">

            <div className="section-head reveal">
              <div>
                <span className="section-kicker">
                  THE PROBLEM
                </span>

                <h2>
                  لماذا نحتاج
                  <br />
                  <span>يمن  رحال؟</span>
                </h2>
              </div>

              <p>
                يعاني المسافر في اليمن من عدة مشاكل تجعل تنظيم
                الرحلة أكثر تعقيدًا وتحتاج إلى التواصل مع أكثر
                من جهة.
              </p>
            </div>

            <div className="problem-grid">

              <div className="problem-list">
                {problems.map((problem, index) => (
                  <div
                    className="problem-item reveal"
                    key={problem}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{problem}</p>

                    <b>+</b>
                  </div>
                ))}
              </div>

              <div className="solution-card reveal">

                <div className="solution-top">
                  <span>THE SOLUTION</span>
                  <b>YT</b>
                </div>

                <h3>
                  الحل في
                  <br />
                  <span>مكان واحد.</span>
                </h3>

                <p>
                  توفير منصة رقمية موحدة تجمع خدمات السفر والسياحة
                  والعلاج، مع مساعد ذكي يعتمد على الذكاء الاصطناعي
                  لتحليل احتياجات المستخدم.
                </p>

                <div className="solution-items">
                  {solutionItems.map((item, index) => (
                    <div key={item}>
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <strong>{item}</strong>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= SERVICES ================= */}

        <section id="services" className="services section">
          <div className="container">

            <div className="section-head reveal">
              <div>
                <span className="section-kicker">
                  SYSTEM SECTIONS
                </span>

                <h2>
                  خدمات الرحلة
                  <br />
                  <span>في منظومة واحدة.</span>
                </h2>
              </div>

              <div className="services-count">
                <strong>06</strong>
                <span>أقسام رئيسية</span>
              </div>
            </div>

            <div className="services-grid">

              {services.map((service) => (
                <article
                  className="service-card reveal"
                  key={service.number}
                >

                  <div className="service-top">
                    <span>{service.number}</span>
                    <div className="service-icon">
                      {service.icon}
                    </div>
                  </div>

                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>

                  <div className="service-bottom">
                    <span>YEMEN Rahhal</span>
                    <b>↗</b>
                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* ================= AI ================= */}

        <section id="ai" className="ai section">

          <div className="ai-glow" />

          <div className="container ai-layout">

            <div className="ai-content reveal">

              <div className="ai-label">
                <span />
                POWERED BY ARTIFICIAL INTELLIGENCE
              </div>

              <h2>
                السياحة الذكية
                <br />
                <span>بذكاء يناسبك.</span>
              </h2>

              <p>
                تعتبر السياحة الذكية بالذكاء الاصطناعي أهم ميزة
                في المشروع. يقوم النظام بسؤال المستخدم عن نوع
                السياحة والميزانية ومدة الرحلة وعدد الأشخاص
                والاهتمامات.
              </p>

              <div className="ai-question-list">

                <div>
                  <span>01</span>
                  <strong>نوع السياحة</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>الميزانية</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>مدة الرحلة</strong>
                </div>

                <div>
                  <span>04</span>
                  <strong>عدد الأشخاص</strong>
                </div>

                <div>
                  <span>05</span>
                  <strong>الاهتمامات</strong>
                </div>

              </div>

            </div>

            <div className="ai-interface reveal">

              <div className="ai-interface-top">
                <div>
                  <span className="online-dot" />
                  YEMEN Rahhal AI
                </div>

                <span>AI</span>
              </div>

              <div className="ai-interface-body">

                <div className="ai-welcome">
                  <span>YT</span>

                  <div>
                    <small>المساعد الذكي</small>
                    <h3>
                      أخبرني كيف تريد أن تكون رحلتك؟
                    </h3>
                  </div>
                </div>

                <div className="ai-options">

                  <div>
                    <span>◈</span>
                    طبيعة ومغامرة
                  </div>

                  <div>
                    <span>◇</span>
                    تاريخ وثقافة
                  </div>

                  <div>
                    <span>YT</span>
                    رحلة عائلية
                  </div>

                  <div>
                    <span>✚</span>
                    رحلة علاجية
                  </div>

                </div>

                <div className="ai-result">

                  <div className="ai-result-head">
                    <span>اقتراح الرحلة</span>
                    <b>YT</b>
                  </div>

                  <h4>
                    رحلة متكاملة حسب احتياجاتك
                  </h4>

                  <p>
                    الوجهات، الفنادق، وسائل النقل، المرشدين،
                    البرامج السياحية والتكلفة المتوقعة.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= DESTINATIONS ================= */}

        <section className="destinations section">
          <div className="container">

            <div className="section-head reveal">
              <div>
                <span className="section-kicker">
                  SMART DESTINATIONS
                </span>

                <h2>
                  مثال على
                  <br />
                  <span>رحلة ذكية.</span>
                </h2>
              </div>

              <p>
                إذا اختار المستخدم السياحة الطبيعية، يقترح له
                الذكاء الاصطناعي أفضل الوجهات الطبيعية مثل
                سقطرى وإب وحراز، مع الفنادق والسيارات والبرنامج
                اليومي المناسب.
              </p>
            </div>

            <div className="destination-grid">

          {destinations.map((destination) => (
  <article className="destination-card" key={destination.number}>
    
    <div
      className="destination-image"
      style={{
        backgroundImage: `url(${destination.image})`,
      }}
    >
      <div className="destination-overlay"></div>

      <span className="destination-number">
        {destination.number}
      </span>
    </div>

    <div className="destination-content">
      <h3>{destination.title}</h3>

      <p>{destination.text}</p>

      <span className="destination-arrow">
        ↗
      </span>
    </div>

  </article>
))}

            </div>

          </div>
        </section>

        {/* ================= MEDICAL ================= */}

        <section className="medical section">

          <div className="container medical-layout">

            <div className="medical-content reveal">

              <span className="section-kicker">
                MEDICAL TOURISM
              </span>

              <h2>
                عندما تكون الرحلة
                <br />
                <span>من أجل العلاج.</span>
              </h2>

              <p>
                تساعد السياحة العلاجية في تنظيم رحلات العلاج
                من خلال توفير المستشفيات والأطباء والمترجمين
                الطبيين والفنادق والنقل وحجز المواعيد.
              </p>

              <div className="medical-list">

                <div>
                  <span>+</span>
                  <strong>المستشفيات</strong>
                </div>

                <div>
                  <span>+</span>
                  <strong>الأطباء</strong>
                </div>

                <div>
                  <span>+</span>
                  <strong>المترجمين الطبيين</strong>
                </div>

                <div>
                  <span>+</span>
                  <strong>الفنادق</strong>
                </div>

                <div>
                  <span>+</span>
                  <strong>النقل</strong>
                </div>

                <div>
                  <span>+</span>
                  <strong>حجز المواعيد</strong>
                </div>

              </div>

            </div>

            <div className="medical-visual reveal">

              <div className="medical-circle">
                <div>
                  <span>✚</span>
                  <strong>CARE</strong>
                  <small>YEMEN Rahhal</small>
                </div>
              </div>

              <div className="medical-orbit" />

              <div className="medical-tag tag-one">
                01 · Hospital
              </div>

              <div className="medical-tag tag-two">
                02 · Translation
              </div>

              <div className="medical-tag tag-three">
                03 · Transport
              </div>

            </div>

          </div>

        </section>

        {/* ================= GOALS ================= */}

        <section className="goals section">
          <div className="container">

            <div className="section-head reveal">
              <div>
                <span className="section-kicker">
                  PROJECT GOALS
                </span>

                <h2>
                  أهداف المشروع
                  <br />
                  <span>وأثره.</span>
                </h2>
              </div>
            </div>

            <div className="goals-grid">

              {goals.map((goal, index) => (
                <div className="goal-card reveal" key={goal}>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{goal}</p>

                  <b>↗</b>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= TECHNOLOGY ================= */}

        <section id="technology" className="technology section">

          <div className="container">

            <div className="section-head reveal">
              <div>
                <span className="section-kicker">
                  TECHNOLOGY STACK
                </span>

                <h2>
                  التقنيات
                  <br />
                  <span>المستخدمة.</span>
                </h2>
              </div>

              <p>
                يعتمد المشروع على مجموعة من التقنيات لبناء
                تطبيق الهاتف وموقع الويب والـ Backend وقاعدة
                البيانات والخرائط والإشعارات والذكاء الاصطناعي.
              </p>
            </div>

            <div className="technology-grid">

              {technologies.map((technology, index) => (
                <article
                  className="technology-card reveal"
                  key={technology.name}
                >

                  <div className="technology-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="technology-icon">
                    {technology.icon}
                  </div>

                  <h3>{technology.name}</h3>

                  <p>{technology.text}</p>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* ================= ADMIN ================= */}

        <section className="admin section">

          <div className="container admin-layout">

            <div className="admin-card reveal">

              <div className="admin-card-header">
                <span>ADMIN SYSTEM</span>
                <b>●</b>
              </div>

              <div className="admin-card-body">

                <div className="admin-row">
                  <span>01</span>
                  <strong>المستخدمين</strong>
                </div>

                <div className="admin-row">
                  <span>02</span>
                  <strong>مقدمي الخدمات</strong>
                </div>

                <div className="admin-row">
                  <span>03</span>
                  <strong>الحجوزات</strong>
                </div>

                <div className="admin-row">
                  <span>04</span>
                  <strong>التقييمات</strong>
                </div>

                <div className="admin-row">
                  <span>05</span>
                  <strong>المحتوى السياحي</strong>
                </div>

                <div className="admin-row">
                  <span>06</span>
                  <strong>التقارير والإحصائيات</strong>
                </div>

              </div>

            </div>

            <div className="admin-content reveal">

              <span className="section-kicker">
                SYSTEM MANAGEMENT
              </span>

              <h2>
                إدارة النظام
                <br />
                <span>من مكان واحد.</span>
              </h2>

              <p>
                توفر لوحة تحكم للإدارة تشمل إدارة المستخدمين،
                اعتماد مقدمي الخدمات، إدارة الحجوزات، متابعة
                التقييمات، إدارة المحتوى السياحي، والتقارير
                والإحصائيات.
              </p>

            </div>

          </div>

        </section>

        {/* ================= REVENUE ================= */}

        <section className="revenue section">

          <div className="container">

            <div className="section-head reveal">
              <div>
                <span className="section-kicker">
                  BUSINESS MODEL
                </span>

                <h2>
                  نموذج
                  <br />
                  <span>الربح.</span>
                </h2>
              </div>

              <p>
                يحقق المشروع أرباحًا من خلال مجموعة من مصادر
                الدخل المرتبطة بمقدمي الخدمات والحجوزات والشراكات.
              </p>
            </div>

            <div className="revenue-grid">

              {revenue.map((item, index) => (
                <div className="revenue-card reveal" key={item}>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="revenue-icon">
                    ◈
                  </div>

                  <p>{item}</p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ================= VALUE ================= */}

        <section className="value section">

          <div className="container value-box reveal">

            <div className="value-mark">
              YT
            </div>

            <span className="section-kicker">
              ADDED VALUE
            </span>

            <h2>
              أكثر من مجرد
              <br />
              <span>تطبيق حجوزات.</span>
            </h2>

            <p>
              يتميز يمن  رحال بأنه ليس مجرد تطبيق حجوزات، بل
              منصة ذكية متكاملة تجمع رحلة المسافر بالكامل في
              مكان واحد، وتستخدم الذكاء الاصطناعي لتقديم تجربة
              سفر شخصية وسهلة، مما يساهم في تطوير قطاع السياحة
              والسفر في اليمن.
            </p>

          </div>

        </section>

        {/* ================= TEAM ================= */}

        <section id="team" className="team section">

          <div className="container">

            <div className="section-head reveal">
              <div>
                <span className="section-kicker">
                  THE TEAM
                </span>

                <h2>
                  فريق
                  <br />
                  <span>يمن  رحال.</span>
                </h2>
              </div>

              <div className="team-count">
                <strong>07</strong>
                <span>أعضاء<br />الفريق</span>
              </div>
            </div>

            <div className="team-grid">

              {team.map((member, index) => (
                <article className="team-card reveal" key={member}>

                  <div className="team-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="team-avatar">
                    {member.charAt(0)}
                  </div>

                  <div className="team-info">
                    <small>فريق المشروع</small>
                    <h3>{member}</h3>
                  </div>

                  <span className="team-arrow">
                    ↗
                  </span>

                </article>
              ))}

            </div>

            {/* ================= SUPERVISOR ================= */}

            <div className="supervisor reveal">

              <div className="supervisor-decoration" />

              <div className="supervisor-photo">

                <div className="photo-ring">
                  <img
                    src="/images/supervisor2.jfif"
                    alt="المشرف الأكاديمي"
                  />
                </div>

                <div className="supervisor-badge">
                  <span>★</span>
                  المشرف الأكاديمي
                </div>

              </div>

              <div className="supervisor-content">

                <span className="section-kicker">
                  PROJECT SUPERVISOR
                </span>

                <h2>
                  المشرف
                  <br />
                  <span>الأكاديمي.</span>
                </h2>

                <p className="supervisor-description">
                  بإشراف الدكتور منير  تم تطوير مشروع يمن  رحال
                  ليجمع بين التقنية والذكاء الاصطناعي والسياحة الرقمية.
                </p>

                <div className="supervisor-name">
                  <small>المشرف الأكاديمي</small>
                  <h3>د.منير المخلافي</h3>
                  <p>عميد ورئيس قسم ال IT</p>
                </div>

                <div className="supervisor-text">
                  المشرف الأكاديمي على مشروع يمن  رحال، والمساهم
                  في توجيه الفريق والإشراف على تطوير المشروع من
                  الناحية الأكاديمية والتقنية.
                </div>

                <div className="supervisor-footer">
                  <span>YEMEN Rahhal</span>
                  <span>GRADUATION PROJECT • 2026</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= VISION ================= */}

        <section id="vision" className="vision">

          <div className="vision-glow" />

          <div className="container vision-content reveal">

            <span className="section-kicker">
              FUTURE VISION
            </span>

            <h2>
              من اليمن
              <br />
              <span>إلى العالم.</span>
            </h2>

            <p>
              أن يصبح يمن  رحال المنصة الوطنية الأولى للسفر
              والسياحة والعلاج في اليمن، مع إمكانية التوسع مستقبلًا
              لخدمة المسافرين في المنطقة العربية.
            </p>

            <div className="vision-line">
              <span />
              <strong>YEMEN Rahhal · 2026</strong>
              <span />
            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container">

          <div className="footer-top">

            <div className="footer-brand">

              <div className="logo footer-logo">

                <span className="logo-mark">
                  <span>YT</span>
                </span>

                <span className="logo-content">
                  <strong>يمن  رحال</strong>
                  <small>YEMEN Rahhal</small>
                </span>

              </div>

              <p>
                منصة رقمية ذكية تجمع جميع خدمات السفر والسياحة
                والعلاج داخل اليمن وخارجها في مكان واحد.
              </p>

            </div>

            <div className="footer-nav">

              <div>
                <small>EXPLORE</small>

                <button onClick={() => scrollTo("about")}>
                  عن المشروع
                </button>

                <button onClick={() => scrollTo("services")}>
                  الخدمات
                </button>

                <button onClick={() => scrollTo("ai")}>
                  السياحة الذكية
                </button>
              </div>

              <div>
                <small>PROJECT</small>

                <button onClick={() => scrollTo("technology")}>
                  التقنيات
                </button>

                <button onClick={() => scrollTo("team")}>
                  الفريق
                </button>

                <button onClick={() => scrollTo("vision")}>
                  الرؤية
                </button>
              </div>

            </div>

          </div>

          <div className="footer-bottom">

            <span>
              © 2026 Yemen Rahal. Graduation Project.
            </span>

            <span>
              MADE WITH <b>YT</b> IN YEMEN
            </span>

            <button
              onClick={() => scrollTo("home")}
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
