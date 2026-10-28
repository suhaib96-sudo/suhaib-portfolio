import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      {/* Custom CSS for staggered, ultra-smooth animations */}
      <style>{`
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-1 { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-2 { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards; opacity: 0; }
        .animate-fade-3 { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; opacity: 0; }
      `}</style>

      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gray-900">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover blur-[3px] brightness-[0.25] scale-105"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        
        <div className="z-10 max-w-screen-lg px-4 lg:px-0">
          {/* Upgraded Premium Glassmorphism Card */}
          <div className="flex flex-col items-center gap-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">
            
            {/* Gradient Text for Name */}
            <h1 className="animate-fade-1 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                {name}
              </span>
            </h1>
            
            {/* Description with improved readability */}
            <div className="animate-fade-2 max-w-2xl text-base text-gray-300 sm:text-lg lg:text-xl font-light leading-relaxed">
              {description}
            </div>
            
            <div className="animate-fade-3 flex gap-x-6 text-white/80 transition-colors hover:text-white">
              <Socials />
            </div>
            
            {/* Upgraded Modern Buttons */}
            <div className="animate-fade-3 flex w-full flex-col justify-center gap-y-4 sm:flex-row sm:gap-x-6 sm:gap-y-0 mt-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex items-center justify-center gap-x-2 rounded-full px-8 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 sm:text-base',
                    primary 
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 focus:ring-orange-500' 
                      : 'border border-white/20 bg-white/5 hover:bg-white/10 focus:ring-white backdrop-blur-sm',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Upgraded Bouncing Chevron */}
        <div className="absolute inset-x-0 bottom-8 flex justify-center z-10">
          <a
            className="animate-bounce rounded-full border border-white/20 bg-white/5 p-2 text-white/80 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;