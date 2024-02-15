import axios from 'axios'
import React from 'react'
// const axios=require("axios")




const Posts = () => {
  const res= axios.get("https://jsonplaceholder.typicode.com/posts")

  return (
    <div>Posts</div>
  )
}

export default Posts