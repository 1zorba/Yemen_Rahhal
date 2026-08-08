import React, { useEffect, useState } from "react";
import "./style.css";

const team = [
  {
    name: "محمد الشيعاني",
    role: "فريق المشروع",
    number: "01",
  },
  {
    name: "وسيم مفتاح",
    role: "فريق المشروع",
    number: "02",
  },
  {
    name: "مهند جواح",
    role: "فريق المشروع",
    number: "03",
  },
  {
    name: "نور الدين مفتاح",
    role: "فريق المشروع",
    number: "04",
  },
  {
    name: "فادي النويره",
    role: "فريق المشروع",
    number: "05",
  },
  {
    name: "محمد حميد",
    role: "فريق المشروع",
    number: "06",
  },
  {
    name: "بشير كردي",
    role: "فريق المشروع",
    number: "07",
  },
];

const services = [
  {
    icon: "✈",
    title: "مكاتب السفر",
    description:
      "اكتشف خدمات السفر والتأشيرات وحجوزات الطيران والرحلات الخارجية والداخلية من خلال منصة واحدة.",
    tag: "TRAVEL",
  },
  {
    icon: "⌂",
    title: "الفنادق والإقامة",
    description:
      "ابحث عن أماكن الإقامة المناسبة، قارن الخيارات والأسعار واستكشف التقييمات قبل اتخاذ قرارك.",
    tag: "STAY",
  },
  {
    icon: "◈",
    title: "تأجير السيارات",
    description:
      "احصل على وسيلة النقل المناسبة لرحلتك، سواء كنت تبحث عن سيارة مع سائق أو بدون سائق.",
    tag: "DRIVE",
  },
  {
    icon: "✦",
    title: "المرشد السياحي",
    description:
      "تواصل مع مرشدين محليين وخارجيين لتنظيم رحلتك واكتشاف الأماكن بطريقة أكثر متعة.",
    tag: "GUIDE",
  },
  {
    icon: "✚",
    title: "السياحة العلاجية",
    description:
      "نظم رحلتك العلاجية من خلال الوصول إلى المستشفيات والأطباء والمترجمين وخدمات النقل والإقامة.",
    tag: "MEDICAL",
  },
  {
    icon: "◎",
    title: "الشحن والخدمات",
    description:
      "الوصول إلى خدمات الشحن والتصدير وغيرها من الخدمات المساندة المرتبطة بالسفر والتنقل.",
    tag: "SERVICES",
  },
];

const steps = [
  {
    number: "01",
    title: "أخبرنا عن رحلتك",
    text: "حدد وجهتك وميزانيتك ومدة الرحلة وعدد الأشخاص واهتماماتك.",
  },
  {
    number: "02",
    title: "يفهم النظام احتياجاتك",
    text: "يقوم النظام بتحليل المعلومات لبناء تصور يناسب احتياجاتك.",
  },
  {
    number: "03",
    title: "احصل على اقتراحات ذكية",
    text: "يقترح لك الوجهات والإقامة والنقل والأنشطة المناسبة.",
  },
  {
    number: "04",
    title: "ابدأ رحلتك",
    text: "تحصل على تصور متكامل يساعدك على إدارة رحلتك بسهولة.",
  },
];

const technologies = [
  {
    name: "Flutter",
    text: "تطبيق الهاتف",
  },
  {
    name: "React.js",
    text: "موقع الويب",
  },
  {
    name: "Laravel",
    text: "Backend",
  },
  {
    name: "MySQL",
    text: "قاعدة البيانات",
  },
  {
    name: "AI",
    text: "الذكاء الاصطناعي",
  },
  {
    name: "Firebase",
    text: "الإشعارات",
  },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    closeMenu();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="yemen-app" dir="rtl">
      {/* ================= NAVBAR ================= */}
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container navbar-inner">
          <button
            className="brand"
            onClick={() => scrollToSection("home")}
            aria-label="يمن ترحال"
          >
            <span className="brand-symbol">
              <span className="brand-symbol-ring"></span>
              <span className="brand-symbol-plane">✦</span>
            </span>

            <span className="brand-text">
              <strong>يمن ترحال</strong>
              <small>YEMEN TARHAL</small>
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <button onClick={() => scrollToSection("home")}>الرئيسية</button>
            <button onClick={() => scrollToSection("about")}>عن المشروع</button>
            <button onClick={() => scrollToSection("services")}>
              الخدمات
            </button>
            <button onClick={() => scrollToSection("ai")}>
              السياحة الذكية
            </button>
            <button onClick={() => scrollToSection("technology")}>
              التقنيات
            </button>
            <button onClick={() => scrollToSection("team")}>الفريق</button>
          </nav>

          <button
            className="nav-cta"
            onClick={() => scrollToSection("vision")}
          >
            اكتشف المشروع
            <span>↗</span>
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
          <div className="hero-image"></div>
          <div className="hero-overlay"></div>
          <div className="hero-glow"></div>

          <div className="hero-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="container hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              مشروع تخرج · منصة سفر وسياحة ذكية
            </div>

            <h1>
              اكتشف اليمن
              <br />
              <em>بطريقة مختلفة.</em>
            </h1>

            <p className="hero-description">
              <strong>يمن ترحال</strong> منصة رقمية ذكية تجمع خدمات السفر
              والسياحة والعلاج في تجربة واحدة، وتستخدم الذكاء الاصطناعي
              لمساعدتك على بناء رحلة تناسبك.
            </p>

            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => scrollToSection("about")}
              >
                <span>اكتشف يمن ترحال</span>
                <i>←</i>
              </button>

              <button
                className="text-btn"
                onClick={() => scrollToSection("services")}
              >
                استكشف الخدمات
                <span>↓</span>
              </button>
            </div>

            <div className="hero-bottom">
              <div className="hero-location">
                <span className="location-icon">⌖</span>
                <div>
                  <small>انطلق من هنا</small>
                  <strong>اليمن · العالم</strong>
                </div>
              </div>

              <div className="hero-scroll">
                <span>SCROLL TO EXPLORE</span>
                <div className="scroll-line"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="intro-section">
          <div className="container intro-grid">
            <div className="intro-number">
              <span>01</span>
              <div></div>
            </div>

            <div className="intro-heading">
              <span className="eyebrow">A NEW WAY TO TRAVEL</span>
              <h2>
                رحلة واحدة،
                <br />
                <span>منصة واحدة.</span>
              </h2>
            </div>

            <div className="intro-text">
              <p>
                في عالم تتوزع فيه خدمات السفر بين عشرات المواقع والمكاتب،
                يأتي <strong>يمن ترحال</strong> ليجمع التجربة كاملة في مكان
                واحد.
              </p>

              <p>
                من التخطيط واكتشاف الوجهات، إلى اختيار الفندق والسيارة والمرشد
                والخدمات العلاجية، نصنع تجربة رقمية أكثر سهولة ووضوحًا.
              </p>

              <button
                className="arrow-link"
                onClick={() => scrollToSection("about")}
              >
                <span>تعرف على الفكرة</span>
                <i>←</i>
              </button>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="about-section section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">ABOUT THE PROJECT</span>
                <h2>
                  أكثر من مجرد
                  <br />
                  <span>تطبيق حجوزات.</span>
                </h2>
              </div>

              <p>
                يمن ترحال هو تصور لمنصة وطنية ذكية تربط المسافر بمختلف الجهات
                والخدمات المرتبطة بالسفر والسياحة والعلاج، مع تجربة رقمية
                حديثة مصممة حول احتياجات المستخدم.
              </p>
            </div>

            <div className="about-cards">
              <article className="about-card about-card-large">
                <div className="card-number">01</div>
                <div className="card-icon">✦</div>
                <h3>منصة موحدة</h3>
                <p>
                  بدل التنقل بين عدة مكاتب ومواقع وصفحات، يجد المستخدم خدمات
                  رحلته الأساسية ضمن منظومة واحدة.
                </p>
              </article>

              <article className="about-card">
                <div className="card-number">02</div>
                <div className="card-icon">◎</div>
                <h3>تجربة شخصية</h3>
                <p>
                  تتشكل الاقتراحات وفق ميزانية المستخدم واهتماماته ومدة الرحلة
                  وعدد المسافرين.
                </p>
              </article>

              <article className="about-card">
                <div className="card-number">03</div>
                <div className="card-icon">◇</div>
                <h3>سياحة أذكى</h3>
                <p>
                  دمج الذكاء الاصطناعي لمساعدة المستخدم في اكتشاف الخيارات
                  الأنسب له.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ================= PROBLEM / SOLUTION ================= */}
        <section className="problem-section section">
          <div className="container problem-grid">
            <div className="problem-visual">
              <div className="visual-image"></div>
              <div className="visual-label">
                <span>YEMEN</span>
                <strong>رحلة تبدأ بفكرة</strong>
              </div>

              <div className="floating-stamp">
                <span>YT</span>
                <small>EXPLORE<br />MORE</small>
              </div>
            </div>

            <div className="problem-content">
              <span className="eyebrow">THE PROBLEM</span>
              <h2>
                لماذا نحتاج
                <br />
                <span>يمن ترحال؟</span>
              </h2>

              <p className="lead">
                خدمات السفر موجودة، لكن الوصول إليها غالبًا ما يكون مشتتًا
                بين جهات مختلفة، مما يجعل التخطيط للرحلة أكثر تعقيدًا.
              </p>

              <div className="problem-list">
                <div>
                  <span>01</span>
                  <p>تشتت خدمات السفر بين جهات متعددة.</p>
                </div>

                <div>
                  <span>02</span>
                  <p>صعوبة الوصول إلى خدمات موثوقة.</p>
                </div>

                <div>
                  <span>03</span>
                  <p>الحاجة للتواصل مع أكثر من جهة.</p>
                </div>

                <div>
                  <span>04</span>
                  <p>غياب نظام ذكي يساعد على اتخاذ القرار.</p>
                </div>
              </div>

              <div className="solution-box">
                <div className="solution-icon">✦</div>
                <div>
                  <small>الحل</small>
                  <strong>تجميع الرحلة بالكامل في مكان واحد.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="services-section section">
          <div className="container">
            <div className="section-heading services-heading">
              <div>
                <span className="eyebrow">ONE PLATFORM · MANY SERVICES</span>
                <h2>
                  كل ما تحتاجه
                  <br />
                  <span>لرحلتك.</span>
                </h2>
              </div>

              <div className="heading-side">
                <span>06</span>
                <p>مجالات رئيسية</p>
              </div>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-top">
                    <span className="service-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="service-tag">{service.tag}</span>
                  </div>

                  <div className="service-icon">{service.icon}</div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="service-arrow">↗</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= AI SECTION ================= */}
        <section id="ai" className="ai-section">
          <div className="ai-background"></div>
          <div className="ai-grid-pattern"></div>

          <div className="container ai-container">
            <div className="ai-content">
              <div className="ai-label">
                <span className="ai-pulse"></span>
                POWERED BY ARTIFICIAL INTELLIGENCE
              </div>

              <h2>
                رحلتك ليست
                <br />
                <span>مثل أي رحلة.</span>
              </h2>

              <p>
                لأن كل مسافر لديه قصة مختلفة، يستخدم يمن ترحال الذكاء
                الاصطناعي لفهم تفضيلاتك وبناء اقتراحات سفر مخصصة لك.
              </p>

              <button
                className="ai-btn"
                onClick={() => scrollToSection("how-it-works")}
              >
                <span>كيف تعمل السياحة الذكية؟</span>
                <i>←</i>
              </button>
            </div>

            <div className="ai-interface">
              <div className="ai-window">
                <div className="ai-window-header">
                  <div className="ai-status">
                    <span></span>
                    Yemen Tarhal AI
                  </div>

                  <div className="window-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>

                <div className="ai-window-body">
                  <div className="ai-message">
                    <small>مرحبًا بك في يمن ترحال</small>
                    <strong>أخبرني، كيف تريد أن تكون رحلتك؟</strong>
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
                      <span>✦</span>
                      رحلة عائلية
                    </div>

                    <div>
                      <span>✚</span>
                      رحلة علاجية
                    </div>
                  </div>

                  <div className="ai-input">
                    <span>اختر اهتمامك...</span>
                    <button>→</button>
                  </div>
                </div>
              </div>

              <div className="ai-orbit orbit-one"></div>
              <div className="ai-orbit orbit-two"></div>

              <div className="ai-star star-one">✦</div>
              <div className="ai-star star-two">✧</div>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section id="how-it-works" className="steps-section section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">HOW IT WORKS</span>
                <h2>
                  من الفكرة
                  <br />
                  <span>إلى الرحلة.</span>
                </h2>
              </div>

              <p>
                تجربة بسيطة تبدأ بمجموعة من الأسئلة وتنتهي بتصور متكامل
                لرحلتك.
              </p>
            </div>

            <div className="steps-line">
              {steps.map((step, index) => (
                <article className="step-card" key={step.number}>
                  <div className="step-number">{step.number}</div>

                  {index !== steps.length - 1 && (
                    <div className="step-connector"></div>
                  )}

                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DESTINATIONS ================= */}
        <section className="destinations-section">
          <div className="container">
            <div className="destinations-header">
              <div>
                <span className="eyebrow">DISCOVER YEMEN</span>
                <h2>
                  وجهات
                  <br />
                  <span>تستحق أن تُكتشف.</span>
                </h2>
              </div>

              <p>
                اليمن ليس مجرد نقطة على الخريطة؛ إنه مجموعة من القصص والمناظر
                والثقافات التي تستحق أن تصل إلى العالم.
              </p>
            </div>

            <div className="destination-grid">
              <article className="destination destination-large">
                <div className="destination-image socotra"></div>
                <div className="destination-overlay"></div>
                <div className="destination-content">
                  <small>01 · ISLAND</small>
                  <h3>سقطرى</h3>
                  <p>جزيرة الأساطير والطبيعة الفريدة</p>
                </div>
              </article>

              <article className="destination">
                <div className="destination-image sanaa"></div>
                <div className="destination-overlay"></div>
                <div className="destination-content">
                  <small>02 · HERITAGE</small>
                  <h3>صنعاء القديمة</h3>
                  <p>تاريخ معماري لا يشبه أي مكان</p>
                </div>
              </article>

              <article className="destination">
                <div className="destination-image ibb"></div>
                <div className="destination-overlay"></div>
                <div className="destination-content">
                  <small>03 · NATURE</small>
                  <h3>إب</h3>
                  <p>الخضرة والجبال والضباب</p>
                </div>
              </article>

              <article className="destination destination-wide">
                <div className="destination-image haraz"></div>
                <div className="destination-overlay"></div>
                <div className="destination-content">
                  <small>04 · MOUNTAINS</small>
                  <h3>حراز</h3>
                  <p>قرى معلقة بين الجبال</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= MEDICAL TOURISM ================= */}
        <section className="medical-section section">
          <div className="container medical-grid">
            <div className="medical-content">
              <span className="eyebrow">MEDICAL TOURISM</span>

              <h2>
                عندما تكون الرحلة
                <br />
                <span>من أجل الشفاء.</span>
              </h2>

              <p>
                يهدف يمن ترحال إلى تسهيل الرحلات العلاجية خارج اليمن عبر جمع
                الخدمات التي يحتاجها المريض في تجربة واحدة، بدءًا من اختيار
                المستشفى وحتى الإقامة والنقل والمساعدة أثناء الرحلة.
              </p>

              <div className="medical-features">
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
                  <strong>المترجمون الطبيون</strong>
                </div>

                <div>
                  <span>+</span>
                  <strong>النقل والإقامة</strong>
                </div>
              </div>
            </div>

            <div className="medical-visual">
              <div className="medical-circle">
                <div className="medical-inner">
                  <span>YT</span>
                  <small>CARE · TRAVEL</small>
                </div>
              </div>

              <div className="medical-card card-a">
                <span>01</span>
                <strong>Hospital</strong>
              </div>

              <div className="medical-card card-b">
                <span>02</span>
                <strong>Translation</strong>
              </div>

              <div className="medical-card card-c">
                <span>03</span>
                <strong>Transport</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGY ================= */}
        <section id="technology" className="technology-section section">
          <div className="container">
            <div className="tech-heading">
              <div>
                <span className="eyebrow">THE TECHNOLOGY</span>
                <h2>
                  فكرة كبيرة،
                  <br />
                  <span>بتقنيات حديثة.</span>
                </h2>
              </div>

              <p>
                يعتمد المشروع على مجموعة من التقنيات الحديثة لبناء تجربة
                متكاملة قابلة للتوسع مستقبلًا.
              </p>
            </div>

            <div className="technology-grid">
              {technologies.map((technology, index) => (
                <div className="technology-card" key={technology.name}>
                  <span className="tech-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="tech-symbol">
                    {technology.name === "AI" ? "✦" : "</>"}
                  </div>

                  <h3>{technology.name}</h3>
                  <p>{technology.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= VALUE ================= */}
        <section className="value-section">
          <div className="container value-container">
            <div className="value-copy">
              <span className="eyebrow">OUR VALUE</span>
              <h2>
                نبني تجربة
                <br />
                <span>تتجاوز الحجز.</span>
              </h2>
            </div>

            <div className="value-points">
              <div className="value-point">
                <span>01</span>
                <div>
                  <h3>تجميع الخدمات</h3>
                  <p>كل احتياجات الرحلة ضمن منظومة واحدة.</p>
                </div>
              </div>

              <div className="value-point">
                <span>02</span>
                <div>
                  <h3>تجربة شخصية</h3>
                  <p>اقتراحات مبنية على احتياجات كل مستخدم.</p>
                </div>
              </div>

              <div className="value-point">
                <span>03</span>
                <div>
                  <h3>دعم السياحة اليمنية</h3>
                  <p>إبراز الوجهات والمعالم اليمنية للعالم.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TEAM ================= */}
        <section id="team" className="team-section section">
          <div className="container">
            <div className="team-heading">
              <div>
                <span className="eyebrow">THE TEAM</span>
                <h2>
                  وراء الفكرة
                  <br />
                  <span>فريق يؤمن بها.</span>
                </h2>
              </div>

              <div className="team-count">
                <strong>07</strong>
                <span>أعضاء<br />الفريق</span>
              </div>
            </div>
{/* =========================
    المشرف الأكاديمي
========================= */}
<section className="supervisor-section" id="supervisor">

  <div className="section-heading">
    <span className="section-kicker">ACADEMIC SUPERVISOR</span>

    <h2>
      المشرف <span>الأكاديمي</span>
    </h2>

    <p>
      بإشراف أكاديمي متخصص، تم تطوير مشروع يمن ترحال
      ليجمع بين التقنية والذكاء الاصطناعي والسياحة الرقمية.
    </p>
  </div>


  <div className="supervisor-single-card">

    <div className="supervisor-photo-area">

      <div className="supervisor-photo-glow"></div>

      <img
        src="/images/supervisor2.jfif"
        alt="المشرف الأكاديمي"
        className="supervisor-photo"
      />

      <div className="supervisor-photo-badge">
        ★ المشرف الأكاديمي
      </div>

    </div>


    <div className="supervisor-content">

      <span className="supervisor-label">
        PROJECT SUPERVISOR
      </span>

      <h3>
        د. اسم المشرف
      </h3>

      <p className="supervisor-title">
        أستاذ / دكتور — التخصص
      </p>

      <p className="supervisor-text">
        المشرف الأكاديمي على مشروع يمن ترحال،
        والمساهم في توجيه الفريق والإشراف على تطوير
        المشروع من الناحية الأكاديمية والتقنية.
      </p>

      <div className="supervisor-divider"></div>

      <div className="supervisor-footer">
        <span>YEMEN TARHAL</span>
        <span>GRADUATION PROJECT • 2026</span>
      </div>

    </div>

  </div>

</section>
            <div className="team-grid">
              {team.map((member) => (
                <article className="team-card" key={member.name}>
                  <div className="team-avatar">
                    <span>{member.number}</span>
                    <div className="avatar-symbol">YT</div>
                  </div>

                  <div className="team-info">
                    <small>{member.role}</small>
                    <h3>{member.name}</h3>
                  </div>

                  <span className="team-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= VISION ================= */}
        <section id="vision" className="vision-section">
          <div className="vision-image"></div>
          <div className="vision-overlay"></div>

          <div className="container vision-content">
            <span className="eyebrow">THE FUTURE</span>

            <h2>
              من اليمن
              <br />
              <em>إلى العالم.</em>
            </h2>

            <p>
              رؤيتنا أن يصبح يمن ترحال المنصة الوطنية الأولى للسفر والسياحة
              والعلاج في اليمن، وأن تتوسع مستقبلًا لخدمة المسافرين في المنطقة
              العربية.
            </p>

            <div className="vision-line">
              <span></span>
              <strong>YEMEN TARHAL · 2026</strong>
              <span></span>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="brand footer-brand-mark">
                <span className="brand-symbol">
                  <span className="brand-symbol-ring"></span>
                  <span className="brand-symbol-plane">✦</span>
                </span>

                <span className="brand-text">
                  <strong>يمن ترحال</strong>
                  <small>YEMEN TARHAL</small>
                </span>
              </div>

              <p>
                منصة رقمية ذكية تجمع السفر والسياحة والعلاج في تجربة واحدة.
              </p>
            </div>

            <div className="footer-links">
              <div>
                <small>EXPLORE</small>
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
                <small>PROJECT</small>
                <button onClick={() => scrollToSection("technology")}>
                  التقنيات
                </button>
                <button onClick={() => scrollToSection("team")}>الفريق</button>
                <button onClick={() => scrollToSection("vision")}>
                  الرؤية
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Yemen Tarhal. Graduation Project.</span>

            <span className="footer-made">
              MADE WITH <b>✦</b> IN YEMEN
            </span>

            <button
              className="back-top"
              onClick={() => scrollToSection("home")}
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