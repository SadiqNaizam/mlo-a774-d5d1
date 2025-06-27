import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Package } from 'lucide-react';

interface AuthFormContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
  view: 'login' | 'signup' | 'forgot-password';
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({ title, description, children, view }) => {
  console.log('AuthFormContainer loaded for view:', view);

  const renderFooterLinks = () => {
    switch (view) {
      case 'login':
        return (
          <div className="flex flex-col items-center w-full space-y-2 text-sm">
            <Link to="/forgot-password" className="font-medium text-primary underline-offset-4 hover:underline">
              Forgot your password?
            </Link>
            <p>
              Don&apos;t have an account?{' '}
              <Link to="/sign-up" className="font-medium text-primary underline-offset-4 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        );
      case 'signup':
        return (
          <div className="text-center text-sm w-full">
            Already have an account?{' '}
            <Link to="/" className="font-medium text-primary underline-offset-4 hover:underline">
              Log in
            </Link>
          </div>
        );
      case 'forgot-password':
        return (
          <div className="text-center text-sm w-full">
            Remembered your password?{' '}
            <Link to="/" className="font-medium text-primary underline-offset-4 hover:underline">
              Log in
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            <Package className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          {renderFooterLinks()}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthFormContainer;