import connectMondoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await User.find();
  return NextResponse.json(res);
}

export async function POST(request: NextRequest) {
  const { name, email } = await request.json();
  await connectMondoDB();
  await User.create({name, email});
  return NextResponse.json({message: "User created"}, { status: 201});
}