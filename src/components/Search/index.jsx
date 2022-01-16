import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const onInputChange = value => {
        setSearch(value);
        onSearch(value);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <input
                type="text"                   
                style={{ width: "80%", padding: '10px', fontSize: '2rem' }}
                placeholder="Pesquisar"
                value={search}
                onChange={e => onInputChange(e.target.value)}
            />
        </div>
    );
};

export default Search;