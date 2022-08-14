import React from 'react'

const Fitness = () => {
    const data = [
        {
            img:"/a.png",
            lName:"MAXPUMP"
        },
        {
            img:"/b.png",
            lName:"ARON GYM"
        },
        {
            img:"/c.png",
            lName:"FIT & TONE"
        },
        {
            img:"/d.png",
            lName:"FROZA"
        },
        {
            img:"/e.png",
            lName:"BALANCE FITNESS"
        },
        {
            img:"/f.png",
            lName:"BODY SCULPT"
        },
    ]
  return (
    <>
      <div className=' w-1/1 pt-16 '>
        <div className='z-10 relative text-white w-max mx-auto text-center'>
            <span className='-top-10 absolute -z-10  font-bold Sizef muted right-44'>GO!</span>
            <span className='top-14 relative text-6xl font-bold'><sup className='font-thin'><i class="uil uil-plus"></i></sup>DO IT FOR YOURSELF!</span><br/>
            <span className='top-24 relative z-20 text-2xl  font-thin'>MAKE A DIFFERENCE IN YOUR LIFE</span>
        </div>
        <div className='flex high text-white font-bold items-center m-auto bg-black pb-16'>
            {data.map((value,index) => {
                return(
                    <div className='mx-auto text-center' key={index}>
                        <img className='brightness-50 invert' src={value.img} alt="" />
                        <span>{value.lName}</span>
                    </div>
                )
            })}
        </div>
      </div>
    </>
  )
}

export default Fitness
