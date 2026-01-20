import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Send, Circle, Settings } from 'lucide-react';
import { toast } from 'sonner';

import sparePartsImage from '@/assets/spare-parts.jpg';

const CustomOrders = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const customParts = [
    // { icon: Circle, label: t('custom.bushings') },
    // { icon: Circle, label: t('custom.pulleys') },
    // { icon: Circle, label: t('custom.shafts') },
    // { icon: Settings, label: t('custom.other') },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(t('contact.form.submit'));
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img src={sparePartsImage} alt="Custom parts" className="w-full h-full object-cover opacity-30" />
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
              {t('custom.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('custom.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Custom Parts */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {customParts.map((part, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="metal-border rounded-xl p-6 text-center hover:border-accent/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <part.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">{part.label}</h3>
              </motion.div>
            ))}
          </div> */}

          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="metal-border rounded-2xl p-8 lg:p-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                {t('custom.form.title')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('custom.form.name')}
                    </label>
                    <Input
                      type="text"
                      required
                      className="bg-secondary border-border"
                      placeholder={t('custom.form.name')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('custom.form.phone')}
                    </label>
                    <Input
                      type="tel"
                      required
                      className="bg-secondary border-border"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('custom.form.email')}
                  </label>
                  <Input
                    type="email"
                    required
                    className="bg-secondary border-border"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('custom.form.message')}
                  </label>
                  <Textarea
                    required
                    rows={5}
                    className="bg-secondary border-border resize-none"
                    placeholder={t('custom.form.message')}
                  />
                </div>
                <Button
                  type="submit"
                  variant="copper"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '...' : t('custom.form.submit')}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomOrders;