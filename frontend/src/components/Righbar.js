import { CiCalendar } from "react-icons/ci";
import { CgGenderFemale } from "react-icons/cg";
import { MdOutlineCall } from "react-icons/md";
import { BsBagFill } from "react-icons/bs";
import img from '../assets/JoshSimmons.png'

const Righbar = ({user}) => {
    let name = "Dr. Josh Simmons";
    let dob = "12/01/1980";
    let gender = "Female";
    let contact = "+91 7625374589";
    let profession = "Doctor"

  return (
    <div className="bg-white rounded-2xl p-5 mt-20 space-y-5">
        <div className='flex flex-col items-center justify-center p-5'>
            <img src={img} alt={name} className='h-36 w-36 rounded-full' />
            <h1 className='text-3xl font-bold mt-5'>{name}</h1>
        </div>
        <div className="px-5 space-y-7">
            <div className="flex my-3">
                <div className="flex justify-center items-center rounded-full bg-gray-200 h-11 w-11 text-xl font-bold">
                    <CiCalendar />
                </div>
                <div className="ml-3">
                    <p className="text-sm ">Date of Birth</p>    
                    <p className="text-sm font-semibold">{dob}</p>
                </div>
            </div>
            <div className="flex my-3">
                <div className="flex justify-center items-center rounded-full bg-gray-200 h-11 w-11 text-xl font-bold">
                    <CgGenderFemale />
                </div>
                <div className="ml-3">
                    <p className="text-sm ">Gender</p>    
                    <p className="text-sm font-semibold">{gender}</p>
                </div>
            </div>
            <div className="flex my-3">
                <div className="flex justify-center items-center rounded-full bg-gray-200 h-11 w-11 text-xl font-bold">
                    <MdOutlineCall />
                </div>
                <div className="ml-3">
                    <p className="text-sm ">Contact</p>    
                    <p className="text-sm font-semibold">{contact}</p>
                </div>
            </div>
            <div className="flex my-3">
                <div className="flex justify-center items-center rounded-full bg-gray-200 h-11 w-11 text-xl font-bold">
                    <BsBagFill />
                </div>
                <div className="ml-3 mb-10">
                    <p className="text-sm ">Profession</p>    
                    <p className="text-sm font-semibold">{profession}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Righbar;
