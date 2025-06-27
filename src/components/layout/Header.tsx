import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-background">
      <div className="container mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">SmartLogin</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;