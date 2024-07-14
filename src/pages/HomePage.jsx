import HomeHeader from "../components/HomeHeader"
import StoriesHeader from "../components/StoriesHeader"
import postsData from "../postsData.json"
import Posts from "../components/Posts"

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <div className="overflow-y-scroll no-scrollbar">
        <StoriesHeader />
        {postsData.map(post => <Posts key={post.id} post={post} />)}
      </div>
    </>
  )
}

export default HomePage