import React from "react";

export default function UserInfo( { userConfig }) {
    return (
      <div className="flex flex-row flex-nowrap mx-[7%] phone:mx-3">
        <div className="w-[25%]">
          <img src={userConfig.img} alt={`Foto de ${userConfig.name}`}/>
        </div>
        <div className="text-justify">
            <div className="text-4xl">
              <h1>{userConfig.name}</h1>
            </div>
            <div>
              {userConfig.biography}
            </div>
            <div>
              Social Media
            </div>
        </div>
      </div>
    );
}