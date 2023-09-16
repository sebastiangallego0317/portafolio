import { ProjectCard } from '../../ProjectCard/ProjectCard';
import { Cards } from '../../../Consts/Cards';

const className: string = "flex flex-col h-5/6 snap-center justify-evenly w-3/12 items-center my-167 p-4 bg-white rounded-xl cursor-pointer shadow-lg shadow-slate-950 mx-4.1 hover:scale-105 transition-all duration-300 hover:shadow-slate-500"

export const Projects = () => {
    return (
        <main className='ScrollType-skinny flex flex-wrap justify-around items-center flex-1 w-screen overflow-y-scroll snap-y snap-mandatory my-176 shadow-inner'>
            {Cards.map((card) => (<ProjectCard tittle={card.title} content={card.content} url={card.url} className={className} />))}
        </main>
    )
}

