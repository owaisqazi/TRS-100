import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // ignore next internal files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // token cookie se lo (BEST PRACTICE)
  const token = request.cookies.get("token")?.value;

  // ❌ invalid / random route
  const validRoutes = [
    "/",
    "/post-property",
    "/profile",
    "/my-property",
    "/post-buy-requirement",
    "/property-matches",
    "/property-favourite",
  ];

  const isValid = validRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  if (!isValid) {
    // 🔐 logged in → dashboard
    if (token) {
      return NextResponse.redirect(new URL("/post-property", request.url));
    }

    // 🔓 not logged in → login
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
