"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [authors, setAuthor] = useState([]);

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
      <span
        key={currentAuthor.id}
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        Author : {currentAuthor?.name}
      </span>
    ));

  };

  useEffect(() => {
    getPosts();
    getAuthors();
  }, []);

  // Component implementation
  return posts.map((post: Post) => {
    return (
      <div
        key={post?.id}
        className="max-w-xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <p> post N.{post.id}</p>
            {post.title}
          </div>
          <p className="text-gray-700 text-base">{post.body}</p>
        </div>
        <div className="px-6 pt-4 pb-2">{getPostAuthor(post?.userId)}</div>

        <div className="px-6 py-4">
          <h5 className="font-bold text-lg mb-2">Comments</h5>
          {getComments(post?.id)}
        </div>
      </div>
    );
  });
};

export default Posts;
