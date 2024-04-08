import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white sticky w-full top-0 border-gray-200 py-2 px-0 md:px-10 z-10">
      <div className="mx-4  grid grid-cols-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse text-[#828282]">
            <img src="/icons/menu.png" className="h-5 w-5 block md:hidden" alt="Mazaady Logo" />
            <img src="/images/logo.png" className="h-8 mx-4" alt="Mazaady Logo" />
            <div className='gap-4 items-end text-[0.7em] hidden md:flex'>
                <div className='relative'>
                    <p className=' text-[#D20653] h-full font-bold'>Home</p>
                    <div className="trapezoid absolute left-1 top-7"></div>
                </div>         
                <div className='relative'>
                    <p className=' hover:text-[#D20653] h-full'>Blog</p>
                </div>         
                <div className='relative'>
                    <p className=' hover:text-[#D20653] h-full'>Gifts</p>
                </div>         
            
            </div>      
        </a>
        <div className="flex items-center justify-end">
            <div className='grid grid-cols-3 mx-4 gap-5'>
                <div className='flex items-center justify-center cursor-pointer'>
                    <img className="w-5 h-5 mx-1" src="/icons/search.png" alt="add icon"></img>
                </div>
                <div className='flex items-center justify-center cursor-pointer'>
                    <img className="w-5 h-5 mx-1" src="/icons/notification.png" alt="notification icon"></img>
                </div>
                <div className='flex items-center justify-center cursor-pointer'>
                    <img className="w-7 h-7 mx-1" src="/icons/userIcon.png" alt="userIcon icon"></img>
                </div>
            </div>
            <div className="bg-gradient-to-r from-red-500 via-orange-500 to-orange-500 justify-between items-center p-2 text-white rounded-[0.5em] text-[0.7em] cursor-pointer hidden md:flex">
                <img className="w-5 h-5 mx-1" src="/icons/add.png" alt="add icon"></img>
                <p>Add New Product</p>
            </div>
            <button type="button" data-dropdown-toggle="language-dropdown-menu" className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer font-bold">
                <img className="w-5 h-5 mx-2" src="/icons/global.png" alt="add icon"></img>
                EN
            </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
