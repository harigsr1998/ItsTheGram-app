import { TbSquareRoundedPlus, TbHeart } from "react-icons/tb"
import { IoIosArrowDown } from "react-icons/io"

const HomeHeader = () => {
  return (
    <header className="flex justify-between px-2 py-1 border-b-2">
      <h2 className="text-2xl font-bold font-Oleo inline-block">ItsTheGram
          <IoIosArrowDown size={20} className="inline-block ml-2"/>
      </h2>
      <div className="flex items-center">
        <TbSquareRoundedPlus size={25} className="mr-2" />
        <TbHeart size={25} />
      </div>
    </header>
  )
}

export default HomeHeader