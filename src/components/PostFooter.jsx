import { IoPaperPlaneOutline } from "react-icons/io5"
import { TbHeart, TbMessageCircle } from "react-icons/tb"
import { BiBookmark, BiSolidBookmark } from "react-icons/bi"
import { useState } from "react"

const PostFooter = ({ post }) => {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  const like = () => {
    setLiked((prevState) => !prevState)
    liked ? post.likes-- : post.likes++
  }

  const bookmark = () => setBookmarked((prevState) => !prevState)

  return (
    <div className="my-2 mx-4">
      <div className="flex justify-between">
        <div className="flex justify-start gap-3 [&>*]:cursor-pointer">
          <TbHeart size={25} onClick={like} className={liked ? "fill-rose-600 text-rose-600" : ''} />
          <TbMessageCircle size={25} />
          <IoPaperPlaneOutline size={25} />
        </div>
        {bookmarked 
          ? <BiSolidBookmark size={25} onClick={bookmark} className="cursor-pointer" />
          : <BiBookmark size={25} onClick={bookmark} className="cursor-pointer" />
        }
      </div>
      <p className="text-sm pt-1 font-semibold">{post.likes} likes</p>
      <p className="text-sm pt-1 font-semibold">{post.user} {post.description}</p>
      <p className="text-sm text-slate-800">View all 50 comments</p>
      <p className="text-sm text-slate-800">3 days ago</p>
    </div>
  )
}

export default PostFooter