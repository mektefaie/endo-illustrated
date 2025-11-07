// app/components/ui/Button.jsx
'use client';

import Link from 'next/link';

export default function Button({ text, color = 'blue', icon, href }) {
  const colors = {
    blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    green: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
    gray: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
    rose: 'bg-rose-500 hover:bg-rose-600 focus:ring-rose-400',
  };

  const colorClasses = colors[color] || colors.blue;

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-full shadow text-white w-[250px] font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${colorClasses}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </Link>
  );
}
