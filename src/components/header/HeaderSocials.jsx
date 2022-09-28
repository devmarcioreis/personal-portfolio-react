import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="#" target="_blank"><AiFillLinkedin /></a>
        <a href="#" target="_blank"><AiFillGithub /></a>
        <a href="#" target="_blank"><AiOutlineTwitter /></a>
    </div>
  )
}

export default HeaderSocials