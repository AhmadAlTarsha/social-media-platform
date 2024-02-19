import Link from 'next/link';
import React from 'react'


const HomeScreen=()=>{
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <p className="mb-4 text-lg text-gray-800">
Welcome to ThoughtSphere, where every post is a story, every comment a conversation, and every author a star. Dive into our experimental site that showcases the vibrant interplay of ideas, fostering a community of insight and interaction. Explore, engage, and add your voice to the rich tapestry of content that makes ThoughtSphere a unique space for connection and creativity. Join us on this journey of discovery and dialogue, where your perspective shapes the narrative.</p>
        <Link 
        
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" href={'/posts'}        >
          Enter
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
