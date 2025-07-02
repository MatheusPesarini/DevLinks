import z from 'zod';

export const signUpSchema = z
	.object({
		username: z.string().min(3, 'Usuário deve ter pelo menos 3 caracteres'),
		email: z.string().email('Email inválido'),
		password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não coincidem',
		path: ['confirmPassword'],
	});

export const signInSchema = z.object({
	email: z.string().email('Email inválido'),
	password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

export interface ActionState {
	success?: boolean;
	message?: string;
}

export const initialState: ActionState = {
	success: false,
	message: '',
}

export interface SendButtonProps {
	isPending?: boolean;
	children?: React.ReactNode;
}