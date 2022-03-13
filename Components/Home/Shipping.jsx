import yellowBox from '../../assets/images/svg/box-yellow.svg' 
import shipment from '../../assets/images/svg/Create-Shipment.svg' 
import branch from '../../assets/images/svg/Find-Nearest-Branch.svg' 
import calculator from '../../assets/images/svg/Price-Calculator.svg' 
import Image from 'next/image'
import CTA from './CTA'
import styles from '../../styles/Home.module.css'

const Shipping = () => {
  return (
    <section className=" flex flex-col items-center pt-16">
            <Image src={yellowBox}/>
            <h4 className="text-3xl text-blue uppercase medium-font mb-3 mt-2">
                Shipping Simplified
            </h4>
            <p className="text-grey light-font w-3/5 text-center ">
            Zajil is more than just the preferred partner for KSA businesses. <br />
            We are committed to deliver an outstanding experience for personal shipping, too.
            </p>
            <div className="w-3/5 flex justify-center text-grey mt-12">
                
                <div className="w-1/3 flex border-r border-borderGrey items-center justify-center flex-col pt-2 pb-2 gap-y-3">
                    <Image src={shipment} alt='Cretae Shipment'/>
                    <span>Create Shipment</span>
                </div>
                <div className="w-1/3 flex border-r border-borderGrey items-center justify-center flex-col pt-2 pb-2 gap-y-3">
                    <Image src={branch} alt='Cretae Shipment'/>
                    <span>Find Nearest Branch</span>
                </div>
                <div className="w-1/3 flex items-center justify-center flex-col pt-2 pb-2 gap-y-3">
                    <Image src={calculator} alt='Cretae Shipment'/>
                    <span>Price Calculator</span>
                </div>
            </div>
            <div className={`mt-20 -mb-4 z-10 relative ${styles.eightyeightpercent}`}>
                    <CTA/>  
            </div>
    </section>
  )
}

export default Shipping