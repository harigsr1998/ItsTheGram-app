import { TbSquareRoundedPlus, TbHeart } from "react-icons/tb"

const HomeHeader = () => {
  return (
    <header className="flex justify-between px-4 py-1 border-b-2">
      <h2 className="text-xl font-bold font-Oleo">ItsTheGram *</h2>
      <div className="flex flex-wrap content-center">
        <TbSquareRoundedPlus size={25} className="mr-4" />
        <TbHeart size={25} />
      </div>
    </header>
  )
}

export default HomeHeader