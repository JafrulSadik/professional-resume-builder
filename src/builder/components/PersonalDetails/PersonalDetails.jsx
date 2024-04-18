import Input from "../../../components/Input/Input";

const PersonalDetails = () => {
  // const { register, handleSubmit } = useForm();

  return (
    <div className="w-full ">
      <h1 className=" text-li-txt dark:text-dr-txt my-1 font-bold">
        Personal Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <Input labelData="Job Title"></Input>
        <Input labelData="Email"></Input>
        <Input labelData="First Name"></Input>
        <Input labelData="Last Name"></Input>
        <Input labelData="Address"></Input>
        <Input labelData="Phone"></Input>
        <Input labelData="Date Of Birth"></Input>
        <Input labelData="Naionality"></Input>
      </div>
    </div>
  );
};

export default PersonalDetails;
