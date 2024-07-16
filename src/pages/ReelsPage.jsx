import postsData from "../postsData.json"
import Video from "../components/Video"
import { MdOutlineSlowMotionVideo } from "react-icons/md"

const ReelsPage = () => {
  return (
    postsData.map(post => (
      post.type === "video" && 
      <div className="overflow-x-hidden h-[95vh]" key={post.id}>
        <Video post={post} classes={'w-full h-full object-cover'} />
        <MdOutlineSlowMotionVideo size={30} className="ml-[90%] -mt-12" />
      </div>
    ))
  )
}

export default ReelsPage