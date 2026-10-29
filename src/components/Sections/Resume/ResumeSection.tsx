/* eslint-disable simple-import-sort/imports */
import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-x-12">
      <div className="col-span-1 flex justify-start">
        {/* Sticky header stays in place while scrolling past the timeline */}
        <div className="sticky top-24 h-max">
          <h2 className="font-serif text-3xl font-bold text-gray-900 lg:text-4xl">{title}</h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-gray-900" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;