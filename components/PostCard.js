"use client"
import React, { useState } from 'react'
import Card from './Card'
import Avatar from './Avatar'
import Link from 'next/link'
import ClickOutHandler from 'react-clickout-handler'

export default function PostCard() {
    const [dropDownOpen, setdropDownOpen] = useState(false)
    return (
        <Card>
            <div className='flex gap-3 '>
                <div className=''>
                    <Link href={"/profile"}>
                        <span className='cursor-pointer'>
                            <Avatar />
                        </span>
                    </Link>
                </div>
                <div className=' '>
                    <p> <Link href={"/profile"}><span className="mr-2 font-semibold hover:underline cursor-pointer ">John Doe</span></Link> shared  a <a className="text-socialBlue"> album</a> </p>
                    <p className="text-gray-500 text-sm "> 2 hours ago</p>

                </div>
                <div className=' pb-2 grow  flex justify-end'>
                    <button className='text-gray-500  place-self-end  pr-2' onClick={() => setdropDownOpen(!dropDownOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>

                    </button>
                    <ClickOutHandler onClickOut={() => { dropDownOpen && setdropDownOpen(true) }}>
                        <div className='relative'>
                            {dropDownOpen && (
                                <div className='absolute -right-6 w-52 border-gray-100 bg-white shadow-md shadow-gray-300 p-3 rounded-md mt-12'>
                                    <a href='' className="flex py-2 gap px-2 flex gap-3 py-1 my-2 hover:bg-socialBlue hover:text-white -mx-4 px-4  rounded-md  transition-all hover:scale-110 hover:shadow-md shadow-gray-300"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                        save post</a>
                                    <a href='' className="flex py-2 gap px-2 flex gap-3 py-1 my-2 hover:bg-socialBlue hover:text-white -mx-4 px-4  rounded-md  transition-all hover:scale-110 hover:shadow-md shadow-gray-300"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                        Delete</a>
                                    <a href='' className="flex py-2 gap px-2 flex gap-3 py-1 my-2 hover:bg-socialBlue hover:text-white -mx-4 px-4  rounded-md  transition-all hover:scale-110 hover:shadow-md shadow-gray-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                        Hide notificationd</a>
                                    <a href='' className="flex py-2 gap px-2 flex gap-3 py-1 my-2 hover:bg-socialBlue hover:text-white -mx-4 px-4  rounded-md  transition-all hover:scale-110 hover:shadow-md shadow-gray-300"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                    </svg>
                                        Turn notification</a>
                                    <a href='' className="flex py-2 gap px-2 flex gap-3 py-1 my-2 hover:bg-socialBlue hover:text-white -mx-4 px-4  rounded-md  transition-all hover:scale-110 hover:shadow-md shadow-gray-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                    </svg>
                                        Report</a>
                                </div>
                            )}
                        </div>

                    </ClickOutHandler>
                </div>
            </div>
            <div>
                <p className='my-3 text-sm '>lorem jfdshogahfdsguoiahdsiasjhdiosjgigjsda s ioidsajhgoiasdh gsadgosadjhoghsuodighasdoihg oaihgshdogsa</p>
                <div className='rounded-md overflow-hidden'>

                    <img src='https://plus.unsplash.com/premium_photo-1720760948879-d10510c7049c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                </div>

            </div>
            <div className='mt-5 flex gap-8'>
                <button className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    72
                </button>
                <button className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>

                    11
                </button>
                <button className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                    </svg>

                    4
                </button>

            </div>
            <div className='flex mt-3 gap-3 '>
                <div>
                    <Avatar />
                </div>
                <div className='border grow rounded-full  relative'>
                    <textarea className='p-3 px-4 h-12 overflow-hidden
                    rounded-full block w-full ' placeholder='Leave  a comment' />
                    <button className='absolute top-3 right-3 text-grey-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </Card>
    )
}
