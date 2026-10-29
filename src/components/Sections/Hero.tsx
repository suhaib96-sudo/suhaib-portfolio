/* eslint-disable simple-import-sort/imports */
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import myImage from '../../images/IMG_0211.png';

const Hero: FC = memo(() => {
  const {description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="flex min-h-screen w-full items-center justify-center bg-white px-6 py-24 sm:px-12 lg:px-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 lg:flex-row lg:gap-12">
          
          {/* Left Column: Typography */}
          <div className="flex w-full flex-col justify-center lg:w-1/2 lg:pr-8">
            <span className="mb-6 text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">
              Software Engineer & Systems Analyst
            </span>
            
            {/* The giant serif headline matching your image */}
            <h1 className="mb-8 font-serif text-5xl font-medium leading-[1.05] text-gray-900 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Suhaib Ahmed Khateeb.
            </h1>
            
            <div className="mb-12 max-w-xl text-lg leading-relaxed text-gray-600">
              {description}
            </div>
            
            <div className="flex flex-wrap gap-8 text-sm font-semibold tracking-wide">
              {actions.map(({href, text, Icon}) => (
                <a
                  className="group flex items-center gap-x-2 text-gray-900 transition-colors hover:text-gray-500"
                  href={href}
                  key={text}>
                  <span className="border-b border-gray-900 pb-1 group-hover:border-gray-500">{text}</span>
                  {Icon && <Icon className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Your Personal Image */}
          <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
            {/* aspect-[4/5] gives it that tall, elegant portrait look */}
            <div className="relative aspect-[4/5] w-full max-w-[500px] overflow-hidden bg-gray-100 shadow-sm">
              <Image
                alt="Suhaib Ahmed Khateeb"
                className="object-cover"
                fill
                priority
                src={myImage}
              />
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;