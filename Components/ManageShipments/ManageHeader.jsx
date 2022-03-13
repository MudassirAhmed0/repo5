import CardHeader from '../Shipment/CardHeader'
import search from '../../assets/images/svg/search.svg'
import blueSearch from '../../assets/images/svg/blueSearch.svg'
import Image from 'next/image'
import { useState } from 'react'

const ManageHeader = ({heading}) => {
    const [searchIcon,setSearchIcon] = useState(search)
    const dekho =()=>{
        setSearchIcon(blueSearch)
    }
    const dekhlia =()=>{
        setSearchIcon(search)
    }
  return (
    <CardHeader>
        <h4 className="text-3xl medium-font text-blue ">
        {heading}
    </h4>
    <div className='mobileNumberInput relative w-72'>
        <input type="text" onFocus={dekho} onBlur={dekhlia} placeholder='dsda' className='peer bg-transparent' id='search' />
        <label htmlFor="search" className='peer-focus:text-blue'>Enter Keywords</label>
        <span className='absolute top-1 w-4 right-0.5'>
            <Image src={searchIcon} alt='search'/>
        </span>
    </div>
    </CardHeader>
  )
}

export default ManageHeader