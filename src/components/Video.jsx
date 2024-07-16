const Video = ({ post, classes='w-full h-full object-cover' }) => {
  return (
    <video className={classes} preload="none" poster={post.thumbnail}>
      <source src={post.link} type="video/mp4" />
    </video>
  )
}

export default Video