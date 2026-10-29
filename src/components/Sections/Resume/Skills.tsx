/* eslint-disable simple-import-sort/imports */
import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <span className="mb-6 font-serif text-2xl font-bold text-gray-900">{name}</span>
      <div className="flex flex-col gap-y-5">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="group flex flex-col gap-y-2">
      <div className="flex justify-between text-sm font-semibold text-gray-900">
        <span>{name}</span>
        <span className="text-gray-400 transition-colors duration-300 group-hover:text-gray-900">{percentage}%</span>
      </div>
      {/* Ultra-thin elegant progress bar */}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div 
          className="h-full rounded-full bg-gray-300 transition-all duration-700 ease-out group-hover:bg-gray-900" 
          style={{width: `${percentage}%`}} 
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';