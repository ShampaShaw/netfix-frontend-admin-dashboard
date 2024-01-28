import React from 'react'
import './home.css'
import { FeaturedInfo } from '../../component/FeaturedInfo/FeaturedInfo'
import { Chart } from '../../component/chart/Chart'

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart/>
    </div>
  )
}
