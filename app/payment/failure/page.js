'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();
  useEffect(() => {
    
    setTimeout(function() {
        router.push('/')
    },10000)
})
  return (
    <div>
        <h1 className='text-3xl font-semibold'>
            Your payment was unsuccessfull.
            incase of query, please reach out to : +91 7727944259
            redirecting in 10seconds.....
        </h1>
    </div>
  )
}

export default page