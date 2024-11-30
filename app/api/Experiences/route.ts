"use server";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = process.cwd() + "/data/experiences.json";
    const files = await fs.readFile(filePath, "utf-8");
    const experiences = JSON.parse(files);

    console.log(experiences); // Logging experiences data

    return new NextResponse(JSON.stringify(experiences), {
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
