import { toast } from "sonner";

const Toast = () => {
  toast.error("Data Not Found.", {
    className:
      "flex border-[1px] border-gray-400  dark:bg-white dark:text-black py-3 px-6 gap-4 w-64 ",
    description: "My description",
    duration: 2000,
  });
  return <div>Toast</div>;
};

export default Toast;
