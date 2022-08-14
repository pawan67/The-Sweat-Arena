import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5b4focc', 'template_wprinoo', form.current, 'E36Ej5dGPHgnhCBm4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <>
      <div className='w-11/12 mx-auto pb-20'>
        <div className='z-10 relative text-white w-max mx-auto text-center'>
            <span className=' absolute -top-14 -z-10  font-extrabold text-8xl muted'>JOIN US</span>
            <span className=' relative -top-8 left-4 text-6xl font-bold'><sup className='font-thin'><i class="uil uil-plus"></i></sup>START HERE</span><br/>
            <span className=' relative z-20 text-2xl left-8 font-thin'>FILL THE FORM BELOW TO START YOUR JOURNEY</span>
        </div>
        <div className='flex items-center justify-between'>
            <div className='font-bold text-6xl mt-20'>
                <hr className=' w-40 my-4 bg-slate-600 text-slate-600 border-1 rounded-full'/>
                <div className='text-white'><span className='muted'>READY TO</span><span> LEVEL UP</span></div>
                <div className='text-white'><span> YOUR BODY</span><span className='muted'> WITH US ?</span></div>
            </div>
            <div className=' flex items-centre mt-20'>
                <form ref={form} action="" onSubmit={sendEmail} className=' email-container flex gap-12'>
                    <input type="email" name='user_email' placeholder='Enter your Email Address' className='outline-none w-80 my-auto bg-transparent text-white px-6 py-2 border-2 border-white rounded-full hover:bg-black hover:border-slate-800'/>
                <button className=' px-6 text-black bg-white hover:bg-black hover:border-slate-800 bg-transparent border-2 rounded-full hover:text-white font-bold'>JOIN NOW</button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Join
