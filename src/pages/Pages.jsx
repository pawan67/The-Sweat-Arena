import React from 'react'
import Client from './Client/Client'
import Fit from './Fit/Fit'
import Fitness from './Fitness/Fitness'
import Join from './Join/Join'
import Subscription from './Subscription/Subscription'
import Team from './Team/Team'

const Pages = () => {
  return (
    <>
      <Fitness/>
      <Fit/>
      <Team/>
      <Client/>
      <Subscription/>
      <Join/>
    </>
  )
}

export default Pages
