// src/app/(private)/dashboard/page.tsx
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
// import { LogoutButton } from '@/components/LogoutButton';

export default async function Dashboard() {
	const supabase = createClient();

	const { data: { user }, error } = await supabase.auth.getUser();

	if (error || !user) {
		redirect('/login');
	}

	const { data: profile } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', user.id)
		.single();

	return (
		<div className="min-h-screen p-8">
			<div className="max-w-4xl mx-auto">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-3xl font-bold">Dashboard</h1>
					{/* <LogoutButton /> */}
				</div>

				<div className="bg-white rounded-lg shadow-lg p-6">
					<div className="flex items-center gap-4 mb-4">
						{profile?.avatar_url ? (
							<img
								src={profile.avatar_url}
								alt="Avatar"
								className="w-16 h-16 rounded-full"
							/>
						) : (
							<div
								className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
								style={{ backgroundColor: profile?.theme_color || '#10B981' }}
							>
								{profile?.username?.charAt(0).toUpperCase() || 'U'}
							</div>
						)}
						<div>
							<h2 className="text-xl font-semibold">{profile?.full_name || 'Usuário'}</h2>
							<p className="text-gray-600">@{profile?.username}</p>
							<p className="text-gray-500">{user.email}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}