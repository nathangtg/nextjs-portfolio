"use server";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "projects.json");
    const files = await fs.readFile(filePath, "utf-8");
    const projects = JSON.parse(files);

    return new NextResponse(JSON.stringify(projects), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
