import React from "react";
import ProfilePic from "./ProfilePic";
import CardHeading from "./CardHeading";
import SocialsButton from "./SocialsButton";

const SocialLinksCard = () => {
  return (
    <div className=" w-full rounded-md flex flex-col max-w-[384px]">
      <ProfilePic />
      <CardHeading
        name="Jessica Randall"
        location="London, United Kingdom"
        jobTitle="Front-end developer and avid reader"
      />
      <div className="flex flex-col gap-3">
        <SocialsButton title="GitHub" />
        <SocialsButton title="Frontend Mentor" />
        <SocialsButton title="LinkedIn" />
        <SocialsButton title="Twitter" />
        <SocialsButton title="Instagram" />
      </div>
    </div>
  );
};

export default SocialLinksCard;
