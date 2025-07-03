'use client';

import { useAuth } from '@/context/AuthContext';
import { AuthGuardProps } from '@/lib/definitions';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function AuthGuard({
	children,
	requireAuth = false,
	redirectTo = '/dashboard',
}: AuthGuardProps) {
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (loading) return;

		if (requireAuth && !user) {
			router.push('/login');
		} else if (!requireAuth && user) {
			router.push(redirectTo || '/dashboard');
		}
	}, [user, loading, requireAuth, redirectTo, router]);

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
			</div>
		);
	}
	return <>{children}</>;
}
