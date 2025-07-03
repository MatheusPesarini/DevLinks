'use client';

import { AuthContextType } from '@/lib/definitions';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext<AuthContextType>({
	user: null,
	loading: true,
	profile: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [profile, setProfile] = useState<any>(null);
	const supabase = createClient();

	useEffect(() => {
		const getSession = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession();
			setUser(session?.user || null);

			if (session?.user) {
				const { data: profileData } = await supabase
					.from('profiles')
					.select('*')
					.eq('id', session.user.id)
					.single();

				setProfile(profileData || null);
			}

			setLoading(false);
		};

		getSession();

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(async (event, session) => {
			setUser(session?.user ?? null);

			if (session?.user) {
				const { data: profileData } = await supabase
					.from('profiles')
					.select('*')
					.eq('id', session.user.id)
					.single();

				setProfile(profileData);
			} else {
				setProfile(null);
			}

			setLoading(false);
		});

		return () => subscription.unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading, profile }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
