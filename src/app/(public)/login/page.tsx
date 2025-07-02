import Input from "@/components/ui/input";
import { SendButton } from "@/components/ui/sendButton";
import { Stack } from "@mui/material";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="background-effect"></div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
        <div className="bg-card p-8 rounded-xl shadow-xl w-full max-w-md">
          <Stack className="gap-6">
            <h2 className="text-3xl font-normal text-start text-text mb-4">
              Login
            </h2>
            <Input id="email" label="Email" type="email" />
            <Input id="password" label="Senha" type="password" />
            <SendButton />
            <div className="text-sm text-text text-center mt-4">
              Não tem uma conta?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Cadastre-se
              </Link>
            </div>
          </Stack>
        </div>
      </div>
    </>
  );
}