const translations = {
    en: {
        navVision: "Vision", navPrograms: "Programs", navContact: "Contact",
        tag: "नम्रतेतून सेवा, स्वामित्वातून दिशा",
        btn: "BOOK A SESSION",
        visionHead: "Our Vision",
        visionText: "To empower every individual to find their strength through a balance of physical discipline and mental peace. We believe in movement that nurtures the soul.",
        c1H: "Mindful Yoga", c1T: "Connecting breath with movement to find inner balance and peace.",
        c2H: "Strength Training", c2T: "Customized functional programs to build sustainable power and endurance.",
        c3H: "Vision Coaching", c3T: "Personalized mentorship to align your daily lifestyle with your long-term goals.",
        contactHead: "Connect With Us",
        footer: "© 2026 SWANARI Fitness Portfolio | All Rights Reserved"
    },
    mr: {
        navVision: "ध्येय", navPrograms: "उपक्रम", navContact: "संपर्क",
        tag: "नम्रतेतून सेवा, स्वामित्वातून दिशा",
        btn: "सत्र बुक करा",
        visionHead: "आमचे ध्येय",
        visionText: "शारीरिक शिस्त आणि मानसिक शांती यांच्या संतुलनातून प्रत्येकाला स्वतःची ताकद शोधण्यासाठी सक्षम करणे. आमचा असा विश्वास आहे की हालचाल आत्म्याचे पोषण करते.",
        c1H: "माइंडफुल योगा", c1T: "आंतरिक संतुलन आणि शांती मिळवण्यासाठी श्वासाला हालचालीशी जोडणे.",
        c2H: "स्ट्रेंथ ट्रेनिंग", c2T: "शाश्वत शक्ती आणि तग धरण्याची क्षमता निर्माण करण्यासाठी सानुकूलित कार्यक्रम.",
        c3H: "व्हिजन कोचिंग", c3T: "तुमच्या ध्येयांसह तुमची जीवनशैली सुसंगत करण्यासाठी वैयक्तिक मार्गदर्शन.",
        contactHead: "आमच्याशी संपर्क साधा",
        footer: "© 2026 स्वनारी फिटनेस पोर्टफोलिओ | सर्व हक्क राखीव"
    },
    hi: {
        navVision: "संकल्प", navPrograms: "कार्यक्रम", navContact: "संपर्क",
        tag: "नम्रतेतून सेवा, स्वामित्वातून दिशा",
        btn: "सत्र बुक करें",
        visionHead: "हमारा संकल्प",
        visionText: "शारीरिक अनुशासन और मानसिक शांति के संतुलन के माध्यम से हर व्यक्ति को अपनी शक्ति खोजने के लिए सशक्त बनाना। हमारा मानना है कि गतिविधि आत्मा को पोषण देती है.",
        c1H: "माइंडफुल योगा", c1T: "आंतरिक संतुलन और शांति पाने के लिए सांस को गति से जोड़ना।",
        c2H: "स्ट्रेंथ ट्रेनिंग", c2T: "सतत शक्ति और सहनशक्ति के निर्माण के लिए अनुकूलित कार्यक्रम।",
        c3H: "विजन कोचिंग", c3T: "अपनी जीवनशैली को अपने लक्ष्यों के साथ जोड़ने के लिए व्यक्तिगत मार्गदर्शन।",
        contactHead: "हमसे संपर्क करें",
        footer: "© 2026 स्वनारी फिटनेस पोर्टफोलियो | सर्वाधिकार सुरक्षित"
    }
};

function updateLang(lang) {
    localStorage.setItem('swanari_lang', lang);

    document.getElementById('nav-vision').innerText = translations[lang].navVision;
    document.getElementById('nav-programs').innerText = translations[lang].navPrograms;
    document.getElementById('nav-contact').innerText = translations[lang].navContact;

    // document.getElementById('hero-tag').innerText = translations[lang].tag;
    document.getElementById('hero-btn').innerText = translations[lang].btn;

    document.getElementById('vision-head').innerText = translations[lang].visionHead;
    document.getElementById('vision-text').innerText = translations[lang].visionText;

    document.getElementById('card1-head').innerText = translations[lang].c1H;
    document.getElementById('card1-text').innerText = translations[lang].c1T;
    document.getElementById('card2-head').innerText = translations[lang].c2H;
    document.getElementById('card2-text').innerText = translations[lang].c2T;
    document.getElementById('card3-head').innerText = translations[lang].c3H;
    document.getElementById('card3-text').innerText = translations[lang].c3T;

    document.getElementById('contact-head').innerText = translations[lang].contactHead;
    document.getElementById('footer-text').innerText = translations[lang].footer;

    document.querySelectorAll('.lang-opt').forEach(el => el.classList.remove('active'));
    document.getElementById('lang-' + lang).classList.add('active');
}

window.onload = () => {
    const current = localStorage.getItem('swanari_lang') || 'mr';
    updateLang(current);
};