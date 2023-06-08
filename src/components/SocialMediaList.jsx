import React from 'react';
import '../style/SocialMediaList.css'
import { FaTelegramPlane, FaProductHunt } from 'react-icons/fa';
import { BsFacebook, BsInstagram, BsWhatsapp, BsTwitter, BsYoutube, BsGithub, BsReddit, BsWechat, BsPinterest, BsSpotify, BsDiscord } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaLinkedin, FaTumblr, FaSnapchatGhost, FaMediumM, FaTiktok, FaTwitch } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BiLink, BiMailSend } from 'react-icons/bi';

export default function SocialMediaList( { socialMediaObj } ) {
  const socialMediaReference = {
    'facebook': <BsFacebook fill='#1877f2' className='ic-facebook'/>,
    'instagram': <BsInstagram fill='#c13584' className='ic-instagram'/>,
    'whatsapp': <BsWhatsapp fill='#25d366' className='ic-whatsapp'/>,
    'twitter': <BsTwitter fill='#1da1f2' className='ic-twitter'/>,
    'youtube': <BsYoutube fill='#ff0000' className='ic-youtube'/>,
    'email': <IoMdMail fill='#3E82F7' className='ic-email'/>,
    'telegram': <FaTelegramPlane fill='#0088cc' className='ic-telegram'/>,
    'linkedin': <FaLinkedin fill='#0a66c2' className='ic-linkedin'/>,
    'github': <BsGithub fill='#181717' className='ic-github'/>,
    'reddit': <BsReddit fill='#ff4500' className='ic-reddit'/>,
    'gmail': <SiGmail fill='#dd4b39' className='ic-gmail'/>,
    'wechat': <BsWechat fill='#7bb32e' className='ic-wechat'/>,
    'tumblr': <FaTumblr fill='#35465c' className='ic-tumblr'/>,
    'snapchat': <FaSnapchatGhost fill='#ffb700' className='ic-snapchat'/>,
    'pinterest': <BsPinterest fill='#bd081c' className='ic-pinterest'/>,
    'spotify': <BsSpotify fill='#1DB954' className='ic-spotify'/>,
    'discord': <BsDiscord fill='#5865f2' className='ic-discord'/>,
    'medium': <FaMediumM fill='#12100e' className='ic-medium'/>,
    'tiktok': <FaTiktok fill='#69c9d0' className='ic-tiktok'/>,
    'twitch': <FaTwitch fill='#9146ff' className='ic-twitch'/>,
    'link': <BiLink fill='#0072C6' className='ic-link'/>,
    'newsletter': <BiMailSend fill='#ffa500' className='ic-newsletter'/>,
    'producthunt': <FaProductHunt fill='#d35c38' className='ic-producthunt'/>,
  };

  const openLink = (link) => {
    window.open(link, '_blank')
  }
  const socialMediaPropertys = Object.keys(socialMediaObj);
  return (
    <div className='flex flex-row flex-wrap gap-2 phone:place-content-center'>
      {
        socialMediaPropertys.map((element) => {
          if (socialMediaObj[element]){
            return <div className='cursor-pointer text-2xl phone:text-3xl' onClick={() => openLink(socialMediaObj[element])}>
                    {socialMediaReference[element]}
                   </div>
          }
        })
      }
    </div>
  )
}