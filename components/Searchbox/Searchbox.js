import React from 'react';
import '../Searchbox/Searchbox.css'

export default function index() {

    const data = [
        {
            title: 'CS 162',
            professor: 'Brandilyn Coker'
        },
        {
            title: 'CS 271',
            professor: 'Paris Kalathas'
        }
    ]; 

  return (
    <div>
        <input className="searchbox" placeholder="Search classes or professors"/>
        <div className="searchResultParent">
            {data.map((data) => 
            <div className="searchResult">
                {data.title} {data.professor}
            </div>
            )}
        </div>
    </div>
  )
}