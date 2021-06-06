import React from 'react'
import { useHistory } from "react-router-dom";
import { convertToKebabCase } from '../utils/_general.util';

export const Card = ({metadata}) => {
  const history = useHistory()

  const navigate = () => {
    if (metadata) {
      history.push(`/${convertToKebabCase(metadata.title)}`)
    }
  }

  if (metadata) {
    return (
      <div className="card" onClick={navigate}>
        <span className="card-title">{metadata.title}</span>
        <span className="card-description">{metadata.description}</span>
      </div>
    )
  }

  return 'No metadata provided'
}
