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
                onClick={
                    () => {
                        window.open(`https://abbhishek.hashnode.dev/${blog.slug}`)
                    }
                }
                className="border-2 border-black dark:border-white rounded-md p-2 m-2 cursor-pointer">
                <div className='flex lg:flex-row flex-col gap-2'>
                    <div className='basis-1/2'>
                        <img src={blog.coverImage} alt="blog-pic" />
                    </div>
                    <div className='text-start basis-1/2'>
                        <h1 className="text-black text-center dark:text-white text-2xl font-mono font-bold  pb-2">{blog.title}</h1>
                        <hr />
                        <p className="text-black dark:text-white ">{blog.brief}</p>
                        <div className='flex justify-start'>
                            <div className='flex flex-row gap-2'>
                                <img src={author.photo} alt="author-pic" className='rounded-full h-8 w-8' />
                                <p className="text-black dark:text-white ">{author.name}</p>
                            </div>
                        </div>

                        {/* <div className='flex flex-col gap-2 justify-center text-center'>
                            <div >
                                <p className="text-black dark:text-white ">Listen Blog In Audio</p>
                            </div>
                            <div className=' justify-center flex '>
                                <audio src={blog?.audioUrls?.male ? blog.audioUrls.male : blog.audioUrls.female}
                                    controls
                                    className='w-1/2' />
                            </div>
                        </div> */}
                        <p className="text-black dark:text-white text-start">Total Reaction  : {blog.totalReactions}</p>
                    </div>
                </div>
            </div>
        </>
    )
}