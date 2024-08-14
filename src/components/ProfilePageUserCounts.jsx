const ProfilePageUserCounts = () => {
  return (
    <div className="flex justify-between py-2 px-8 border-b-2">
      <div className="text-center">
        <p className="font-bold text-sm md:text-lg">1</p>
        <p className="text-xs md:text-base">posts</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-sm md:text-lg">45</p>
        <p className="text-xs md:text-base">followers</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-sm md:text-lg">102</p>
        <p className="text-xs md:text-base">following</p>
      </div>
    </div>
  );
};

export default ProfilePageUserCounts;
