"use client";
import { HoverEffect } from "./HoverEffect";
import { useState } from "react";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { skills } from "./Data";
import AllSkills from "./Framer";


export default function Skills() {
  const [slicedSkills, setSlicedSkills] = useState(skills.slice(0, 12));

  return (
    <>
      <div id="skills" className="h-10" />
      <AllSkills/>
      <div className="sm:max-w-5xl mx-auto px-1 sm:px-8 py-10 mt-10">
        <HoverEffect items={slicedSkills} />
        <div className="flex justify-center">
          <button
            className="bg-green-500 px-3 py-1 rounded transition hover:bg-green-700 font-semibold tracking-tight flex gap-3 items-center "
            onClick={() => {
              if (slicedSkills.length === skills.length) {
                setSlicedSkills(skills.slice(0, 12));
              } else {
                setSlicedSkills(skills);
              }
            }}
          >
            {slicedSkills.length === skills.length ? (
              <ShowLess />
            ) : (
              <ShowMore />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

function ShowLess() {
  return (
    <>
      <span>Show Less</span>
      <FaAnglesUp />
    </>
  );
}

function ShowMore() {
  return (
    <>
      <span>Show More</span>
      <FaAnglesDown />
    </>
  );
}