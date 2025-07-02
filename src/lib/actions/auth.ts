'use server';

import { cookies } from 'next/headers';
import { ActionState, signInSchema, signUpSchema } from '../definitions';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '../supabase/action';
import { redirect } from 'next/navigation';

export async function signUp(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const supabase = createClient();

  const validatedFields = signUpSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors.map(err => err.message).join(', '),
      success: false,
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
      message: error.message,
      success: false,
    }
  }

  redirect('/login');
}

export async function signIn(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const supabase = createClient();

  const validatedFields = signInSchema.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors.map(err => err.message).join(', '),
      success: false,
    };
  }

  const { email, password } = validatedFields.data;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      message: error.message,
      success: false,
    };
  }

  redirect('/dashboard');
}

export async function signOut() {
  const supabase = createClient();

  await supabase.auth.signOut();

  redirect('/login');
}