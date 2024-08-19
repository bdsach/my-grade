import React from "react";
import { ToastContainer, toast } from 'react-toastify';

export const Footer = () => {
  return (
    <div className="mt-5">
      <p className="text-sm md:text-base text-slate-700 dark:text-slate-400 font-bai-jamjuree">
        โรงเรียนบ้านสอนไม่หยุด หมู่ที่ 10 บ้านสอน ตำบลกันเชียง อำเภอเชียงดอย
        จังหวัดเทพนคร
      </p>
      <ToastContainer/>
    </div>
  );
};
