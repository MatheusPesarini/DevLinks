// Exemplo de como usar Material-UI com Tailwind CSS
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function ExampleComponent() {
	return (
		<div className="p-4 max-w-md mx-auto">
			{/* Material-UI Card com classes Tailwind */}
			<Card className="mb-4 shadow-lg">
				<CardContent>
					<Typography variant="h5" component="h2" className="mb-2">
						MUI + Tailwind
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Exemplo de integração entre Material-UI e Tailwind CSS
					</Typography>
				</CardContent>
			</Card>

			{/* Material-UI Button com espaçamento Tailwind */}
			<div className="flex gap-2">
				<Button variant="contained" className="flex-1">
					MUI Button
				</Button>
				<Button variant="outlined" className="flex-1">
					Outlined
				</Button>
			</div>

			{/* Div puramente Tailwind */}
			<div className="mt-4 p-4 bg-blue-100 rounded-lg">
				<p className="text-blue-800 font-medium">
					Este é um exemplo de como combinar Material-UI com Tailwind CSS
				</p>
			</div>
		</div>
	);
}
