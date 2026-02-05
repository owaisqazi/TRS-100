"use client";

import AuthModal from "@/components/auth/auth-modal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Page() {
  const [open, setOpen] = useState(true);

  const router = useRouter();
   const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      router.replace("/post-property");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1333] to-[#0d0a1a]">
      <AuthModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
