import { LoginForm } from "@/components/auth/LoginForm";
import Link from "next/link";
import { Timer } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#2E3440] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-[#BF616A] rounded-xl flex items-center justify-center mx-auto mb-3">
            <Timer size={22} className="text-[#ECEFF4]" />
          </div>
          <h2 className="text-xl font-semibold text-[#ECEFF4]">
            Pomodoro Idle
          </h2>
          <p className="text-[#4C566A] text-sm mt-1">
            Entre para salvar seu progresso
          </p>
        </div>

        <div className="nord-card p-6">
          <h3 className="text-sm font-medium text-[#ECEFF4] mb-5">Entrar</h3>
          <LoginForm />
          <p className="text-center text-[#4C566A] text-xs mt-4">
            Não tem conta?{" "}
            <Link
              href="/register"
              className="text-[#81A1C1] hover:text-[#88C0D0] transition-colors"
            >
              Registrar
            </Link>
          </p>
        </div>

        <div className="text-center mt-4">
          <Link
            href="/"
            className="text-[#4C566A] text-xs hover:text-[#D8DEE9] transition-colors"
          >
            Continuar sem conta →
          </Link>
        </div>
      </div>
    </main>
  );
}
