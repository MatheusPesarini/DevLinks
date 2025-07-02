"use client";

import Input from '@/components/ui/input';
import { SendButton } from '@/components/ui/sendButton';
import { signUp } from '@/lib/actions/auth';
import { initialState } from '@/lib/definitions';
import { Stack } from '@mui/material';
import Link from 'next/link';
import { useActionState } from 'react';

export default function Register() {
	const [state, formAction, isPending] = useActionState(signUp, initialState)

	return (
		<>
			<div className="background-effect"></div>
			<div className="flex flex-col items-center justify-center min-h-screen p-4">
				<div className="bg-card p-8 rounded-xl shadow-xl w-full max-w-md">
					<Stack className="gap-6">
						<h2 className="text-3xl font-normal text-start text-text mb-4">
							Cadastro
						</h2>
						<Input id="username" label="Nome de usuário" type="text" />
						<Input id="email" label="Email" type="email" />
						<Input id="password" label="Senha" type="password" />
						<Input id="password" label="Confirmar Senha" type="password" />
						<SendButton />
						<div className="text-sm text-text text-center mt-4">
							Já tem uma conta?{' '}
							<Link href="/login" className="text-primary hover:underline">
								Login
							</Link>
						</div>
					</Stack>
				</div>
			</div>
		</>
	);
}
