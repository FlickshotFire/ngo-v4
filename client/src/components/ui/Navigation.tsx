import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf, Phone, Mail } from "lucide-react";
import { Button } from "./button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#work", label: "Our Work" },
    { href: "#jhola-gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pledge", label: "Products" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-strong rounded-2xl px-6 py-4 transition-all duration-300 ${
          scrolled ? 'shadow-2xl' : 'shadow-lg'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center pulse-glow p-1">
                <img
                  src="/attached_assets/Screenshot_1_1756218211189.png"
                  alt="Raghukul Aryawart Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">Raghukul Aryawart</h1>
                <p className="text-xs text-blue-400">India's Green Identity</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10 group ${
                      location.pathname === link.href ? 'text-white' : 'text-white/80'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${
                      location.pathname === link.href ? 'bg-gradient-bg' : 'bg-white/50'
                    } transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2`} />
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-bg transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2" />
                  </a>
                )
              ))}
            </div>

            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-blue-400">
                <Phone className="w-4 h-4" />
                <span>8449199211</span>
              </div>
              <Button className="btn-modern bg-gradient-bg hover:shadow-lg hover:shadow-blue-500/25 text-white border-0">
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white/10 fade-in">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  link.href.startsWith('/') ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                ))}
                <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center space-x-2 px-4 text-sm text-blue-400">
                    <Phone className="w-4 h-4" />
                    <span>8449199211</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 text-sm text-blue-400">
                    <Mail className="w-4 h-4" />
                    <span>contact@raghukularyawart.org</span>
                  </div>
                  <div className="px-4">
                    <Button className="w-full btn-modern bg-gradient-bg text-white border-0">
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;