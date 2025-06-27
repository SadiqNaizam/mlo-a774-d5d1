import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t bg-muted text-muted-foreground">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>
          &copy; {currentYear} SmartLogin. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link to="#" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <Link to="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;