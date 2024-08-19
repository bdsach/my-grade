export const postData = async (payload: StudentPayload) => {
  try {
    const response = await fetch("/api/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentNo : payload.studentNo,
        thaiId: payload.thaiId,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
