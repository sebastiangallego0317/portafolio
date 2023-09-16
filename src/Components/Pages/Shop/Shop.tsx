import {ShopCard} from "./ShopCard"
import { useContext, useEffect, useState } from 'react'
import {getProducts} from './Request.js'
import CartContext from "./CartContext.js"

export const Shop = () => {
    const [products, setProducts] = useState([{}])
    const [productCount, setProductCount] = useContext(CartContext)


    let productList = products
    async function getAllProducts() {
        setProducts(await getProducts())
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <main className='flex flex-col min-h-screen items-center overflow-x-hidden overflow-y-scroll bg-gradient-to-r from-black to-slate-900'>
            <main className='text-black flex justify-center items-center max-w-[2600px] overBorder w-screen'>
                <section className="relative  min-h-screen  py-24 flex flex-wrap justify-evenly w-full bg-gradient-to-r to-slate-800 gap-10 from-black text-white"   >
                <span className=' z-40 fixed p-2 top-16 right-0'>{productCount.length}</span>

                    {productList.map(el => <ShopCard description={el.description} key={el.id} id={el.id} category={el.category} title={el.title} price={el.price} image={el.image} />)}

                </section>
            </main>
        </main>
    )
}