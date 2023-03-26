import React from "react";
import '../style/UserInfo.css'

export default function Footer () {
  //   Please don't change this. Thank you!!!!!
  return(
    <div className="mt-10">
      <p className="flex flex-row flex-nowrap justify-center gap-x-1 font-semibold">
        Made with
        <div className='user-name'>
          Color
        </div> 
        by 
        <a href='https://github.com/mybess00/' className="user-name" target='_blank'>
          Rafael Planas
        </a>
        👨‍💻
      </p>
    </div>
  )
}