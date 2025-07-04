import { create } from 'zustand';
import { User } from '@/types/user';

type AuthStore = {
  user: User | null;
  setUser: (user: User) => void;
  clearIsAuthenticated: () => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  setUser: (user: User) => set(() => ({ user })),
  clearIsAuthenticated: () => set(() => ({ user: null })),
}));
