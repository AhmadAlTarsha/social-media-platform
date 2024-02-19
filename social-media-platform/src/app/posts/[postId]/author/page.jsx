"use client"

import React from 'react'
import Button from '@/app/components/Button/Button';
import axios from "axios";
import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function UserData ({params})  {
 const router =useRouter()
  
  const [authors,setAuthors]=useState([])
  

const getCurrentAuthor=async()=>{
 

;
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
setAuthors(res?.data)



  
  } catch (error) {
    console.log(error);
  }
}



useEffect(()=>{

getCurrentAuthor()

},[])

const currentAuthor=authors?.filter((element)=>{
  return element.id==params.postId
})



  return (
    <><Head> <title>AuthorDetails</title></Head>
     <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Author Profile</div>
            <div className="text-gray-900 font-semibold">Personal information</div>
            <p className="mt-2 text-gray-500">Name: {currentAuthor[0]?.name}</p>
            <p className="mt-2 text-gray-500">Email: {currentAuthor[0]?.email}</p>
            <p className="mt-2 text-gray-500">UserName: {currentAuthor[0]?.username}</p>
            <p className="mt-2 text-gray-500">Phone: {currentAuthor[0]?.phone}</p>
            
            <div className="mt-4">
                <div className="text-gray-900 font-semibold">Address:</div>
                <p className="text-gray-500">Street: {currentAuthor[0]?.address?.street}</p>
                <p className="text-gray-500">Suite: {currentAuthor[0]?.address?.suite}</p>
                <p className="text-gray-500">City: {currentAuthor[0]?.address?.city}</p>
                <p className="text-gray-500">Zipcode: {currentAuthor[0]?.address?.zipcode}</p>
            </div>
            
            <div className="mt-4">
                <div className="text-gray-900 font-semibold">Company:</div>
                <p className="text-gray-500">Name: {currentAuthor[0]?.company?.name}</p>
                <p className="text-gray-500">Catchphrase: {currentAuthor[0]?.company?.catchPhrase}</p>
                <p className="text-gray-500">BS: {currentAuthor[0]?.company?.bs}</p>
            </div>
        </div>
        
        <div className="px-8 py-4">
            <button onClick={()=>{
router.push("/posts")
            }} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-colors duration-200">
                Back
            </button>
        </div>
    </div>
</div></>
   
 
   
  );
};


