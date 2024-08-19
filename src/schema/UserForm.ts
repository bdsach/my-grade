import { z } from "zod";

export const UserFormSchema = z.object({
  studentNo: z
    .string({
      message: "โปรดระบุรหัสประจำตัวนักเรียน",
    })
    .min(4, "โปรดระบุรหัสประจำตัวนักเรียน 4 หลัก"),
  thaiId: z
    .string({
      message: "โปรดระบุเลขประจำตัวประชาชน",
    })
    .min(13, "โปรดระบุเลขประจำตัวประชาชน 13 หลัก")
    .max(13, "โปรดระบุเลขประจำตัวประชาชน 13 หลัก"),
});
