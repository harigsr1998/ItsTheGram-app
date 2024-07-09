const Posts = ({ post }) => {
  return (
    <div className="m-4">
      <img src={`https://via.placeholder.com/${post.size}.jpg`} />
    </div>
  )
}

export default Posts