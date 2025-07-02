import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { type NextRequest, NextResponse } from "next/server";

export default async function Middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (['/login', '/register'].includes(req.nextUrl.pathname)) {
    if (session) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|assets|static).*)",
    "/dashboard/:path*",
    "/login",
    "/register",
  ],
};
