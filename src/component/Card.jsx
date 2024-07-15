import { Link } from 'react-router-dom';
import '../App.css';
import './mockData'
 
export default  function Card({data}) {
    
    return (
<div className='mt-4'> 
        <div className='flex flex-col justify-center'>
            <div className=' p-4 hover:shadow-2xl rounded-lg'>
            <Link to={`/BuyTicketPage/${data.cardId}`}>
               <img src={data.imageUrl} alt={data.name} className='w-full h-auto object-cover'/>
            </Link>
            </div>
            <div className='text-gray-700 font-medium '>
              <p className='text-sm pl-4'>{data.genre}</p>
              <Link to={`/BuyTicketPage/${data.cardId}`} className='pl-4 text-xl hover:underline'>
              {data.name}
              </Link>
              <p className='text-sm pl-4'>{data.place}</p>
            </div>
        </div>
</div>
)
}
