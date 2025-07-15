import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full bg-background border-b border-gray-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top header with contact info */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-muted-foreground border-b border-gray-border">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">📍 123 QuickSale Street Chicago, IL 60606</span>
            <span className="flex items-center">📞 123-456-7890</span>
            <span>Login</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/lovable-uploads/bf53fc03-8fb7-45dc-af06-04301f2385c3.png" alt="Nest Africa" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Button variant="default" className="bg-orange-primary hover:bg-orange-primary/90 text-white">
                HOME
              </Button>
              {navItems.slice(1).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-orange-primary px-4 py-2 text-sm font-medium transition-colors duration-200 uppercase"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Search Icon */}
          <div className="hidden md:block">
            <Button variant="ghost" size="sm">
              🔍
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-nest-border">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-orange-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button variant="default" className="w-full bg-orange-primary hover:bg-orange-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;