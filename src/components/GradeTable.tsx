import React from "react";

export const GradeTable = ({ data }: { data: GradeDetailProps }) => {
  return (
    <>
      <div className="mb-2 flex flex-col gap-2 font-ibm-plex-sans-thai text-slate-700 dark:text-slate-300">
        <p className="text-lg">
          รหัส <span className="font-medium">{data.student_no}</span>
        </p>
        <p className="text-xl">
          ชื่อ{" "}
          <span className="font-medium">
            {data.first_name} {data.last_name}
          </span>
        </p>
      </div>

      <div className="relative overflow-x-auto rounded border font-bai-jamjuree text-slate-700 dark:border-slate-700 dark:text-slate-300">
        <table className="w-full text-left text-sm">
          <thead className="text-xl">
            <tr className="border-b dark:border-slate-500">
              <th
                scope="col"
                className="w-8/12 border-b bg-slate-50 px-6 pb-1 pt-1 font-ibm-plex-sans-thai dark:bg-slate-800"
              >
                วิชา
              </th>
              <th
                scope="col"
                className="border-b px-6 pb-1 pt-1 text-center font-ibm-plex-sans-thai dark:bg-slate-700"
              >
                เกรด
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-slate-200 text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800 dark:text-slate-300"
              >
                ไทย
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.thai_language}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800"
              >
                คณิตศาสตร์
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.mathematics}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800"
              >
                วิทยาศาสตร์
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.science}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800"
              >
                สังคม
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.social_studies}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800"
              >
                ประวัติศาสตร์
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.history}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800"
              >
                สุขศึกษา
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.health_physical_education}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800"
              >
                ศิลปะ
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.art_education}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800"
              >
                การงานอาชีพและเทคโนโลยี
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.career_technology_education}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800"
              >
                อังกฤษ
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.english_language}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800"
              >
                คอม
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.computer}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800"
              >
                นักธุรกิจรุ่นเยาว์
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.business}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:border-slate-400 dark:bg-slate-800"
              >
                เวทคณิต
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:border-slate-400 dark:bg-slate-700">
                {data.vedic_mathematics}
              </td>
            </tr>

            <tr className="text-base">
              <th
                scope="row"
                className="whitespace-nowrap border-b bg-slate-50 px-6 pb-1 pt-1 font-medium dark:bg-slate-800"
              >
                ต้านทุจริต
              </th>
              <td className="border-b px-6 pb-1 pt-1 text-center dark:bg-slate-700">
                {data.anti_corruption}
              </td>
            </tr>

            <tr className="border-t text-base dark:border-slate-500">
              <th
                scope="row"
                className="whitespace-nowrap bg-slate-50 px-6 pb-1 pt-1 text-center font-medium dark:bg-slate-800"
              >
                GPA
              </th>
              <td className="px-6 pb-1 pt-1 text-center dark:bg-slate-700">
                {data.gpa}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
