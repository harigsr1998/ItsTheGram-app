import { IoPaperPlaneOutline } from "react-icons/io5"
import { TbHeart, TbMessageCircle } from "react-icons/tb"
import { BiBookmark } from "react-icons/bi"

const Posts = ({ post }) => {
  return (
    <div>
      <div className="p-2 px-4 flex justify-between content-center">
        <div className="flex justify-start">
          <div className="w-[9%] aspect-square rounded-full overflow-hidden">
            <img src={post.link} className="overflow-clip h-fit" />
          </div>
          <div className="pl-2 content-center">
            <h4 className="text-xl font-semibold">{post.user}</h4>
            <p className="text-sm">Original audio</p>
          </div>
          <p className="px-2 pt-1 font-bold text-lg">.</p>
          <h3 className="pt-[6px] text-xl text-blue-700 font-semibold">Follow</h3>
        </div>
        <p className="text-xl font-bold pt-2">. . .</p>
      </div>
      <div>
      <img src={post.link} className="w-full" />
      </div>
      <div className="my-3 mx-4">
        <div className="flex justify-between">
          <div className="flex justify-start gap-3">
            <TbHeart size={35} />
            <TbMessageCircle size={35} />
            <IoPaperPlaneOutline size={35} />
          </div>
          <BiBookmark size={35} />
        </div>
        <p className="text-xl pt-1 font-semibold">{post.likes} likes</p>
        <p className="text-xl pt-1 font-semibold">{post.user} {post.description}</p>
        <p className="text-xl pt-1 text-slate-800">View all 50 comments</p>
        <p className="text-xl pt-1 text-slate-800">3 days ago</p>
      </div>
    </div>
  )
}

export default Posts