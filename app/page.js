"use client"; // in next js we have to tell where were working actually
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(maintask);
  };

  let renderTask = (
    <h2 className="text-center text-zinc-500 m-7 text-xl">
      No Tasks Available
    </h2>
  );
  if (maintask.length > 0) {
    renderTask = maintask.map((task, index) => {
      return (
        <li>
          <div className="flex items-center justify-around text-xl m-3 bg-zinc-700 p-3 rounded-xl ">
            <h5 className="font-semibold text-zinc-300">{task.title}</h5>
            <h6 className="font-semibold text-zinc-300">{task.desc}</h6>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="bg-zinc-900 max-w-full min-h-screen overflow-hidden	">
      <h1 className="bg-zinc-800 text-xl text-gray-300 p-5 text-center font-semibold rounded-2xl">
        TODO-List By <span className="italic text-gray-400">Vikranth</span>
      </h1>
      <div className="p-2 flex items-center justify-around w-screen">
        <form onSubmit={submithandler}>
          <input
            type="text"
            placeholder="Enter Your Task"
            className="w-[25vw] px-3 py-3 border-2 border-zinc-200 text-xl m-5 text-zinc-300 bg-zinc-800 rounded-xl"
            value={title}
            onChange={(e) => {
              settitle(e.target.value); // Two Way Binding process
            }}
          ></input>
          <input
            type="text"
            placeholder="Enter The Description"
            className="w-[25vw] px-9 py-3 border-2 border-zinc-200 text-xl m-5 text-zinc-300 bg-zinc-800 rounded-xl"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          ></input>
          <button className="px-3 py-2 border-2 border-green-700 text-sm m-5 text-zinc-300 bg-zinc-800 rounded-xl">
            Add Task
          </button>
        </form>
      </div>
      <div className="border-t-[1.2px] border-zinc-600">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default page;
