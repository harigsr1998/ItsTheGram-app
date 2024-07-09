import { TbSquareRoundedPlus, TbHeart } from "react-icons/tb"

const HomeHeader = () => {
  return (
    <header className="flex justify-between px-8 py-2 border-b-2">
      <h2 className="text-5xl font-bold font-Oleo">ItsTheGram *</h2>
      <div className="flex flex-wrap content-center">
        <TbSquareRoundedPlus size={45} className="mr-8" />
        <TbHeart size={45} />
      </div>
    </header>
  )
}

export default HomeHeader