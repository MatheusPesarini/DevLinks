'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'var(--font-inter), sans-serif',
	},
	cssVariables: true,
});

export default theme;
