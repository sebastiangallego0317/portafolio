import { ReactNode } from 'react';
interface Props {
    children:ReactNode,
    width:string
}

export const Navbar = ({children, width}:Props) => {
    return (
        <nav className={`w-${width}`}>
            <ul className={`flex justify-between w-full`}>
                {children}
            </ul>
        </nav>
    )
}
