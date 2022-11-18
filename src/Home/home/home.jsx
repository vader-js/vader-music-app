import React from 'react';
import Audioplayer from '../../AudioPlayer';
import Section1 from '../Section1'
import "./home.css"

function Home() {
  return (
    <div className='home'>
      <Section1/>
      <Audioplayer/>
    </div>
  )
}

export default Home
