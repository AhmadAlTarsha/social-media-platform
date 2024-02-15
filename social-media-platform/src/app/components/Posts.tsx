 "use client"
import axios from 'axios'
import React, { useEffect, useState }   from 'react'



const Posts = () => {
const [posts,setPosts]=useState([])



const getPosts=async()=>{

    try {


       const res= await axios.get("https://jsonplaceholder.typicode.com/posts")
       
       setPosts(res.data)
       
    } catch (error) {
        console.log(error);
        
    }



}
const getPostComments=async( postId)=>{

    try {


       const res= await axios.get(`https://jsonplaceholder.typicode.com/post/${postId}/comments`)
       
     console.log(res.data);
     
       
    } catch (error) {
        console.log(error);
        
    }



}




useEffect(()=>{
getPosts()

},[])


 // Component implementation
  return (
   posts.map((element)=>{
   
    return(
       <div className="max-w-xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{element.title}</div>
      <p className="text-gray-700 text-base">
        {element.body}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        By Post Creator
      </span>
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-lg mb-2">Comments</div>
      <div className="p-4 border-b border-gray-200">
        <div className="font-semibold">Comment Author</div>
        <button onClick={()=>{
            getPostComments(element.id)
            //console.log(element.id);
            
        }}>This is a comment on the post.</button>
      </div>
    </div>
  </div>  
    )
   
   })
  )
}

export default Posts