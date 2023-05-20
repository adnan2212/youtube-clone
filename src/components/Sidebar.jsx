import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/* ICONS */
import { Home48Filled, History24Filled } from "@ricons/fluent"; //Home48Regular
import {
  SubscriptionsFilled,
  VideoLibraryRound,
  SlowMotionVideoSharp,
  WatchLaterRound,
  PlaylistPlayFilled,
  HelpOutlineOutlined,
  FeedbackOutlined,
} from "@ricons/material"; //SubscriptionsOutlined, WatchLaterOutlined
import { PlaySquareFilled, LikeFilled } from "@ricons/antd"; //PlaySquareOutlined, LikeOutlined
import { AngleDown, AngleUp } from "@ricons/fa";
import { IosSettings } from "@ricons/ionicons4";
import { Icon } from "@ricons/utils";
/* ICONS */

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); //SUBSCRIBING TO THE REDUX STORE

  // Early return
  if (!isMenuOpen) {
    return null;
  }

  return (
    <>
      <div className="w-48 bg-slate-200 p-5 shadow-lg">
        {/* HOME */}
        <Link to="/">
          <div className="flex cursor-pointer items-center rounded pb-1 text-sm hover:bg-gray-300">
            <Icon size="35">
              <Home48Filled />
            </Icon>
            <h1 className="mx-4 font-semibold">Home</h1>
          </div>
        </Link>

        {/* SHORTS */}
        <div className="flex cursor-pointer items-center rounded py-1 text-sm hover:bg-gray-300">
          <Icon size="35">
            <SlowMotionVideoSharp />
          </Icon>
          <h1 className="mx-4 font-semibold">Shorts</h1>
        </div>

        {/* SUBSCRIPTIONS */}
        <div className="flex cursor-pointer items-center rounded py-1 text-sm hover:bg-gray-300">
          <Icon size="35">
            <SubscriptionsFilled />
          </Icon>
          <h1 className="mx-4 font-semibold">Subscriptions</h1>
        </div>

        <hr className="my-4 border border-[#2E2F29] " />

        {/* LIBRARY */}
        <div className="flex cursor-pointer items-center rounded py-1 text-sm hover:bg-gray-300">
          <Icon size="35">
            <VideoLibraryRound />
          </Icon>
          <h1 className="mx-4 font-semibold">Library</h1>
        </div>

        {/* HISTORY */}
        <div className="flex cursor-pointer items-center rounded py-1 text-sm hover:bg-gray-300">
          <Icon size="35">
            <History24Filled />
          </Icon>
          <h1 className="mx-4 font-semibold">History</h1>
        </div>

        {/* YOUR VIDEOS */}
        <div className="flex cursor-pointer items-center rounded py-1 text-sm hover:bg-gray-300">
          <Icon size="35">
            <PlaySquareFilled />
          </Icon>
          <h1 className="mx-4 font-semibold">Your Videos</h1>
        </div>

        {/* WATCH LATER */}
        <div className="flex cursor-pointer items-center rounded py-1 text-sm hover:bg-gray-300">
          <Icon size="35">
            <WatchLaterRound />
          </Icon>
          <h1 className="mx-4 font-semibold">Watch later</h1>
        </div>

        {/* LIKED VIDEOS */}
        <div className="flex cursor-pointer items-center rounded py-1 text-sm hover:bg-gray-300">
          <Icon size="35">
            <LikeFilled />
          </Icon>
          <h1 className="mx-4 font-semibold">Like Videos</h1>
        </div>

        {/* SHOW MORE */}
        {/* cursor-pointer hover:bg-gray-300 rounded */}
        <div
          className="flex items-center py-1 text-sm "
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <div className="flex flex-col">
              <div className="py-1 text-sm">
                <div className="mb-2 flex cursor-pointer items-center rounded hover:bg-gray-300 ">
                  <Icon size="35">
                    <PlaylistPlayFilled />
                  </Icon>
                  <h1 className="mx-4 font-semibold">Playlist</h1>
                </div>
                <div className="flex cursor-pointer items-center rounded bg-gray-200 hover:bg-gray-300">
                  <Icon size="35">
                    <AngleUp />
                  </Icon>
                  <h1 className="mx-4 font-semibold">Show less</h1>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex cursor-pointer items-center rounded hover:bg-gray-300">
                <Icon size="35">
                  <AngleDown />
                </Icon>
                <h1 className="mx-4 font-semibold ">Show More</h1>
              </div>
            </>
          )}
        </div>

        <hr className="my-4 border border-[#2E2F29]" />

        {/* SETTINGS */}
        <div className="flex cursor-pointer items-center rounded py-1 text-sm hover:bg-gray-300">
          <Icon size="35">
            <IosSettings />
          </Icon>
          <h1 className="mx-4 font-semibold">Settings</h1>
        </div>

        {/* REPORT HISTORY
        <div className="flex items-center text-sm py-1 cursor-pointer hover:bg-gray-300 rounded">
          <Icon size="35">
            <LikeFilled />
          </Icon>
          <h1 className="mx-2 font-semibold">Report history</h1>
        </div> */}

        {/* HELP */}
        <div className="flex cursor-pointer items-center rounded py-1 text-sm hover:bg-gray-300">
          <Icon size="35">
            <HelpOutlineOutlined />
          </Icon>
          <h1 className="mx-4 font-semibold">Help</h1>
        </div>

        {/* SEND FEEDBACK */}
        <div className="flex cursor-pointer items-center rounded py-1 text-sm hover:bg-gray-300">
          <Icon size="35">
            <FeedbackOutlined />
          </Icon>
          <h1 className="mx-4 font-semibold">Feedback</h1>
        </div>
        <hr className="my-4 border border-[#2E2F29]" />
      </div>
    </>
  );
};

export default Sidebar;
