import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // agar already "/" hai → kuch mat karo
  if (pathname === "/") {
    return NextResponse.next();
  }

  // baqi sab ko "/" pe bhej do
  return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
