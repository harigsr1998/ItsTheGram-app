import AddStory from "./AddStory"
import Story from "./Story"

const StoriesHeader = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

  return (
    // <div className="w-full flex justify-between gap-[4%] border-b-2 overflow-x-scroll no-scrollbar pt-4 px-[3.16%] [&>*]:basis-[16.84%] [&>*]:shrink-0">    {/* Extremely adjusting flexbox */}
    <div className="border-b-2">
      <div className="w-fit overflow-x-scroll no-scrollbar pt-4 flex justify-between gap-[1.1rem] px-3 [&>*]:basis-16 [&>*]:shrink-0 md:gap-8 md:px-7">
        <AddStory />
        {stories.map(story => <Story key={story} />)}
    </div>
    </div>
  )
}

export default StoriesHeader