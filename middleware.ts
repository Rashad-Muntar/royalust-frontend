import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const TOKEN_REFRESH_INTERVAL = 14 * 60 * 1000; // Refresh token every 14 minutes

const refreshToken = async (refreshToken: string) => {
  try {
    const response = await fetch("http://localhost:4000/api/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Token refresh failed");
    }

    const data = await response.json();
    const { accessToken } = data;
    return accessToken;
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
  if ((!accessToken && !refresh) && (path !== "/auth/login" && path !== "/auth/signup")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  } else if (accessToken) {
    const TokenArray = accessToken?.split(" ");
    try {
      const exp: any = jwt.decode(TokenArray[1]);
      if (exp * 1000 - Date.now() <= TOKEN_REFRESH_INTERVAL) {
        const refreshTokenValue = cookies.get("refreshToken")?.value;
        if (refreshTokenValue) {
          const newAccessToken = await refreshToken(refreshTokenValue);
          cookies.set("accessToken", newAccessToken);
        }
      }
    } catch (error: any) {
      return error.message;
    }
  }
  if (
    accessToken &&
    refresh &&
    (path === "/auth/login" || path === "/auth/signup")
  ) {
    console.log(accessToken);
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/auth/login", "/auth/signup"],
};
