"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditForm({
  id,
  company_name,
  position,
  work_type,
  location,
  status,
}) {
  const [newCompanyName, setNewCompanyName] = useState(company_name);
  const [newPosition, setNewPosition] = useState(position);
  const [newWorkType, setNewWorkType] = useState(work_type);
  const [newLocation, setNewLocation] = useState(location);
  const [newStatus, setNewStatus] = useState(status);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newCompanyName,
          newPosition,
          newWorkType,
          newLocation,
          newStatus,
        }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to update");
      }
    } catch (error) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} class="max-w-sm mx-auto changeOutline">
        <div class="mb-2 mt-3">
          <label
            for="username-success"
            class="block mb-1 text-sm font-medium text-black-700 dark:text-white-500"
          >
            Company Name
          </label>
          <input
            onChange={(e) => setNewCompanyName(e.target.value)}
            value={newCompanyName}
            type="text"
            id="username-success"
            class="bg-green-50 border border-green-500 text-white-900 dark:text-white-400  dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500"
          />
        </div>
        <div class="mb-2">
          <label
            for="username-success"
            class="block mb-1 text-sm font-medium text-black-700 dark:text-white-500"
          >
            Position
          </label>
          <input
            onChange={(e) => setNewPosition(e.target.value)}
            value={newPosition}
            type="text"
            id="username-success"
            class="bg-green-50 border border-green-500 text-white-900 dark:text-white-400  dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500"
          />
        </div>
        <div class="mb-2">
          <label
            for="username-success"
            class="block mb-1 text-sm font-medium text-black-700 dark:text-white-500"
          >
            Work Type
          </label>
          <input
            onChange={(e) => setNewWorkType(e.target.value)}
            value={newWorkType}
            type="text"
            id="username-success"
            class="bg-green-50 border border-green-500 text-white-900 dark:text-white-400  dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500"
          />
        </div>
        <div class="mb-2">
          <label
            for="username-success"
            class="block mb-1 text-sm font-medium text-black-700 dark:text-white-500"
          >
            Location
          </label>
          <input
            onChange={(e) => setNewLocation(e.target.value)}
            value={newLocation}
            type="text"
            id="username-success"
            class="bg-green-50 border border-green-500 text-white-900 dark:text-white-400  dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500"
          />
        </div>
        <div class="mb-2">
          <label
            for="username-success"
            class="block mb-1 text-sm font-medium text-black-700 dark:text-white-500"
          >
            Status
          </label>
          <input
            onChange={(e) => setNewStatus(e.target.value)}
            value={newStatus}
            type="text"
            id="username-success"
            class="bg-green-50 border border-green-500 text-white-900 dark:text-white-400  dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500"
          />
        </div>
        <button
          type="submit"
          class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          UPDATE
        </button>
        <div></div>
      </form>
    </>
  );
}
