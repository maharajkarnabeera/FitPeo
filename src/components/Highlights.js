import GoalsIcon from '../assets/goals.png'
import PopularIcon from '../assets/popular dishes.png'
import MenuIcon from '../assets/Menus.png'
import NextChevron from '../assets/right-chevron.png'

const Highlights = () => {
  return (
    <div className="flex flex-col justify-between h-[304px] p-4 rounded-md bg-[#202028]">
      <div className='flex justify-between items-center mb-3'>
        <div className='flex items-center text-gray-300'>
          <div className='bg-[#5f3237] w-[72px] h-[72px] rounded-full flex items-center justify-center mr-4'>
            <img src={GoalsIcon} width={24} height={24} alt=''/>
          </div>
          <span className='sm:font-semibold sm:text-lg'>Goals</span>
        </div>
        <div className='w-8 h-8 flex items-center justify-center bg-[#46474c] rounded-full'>
          <img src={NextChevron} alt=''/>
        </div>
      </div>
      <div className='flex justify-between items-center mb-3'>
        <div className='flex items-center text-gray-300'>
          <div className='bg-[#293368] w-[72px] h-[72px] rounded-full flex items-center justify-center mr-4'>
            <img src={PopularIcon} width={24} height={24} alt=''/>
          </div>
          <span className='sm:font-semibold sm:text-lg'>Popular Dishes</span>
        </div>
        <div className='w-8 h-8 flex items-center justify-center bg-[#46474c] rounded-full'>
          <img src={NextChevron} alt=''/>
        </div>
      </div>
      <div className='flex justify-between items-center mb-3'>
        <div className='flex items-center text-gray-300'>
          <div className='bg-[#214a60] w-[72px] h-[72px] rounded-full flex items-center justify-center mr-4'>
            <img src={MenuIcon} width={24} height={24} alt=''/>
          </div>
          <span className='sm:font-semibold sm:text-lg'>Menus</span>
        </div>
        <div className='w-8 h-8 flex items-center justify-center bg-[#46474c] rounded-full'>
          <img src={NextChevron} alt=''/>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
