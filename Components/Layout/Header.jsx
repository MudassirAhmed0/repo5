import Image from 'next/image'
import Link from 'next/link'
import arrow from '../../assets/images/svg/arrow.svg'
import logo from '../../assets/images/svg/logo.svg'
import styles from '../../styles/Layout.module.css'
import MobileNumber from '../Popups/MobileNumber'

const Header = ({noShipment}) => {
    const manageShipment =()=>{
         const modal = document.getElementById('mobileNumber')
         
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
    }
  return (
      <>
    <header className=' z-10 popup container flex items-center  text-lg  text-white absolute   left-1/2 transform -translate-x-1/2  top-4 '>
        <div>
            <Link href='/'>
                 <a>
                    <Image src={logo}/>
                </a>
            </Link>
        </div>
        <nav>
            <ul className='flex ml-20 gap-x-10'>
                <li className={`cursor-pointer relative ${styles.dropdownBtn}`}>
                    <span className='relative'>Ship   <span className='relative -top-0.5 -right-0.3'><Image   src={arrow}/></span></span>
                    <ul className={`absolute top-7 -left-6 p-4 pl-6 flex  flex-col gap-y-3 bg-white text-black text-base ${styles.dropdownMenu}`}>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="/shipment">
                                <a>
                                    Create Shipment
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="/manage-shipments">
                                <a>
                                    Manage Shipments
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="/get-pricing">
                                <a>
                                    Get Price Estimate
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="#">
                                <a>
                                    Find Nearest Branch
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={`cursor-pointer relative ${styles.dropdownBtn}`}>
                    <span className='relative'>Solutions  <span className='relative -top-0.5 -right-0.3'><Image   src={arrow}/></span></span>
                    <ul className={`absolute top-7 -left-6 p-4 pl-6 flex  flex-col gap-y-3 bg-white text-black text-base ${styles.dropdownMenu}`}>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="/ecommerce">
                                <a>
                                    E-commerce
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="/freight">
                                <a>
                                    Freight
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="/fulfilment">
                                <a>
                                    Fulfilment
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="/ksadistribution">
                                <a>
                                    Domestic Distribution
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={`cursor-pointer relative ${styles.dropdownBtn}`}>
                    <span className='relative'>Help & Support  <span className='relative -top-0.5 -right-0.3'><Image   src={arrow}/></span></span>
                    <ul className={`absolute top-7 -left-6 p-4 pl-6 flex  flex-col gap-y-3 bg-white text-black text-base ${styles.dropdownMenu}`}>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="/faqs">
                                <a>
                                    FAQs
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="/contact">
                                <a>
                                    Contact Us
                                </a>
                            </Link>
                        </li>
                    </ul> 
                </li>
             {noShipment  ||   <li className={`cursor-pointer relative`}>
                    <Link href='/track'>
                         <a className='relative'>Track Your Shipment  </a>
                    </Link>
                
                </li>}
            </ul>
        </nav>
        <ul className='ml-auto flex items-center'>
            <li className='mr-12'>
                <Link href="#">
                    <a >
                    العربية    
                    </a>
                </Link>
            </li>
            <li className={styles.btn}>
                <button onClick={manageShipment}>
                        Manage Shipment
                </button>
            </li>
        </ul>
    </header>
    <MobileNumber />
    </>
  )
}

export default Header