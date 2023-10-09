import React from 'react'
import BalanceLabel from "../assets/rechargeAssets/Balance 245.00.svg";
import CardNumberLabel from "../assets/rechargeAssets/Card No 25334327.svg";
import Class from "../assets/rechargeAssets/Class IV B.svg";
import WalletIcon from "../assets/rechargeAssets/Group 227.svg";
import Menu from "../assets/rechargeAssets/Icon ionic-ios-menu.svg";
import Profile from "../assets/rechargeAssets/Mask Group 3.png";
import Rahul from "../assets/rechargeAssets/Rahul Radhakrishnan.svg";
import RechargeLabel from "../assets/rechargeAssets/Recharge.svg";
import Rupee from "../assets/rechargeAssets/Rupee.svg";
import Arrow from "../assets/rechargeAssets/arrow download.png";
import Erase from "../assets/rechargeAssets/delete-svgrepo-com.svg";



const Recharge = () => {
  return (
    <div className="w-screen h-[100vh]">
      <div className="bg-gray-100 h-[38vh]">
        <nav className="b text-white p-4 flex items-center justify-between">
          <div className="md:hidden">
            <button>
              <img src={Menu} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
          <div className="w-full text-center md:w-auto">
            <a
              href="/"
              className="text-xl font-normal font-poppins text-gray-600 flex justify-center"
            >
              Recharge
            </a>
          </div>
        </nav>
        <div className="flex justify-end pt-5">
          <div
            className="flex mr-[20px] 
           border-black border-2 rounded-md items-center w-[110px] h-[25px]"
          >
            <img src={WalletIcon} alt="" className="w-[17px] ms-[5px]" />
            <img
              src={BalanceLabel}
              alt="baalnec la"
              className="ms-[10px] w-[80px] "
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center">
          <div>
            <img src={Profile} alt="" className="w-[130px]" />
          </div>
          <div className="flex justify-center items-center flex-col pt-1">
            <img src={Rahul} alt="" className="ml-4  h-7 " />
            <img src={CardNumberLabel} alt="" className="ml-3 h-6" />
            <img src={Class} alt="" className="ml-3 h-6" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-8">
        <img src={Rupee} alt="" className="w-[120px]" />
        <a
          href="#"
          className="bg-cyan-500 w-[85vw]
   flex justify-center items-center h-[45px] rounded-md 
   font-bold text-white text-2xl tracking-widest mt-[30px]"
        >
          PAY
        </a>
      </div>
      <div className="container mx-auto ">
        <div className="grid  grid-cols-3  gap-1 p-1 max-w-screen-sm w-[100vw] mt-[98px] h-screen max-h-[33vh] mb-[10px]">
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm font-bold max-h-[64px] text-2xl">
            <a href="">1</a>
          </div>
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm max-h-[64px] text-2xl">
            <a href="">2</a>
          </div>
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm max-h-[64px] text-2xl">
            <a href="">3</a>
          </div>
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm max-h-[64px] text-2xl">
            <a href="">4</a>
          </div>
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm max-h-[64px] text-2xl">
            <a href="">5</a>
          </div>
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm max-h-[64px] text-2xl">
            <a href="">6</a>
          </div>
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm max-h-[64px] text-2xl">
            <a href="">7</a>
          </div>
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm max-h-[64px] text-2xl">
            <a href="">8</a>
          </div>
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm max-h-[64px] text-2xl">
            <a href="">9</a>
          </div>
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm max-h-[64px] text-2xl">
            <img src={Arrow} alt="" className="w-[40px]" />
          </div>
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm max-h-[64px] text-2xl">
            <a href="">0</a>
          </div>
          <div className="m-[2px] bg-slate-200 flex items-center justify-center shadow-md rounded-sm max-h-[64px] text-2xl">
            <img src={Erase} alt="" className="w-[40px] text-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recharge