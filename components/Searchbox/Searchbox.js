import React from 'react';
import '../Searchbox/Searchbox.css'

export default function index() {

    const data = [
        {
            id: '1',
            name: 'CS 162',
            professor: 'Brandilyn Coker',
            rating: '3.0'
        },
        {
            id: '2',
            name: 'CS 271',
            professor: 'Paris Kalathas',
            rating: '1.0'
        }
    ]; 

  return (
    <div>
        <input className="searchbox" placeholder="Search classes or professors"/>
        <div className="searchResultParent">
            {data.map((data) => 
            <div className="searchResult" key={data.id}>
                <div className="searchResultColumn">
                    <div className="searchResultProfessor">{data.professor}</div>
                    <div className="searchResultName">{data.name}</div> 
                </div>
                <div className="searchResultRating">{data.rating}</div>
            </div>
            )}
        </div>
    </div>
  )
}