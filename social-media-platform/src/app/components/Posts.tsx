 "use client"
import axios from 'axios'
import React, { useEffect, useState }   from 'react'



const Posts = () => {
const [posts,setPosts]=useState([])
const [comments,setComments]=useState([])
const [authors,setAuthor]=useState([])



const getPosts=async()=>{

    try {


       const res= await axios.get("https://jsonplaceholder.typicode.com/posts")
       
       setPosts(res?.data)
    
       
    } catch (error) {
        console.log(error);
        
    }



}
const getAuthors=async()=>{

    try {


       const res= await axios.get("https://jsonplaceholder.typicode.com/users")
       
       setAuthor(res?.data)
    // console.log(res?.data);
    
       
    } catch (error) {
        console.log(error);
        
    }



}
const getPostComments=async( )=>{

    try {


       const res= await axios.get(`https://jsonplaceholder.typicode.com/comments`)
       
setComments(res?.data)

     //console.log(res?.data);
     
       
    } catch (error) {
        console.log(error);
        
    }



}





const getComment = (postId) => {
   
    
    // Filter comments for the current post
    const filteredComments = comments.filter(comment => comment.postId === postId);


    // Return JSX for each comment
    return filteredComments.map((comment) => (
        <div key={comment.id} className="mt-2">
            <p className="text-sm font-semibold">{comment.name} says:</p>
            <p className="text-sm text-gray-600">{comment.body}</p>
        </div>
    ));
};
const getPostAuthor = (userId) => {
   
    console.log(userId);
    
    // Filter comments for the current post
    // const filteredAuthor = authors.filter(author => posts.userId === author.userId);



    // Return JSX for each comment
    // return filteredComments.map((comment) => (
    //     <div key={comment.id} className="mt-2">
    //         <p className="text-sm font-semibold">{comment.name} says:</p>
    //         <p className="text-sm text-gray-600">{comment.body}</p>
    //     </div>
    // ));
};


useEffect(()=>{
    
    
getPosts()
getPostComments()
getAuthors()
},[])


 // Component implementation
  return (
   posts.map((element)=>{
   
    return(
       <div key={element.id} className="max-w-xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2"><p> post N.{element.id}</p>
        {element.title}</div>
      <p className="text-gray-700 text-base">
        {element.body}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        By Post Creator
      </span>
      {
      getPostAuthor(element?.userId)}

    </div>
    
    <div className="px-6 py-4">
      <h5 className="font-bold text-lg mb-2">Comments</h5>
      {
      
      
      getComment(element?.id)}
    

      
        
      </div>
    
    </div>
   
    )
   
   })
  )
}

export default Posts