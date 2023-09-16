import { useContext, useEffect, useRef, useState } from 'react'
// import { Product } from "../../Consts/ApiRequests"

 import CartContext from './CartContext'
export const ShopCard = ({ category, description, id, image, price, title }: Product) => {
    const [productCount, setProductCount] = useContext(CartContext)
    const actualProduct = {
        id: id,
        title: title,
        price: price,
        image: image,
        description: description,
        category: category
    }
    const handleClick = () => {
        isAlready?setProductCount(productCount.filter((el:Product) => el.id != id)):setProductCount([...productCount, actualProduct])
    }
    const [isAlready, setIsAlready] = useState(false)
    const Article = useRef(null)
    useEffect(() => {
        setIsAlready(productCount.some((el:Product) => el.id == id))
    }, [productCount])
    useEffect(() => {
        if(isAlready){
            Article.current.classList.replace("to-[#000]", "to-[#277]")
            Article.current.classList.replace("from-[#00007777]", "from-[#00000077]")
        }else {
            Article.current.classList.replace("to-[#277]", "to-[#000]")
            Article.current.classList.replace("from-[#00000077]", "from-[#00007777]")
        }

    },[isAlready])

    return (
        <div className="h-[80vh] max-h-[550px] max-w-[350px] p-[5px] bg-gradient-to-bl
        cursor-pointer transition-all from-pink-200 to-blue-400
        ease-in-out duration-300 hover:scale-[105%] drop-shadow-2xl ">

            <article ref={Article} onClick={handleClick} className=" retlative flex flex-col items-center justify-around rounded-3xl h-full px-3  py-5 bg-gradient-to-b
                                from-[#00007777]  to-[#000]">
                <h2 className="text-center text-white text-lg font-bold h-[10%]">{title}</h2>
                <img className=" object-cover h-3/6 mb-4" src={image} alt="" />
                <div className="py-2 rounded-lg h-[25%] w-5/6 px-2 bg-slate-800 overflow-y-scroll">
                    <p className=" text-white text-sm font-bold">{description}</p>
                </div>
                <p className="absolute bottom-2 self-center">{price}$</p>
                <p>{category}</p>
            </article>
        </div>
    )
}
