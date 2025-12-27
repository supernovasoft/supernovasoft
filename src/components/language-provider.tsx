import { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ar" | "tr";

type LanguageProviderProps = {
    children: React.ReactNode;
    defaultLanguage?: Language;
    storageKey?: string;
};

type LanguageProviderState = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
    isRTL: boolean;
};

const initialState: LanguageProviderState = {
    language: "en",
    setLanguage: () => null,
    t: (key: string) => key,
    isRTL: false,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

// Translations object
const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navbar
        "nav.services": "Services",
        "nav.blog": "Blog",
        "nav.tools": "Tools",
        "nav.contact": "Contact",
        "nav.getStarted": "Get Started",

        // Hero
        "hero.badge": "Transforming Ideas into Digital Excellence",
        "hero.title1": "We Build",
        "hero.titleHighlight": "Exceptional",
        "hero.title2": "Digital Experiences",
        "hero.description": "Supernova Soft delivers enterprise-grade web solutions, cloud infrastructure, and telecommunication systems that drive your business forward.",
        "hero.cta": "Start Your Project",
        "hero.ctaSecondary": "Explore Services",
        "hero.feature1": "Enterprise Security",
        "hero.feature2": "High Performance",
        "hero.feature3": "Global Scale",
        "hero.scroll": "Scroll",

        // Services
        "services.subtitle": "What We Offer",
        "services.title": "Our",
        "services.titleHighlight": "Digital Services",
        "services.description": "Comprehensive solutions designed to transform and elevate your business",
        "services.web.title": "Web Development",
        "services.web.description": "We create responsive, high-performance web applications using cutting-edge technologies and modern frameworks.",
        "services.web.feature1": "Full-Stack Development",
        "services.web.feature2": "E-Commerce Platforms",
        "services.web.feature3": "Progressive Web Apps",
        "services.web.feature4": "API Development & Integration",
        "services.cloud.title": "Cloud & DevOps",
        "services.cloud.description": "We architect and optimize your cloud infrastructure for maximum scalability, performance, and cost-efficiency.",
        "services.cloud.feature1": "AWS Cloud Architecture",
        "services.cloud.feature2": "CI/CD Automation",
        "services.cloud.feature3": "Container Orchestration",
        "services.cloud.feature4": "Infrastructure as Code",
        "services.telecom.title": "Telecommunication",
        "services.telecom.description": "We deliver enterprise-grade telecommunication solutions including VoIP, PBX systems, and contact centers.",
        "services.telecom.feature1": "Virtual PBX Systems",
        "services.telecom.feature2": "Contact Center Solutions",
        "services.telecom.feature3": "VoIP Infrastructure",
        "services.telecom.feature4": "HD Voice Quality",

        // Tools
        "tools.subtitle": "Free Tool",
        "tools.title1": "Domain & IP",
        "tools.title2": "Query Engine",
        "tools.description": "Instantly analyze any domain or IP address. Get comprehensive information including DNS records, WHOIS data, geolocation, and security insights.",
        "tools.placeholder": "Enter domain or IP address...",
        "tools.analyze": "Analyze",
        "tools.demo1": "$ analyze google.com",
        "tools.demo2": "DNS Records: A, AAAA, MX, TXT",
        "tools.demo3": "SSL Certificate: Valid",
        "tools.demo4": "Security: No threats detected",
        "tools.demo5": "Performance: Excellent",

        // Solutions
        "solutions.subtitle": "Why Choose Us",
        "solutions.title": "Built for",
        "solutions.titleHighlight": "Excellence",
        "solutions.description": "We combine cutting-edge technology with proven methodologies to deliver exceptional results",
        "solutions.security.title": "Enterprise Security",
        "solutions.security.description": "Bank-grade security with encryption, DDoS protection, and continuous monitoring.",
        "solutions.cloud.title": "Cloud Infrastructure",
        "solutions.cloud.description": "Scalable AWS architecture with auto-scaling and multi-region deployment.",
        "solutions.telecom.title": "Telecom Solutions",
        "solutions.telecom.description": "Enterprise VoIP and contact center systems with crystal-clear voice quality.",
        "solutions.performance.title": "Performance",
        "solutions.performance.description": "Optimized applications with sub-second load times and 99.9% uptime.",
        "solutions.scalability.title": "Scalability",
        "solutions.scalability.description": "Infrastructure that grows with your business, from startup to enterprise.",
        "solutions.compliance.title": "Compliance",
        "solutions.compliance.description": "GDPR, SOC2, and industry-standard compliance built into every solution.",
        "solutions.stat1.value": "99.9%",
        "solutions.stat1.label": "Uptime",
        "solutions.stat2.value": "50+",
        "solutions.stat2.label": "Projects",
        "solutions.stat3.value": "24/7",
        "solutions.stat3.label": "Support",

        // Contact
        "contact.subtitle": "Contact Us",
        "contact.title": "Let's Build",
        "contact.titleHighlight": "Together",
        "contact.description": "Ready to transform your digital presence? Get in touch and let's discuss your project",
        "contact.location": "Location",
        "contact.locationValue": "Istanbul, Turkey",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.social": "Follow us on social media",
        "contact.form.name": "Name",
        "contact.form.namePlaceholder": "John Doe",
        "contact.form.email": "Email",
        "contact.form.emailPlaceholder": "john@example.com",
        "contact.form.subject": "Subject",
        "contact.form.subjectPlaceholder": "How can we help?",
        "contact.form.message": "Message",
        "contact.form.messagePlaceholder": "Tell us about your project...",
        "contact.form.submit": "Send Message",

        // Footer
        "footer.description": "Transforming ideas into exceptional digital experiences. We build enterprise-grade solutions that drive business growth and innovation.",
        "footer.quickLinks": "Quick Links",
        "footer.services": "Services",
        "footer.contact": "Contact",
        "footer.webDev": "Web Development",
        "footer.cloudDevOps": "Cloud & DevOps",
        "footer.telecom": "Telecommunication",
        "footer.security": "Security Solutions",
        "footer.copyright": "Supernova Soft. All rights reserved.",
        "footer.privacy": "Privacy",
        "footer.terms": "Terms",
        "footer.cookies": "Cookies",
    },
    ar: {
        // Navbar
        "nav.services": "الخدمات",
        "nav.blog": "المدونة",
        "nav.tools": "الأدوات",
        "nav.contact": "اتصل بنا",
        "nav.getStarted": "ابدأ الآن",

        // Hero
        "hero.badge": "نحوّل الأفكار إلى تميز رقمي",
        "hero.title1": "نبني",
        "hero.titleHighlight": "تجارب رقمية",
        "hero.title2": "استثنائية",
        "hero.description": "سوبرنوفا سوفت تقدم حلولاً رقمية على مستوى المؤسسات، بنية تحتية سحابية، وأنظمة اتصالات تدفع أعمالك للأمام.",
        "hero.cta": "ابدأ مشروعك",
        "hero.ctaSecondary": "استكشف الخدمات",
        "hero.feature1": "أمان المؤسسات",
        "hero.feature2": "أداء عالي",
        "hero.feature3": "نطاق عالمي",
        "hero.scroll": "مرر للأسفل",

        // Services
        "services.subtitle": "ما نقدمه",
        "services.title": "خدماتنا",
        "services.titleHighlight": "الرقمية",
        "services.description": "حلول شاملة مصممة لتحويل وتطوير أعمالك",
        "services.web.title": "تطوير الويب",
        "services.web.description": "ننشئ تطبيقات ويب سريعة الاستجابة وعالية الأداء باستخدام أحدث التقنيات والأطر الحديثة.",
        "services.web.feature1": "تطوير متكامل",
        "services.web.feature2": "منصات التجارة الإلكترونية",
        "services.web.feature3": "تطبيقات الويب التقدمية",
        "services.web.feature4": "تطوير وتكامل API",
        "services.cloud.title": "السحابة و DevOps",
        "services.cloud.description": "نصمم ونحسن بنيتك التحتية السحابية لأقصى قابلية للتوسع والأداء والكفاءة.",
        "services.cloud.feature1": "هندسة سحابة AWS",
        "services.cloud.feature2": "أتمتة CI/CD",
        "services.cloud.feature3": "تنسيق الحاويات",
        "services.cloud.feature4": "البنية التحتية كرمز",
        "services.telecom.title": "الاتصالات",
        "services.telecom.description": "نقدم حلول اتصالات على مستوى المؤسسات تشمل VoIP وأنظمة PBX ومراكز الاتصال.",
        "services.telecom.feature1": "أنظمة PBX الافتراضية",
        "services.telecom.feature2": "حلول مراكز الاتصال",
        "services.telecom.feature3": "بنية VoIP التحتية",
        "services.telecom.feature4": "جودة صوت عالية الدقة",

        // Tools
        "tools.subtitle": "أداة مجانية",
        "tools.title1": "محرك استعلام",
        "tools.title2": "النطاق و IP",
        "tools.description": "حلل أي نطاق أو عنوان IP فوراً. احصل على معلومات شاملة تتضمن سجلات DNS وبيانات WHOIS والموقع الجغرافي ورؤى الأمان.",
        "tools.placeholder": "أدخل النطاق أو عنوان IP...",
        "tools.analyze": "تحليل",
        "tools.demo1": "$ تحليل google.com",
        "tools.demo2": "سجلات DNS: A, AAAA, MX, TXT",
        "tools.demo3": "شهادة SSL: صالحة",
        "tools.demo4": "الأمان: لا توجد تهديدات",
        "tools.demo5": "الأداء: ممتاز",

        // Solutions
        "solutions.subtitle": "لماذا تختارنا",
        "solutions.title": "مبني من أجل",
        "solutions.titleHighlight": "التميز",
        "solutions.description": "نجمع بين التكنولوجيا المتطورة والمنهجيات المثبتة لتقديم نتائج استثنائية",
        "solutions.security.title": "أمان المؤسسات",
        "solutions.security.description": "أمان بمستوى البنوك مع التشفير وحماية DDoS والمراقبة المستمرة.",
        "solutions.cloud.title": "البنية السحابية",
        "solutions.cloud.description": "هندسة AWS قابلة للتوسع مع التوسع التلقائي والنشر متعدد المناطق.",
        "solutions.telecom.title": "حلول الاتصالات",
        "solutions.telecom.description": "أنظمة VoIP ومراكز اتصال للمؤسسات بجودة صوت فائقة الوضوح.",
        "solutions.performance.title": "الأداء",
        "solutions.performance.description": "تطبيقات محسنة بأوقات تحميل أقل من ثانية ووقت تشغيل 99.9%.",
        "solutions.scalability.title": "قابلية التوسع",
        "solutions.scalability.description": "بنية تحتية تنمو مع أعمالك، من شركة ناشئة إلى مؤسسة.",
        "solutions.compliance.title": "الامتثال",
        "solutions.compliance.description": "GDPR و SOC2 والامتثال لمعايير الصناعة مدمج في كل حل.",
        "solutions.stat1.value": "99.9%",
        "solutions.stat1.label": "وقت التشغيل",
        "solutions.stat2.value": "+50",
        "solutions.stat2.label": "مشروع",
        "solutions.stat3.value": "24/7",
        "solutions.stat3.label": "الدعم",

        // Contact
        "contact.subtitle": "اتصل بنا",
        "contact.title": "لنبني",
        "contact.titleHighlight": "معاً",
        "contact.description": "مستعد لتحويل حضورك الرقمي؟ تواصل معنا ولنناقش مشروعك",
        "contact.location": "الموقع",
        "contact.locationValue": "إسطنبول، تركيا",
        "contact.email": "البريد الإلكتروني",
        "contact.phone": "الهاتف",
        "contact.social": "تابعنا على وسائل التواصل الاجتماعي",
        "contact.form.name": "الاسم",
        "contact.form.namePlaceholder": "محمد أحمد",
        "contact.form.email": "البريد الإلكتروني",
        "contact.form.emailPlaceholder": "mohamed@example.com",
        "contact.form.subject": "الموضوع",
        "contact.form.subjectPlaceholder": "كيف يمكننا مساعدتك؟",
        "contact.form.message": "الرسالة",
        "contact.form.messagePlaceholder": "أخبرنا عن مشروعك...",
        "contact.form.submit": "إرسال الرسالة",

        // Footer
        "footer.description": "نحوّل الأفكار إلى تجارب رقمية استثنائية. نبني حلولاً على مستوى المؤسسات تدفع نمو الأعمال والابتكار.",
        "footer.quickLinks": "روابط سريعة",
        "footer.services": "الخدمات",
        "footer.contact": "اتصل بنا",
        "footer.webDev": "تطوير الويب",
        "footer.cloudDevOps": "السحابة و DevOps",
        "footer.telecom": "الاتصالات",
        "footer.security": "حلول الأمان",
        "footer.copyright": "سوبرنوفا سوفت. جميع الحقوق محفوظة.",
        "footer.privacy": "الخصوصية",
        "footer.terms": "الشروط",
        "footer.cookies": "ملفات تعريف الارتباط",
    },
    tr: {
        // Navbar
        "nav.services": "Hizmetler",
        "nav.blog": "Blog",
        "nav.tools": "Araçlar",
        "nav.contact": "İletişim",
        "nav.getStarted": "Başlayın",

        // Hero
        "hero.badge": "Fikirleri Dijital Mükemmelliğe Dönüştürüyoruz",
        "hero.title1": "Olağanüstü",
        "hero.titleHighlight": "Dijital Deneyimler",
        "hero.title2": "İnşa Ediyoruz",
        "hero.description": "Supernova Soft, işinizi ileriye taşıyan kurumsal düzeyde web çözümleri, bulut altyapısı ve telekomünikasyon sistemleri sunar.",
        "hero.cta": "Projenizi Başlatın",
        "hero.ctaSecondary": "Hizmetleri Keşfedin",
        "hero.feature1": "Kurumsal Güvenlik",
        "hero.feature2": "Yüksek Performans",
        "hero.feature3": "Küresel Ölçek",
        "hero.scroll": "Kaydır",

        // Services
        "services.subtitle": "Neler Sunuyoruz",
        "services.title": "Dijital",
        "services.titleHighlight": "Hizmetlerimiz",
        "services.description": "İşinizi dönüştürmek ve yükseltmek için tasarlanmış kapsamlı çözümler",
        "services.web.title": "Web Geliştirme",
        "services.web.description": "En son teknolojileri ve modern çerçeveleri kullanarak duyarlı, yüksek performanslı web uygulamaları oluşturuyoruz.",
        "services.web.feature1": "Full-Stack Geliştirme",
        "services.web.feature2": "E-Ticaret Platformları",
        "services.web.feature3": "Progresif Web Uygulamaları",
        "services.web.feature4": "API Geliştirme ve Entegrasyon",
        "services.cloud.title": "Bulut & DevOps",
        "services.cloud.description": "Maksimum ölçeklenebilirlik, performans ve maliyet verimliliği için bulut altyapınızı tasarlayıp optimize ediyoruz.",
        "services.cloud.feature1": "AWS Bulut Mimarisi",
        "services.cloud.feature2": "CI/CD Otomasyonu",
        "services.cloud.feature3": "Konteyner Orkestrasyonu",
        "services.cloud.feature4": "Kod Olarak Altyapı",
        "services.telecom.title": "Telekomünikasyon",
        "services.telecom.description": "VoIP, PBX sistemleri ve çağrı merkezleri dahil kurumsal düzeyde telekomünikasyon çözümleri sunuyoruz.",
        "services.telecom.feature1": "Sanal PBX Sistemleri",
        "services.telecom.feature2": "Çağrı Merkezi Çözümleri",
        "services.telecom.feature3": "VoIP Altyapısı",
        "services.telecom.feature4": "HD Ses Kalitesi",

        // Tools
        "tools.subtitle": "Ücretsiz Araç",
        "tools.title1": "Domain & IP",
        "tools.title2": "Sorgulama Motoru",
        "tools.description": "Herhangi bir domain veya IP adresini anında analiz edin. DNS kayıtları, WHOIS verileri, coğrafi konum ve güvenlik içgörüleri dahil kapsamlı bilgi alın.",
        "tools.placeholder": "Domain veya IP adresi girin...",
        "tools.analyze": "Analiz Et",
        "tools.demo1": "$ analyze google.com",
        "tools.demo2": "DNS Kayıtları: A, AAAA, MX, TXT",
        "tools.demo3": "SSL Sertifikası: Geçerli",
        "tools.demo4": "Güvenlik: Tehdit tespit edilmedi",
        "tools.demo5": "Performans: Mükemmel",

        // Solutions
        "solutions.subtitle": "Neden Bizi Seçmelisiniz",
        "solutions.title": "Mükemmellik İçin",
        "solutions.titleHighlight": "İnşa Edildi",
        "solutions.description": "Olağanüstü sonuçlar sunmak için son teknolojiyi kanıtlanmış metodolojilerle birleştiriyoruz",
        "solutions.security.title": "Kurumsal Güvenlik",
        "solutions.security.description": "Şifreleme, DDoS koruması ve sürekli izleme ile banka düzeyinde güvenlik.",
        "solutions.cloud.title": "Bulut Altyapısı",
        "solutions.cloud.description": "Otomatik ölçeklendirme ve çoklu bölge dağıtımı ile ölçeklenebilir AWS mimarisi.",
        "solutions.telecom.title": "Telekom Çözümleri",
        "solutions.telecom.description": "Kristal netliğinde ses kalitesiyle kurumsal VoIP ve çağrı merkezi sistemleri.",
        "solutions.performance.title": "Performans",
        "solutions.performance.description": "Saniyenin altında yükleme süreleri ve %99.9 çalışma süresi ile optimize edilmiş uygulamalar.",
        "solutions.scalability.title": "Ölçeklenebilirlik",
        "solutions.scalability.description": "Startup'tan kurumsal düzeye, işinizle birlikte büyüyen altyapı.",
        "solutions.compliance.title": "Uyumluluk",
        "solutions.compliance.description": "Her çözümde yerleşik GDPR, SOC2 ve endüstri standartlarına uyumluluk.",
        "solutions.stat1.value": "%99.9",
        "solutions.stat1.label": "Çalışma Süresi",
        "solutions.stat2.value": "50+",
        "solutions.stat2.label": "Proje",
        "solutions.stat3.value": "7/24",
        "solutions.stat3.label": "Destek",

        // Contact
        "contact.subtitle": "Bize Ulaşın",
        "contact.title": "Birlikte",
        "contact.titleHighlight": "İnşa Edelim",
        "contact.description": "Dijital varlığınızı dönüştürmeye hazır mısınız? İletişime geçin ve projenizi konuşalım",
        "contact.location": "Konum",
        "contact.locationValue": "İstanbul, Türkiye",
        "contact.email": "E-posta",
        "contact.phone": "Telefon",
        "contact.social": "Sosyal medyada bizi takip edin",
        "contact.form.name": "Ad Soyad",
        "contact.form.namePlaceholder": "Ahmet Yılmaz",
        "contact.form.email": "E-posta",
        "contact.form.emailPlaceholder": "ahmet@ornek.com",
        "contact.form.subject": "Konu",
        "contact.form.subjectPlaceholder": "Size nasıl yardımcı olabiliriz?",
        "contact.form.message": "Mesaj",
        "contact.form.messagePlaceholder": "Projeniz hakkında bilgi verin...",
        "contact.form.submit": "Mesaj Gönder",

        // Footer
        "footer.description": "Fikirleri olağanüstü dijital deneyimlere dönüştürüyoruz. İş büyümesini ve inovasyonu destekleyen kurumsal düzeyde çözümler inşa ediyoruz.",
        "footer.quickLinks": "Hızlı Bağlantılar",
        "footer.services": "Hizmetler",
        "footer.contact": "İletişim",
        "footer.webDev": "Web Geliştirme",
        "footer.cloudDevOps": "Bulut & DevOps",
        "footer.telecom": "Telekomünikasyon",
        "footer.security": "Güvenlik Çözümleri",
        "footer.copyright": "Supernova Soft. Tüm hakları saklıdır.",
        "footer.privacy": "Gizlilik",
        "footer.terms": "Şartlar",
        "footer.cookies": "Çerezler",
    },
};

// Detect browser language
function getBrowserLanguage(): Language {
    if (typeof window === "undefined") return "en";

    const browserLang = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || "";
    const langCode = browserLang.split("-")[0].toLowerCase();

    if (langCode === "ar") return "ar";
    if (langCode === "tr") return "tr";
    return "en";
}

export function LanguageProvider({
    children,
    defaultLanguage,
    storageKey = "app-language",
}: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window === "undefined") return defaultLanguage || "en";

        // Check localStorage first
        const stored = localStorage.getItem(storageKey) as Language;
        if (stored && (stored === "en" || stored === "ar" || stored === "tr")) {
            return stored;
        }

        // Fall back to browser language detection
        return defaultLanguage || getBrowserLanguage();
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Set direction and language attributes
        root.dir = language === "ar" ? "rtl" : "ltr";
        root.lang = language;

        // Add/remove RTL class for styling
        root.classList.remove("ltr", "rtl");
        root.classList.add(language === "ar" ? "rtl" : "ltr");
    }, [language]);

    const t = (key: string): string => {
        return translations[language][key] || translations["en"][key] || key;
    };

    const setLanguage = (lang: Language) => {
        localStorage.setItem(storageKey, lang);
        setLanguageState(lang);
    };

    const value: LanguageProviderState = {
        language,
        setLanguage,
        t,
        isRTL: language === "ar",
    };

    return (
        <LanguageProviderContext.Provider value={value}>
            {children}
        </LanguageProviderContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageProviderContext);
    if (context === undefined)
        throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};
