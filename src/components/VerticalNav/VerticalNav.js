import HomeIcon from '../../assets/home(1).png';
import GraphIcon from '../../assets/statistics.png';
import TodoIcon from '../../assets/to-do-list.png';
import WalletIcon from '../../assets/wallet.png';
import ShopBag from '../../assets/bag.png';
import ExitIcon from '../../assets/log-out.png'

const VerticalNav = () => {
    return(
        <div className="h-[12vh] lg:h-[88vh] lg:min-w-16 sticky top-[12vh] overflow-hidden z-50 p-3 bg-[#202028] flex lg:flex-col justify-between">
            <div className='flex lg:flex-col'>
                <div className='p-2 mb-2'><img className='w-6 h-6' src={HomeIcon} alt=''/></div>
                <div className='p-2 mb-2'><img className='w-6 h-6' src={GraphIcon} alt=''/></div>
                <div className='p-2 mb-2'><img className='w-6 h-6' src={TodoIcon} alt=''/></div>
                <div className='p-2 mb-2'><img className='w-6 h-6' src={WalletIcon} alt=''/></div>
                <div className='p-2 mb-2'><img className='w-6 h-6' src={ShopBag} alt=''/></div>
            </div>
            <div>
                <div className='p-2 mb-2'><img className='w-6 h-6' src={ExitIcon} alt=''/></div>
            </div>
        </div>
    );
}

export default VerticalNav;