import './../../index.css'
interface Props{
    url:string
}
export const IconImage = ({url}:Props) => {
  return (
    <img src={url} className='w-10 drop-shadow-basic-shine' alt="" />
  )
}
