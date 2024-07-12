import '../App.css';
export default  function Card() {
    return (
<div className='mt-4'>
    <span className='text-4xl font-bold  p-8 '>Upcoming</span>
    <div className='grid grid-cols-3 m-4'>
        <div className='flex flex-col justify-center'>
            <div className=' p-4 hover:shadow-2xl rounded-lg'>
                <a href='' className=''>
               <img className='' src='https://assets.vogue.com/photos/65a849db988fc6f0383e3725/16:9/w_9456,h_5319,c_limit/Vogue_Exclusive_LDR_24.jpeg' alt='Lana Del Ray'/>
               </a>
            </div>
            <div className='text-gray-700 font-medium '>
              <p className='text-sm pl-4'>Alt-pop</p>
              <a href='' className='pl-4 text-xl hover:underline'>LANA DEL RAY</a>
            </div>
        </div>

        <div className='flex flex-col justify-center'>
            <div className='p-4 hover:shadow-2xl rounded-lg'>
                <a href=''>
               <img className='' src='https://spokesman-recorder.com/wp-content/uploads/2022/07/feat_db3843c4-d816-40aa-8ac0-333c428340ab.jpg' alt='XAVIER OMÄR'/>
               </a>
            </div>
            <div className='text-gray-700 font-medium'>
              <p className='text-sm pl-4'>R&B/Soul</p>
              <a href='' className='pl-4 text-xl hover:underline'>XAVIER OMÄR</a>
            </div>
             
        </div>

        <div className='flex flex-col justify-center'>
            <div className='p-4 hover:shadow-2xl rounded-lg'>
               <a href=''>
               <img className='' src='https://variety.com/wp-content/uploads/2022/10/Arctic-Monkeys-pc-Zackery-Michael-436763_L2-B_08-300-dpi-e1666378299982.jpg?w=1024' alt='Arctic Monkeys'/>
               </a>
            </div>
            <div className='text-gray-700 font-medium '>
              <p className='text-sm pl-4'>Rock</p>
              <a href='' className='pl-4 text-xl hover:underline'>ARCTIC MONKEYS</a>
            </div>
             
        </div>
    </div>
</div>
)
}
