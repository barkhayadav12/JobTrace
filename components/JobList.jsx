import Link from "next/link"
import {HiPencilAlt} from 'react-icons/hi'
import RemoveDtn from "./RemoveBtn"

const getJobs=async()=>{
    try{
        const res=await fetch('http://localhost:3000/api/jobs',{
            cache:"no-store"
        }
        )
        if(!res.ok)
        {
            throw new Error("Failed to fetch jobs")
        }
    return res.json();
    }catch(err){
        console.log("Error loading jobs: ",err)
    }
}
export default async function JobList()
{
    const {jobs}=await getJobs();
    return(
        <>
<div className="relative overflow-x-auto px-4 ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Company Name
                </th>
                <th scope="col" className="px-6 py-3">
                    POSITION
                </th>
                <th scope="col" className="px-6 py-3">
                    WORK TYPE
                </th>
                <th scope="col" className="px-6 py-3">
                    LOCATION
                </th>
                <th scope="col" className="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                    EDIT
                </th>
                <th scope="col" className="px-6 py-3">
                    DELETE
                </th>
            </tr>
        </thead>
        {jobs.map((job)=>(
        <tbody key={company_name}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {job.company_name}
                </th>
                <td className="px-6 py-4">
                    {job.position}
                </td>
                <td className="px-6 py-4">
                    {job.work_type}
                </td>
                <td className="px-6 py-4">
                    {job.location}
                </td>
                <td className="px-6 py-4">
                    {job.status}
                </td>
                <td className="px-6 py-4">
                    <Link href={`/edit/job/${job._id}`}>
                        <HiPencilAlt size={24}/>
                    </Link>
                </td>
                <td className="px-6 py-4">
                    <RemoveDtn id={job._id}/>
                </td>
            </tr>
        </tbody>
        ))}
    </table>
</div>

        </>
    )
}