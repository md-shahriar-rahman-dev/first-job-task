import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token');
  const isAuthenticated = authToken?.value === 'authenticated';
  const { pathname } = request.nextUrl;

  // Protect /add-item route
  if (pathname.startsWith('/add-item') && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-item/:path*']
};

