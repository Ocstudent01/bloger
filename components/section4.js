import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";


import fetcher from '../lib/fetcher';
import Spinner from './_child/spinner';
import Error from './_child/error';

export default function section4() {

    const {data,isLoading,isError} = fetcher('api/business')
    if(isLoading)return <Spinner></Spinner>;
    if(isError)return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
            <div className="item">
                <h1 className="font-bold text-4xl py-12">Business</h1>
                <div className="flex flex-col gap-6">
                    {/* posts 
                        {Bpost()}
                        {Bpost1()}
                        {Bpost2()}
                    */}
                    {data[1]?<Bpost data={data[1]}></Bpost>:<></>}
                    {data[2]?<Bpost data={data[2]}></Bpost>:<></>}
                    {data[3]?<Bpost data={data[3]}></Bpost>:<></>}
                </div>
            </div>
            <div className="item">
                <h1 className="font-bold text-4xl py-12 ">Travel</h1>
                <div className="flex flex-col gap-6">
                    {/*
                    {Bpost3()}
                    {Bpost4()}
                    {Bpost5()} */}

                    {data[4]?<Bpost data={data[4]}></Bpost>:<></>}
                    {data[5]?<Bpost data={data[5]}></Bpost>:<></>}
                    {data[6]?<Bpost data={data[6]}></Bpost>:<></>}
                    
                </div>
            </div>
        </div>
    </section>
  );
}


function Bpost({data}){
    const {id,title,category,img,published,author}= data;
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`}>
                    <a><Image src={img||"/"} className="rounded" width={300} height={300}/></a>
                </Link>
            </div>
            <div className="info justify-center flex-col">
                <div className='cat'>
                    <Link href={`/posts/${id}`}><a className='text-orange-600 hover:text-orange-800'>{category||"Unknown"}</a></Link>
                    <Link href={`/posts/${id}`}><a className='text-blue-800 hover:text-blue-600'> - {published||"Unknown"} </a></Link>
                </div>
                <div className='title'>
                    <Link href={`/posts/${id}`}>
                        <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>{title||"no title"}</a>
                    </Link>
                </div>
                {/*<Author></Author>*/}
                {author ? <Author {...author}></Author>:<></>}
            </div>
        </div>
    )
}

function Bpost1(){
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}>
                    <a><Image src={"/images/ibpost1.jpg"} className="rounded" width={300} height={300}/></a>
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
                <Author></Author>
            </div>
        </div>
    )
}

function Bpost2(){
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}>
                    <a><Image src={"/images/ibpost2.jpg"} className="rounded" width={300} height={300}/></a>
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
                <Author></Author>
            </div>
        </div>
    )
}

function Bpost3(){
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}>
                    <a><Image src={"/images/ibpost3.jpg"} className="rounded" width={300} height={300}/></a>
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
                <Author></Author>
            </div>
        </div>
    )
}

function Bpost4(){
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}>
                    <a><Image src={"/images/ibpost5.webp"} className="rounded" width={300} height={300}/></a>
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
                <Author></Author>
            </div>
        </div>
    )
}

function Bpost5(){
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}>
                    <a><Image src={"/images/ibpost6.jpg"} className="rounded" width={300} height={300}/></a>
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
                <Author></Author>
            </div>
        </div>
    )
}
