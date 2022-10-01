import React from 'react'
import Person from './Person'

const PersonsList = ({personList}) => {
  return (
    <div>
        {
            personList.map (el => <Person el = {el} />)
        }

    </div>
  )
}

export default PersonsList