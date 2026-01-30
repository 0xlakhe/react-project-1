import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({ obj }) => {
  function getTimeAgo(time) {
    const postDate = new Date(time);
    const today = new Date();

    const diffMilli = today - postDate;
    const diffDays = Math.floor(diffMilli / (1000 * 60 * 60 * 24));

    return `${diffDays} days ago`;
  }
  return (
    <div>
      <div className="parent w-100 h-102 bg-zinc-900 text-white rounded-xl">
        <div className="top flex justify-between text-white p-5 w-full">
          <img
            className="w-20 h-20 rounded-[50%]"
            src={
              obj.brandLogo ||
              "https://images.unsplash.com/photo-1769399287930-7cdddd98ef3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
          <div className="saves">
            <button className="flex opacity-50 hover:cursor-pointer hover:border-1 p-[4px] px-1 rounded-md hover:bg-gray-500">
              Save <Bookmark />
            </button>
          </div>
        </div>
        <div className="center p-4 flex flex-col gap-2">
          <div className="flex gap-1">
            <h3>{obj.companyName || "Google"}</h3>
            <h6 className="self-end pb-[2px] text-[13px] opacity-50">
              {getTimeAgo(obj.datePosted) || "3 days ago"}
            </h6>
          </div>
          <div className="text-[20px]">
            <h1>{obj.post || "Senior UI/UX Designer"}</h1>
          </div>
          <div className="tags flex gap-2 text-[13px] opacity-50">
            <h5 className="border-1 border-1 rounded-sm p-[3px] bg-gray-600">
              {obj.tag1 || "Part-time"}
            </h5>
            <h5 className="border-1 border-1 border-1 rounded-sm p-[3px] bg-gray-600">
              {obj.tag2 || "Senior Level"}
            </h5>
          </div>
        </div>
        <div className="bottom border-t-2 border-gray-100/50 flex justify-between mt-20 p-5">
          <div>
            <h1>{"$" + obj.salary + "/hr" || "$120/hr"}</h1>
            <h4 className="text-[13px] opacity-50">
              {obj.location || "Mumbai, India"}
            </h4>
          </div>
          <button className="border-1 px-3 rounded-xl hover:cursor-pointer hover:bg-green-900">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
