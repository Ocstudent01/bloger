import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import Editor from "./_child/editor";

import fetcher from '../lib/fetcher';
import Spinner from './_child/spinner';
import Error from './_child/error';

export default function section3() {

  const {data,isLoading,isError} = fetcher('api/popular')
  if(isLoading)return <Spinner></Spinner>;
  if(isError)return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
        {/* swiper*/}
        <Swiper
            slidesPerView={2}
            // /*centeredSlides= {"true"} 
            breakpoints ={{
              640: {
                slidesPerView: 2,
                spaceBetween:30
              }
            }}
        >
            {/*<SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide1()}</SwiperSlide>
            <SwiperSlide>{Slide2()}</SwiperSlide>
            <SwiperSlide>{Slide3()}</SwiperSlide> */}
            {
              data.map((value,index)=>(
                <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
              ))
            } 
            
        </Swiper>

    </section>
  );
}

function Slide({data}) {
  const {id,title,category,img,description,published,author,editor}= data;
  return (
    <div className='grid'>
      <div className='images'>
        <Link href={`/posts/${id}`}>
          <a><Image src={img|| "/"} width={520} height={350}/></a>
        </Link>
      </div>  
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={`/posts/${id}`}><a className='text-orange-600 hover:text-orange-800'>{category||"no category"}</a></Link>
          <Link href={`/posts/${id}`}><a className='text-blue-800 hover:text-blue-600'> - {published||""} </a></Link>
        </div>
        <div className='title'>
          <Link href={`/posts/${id}`}>
            <a className='text-2xl md:text-5xl font-bold text-gray-800 hover:text-gray-600'>{title|| "no tittle"}</a>
          </Link>
        </div>
  
        <p className='text-gray-500 py-3'>
          {description || "no description"}
        </p>
        {/*<Author></Author>*/}
        {author ? <Author {...author}></Author>:<></>}
        {editor ? <Editor></Editor>:<></>}
      </div>
    </div>  
  )
}

function Slide1() {
  return (
    <div className='grid'>
      <div className='images'>
        <Link href={"/"}>
          <a><Image src={"/images/mpost1.jpeg"} width={520} height={350}/></a>
        </Link>
      </div>  
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
          <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - Agust 7, 2022 </a></Link>
        </div>
        <div className='title'>
          <Link href={"/"}>
            <a className='text-2xl md:text-5xl font-bold text-gray-800 hover:text-gray-600'>your most unhappy custemers are you greatest source of learning</a>
          </Link>
        </div>
  
        <p className='text-gray-500 py-3'>
          It is grouped with distant flowers of different colors such as roses among others.
        </p>
        <div className="info flex  flex-cols-2">
          <Author></Author>
          <Author></Author>
        </div>
      </div>
    </div>
  )
}


function Slide2() {
  return (
    <div className='grid'>
      <div className='images'>
        <Link href={"/"}>
          <a><Image src={"/images/mpost2.jpg"} width={520} height={350}/></a>
        </Link>
      </div>  
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
          <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - Agust 7, 2022 </a></Link>
        </div>
        <div className='title'>
          <Link href={"/"}>
            <a className='text-2xl md:text-5xl font-bold text-gray-800 hover:text-gray-600'>your most unhappy custemers are you greatest source of learning</a>
          </Link>
        </div>
  
        <p className='text-gray-500 py-3'>
          It is grouped with distant flowers of different colors such as roses among others.
        </p>
        <Author></Author>
      </div>
    </div>
  )
}

function Slide3() {
  return (
    <div className='grid'>
      <div className='images'>
        <Link href={"/"}>
          <a><Image src={"/images/mpost3.jpeg"} width={520} height={350}/></a>
        </Link>
      </div>  
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
          <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - Agust 7, 2022 </a></Link>
        </div>
        <div className='title'>
          <Link href={"/"}>
            <a className='text-2xl md:text-5xl font-bold text-gray-800 hover:text-gray-600'>your most unhappy custemers are you greatest source of learning</a>
          </Link>
        </div>
  
        <p className='text-gray-500 py-3'>
          It is grouped with distant flowers of different colors such as roses among others.
        </p>
        <Author></Author>
      </div>
    </div>
  )
}

  