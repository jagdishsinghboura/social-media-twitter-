"use client"

import Avatar from '@/components/Avatar';
import Card from '@/components/Card';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function page() {
    const pathname = usePathname();

    const isPosts = pathname.includes("posts")|| pathname==="/profile"
    const isAbout = pathname.includes("about")
    const isFriend = pathname.includes("friends")
    const isPhotos = pathname.includes("photos");

    const tabClasses = 'flex gap-1 py-1 px-4 items-center';
    const activeTabClasses ='flex gap-1 py-1 px-4 items-center  border-socialBlue border-b-4 textt-blue-400  font-bold text-socialBlue ';
    return (
        <Layout>
            <Card noPadding={true}>
                <div className='relative overflow-hidden rounded-md'>
                    <div className='h-36 overflow-hidden flex justify-center items-center'>
                        <img src='https://images.unsplash.com/photo-1720831992796-dfce4a96e885?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </div>
                    <div className='absolute top-24 left-4'>   
                              <Avatar size='lg' /></div>

                    <div className='pb-0 p-4 '>
                        <div className='ml-40'>
                            <h1 className=' text-3xl font-bold'> John Doe</h1>
                            <div className='text=gray-500 leading-'>
                                stackhom Swedon
                            </div>
                        </div>
                        <div className='mt-10 flex gap-0'>
                            <Link href={'/profile/posts'} className={isPosts?activeTabClasses:tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>Posts
                            </Link>
                            <Link href={'/profile/about'} className={isAbout?activeTabClasses:tabClasses}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>About
                            </Link>
                            <Link href={'/profile/friends'} className={isFriend?activeTabClasses:tabClasses}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>Friend
                            </Link>
                            <Link href={'/profile/photos'} className={isPhotos?activeTabClasses:tabClasses}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>Photos
                            </Link>
                        </div>
                    </div>
                </div>

            </Card>
            <PostCard/>

        </Layout>

    )
}
