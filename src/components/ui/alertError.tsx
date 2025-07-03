import Alert from '@mui/material/Alert';

export default function AlertError({
	message,
	type = 'error',
}: {
	message: string;
	type?: 'error' | 'success';
}) {
	return (
		<Alert
			severity="error"
			sx={{
				backgroundColor: 'var(--destructive)',
				color: 'white',
				'& .MuiAlert-icon': { color: 'white' },
			}}
		>
			{type === 'success' && (
				<span style={{ color: 'var(--success)' }}>{message}</span>
			)}
			{type === 'error' && (
				<span style={{ color: 'var(--text)' }}>{message}</span>
			)}
		</Alert>
	);
}
