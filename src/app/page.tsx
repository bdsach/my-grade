/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState } from "react";
import { GradeTable } from "@/components/GradeTable";
import { Footer } from "@/components/Footer";
import { useMutation } from "@tanstack/react-query";
import { postData } from "@/lib/grade";
import { UserFormSchema } from "@/schema/UserForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EosIconsLoading } from "@/components/Loading";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";

export default function HomePage() {
  const [data, setData] = useState<GradeDetailProps | null>(null);
  const [showForm, setShowForm] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserFormSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: StudentPayload) => postData(payload),
    onSuccess(data) {
      setData(data.student_data);
      setShowForm(false);
    },
    onError() {
      notify();
    },
  });
  const onSubmit: SubmitHandler<UserForm> = (data) => {
    mutate(data);
  };

  const notify = () =>
    toast.error(
      <div className="font-ibm-plex-sans-thai">ข้อมูลไม่ถูกต้อง</div>,
      {
        autoClose: 3000,
      },
    );

  return (
    <div>
      <section className="bg-slate-50 dark:bg-slate-950">
        <div className="flex min-h-screen flex-col items-center justify-center px-10 lg:p-0">
          <div
            className={`mb-6 flex items-center text-4xl font-semibold text-slate-900`}
          >
            <img
              className={`${showForm ? "h-20 w-20 opacity-100" : "h-0 w-0 opacity-0"} `}
              src="/logo.svg"
              alt="logo"
            />
          </div>

          <div
            className={`w-full rounded-lg bg-white shadow transition-all duration-500 dark:bg-slate-900 ${showForm ? "md:max-w-xl" : "py-5 md:max-w-2xl"} `}
          >
            {showForm && (
              <div className="relative space-y-4 p-6 sm:p-8 md:space-y-6">
                <h1 className="pb-4 text-center font-ibm-plex-sans-thai text-2xl font-semibold text-slate-900 md:pb-8 md:text-4xl dark:text-slate-200">
                  ระบบตรวจสอบผลการเรียน
                </h1>
                <h2 className="text-center font-ibm-plex-sans-thai text-xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-300">
                  เข้าสู่ระบบ
                </h2>

                <form
                  className={`space-y-4 md:space-y-6`}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <label htmlFor="studentNo" className="label">
                      รหัสประจำตัวนักเรียน
                    </label>
                    <input
                      {...register("studentNo")}
                      className="input-field"
                      disabled={isPending}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="studentNo"
                      render={({ message }) => (
                        <p className="error-message">{message}</p>
                      )}
                    />
                  </div>
                  <div>
                    <label htmlFor="thaiId" className="label">
                      เลขประจำตัวประชาชน
                    </label>
                    <input
                      {...register("thaiId")}
                      className="input-field"
                      disabled={isPending}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="thaiId"
                      render={({ message }) => (
                        <p className="error-message">{message}</p>
                      )}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isPending}
                      className={`submit-button flex items-center justify-center gap-2 disabled:cursor-not-allowed`}
                    >
                      {isPending && <EosIconsLoading height={28} width={28} />}
                      <p>{isPending ? "กรุณารอสักครู่" : "ดูข้อมูล"}</p>
                    </button>
                  </div>
                </form>
              </div>
            )}
            <div className="px-6">
              {!showForm && data && (
                <>
                  <GradeTable data={data} />
                  <div className="mt-4 flex justify-center lg:mt-5">
                    <button
                      className="back-button"
                      onClick={() => {
                        reset();
                        setShowForm(true);
                      }}
                    >
                      กลับหน้าแรก
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </div>
  );
}
