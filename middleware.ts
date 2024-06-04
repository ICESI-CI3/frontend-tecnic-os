import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/profile', '/appointment-register'];
const authRoutes = ['/login', '/register'];
const technicianRestrictedRoutes = ['/technicianRegister'];

export default  function middleware(request: NextRequest){
    const currentUser = request.cookies.get("currentUser")?.value;
    const object = currentUser? JSON.parse(currentUser as string): null;

    if (technicianRestrictedRoutes.includes(request.nextUrl.pathname) &&
    ((object)?.role[0]==="technician")) {
        request.cookies.delete("currentUser");
        const  response = NextResponse.redirect(new URL("/", request.url));
        return response;
    }

    if (protectedRoutes.includes(request.nextUrl.pathname) && (!currentUser || Date.now() >= JSON.parse(currentUser).expiresAt)) {
        request.cookies.delete("currentUser");
        const  response = NextResponse.redirect(new URL("/login", request.url));
        return response;
    }
    if(authRoutes.includes(request.nextUrl.pathname) && currentUser) {
        const response = NextResponse.redirect(new URL("/profile", request.url));
        return response;
    }



}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  }