document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // TRANSLATIONS — English & Hindi
    // =============================================
    const translations = {
        en: {
            // Navbar
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-services': 'Services',
            'nav-why-us': 'Why Us',
            'nav-contact': 'Contact',
            'nav-book-btn': 'Book Your Ride',
            // Hero
            'hero-badge': 'TRAVEL SAFE. TRAVEL SMART.',
            'hero-brand-name': 'Sarva Tours & Travels',
            'hero-title': 'Your Journey<br>Begins With<br><span>Comfort &amp; Trust</span>',
            'hero-desc': 'Reliable car rental, airport transfers, local rides, and outstation travel services from Mumbai.',
            'cta-book': 'Book Your Ride',
            'cta-call': 'Call Now',
            // Contact Bar
            'contact-location-label': 'Our Location',
            'contact-email-label': 'Email Us',
            // Services
            'services-badge': '★ WHAT WE OFFER',
            'services-title': 'Our <span>Car Rental</span> Services',
            'services-desc': 'Comfortable, reliable, and professional travel solutions for every journey.',
            'service-1-title': 'Airport Transfers',
            'service-1-desc': 'On-time pickup and drop services for stress-free airport travel.',
            'service-2-title': 'Local City Rides',
            'service-2-desc': 'Convenient daily travel across Mumbai with comfortable vehicles.',
            'service-3-title': 'Outstation Trips',
            'service-3-desc': 'Safe and smooth rides for weekend getaways and long-distance travel.',
            'service-4-title': 'Corporate Travel',
            'service-4-desc': 'Professional rental solutions for business meetings and employee transport.',
            'service-5-title': 'Wedding &amp; Event Travel',
            'service-5-desc': 'Elegant transportation services for family events and special occasions.',
            'service-6-title': 'Hourly &amp; Full-Day Rental',
            'service-6-desc': 'Flexible booking options to match your schedule and travel needs.',
            'service-7-title': 'Mumbai Darshan',
            'service-7-desc': "Comfortable sightseeing rides covering Mumbai's iconic attractions.",
            'services-cta': 'Book Your Ride',
            // Why Choose Us
            'why-badge': 'WHY CHOOSE US',
            'why-title': 'The <span class="why-title-highlight">Sarva Travels</span> Promise',
            'why-desc': 'We combine premium service with friendly rates to make your journeys completely stress-free.',
            'why-card-1-title': '100% Sanitized Cars',
            'why-card-1-desc': 'Every vehicle is thoroughly cleaned and vacuumed before and after every trip.',
            'why-card-2-title': 'Verified Chauffeurs',
            'why-card-2-desc': 'Courteous, local, and experienced drivers with background checks for safety.',
            'why-card-3-title': 'Always On Time',
            'why-card-3-desc': 'Punctuality is our priority. Our driver will arrive at your pick-up point 15 mins early.',
            'why-card-4-title': 'Honest &amp; Fair Pricing',
            'why-card-4-desc': 'No hidden charges, tolls, or surprising state taxes. Clear breakdown before travel.',
            'why-cta-call': 'Call Us',
            'why-cta-whatsapp': 'WhatsApp',
            // Routes
            'routes-badge': 'POPULAR ROUTES',
            'routes-title': 'Popular Routes &amp; <span class="routes-title-highlight">Trip Packages</span>',
            'routes-desc': 'Comfortable local and outstation travel options from Mumbai for business, family trips, airport transfers, and weekend getaways.',
            'route-1-title': 'Mumbai Airport Pickup &amp; Drop',
            'route-1-desc': 'Reliable airport transfers with timely pickup and drop service.',
            'route-1-tag1': '24/7 Service',
            'route-1-tag2': 'Airport Transfer',
            'route-2-title': 'Mumbai Local City Rides',
            'route-2-desc': 'Convenient rides for meetings, shopping, daily travel, and local commutes.',
            'route-2-tag1': 'City Travel',
            'route-2-tag2': 'Local Use',
            'route-3-title': 'Mumbai Darshan',
            'route-3-desc': "Comfortable sightseeing rides covering Mumbai's iconic attractions.",
            'route-3-tag1': 'Sightseeing',
            'route-3-tag2': 'Family Trip',
            'route-4-title': 'Mumbai to Lonavala / Khandala',
            'route-4-desc': 'Smooth rides for scenic weekend getaways and relaxing hill station trips.',
            'route-4-tag1': 'Weekend Trip',
            'route-4-tag2': 'Outstation',
            'route-5-title': 'Mumbai to Pune',
            'route-5-desc': 'Safe and professional travel for business visits and family travel.',
            'route-5-tag1': 'Business Travel',
            'route-5-tag2': 'Intercity',
            'route-6-title': 'Mumbai to Shirdi / Nashik',
            'route-6-desc': 'Comfortable long-distance rides for pilgrim and leisure journeys.',
            'route-6-tag1': 'Pilgrimage',
            'route-6-tag2': 'Long Distance',
            'routes-cta': 'Plan My Trip',
            // About
            'resp-subtitle': 'ABOUT SARVA TOURS & TRAVELS',
            'resp-title': 'Your Journey,<br>Our Responsibility',
            'resp-desc': 'At Sarva Tours & Travels, we are committed to providing safe, comfortable and on-time travel solutions with well-maintained cars and professional chauffeurs.',
            'resp-bullet-1': 'Clean & Sanitized Cars',
            'resp-bullet-2': 'Experienced Drivers',
            'resp-bullet-3': 'Affordable Packages',
            'resp-bullet-4': '24/7 Customer Support',
            'resp-btn-call': 'Call Us',
            'resp-btn-whatsapp': 'WhatsApp',
            'about-pill': 'ABOUT OUR COMPANY',
            'about-title': 'Sarva Tours &amp; Travels',
            'about-p1': 'Sarva Tours &amp; Travels is a premier car rental service provider based out of Sakinaka, Andheri East, Mumbai. We have been serving travelers with premium quality mobility services, offering both local commutes and long journeys across Maharashtra.',
            'about-p2': "Our mission is to offer premium, safe, and reliable travel experiences at budget-friendly rates. Whether it's a hatchback for everyday travel or a spacious SUV for family getaways, we guarantee top-tier service.",
            'about-base-label': 'BASE LOCATION',
            'about-base-value': 'Andheri East, Mumbai',
            'about-hours-label': 'OPERATING HOURS',
            'about-hours-value': '24 Hours / 7 Days',
            'assist-title': 'Need Assistance?',
            'assist-desc': "We're here to help you 24/7 for all your travel needs.",
            'assist-call': 'Call Us',
            'assist-whatsapp': 'WhatsApp',
            // Footer
            'footer-badge': 'GET IN TOUCH',
            'footer-title': 'Contact Our Office',
            'footer-desc': 'Reach out to us directly for bookings, customized travel plans, or immediate fare quotations.',
            'footer-brand-text': 'Premium Car Rental Service provider based in Mumbai. Committed to offering you comfortable, safe, and reliable travel experiences.',
            'footer-md-label': 'Managing Directors:',
            'footer-md-names': 'Shajan &amp; Saji',
            'footer-contact-title': 'Contact Numbers',
            'footer-shajan-label': 'SHAJAN',
            'footer-saji-label': 'SAJI',
            'footer-address-title': 'Office Address',
            'footer-address-label': 'ADDRESS',
            'footer-address-value': 'Shop No. 1/3, Above Friends Hotel, Chandrakaladevi Chawl, Pipe Line, Sakinaka, Mumbai - 400 072.',
            'footer-email-label': 'EMAIL',
            'footer-copy': '&copy; 2026 Sarva Tours &amp; Travels. All Rights Reserved.',
            'footer-call': 'Call Us',
            'footer-whatsapp': 'WhatsApp',
            // Dock
            'dock-call': 'Call Us',
            'dock-whatsapp': 'WhatsApp',
        },
        hi: {
            // Navbar
            'nav-home': 'होम',
            'nav-about': 'हमारे बारे में',
            'nav-services': 'सेवाएं',
            'nav-why-us': 'हम क्यों',
            'nav-contact': 'संपर्क',
            'nav-book-btn': 'सवारी बुक करें',
            // Hero
            'hero-badge': 'सुरक्षित यात्रा। स्मार्ट यात्रा।',
            'hero-brand-name': 'सर्वा टूर्स एंड ट्रैवल्स',
            'hero-title': 'आपकी यात्रा<br>शुरू होती है<br><span>आराम और विश्वास से</span>',
            'hero-desc': 'मुंबई से विश्वसनीय कार किराया, एयरपोर्ट ट्रांसफर, स्थानीय और आउटस्टेशन यात्रा सेवाएं।',
            'cta-book': 'सवारी बुक करें',
            'cta-call': 'अभी कॉल करें',
            // Contact Bar
            'contact-location-label': 'हमारा स्थान',
            'contact-email-label': 'ईमेल करें',
            // Services
            'services-badge': '★ हम क्या प्रदान करते हैं',
            'services-title': 'हमारी <span>कार किराया</span> सेवाएं',
            'services-desc': 'हर यात्रा के लिए आरामदायक, विश्वसनीय और पेशेवर यात्रा समाधान।',
            'service-1-title': 'एयरपोर्ट ट्रांसफर',
            'service-1-desc': 'तनाव-मुक्त एयरपोर्ट यात्रा के लिए समय पर पिकअप और ड्रॉप सेवाएं।',
            'service-2-title': 'स्थानीय शहर की सवारी',
            'service-2-desc': 'आरामदायक वाहनों के साथ मुंबई भर में सुविधाजनक दैनिक यात्रा।',
            'service-3-title': 'आउटस्टेशन यात्राएं',
            'service-3-desc': 'वीकेंड गेटअवे और लंबी दूरी की यात्रा के लिए सुरक्षित और आसान सवारी।',
            'service-4-title': 'कॉर्पोरेट यात्रा',
            'service-4-desc': 'बिजनेस मीटिंग और कर्मचारी परिवहन के लिए पेशेवर किराया समाधान।',
            'service-5-title': 'शादी और इवेंट यात्रा',
            'service-5-desc': 'पारिवारिक आयोजनों और विशेष अवसरों के लिए सुरुचिपूर्ण परिवहन सेवाएं।',
            'service-6-title': 'प्रति घंटे और पूरे दिन का किराया',
            'service-6-desc': 'आपके शेड्यूल और यात्रा आवश्यकताओं के अनुसार लचीले बुकिंग विकल्प।',
            'service-7-title': 'मुंबई दर्शन',
            'service-7-desc': 'मुंबई के प्रसिद्ध आकर्षणों को कवर करने वाली आरामदायक सैर।',
            'services-cta': 'सवारी बुक करें',
            // Why Choose Us
            'why-badge': 'हमें क्यों चुनें',
            'why-title': 'The <span class="why-title-highlight">सर्वा ट्रैवल्स</span> का वादा',
            'why-desc': 'हम आपकी यात्राओं को पूरी तरह तनाव-मुक्त बनाने के लिए प्रीमियम सेवा को मित्रवत दरों के साथ जोड़ते हैं।',
            'why-card-1-title': '100% सैनिटाइज़्ड कारें',
            'why-card-1-desc': 'प्रत्येक यात्रा से पहले और बाद में हर वाहन को अच्छी तरह साफ और वैक्यूम किया जाता है।',
            'why-card-2-title': 'सत्यापित ड्राइवर',
            'why-card-2-desc': 'सुरक्षा के लिए बैकग्राउंड चेक के साथ विनम्र, स्थानीय और अनुभवी ड्राइवर।',
            'why-card-3-title': 'हमेशा समय पर',
            'why-card-3-desc': 'समयनिष्ठा हमारी प्राथमिकता है। हमारा ड्राइवर पिकअप से 15 मिनट पहले पहुंचेगा।',
            'why-card-4-title': 'ईमानदार और उचित मूल्य',
            'why-card-4-desc': 'कोई छुपे हुए शुल्क, टोल या अप्रत्याशित राज्य कर नहीं। यात्रा से पहले स्पष्ट विवरण।',
            'why-cta-call': 'हमें कॉल करें',
            'why-cta-whatsapp': 'व्हाट्सएप',
            // Routes
            'routes-badge': 'लोकप्रिय रूट',
            'routes-title': 'लोकप्रिय रूट और <span class="routes-title-highlight">यात्रा पैकेज</span>',
            'routes-desc': 'व्यापार, पारिवारिक यात्राओं, एयरपोर्ट ट्रांसफर और वीकेंड गेटअवे के लिए मुंबई से आरामदायक स्थानीय और आउटस्टेशन यात्रा विकल्प।',
            'route-1-title': 'मुंबई एयरपोर्ट पिकअप और ड्रॉप',
            'route-1-desc': 'समय पर पिकअप और ड्रॉप सेवा के साथ विश्वसनीय एयरपोर्ट ट्रांसफर।',
            'route-1-tag1': '24/7 सेवा',
            'route-1-tag2': 'एयरपोर्ट ट्रांसफर',
            'route-2-title': 'मुंबई स्थानीय शहर की सवारी',
            'route-2-desc': 'मीटिंग, शॉपिंग, दैनिक यात्रा और स्थानीय आवागमन के लिए सुविधाजनक सवारी।',
            'route-2-tag1': 'शहरी यात्रा',
            'route-2-tag2': 'स्थानीय उपयोग',
            'route-3-title': 'मुंबई दर्शन',
            'route-3-desc': 'मुंबई के प्रसिद्ध आकर्षणों को कवर करने वाली आरामदायक सैर।',
            'route-3-tag1': 'दर्शनीय स्थल',
            'route-3-tag2': 'पारिवारिक यात्रा',
            'route-4-title': 'मुंबई से लोनावला / खंडाला',
            'route-4-desc': 'सुरम्य वीकेंड गेटअवे और आरामदेह हिल स्टेशन यात्राओं के लिए आसान सवारी।',
            'route-4-tag1': 'वीकेंड ट्रिप',
            'route-4-tag2': 'आउटस्टेशन',
            'route-5-title': 'मुंबई से पुणे',
            'route-5-desc': 'व्यापारिक दौरे और पारिवारिक यात्रा के लिए सुरक्षित और पेशेवर यात्रा।',
            'route-5-tag1': 'व्यापारिक यात्रा',
            'route-5-tag2': 'इंटरसिटी',
            'route-6-title': 'मुंबई से शिरडी / नासिक',
            'route-6-desc': 'तीर्थयात्रा और अवकाश यात्राओं के लिए आरामदायक लंबी दूरी की सवारी।',
            'route-6-tag1': 'तीर्थयात्रा',
            'route-6-tag2': 'लंबी दूरी',
            'routes-cta': 'यात्रा योजना बनाएं',
            // About
            'resp-subtitle': 'सर्वा टूर्स एंड ट्रैवल्स के बारे में',
            'resp-title': 'आपकी यात्रा,<br>हमारी ज़िम्मेदारी',
            'resp-desc': 'सर्वा टूर्स एंड ट्रैवल्स में, हम अच्छी तरह से रखरखाव की गई कारों और पेशेवर ड्राइवरों के साथ सुरक्षित, आरामदायक और समय पर यात्रा समाधान प्रदान करने के लिए प्रतिबद्ध हैं।',
            'resp-bullet-1': 'साफ और सैनिटाइज़्ड कारें',
            'resp-bullet-2': 'अनुभवी ड्राइवर्स',
            'resp-bullet-3': 'किफायती पैकेज',
            'resp-bullet-4': '24/7 ग्राहक सहायता',
            'resp-btn-call': 'कॉल करें',
            'resp-btn-whatsapp': 'व्हाट्सएप',
            'about-pill': 'हमारे बारे में',
            'about-title': 'सर्वा टूर्स एंड ट्रैवल्स',
            'about-p1': 'सर्वा टूर्स एंड ट्रैवल्स साकीनाका, अंधेरी ईस्ट, मुंबई में स्थित एक प्रीमियर कार किराया सेवा प्रदाता है। हम महाराष्ट्र भर में स्थानीय और लंबी यात्राओं के लिए प्रीमियम गतिशीलता सेवाएं प्रदान कर रहे हैं।',
            'about-p2': 'हमारा मिशन किफायती दरों पर प्रीमियम, सुरक्षित और विश्वसनीय यात्रा अनुभव प्रदान करना है। चाहे रोज की यात्रा के लिए हैचबैक हो या पारिवारिक यात्राओं के लिए विशाल एसयूवी, हम उच्चतम सेवा की गारंटी देते हैं।',
            'about-base-label': 'मुख्य स्थान',
            'about-base-value': 'अंधेरी ईस्ट, मुंबई',
            'about-hours-label': 'संचालन घंटे',
            'about-hours-value': '24 घंटे / 7 दिन',
            'assist-title': 'सहायता चाहिए?',
            'assist-desc': 'हम आपकी सभी यात्रा आवश्यकताओं के लिए 24/7 यहां हैं।',
            'assist-call': 'हमें कॉल करें',
            'assist-whatsapp': 'व्हाट्सएप',
            // Footer
            'footer-badge': 'संपर्क करें',
            'footer-title': 'हमारे कार्यालय से संपर्क करें',
            'footer-desc': 'बुकिंग, कस्टमाइज़्ड यात्रा योजनाओं या तत्काल किराया उद्धरणों के लिए सीधे हमसे संपर्क करें।',
            'footer-brand-text': 'मुंबई में प्रीमियर कार किराया सेवा प्रदाता। आपको आरामदायक, सुरक्षित और विश्वसनीय यात्रा अनुभव प्रदान करने के लिए प्रतिबद्ध।',
            'footer-md-label': 'प्रबंध निदेशक:',
            'footer-md-names': 'शजन और साजी',
            'footer-contact-title': 'संपर्क नंबर',
            'footer-shajan-label': 'शजन',
            'footer-saji-label': 'साजी',
            'footer-address-title': 'कार्यालय का पता',
            'footer-address-label': 'पता',
            'footer-address-value': 'शॉप नं. 1/3, फ्रेंड्स होटल के ऊपर, चंद्रकलादेवी चावल, पाइप लाइन, साकीनाका, मुंबई - 400 072.',
            'footer-email-label': 'ईमेल',
            'footer-copy': '&copy; 2026 सर्वा टूर्स एंड ट्रैवल्स। सभी अधिकार सुरक्षित।',
            'footer-call': 'हमें कॉल करें',
            'footer-whatsapp': 'व्हाट्सएप',
            // Dock
            'dock-call': 'हमें कॉल करें',
            'dock-whatsapp': 'व्हाट्सएप',
        }
    };

    let currentLang = 'en';

    function applyLanguage(lang) {
        const t = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                el.innerHTML = t[key];
            }
        });
        currentLang = lang;
        // Update html lang attribute
        document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
    }

    // Language Toggle Buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyLanguage(btn.getAttribute('data-lang'));
        });
    });

    // =============================================
    // MOBILE NAVIGATION TOGGLE
    // =============================================
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                hamburgerBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                `;
            } else {
                hamburgerBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                `;
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburgerBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                `;
            });
        });
    }

    // =============================================
    // SCROLL SECTION TRACKING (Active Menu Item)
    // =============================================
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // =============================================
    // HERO BOOKING WIDGET LOGIC
    // =============================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const widgetOptionLabel = document.getElementById('widget-option-label');
    const widgetPackage = document.getElementById('widget-package');
    const widgetDestination = document.getElementById('widget-destination');
    const widgetAirportType = document.getElementById('widget-airport-type');
    const widgetCarType = document.getElementById('widget-car-type');
    const widgetDate = document.getElementById('widget-date');
    const widgetSubmitBtn = document.getElementById('widgetSubmitBtn');

    let activeTab = 'local';

    if (widgetDate) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const yyyy = tomorrow.getFullYear();
        const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const dd = String(tomorrow.getDate()).padStart(2, '0');
        widgetDate.value = `${yyyy}-${mm}-${dd}`;
    }

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeTab = btn.getAttribute('data-tab');
                if (activeTab === 'local') {
                    if (widgetOptionLabel) widgetOptionLabel.textContent = 'Select Package';
                    if (widgetPackage) widgetPackage.classList.remove('hidden');
                    if (widgetDestination) widgetDestination.classList.add('hidden');
                    if (widgetAirportType) widgetAirportType.classList.add('hidden');
                } else if (activeTab === 'outstation') {
                    if (widgetOptionLabel) widgetOptionLabel.textContent = 'Enter Destination';
                    if (widgetPackage) widgetPackage.classList.add('hidden');
                    if (widgetDestination) widgetDestination.classList.remove('hidden');
                    if (widgetAirportType) widgetAirportType.classList.add('hidden');
                } else if (activeTab === 'airport') {
                    if (widgetOptionLabel) widgetOptionLabel.textContent = 'Transfer Type';
                    if (widgetPackage) widgetPackage.classList.add('hidden');
                    if (widgetDestination) widgetDestination.classList.add('hidden');
                    if (widgetAirportType) widgetAirportType.classList.remove('hidden');
                }
            });
        });
    }

    if (widgetSubmitBtn) {
        widgetSubmitBtn.addEventListener('click', () => {
            let detailInfo = '';
            let serviceLabel = '';
            if (activeTab === 'local') {
                serviceLabel = 'Local Car Rental';
                detailInfo = widgetPackage ? widgetPackage.value : '8 Hrs / 80 Kms';
            } else if (activeTab === 'outstation') {
                serviceLabel = 'Outstation Tour';
                const dest = widgetDestination ? widgetDestination.value.trim() : '';
                detailInfo = dest ? `To: ${dest}` : 'Custom Destination';
            } else if (activeTab === 'airport') {
                serviceLabel = 'Airport Transfer';
                detailInfo = widgetAirportType ? widgetAirportType.value : 'Pickup/Drop';
            }
            const carType = widgetCarType ? widgetCarType.value : 'Comfort Sedan';
            const dateVal = widgetDate ? widgetDate.value : 'Not specified';
            const message = `Hello Sarva Travels, I want to make an inquiry details:\n- Service: ${serviceLabel}\n- Detail: ${detailInfo}\n- Vehicle Class: ${carType}\n- Date: ${dateVal}\n\nPlease send me options and pricing.`;
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/918369499251?text=${encodedMessage}`, '_blank');
        });
    }
});
