import React, { useState, useEffect } from 'react'
import BlogCard from "../components/BlogCard.jsx"

import Blog_Data from './../data/abbhishek-stories-copy.json'

function BlogCardLoading() {
  return (
    <>Loading</>
  )
}
function Blogs() {

  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setBlogs(Blog_Data.posts)
    setLoading(false)
  }, [])

  return (
    <>
      <div className='dark:bg-[#182232]  min-h-screen'>

        <div className='pt-8 text-center container mx-auto  '>
          <h1 className='lg:text-6xl text-2xl dark:text-white font-mono text-center text-black' >Blogs</h1>
          <p className='text-black dark:text-white text-center text-base'>Here are some of the blogs written by our members</p>

          <div className='flex flex-row justify-end'>

            <input type="text" placeholder="Search Your Blogs" className="border-2 border-black dark:border-white rounded-md p-2 text-center" onChange={(e) => setSearch(e.target.value)} />

          </div>

          <div className="flex flex-col  gap-2">
            {loading ? <BlogCardLoading /> : blogs.filter((blog) => {
              if (search == "") {
                return blog
              } else if (blog.title.toLowerCase().includes(search.toLowerCase())) {
                console.log(blog.title)
                return blog
              }
            }).map((blog) => {
              return (
                <BlogCard blog={blog} />

              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs