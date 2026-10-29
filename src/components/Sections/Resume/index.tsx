/* eslint-disable simple-import-sort/imports */
import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    // Continuing the elegant off-white theme
    <Section className="bg-[#f1efea] py-16 lg:py-24" sectionId={SectionId.Resume}>
      <div className="mx-auto flex max-w-7xl flex-col gap-y-20">
        
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem isLast={index === education.length - 1} item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        
        <ResumeSection title="Work Experience">
          {experience.map((item, index) => (
            <TimelineItem isLast={index === experience.length - 1} item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        
        <ResumeSection title="Technical Skills">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
        
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;