"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
export default function RemoveDtn({ id }) {
    const router=useRouter();
  const removeJob = async () => {
    const confirmed = confirm("Are you sure you want to delete this job?");
    if (confirmed) {
       const res=await fetch(`http://localhost:3000/api/jobs?id=${id}`, {
        method: "DELETE",
      });
      if(res.ok){
      router.refresh();
      }
    }
  };
  return (
    <button onClick={removeJob} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
