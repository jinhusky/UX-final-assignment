
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SkillScape from './pages/SkillScape';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'SkillScape', path: '/skillscape' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="glass-nav fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            TKJ
          </Link>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Mobile menu button (simple) */}
          <div className="md:hidden text-slate-600 text-sm">
             <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Tiong Kai Jing</h3>
            <p className="text-sm text-slate-500">UI/UX Portfolio | PRG3014</p>
          </div>
          <div className="flex flex-col gap-1">
            <a href="mailto:18058073@imail.sunway.edu.my" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              18058073@imail.sunway.edu.my
            </a>
            <p className="text-xs text-slate-400">© 2024 Tiong Kai Jing. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skillscape" element={<SkillScape />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
