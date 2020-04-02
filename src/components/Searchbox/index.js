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
        }
    ];
    

    // const callBackendAPI = async () => {
    //     const response = await fetch('/api/search', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });

    //     const body = await response.json();
    //     return body; 
    // }

    // useEffect(() => {
    //     callBackendAPI()
    //         .then(res => {
    //             res.status === 200 && console.log('cool')
    //         })
    //         .catch(err => console.error(err));
    // }, []);

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
            {searchValue.length > 0 &&
                dataShown.map(data =>
                    <div className="searchResult" key={data.id} onClick={() => handleSelect(data)}>
                        <div className="searchResultColumn">
                            <div className="searchResultProfessor">{data.professor}</div>
                            <div className="searchResultName">{data.name}</div>
                        </div>
                        <div className="searchResultRating">{data.rating}</div>
                    </div>
                )
            }
        </div>
    )
}
