import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { Factory, Cog, Users, Target, Wrench, CheckCircle } from 'lucide-react';
import cncImage from '@/assets/cnc-machining.jpg';
import heroImage from '@/assets/hero-foundry.jpg';

const About = () => {
  const { t } = useLanguage();

  const technologies = [
    { icon: Factory, label: t('about.tech.casting') },
    { icon: Cog, label: t('about.tech.cnc') },
    { icon: Wrench, label: t('about.tech.cold') },
    { icon: Target, label: t('about.tech.precision') },
  ];

  const metals = [
    t('about.metals.steel'),
    t('about.metals.iron'),
    t('about.metals.copper'),
    t('about.metals.brass'),
    t('about.metals.aluminum'),
    t('about.metals.bronze'),
  ];

  const orderTypes = [
    { icon: CheckCircle, label: t('about.orders.serial') },
    { icon: CheckCircle, label: t('about.orders.single') },
    { icon: CheckCircle, label: t('about.orders.repair') },
    { icon: CheckCircle, label: t('about.orders.prototype') },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Factory" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('about.who.text')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                {t('about.who.title')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('about.who.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t('about.who.text')}
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">{t('about.experience')}</div>
                </div>
                <div className="w-px h-16 bg-border" />
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-accent">100+</div>
                  <div className="text-sm text-muted-foreground mt-1">{t('about.partners.title')}</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <img src={cncImage} alt="CNC Machining" className="w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.tech.title')}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="metal-border rounded-xl p-6 text-center hover:border-accent/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">{tech.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metals */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.metals.title')}
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {metals.map((metal, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-secondary rounded-full text-foreground font-medium"
              >
                {metal}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-accent" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.partners.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('about.partners.text')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Order Types */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.orders.title')}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {orderTypes.map((order, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
              >
                <order.icon className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{order.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;