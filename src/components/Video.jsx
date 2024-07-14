const Video = ({ src }) => {
  return (
    <video className="w-full h-full" controls>
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default Video