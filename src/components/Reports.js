import OrdersIcon from '../assets/total orders.png'
import DeliveredIcon from '../assets/total delivered.png'
import CancelledIcon from '../assets/total cancel.png'
import RevenueIcon from '../assets/total revenue.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'; 

const Reports = () => {
    return (
        <div className="flex flex-wrap lg:h-[150px] justify-between gap-2 md:gap-4 lg:gap-0">
            <div className=" w-[48%] lg:w-[24%] h-full p-2 rounded-md bg-[#202028]">
                <div className='w-14 rounded-lg p-3 bg-[#283266]'><img className='w-full' src={OrdersIcon} alt=""/></div>
                <h3 className='mt-2 text-gray-200 text-xs font-medium'>Total Orders</h3>
                <div className='flex justify-between pt-2'>
                    <span className='text-2xl font-semibold text-gray-200'>75</span>
                    <div className='flex items-center text-[#05af7e]'><FontAwesomeIcon icon={faCaretUp} size="1x" /><span className='ml-2'>3%</span></div>
                </div>
            </div>
            <div className=" w-[48%] lg:w-[24%] p-2 rounded-md bg-[#202028]">
                <div className='w-14 rounded-lg p-3 bg-[#155245]'><img className='w-full' src={DeliveredIcon} alt=""/></div>
                <h3 className='mt-2 text-gray-200 text-xs font-medium'>Total Delivered</h3>
                <div className='flex justify-between pt-2'>
                    <span className='text-2xl font-semibold text-gray-200'>70</span>
                    <div className='flex items-center text-[#b44548]'><FontAwesomeIcon icon={faCaretDown} size="1x" /><span className='ml-2'>3%</span></div>
                </div>
            </div>
            <div className="w-[48%] lg:w-[24%] p-2 rounded-md bg-[#202028]">
                <div className='w-14 rounded-lg p-3 bg-[#5f3237]'><img className='w-full' src={CancelledIcon} alt=""/></div>
                <h3 className='mt-2 text-gray-200 text-xs font-medium'>Total Orders</h3>
                <div className='flex justify-between pt-2'>
                    <span className='text-2xl font-semibold text-gray-200'>05</span>
                    <div className='flex items-center text-[#05af7e]'><FontAwesomeIcon icon={faCaretUp} size="1x" /><span className='ml-2'>3%</span></div>
                </div>
            </div>
            <div className="w-[48%] lg:w-[24%] p-2 rounded-md bg-[#202028]">
                <div className='w-14 rounded-lg p-3 bg-[#5b2949]'><img className='w-full' src={RevenueIcon} alt=""/></div>
                <h3 className='mt-2 text-gray-200 text-xs font-medium'>Total Orders</h3>
                <div className='flex justify-between pt-2'>
                    <span className='text-2xl font-semibold text-gray-200'>$12k</span>
                    <div className='flex items-center text-[#b44548]'><FontAwesomeIcon icon={faCaretDown} size="1x" /><span className='ml-2'>3%</span></div>
                </div>
            </div>
        </div>
    );
}

export default Reports