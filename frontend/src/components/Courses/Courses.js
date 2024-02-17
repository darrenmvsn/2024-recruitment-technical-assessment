import React from 'react'
import courses from "../../courses.json"
import Card from '../Card/Card';
const Courses = () => {
  console.log(courses);
  return (
    <div className="container mx-44 ml-72 w-full mb-10 mt-10">
        <div className="flex flex-row flex-wrap gap-12  w-3/4 items-center ">
        {courses && courses.map((course) => {
          return (
            <Card courses={course} />
          )
        }
        )}
      </div>
    </div>
    
  )
}

export default Courses
