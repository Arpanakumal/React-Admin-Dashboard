import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import {Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparkLineAreaData,
  ecomPieChartData, 
} from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import banner from '../assets/banner.jpg'




const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap
      lg:flex-nowrap justify-center'>
       <div
    className="
      bg-white
      dark:text-gray-200
      dark:bg-secondary-dark-bg
      rounded-xl
      p-8
      pt-9
      m-3
      h-44
      w-full
      md:w-96
      lg:w-80
      bg-cover
      bg-center
      bg-no-repeat
      relative
      overflow-hidden
    "
    style={{
      backgroundImage: `url(${banner})`,
    }}
  >
          <div className='flex justify-between
          items-center'>
            <div>
              <p>Earnings</p>
              <p>Rs.10,00,000</p>
            </div>

          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Ecommerce
