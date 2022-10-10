import React, { useEffect, useState } from 'react'


export default function BlogCard({ blog }) {

    const [author, setAuthor] = useState([])
    const [loading, setLoading] = useState()


    useEffect(() => {
        async function fetchUser() {
            setLoading(true)
            fetch('https://api.hashnode.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                    {
                        post(slug: "${blog.slug}"   , hostname:"abbhishek.hashnode.dev") {
                          author {
                            username
                            name
                            tagline
                            isEvangelist
                            dateJoined
                            numFollowing
                            numFollowers
                            isDeactivated
                            location
                            photo
                            coverImage
                            numPosts
                            numReactions
                            blogHandle
                            publicationDomain
                          }
                        }
                      }
                    `
                })
            })
                .then(r => r.json())
                .then(data => {
                    // console.log(data)
                    setAuthor(data.data.post.author)
                    setLoading(false)
                })
        }
        fetchUser()
    }, [])



    return (
        <>
            <div
                className="border-2 border-black dark:border-white rounded-md p-2 m-2">
                <div className='flex lg:flex-row flex-col gap-2'>
                    <div className='basis-1/2'>
                        <img src={blog.coverImage} alt="blog-pic" className=' w-full border aspect-video' />
                    </div>
                    <div className='text-start basis-1/2'>
                        <h1 className="text-black text-start dark:text-white text-3xl font-mono font-bold  p-2">{blog.title}</h1>
                        <hr />
                        <p className="text-black dark:text-white p-5">{blog.brief}</p>

                        <div className='flex lg:flex-row flex-col justify-around items-center gap-3 lg:container py-auto'>
                            <div className='flex flex-row justify-items-start items-center gap-2'>
                                <img src={author.photo} alt="author-pic" className='rounded-full w-16 h-16' />
                                <p className="text-black dark:text-white text-start font-mono">{author.name}</p>
                            </div>
                            <div className='text-center lg:p-0 pt-5 pb-2'>
                                <button
                                    onClick={
                                        () => {
                                            window.open(`https://abbhishek.hashnode.dev/${blog.slug}`)
                                        }
                                    }
                                    className='hover:animate-pulse font-mono text-center bg-blue-500  text-white p-2 rounded-sm hover:rounded-lg'>
                                    Read The Blog
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}