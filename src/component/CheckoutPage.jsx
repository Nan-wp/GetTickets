import { useState } from 'react';
import '../App.css';
import { cardData } from'./mockData';
import CreditCardForm from './CreditCardForm';
import { Link, useParams } from 'react-router-dom';


export default function CheckoutPage(){
    const { concertId } = useParams();
    const [quantity,setQuantity] = useState(0);
    const concert = cardData.find(item => item.cardId === concertId);
     if (!concert) {
        return (
            <div className='pt-96 bg-white'>
                <div className='font-bold text-center'>Concert not found</div>
            </div>
        );
    }
    const [isChecked, setIsChecked] = useState(false);
      const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };
    return(
        
        <div className='bg-white text-black  pt-40'>
            
            <div className='flex z-10 gap-80 bg-blue-700 text-white absolute inset-x-0 top-0 p-4 justify-between bg-fixed'>
                   <Link to={`/`} >
                   <p className='text-4xl font-extrabold italic '>ticketmaster</p>
                   </Link>
                   <div className='text-2xl font-semibold text-center pt-2 pb-2'>Checkout</div>
            </div>
            <section className='flex justify-center border-b-2 pb-6 rounded-md'>
              <div className="flex flex-col gap-2">
                <img
                  src={concert.imageUrl}
                  alt={concert.name}
                  className='w-[350px] '
                 />
                <div className="font-medium">
                   <div>{concert.name}</div>
                   <div>$145.00</div>
                </div>
                
                <div className='flex justify-end gap-2'>
                     <div className='font-semibold'>Quantity</div>
                  <div className='flex justify-end gap-2'>
                     <button onClick={() => setQuantity(prevTicket => prevTicket + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </button>
                        <p>{quantity}</p>
                     <div className='flex justify-end gap-2'>
                     <button onClick={() => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0))}>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                       </svg>
                       </button>
                     </div>
                  </div>
                </div>
                <form action="">
                   <button type="submit" className='font-semibold rounded-md p-2 bg-blue-700 text-white hover:bg-blue-400'>
                    Checkout
                   </button>
                </form>
               </div>
            </section>
          <div className='grid grid-cols-2 mx-24'>
            <div className='flex flex-col border-4 m-10 p-6' >
                <div className='flex'> 
                    <div className='font-semibold'>Delivery</div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                </div>
                <div className='font-semibold'>Moblie Entey - Free</div>
                     <div className='text-gray-500'>Tickget Available by Sun Apr3.2024<br/>
                     These mobile tickets will be transferred directly to you from a trusted seller.
                     We'll email you instructions on how to accept them on the original ticket provider's moblie app
                     </div>
            </div>
            <div className='flex flex-col border-4 m-10 p-6' >
                <div className='flex justify-between'> 
                    <div className='font-semibold'>Total</div>
                     <div className='font-semibold'>$549.11</div>
                </div>
                <div className='font-semibold pt-2'>Tickets</div>
                     <div className='flex justify-between pt-2'>
                          <p>Resale Tickets: $229.00 x 2</p>
                          <p>$458.00</p>
                     </div>
                <div className='text-sm pt-2'>
                  <p className='font-semibold'>Notes From Seller</p>
                  <p>xfr XFER proof at least one dose COVID-19 vaccination for ages 5 to 11 and guests ages 12
                    and up will be required to show proof two COVID-19 vaccine doses or one dose of Johnson & 
                    Johnson vaccine. Masks must be worn.
                  </p>
                </div>
                <div className='font-semibold pt-2'>Fees</div>
                     <div className='flex justify-between pt-2 text-sm'>
                          <p>Service Fee:$44.08 x 2</p>
                          <p>$88.16</p>
                     </div>
                     <div className='flex justify-between text-sm'>
                         <p>Order Processing Fee</p>
                         <p>$2.95</p>
                     </div>
                     <div className='font-semibold pt-2'>Deliverly</div>
                     <div className='flex justify-between text-sm pt-2'>
                         <p>Moblie Entey</p>
                         <p>Free</p>
                     </div>
                     <div className='font-medium text-sky-600 pt-4'>Cancle Order</div>
                     <div className='text-sm pt-4'>*All Sales Final - No Refunds</div>
                     <div>
                       <label className='text-[12px] '>
                          <input
                           type="checkbox"
                           checked={isChecked}
                           onChange={handleCheckboxChange}
                          />
                            I have read and agree to the current <a className='text-sky-600'>Terms of use.</a>
                        </label>
                      </div>
                      <button className={`mt-4 px-4 py-2 rounded ${isChecked ? 'bg-green-500 hover:bg-green-600 text-white cursor-pointer' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} disabled={!isChecked}
                         onClick={() => isChecked }>Place Order </button>
                      <p className='text-[10px] pt-2'>*Exception may apply,see our Term of Use.</p>
            </div>
            <div className='flex flex-col border-4 m-10 p-6' >
                <div className='flex'> 
                    <div className='font-semibold'>Payment</div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                </div>
                <div className='font-semibold pt-2'>Use Credit / Debit Card</div>
                    <CreditCardForm/>
                <div className='flex gap-1 border-b-2 pb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div className='font-semibold text-sky-500'>Add New Card</div>
                </div>
                <div>
                   <p className='font-semibold pt-2'>Or Pay With</p>
                   <p className='text-[14px]'>By using a digital wallet and continuing past this page, you have read and are accapting the <a className='text-sky-600'>Terms of use.</a></p>
                </div>
            </div>
           </div>
        </div>
    )
}