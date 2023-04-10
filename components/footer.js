import React from 'react'

import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link';

import Newslatter from './_child/newslatter';

export default function footer() {

  const bg = {
    backgroundImage: "url('/images/ffooter.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom left 190px"
  }
  return (
    <footer  style={bg}>
      <Newslatter></Newslatter>
      <div className='container mx-auto flex justify-center py-12'>
        <div className='py-5'>
          <div className='flex gap-6 justify-center'>
                    <Link href={"/"}>
                        <a><ImFacebook color="#888888" /></a>
                    </Link>
                    <Link href={"/"}>
                        <a><ImTwitter color="#888888"/></a>
                    </Link>
                    <Link href={"/"}>
                        <a><ImYoutube color="#888888"/></a>
                    </Link>
          </div>
          <p className='py-5 text-gray-400'>Copyright ©2022 All right reserved | This template is made with by Orlando Chavez</p>
          <p className='text-gray-400 text-center'>Terms & Condition</p>
        </div>

        
      </div>

    </footer>
  );
}
