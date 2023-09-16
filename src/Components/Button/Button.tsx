
interface Props{
    content:string,
    className?:string
}

export const Button = ({content, className}:Props) => {
  return (
    <button className={className}>{content}</button>
  )
}
