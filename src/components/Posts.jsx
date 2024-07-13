import { IoPaperPlaneOutline } from "react-icons/io5"
import { TbHeart, TbMessageCircle } from "react-icons/tb"
import { BiBookmark } from "react-icons/bi"

const Posts = ({ post }) => {
  return (
    <div>
      <div className="px-4 flex justify-between py-2">
        <div className="flex">
          <img src={post.link} className="w-8 h-8 rounded-full overflow-hidden mr-2 border-[1px] border-gray-500 self-center" />
          <div>
            <h3 className="text-sm font-semibold">{post.user}</h3>
            <p className="text-xs">Original audio</p>
          </div>
          <div className="w-1 h-1 bg-black rounded-full items-center mx-2 mt-2"></div>
          <h3 className="text-sm text-blue-700 font-semibold">Follow</h3>
        </div>
        <p className="text-xl font-bold flex items-center gap-1">
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
        </p>
      </div>
      <div>
      <img src={post.link} className="w-full" />
      </div>
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
    </div>
  )
}

export default Posts