import React, { useRef } from 'react'
import Card from './card'

const Foreground = () => {
  
  const ref = useRef(null);  
    
  const data = [
    {
        desc : "Hey Buddy WhatsUp!!!",
        size : "0.7mb",
        close : true,
        tag : {
            isOpen : false , tagtitle : "download", tagColor :"green"
        },
    },
    {
        desc : "Animal Movie 1080p",
        size : "1.6 GB",
        close : false,
        tag : {
            isOpen : true , tagtitle : "download", tagColor :"green"
        },
    },
    {
        desc : "hello bro",
        size : "0.7mb",
        close : true,
        tag : {
            isOpen : true , tagtitle : "Upload", tagColor :"green"
        },
    },
  ]  
  return (
    <div ref={ref} className='p-5 fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap'>
        {data.map((item,index)=>(
            <Card data={item} reference ={ref}/>
        ))}
    </div>
  )
}

export default Foreground
