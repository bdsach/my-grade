import ReactQueryProviders from "./queryProvider";
import { IBM_Plex_Sans_Thai, Bai_Jamjuree } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/main.css";
import 'react-toastify/dist/ReactToastify.css';


const ibm_plex_sans_thai = IBM_Plex_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-ibm-plex-sans-thai",
  display: "swap",
});

const bai_jamjuree = Bai_Jamjuree({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-bai_jamjuree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ระบบตรวจสอบผลการเรียน",
  description:
    "โรงเรียนบ้านสอนไม่หยุด หมู่ที่ 10 บ้านสอน ตำบลกันเชียง อำเภอเชียงดอย จังหวัดเทพนคร",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${ibm_plex_sans_thai.variable} ${bai_jamjuree.variable}`}
    >
      <body>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
