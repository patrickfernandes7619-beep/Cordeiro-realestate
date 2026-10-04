import React, { useState, useEffect } from 'react';
import { getBusinessHoursStatus, BusinessHoursStatus } from '../utils/businessHours';

interface LiveTimingBadgeProps {
  variant?: 'light' | 'dark' | 'google';
  showDetails?: boolean;
  className?: string;
}

export const LiveTimingBadge: React.FC<LiveTimingBadgeProps> = ({
  variant = 'light',
  showDetails = true,
  className = '',
}) => {
  const [status, setStatus] = useState<BusinessHoursStatus>(getBusinessHoursStatus());

  useEffect(() => {
    // Update status every 15 seconds for live precision
    const interval = setInterval(() => {
      setStatus(getBusinessHoursStatus());
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const { isOpen, statusText, detailText, googleListingStatus } = status;

  if (variant === 'google') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
          isOpen ? 'text-emerald-700' : 'text-rose-700'
        } ${className}`}
        title={`Operating Hours: 10:30 AM - 06:30 PM IST (${status.currentMumbaiTimeStr})`}
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          {isOpen && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              isOpen ? 'bg-emerald-600' : 'bg-rose-600'
            }`}
          />
        </span>
        <span>{googleListingStatus}</span>
      </span>
    );
  }

  if (variant === 'dark') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${
          isOpen
            ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40'
            : 'bg-amber-950/70 text-amber-300 border-amber-500/40'
        } ${className}`}
        title={`Operating Hours: 10:30 AM - 06:30 PM IST (${status.currentMumbaiTimeStr})`}
      >
        <span className="relative flex h-2 w-2">
          {isOpen && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              isOpen ? 'bg-emerald-400' : 'bg-amber-400'
            }`}
          />
        </span>
        <span className="font-semibold">{statusText}</span>
        {showDetails && <span className="text-[10px] opacity-80">({detailText})</span>}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border shadow-xs ${
        isOpen
          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
          : 'bg-amber-50 text-amber-800 border-amber-200'
      } ${className}`}
      title={`Operating Hours: 10:30 AM - 06:30 PM IST (${status.currentMumbaiTimeStr})`}
    >
      <span className="relative flex h-2 w-2">
        {isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isOpen ? 'bg-emerald-600' : 'bg-amber-600'
          }`}
        />
      </span>
      <span className="font-bold">{statusText}</span>
      {showDetails && (
        <>
          <span className="text-slate-300">·</span>
          <span className="text-slate-600 text-[11px]">{detailText}</span>
        </>
      )}
    </span>
  );
};
