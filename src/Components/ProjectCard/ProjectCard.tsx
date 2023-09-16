import React from 'react'

interface Props {
    url:string,
    tittle:string,
    content:string,
    className?:string
}


export const ProjectCard = ({ url, tittle, content, className }:Props) => {
  return (
    <div className={className}>
        <img src={url} alt="Personal image" className='border-indigo-950 border-solid border-2 shadow-xl w-5/6 h-44 rounded-lg object-cover' />
        <h1 className='text-2xl font-bold text-center my-2 text-black'>{tittle}</h1>
        <p className='overflow-y-scroll text-center text-gray-600 h-32'>{content}</p>
    </div>
  )
}
