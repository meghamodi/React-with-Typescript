import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
  people: Props['people']
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}
const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    url: '',
  })
  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ])
    setInput({ name: '', age: '', note: '', url: '' })
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className='AddToList'>
      <input
        type='text'
        placeholder='Name'
        value={input.name}
        className='AddToList-input'
        onChange={handleChange}
        name='name'
      />
      <input
        type='text'
        placeholder='Age'
        value={input.age}
        className='AddToList-input'
        onChange={handleChange}
        name='age'
      />
      <input
        type='text'
        placeholder='Image Url'
        value={input.url}
        className='AddToList-input'
        onChange={handleChange}
        name='url'
      />
      <textarea
        placeholder='Notes'
        value={input.note}
        className='AddToList-input'
        onChange={handleChange}
        name='note'
      />
      <button className='AddToList-btn' onClick={handleClick}>
        Add to List
      </button>
    </div>
  )
}
export default AddToList
