import data from "../lib/api";

export async function GET(request: Request) {
  return Response.json(data);
}
