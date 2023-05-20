import Button from "./Button";

// import {
//   ArrowBackIosNewRound,
//   ArrowForwardIosOutlined,
// } from "@ricons/material";
// import { Icon } from "@ricons/utils";

const list = [
  "All",
  "Cricket",
  "Cooking",
  "Sports",
  "Coding",
  "Gaming",
  "Valorant",
  "React",
  "Angular",
  "JavaScript",
];

const ButtonList = () => {
  return (
    // <div className="grid grid-flow-col ">
    <div className="flex gap-1">
      {list.map((item, index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

/* <Icon size="20">
  <ArrowForwardIosOutlined />
</Icon> */

export default ButtonList;
