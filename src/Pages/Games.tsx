import React, { useState, useEffect } from 'react'
import { GameType } from '../types'
import axiosInstance from '../axios/axiosHttp';
import Card from '../components/Card/Card';

const Games = () => {
  const [games, setGames] = useState<GameType[]>([]);
  console.log(games)

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await axiosInstance.get('/games');
        const gamesData = response.data.results;
        setGames(gamesData); // update state with the fetched games data
      } catch (error) {
        console.error(error);
      }
    }

    fetchGames();
  }, []);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
      {games.map((item) => (
        <Card key={item.id} {...item}/>
      ))}
    </div>
  )
}

export default Games
