import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
 


function App() {
 return (
   <div className="w-full md:max-h-screen h-screen bg-login-bg bg-cover">
     <div className="flex justify-center items-center md:pt-[20px] pt-[150px] mb-11  ">
       <div className="flex ">
         <img src={Rectangle_head} alt="rectanglehead" className="w-2 mt-1 " />
       </div>
       <div className="ml-4 tex">
         <img src={Welcome} alt="welcome" className="w-[200px]" />
         <img src={Sighn_in} alt="sighn in " className="w-[200px]" />
       </div>
     </div>

     <div>
       <div className="flex flex-col mb-5 justify-center items-center ">
         <div className="mb-6 relative flex items-center">
           <img
             src={
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 width="10.527"
                 height="13.107"
                 viewBox="0 0 10.527 13.107"
               >
                 <defs>
                   <linearGradient
                     id="linear-gradient"
                     x1="0.5"
                     x2="0.5"
                     y2="1"
                     gradientUnits="objectBoundingBox"
                   >
                     <stop offset="0" stop-color="#0094d3" />
                     <stop offset="1" stop-color="#75deff" />
                   </linearGradient>
                 </defs>
                 <path
                   id="Path_560"
                   data-name="Path 560"
                   d="M140.568,43.634a2.914,2.914,0,0,1-.024.365c.007-.049.014-.1.019-.147a2.852,2.852,0,0,1-.19.7c.018-.044.038-.089.056-.133a2.774,2.774,0,0,1-.358.614l.088-.113a2.824,2.824,0,0,1-.5.5l.113-.088a2.829,2.829,0,0,1-.614.358l.133-.056a2.852,2.852,0,0,1-.7.19l.147-.019a2.8,2.8,0,0,1-.731,0l.147.019a2.852,2.852,0,0,1-.7-.19l.133.056a2.774,2.774,0,0,1-.614-.358l.113.088a2.824,2.824,0,0,1-.5-.5l.088.113a2.829,2.829,0,0,1-.358-.614c.018.044.038.089.056.133a2.851,2.851,0,0,1-.19-.7c.007.049.014.1.019.147a2.8,2.8,0,0,1,0-.731c-.007.049-.014.1-.019.147a2.851,2.851,0,0,1,.19-.7c-.018.044-.038.089-.056.133a2.774,2.774,0,0,1,.358-.614l-.088.113a2.825,2.825,0,0,1,.5-.5l-.113.088a2.829,2.829,0,0,1,.614-.358l-.133.056a2.852,2.852,0,0,1,.7-.19l-.147.019a2.8,2.8,0,0,1,.731,0l-.147-.019a2.852,2.852,0,0,1,.7.19l-.133-.056a2.774,2.774,0,0,1,.614.358l-.113-.088a2.824,2.824,0,0,1,.5.5l-.088-.113a2.829,2.829,0,0,1,.358.614c-.018-.044-.038-.089-.056-.133a2.851,2.851,0,0,1,.19.7c-.007-.049-.014-.1-.019-.147a3.2,3.2,0,0,1,.024.365.556.556,0,1,0,1.111,0,3.276,3.276,0,0,0-.595-1.888,3.814,3.814,0,0,0-.343-.418,3.539,3.539,0,0,0-.41-.353,3.269,3.269,0,0,0-.867-.461,3.315,3.315,0,0,0-3.616.984,3.652,3.652,0,0,0-.322.447,3.419,3.419,0,0,0-.236.493,3.3,3.3,0,0,0,1.666,4.186,3.091,3.091,0,0,0,1.086.3,3.292,3.292,0,0,0,3.583-2.717,3.725,3.725,0,0,0,.051-.57.554.554,0,0,0-1.109,0Zm1.843,8.687h-7.128c-.315,0-.631,0-.946,0a.833.833,0,0,1-.1-.007l.147.019a.7.7,0,0,1-.16-.044l.133.056a.7.7,0,0,1-.156-.092l.113.088a.8.8,0,0,1-.114-.114l.088.113a.763.763,0,0,1-.092-.156c.018.044.038.089.056.133a.8.8,0,0,1-.044-.16c.007.049.014.1.019.147a3.985,3.985,0,0,1-.007-.515v-.595a3.376,3.376,0,0,1,.028-.443c-.007.049-.014.1-.019.147a3.249,3.249,0,0,1,.226-.829c-.018.044-.038.089-.056.133a3.267,3.267,0,0,1,.415-.708l-.088.113a3.3,3.3,0,0,1,.578-.578l-.113.088a3.267,3.267,0,0,1,.708-.415l-.133.056a3.291,3.291,0,0,1,.829-.226l-.147.019a4.812,4.812,0,0,1,.617-.028h2.542a5.4,5.4,0,0,1,.686.028l-.147-.019a3.249,3.249,0,0,1,.829.226l-.133-.056a3.267,3.267,0,0,1,.708.415l-.113-.088a3.3,3.3,0,0,1,.578.578l-.088-.113a3.267,3.267,0,0,1,.415.708c-.018-.044-.038-.089-.056-.133a3.291,3.291,0,0,1,.226.829c-.007-.049-.014-.1-.019-.147a5.009,5.009,0,0,1,.028.629v.688a1.909,1.909,0,0,1-.007.236c.007-.049.014-.1.019-.147a.7.7,0,0,1-.044.16c.018-.044.038-.089.056-.133a.7.7,0,0,1-.092.156l.088-.113a.8.8,0,0,1-.114.114l.113-.088a.763.763,0,0,1-.156.092l.133-.056a.8.8,0,0,1-.16.044l.147-.019c-.031,0-.062.006-.094.007a.58.58,0,0,0-.393.163.556.556,0,0,0,.393.949,1.245,1.245,0,0,0,1.174-.879,2.184,2.184,0,0,0,.049-.638,8.338,8.338,0,0,0-.068-1.442,3.762,3.762,0,0,0-2.78-2.948,4.937,4.937,0,0,0-1.195-.113h-2.464a4.712,4.712,0,0,0-1.224.126,3.763,3.763,0,0,0-2.734,2.981,9.062,9.062,0,0,0-.06,1.427,1.846,1.846,0,0,0,.067.658,1.3,1.3,0,0,0,.507.642,1.226,1.226,0,0,0,.647.186c.108,0,.217,0,.325,0h7.757a.556.556,0,1,0,0-1.113Z"
                   transform="translate(-133.108 -40.327)"
                   fill="url(#linear-gradient)"
                 />
               </svg>
             }
             alt="profile"
             className="w-[20px] absolute z-20 pointer-events-none ml-2 mr-3"
           />
           <img
             src={user_name}
             alt="profile"
             className="w-[80px] bg-white absolute z-20 top-0 pointer-events-none ml-11  mr-3"
           />
           <input
             type="text"
             className="relative border text-gray-500 h-[50px] text-sm border-teal-400  rounded-md justify-center py-1 px-[35px] md:px-[26px] 30px focus:outline-none"
             placeholder="username / mobilenum"
           />
         </div>
         <div className="mb-6 relative flex items-center ">
           <img
             src={PasswordLogo}
             alt="profile"
             className="w-[20px] absolute z-20 pointer-events-none ml-2 mr-3"
           />
           <img
             src={password}
             alt="profile"
             className="w-[40px]  bg-white absolute z-20 top-0 pointer-events-none ml-11  mr-3"
           />

           <input
             type="password"
             placeholder="password"
             className="relative border h-[50px] text-gray-500 text-sm  border-teal-400  rounded-md justify-center py-1 px-[35px] md:px-[26px] 30px focus:outline-none "
           />
         </div>
         <div className="flex justify-between gap-8 mb-4">
           <div className="flex">
             <input type="checkbox" className="bg-blue-500 mr-1" />
             <img src={Remember} alt="remeber me" />
           </div>
           <div>
             <img src={ForgotPassword} alt="forgott password" />
           </div>
         </div>
       </div>
       <Link to="/home">
         <div className="flex justify-center items-center ">
           <a
             href="#"
             className="px-4 py-2 bg-gradient-to-t from-cyan-300 to-cyan-500 rounded-md md:w-[28%] w-[60%] h-[50px] flex justify-center items-center text-white"
           >
             Sign In
           </a>
         </div>
       </Link>

       <div className="flex justify-center items-center md:pt-5 pt-48 flex-col md:pb-[30px]">
         <p className="text-normal text-gray-500">Powered by</p>
         <Link to="/recharge">
           <h1 className="font-bold text-gray-700">Xenia Technoilogies</h1>
         </Link>
       </div>
     </div>
   </div>
 );
}
export default App;