
import Link from 'next/link'; 
import Image from 'next/image';

import Author from './_child/author';
/// info hecha en helper.js e importada aqui 

import fetcher from '../lib/fetcher';

import Spinner from './_child/spinner';
import Error from './_child/error';

export default function section2() {

    //getPots(2).then(res => console.log(res))
    ///console.log(process.env.baseURL);

    const {data,isLoading,isError} = fetcher('api/posts')
    //if(data)console.log(data)

    if(isLoading)return <Spinner></Spinner>;
    if(isError)return <Error></Error>
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

            {/* grid columns */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
              {/*   {Post()}
                {Post1()}
                {Post2()}
                {Post3()}
                {Post4()}
                {Post5()} */}

                {
                    data.map((value,index)=>(
                        <Post data={value} key={index}></Post>
                    ))
                }
            </div>
        </section>
    );
}

function Post({ data }){
    const {id,title,category,img,published,author}= data;
    return (
        <div className="item">
            <div className="images">
                <Link href={`/posts/${id}`} >
                    <a><Image src={img||"/"} className="roun" width={400} height={300}/></a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col ">
                <div className='cat'>
                    <Link href={`/posts/${id}`}><a className='text-orange-600 hover:text-orange-800'>{category ||"Unknown"}</a></Link>
                    <Link href={`/posts/${id}`}><a className='text-blue-800 hover:text-blue-600'> - {published ||"Unknown"} </a></Link>
                </div>
            </div>
            <div className='title'>
                <Link href={`/posts/${id}`}>
                    <a className='text-1xl font-bold text-gray-800 hover:text-gray-600'>{title|| "title"}</a>
                </Link>
            </div>
            <p className='text-gray-500 py-3'>
                It is grouped with distant flowers of different colors such as roses among others.
            </p>
            {/* <Author></Author> */}
            {author ? <Author {...author}></Author>:<></>}
        </div>
    )
}

function Post1(){
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"} >
                    <a><Image src={"/images/ipost1.jpg"} className="roun" width={450} height={380}/></a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col ">
                <div className='cat'>
                    <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
                    <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - Jun 5, 2022 </a></Link>
                </div>
            </div>
            <div className='title'>
                <Link href={"/"}>
                    <a className='text-1xl font-bold text-gray-800 hover:text-gray-600'>your most unhappy custemers are your greatest source of learning</a>
                </Link>
            </div>
            <p className='text-gray-500 py-3'>
                It is grouped with distant flowers of different colors such as roses among others.
            </p>
            <Author></Author>
        </div>
    )
}

function Post2(){
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"} >
                    <a><Image src={"/images/ipost2.jpg"} className="roun" width={450} height={380}/></a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col ">
                <div className='cat'>
                    <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
                    <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - Jun 6, 2022 </a></Link>
                </div>
            </div>
            <div className='title'>
                <Link href={"/"}>
                    <a className='text-1xl font-bold text-gray-800 hover:text-gray-600'>your most unhappy custemers are your greatest source of learning</a>
                </Link>
            </div>
            <p className='text-gray-500 py-3'>
                It is grouped with distant flowers of different colors such as roses among others.
            </p>
            <Author></Author>
        </div>
    )
}

function Post3(){
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"} >
                    <a><Image src={"/images/ipost3.jpg"} className="roun" width={450} height={380}/></a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col ">
                <div className='cat'>
                    <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
                    <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - Jun 7, 2022 </a></Link>
                </div>
            </div>
            <div className='title'>
                <Link href={"/"}>
                    <a className='text-1xl font-bold text-gray-800 hover:text-gray-600'>your most unhappy custemers are your greatest source of learning</a>
                </Link>
            </div>
            <p className='text-gray-500 py-3'>
                It is grouped with distant flowers of different colors such as roses among others.
            </p>
            <Author></Author>
        </div>
    )
}

function Post4(){
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"} >
                    <a><Image src={"/images/ipost4.jpg"} className="roun" width={450} height={380}/></a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col ">
                <div className='cat'>
                    <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
                    <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - Jun 10, 2022 </a></Link>
                </div>
            </div>
            <div className='title'>
                <Link href={"/"}>
                    <a className='text-1xl font-bold text-gray-800 hover:text-gray-600'>your most unhappy custemers are your greatest source of learning</a>
                </Link>
            </div>
            <p className='text-gray-500 py-3'>
                It is grouped with distant flowers of different colors such as roses among others.
            </p>
            <Author></Author>
        </div>
    )
}

function Post5(){
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"} >
                    <a><Image src={"/images/ipost5.jpg"} className="roun" width={450} height={380}/></a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col ">
                <div className='cat'>
                    <Link href={"/"}><a className='text-orange-600 hover:text-orange-800'>Bussines, Travel</a></Link>
                    <Link href={"/"}><a className='text-blue-800 hover:text-blue-600'> - Jun 15, 2022 </a></Link>
                </div>
            </div>
            <div className='title'>
                <Link href={"/"}>
                    <a className='text-1xl font-bold text-gray-800 hover:text-gray-600'>your most unhappy custemers are your greatest source of learning</a>
                </Link>
            </div>
            <p className='text-gray-500 py-3'>
                It is grouped with distant flowers of different colors such as roses among others.
            </p>
            <Author></Author>
        </div>
    )
}