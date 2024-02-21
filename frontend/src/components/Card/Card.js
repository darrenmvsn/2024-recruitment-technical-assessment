import React from 'react'
import "./Card.css"
const Card = (props) => {
    console.log(props);
  return (
    <div className=" grid grid-rows-1 grid-cols-1 gap-12 w-3/10 items-center">
      <a href="/">
          <div className="box-border px-9 py-7 bg-unilectives-card hover:bg-gray-100 shadow-lg rounded-xl space-y-2 cursor-pointer">
          <div class="flex flex-wrap justify-between text-2xl gap-x-4">
              <h2 class="font-bold w-[8ch]">{`${props.courses.course_prefix}${props.courses.course_code}`}</h2>
              <div class="text-left">
                  <div class="text-2xl inline">
                      <div class="relative text-unilectives-subheadings/30 inline-block">
                          <span aria-label="rating ">★★★★★</span>
                          <span class="bg-unilectives-purple absolute inset-0 text-transparent bg-clip-text select-none" style={{width:"96.8%"}} aria-hidden="true">
                            {Array.from({ length: Math.round(props.courses.average_stars) }, (_, index) => (
                              <span key={index}>★</span>
                            ))}
                          </span>
                          <span class=" absolute inset-0 text-transparent bg-clip-text select-none" style={{width:"96.8%"}} aria-hidden="true">
                            {Array.from({ length: Math.round(5 - props.courses.average_stars) }, (_, index) => (
                              <span key={index}>★</span>
                            ))}
                          </span>
                      </div>
                  </div>
                  <p class="text-xs text-unilectives-subheadings">{props.courses.total_reviews} reviews</p>
                </div>
            </div>
            <p class="text-sm text-unilectives-headings h-16 break-all line-clamp-3">{props.courses.course_title}</p>
            <div class="flex flex-wrap gap-2">
                {props.courses.offered_terms.map((term)=> <span className="text-xs py-1 px-2 rounded-full bg-unilectives-tags">{term}</span> )}
                
            </div>
          </div>
      </a>
    </div>
  )
}

export default Card
