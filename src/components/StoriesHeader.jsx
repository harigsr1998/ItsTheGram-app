import AddStory from "./AddStory"
import Story from "./Story"

const StoriesHeader = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className="flex justify-between gap-3 border-b-2 overflow-x-auto no-scrollbar p-2">
      <AddStory />
      {stories.map(story => <Story key={story} />)}
    </div>
  )
}

export default StoriesHeader