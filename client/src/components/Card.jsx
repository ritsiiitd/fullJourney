import React from 'react'
import { download } from "../assets";
import { downloadImage } from "../utils";
const Card = ({_id,title,prompt,photo}) => {
  return (
    <div className='rounded-xl group relative hover:shadow-cardhover card'>
      <img className='w-full h-auto object-cover rounded-xl'
      src={photo}
      alr={prompt}/>
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#101031f] m-2 p-4 rounded-md'>
        <p className='text-white text-sm'>

        </p>
      </div>
    </div>
  )
}

export default Card