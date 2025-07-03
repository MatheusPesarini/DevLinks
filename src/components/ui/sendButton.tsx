import { Box, Button, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { SendButtonProps } from '@/lib/definitions';

export function SendButton({ isPending = false, children = "Enviar" }: SendButtonProps) {
	return (
		<Button
			variant="contained"
			type='submit'
			disabled={isPending}
			sx={{
				backgroundColor: 'var(--primary)',
				color: 'var(--background)',
				textTransform: 'none',
				fontSize: '1rem',
				py: 1.5,
				transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				'&:hover': {
					backgroundColor: 'var(--primary)',
					filter: 'brightness(1.1)',
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
				},
				'&:active': {
					backgroundColor: 'var(--primary)',
					filter: 'brightness(0.9)',
					transition: 'all 0.1s ease',
				},
				'&:disabled': {
					backgroundColor: 'var(--primary)',
					opacity: 0.8, 
					color: 'var(--background)',
				}
			}}
		>
			{isPending ? (
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<CircularProgress size={20} sx={{ color: 'var(--background)' }} />
					Enviando...
				</Box>
			) : (
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					{children}
					<SendIcon />
				</Box>
			)}
		</Button>
	);
}
