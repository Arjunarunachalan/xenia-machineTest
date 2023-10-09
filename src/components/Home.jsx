import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import AccountBalance from "../assets/homeAssets/Account Balance.svg"
import CardNum from "../assets/homeAssets/Card No 25334327.svg"
import ChangeAcount from "../assets/homeAssets/Change Account.svg"
import ChangeStudent from "../assets/homeAssets/Change Student.svg"
import Class_Four from "../assets/homeAssets/Class IV B.svg"
import Consuption_Report from "../assets/homeAssets/ConsumptionReport.svg"
import Order_Food from "../assets/homeAssets/Group 297.svg"
import Recharge from "../assets/homeAssets/Group 303.svg"
import Rcharge_Historys from "../assets/homeAssets/Group 305.svg"
import OrderReport from "../assets/homeAssets/Group 309.svg"
import Consuption_Reports from "../assets/homeAssets/Group 311.svg"
import ChangeAccount_ProfileIcon from "../assets/homeAssets/Group 326.svg"
import HomeText from "../assets/homeAssets/Home.svg"
import DownArrow from "../assets/homeAssets/Icon ionic ios arrow up.svg"
import Menu from "../assets/homeAssets/Icon ionic ios menu.svg"
import Profile from "../assets/homeAssets/Mask Group 3.png"
import Order_Reharge_Reports from "../assets/homeAssets/Order Food, Recharge & Reports.svg"
import OrderReports from "../assets/homeAssets/Order Report.svg"
import OrderFood from "../assets/homeAssets/Order Food.svg"
import Name from "../assets/homeAssets/Rahul Radhakrishnan.svg"
import Recharge_History from "../assets/homeAssets/Recharge History.svg"
import Recharge_ from "../assets/homeAssets/Recharge.svg"
import Rectangle_Fill from "../assets/homeAssets/Rectangle 179.svg"
import Rectangle_unwanted from "../assets/homeAssets/Rectangle 180.svg"
import one from "../assets/homeAssets/Rectangle 327.svg"
import Rupee from "../assets/homeAssets/Rupee.svg"
import Modal  from "./ChangeAccount"


const Home = () => {
  const[openModal,setOpenModal]=useState(false)

  const handleModal = ()=>{
    setOpenModal(!openModal)
  }


  console.log(openModal);
    return (
      <div
        className={`max-w-screen h-screen relative z-10  ${
          openModal ? "bg-slate-300" : ""
        } `}
      >
        <div
          className={`w-screen h-[40vh] ${
            openModal ? "bg-slate-300" : "bg-gray-100"
          }  rounded-lg`}
        >
          <nav className="b text-white p-4 flex items-center justify-between">
            <div className="md:hidden">
              <button>
                <img src={Menu} alt="Menu" className="w-6 h-6" />
              </button>
            </div>
            <div className="w-full text-center md:w-auto">
              <a
                href="/"
                className="text-xl font-normal font-poppins text-gray-600"
              >
                Home
              </a>
            </div>
          </nav>
          <div className="flex justify-end">
            <div
              className="flex mr-[20px] bg-gradient-to-t from-cyan-300
                     to-cyan-500 rounded-md shadow-md items-center"
              onClick={handleModal}
            >
              <img src={ChangeAccount_ProfileIcon} alt="" />
              <img src={ChangeAcount} alt="" />
              <img src={DownArrow} alt="" />
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center">
            <div>
              <img src={Profile} alt="" className="w-[130px]" />
            </div>
            <div className="flex justify-center items-center flex-col">
              <img src={Name} alt="" className="ml-4  h-7 " />
              <img src={CardNum} alt="" className="ml-3 h-6" />
              <img src={Class_Four} alt="" className="ml-3 h-6" />
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center flex-col max-w-screen 
           h-[12vh] m-[18px] bg-sky-500 rounded-lg "
        >
          <div>
            <img src={AccountBalance} alt="account balance" />
          </div>
          <div>
            <img src={Rupee} alt="account balance" />
          </div>
        </div>

        <div
          className="flex   flex-col max-w-screen 
           h-[36vh] m-[18px] p-[13px] border border-gray-300 rounded-lg max-h-[30vh]  "
        >
          <div className="mb-2">
            <p className="pb-1 text-normal font-poppins text-gray-500 tracking-wide">
              Order Food , Recharge & Reports
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
          
              <Link to="/recharge">
                <div className="bg-sky-200  rounded-lg max-h-[90px] pt-4 ps-2 ">
                  <img
                    src={Recharge}
                    alt="recharge"
                    className="w-[40px] mb-[10px]"
                  />

                  <p className="font-semibold text-blue-600 ">Recharge</p>
                </div>
              </Link>
      

            <div className="bg-sky-200 max-h-[90px] pt-4 ps-2 rounded-lg">
              <img
                src={Order_Food}
                alt="recharge"
                className="w-[40px] mb-[10px]"
              />
              <p className="font-semibold text-blue-600 text-sm">Order Food</p>
            </div>
            <div className="bg-sky-200 max-h-[90px] pt-4 ps-2 rounded-lg">
              <img
                src={Rcharge_Historys}
                alt="recharge"
                className="w-[34px] mb-[10px]"
              />
              <p className="font-bold text-blue-600 text-[10px] ">
                Recharge History
              </p>
            </div>
            <div className="bg-sky-200 max-h-[90px] pt-4 ps-2 rounded-lg">
              <img
                src={OrderReport}
                alt="recharge"
                className="w-[20px] mb-[10px]"
              />
              <p className="font-bold text-blue-600 text-[10px]">
                Order Report
              </p>
            </div>
            <div className="bg-sky-200 max-h-[90px] pt-4 ps-2 rounded-lg">
              <img
                src={Consuption_Reports}
                alt="recharge"
                className="w-[30px] mb-[10px]"
              />
              <p className="font-bold text-blue-600 text-[8px] ">
                Consuption Reports
              </p>
            </div>
          </div>
        </div>
        {/* modal */}
        <div
          className={`${
            openModal ? "modal-fade-enter-active" : "modal-fade-enter"
          }  h-[80vh] w-[100vw] flex items-start rounded-2xl  absolute top-[110px]  z-30 `}
        >
          {openModal ? <Modal openModal={openModal} /> : null}
        </div>
      </div>
    );
}

export default Home