import { TbSquareRoundedPlus, TbHeart } from "react-icons/tb"

const AppHeader = () => {
  return (
    <header className="flex justify-between px-3 py-2">
      <h2>ItsTheGram *</h2>
      <div className="flex flex-wrap content-center">
        <TbSquareRoundedPlus size={25} className="mr-4" />
        <TbHeart size={25} />
      </div>
    </header>
  )
}

export default AppHeader