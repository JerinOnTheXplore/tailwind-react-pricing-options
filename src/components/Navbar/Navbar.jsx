import React, { useState } from 'react';
import Link from './Link';
import { Menu, SquareX } from 'lucide-react';
const navigationData = [
    {
      id: "url_001",
      name: "Home",
      path: "/home"
    },
    {
      id: "url_002",
      name: "About Us",
      path: "/about"
    },
    {
      id: "url_003",
      name: "Services",
      path: "/services"
    },
    {
      id: "url_004",
      name: "Blog",
      path: "/blog"
    },
    {
      id: "url_005",
      name: "Contact",
      path: "/contact"
    }
  ];
  
const Navbar = () => {
    const [open,setOpen]=useState(false);
    const links= navigationData.map(route=><Link route={route}
        key={route.id}
        ></Link>)  
    return (
        <nav className='flex justify-between mx-10 mt-10'>
            <span className='flex items-center'onClick={()=>setOpen(!open)}>
                {
                    open?<SquareX size={25} className='text-blue-600'></SquareX>:<Menu size={24} className='md:hidden text-blue-600'></Menu>
                }
                <ul className={`md:hidden absolute duration-500 
                ${open?'top-8 left-20':'-top-64 left-20'}
             bg-blue-300 rounded p-2`}>
                {
                    links
                }
                </ul>
            <h1 className='ml-4 text-2xl text-blue-600 font-semibold'>My Navbar</h1>
            </span>
          <ul className='md:flex hidden'>
            {
              links
            }
          </ul>

         {/* <ul className='flex'>
         {
            navigationData.map(route=><li className='mr-10'><a href={route.path}></a>{route.name}</li>)
         }

         </ul> */}
            {/* <ul className='flex ml-5 my-3'>
            <li className='mr-10'><a href="/home"></a>Home</li>
            <li className='mr-10'><a href="/about"></a>About</li>
            <li className='mr-10'><a href="/blog"></a>Blog</li>  
          </ul>   */}
          <button className='text-2xl text-blue-600 font-normal'>Sign In</button>
        </nav>
    );
};

export default Navbar;