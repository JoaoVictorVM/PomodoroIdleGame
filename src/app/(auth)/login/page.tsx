import { LoginForm } from "@/components/auth/LoginForm";
import Link from "next/link";
import { Timer } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#2E3440] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-[#BF616A] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Timer size={24} className="text-[#ECEFF4]" />
          </div>
          <h2 className="text-xl font-semibold text-[#ECEFF4]">
            Pomodoro Idle
          </h2>
          <p className="text-[#4C566A] text-sm mt-2">
            Entre para salvar seu progresso
          </p>
        </div>

        <div className="nord-card p-8">
          <h3 className="text-base font-semibold text-[#ECEFF4] mb-6">
            Entrar
          </h3>
          <LoginForm />
          <p className="text-center text-[#4C566A] text-xs mt-6">
            Não tem conta?{" "}
            <Link
              href="/register"
              className="text-[#81A1C1] hover:text-[#88C0D0] transition-colors"
            >
              Registrar
            </Link>
          </p>
        </div>

        <div className="text-center mt-5">
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
