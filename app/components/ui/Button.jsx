'use client';

import { Send } from 'lucide-react';
import Link from 'next/link';

export default function Button({
  text,
  color = 'blue',
  href,
  showIcon = false,
}) {
  const colors = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    red: 'bg-red-600 hover:bg-red-700',
    green: 'bg-green-600 hover:bg-green-700',
    gray: 'bg-gray-600 hover:bg-gray-700',
    rose: 'bg-rose-500 hover:bg-rose-600',
  };

  const colorClasses = colors[color] || colors.blue;

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full shadow text-white w-[250px] font-medium transition-colors duration-200 ${colorClasses} focus:outline-none`}
    >
      <span className="tracking-wider">{text}</span>
      {showIcon && <Send size={18} className="ml-1" />}
    </Link>
  );
}
