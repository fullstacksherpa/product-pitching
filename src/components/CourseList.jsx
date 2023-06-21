import React from 'react';
import { LowerDivisionBusinessCoreCourses } from '../constants';

const CourseList = () => {
  return (
    <div className='bg-[#151030] pt-2 flex content-center'>
    <ul className="space-y-4">
      {LowerDivisionBusinessCoreCourses.map((course, index) => (
        <li key={index} className="text-white">
          {course.SubName} - {course.Name}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default CourseList;