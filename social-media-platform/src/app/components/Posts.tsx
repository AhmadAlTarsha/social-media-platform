import axios from 'axios'

import React, { useEffect, useState } from 'react'
// const axios=require("axios")

const getPostsFunction=async()=>{


   
}

// useEffect(()=>{
// getPostsFunction()


// })


const Posts = () => {


  return (
    <div className="max-w-xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Post Title</div>
      <p className="text-gray-700 text-base">
        This is the post description, providing details about the post content.
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
        <div>This is a comment on the post.</div>
      </div>
    </div>
  </div>
  )
}

export default Posts