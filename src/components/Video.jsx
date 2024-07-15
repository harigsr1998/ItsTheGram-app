const Video = ({ src, classes='w-full h-full object-cover' }) => {
  return (
    <video className={classes} controls>
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default Video