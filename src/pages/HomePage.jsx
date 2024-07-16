import HomeHeader from "../components/HomeHeader"
import StoriesHeader from "../components/StoriesHeader"
import Posts from "../components/Posts"

const HomePage = () => {
  return (
    <div className="md:w-full">
      <HomeHeader />
      <div className="overflow-y-scroll no-scrollbar md:w-full">
      <StoriesHeader />
      <Posts />
      </div>
    </div>
  )
}

export default HomePage