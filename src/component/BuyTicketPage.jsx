import '../App.css';
import { cardData } from'./mockData';
import { Link, useParams } from 'react-router-dom';
import NavBar from './NavBar'

export default function BuyTicketPage(){
    const { concertId } = useParams();
    const concert = cardData.find(item => item.cardId === concertId);
     if (!concert) {
        return (
            <div>
                <NavBar />
                <div className='pt-96 pb-96 bg-white'>
                <div className='font-bold text-center text-5xl pb-24'>Concert not found !</div>
                 </div>
            </div>
        );
    }
    
    return(
        <div className='bg-white text-black'>
            <NavBar />
            <div className='w-full  bg-no-repeat bg-center bg-fixed relative'>
             <img className='contrast-50 w-full '   src ={concert.imageUrl}/>
             </div>
               <div className='text-3xl font-bold p-8 text-center'>CONCERTS</div>
             <div className='m-6 p-6'>
                <ul>
                    <li className='flex justify-evenly p-5  border-b-2 '>
                        <div className='text-3xl'>JUL 19</div>
                        <div className='flex flex-col'>
                         <div className='text-gray-500'>Fri7:00 PM</div>
                         <div className='font-semibold'>Hattiesburg, MS Saenger Theater Hattiesburg</div>
                         </div>
                         <div className='flex'>
                            <Link to={`/CheckoutPage/${concert.cardId}`}>
                            <button className='bg-blue-700 font-semibold text-white p-3 rounded-md hover:bg-blue-400'>Buy</button>
                            </Link>
                         </div>
                    </li>
                    <li className='flex justify-evenly p-5  border-b-2 '>
                        <div className='text-3xl'>AUG 10</div>
                        <div className='flex flex-col'>
                         <div className='text-gray-500'>Sut7:00 PM</div>
                         <div className='font-semibold'>Hattiesburg, MS Saenger Theater Hattiesburg</div>
                         </div>
                         <div className='flex'>
                            <Link to={`/CheckoutPage/${concert.cardId}`}>
                            <button className='bg-blue-700 font-semibold text-white p-3 rounded-md hover:bg-blue-400'>Buy</button>
                            </Link>
                         </div>
                    </li>
                    <li className='flex justify-evenly p-5  border-b-2 '>
                        <div className='text-3xl'>AUG 11</div>
                        <div className='flex flex-col'>
                         <div className='text-gray-500'>Sun7:00 PM</div>
                         <div className='font-semibold'>Hattiesburg, MS Saenger Theater Hattiesburg</div>
                         </div>
                         <div className='flex'>
                            <Link to={`/CheckoutPage/${concert.cardId}`}>
                            <button className='bg-blue-700 font-semibold text-white p-3 rounded-md hover:bg-blue-400'>Buy</button>
                            </Link>
                         </div>
                    </li>
                    
                </ul>
             </div>
        </div>
    )
}