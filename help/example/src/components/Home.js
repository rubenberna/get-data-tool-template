import React from 'react'
import { Card } from './Card';

export const Home = ({dataToolTemplateInfo}) => {
  return (
    <div>
      <Card metadata={dataToolTemplateInfo}/>
    </div>
  )
}
