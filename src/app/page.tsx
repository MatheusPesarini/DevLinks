import { Button, Card, CardContent, Typography, Box } from "@mui/material";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<div className="max-w-4xl mx-auto">
				<Typography
					variant="h3"
					component="h1"
					className="text-center mb-8 text-blue-600"
				>
					MUI + Tailwind CSS Integration
				</Typography>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Card com MUI e classes Tailwind */}
					<Card className="shadow-lg hover:shadow-xl transition-shadow">
						<CardContent className="p-6">
							<Typography variant="h5" className="mb-4 text-gray-800">
								Material-UI Card
							</Typography>
							<Typography variant="body1" className="mb-4 text-gray-600">
								Este card usa componentes MUI com classes Tailwind para styling.
							</Typography>
							<Button
								variant="contained"
								className="bg-blue-500 hover:bg-blue-600 px-6 py-2"
							>
								MUI Button
							</Button>
						</CardContent>
					</Card>

					{/* Card puramente com Tailwind */}
					<div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
						<h2 className="text-xl font-bold mb-4 text-gray-800">
							Pure Tailwind Card
						</h2>
						<p className="text-gray-600 mb-4">
							Este card usa apenas classes Tailwind CSS.
						</p>
						<button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
							Tailwind Button
						</button>
					</div>
				</div>

				<Box className="mt-8 p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
					<Typography variant="h6" className="text-white text-center">
						🎉 MUI + Tailwind funcionando perfeitamente!
					</Typography>
				</Box>
			</div>
		</div>
	);
}
