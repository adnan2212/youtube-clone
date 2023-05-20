// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

import { toggleMenu } from "../store/appSlice";

/* ICONS */
import { MenuRound } from "@ricons/material";
import { IosSearch } from "@ricons/ionicons4";
import { LogoYoutube } from "@ricons/ionicons4";
import { VideoCallOutlined } from "@ricons/material"; //VideoCallFilled,
import { UserAvatarFilled, MicrophoneFilled } from "@ricons/carbon"; //UserAvatarFilledAlt,
import { BellRegular } from "@ricons/fa";
import { Icon } from "@ricons/utils";

const Head = () => {
  // const menu = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();

  const menuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="m-1 grid grid-cols-12 p-2 shadow-lg">
      <div className="col-span-2 flex items-center ">
        <span className="cursor-pointer" onClick={() => menuHandler()}>
          <Icon size="35">
            <MenuRound />
          </Icon>
        </span>

        {/* <Link to="/"> */}
        <div className="ml-6 flex cursor-pointer items-center pb-2 ">
          <Icon size="33" color="red">
            <LogoYoutube />
          </Icon>
          <h1 className="flex items-center pl-2 text-xl">YouTube</h1>
        </div>
        {/* </Link> */}
      </div>

      <div className="col-span-8 flex items-center justify-center ">
        <input
          className="w-1/2 rounded-l-3xl border border-gray-900 py-2 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Search"
        />
        <button className="flex justify-center rounded-r-3xl border-b border-r border-t border-gray-900  bg-[#2E2F29] p-2 px-4">
          <Icon size="24" color="white">
            <IosSearch />
          </Icon>
        </button>
        <div className="mx-2 rounded-full bg-[#282828] px-3 py-2">
          <Icon size="22" color="white">
            <MicrophoneFilled />
          </Icon>
        </div>
      </div>

      <div className="space-between col-span-2 flex justify-end  space-x-4">
        <Icon size="35">
          <VideoCallOutlined />
        </Icon>
        <Icon size="32">
          <BellRegular />
        </Icon>
        <Icon size="35">
          <UserAvatarFilled />
        </Icon>
      </div>
    </div>
  );
};

export default Head;
