import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Author from './_child/author';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';

import fetcher from '../lib/fetcher';
import Spinner from './_child/spinner';
import Error from './_child/error';


export default function section1() {

  const {data,isLoading,isError} = fetcher('api/trending')
  if(isLoading)return <Spinner></Spinner>;
  if(isError)return <Error></Error>

  SwiperCore.use([Autoplay])
  //esto agrega una imagen o tambien si deceas agregar un color de fondo al slider
  const bg = {
    background: "url('/images/banner1.jpg')no-repeat",
    backgroundPosition:"center right"
  }

  

  return (
    <section className='py-10' style={bg}>
      <div className='container mx-auto md:px-20'>
        <h1 className='font-bold text-4xl pb-12 text-center'> Trending </h1>
        <Swiper
          //el numero 1 indica el numero de slider que vas a visualizar 
          slidesPerView={1}
          loop={true}
          // indica que va hacer automatico y se movera de slider a slider en un lapso de demora de 6000 seg
          autoplay={{
            delay:6000
          }}
        >
          {/* <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide1()}</SwiperSlide>
          <SwiperSlide>{Slide2()}</SwiperSlide>
          <SwiperSlide>{Slide3()}</SwiperSlide>
          <SwiperSlide>{Slide4()}</SwiperSlide>
          <SwiperSlide>{Slide5()}</SwiperSlide> */}
          {
            data.map((value,index)=>(
              <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
            ))
        
          }
          
        </Swiper>
        
      </div>
    </section>
  );
}

function Slide({data}) {
  const {id,title,category,img,published,description,author}= data;
  return (
    <div className='grid md:grid-cols-2'>
      <div className='images'>
        {/*aqui se agrega la imagen de cada slider mas no es la imagen del fondo del slider*/}
        <Link href={`/posts/${id}`}>
          <a><Image src={img||"/"} width={380} height={380}/></a>
        </Link>
      </div>  
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={`/posts/${id}`}><a className='text-orange-600 hover:text-orange-800'>{category||"unknown"}</a></Link>
          <Link href={`/posts/${id}`}><a className='text-blue-800 hover:text-blue-600'> - {published|| "unknown"}</a></Link>
        </div>
        <div className='title'>
          <Link href={`/posts/${id}`}>
            <a className='text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600'>{title|| "tittle"}</a>
          </Link>
        </div>
        <p className='text-gray-500 py-3'>
            {description|| "description"}
        </p>
          
          {/* 
            <div>
              <Link href={"/"}><a className='text-orange-600 font-bold'>Author : </a></Link>
              <Link href={"/"}><a className=''> Orlando Chavez </a></Link>
            </div>
            <h1 className='font-bold'>Author</h1>
          */}


          {/* a author se le a creado un nuevo componente el cual es llamado aqui abajo*/}
        {author ? <Author {...author}></Author>:<></>}
          
      </div>
    </div>
    
  )
}


function Slide1() {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='images'>
        <Link href={"/"}>
          <a><Image src={"/images/img2.jpg"} width={380} height={380}/></a>
        </Link>
      </div>  
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
          <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - July 22, 2022 </a></Link>
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

function Slide2() {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='images'>
        <Link href={"/"}>
          <a><Image src={"/images/img3.jpg"} width={380} height={380}/></a>
        </Link>
      </div>  
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
          <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - July 22, 2022 </a></Link>
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
    <div className='grid md:grid-cols-2'>
      <div className='images'>
        <Link href={"/"}>
          <a><Image src={"/images/img4.jpg"} width={380} height={380}/></a>
        </Link>
      </div>  
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
          <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - July 22, 2022 </a></Link>
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

function Slide4() {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='images'>
        <Link href={"/"}>
          <a><Image src={"/images/img5.jpg"} width={380} height={380}/></a>
        </Link>
      </div>  
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
          <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - July 22, 2022 </a></Link>
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

function Slide5() {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='images'>
        <Link href={"/"}>
          <a><Image src={"/images/img6.jpg"} width={380} height={380}/></a>
        </Link>
      </div>  
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
          <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - July 22, 2022 </a></Link>
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