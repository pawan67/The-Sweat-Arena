import React from 'react'

const Team = () => {
    const data = [
        {
            img:"Assets/images/trainer-1.jpg",
            Naame:"ALEXANDER NEIL",
            expert:"Bodybuilding Coach"
        },
        {
            img:"Assets/images/trainer-2.jpg",
            Naame:"SARAH BELL",
            expert:"Yoga Instructor"
        },
        {
            img:"Assets/images/trainer-3.jpg",
            Naame:"MARCOUS WAUL",
            expert:"Bodybuilding coach"
        },
        {
            img:"Assets/images/trainer-4.jpg",
            Naame:"LEA PAULSON",
            expert:"Yoga Instructor"
        },
    ]
  return (
    <>
      <div className='bg-black mt-40 w-1/1 '>
      <div className='z-10 relative text-white w-max mx-auto text-center'>
            <span className=' absolute -top-32 -z-10  font-bold Sizef muted left-14'>TEAM</span>
            <span className=' relative -top-8 text-6xl font-bold'><sup className='font-thin'><i class="uil uil-plus"></i></sup>MEET OUR TEAM</span><br/>
            <span className=' relative z-20 text-2xl  font-thin'>TRAINERS WITH YEARS OF EXPERIENCE</span>
        </div>
        <div className='text-white flex w-1/1 ml-28'>
                {data.map((value,index) => {
                    return(
                        <div className='mx-auto pt-20 pb-20' key={index}>
                            <div className=' relative wid mx-auto'>
                                <div className='w-52 h-52 rounded-full overflow-hidden'><img className='block w-1/1 h-1/1' src={value.img} alt="" /></div>
                                    <div className='flex flex-col justify-between w-32 h-48 absolute lef -top-2'>
                                        <div className='flex flex-col left-0'>
                                            <span className='text-3xl font-bold'>{value.Naame}</span>
                                            <span className=''>{value.expert}</span>
                                        </div>
                                        <div className='w-28 flex justify-between text-2xl '>
                                            <span><i class="uil uil-instagram"></i></span>
                                            <span><i class="uil uil-youtube"></i></span>
                                            <span><i class="uil uil-twitter-alt"></i></span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    )
                })}
            </div>
      </div>
    </>
  )
}

export default Team
