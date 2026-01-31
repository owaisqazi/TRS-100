"use client";

import AuthModal from "@/components/auth/auth-modal";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1333] to-[#0d0a1a]">
      <AuthModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
