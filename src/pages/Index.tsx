import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Cog, Shield, Clock, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-foundry.jpg';
import cncImage from '@/assets/cnc-machining.jpg';
import sparePartsImage from '@/assets/spare-parts.jpg';

const Index = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '15+', label: t('about.experience'), icon: Clock },
    { value: '100+', label: t('about.partners.title'), icon: Users },
    { value: '1000+', label: 'Mahsulotlar', icon: Cog },
    { value: 'ISO', label: 'Sertifikat', icon: Award },
  ];

  const features = [
    {
      icon: Factory,
      title: t('services.casting.title'),
      description: t('services.casting.desc'),
    },
    {
      icon: Cog,
      title: t('services.cnc.title'),
      description: t('services.cnc.desc'),
    },
    {
      icon: Shield,
      title: t('services.custom.title'),
      description: t('services.custom.desc'),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[99vh] flex items-start sm:items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Metal foundry"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              {t('hero.subtitle')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="copper" size="xl" asChild>
                <Link to="/catalog">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">
                  {t('hero.contact')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="metal-border rounded-xl p-6 lg:p-8 hover:border-accent/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="steel" size="lg" asChild>
              <Link to="/services">
                {t('catalog.view')}
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                {t('about.title')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('about.who.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t('about.who.text')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="font-display font-bold text-3xl text-accent mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">{t('about.experience')}</div>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="font-display font-bold text-3xl text-accent mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">{t('about.partners.title')}</div>
                </div>
              </div>
              <Button variant="copper" asChild>
                <Link to="/about">
                  {t('catalog.view')}
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={cncImage}
                  alt="CNC Machining"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden border-4 border-background shadow-xl hidden md:block">
                <img
                  src={sparePartsImage}
                  alt="Spare parts"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-steel-dark via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-steel rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('custom.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t('custom.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="copper" size="xl" asChild>
                <Link to="/custom-orders">
                  {t('custom.form.submit')}
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">
                  {t('hero.contact')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
