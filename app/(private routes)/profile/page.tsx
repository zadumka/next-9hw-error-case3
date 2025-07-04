import { getMe } from '@/lib/api/serverApi';
import css from './page.module.css';
import Image from 'next/image';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile | NoteHub',
  description: 'View your profile information and manage your account on NoteHub.',
  openGraph: {
    title: 'Profile | NoteHub',
    description: 'View your profile information and manage your account on NoteHub.',
    url: `https://react-v3-hw-solutions.vercel.app/profile`,
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub - Manage your profile and account settings.',
      },
    ],
  },
};

export default async function Profile() {
  const data = await getMe();

  return (
    <>
      {data && (
        <main className={css.mainContent}>
          <div className={css.profileCard}>
            <div className={css.header}>
              <h1 className={css.formTitle}>Profile Page</h1>
            </div>
            <div className={css.avatarWrapper}>
              <Image
                src={data.avatar}
                alt="User Avatar"
                width={120}
                height={120}
                className={css.avatar}
              />
            </div>
            <div className={css.profileInfo}>
              <p>Profile information will be displayed here</p>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
