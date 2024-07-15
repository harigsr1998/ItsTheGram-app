import postsData from "../postsData.json"
import Video from "../components/Video"

const SearchPage = () => {
  return (
    <div>
      <div className="p-2">
        <input type="text" name="search" placeholder="Search" className="border-2 rounded-lg w-full p-1" />
      </div>
      <div className="grid grid-cols-3 gap-1">
        {postsData.map(post => (
          <div 
            className={post.type === "video" 
            ? "overflow-hidden row-span-2" 
            : "aspect-square overflow-hidden"}
          >
            {post.type === "image" && <img src={post.link} className="w-full h-full object-cover" />}
            {post.type === "video" && <Video src={post.link} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage