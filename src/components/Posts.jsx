import Video from "./Video"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

const Posts = ({ post }) => {
  return (
    <div className="md:w-2/5">
      <PostHeader post={post} />
      <div>
        {post.type === "image" && <img src={post.link} className="w-full" />}
        {post.type === "video" && <Video src={post.link} />}
        {/* {post.type === "image-group" && } */}
      </div>
      <PostFooter post={post} />
    </div>
  )
}

export default Posts