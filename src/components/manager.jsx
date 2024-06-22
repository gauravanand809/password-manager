import React from 'react';

const Manager = () => {
  return (
    <div className="relative inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center text-green-700">
          &lt;Pass<span className=''>Manager</span>&gt;
        </h1>
        <p className="text-green-900 text-lg text-center">Your own Password Manager</p>
        <div className="flex flex-col items-center gap-8">
          <input className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="username" placeholder="Username" />
          <input className="rounded-full border border-green-500 w-full p-4 py-1" type="password" name="password" placeholder="Password" />
          <button className="flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-4 py-2 w-fit">
            <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manager;
