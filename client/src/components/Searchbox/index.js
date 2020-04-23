import React, { useEffect, useState } from 'react';
import './Searchbox.css'

export default function Searchbox() {

    const [dataShown, setDataShown] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selected, setSelected] = useState({});

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
        },
        {
            id: '3',
            name: 'CS 162',
            professor: 'Brandilyn Coker',
            rating: '3.0'
        },
        {
            id: '4',
            name: 'CS 271',
            professor: 'Paris Kalathas',
            rating: '1.0'
        },
        {
            id: '5',
            name: 'CS 162',
            professor: 'Brandilyn Coker',
            rating: '3.0'
        },
        {
            id: '21',
            name: 'CS 162',
            professor: 'Brandilyn Coker',
            rating: '3.0'
        },
        {
            id: '22',
            name: 'CS 271',
            professor: 'Paris Kalathas',
            rating: '1.0'
        },
        {
            id: '32',
            name: 'CS 162',
            professor: 'Brandilyn Coker',
            rating: '3.0'
        },
        {
            id: '24',
            name: 'CS 271',
            professor: 'Paris Kalathas',
            rating: '1.0'
        },
        {
            id: '25',
            name: 'CS 162',
            professor: 'Brandilyn Coker',
            rating: '3.0'
        },
        {
            id: '11',
            name: 'CS 162',
            professor: 'Brandilyn Coker',
            rating: '3.0'
        },
        {
            id: '12',
            name: 'CS 271',
            professor: 'Paris Kalathas',
            rating: '1.0'
        },
        {
            id: '13',
            name: 'CS 162',
            professor: 'Brandilyn Coker',
            rating: '3.0'
        },
        {
            id: '14',
            name: 'CS 271',
            professor: 'Paris Kalathas',
            rating: '1.0'
        },
        {
            id: '15',
            name: 'CS 162',
            professor: 'Brandilyn Coker',
            rating: '3.0'
        }
    ];

    const handleChange = ({ target: { value } }) => {
        setSearchValue(value);
        matchSearch();
    }

    const matchSearch = () => {
        const emptyArray = [];
        setDataShown(emptyArray);

        data.map(item => {
            if (item.professor.toLowerCase().includes(searchValue.toLowerCase()))
                setDataShown(dataShown => [...dataShown, item]);
        })
    }

    const handleSelect = (item) => {
        setSelected(item);
        setSearchValue('');
        console.log(item);
    }

    return (
        <div>
            <input
                className="searchbox"
                placeholder="Search classes or professors"
                value={searchValue}
                onChange={(e) => handleChange(e)}
            />
            <div className="searchResultParent">
                {searchValue.length > 0 &&
                    dataShown.map((data) =>
                        <div className="searchResult" key={data.id} onClick={() => handleSelect(data)} style={{bottom: 'calc(auto - 50px)'}}>
                            <div className="searchResultColumn">
                                <div className="searchResultProfessor">{data.professor}</div>
                                <div className="searchResultName">{data.name}</div>
                            </div>
                            <div className="searchResultRating">{data.rating}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
