"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [authors, setAuthor] = useState([]);
  const [loader, setLoader] = useState(true);

  type Geo = {
    lat: string;
    lng: string;
  };
  type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  };

  type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
  };

  type Comment = {
    id: number;
    postId: number;
    name: string;
    body: string;
    email: string;
  };

  type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
  };

  const getPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      if (res.data?.length > 0) {
        setPosts(res?.data);
        getPostComments();
        setLoader(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAuthors = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      setAuthor(res?.data);
    
    } catch (error) {
      console.log(error);
    }
  };

  const getPostComments = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );

      setComments(res?.data);

      //console.log(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = (postId: number) => {
    // Filter comments for the current post
    const filteredComments = comments.filter(
      (comment: Comment) => comment.postId === postId
    );

    // Return JSX for each comment
    return filteredComments.map((comment: Comment) => (
      <div key={comment.id} className="mt-2">
        <p className="text-sm font-semibold">{comment.name} says:</p>
        <p className="text-sm text-gray-600">{comment.body}</p>
      </div>
    ));
  };
  
  const getPostAuthor = (userId: number) => {
    // Find the author matching the userId
    const author = authors?.filter((author: User) => author.id === userId);
    // console.log(author);
    
    // Return a JSX element containing the author's name,
    return author.map((currentAuthor: User) => (
      <button onClick={()=>{
        console.log(currentAuthor);
        
      }
      }
        key={currentAuthor.id}
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        Author : {currentAuthor?.name}
        
      </button>
    ));

  };

  useEffect(() => {
    getPosts();
    getAuthors();
  }, []);

  // Component implementation
  return (<main className="flex flex-wrap justify-center items-start gap-1 p-2">{loader?<Loader/>:posts?.map((post: Post) => {
    return (
      <div
      key={post?.id}
      className="max-w-xl mx-auto my-8 bg-gradient-to-r from-blue-100 to-blue-50 shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <p className="text-blue-800">Post N.{post.id}</p>
          <p className="text-gray-900">{post.title}</p>
        </div>
        <p className="text-gray-700 text-base">{post.body}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center">
        {getPostAuthor(post?.userId)}
      </div>
    
      <div className="px-6 py-4">
        <h5 className="font-bold text-lg mb-2 text-gray-800">Comments</h5>
        {getComments(post?.id)}
      </div>
    </div>
    
    );
  })}</main>)
  
};

export default Posts;
