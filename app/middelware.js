import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuthenticated = req.cookies.get("isAuthenticated");

  if (!isAuthenticated && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/forside", "/", "/login", "/brandpage"],
};
