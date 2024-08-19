"use server";

import { z } from "zod";

const schema = z.object({
  studentNo: z
    .string({
      message: "โปรดระบุรหัสประจำตัวนักเรียน",
    })
    .min(4),
  thaiId: z
    .string({
      message: "โปรดระบุเลขประจำตัวประชาชน",
    })
    .min(13, "โปรดระบุเลขประจำตัวประชาชน 13 หลัก")
    .max(13, "โปรดระบุเลขประจำตัวประชาชน 13 หลัก"),
});

export default async function createUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("studentNo"),
    thaiId: formData.get("thaiId"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Mutate data
}
