
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  children?: ReactNode;
  className?: string;
}

export const SectionHero = ({ 
  title, 
  subtitle,
  backgroundImage,
  children,
  className
}: SectionHeroProps) => {
  return (
    <section 
      className={cn(
        "relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden",
        className
      )}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 ease-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-4xl px-6 animate-fade-in">
        <h1 className="font-broadway text-4xl md:text-6xl text-white mb-4 animate-slide-in">{title}</h1>
        <p className="font-serif text-xl text-white/90 italic max-w-xl mx-auto animate-fade-in">{subtitle}</p>
        <div className="mt-4 animate-fade-in transition-all duration-700 delay-300">
          {children}
        </div>
      </div>
    </section>
  );
};

interface SectionIntroProps {
  children: ReactNode;
  className?: string;
}

export const SectionIntro = ({ children, className }: SectionIntroProps) => {
  return (
    <div className={cn("container-fluid py-12 max-w-3xl mx-auto text-center", className)}>
      <div className="prose prose-lg mx-auto animate-fade-in">
        {children}
      </div>
    </div>
  );
};

interface SectionGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const SectionGrid = ({ children, columns = 3, className }: SectionGridProps) => {
  return (
    <div className={cn("container-fluid py-8", className)}>
      <div 
        className={cn(
          "grid gap-8", 
          {
            'grid-cols-1 md:grid-cols-2': columns === 2,
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': columns === 3,
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': columns === 4,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  link?: string;
  className?: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  tags = [],
  link,
  className 
}: ProjectCardProps) => {
  const CardWrapper = ({ children }: { children: ReactNode }) => {
    if (link) {
      return (
        <a href={link} className={cn("block group", className)}>
          {children}
        </a>
      );
    }
    return <div className={cn("block group", className)}>{children}</div>;
  };

  return (
    <CardWrapper>
      <div className="bg-white border border-nyt-gray-light rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-5">
          <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
          <p className="text-nyt-gray-dark text-sm mb-4 line-clamp-3">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs px-2 py-1 bg-nyt-background text-nyt-gray-dark rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};
