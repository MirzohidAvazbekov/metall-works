import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import sparePartsImage from '@/assets/spare-parts.jpg';
import counterweightsImage from '@/assets/counterweights.jpg';
import cranePartsImage from '@/assets/crane-parts.jpg';
import castIronImage from '@/assets/cast-iron.jpg';
import copperProductsImage from '@/assets/copper-products.jpg';
import railwayPartsImage from '@/assets/railway-parts.jpg';

const Catalog = () => {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'spare-parts',
      title: t('catalog.spare'),
      image: sparePartsImage,
      featured: true,
    },
    {
      id: 'counterweights',
      title: t('catalog.counterweights'),
      image: counterweightsImage,
    },
    {
      id: 'crane-parts',
      title: t('catalog.crane'),
      image: cranePartsImage,
    },
    {
      id: 'pads',
      title: t('catalog.pads'),
      image: sparePartsImage,
    },
    {
      id: 'railway',
      title: t('catalog.railway'),
      image: railwayPartsImage,
    },
    {
      id: 'steel',
      title: t('catalog.steel'),
      image: cranePartsImage,
    },
    {
      id: 'iron',
      title: t('catalog.iron'),
      image: castIronImage,
    },
    {
      id: 'copper',
      title: t('catalog.copper'),
      image: copperProductsImage,
    },
    {
      id: 'brass',
      title: t('catalog.brass'),
      image: copperProductsImage,
    },
    {
      id: 'bronze',
      title: t('catalog.bronze'),
      image: copperProductsImage,
    },
    {
      id: 'aluminum',
      title: t('catalog.aluminum'),
      image: counterweightsImage,
    },
    {
      id: 'other',
      title: t('catalog.other'),
      image: sparePartsImage,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('catalog.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('catalog.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Category */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/catalog/spare-parts" className="block">
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src={sparePartsImage}
                  alt={categories[0].title}
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
                    Featured
                  </span>
                  <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
                    {categories[0].title}
                  </h2>
                  <Button variant="copper">
                    {t('catalog.view')}
                    <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/catalog/${category.id}`} className="block group">
                  <div className="metal-border rounded-xl overflow-hidden hover:border-accent/50 transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-sm text-muted-foreground flex items-center mt-2 group-hover:text-accent transition-colors">
                        {t('catalog.view')}
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catalog;