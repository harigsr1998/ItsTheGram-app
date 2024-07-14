import { IoPaperPlaneOutline } from "react-icons/io5"
import { TbHeart, TbMessageCircle } from "react-icons/tb"
import { BiBookmark } from "react-icons/bi"

const PostFooter = ({ post }) => {
  return (
    <div className="my-2 mx-4">
      <div className="flex justify-between">
        <div className="flex justify-start gap-3">
          <TbHeart size={25} />
          <TbMessageCircle size={25} />
          <IoPaperPlaneOutline size={25} />
        </div>
        <BiBookmark size={25} />
      </div>
      <p className="text-sm pt-1 font-semibold">{post.likes} likes</p>
      <p className="text-sm pt-1 font-semibold">{post.user} {post.description}</p>
      <p className="text-sm text-slate-800">View all 50 comments</p>
      <p className="text-sm text-slate-800">3 days ago</p>
    </div>
  )
}

export default PostFooter