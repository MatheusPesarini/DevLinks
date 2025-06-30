
import Input from "@/components/ui/input";
import { SendButton } from "@/components/ui/sendButton";
import { Stack } from "@mui/material";

export default function Register() {
  return (
    <div className="flex flex-col bg-background items-center justify-center min-h-screen p-4">
      <div className="bg-card p-8 rounded-xl shadow-xl w-full max-w-md">
        <Stack className="gap-6">
          <h2 className="text-3xl font-normal text-start text-text mb-4">Cadastro</h2>
          <Input id="username" label="Nome de usuário" type="text" />
          <Input id="email" label="Email" type="email" />
          <Input id="password" label="Senha" type="password" />
          <Input id="password" label="Confirmar Senha" type="password" />
          <SendButton />
        </Stack>
      </div>
    </div>
  )
}