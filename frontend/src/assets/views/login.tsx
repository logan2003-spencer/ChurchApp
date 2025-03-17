"use client";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center pb-96 mx-auto w-full bg-white bg-opacity-90 max-w-[480px]">
      <div className="self-stretch pt-5 w-full bg-white h-[37px]">
        <div className="flex justify-between items-center w-full">
          <div className="flex-1 pr-1.5 pl-4 text-lg text-black text-center">
            9:41
          </div>
          <div className="flex flex-1 justify-center items-center pr-4 pl-1.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bc1b8749f6f4f87731baf95df9da06dd4fe4b2aecbd48ea53d6b53caafa4548?placeholderIfAbsent=true"
              className="w-5 h-auto"
              alt="Icon 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9ef8a5c724e501badee0f6d2b82b1f37dbad1b4847c6e26f76221725c6410bd?placeholderIfAbsent=true"
              className="w-4 h-auto ml-2"
              alt="Icon 2"
            />
          </div>
        </div>
      </div>

      <div className="mt-48 ml-5 w-full max-w-[294px]">
        <label className="block text-base text-stone-900 mb-2">Name</label>
        <input
          type="text"
          className="px-4 py-3 bg-white border border-zinc-300 rounded-lg w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mt-14 ml-5 w-full max-w-[294px]">
        <label className="block text-base text-stone-900 mb-2">Password</label>
        <input
          type="password"
          className="px-4 py-3 bg-white border border-zinc-300 rounded-lg w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="mt-14 w-full max-w-[294px] px-4 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
