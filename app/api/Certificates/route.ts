import { promises as fs } from "fs";

export async function GET() {
  try {
    const filePath = process.cwd() + "/data/certificates.json";
    const files = await fs.readFile(filePath, "utf-8");
    const certificates = JSON.parse(files);

    return new Response(JSON.stringify(certificates), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
