import { NextResponse } from 'next/server';

export function middleware(request) {
  const authToken = request.cookies.get('auth-token');
  const nextAuthSession = request.cookies.get('next-auth.session-token') || 
                          request.cookies.get('__Secure-next-auth.session-token');
  
  // Check both cookie-based auth and NextAuth session
  const isAuthenticated = authToken?.value === 'authenticated' || !!nextAuthSession;
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
