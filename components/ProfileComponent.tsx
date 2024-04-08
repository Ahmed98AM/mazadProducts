import React from 'react';

const ProfileComponent: React.FC = () => {
  return (
    <div className="bg-white rounded-[2em] p-4 ">
        <div className="flex items-center">
            <div>
            <div className="h-20 aspect-square rounded-md">
                <img className="object-cover aspect-square rounded-xl" src="/images/profile.jpg" alt="Profile"></img>
            </div>
            <div className="text-[1.5em] font-bold mt-2">Hala Ahmed</div>
            <p className="text-[1.2em]">I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Makeup and Skin Care.</p>
            </div>
        </div>
        <div className="text-[0.8em] flex items-center mt-4">
            <div className='grid grid-cols-3 gap-5 w-full font-bold'>    
                <div className="">
                    <div className="grid grid-cols-3 bg-[#FFF5E9] rounded-xl p-2">
                        <div className="col-span-1  flex items-center justify-center">
                            <img className="h-4 w-4" src="/icons/user-tick.png" alt="User tick"></img>
                        </div>
                        <div className="col-span-2">
                            <div>5</div>
                            <div className="text-[#FF951D] overflow-hidden text-[1.2em] font-normal">Following</div> 
                        </div>
                    </div>  
                </div>
                <div className="">
                    <div className="grid grid-cols-3 bg-[#FFF5E9] rounded-xl p-2">
                        <div className="col-span-1  flex items-center justify-center">
                            <img className="h-4 w-4" src="/icons/user-tick.png" alt="User tick"></img>
                        </div>
                        <div className="col-span-2">
                            <div>5</div>
                            <div className="text-[#FF951D] overflow-hidden text-[1.2em] font-normal">Following</div> 
                        </div>
                    </div>  
                </div>
                <div className="">
                    <div className="grid grid-cols-3 bg-[#FFF5E9] rounded-xl p-2">
                        <div className="col-span-1  flex items-center justify-center">
                            <img className="h-4 w-4" src="/icons/user-tick.png" alt="User tick"></img>
                        </div>
                        <div className="col-span-2">
                            <div>5</div>
                            <div className="text-[#FF951D] overflow-hidden text-[1.2em] font-normal">Following</div> 
                        </div>
                    </div>  
                </div>
                
            </div>
        
        </div>
        <div className="flex items-center">
            <button className="text-center w-full h-14 bg-gradient-to-r from-red-500 via-red-500 to-orange-500 rounded-[1.2em] mt-4 text-white font-bold text-[1.8em]">Follow</button>
        </div>
    </div>
  );
};

export default ProfileComponent;
