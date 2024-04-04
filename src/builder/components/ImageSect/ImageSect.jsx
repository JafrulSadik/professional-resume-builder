import Profile from "../../../assets/Profile/Profile";

const ImageSect = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center p-5 gap-5">
      <div className="">
        <Profile />
      </div>
      <div className="">
        <input
          className="bg-gray-100 text-sm text-li-bg-secondary rounded-md px-2 py-2 outline-none font-normal"
          type="file"
        />
      </div>
    </div>
  );
};

export default ImageSect;
