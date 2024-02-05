import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex w-[20%] h-screen bg-slate-800 py-2  flex-col justify-between items-center">
      {/* logo */}
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="mt-10">
          <img
            className="w-28 h-10"
            src="https://lh4.googleusercontent.com/pzcL7G25jch7H0Vpgm9NvY_C47dcs2jBCJ0rcTApLLOhOBgQ1M7zLyq3qCAJT3HLkuPq_6CECXpVtCmK8-6PA0lXDNAtPTixHiZahoomXOmEfxzMFs-REzysEaJ5tPaRAH0wtFclD1HD_cHC9c-5-q4"
            alt="logo"
          />
        </div>
        {/* different pages links */}
        <div className="my-5 ">
          <h2 className="text-xl text-white py-5 font-semibold">Projects</h2>
          <h2 className="text-xl text-white py-5 font-semibold">
            All Templates
          </h2>
          <h2 className="text-xl text-white py-5 font-semibold">site audits</h2>
        </div>
      </div>
      {/*footer*/}
      <div className=" w-full h-[50px] text-center">
        <hr />
        <div className="flex justify-evenly items-center mt-2">
          <img
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
          <h1 className="text-xl font-semibold text-white">fonder@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
