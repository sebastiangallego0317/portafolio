import {NavLink} from 'react-router-dom'

interface Props {
    content:string,
    path:string
}

export const NavItem = ({content,path}:Props) => {
  return (
    <li className='text-xl font-bold hover:text-teal-200 hover:drop-shadow-basic-white-shine'><NavLink to={path}>{content}</NavLink> </li>
  )
}
