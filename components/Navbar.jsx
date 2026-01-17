'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check authentication state
  useEffect(() => {
    const checkAuth = () => {
      const token = Cookies.get('auth-token');
      const authenticated = token === 'authenticated' || !!session;
      setIsAuthenticated(authenticated);
    };

    checkAuth();

    // Listen for cross-tab updates
    const handleStorageChange = () => checkAuth();
    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, [pathname, session, status]);

  // Logout function with toast
  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      await Promise.allSettled([
        // Sign out from NextAuth if session exists
        session ? signOut({ redirect: false }) : Promise.resolve(),

        // Clear cookie-based auth (optional API endpoint)
        fetch('/api/auth/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        }).catch(() => {}),

        // Clear auth cookies
        Cookies.remove('auth-token'),
        Cookies.remove('next-auth.session-token'),
        Cookies.remove('next-auth.csrf-token'),
        Cookies.remove('next-auth.callback-url')
      ]);

      setIsAuthenticated(false);

      toast.success('You have successfully logged out!'); // ✅ Show toast

      // Redirect
      if (pathname === '/' || pathname === '/login/client/client') {
        window.location.reload();
      } else {
        router.push('/');
        router.refresh();
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out. Please try again.');
      setIsAuthenticated(false);
      Cookies.remove('auth-token');
      router.push('/');
    } finally {
      setIsLoggingOut(false);
      setIsMobileMenuOpen(false);
    }
  };

  // Check active link
  const isActiveLink = (path) => {
    if (path === '/') return pathname === path;
    return pathname.startsWith(path);
  };

  // Navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/items', label: 'Items' },
    ...(isAuthenticated ? [{ href: '/add-item', label: 'Add Item' }] : []),
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center"
          >
            <span className="mr-2">🛍️</span>
            ShopHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActiveLink(link.href)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
                {isActiveLink(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isLoggingOut ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600 mr-2"></span>
                    Logging out...
                  </>
                ) : (
                  'Logout'
                )}
              </button>
            ) : (
              <Link
                href="/login/client"
                className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    isActiveLink(link.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="text-sm font-medium text-left px-3 py-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  {isLoggingOut ? 'Logging out...' : 'Logout'}
                </button>
              ) : (
                <Link
                  href="/login/client"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition-colors text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
