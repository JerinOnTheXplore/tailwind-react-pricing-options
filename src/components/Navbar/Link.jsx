import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-10 hover:bg-blue-400 hover:rounded px-1'><a href={route.path}></a>{route.name}</li>
        </div>
    );
};

export default Link;