import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { Factory, Cog, Wrench, Settings, PenTool, MessageCircle } from 'lucide-react';
import cncImage from '@/assets/cnc-machining.jpg';

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
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
      icon: Wrench,
      title: t('services.welding.title'),
      description: t('services.welding.desc'),
    },
    {
      icon: Settings,
      title: t('services.custom.title'),
      description: t('services.custom.desc'),
    },
    {
      icon: PenTool,
      title: t('services.repair.title'),
      description: t('services.repair.desc'),
    },
    {
      icon: MessageCircle,
      title: t('services.consulting.title'),
      description: t('services.consulting.desc'),
    },
  ];

  const steps = language === 'uz' 
    ? ['Konsultatsiya', 'Loyihalash', 'Ishlab chiqarish', 'Yetkazib berish']
    : ['Консультация', 'Проектирование', 'Производство', 'Доставка'];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img src={cncImage} alt="CNC Machining" className="w-full h-full object-cover opacity-30" />
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
              {t('services.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="metal-border rounded-xl p-8 hover:border-accent/50 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              {t('about.tech.title')}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((stepName, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-2xl mx-auto mb-4">
                  {index + 1}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                <h3 className="font-semibold text-foreground mb-2">
                  {stepName}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;