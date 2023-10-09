import React,{useState,useEffect} from 'react'
import Rahul from "../assets/changeAccountAssets/Rahul Radhakrishnan.svg"
import cardNo from "../assets/changeAccountAssets/Card No 1.svg";
import cardNoval from "../assets/changeAccountAssets/Card No 25334327.svg";
import class4 from "../assets/changeAccountAssets/Class IV B.svg";
import class5 from "../assets/changeAccountAssets/Class V A.svg";
import profile1 from "../assets/changeAccountAssets/Mask Group 6.png";
import profile2 from "../assets/changeAccountAssets/Mask Group 7.png";
import Ridhu from "../assets/changeAccountAssets/Rithu Radhakrishnan.svg";
import CheckboxWithTick from './Checkbox';




const ChangeAccount = ({openModal}) => {

 const [isChecked, setIsChecked] = useState(false);

 const handleChange = () => {
   setIsChecked(!isChecked);
 };
  return (
    <div className={`${
    openModal ? 'modal-fade-enter-active' : 'modal-fade-enter'
  }container w-screen rounded-md  h-[80vh] max-h-[75vh] flex flex-col  items-start pt-[40px] px-[10px] bg-white `}>
      <div className="border border-grey  rounded-xl w-screen max-w-[100%] max-h-[150px] max-w-screen flex px-[10px] py-[5px] my-[15px]">
        <div className="flex items-center">
          <img src={profile1} alt="" className="w-[50px] " />
        </div>
        <div className="flex flex-col p-2">
          <img src={Rahul} alt="" className="w-[175px]" />
          <img src={cardNo} alt="" className="w-[100px] " />
          <img src={class4} alt="" className="w-[50px]" />
        </div>
        {/* check box starts.... */}
        <div className="flex justify-end items-center ms-[95px] ">
          <CheckboxWithTick />
        </div>
      </div>
      <div className="border border-grey  rounded-lg w-screen max-w-[100%] max-h-[150px] max-w-screen flex px-[10px] py-[5px]">
        <div className="flex items-center">
          <img src={profile2} alt="" className="w-[50px] " />
        </div>
        <div className="flex flex-col p-2">
          <img src={Ridhu} alt="" className="w-[175px]" />
          <img src={cardNoval} alt="" className="w-[100px] " />
          <img src={class5} alt="" className="w-[50px]" />
        </div>
        <div className="flex justify-end items-center ms-[95px] ">
          <CheckboxWithTick />
        </div>
      </div>
    </div>
  );
}

export default ChangeAccount

