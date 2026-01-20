import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Navbar
    'nav.about': 'Biz haqimizda',
    'nav.services': 'Xizmatlar',
    'nav.catalog': 'Katalog',
    'nav.custom': 'Buyurtma',
    'nav.contact': 'Aloqa',
    
    // Hero
    'hero.title': 'Sanoat Metallurgiyasi',
    'hero.subtitle': 'Professional metall ishlab chiqarish va qayta ishlash',
    'hero.description': 'Biz 15+ yillik tajribaga ega bo\'lgan ishonchli metall mahsulotlar ishlab chiqaruvchimiz. Yuqori sifatli quyma, CNC ishlov berish va maxsus buyurtmalar.',
    'hero.cta': 'Katalogni ko\'rish',
    'hero.contact': 'Biz bilan bog\'laning',
    
    // About
    'about.title': 'Biz haqimizda',
    'about.who.title': 'Biz kimmiz',
    'about.who.text': 'Bizning kompaniyamiz O\'zbekistondagi yetakchi metall ishlab chiqarish va qayta ishlash korxonalaridan biri hisoblanadi. 15 yildan ortiq tajribaga ega mutaxassislar jamoasi sizga eng yuqori sifatli metall mahsulotlarni taqdim etadi.',
    'about.tech.title': 'Texnologiyalarimiz',
    'about.tech.casting': 'Metall quyish',
    'about.tech.cnc': 'CNC ishlov berish',
    'about.tech.cold': 'Sovuq qotirish aralashmalari',
    'about.tech.precision': 'Aniq ishlov berish',
    'about.metals.title': 'Ishlab chiqaradigan metallar',
    'about.metals.steel': 'Po\'lat',
    'about.metals.iron': 'Cho\'yan',
    'about.metals.copper': 'Mis',
    'about.metals.brass': 'Bronza',
    'about.metals.aluminum': 'Alyuminiy',
    'about.metals.bronze': 'Jez',
    'about.partners.title': 'Hamkorlar va mijozlar',
    'about.partners.text': 'Biz O\'zbekiston va MDH davlatlari bo\'ylab 100 dan ortiq yirik sanoat korxonalari bilan hamkorlik qilamiz.',
    'about.experience': 'yillik tajriba',
    'about.orders.title': 'Qabul qilinadigan buyurtmalar',
    'about.orders.serial': 'Seriyali ishlab chiqarish',
    'about.orders.single': 'Yakka tartibdagi buyurtmalar',
    'about.orders.repair': 'Ta\'mirlash va tiklash',
    'about.orders.prototype': 'Prototip ishlab chiqarish',
    
    // Services
    'services.title': 'Xizmatlar',
    'services.subtitle': 'Professional metall ishlab chiqarish xizmatlari',
    'services.casting.title': 'Metall quyish',
    'services.casting.desc': 'Har xil metalldan yuqori aniqlikdagi quyma mahsulotlar ishlab chiqarish.',
    'services.cnc.title': 'CNC ishlov berish',
    'services.cnc.desc': 'Zamonaviy CNC dastgohlarida aniq ishlov berish xizmatlari.',
    'services.welding.title': 'Payvandlash ishlari',
    'services.welding.desc': 'Professional payvandlash va metall konstruksiyalar yasash.',
    'services.custom.title': 'Maxsus buyurtmalar',
    'services.custom.desc': 'Sizning talablaringizga moslashtirilgan maxsus metall mahsulotlar.',
    'services.repair.title': 'Ta\'mirlash',
    'services.repair.desc': 'Metall qismlar va uskunalarni ta\'mirlash va tiklash.',
    'services.consulting.title': 'Maslahat',
    'services.consulting.desc': 'Texnik maslahat va loyihalash bo\'yicha yordam.',
    
    // Catalog
    'catalog.title': 'Mahsulotlar katalogi',
    'catalog.subtitle': 'Bizning mahsulotlarimiz bilan tanishing',
    'catalog.spare': 'Beton aralashtiruvchi ehtiyot qismlari',
    'catalog.counterweights': 'Balansir og\'irliklar',
    'catalog.crane': 'Kran qismlari',
    'catalog.pads': 'Tagliklar va asoslar',
    'catalog.railway': 'Temir yo\'l ehtiyot qismlari',
    'catalog.steel': 'Po\'lat mahsulotlar',
    'catalog.iron': 'Cho\'yan mahsulotlar',
    'catalog.copper': 'Mis mahsulotlar',
    'catalog.brass': 'Jez mahsulotlar',
    'catalog.bronze': 'Bronza mahsulotlar',
    'catalog.aluminum': 'Alyuminiy mahsulotlar',
    'catalog.other': 'Boshqa maxsus mahsulotlar',
    'catalog.view': 'Ko\'proq ko\'rish',
    
    // Custom Orders
    'custom.title': 'Maxsus buyurtmalar',
    'custom.subtitle': 'Sizning loyihangiz uchun maxsus metall qismlar',
    'custom.bushings': 'Vtulkalar',
    'custom.pulleys': 'Shkivlar',
    'custom.shafts': 'Vallar',
    'custom.other': 'Boshqa maxsus qismlar',
    'custom.form.title': 'Buyurtma so\'rovi',
    'custom.form.name': 'Ismingiz',
    'custom.form.email': 'Email',
    'custom.form.phone': 'Telefon',
    'custom.form.message': 'Xabar',
    'custom.form.submit': 'Yuborish',
    
    // Contact
    'contact.title': 'Aloqa',
    'contact.subtitle': 'Biz bilan bog\'laning',
    'contact.address': 'Manzil',
    'contact.phone': 'Telefon',
    'contact.email': 'Email',
    'contact.hours': 'Ish vaqti',
    'contact.hours.value': 'Dushanba - Shanba: 09:00 - 18:00',
    'contact.form.title': 'Xabar yuborish',
    'contact.form.name': 'Ismingiz',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Mavzu',
    'contact.form.message': 'Xabar',
    'contact.form.submit': 'Yuborish',
    
    // Footer
    'footer.rights': 'Barcha huquqlar himoyalangan',
    'footer.description': 'O\'zbekistondagi yetakchi metall ishlab chiqarish va qayta ishlash korxonasi.',
  },
  ru: {
    // Navbar
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.catalog': 'Каталог',
    'nav.custom': 'Заказы',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.title': 'Промышленная Металлургия',
    'hero.subtitle': 'Профессиональное производство и обработка металла',
    'hero.description': 'Мы являемся надежным производителем металлопродукции с более чем 15-летним опытом. Высококачественное литье, обработка на ЧПУ и индивидуальные заказы.',
    'hero.cta': 'Смотреть каталог',
    'hero.contact': 'Связаться с нами',
    
    // About
    'about.title': 'О нас',
    'about.who.title': 'Кто мы',
    'about.who.text': 'Наша компания является одним из ведущих предприятий по производству и обработке металла в Узбекистане. Команда специалистов с более чем 15-летним опытом предоставит вам металлопродукцию высочайшего качества.',
    'about.tech.title': 'Наши технологии',
    'about.tech.casting': 'Литье металла',
    'about.tech.cnc': 'Обработка на ЧПУ',
    'about.tech.cold': 'Холоднотвердеющие смеси',
    'about.tech.precision': 'Точная обработка',
    'about.metals.title': 'Производимые металлы',
    'about.metals.steel': 'Сталь',
    'about.metals.iron': 'Чугун',
    'about.metals.copper': 'Медь',
    'about.metals.brass': 'Латунь',
    'about.metals.aluminum': 'Алюминий',
    'about.metals.bronze': 'Бронза',
    'about.partners.title': 'Партнеры и клиенты',
    'about.partners.text': 'Мы сотрудничаем с более чем 100 крупными промышленными предприятиями по всему Узбекистану и странам СНГ.',
    'about.experience': 'лет опыта',
    'about.orders.title': 'Принимаемые заказы',
    'about.orders.serial': 'Серийное производство',
    'about.orders.single': 'Единичные заказы',
    'about.orders.repair': 'Ремонт и восстановление',
    'about.orders.prototype': 'Изготовление прототипов',
    
    // Services
    'services.title': 'Услуги',
    'services.subtitle': 'Профессиональные услуги по производству металла',
    'services.casting.title': 'Литье металла',
    'services.casting.desc': 'Производство высокоточных литых изделий из различных металлов.',
    'services.cnc.title': 'Обработка на ЧПУ',
    'services.cnc.desc': 'Услуги точной обработки на современных станках с ЧПУ.',
    'services.welding.title': 'Сварочные работы',
    'services.welding.desc': 'Профессиональная сварка и изготовление металлоконструкций.',
    'services.custom.title': 'Индивидуальные заказы',
    'services.custom.desc': 'Изготовление металлоизделий по вашим требованиям.',
    'services.repair.title': 'Ремонт',
    'services.repair.desc': 'Ремонт и восстановление металлических деталей и оборудования.',
    'services.consulting.title': 'Консультации',
    'services.consulting.desc': 'Техническое консультирование и помощь в проектировании.',
    
    // Catalog
    'catalog.title': 'Каталог продукции',
    'catalog.subtitle': 'Ознакомьтесь с нашей продукцией',
    'catalog.spare': 'Запчасти для бетоносмесителей',
    'catalog.counterweights': 'Противовесы',
    'catalog.crane': 'Крановые детали',
    'catalog.pads': 'Подкладки и основания',
    'catalog.railway': 'Железнодорожные запчасти',
    'catalog.steel': 'Стальные изделия',
    'catalog.iron': 'Чугунные изделия',
    'catalog.copper': 'Медные изделия',
    'catalog.brass': 'Латунные изделия',
    'catalog.bronze': 'Бронзовые изделия',
    'catalog.aluminum': 'Алюминиевые изделия',
    'catalog.other': 'Другие специальные изделия',
    'catalog.view': 'Подробнее',
    
    // Custom Orders
    'custom.title': 'Индивидуальные заказы',
    'custom.subtitle': 'Специальные металлические детали для вашего проекта',
    'custom.bushings': 'Втулки',
    'custom.pulleys': 'Шкивы',
    'custom.shafts': 'Валы',
    'custom.other': 'Другие специальные детали',
    'custom.form.title': 'Запрос на заказ',
    'custom.form.name': 'Ваше имя',
    'custom.form.email': 'Email',
    'custom.form.phone': 'Телефон',
    'custom.form.message': 'Сообщение',
    'custom.form.submit': 'Отправить',
    
    // Contact
    'contact.title': 'Контакты',
    'contact.subtitle': 'Свяжитесь с нами',
    'contact.address': 'Адрес',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.hours': 'Рабочее время',
    'contact.hours.value': 'Понедельник - Суббота: 09:00 - 18:00',
    'contact.form.title': 'Отправить сообщение',
    'contact.form.name': 'Ваше имя',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Тема',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.description': 'Ведущее предприятие по производству и обработке металла в Узбекистане.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
