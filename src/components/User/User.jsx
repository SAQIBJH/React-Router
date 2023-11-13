import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className=" flex justify-center text-center m-4 bg-gray-700 text-white p-4 text-3xl mx-auto max-w-screen-xl">
      User : {userId}
    </div>
  );
}

export default User
