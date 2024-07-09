import HomeHeader from "../components/HomeHeader"
import StoriesHeader from "../components/StoriesHeader"
import Posts from "../components/Posts"

const HomePage = () => {
  const posts = [
    {id: 1, size: '240x150'},
    {id: 2, size: '240x250'},
    {id: 3, size: '240x200'},
    {id: 4, size: '240x100'},
    {id: 5, size: '240x275'},
    {id: 6, size: '240x175'},
    {id: 7, size: '240x225'},
    {id: 8, size: '240x125'}
  ]

  return (
    <>
      <HomeHeader />
      <div className="h-full overflow-y-scroll no-scrollbar">
        <StoriesHeader />
        {posts.map(post => <Posts key={post.id} post={post} />)}
      </div>
    </>
  )
}

export default HomePage