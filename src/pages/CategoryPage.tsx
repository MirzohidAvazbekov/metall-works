import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import sparePartsImage from '@/assets/spare-parts.jpg';
import counterweightsImage from '@/assets/counterweights.jpg';
import cranePartsImage from '@/assets/crane-parts.jpg';
import castIronImage from '@/assets/cast-iron.jpg';
import copperProductsImage from '@/assets/copper-products.jpg';
import railwayPartsImage from '@/assets/railway-parts.jpg';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { t, language } = useLanguage();

  const categoryData: Record<string, { title: string; image: string; products: string[] }> = {
    'spare-parts': {
      title: t('catalog.spare'),
      image: sparePartsImage,
      products: language === 'uz' 
        ? ['Shkivlar', 'Podshipniklar', 'Vallar', 'Tishli g\'ildiraklar', 'Vtulkalar', 'Qopqoqlar']
        : ['Шкивы', 'Подшипники', 'Валы', 'Зубчатые колеса', 'Втулки', 'Крышки'],
    },
    'counterweights': {
      title: t('catalog.counterweights'),
      image: counterweightsImage,
      products: language === 'uz'
        ? ['Kran balansir og\'irliklari', 'Lift balansirlari', 'Sanoat balansirlari']
        : ['Противовесы для кранов', 'Противовесы для лифтов', 'Промышленные противовесы'],
    },
    'crane-parts': {
      title: t('catalog.crane'),
      image: cranePartsImage,
      products: language === 'uz'
        ? ['Ilmoqlar', 'Bloklar', 'Roliklar', 'Zanjirlar']
        : ['Крюки', 'Блоки', 'Ролики', 'Цепи'],
    },
    'pads': {
      title: t('catalog.pads'),
      image: sparePartsImage,
      products: language === 'uz'
        ? ['Tagliklar', 'Asoslar', 'Plitalar']
        : ['Подкладки', 'Основания', 'Плиты'],
    },
    'railway': {
      title: t('catalog.railway'),
      image: railwayPartsImage,
      products: language === 'uz'
        ? ['G\'ildiraklar', 'Rels qismlari', 'Bog\'lovchi elementlar']
        : ['Колеса', 'Рельсовые детали', 'Соединительные элементы'],
    },
    'steel': {
      title: t('catalog.steel'),
      image: cranePartsImage,
      products: language === 'uz'
        ? ['Po\'lat quyma', 'Po\'lat prokatlar', 'Maxsus po\'lat buyumlar']
        : ['Стальное литье', 'Стальной прокат', 'Специальные стальные изделия'],
    },
    'iron': {
      title: t('catalog.iron'),
      image: castIronImage,
      products: language === 'uz'
        ? ['Cho\'yan quyma', 'Cho\'yan quvurlar', 'Cho\'yan qopqoqlar']
        : ['Чугунное литье', 'Чугунные трубы', 'Чугунные крышки'],
    },
    'copper': {
      title: t('catalog.copper'),
      image: copperProductsImage,
      products: language === 'uz'
        ? ['Mis quyma', 'Mis quvurlar', 'Mis elektr buyumlari']
        : ['Медное литье', 'Медные трубы', 'Медные электроизделия'],
    },
    'brass': {
      title: t('catalog.brass'),
      image: copperProductsImage,
      products: language === 'uz'
        ? ['Jez quyma', 'Armatura', 'Dekorativ buyumlar']
        : ['Латунное литье', 'Арматура', 'Декоративные изделия'],
    },
    'bronze': {
      title: t('catalog.bronze'),
      image: copperProductsImage,
      products: language === 'uz'
        ? ['Bronza vtulkalar', 'Bronza podshipniklar', 'Bronza quyma']
        : ['Бронзовые втулки', 'Бронзовые подшипники', 'Бронзовое литье'],
    },
    'aluminum': {
      title: t('catalog.aluminum'),
      image: counterweightsImage,
      products: language === 'uz'
        ? ['Alyuminiy quyma', 'Alyuminiy profillar', 'Alyuminiy qismlar']
        : ['Алюминиевое литье', 'Алюминиевые профили', 'Алюминиевые детали'],
    },
    'other': {
      title: t('catalog.other'),
      image: sparePartsImage,
      products: language === 'uz'
        ? ['Maxsus buyurtmalar', 'Murakkab qismlar', 'Prototiplar']
        : ['Специальные заказы', 'Сложные детали', 'Прототипы'],
    },
  };

  const category = categoryData[categoryId || ''] || {
    title: t('catalog.other'),
    image: sparePartsImage,
    products: [],
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img src={category.image} alt={category.title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/catalog"
            className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('catalog.title')}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {category.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="metal-border rounded-xl overflow-hidden hover:border-accent/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={product}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    {product}
                  </h3>
                  <Button variant="steel" size="sm" asChild>
                    <Link to="/custom-orders">
                      {t('custom.form.submit')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;