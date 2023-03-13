import React from 'react'

function Sidebar() {
  return (
    <div className='flex flex-col w-60 p-4 border-black-200'>
   <ul>
    <li className='m-3 font-semibold text-lg'>Home</li>
    <li className='m-3 font-semibold text-lg'>Shorts</li>
    <li className='m-3 font-semibold text-lg'>Subscriptions</li>
   </ul>
   <hr/>
   <ul>
    <li className='m-3 font-semibold text-lg'>Library</li>
    <li className='m-3 font-semibold text-lg'>History</li>
    <li className='m-3 font-semibold text-lg'>Your Videos</li>
    <li className='m-3 font-semibold text-lg'>Watch Later</li>
    <li className='m-3 font-semibold text-lg'>Liked Videos</li>
    <li className='m-3 font-semibold text-lg'>Library</li>
    <li className='m-3 font-semibold text-lg'>Library</li>
   </ul>
   <hr/>
      
    </div>
  )
}

export default Sidebar