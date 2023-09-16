import { Navbar } from '../Navbar/Navbar';
import { IconImage } from '../IconImage/IconImage';
import { Button } from '../Button/Button';

interface Props {
    name: string,
    className?:string
}
const ICONS_URL = ["../../../public/Icons/facebook.png",
    "../../../public/Icons/gorjeo.png",
    "../../../public/Icons/instagram.png",
    "../../../public/Icons/linkedin.png"]
    export const TextPartHome = ({ name, className }: Props) => {
        return (
            <section className={className}>
                <h3 className='text-2xl font-semibold'>Hola, Bienvenido!</h3>
                <h2 className='text-5xl font-bold'>{name}</h2>
                <h3 className='text-2xl font-semibold'>soy un Desarrollador<span className='text-teal-300'> Front End y back end |</span></h3>    
                <p className='text-lg '>Soy  un apasionado desarrollador full-stack con una fuerte preferencia por el trabajo en el front-end. En esencia, estoy dedicado a impulsar la innovación tecnológica desde una perspectiva de front-end.</p>
                <Navbar width='96'>
                    <IconImage url={ICONS_URL[0]} />
                    <IconImage url={ICONS_URL[1]} />
                    <IconImage url={ICONS_URL[2]} />
                    <IconImage url={ICONS_URL[3]} />
                </Navbar>
                <Button content='DESCARGAR CV' className='drop-shadow-basic-shine bg-blue-500 text-white px-4 py-2 rounded-md w-44'/>
            </section>
        )
    }
    
