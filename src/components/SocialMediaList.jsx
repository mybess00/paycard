import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsFacebook, BsInstagram, BsWhatsapp, BsTwitter, BsYoutube, BsGithub, BsReddit, BsWechat, BsPinterest, BsSpotify, BsDiscord } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaLinkedin, FaTumblr, FaSnapchatGhost, FaMediumM, FaTiktok, FaTwitch } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BiLink, BiMailSend } from 'react-icons/bi';

export default function SocialMediaList( { socialMediaObj } ) {
  const socialMediaReference = {
    'facebook': <BsFacebook/>,
    'instagram': <BsInstagram/>,
    'whatsapp': <BsWhatsapp/>,
    'twitter': <BsTwitter/>,
    'youtube': <BsYoutube/>,
    'email': <IoMdMail/>,
    'telegram': <FaTelegramPlane/>,
    'linkedin': <FaLinkedin/>,
    'github': <BsGithub/>,
    'reddit': <BsReddit/>,
    'gmail': <SiGmail/>,
    'wechat': <BsWechat/>,
    'tumblr': <FaTumblr/>,
    'snapchat': <FaSnapchatGhost/>,
    'pinterest': <BsPinterest/>,
    'spotify': <BsSpotify/>,
    'discord': <BsDiscord/>,
    'medium': <FaMediumM/>,
    'tiktok': <FaTiktok/>,
    'twitch': <FaTwitch/>,
    'link': <BiLink/>,
    'newsletter': <BiMailSend/>

  };
  const openLink = (link) => {
    window.open(link, '_blank')
  }
  const socialMediaPropertys =  Object.keys(socialMediaObj);
  return (
    <div className='flex flex-row flex-wrap gap-2 phone:place-content-center'>
      {
        socialMediaPropertys.map((element) => {
          if (socialMediaObj[element]){
            return <div className='cursor-pointer text-2xl hover:scale-105 duration-200' onClick={() => openLink(socialMediaObj[element])}>
                    {socialMediaReference[element]}
                   </div>
          }
        })
      }
    </div>
  )
}