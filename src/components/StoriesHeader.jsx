import AddStory from "./AddStory"
import Story from "./Story"

const StoriesHeader = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className="w-full flex justify-between gap-[4%] border-b-2 overflow-x-scroll no-scrollbar pt-4 px-[3.16%] [&>*]:basis-[16.84%]
    [&>*]:shrink-0">
      <AddStory />
      {stories.map(story => <Story key={story} />)}
    </div>
  )
}

export default StoriesHeader