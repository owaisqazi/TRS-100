"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "@/redux/authSlice";
import { useSearchParams } from "next/navigation";

export default function ClientAuthWrapper({ children }) {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const queryToken = searchParams.get("token");
    const queryUser = searchParams.get("user");

    
    if (queryToken && queryUser) {
      try {
        const parsedUser = JSON.parse(decodeURIComponent(queryUser));
        dispatch(setToken(queryToken));
        dispatch(setUser(parsedUser));
      } catch (err) {
        console.error("Failed to parse user from query", err);
      }
    }

    // after dispatch, allow children to render
    setReady(true);
  }, [dispatch, searchParams]);

  if (!ready) return null; // wait for dispatch to finish

  return <>{children}</>;
}
