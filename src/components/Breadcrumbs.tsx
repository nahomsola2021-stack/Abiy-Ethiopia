import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageView } from '../types';

interface BreadcrumbItem {
  label: string;
  view?: PageView;
  param?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (view: PageView, param?: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center space-x-2 text-xs text-[#857B70] flex-wrap">
        <li>
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#1D1A16] flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-[#C28246]" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-[#C8BEAF]" />
              {isLast || !item.view ? (
                <span className="text-[#1D1A16] font-medium line-clamp-1">{item.label}</span>
              ) : (
                <button
                  onClick={() => onNavigate(item.view!, item.param)}
                  className="hover:text-[#1D1A16] transition-colors line-clamp-1 cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
