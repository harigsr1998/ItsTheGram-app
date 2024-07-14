import postsData from "../postsData.json"
import Video from "../components/Video"

const SearchPage = () => {
  return (
    <div>
      <input type="text" name="search" placeholder="Search" className="m-2 border-2 rounded-lg w-[96%] box-border p-1" />
      <div className="grid grid-cols-3 gap-x-1 gap-y-1">
        {postsData.map(post => (
          <div>
            {post.type === "image" && <img src={post.link} />}
            {post.type === "video" && <Video src={post.link} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage