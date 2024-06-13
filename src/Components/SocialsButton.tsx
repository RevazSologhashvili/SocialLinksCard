import React from "react";

const SocialsButton = (props: { title: string }) => {
  return (
    <button className="w-full py-3 bg-Gray rounded-md text-white font-bold  hover:bg-NeonGreen hover:text-Black transition">
      {props.title}
    </button>
  );
};

export default SocialsButton;
