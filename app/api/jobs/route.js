import Job from "@/Models/job";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request)
{
    const {company_name,position,work_type,location,status}=await request.json();
    await connectMongoDB();
    await Job.create({company_name,position,work_type,location,status});
    return NextResponse.json({message:"Job created"},{status:201})
}

export async function GET(){
    await connectMongoDB();
    const jobs=await Job.find();
    return NextResponse.json({jobs});
}

export async function DELETE(request){
    const id=request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Job.findByIdAndDelete(id)
    return NextResponse.json({message:"Job is deleted"},{status:200})
}