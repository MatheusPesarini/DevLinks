'use client';

import Input from '@/components/ui/input';
import Form from 'next/form';
import { SendButton } from '@/components/ui/sendButton';
import { signUp } from '@/lib/actions/auth';
import { initialState } from '@/lib/definitions';
import { Stack } from '@mui/material';
import Link from 'next/link';
import { useActionState } from 'react';
import AlertError from '@/components/ui/alertError';
import { useAuth } from '@/context/AuthContext';
import { AuthGuard } from '@/components/AuthGuard';

export default function Register() {
	const [state, formAction, isPending] = useActionState(signUp, initialState);
	const { user, loading } = useAuth();

	if (!loading && user) {
		return null;
	}

	return (
		<AuthGuard requireAuth={false}>
			<>
				<div className="background-effect"></div>
				<div className="flex flex-col items-center justify-center min-h-screen p-4">
					<div className="bg-card p-8 rounded-xl shadow-xl w-full max-w-md">
						<Form action={formAction}>
							<Stack className="gap-6">
								<h2 className="text-3xl font-normal text-start text-text mb-4">
									Cadastro
								</h2>

								{state?.message && !state?.success && (
									<AlertError message={state.message} type="error" />
								)}
								{state?.message && state?.success && (
									<AlertError message={state.message} type="success" />
								)}

								<Input
									id="username"
									name="username"
									label="Nome de usuário"
									type="text"
									required
								/>
								<Input
									id="email"
									name="email"
									label="Email"
									type="email"
									required
								/>
								<Input
									id="password"
									name="password"
									label="Senha"
									type="password"
									required
								/>
								<Input
									id="confirmPassword"
									name="confirmPassword"
									label="Confirmar Senha"
									type="password"
									required
								/>
								<SendButton isPending={isPending} />
								<div className="text-sm text-text text-center mt-4">
									Já tem uma conta?{' '}
									<Link href="/login" className="text-primary hover:underline">
										Login
									</Link>
								</div>
							</Stack>
						</Form>
					</div>
				</div>
			</>
		</AuthGuard>
	);
}
