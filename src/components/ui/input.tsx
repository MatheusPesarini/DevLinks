'use client';

import {
	IconButton,
	InputAdornment,
	TextField,
	TextFieldProps,
} from '@mui/material';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface InputProps extends Omit<TextFieldProps, 'variant'> {
	variant?: 'outlined' | 'filled' | 'standard';
}

export default function Input({ ...props }: InputProps) {
	const [showPassword, setShowPassword] = useState(false);
	const isPasswordField = props.type === 'password';

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault();
	};

	const currentType = isPasswordField
		? showPassword
			? 'text'
			: 'password'
		: props.type;

	return (
		<TextField
			{...props}
			variant="outlined"
			fullWidth
			type={currentType}
			sx={{
				'& .MuiOutlinedInput-root': {
					backgroundColor: 'var(--input)',
					color: 'var(--text)',
					'& fieldset': {
						borderColor: 'var(--border)',
					},
					'&:hover fieldset': {
						borderColor: 'var(--primary)',
					},
					'&.Mui-focused fieldset': {
						borderColor: 'var(--primary)',
					},
				},
				'& .MuiInputLabel-root': {
					color: 'var(--placeholder)',
					'&.Mui-focused': {
						color: 'var(--primary)',
					},
				},
			}}
			slotProps={{
				input: isPasswordField
					? {
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label={
											showPassword
												? 'hide the password'
												: 'display the password'
										}
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
										sx={{ color: 'var(--placeholder)' }}
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}
					: {},
			}}
		/>
	);
}
