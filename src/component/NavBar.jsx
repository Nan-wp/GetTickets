import { Link } from "react-router-dom";

export default function HomePage(){

    return(
        <div className="bg-white">
             <div className='flex gap-5 z-10 p-2 bg-black text-white pr-4 text-l absolute justify-end  inset-x-0 top-0 '>    
                 <div className='flex gap-1'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                   </svg>
                      <p className='hover:underline cursor-pointer'>Hotels</p>
                   </div>
                      <p className='hover:underline cursor-pointer'> Sell</p>
                   <div className='flex gap-1'>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                     </svg>
                       <p className='hover:underline cursor-pointer'>Gift Cards</p>
                   </div>
                       <p className='hover:underline cursor-pointer'>Help</p>
             </div>
             <div className='flex z-10 bg-blue-700 text-white absolute inset-x-0 top-10 p-4 justify-start bg-fixed'>
                   <Link to={`/`} >
                   <p className='text-4xl font-extrabold italic '>ticketmaster</p>
                   </Link>
                <div className='flex gap-8 font-semibold text-l pt-2'>
                  <a href='' className='hover:underline py-2 pl-4'>Concerts</a>
                  <a href='' className='hover:underline py-2'>Sports</a>
                  <a href='' className='hover:underline py-2'>Art, Theater & Comedy</a>
                  <a href='' className='hover:underline py-2'>Family</a>
                </div> 
             </div>
            <div className='flex  text-white pt-6 absolute inset-x-0 top-10 p-4 justify-end'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                  <a href='' className='hover:underline'>Sign In/Register</a>
             </div>
             <div className='flex justify-center z-10 bg-blue-700 text-white absolute inset-x-0 top-28 p-4'>
             <div className='flex p-2 bg-white rounded-md gap-4'>
                <div className='flex '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 pt-2  text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    <input placeholder='City or Zipcode' className="bg-white "></input>
                </div>
                <input placeholder='MM/DD/YYYY' inputMode='numeric' type='date' className='text-black bg-white px-4'></input>
                <div className='flex rounded-md ' >
                   <span className='bg-white pt-2 pl-4'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                   <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                   </svg>
                   </span>
                   <input placeholder='Search by Artist, Event or Venue' className='w-full px-4 bg-white'></input>
                        <button className='font-semibold rounded-md p-2 bg-blue-700 text-white hover:bg-blue-400'>Search</button>
                 </div>
             </div>
           </div>
        </div>
    )
}