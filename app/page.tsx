"use client"
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { CharacterType } from '@/types';

const ITEMS_PER_PAGE = 21;

export default function Page() {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterType[]>([]);

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

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredCharacters.slice(indexOfFirstItem, indexOfLastItem);

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

      <div className="p-10 mx-3 grid grid-cols-1  place-items-center md:grid-cols-3 lg:grid-cols-3 gap-10">
        {currentItems.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
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
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-8 w-8">
          <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button
          className='p-10'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentItems.length < ITEMS_PER_PAGE} // Disable "Next" button when there are no more items to show
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-8 w-8">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

