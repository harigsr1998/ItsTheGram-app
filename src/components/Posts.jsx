import postsData from "../postsData.json"
import Post from "../components/Post"

const Posts = () => {
  return (
    <div className="md:w-full">
      {postsData.map(post => <Post key={post.id} post={post} />)}
    </div>
  )
}

export default Posts