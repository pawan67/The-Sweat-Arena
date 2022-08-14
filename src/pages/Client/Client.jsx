import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Client = () => {
    const transition = { type: "spring", duration: 3}
    const data = [
        {
            imge:"/Assets/images/pic-1.png",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum reiciendis quas quo suscipit temporibus quam, modi blanditiis similique repellat fugit? Voluptatum reiciendis quas quo suscipit temporibus quam, modi blanditiis similique repellat fugit?, modi blanditiis similique repellat fugit?, modi blanditiis similique repellat fugit?",
            naame:"DAN FISHER",
            statuss:"SPORTSMAN"
        },
        {
            imge:"/Assets/images/pic-2.png",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum reiciendis quas quo suscipit temporibus quam, modi blanditiis similique repellat gugit? Voluptatum reiciendis quas quo suscipit temporibus quam, modi blanditiis similique repellat fugit?, modi blanditiis similique repellat?",
            naame:"EMILY KERR",
            statuss:"WEB DEVLOPER"
        },
        {
            imge:"/Assets/images/pic-3.png",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum reiciendis quas quo suscipit temporibus quam, modi blanditiis similique repellat tugit? Voluptatum reiciendis quas quo suscipit temporibus quam, modi blanditiis similique repellat fugit?, modi blanditiis similique repellat fugit?, modi blanditiis similique?",
            naame:"JAMES LEE",
            statuss:"BUSINESSMAN"
        },
        {
            imge:"/Assets/images/pic-4.png",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum reiciendis quas quo suscipit temporibus quam, modi blanditiis similique repellat zugit? Voluptatum reiciendis quas quo suscipit temporibus quam, modi blanditiis similique repellat fugit?, modi blanditiis similique repellat fugit?",
            naame:"MILLY JANE",
            statuss:"SOFTWARE DEVLOPER"
        },
    ]
    const [selected, setSelected] = useState(0);
    const tLength = data.length;
  return (
    <>
      <div className='w-11/12 mx-auto px-8 flex gap-4 pt-20'>
        <div className='flex flex-col text-white fle'>
            <div className='relative text-white z-10 flex top-8 gap-8 flex-col'>
                <motion.span
                initial={{left:"15rem"}}
                whileInView={{left:"-1.5rem"}}
                transition={transition}
                className='absolute -z-10 top font-bold text-9xl -left-6 muted'>CLIENT</motion.span>
                <span className=' absolute  z-20 text-6xl left-14 top-12 font-bold '><sup className='font-thin'><i class="uil uil-plus"></i></sup>THEY SAID "</span>
            </div>
            <div className='mt-48 '>
                <motion.div
                key={selected}
                initial={{opacity: 0, x:-100}}
                animate={{opacity: 1, x:0}}
                exit={{opacity:0, x:100}}
                transition={transition}
                className='mb-8 line letter'>{data[selected].review}</motion.div>
                <span className='text-slate-500 font-semibold'><span className='text-white font-bold'>{data[selected].naame}</span>-{data[selected].statuss}</span>
            </div>
        </div>
        <div className='flex-1 relative'>
            <motion.div
            initial={{ opacity: 0, x:-100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x:0 }}
            className='absolute w-72 h-80 border-slate-500 border-2 bg-transparent right-36 top-3'></motion.div>
            <motion.div
            initial={{ opacity: 0, x:100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x:0 }}
            className='absolute w-72 h-80 top-12 bg-slate-600 right-28'></motion.div>
            <motion.img
            key={selected}
            initial={{opacity: 0, x:100}}
            animate={{opacity: 1, x:0}}
            exit={{opacity:0, x:-100}}
            transition={transition}
            className='absolute w-72 h-80 object-cover right-32 top-8' src={data[selected].imge} alt="" />
            <div className='text-white flex gap-4 absolute -bottom-4 left-12'>
                <span className='text-6xl'
                onClick={() => {
                    selected===0 ? setSelected(tLength -1):
                    setSelected((prev)=> prev -1);
                }}
                ><i class="uil uil-arrow-left"></i></span>
                <span className='text-6xl'
                onClick={() => {
                    selected=== tLength - 1 ? setSelected(0):
                    setSelected((prev) => prev + 1);
                }}
                ><i class="uil uil-arrow-right"></i></span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Client
