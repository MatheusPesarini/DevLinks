"use client";

import AlertError from '@/components/ui/alertError';
import Input from '@/components/ui/input';
import { SendButton } from '@/components/ui/sendButton';
import { signIn } from '@/lib/actions/auth';
import { initialState } from '@/lib/definitions';
import { Stack } from '@mui/material';
import Form from 'next/form';
import Link from 'next/link';
import { useActionState } from 'react';

export default function Login() {
	const [state, formAction, isPending] = useActionState(signIn, initialState);

	return (
		<>
			<div className="background-effect"></div>
			<div className="flex flex-col items-center justify-center min-h-screen p-4">
				<div className="bg-card p-8 rounded-xl shadow-xl w-full max-w-md">
					<Form action={formAction}>
						<Stack className="gap-6">
							<h2 className="text-3xl font-normal text-start text-text mb-4">
								Login
							</h2>

							{state?.message && !state?.success && (
								<AlertError message={state.message} type="error" />
							)}
							{state?.message && state?.success && (
								<AlertError message={state.message} type="success" />
							)}

							<Input id="email" name='email' label="Email" type="email" required />
							<Input id="password" name="password" label="Senha" type="password" required />
							<SendButton isPending={isPending} />
							<div className="text-sm text-text text-center mt-4">
								Não tem uma conta?{' '}
								<Link href="/register" className="text-primary hover:underline">
									Cadastre-se
								</Link>
							</div>
						</Stack>
					</Form>
				</div>
			</div>
		</>
	);
}
