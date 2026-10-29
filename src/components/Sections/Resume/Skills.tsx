/* eslint-disable simple-import-sort/imports */
import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <span className="mb-6 font-serif text-2xl font-bold text-gray-900">{name}</span>
      {/* Changed from a vertical list to a wrapping flexbox for the tags */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name} = skill; // We no longer need 'level' or 'max' for this modern design!

  return (
    // Elegant, interactive tags instead of progress bars
    <span className="cursor-default rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-md">
      {name}
    </span>
  );
});

Skill.displayName = 'Skill';