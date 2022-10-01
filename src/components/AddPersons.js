import React, { useState } from 'react'


const AddPersons = ({handleAdd}) => {

  const [input , setInput] = useState ({
    fName : '' ,
    age : '' ,
    picUrl : '' ,
    id : Math.random()
  })

  const handleChange = (e) => {
    setInput({...input ,[e.target.name] : e.target.value })
  }

  const AddNewPers = () => {
    handleAdd(input)
  }

  return (
    <div>

      <input placeholder='f name' name='fName'  onChange={handleChange} ></input>
      <input placeholder='age' name='age'  onChange={handleChange}></input>
      <input placeholder='pic url' name='picUrl' onChange={handleChange}></input>

      <button onClick={AddNewPers}> Add  </button>



    </div>
  )
}

export default AddPersons