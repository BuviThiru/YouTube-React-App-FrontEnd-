import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import {BiHistory} from 'react-icons/bi'
import {MdVideoLibrary,MdOndemandVideo,MdOutlineWatchLater,MdSubscriptions} from 'react-icons/md'
import {SlLike} from 'react-icons/sl'
import shorts from '../assests/shorts.png'

function Sidebar() { 
  return (
    <div className='flex flex-col w-60 p-4 border-black-200'>
   <ul>
    <li className='m-3 font-semibold text-lg'><span><AiOutlineHome /></span>Home</li>
    <li className='m-3 font-semibold text-lg'><img className="h-5 " src={shorts} alt="s"/> Shorts</li>
    <li className='m-3 font-semibold text-lg'><span><MdSubscriptions/></span>Subscriptions</li>
   </ul>
   <hr/>
   <ul>
    <li className='m-3 font-semibold text-lg'><span><MdVideoLibrary /></span>Library</li>
    <li className='m-3 font-semibold text-lg'><span><BiHistory/></span>History</li>
    <li className='m-3 font-semibold text-lg'><MdOndemandVideo />Your Videos</li>
    <li className='m-3 font-semibold text-lg'><span><MdOutlineWatchLater/></span>Watch Later</li>
    <li className='m-3 font-semibold text-lg'><SlLike/>Liked Videos</li>
    <li className='m-3 font-semibold text-lg'>Library</li>
    <li className='m-3 font-semibold text-lg'>Library</li>
   </ul>
   <hr/>
      
    </div>
  )
}

export default Sidebar