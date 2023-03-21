import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios/axiosHttp';
import DeveloperCard from '../components/DeveloperCard/DeveloperCard';
import { DeveloperInterface } from '../types/GameDeveloper';

const Developer: React.FC = () => {
  const [developers, setDevelopers] = useState<DeveloperInterface[]>([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      const response = await axiosInstance.get('/developers');
      setDevelopers(response.data.results);
    };

    fetchDevelopers();
  }, []);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
      {developers.map((item) => (
        <DeveloperCard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Developer;
