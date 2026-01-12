import { cookies } from 'next/headers';

// Mock credentials
export const MOCK_CREDENTIALS = {
  email: 'admin@example.com',
  password: 'admin123'
};

export async function login(email: string, password: string): Promise<boolean> {
  if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
    const cookieStore = await cookies();
    cookieStore.set('auth-token', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });
    return true;
  }
  return false;
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('auth-token');
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token');
  return token?.value === 'authenticated';
}

