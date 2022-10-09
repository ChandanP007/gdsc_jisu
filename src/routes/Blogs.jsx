import React, { useState, useEffect, lazy, Suspense } from 'react'

const BlogCard = lazy(() => import("../components/BlogCard"))

import Loader from '../components/Loader'


export default function Blogs() {

  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState()
  const [search, setSearch] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch('../data/abbhishek-stories-copy.json')
      .then(response => response.json()).then(blogs => {
        setBlogs(blogs.data)
        setLoading(false)
      }).catch(error => {
        console.log(error)
      }
      );
  }, [])

  return (
    <>
      <div className='dark:bg-[#182232]  min-h-screen'>
        <div className='pt-8 text-center container lg:mx-auto  mx-3 '>
          <h1 className='lg:text-6xl text-2xl dark:text-white font-mono Core--Team'>Blogs</h1>
          <p className='dark:text-white font-extralight font-mono pt-5'>
            Here are some of blogs Written by our team members :)
          </p>
          <div className='flex flex-row justify-center px-9 pb-10'>
            <input type="text" placeholder="Search Your Blogs" className=" w-full border-2 border-black dark:border-white rounded-md p-2  text-center" onChange={(e) => setSearch(e.target.value)} />
          </div>
          <Suspense fallback={<Loader />}>
            <div className="flex flex-col  gap-2">
              {loading ? <Loader /> : blogs.filter((blog) => {
                if (search == "") {
                  return blog
                } else if (blog.title.toLowerCase().includes(search.toLowerCase())) {
                  console.log(blog.title)
                  return blog
                }
              }).map((blog) => {
                return (
                  <BlogCard blog={blog} key={blog._id} />
                )
              })}
            </div>
          </Suspense>
        </div>
      </div>
    </>
  )
}

