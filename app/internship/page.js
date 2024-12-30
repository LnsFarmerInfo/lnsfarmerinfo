import React from 'react'
import Internship from '../Components/Internship'
import User from '@/models/User'
import { connectDB } from '@/lib/mongodb'

await connectDB();
async function getCount(){
  const resp = await User.find()
  console.log(resp.length)
  return resp.length
}
const page = async () => {
  const count = await getCount()
  return (
    // <Internship count={count}/>
    <h1>PAGE NOT FOUND!</h1>
  )
}

export default page