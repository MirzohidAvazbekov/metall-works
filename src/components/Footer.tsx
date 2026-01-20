import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Send, Youtube } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-copper to-copper-glow flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-xl">M</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">Metall Works</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors"
              >
                <Send size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-foreground">
              {t('nav.about')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  {t('about.who.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  {t('nav.catalog')}
                </Link>
              </li>
              <li>
                <Link to="/custom-orders" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  {t('nav.custom')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-foreground">
              {t('nav.catalog')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  {t('catalog.steel')}
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  {t('catalog.iron')}
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  {t('catalog.copper')}
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  {t('catalog.aluminum')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-foreground">
              {t('nav.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Toshkent sh., Sergeli tumani, Sanoat ko'chasi 45
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+998946774433" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  +998 94 677 44 33
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:Metallworks2026@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Metallworks2026@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Metall Works. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
