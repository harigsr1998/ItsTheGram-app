import AddStory from "./AddStory"
import Story from "./Story"

const StoriesHeader = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

  return (
    <div className="border-b-2 md:border-none w-full box-border overflow-x-scroll no-scrollbar scroll-smooth bg-white">
      <div className="w-full pt-4 flex justify-between gap-[1.1rem] px-3 [&>*]:basis-16 [&>*]:shrink-0 md:gap-7 md:px-7 box-border">
        <AddStory />
        {stories.map(story => <Story key={story} />)}
    </div>
    </div>
  )
}

export default StoriesHeader