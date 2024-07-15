import postsData from "../postsData.json"
import Video from "../components/Video"

const ReelsPage = () => {
  return (
    postsData.map(post => (
      post.type === "video" && 
      <div className="overflow-x-hidden h-[95vh]" key={post.id}>
        <Video src={post.link} classes={'w-full h-full object-cover'} />
      </div>
    ))
  )
}

export default ReelsPage