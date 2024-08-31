import Avatar from '@/components/Avatar'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <Layout>
            <h1 className="text-5xl mb-4 text-gray-400">  Notifications</h1>
            <Card noPadding={true}>
                <div className=' '>
                    <div className='flex gap-2 items-center border-b-gray-100 border-b p-4 '>
                       <Link href={"/profile"}>
                       <Avatar/>
                       </Link>
                        <div>
                            <Link href={""} className='font-semibold mr-1 hover:underline'>John Doe</Link> 
                            liked
                            <Link href={""} className='ml-1 text-socialBlue hover:underline'>your Photos</Link> 
                        </div>
                    </div>
                    
                    <div className='flex gap-2 items-center border-b-gray-100 border-b p-4 '>
                       <Link href={"/profile"}>
                       <Avatar/>
                       </Link>
                        <div>
                            <Link href={""} className='font-semibold mr-1 hover:underline'>John Doe</Link> 
                            liked
                            <Link href={""} className='ml-1 text-socialBlue hover:underline'>your Photos</Link> 
                        </div>
                    </div>
                    
                    <div className='flex gap-2 items-center border-b-gray-100 border-b p-4 '>
                       <Link href={"/profile"}>
                       <Avatar/>
                       </Link>
                        <div>
                            <Link href={""} className='font-semibold mr-1 hover:underline'>John Doe</Link> 
                            liked
                            <Link href={""} className='ml-1 text-socialBlue hover:underline'>your Photos</Link> 
                        </div>
                    </div>
                    
                </div>
            </Card>

        </Layout>

    )
}
