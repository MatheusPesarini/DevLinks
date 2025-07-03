import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createClient = () => {
	const cookieStore = cookies();

	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				async getAll() {
					return (await cookieStore).getAll();
				},
				async setAll(cookiesToSet: any) {
					try {
						cookiesToSet.forEach(async ({ name, value, options }: any) => {
							(await cookieStore).set({ name, value, ...options });
						});
					} catch (error) {}
				},
			},
		},
	);
};
