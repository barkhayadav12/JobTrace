import Link from "next/link"
import Guide from "./Guide"
export default function Navbar()
{
    return(
        <>
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
        <Link className="text-white font-bold" href={"/"}>JobTracker</Link>
        <Link className="bg-white p-2" href={"/addnewjob"}>Add Job</Link>
        </nav>
        <Guide/>
        </>
    )
}