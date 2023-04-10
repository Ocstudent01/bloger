import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Author from './author';

import Fetcher from '../../lib/fetcher'
import Spinner from '../_child/spinner'
import Error from '../_child/error'

export default function related() {

    const {data,isLoading,isError} = Fetcher('api/posts')
    if(isLoading)return <Spinner></Spinner>;
    if(isError)return <Error></Error>

    return (
    <section className='pt-20'>
        <h1 className="font-bold text-3xl py-10">Related</h1>

        <div className='flex flex-col gap-10'>
            {
                data.map((value,index)=>(
                    <Post key={index} data={value}></Post>
                ))
            }
            
        </div>
    </section>
  );
}

function Post({data}){

    const {id,title,category,img,published,author}= data;

    return (
        <div className='flex gap-5'>
            <div className='image flex flex-col justify-start'>
                <Link href={`/posts/${id}`}>
                    <a><Image src={img||""} className="rounded" width={300} height={300}/></a>
                </Link>
            </div>
            <div className="info justify-center flex-col">
                <div className='cat'>
                    <Link href={`/posts/${id}`}><a className='text-orange-600 hover:text-orange-800'>{category||"no category"}</a></Link>
                    <Link href={`/posts/${id}`}><a className='text-blue-800 hover:text-blue-600'> - {published||""} </a></Link>
                </div>
                <div className='title'>
                    <Link href={`/posts/${id}`}>
                        <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>{title||"no title"}</a>
                    </Link>
                </div>
                {author?<Author {...author}></Author>:<></>}
            </div>
        </div>
    )
}

function Post1(){
    return (
        <div className='flex gap-5'>
            <div className='image flex flex-col justify-start'>
                <Link href={"/"}>
                    <a><Image src={"/images/irelated1.jpg"} className="rounded" width={300} height={300}/></a>
                </Link>
            </div>
            <div className="info justify-center flex-col">
                <div className='cat'>
                    <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
                    <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - Agust 7, 2022 </a></Link>
                </div>
                <div className='title'>
                    <Link href={"/"}>
                        <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>your most unhappy custemers are your greatest source of learning</a>
                    </Link>
                </div>
                <Author/>
            </div>
        </div>
    )
}

function Post2(){
    return (
        <div className='flex gap-5'>
            <div className='image flex flex-col justify-start'>
                <Link href={"/"}>
                    <a><Image src={"/images/irelated2.webp"} className="rounded" width={300} height={300}/></a>
                </Link>
            </div>
            <div className="info justify-center flex-col">
                <div className='cat'>
                    <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
                    <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - Agust 7, 2022 </a></Link>
                </div>
                <div className='title'>
                    <Link href={"/"}>
                        <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>your most unhappy custemers are your greatest source of learning</a>
                    </Link>
                </div>
                <Author/>
            </div>
        </div>
    )
}