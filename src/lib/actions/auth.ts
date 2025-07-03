'use server';

import { ActionState, signInSchema, signUpSchema } from '../definitions';
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
      message: validatedFields.error.errors[0].message,
      success: false,
    };
  }

  const { username, email, password } = validatedFields.data;

  const { data: existingUser } = await (await supabase)
    .from('profiles')
    .select('username')
    .eq('username', username)
    .single();

  if (existingUser) {
    return {
      message: 'Nome de usuário já está em uso',
      success: false,
    };
  }

  const { error } = await (await supabase).auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        full_name: username, 
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

  const { error } = await (await supabase).auth.signInWithPassword({
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

  await (await supabase).auth.signOut();

  redirect('/login');
}