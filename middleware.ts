import { NextRequest, NextResponse } from "next/server";
import Cookies from "js-cookie";

const TOKEN_REFRESH_INTERVAL = 14 * 60 * 1000; // Refresh token every 14 minutes

const refreshToken = async (email: string) => {
  try {
    const response = await fetch("http://localhost:4000/api/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Token refresh failed");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Token refresh failed:", error);
    throw new Error("Token refresh failed");
  }
};

export const middleware = async (req: NextRequest) => {
  const { cookies } = req;
  const path = req.nextUrl.pathname;
  let accessToken = cookies.get("accessToken")?.value;
  let refresh = cookies.get("refreshToken")?.value;
  if (
    refresh &&
    accessToken &&
    (path === "/auth/login" || path === "/auth/signup")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (
    !accessToken &&
    !refresh &&
    path !== "/auth/login" &&
    path !== "/auth/signup"
  ) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  } else
    try {
      const refreshTokenValue = cookies.get("refreshToken")?.value;
      const email: any = cookies.get("email")?.value;
      if (refreshTokenValue) {
        const newAccessToken = await refreshToken(email);
        cookies.set("accessToken", newAccessToken);
      }
    } catch (error: any) {
      return error.message;
    }
  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/auth/login", "/auth/signup"],
};
