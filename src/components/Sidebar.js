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
    <li className='m-3 font-semibold text-lg flex '><span className='pt-1 mr-3'><AiOutlineHome /></span>Home</li>
    <li className='m-3 font-semibold text-lg flex '><img className="h-5 pt-1 mr-3" src={shorts} alt="s"/> Shorts</li>
    <li className='m-3 font-semibold text-lg flex '><span className='pt-1 mr-3'><MdSubscriptions/></span>Subscriptions</li>
   </ul>
   <hr/>
   <ul>
    <li className='m-3 font-semibold text-lg flex '><span className='pt-1 mr-3'><MdVideoLibrary /></span>Library</li>
    <li className='m-3 font-semibold text-lg flex '><span className='pt-1 mr-3'><BiHistory/></span>History</li>
    <li className='m-3 font-semibold text-lg flex '><span className='pt-1 mr-3'><MdOndemandVideo /></span>Your Videos</li>
    <li className='m-3 font-semibold text-lg flex '><span className='pt-1 mr-3'><MdOutlineWatchLater/></span>Watch Later</li>
    <li className='m-3 font-semibold text-lg flex '><span className='pt-1 mr-3'><SlLike/></span>Liked Videos</li>


   </ul>
   <hr/>
      
    </div>
  )
}

export default Sidebar