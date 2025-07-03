import { type NextRequest, NextResponse } from 'next/server';
import { createClient } from './lib/supabase/server';

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();

	const supabase = createClient();

	try {
		const {
			data: { session },
		} = await (await supabase).auth.getSession();

		if (req.nextUrl.pathname.startsWith('/dashboard')) {
			if (!session) {
				return NextResponse.redirect(new URL('/login', req.url));
			}
		}

		if (['/login', '/register'].includes(req.nextUrl.pathname)) {
			if (session) {
				return NextResponse.redirect(new URL('/dashboard', req.url));
			}
		}
	} catch (error) {
		console.error('Middleware error:', error);
	}

	return res;
}

export const config = {
	matcher: ['/dashboard/:path*', '/login', '/register'],
};
