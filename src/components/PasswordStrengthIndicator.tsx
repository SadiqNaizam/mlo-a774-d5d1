import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PasswordStrengthIndicatorProps {
  password?: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password = '' }) => {
  console.log('PasswordStrengthIndicator loaded');

  // Level 0: No password
  // Level 1: Weak
  // Level 2: Medium
  // Level 3: Strong
  const [level, setLevel] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    if (!password) {
      setLevel(0);
      return;
    }

    const checks = [
      /[a-z]/.test(password), // has lowercase
      /[A-Z]/.test(password), // has uppercase
      /\d/.test(password),     // has numbers
      /[^A-Za-z0-9]/.test(password), // has special characters
    ];
    const typesCount = checks.filter(Boolean).length;

    if (password.length < 8) {
      setLevel(1); // Always weak if short
      return;
    }
    
    if (typesCount >= 3) {
      setLevel(3); // Strong if 3 or more types of characters are present
    } else if (typesCount >= 2) {
      setLevel(2); // Medium if 2 types are present
    } else {
      setLevel(1); // Weak if only 1 type
    }
  }, [password]);

  const strengthConfig = {
    0: { label: '', color: 'bg-gray-200', filledBars: 0, labelColor: '' },
    1: { label: 'Weak', color: 'bg-red-500', filledBars: 1, labelColor: 'text-red-500' },
    2: { label: 'Medium', color: 'bg-yellow-500', filledBars: 2, labelColor: 'text-yellow-500' },
    3: { label: 'Strong', color: 'bg-green-500', filledBars: 4, labelColor: 'text-green-500' },
  };

  const currentStrength = strengthConfig[level];

  return (
    <div className="w-full" aria-live="polite">
      <div className="flex w-full gap-x-2" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex-1 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className={cn(
                'h-1.5 rounded-full transition-colors duration-300',
                index < currentStrength.filledBars ? currentStrength.color : 'bg-transparent'
              )}
            />
          </div>
        ))}
      </div>
      {level > 0 && (
        <p className="text-xs text-right mt-1">
          <span className={cn('font-semibold', currentStrength.labelColor)}>{currentStrength.label}</span>
        </p>
      )}
    </div>
  );
};

export default PasswordStrengthIndicator;