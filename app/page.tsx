"use client"
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { CharacterResultsTypes } from '../types';

const ITEMS_PER_PAGE = 21;


export default function Page() {
  const [characters, setCharacters] = useState<CharacterResultsTypes>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterResultsTypes>([]);



  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const fetchCharacters = async (page: number): Promise<void> => {
    try {
      const res = await fetch(`https://hp-api.onrender.com/api/characters?page=${page}&limit=${ITEMS_PER_PAGE}`);

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      setCharacters(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage);
  };


  useEffect(() => {
    // Filter characters based on the searchQuery
    const filteredResults = characters.filter((character) =>
      character.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCharacters(filteredResults);
  }, [searchQuery, characters]);

  return (
    <div>
      <h2 className='p-4 text-4xl text-center'>All characters in the films</h2>

      {/* Center the search input */}
      <div className="flex justify-center">
        <input
          className="text-black border-2 border-[#DEDCDC] rounded-full px-3 py-2"
          type="text"
          placeholder="Search character..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="p-10 flex flex-row flex-wrap gap-10">
        {filteredCharacters.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            dateOfBirth={character.dateOfBirth}
            actor={character.actor}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {/* Render pagination controls */}
        <button
          className='p-10'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {/* Previous button */}
        </button>
        <button
          className='p-10'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={characters.length < ITEMS_PER_PAGE}
        >
          {/* Next button */}
        </button>
      </div>
    </div>
  );
}
