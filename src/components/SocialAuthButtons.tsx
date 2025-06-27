import React from 'react';
import { Button } from '@/components/ui/button';
import { Chrome, Github } from 'lucide-react';

const SocialAuthButtons: React.FC = () => {
  console.log('SocialAuthButtons loaded');

  const handleSocialLogin = (provider: 'google' | 'github') => {
    // In a real application, this would trigger the OAuth flow.
    console.log(`Attempting to log in with ${provider}...`);
  };

  return (
    <div className="w-full flex flex-col sm:flex-row gap-2">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSocialLogin('google')}
      >
        <Chrome className="mr-2 h-4 w-4" />
        Continue with Google
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSocialLogin('github')}
      >
        <Github className="mr-2 h-4 w-4" />
        Continue with GitHub
      </Button>
    </div>
  );
};

export default SocialAuthButtons;