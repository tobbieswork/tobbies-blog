"use client";
import React, { useState } from 'react';
import styles from './search.module.css';
import { useRouter } from 'next/navigation';

const Search = () => {
    const [keywords, setKeywords] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        router.push(`/search?keywords=${keywords}`);
    };

    return (
        <div className={styles.searchWrapper} key={"search-input"}>
            <div onClick={handleSearch} className={styles.searchIcon}>🔎</div>
            <input
                className={styles.searchInput}
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
            />
        </div>
    );
};

export default Search;