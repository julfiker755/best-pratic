import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const User = () => {
    const data=useLoaderData()
    return (
      <div className='max-w-7xl m-auto'>
        <div className='grid grid-cols-5 gap-6 py-3'>
          {data?.products.map(pro=><Card key={pro.id} Product={pro}></Card>)}
        </div>
      </div>
        
    );
};

export default User;