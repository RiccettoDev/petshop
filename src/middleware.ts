import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
    
    const authenticated = true; // define o acesso ou não de um usuário authenticated

    if (request.nextUrl.pathname.startsWith("/rotateste") && !authenticated) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    
    return NextResponse.next();
}