import React from 'react';
import { Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onSelect: (slug: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onSelect }) => {
  return (
    <article
      id={`article-card-${article.slug}`}
      onClick={() => onSelect(article.slug)}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E5DED4] hover:border-[#C28246]/50 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between"
    >
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#EAE4D9]">
        <img
          src={article.heroImage}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/50 backdrop-blur-md text-[#FAF7F2] border border-white/20">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-[11px] text-[#857B70] mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C28246]" />
              {article.readTime}
            </span>
            <span>·</span>
            <span>{article.publishedDate}</span>
          </div>

          <h3 className="text-lg font-serif font-bold text-[#1D1A16] group-hover:text-[#C28246] transition-colors leading-snug mb-2">
            {article.title}
          </h3>

          <p className="text-xs text-[#6E665E] line-clamp-3 leading-relaxed mb-4">
            {article.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-[#F2EDE4] flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs text-[#857B70]">
            <BookOpen className="w-3.5 h-3.5 text-[#C28246]" />
            <span>Field Guide</span>
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D1A16] group-hover:text-[#C28246] transition-colors">
            <span>Read Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
};
