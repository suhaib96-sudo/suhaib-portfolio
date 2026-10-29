/* eslint-disable simple-import-sort/imports */
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  
  return (
    // Changed to pure white background to elegantly contrast your beige Hero section
    <Section className="bg-white py-16 lg:py-24" sectionId={SectionId.About}>
      <div className={classNames('mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16')}>
        
        {/* Left Side: Profile Image with 3D hover effects */}
        {!!profileImageSrc && (
          <div className="w-full max-w-[280px] shrink-0 lg:w-1/3">
            <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-200">
              <Image 
                alt="About me" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={profileImageSrc} 
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>
        )}

        {/* Right Side: Typography and Animated Grid Cards */}
        <div className={classNames('flex w-full flex-col gap-y-8', {'lg:w-2/3': !!profileImageSrc})}>
          
          <div className="flex flex-col gap-y-4">
            {/* Matching Serif Heading */}
            <h2 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl">About Me.</h2>
            <div className="h-1 w-20 rounded bg-gray-900"></div>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 sm:text-xl">
              {description}
            </p>
          </div>
          
          {/* Beautiful interactive grid for your details */}
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li 
                className="group flex items-center gap-x-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:bg-white hover:shadow-md" 
                key={idx}
              >
                {Icon && (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-gray-700">
                    <Icon className="h-6 w-6" />
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{label}</span>
                  <span className="text-base font-medium text-gray-900">{text}</span>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;