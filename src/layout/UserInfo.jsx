import React from "react";
import '../style/UserInfo.css'
import SocialMediaList from "../components/SocialMediaList";

export default function UserInfo( { userConfig }) {
  return (
    <div className="flex flex-row flex-nowrap mx-[12%] phone:mx-3 phone:flex-col">
      <div className="w-[45%] mr-3 phone:w-3/5 place-self-center max-w-[210px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-xl">
        <img src={userConfig.image} alt={`Foto de ${userConfig.name}`} className='rounded-xl overflow-hidden'/>
      </div>
      <div className="phone:mt-2">
          <div className="text-4xl text-left phone:text-center">
            <h1 className="user-name">{userConfig.name}</h1>
          </div>
          <div className="my-3 text-justify dark:text-white">
            {userConfig.biography}
          </div>
          <div>
            <SocialMediaList socialMediaObj={userConfig.social_media} />
          </div>
      </div>
    </div>
    );
}