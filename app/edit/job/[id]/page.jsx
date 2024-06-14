import EditForm from "@/components/EditJobForm";
const getjobById= async (id)=>{
    try{
        const res=await fetch(`http://localhost:3000/api/jobs/${id}`,{
            cache:"no-store",
        })
        if(!res.ok){
            throw new Error('Failed to fetch.')
        }
        return res.json();
    }catch(err){
        console.log(err);
    }
}
export default async function EditJob({params})
{
    const {id}=params;
    const {job}=await getjobById(id)
    const {company_name,position,work_type,location,status}=job
    return(
        <>
            <EditForm id={id} company_name={company_name} position={position} work_type={work_type} location={location} status={status} />
        </>
    )
}