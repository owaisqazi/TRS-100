"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SubHeader from "./post-property/sub-header/SubHeader";

export default function PropertyLayout({ children }) {
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.replace("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (!token) return null;

  return (
    <>
      <SubHeader />
      {children}
    </>
  );
}
