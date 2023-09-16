import { Button } from "../Button/Button"

export const Footer = () => {
  return (
    <footer className="flex items-center h-1/8 justify-between w-full px-16 py-4 bg-gray-900 text-white opacity-80 shadow-inner shadow-sky-900">
        <p>Web made by Sebastian Gallego / 2023 Ⓒ </p>
        <Button content="↑" className="drop-shadow-basic-shine bg-blue-500 text-white py-2 rounded-md w-12"/>
    </footer>
  )
}
