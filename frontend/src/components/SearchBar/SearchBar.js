import React from 'react'
import "./SearchBar.css"
import Modal from '../Modal/Modal'
const SearchBar = ({modalOpen, setmodalOpen}) => {
  return (
      <div className="mt-8">
        {modalOpen && <Modal setmodalOpen={setmodalOpen} />}
        <div className="flex w-4/6 items-center bg-white rounded border-2 border-unilectives-search mx-44">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-unilectives-search mx-2">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd">
                </path>
            </svg>
            <input onClick={() => setmodalOpen(true)} type="text" className="w-full py-2 px-3 text-sm text-unilectives-search focus:outline-none placeholder-unilectives-search font-medium" placeholder="Search for a course e.g. COMP1511" autocomplete="off" name="query" data-listener-added_8c408a60="true"/>
        </div>
        <div className="flex w-5/6 items-center mx-44 ">
          <div className="mt-4 flex-1 min-w-[150px] max-w-[200px] xs:min-w-full z-10">
            <div className="relative">
              <button className="relative flex items-center justify-between gap-2 w-full cursor-pointer bg-white py-2 px-4 text-left border border-unilectives-subheadings rounded-md shadow-review-card aria-expanded:border-b-transparent aria-expanded:rounded-b-none" id="headlessui-listbox-button-:Rcq6qba:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                <span className="block truncate">
                  <span className="text-unilectives-subheadings">Sort by</span>
                </span>
                <span className="pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd">
                      </path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

  )
}
export default SearchBar