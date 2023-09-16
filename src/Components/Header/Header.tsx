import { NavItem } from '../NavItem/NavItem';
import { Navbar } from '../Navbar/Navbar';

export const Header = () => {
  return (
    <header className='flex justify-between items-center h-1/8 px-20 py-4 bg-gradient-to-b from-black to-slate-800 border-b-2'>
        <h1 className='w-6/12 text-4xl font-bold'>Portfolio</h1>
        <Navbar width='6/12'>
            <NavItem path="/" content="Home"/>
            <NavItem path="/about" content="About"/>
            <NavItem path="/Shop" content="Shop"/>
            <NavItem path="/projects" content="Projects"/>
        </Navbar>
    </header>
  )
}
