interface Props {
    url:string,
    className?:string
}

export const ImagePartHome = ({url, className}:Props) => {
  return (
    <aside className="flex justify-center items-center w-2/5">
        <img src={url} alt="Personal image" className={className} />
    </aside>
  )
}
