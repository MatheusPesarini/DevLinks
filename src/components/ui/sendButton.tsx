import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export function SendButton() {
	return (
		<Button
			variant="contained"
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
			}}
			endIcon={<SendIcon />}
		>
			Enviar
		</Button>
	);
}
