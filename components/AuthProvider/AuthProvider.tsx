'use client';
import { checkSession, getMe } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const fetchUser = async () => {
      checkSession()
        .then(async () => {
          const user = await getMe();
          if (user) setUser(user);
        })
        .catch(() => {
          console.log('Authentication failed');
        });
    };
    fetchUser();
  }, [setUser]);

  return <div>Loading...</div>;
};

export default AuthProvider;
