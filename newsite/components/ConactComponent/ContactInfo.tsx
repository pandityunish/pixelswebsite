
'use client'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function ContactInfo() {
    const {register, handleSubmit, control, reset, formState: { errors } } 
    = useForm();
    const [result, setResult] = React.useState("");
    const onSubmit = async (data) => {
      setResult("Sending....");
      try {
        const response = await axios.post('http://localhost:5001/messages', data);
        console.log('Message posted successfully:', response.data);
        toast.success("Form Submitted Successfully")

        reset(); // Clear the form fields after successful submission
      } catch (error) {
        console.error('Error posting message:', error);
      }
      // const formData = new FormData(event.target);
      // // 
      // formData.append("access_key", "46aaeb8f-6072-48d7-a6e5-b3046012c396");
      // // formData.append("access_key", "24f83073-78de-4ec2-9db8-ef377057fe08");
  
      // const response = await fetch("https://api.web3forms.com/submit", {
      //   method: "POST",
      //   body: formData
      // });
  
      // const data = await response.json();
  
      // if (data.success) {
      //   setResult("Form Submitted Successfully");
      //   toast.success("Form Submitted Successfully")
      //   event.target.reset();
      // } else {
      //   console.log("Error", data);
      //   toast.error(data.message)
      //   setResult(data.message);
      // }
    };
  return (
    <div className='flex lg:flex-row flex-col justify-between xl:px-32 md:px-10 px-3 bg-[#F4F3F3] p-20 font-outfit'>

<div className='bg-white lg:w-[55vw] w-[100%] md:p-10 p-3 lg:mt-0 mt-10'>
<p className='font-bold text-3xl text-primary'><span className='text-black'>Your</span> Information</p>
<p className='text-[#6C6B6B] text-start pt-3'>Of course, your inquiry is free and non-binding; your personal contact
 person will contact you.


</p>
<form action="" onSubmit={handleSubmit(onSubmit)}>

                  <div className='flex gap-[20px]'>
                  <div className='w-[290px] mt-5'>
                   
                   <div className='mt-[8px] relative'>

                     <input
                       type='text'
                       placeholder='First Name'
                       name='Surname'
                       className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 ${errors.Vorname ? 'border-red-500' : 'border-[#808080]'
                         }`}
                       {...register('firstName', { required: true })}
                     />
                     {errors.Vorname && (
                       <span className='text-red-500'>
                         Ihr Vorname is required
                       </span>
                     )}
                   </div>
                 </div>
                 <div className='w-[290px] mt-5'>
                   
                    <div className='mt-[8px] relative'>

                      <input
                        type='text'
                        name='Nachname'
                        placeholder='Last Name  '
                        className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 ${errors.nachname ? 'border-red-500' : 'border-[#808080]'
                          }`}
                        {...register('lastName', { required: true })}
                      />
                      {errors.nachname && (
                        <span className='text-red-500'>
                          Ihr Nachname is required
                        </span>
                      )}
                    </div>
                  </div>
                  </div>
                  <div className='flex gap-[20px]'>
                  <div className='w-[290px] mt-5'>
                   
                   <div className='mt-[8px] relative'>

                     <input
                       type='text'
                       name='Firmenadresse'
                       placeholder='Address'
                       className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 ${errors.firmenadresse ? 'border-red-500' : 'border-[#808080]'
                         }`}
                       {...register('address', { required: true })}
                     />
                     {errors.address && (
                       <span className='text-red-500'>
                          Address is required
                       </span>
                     )}
                   </div>
                 </div>
                  <div className='w-[290px] mt-5'>
                   
                   <div className='mt-[8px] relative'>

                     <input
                       type='text'
                       name='Telefonnummer'
                       placeholder='Phone Number                       '
                       className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 ${errors.number ? 'border-red-500' : 'border-[#808080]'
                         }`}
                       {...register('telefonnummer', { required: true })}
                     />
                     {errors.telefonnummer && (
                       <span className='text-red-500'>
                        Telefonnummer is required
                       </span>
                     )}
                   </div>
                 </div>
                
                  </div>
                  <div className='xl:w-[600px] w-[100%] mt-5'>
                   
                    <div className='mt-[8px] relative'>

                      <input
                        type='email'
                        name='E-Mail-Adresse'
                        placeholder='E-Mail Address'
                        className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 ${errors.Email_Adresse ? 'border-red-500' : 'border-[#808080]'
                          }`}
                        {...register('emailAddress', { required: true })}
                      />
                      {errors.emailAddress && (
                        <span className='text-red-500'>
                          E-Mail-Adresse is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='xl:w-[600px] w-[100%] mt-5'>
                   
                   <div className='mt-[8px] relative'>

                     <textarea
                       type='text'
                       name='Message'
                       rows="4"
                       placeholder='Message'
                       className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 ${errors.Nachricht ? 'border-red-500' : 'border-[#808080]'
                         }`}
                       {...register('message', { required: true })}
                     />
                     {errors.message && (
                       <span className='text-red-500'>
                         message is required
                       </span>
                     )}
                   </div>
                 </div>
                  <button className="  bg-black mt-10 w-[180px] h-[50px] flex items-center justify-center rounded-lg font-outfit">
          <a  className="block  text-sm leading-5 px-4 font-semibold   text-white">
          Submit
              </a>
             
          </button>
</form>
</div>
<div className='flex flex-col gap-4'>
<div className='h-[90px] md:w-[350px] w-[90vw] p-6 bg-white flex items-center gap-4'>
<div className='h-14 w-14 rounded-full bg-black  flex items-center justify-center'>
<FaPhoneAlt className='text-white  '/>
</div>
<div>
<p className='font-bold text-xl'>Phone Number
</p>
<p className='font-normal text-sm text-[#6C6B6B]'>08171 97 46 23 23</p>
</div>
</div>
<div className='h-[90px] md:w-[350px] w-[90vw] p-6 bg-white flex items-center gap-4'>
<div className='h-14 w-14 rounded-full bg-black  flex items-center justify-center'>
<CiMail className='text-white  '/>
</div>
<div>
<p className='font-bold text-xl'>E-Mail Address</p>
<p className='font-normal text-sm text-[#6C6B6B]'>info@esk-direktvertrieb.de</p>
</div>
</div>
<div className='h-[90px] md:w-[350px] w-[90vw] p-6 bg-white flex items-center gap-4'>
<div className='h-14 w-14 rounded-full bg-black  flex items-center justify-center'>
<FaLocationArrow className='text-white  '/>
</div>
<div>
<p className='font-bold text-xl'>Location</p>
<p className='font-normal text-sm text-[#6C6B6B]'>Siemensstraße 21 84030 Landshut</p>
</div>
</div>
</div>
    </div>
  )
}