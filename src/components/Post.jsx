import Video from "./Video"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import { MdOutlineSlowMotionVideo } from "react-icons/md"

const Post = ({ post }) => {
  return (
    <div className="md:mt-4">
      <PostHeader post={post} />
      <div>
        {post.type === "image" && <img src={post.link} className="w-full" loading="lazy" />}
        {post.type === "video" && <Video post={post} />}
        {post.type === "video" && <MdOutlineSlowMotionVideo size={30} className="ml-[92%] -mt-8" />}
      </div>
      <PostFooter post={post} />
    </div>
  )
}

export default Post