export async function GET() {
  return Response.json({ mes: "hello GET" });
}

export async function POST(request: Request) {
  const { studentNo, thaiId } = await request.json();

  const resGoogle = await fetch(String(process.env.NEXT_PUBLIC_SHEET_API_URL));

  if (!resGoogle.ok) {
    throw new Error(`Failed to fetch: ${resGoogle.statusText}`);
  }

  const { data } = await resGoogle.json();

  if (data && Array.isArray(data)) {
    const studentData = data.filter(
      (item) =>
        String(item.student_no) === studentNo &&
        String(item.thai_id) === thaiId,
    );

    if (studentData.length) {
      return Response.json(
        { student_data: studentData[0] },
        {
          status: 200,
        },
      );
    } else {
      return Response.json(
        { message: "not found" },
        {
          status: 404,
        },
      );
    }
  }
}
