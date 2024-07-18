import { GoKebabHorizontal } from "react-icons/go"
import { useState } from "react";

const PostHeader = ({ post }) => {
  const [followState, setFollowState] = useState(post.followStatus)

  const follow = () => setFollowState((prevState) => !prevState)

  return (
    <div className="px-4 flex justify-between py-2">
      <div className="flex">
        {post.type === "image" && <img src={post.link} className="w-8 h-8 rounded-full overflow-hidden mr-2 border-[1px] border-gray-500 self-center" />}
        {post.type === "video" && <img src={post.thumbnail} className="w-8 h-8 rounded-full overflow-hidden mr-2 border-[1px] border-gray-500 self-center" />}
        <div>
          <h3 className="text-sm font-semibold">{post.user}</h3>
          <p className="text-xs">Original audio</p>
        </div>
        <div className="w-1 h-1 bg-black rounded-full items-center mx-2 mt-2"></div>
        <h3 
          className="text-sm text-blue-700 font-semibold cursor-pointer" 
          onClick={follow}
        >
          {followState ? 'Unfollow' : 'Follow'}
        </h3>
      </div>
      <GoKebabHorizontal className="text-xl mt-2"/>
    </div>
  )
}

export default PostHeader