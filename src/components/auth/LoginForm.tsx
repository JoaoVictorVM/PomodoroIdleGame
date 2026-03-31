"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email ou senha incorretos");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("Erro ao fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && (
        <div className="bg-[#BF616A]/10 border border-[#BF616A]/20 rounded-lg px-4 py-3 text-[#BF616A] text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <label className="text-[#9090a8] text-sm">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          required
          className="bg-[#2E3440] border border-[#3B4252] rounded-lg px-4 py-2.5 text-[#ECEFF4] text-sm placeholder-[#4C566A] focus:outline-none focus:border-[#5E81AC] transition-colors w-full"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[#9090a8] text-sm">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          className="bg-[#2E3440] border border-[#3B4252] rounded-lg px-4 py-2.5 text-[#ECEFF4] text-sm placeholder-[#4C566A] focus:outline-none focus:border-[#5E81AC] transition-colors w-full"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#5E81AC] hover:bg-[#81A1C1] disabled:opacity-50 disabled:cursor-not-allowed text-[#ECEFF4] font-medium rounded-lg px-4 py-2.5 text-sm transition-colors mt-2"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
