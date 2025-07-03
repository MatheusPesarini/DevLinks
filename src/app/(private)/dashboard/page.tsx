export default function DashboardLayout() {
  return (
    <>
      <div>
        <div className="background-effect"></div>
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="bg-card p-8 rounded-xl shadow-xl w-full max-w-md">
            <h2 className="text-3xl font-normal text-start text-text mb-4">
              Dashboard
            </h2>
            <p className="text-text">Bem-vindo ao seu painel de controle!</p>
          </div>
        </div>
      </div>
    </>
  )
}