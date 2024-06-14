import Job from "@/Models/job";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request,{params})
{
    const {id}=params;
    const {newCompanyName:company_name, newPosition: position, newWorkType: work_type, newLocation:location, newStatus:status}=await request.json();
    await connectMongoDB();
    await Job.findByIdAndUpdate(id,{company_name,position,work_type,location,status});
    return NextResponse.json({message:"Job updated"},{status:200})
}

export async function GET(request,{params})
{
    const {id}=params;
    await connectMongoDB();
    const job=await Job.findOne({_id:id});
    return NextResponse.json({job},{status:200});
}