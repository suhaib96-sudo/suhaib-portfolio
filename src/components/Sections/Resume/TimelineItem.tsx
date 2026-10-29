/* eslint-disable simple-import-sort/imports */
import {FC, memo} from 'react';

import {TimelineItem as TimelineItemType} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemType; isLast?: boolean}> = memo(({item, isLast}) => {
  const {title, date, location, content} = item;
  return (
    <div className="group relative flex gap-x-6 pb-12 last:pb-0">
      
      {/* Train Line and Animated Nodes */}
      <div className="relative flex flex-col items-center">
        {/* Vertical Track Line */}
        {!isLast && <div className="absolute top-4 bottom-[-3rem] w-[2px] bg-gray-300 transition-colors duration-500 group-hover:bg-gray-900" />}
        {/* Glowing Dot */}
        <div className="relative mt-2 h-4 w-4 rounded-full border-2 border-[#f1efea] bg-gray-400 ring-2 ring-gray-300 transition-all duration-500 group-hover:scale-125 group-hover:bg-gray-900 group-hover:ring-gray-900" />
      </div>

      {/* Floating Content Box */}
      <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8">
        <div className="flex flex-col pb-4">
          <h3 className="font-serif text-2xl font-bold text-gray-900">{title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-2 text-sm font-medium text-gray-500">
            <span className="text-gray-800">{location}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="prose prose-sm text-gray-600 sm:prose-base">{content}</div>
      </div>
      
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;