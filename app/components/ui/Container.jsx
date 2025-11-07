'use client';

export default function Container({ children, className = '' }) {
  return <div className={`px-[12%] mx-auto ${className}`}>{children}</div>;
}
