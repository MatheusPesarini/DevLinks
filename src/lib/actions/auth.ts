'use server';

import { cookies } from 'next/headers';
import { signUpSchema } from '../definitions';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '../supabase/action';
import { redirect } from 'next/navigation';

export async function signUp(formData: FormData) {
  const supabase = createClient();

  const validatedFields = signUpSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.errors[0].message,
    };
  }

  const { username, email, password } = validatedFields.data;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      }
    }
  })

  if (error) {
    return {
      error: error.message,
    }
  }

  redirect('/login');
}

export async function signIn(formData: FormData) {
  const supabase = createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: 'Email ou senha incorretos'
    };
  }

  redirect('/dashboard');
}

export async function signOut() {
  const cookieStore = cookies();
  const supabase = createServerActionClient({ cookies: () => cookieStore });

  await supabase.auth.signOut();

  redirect('/login');
}