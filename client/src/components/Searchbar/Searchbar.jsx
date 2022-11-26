import React, {useState} from 'react';
import './Searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Searchbar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
        setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
       
        setFilteredData([]);
        setWordEntered("");

    };

  return (
    <div className="search">
        <div className="searchInputs">
            <input type="text" 
            placeholder={placeholder} 
            value={wordEntered}
            onChange={handleFilter}/>
            <div className='SearchIcon'>
                {filteredData.length === 0 ? (
                <SearchIcon /> 
                ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
            </div>
        </div>
        {filteredData.length !== 0 && (
        <div className="dataResults">
            {filteredData.slice(0, 15).map((value, key) => {
                  return <div> {value.Post}</div>
                //return <div> {value.politician}</div>
                //return <div> {value.Party}</div>
                //return <div> {value.District}</div>
                //return <div> {value.State}</div>  

            })}
    </div>    
        )}  
    </div>
  );
}

export default Searchbar;