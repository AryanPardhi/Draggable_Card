import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={1.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative flex-shrink-0 px-8 py-10 text-white w-60 h-72 overflow-hidden rounded-[40px] bg-zinc-900/90'>
            <LuFileSpreadsheet />
            <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center px-8 py-3 justify-between mb-3'>
                    <h5>{data.size}</h5>
                    <span className='w-7 h-7 bg-zinc-600 cursor-pointer rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose /> : <LuDownload size="0.8em" color='#fff' />}
                    </span>
                </div>
                {
                    data.tag.isOpen ? (<div className={`tag py-4 bg-green-600 w-full flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
                    </div>) : null
                }

            </div>
        </motion.div>
    )
}

export default card
