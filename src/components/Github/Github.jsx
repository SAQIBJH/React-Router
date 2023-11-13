import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
  return (
    <div className=" flex justify-center text-center m-4 bg-gray-700 text-white p-4 text-3xl mx-auto max-w-screen-xl">
          Github : {data.name}
    </div>
  );
}

export default Github;

export const GithubLoaderInfo = async() => {
    const response = await fetch("https://api.github.com/users/SAQIBJH")
    return response.json()
}
