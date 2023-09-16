import React from 'react'
interface Props {
    title:string,
    content:string
}


export const AboutSection = ({title, content}:Props) => {
  return (
    <div className='flex flex-col items-start justify-center my-14'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p>{content}</p>
    </div>
  )
}
