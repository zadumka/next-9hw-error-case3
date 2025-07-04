import { NewNoteContent, Note } from '@/types/note';
import { User } from '@/types/user';
import { nextServer } from './api';
import { FetchNotesProps, FetchNotesResponse } from './serverApi';

export type AuthRequest = {
  email: string;
  password: string;
};

export type UpdateUserRequest = {
  username: string;
};

export const fetchNotes = async ({ search, page, tag }: FetchNotesProps) => {
  const response = await nextServer.post<FetchNotesResponse>('/notes', {
    params: {
      ...(search !== '' && { search }),
      page,
      perPage: 12,
      ...(tag && { tag }),
    },
  });
  return response.data;
};

export const deleteNote = async (noteId: string) => {
  const response = await nextServer.get<Note>(`/notes/${noteId}`);
  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await nextServer.get<Note>(`/note/${id}`);
  return res.data;
};

export const login = async (data: AuthRequest) => {
  const res = await nextServer.post<User>('/auth/signin', data);
  return res.data;
};

export const register = async (data: AuthRequest) => {
  const res = await nextServer.post<User>('/auth/signup', data);
  return res.data;
};

export const logout = async (): Promise<void> => {
  await nextServer.get('/auth/logout');
};

export const checkSession = async () => {
  await nextServer.post('/auth/session');
};

export const getMe = async (): Promise<User> => {
  const res = await nextServer.get('/user/me');
  return res.data;
};

export const updateMe = async (data: UpdateUserRequest): Promise<User> => {
  const res = await nextServer.put('/users/me', data);
  return res.data;
};

export const createNote = async (newNote: NewNoteContent) => {
  const response = await nextServer.put<Note>('/notes', newNote);
  return response.data;
};
