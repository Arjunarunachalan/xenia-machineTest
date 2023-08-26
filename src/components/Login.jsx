import React, { useState } from 'react';
import ForgotPassword from "../assets/loginAssets/Forgot your password.svg"
import passwordText from "../assets/loginAssets/asset1.svg"
import password from "../assets/loginAssets/Password.svg"
import Rectangle_input from "../assets/loginAssets/Rectangle 160.svg"
import Rectangle_fill from "../assets/loginAssets/Rectangle 164.svg"
import Rectangle_head  from "../assets/loginAssets/Rectangle 165.svg"
import Remember  from "../assets/loginAssets/Remember me.svg"
import Sighn_in from "../assets/loginAssets/Sign In to continue.svg"
import user_name  from "../assets/loginAssets/User name   Mobile no..svg"
import user_name_two  from "../assets/loginAssets/user name  mobile no.1.svg"
import Welcome from "../assets/loginAssets/Welcome.svg"
import PasswordLogo from "../assets/loginAssets/Group 216.svg"
import PasswordLog from "../assets/loginAssets/Group 218.svg"
import TickMArk from "../assets/loginAssets/icon ionic-ios-checkbox.svg"
import ProfileIcon from "../assets/loginAssets/path 560.svg"


function App() {
 return (
  <div className='w-full md:max-h-screen h-screen bg-login-bg bg-cover'>
  <div className='flex justify-center items-center md:pt-[20px] pt-[150px] mb-11  '>
    <div className='flex '>
      <img src={Rectangle_head}
       alt="rectanglehead" 
       className='w-2 mt-1 '/>
    </div>
    <div className='ml-4 tex'>
    <img src={Welcome} 
      alt="welcome"
      className='w-[200px]' />
      <img src={Sighn_in} 
      alt="sighn in " 
      className='w-[200px]'/>
    </div>
      
  </div>

  <div>
    <div className='flex flex-col mb-5 justify-center items-center '>
      <div className='mb-6 relative flex items-center'>
        <img src={ProfileIcon} alt="profile"  className='w-[20px] absolute z-20 pointer-events-none ml-2 mr-3'/>
        <img src={user_name} alt="profile"  className='w-[80px] bg-white absolute z-20 top-0 pointer-events-none ml-11  mr-3'/>
        <input type="text" className='relative border text-gray-500 text-sm border-teal-400  rounded-md justify-center py-1 px-[35px] md:px-[26px] 30px focus:outline-none' />
     
      </div>
      <div className='mb-6 relative flex items-center '>
        <img src={PasswordLogo} alt="profile"  className='w-[20px] absolute z-20 pointer-events-none ml-2 mr-3'/>
        <img src={password} alt="profile"  className='w-[40px]  bg-white absolute z-20 top-0 pointer-events-none ml-11  mr-3'/>

        <input type="password" className='relative border text-gray-500 text-sm  border-teal-400  rounded-md justify-center py-1 px-[35px] md:px-[26px] 30px focus:outline-none ' />
     
      </div>
     <div className='flex justify-between gap-8 mb-4'>
        <div className='flex'>
        <img src={TickMArk} alt="checkboc" />
          <img src={Remember} alt="remeber me" />
        </div>
        <div>
          <img src={ForgotPassword} alt="forgott password" />
        </div>
     </div>
    </div>

    <div className='flex justify-center items-center '>
      <a href="#" className='px-4 py-2 bg-gradient-to-t from-cyan-300 to-cyan-500 rounded-md md:w-[28%] w-[70%] h-[35px] flex justify-center items-center text-white'>Sign In</a>
    </div>

    <div className='flex justify-center items-center md:pt-5 pt-20 flex-col md:pb-[30px]'>
      <p className='text-normal text-gray-500'>Powered  by</p>
      <h1 className='font-bold text-gray-700'>Xenia Technoilogies</h1>
    </div>
  </div>
  </div>
    );
}
export default App;