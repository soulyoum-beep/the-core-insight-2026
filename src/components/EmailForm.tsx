/// <reference types="vite/client" />
import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

interface EmailFormProps {
  buttonText?: string;
  className?: string;
}

export default function EmailForm({ buttonText = "신청하기", className = "" }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const { error } = await supabase.from("registrations").insert({ email });

      if (error) {
        if (error.code === "23505") {
          // 중복 이메일은 성공으로 처리 (이미 신청된 경우)
          setStatus("success");
          return;
        }
        throw error;
      }

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`flex flex-col items-center justify-center p-6 bg-green-50 text-green-700 rounded-2xl ${className}`}>
        <CheckCircle2 className="w-8 h-8 mb-2" />
        <p className="font-bold">신청이 완료되었습니다.</p>
        <p className="text-sm opacity-80 mt-1">입력하신 이메일로 안내 메일을 보내드릴 예정입니다.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2 max-w-md mx-auto relative ${className}`}>
      <input
        type="email"
        required
        disabled={status === "loading"}
        placeholder="이메일 주소를 입력하세요"
        className="flex-1 px-6 py-4 text-base bg-white shadow-lg shadow-black/5 border border-neutral-200 rounded-full outline-none focus:border-black focus:ring-2 focus:ring-black/10 focus:shadow-xl transition-all disabled:opacity-50 text-black placeholder:text-neutral-400 [&:-webkit-autofill]:bg-white [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_white]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        disabled={status === "loading" || !email}
        className="group relative px-8 py-4 text-white bg-black rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2 font-bold whitespace-nowrap shadow-lg shadow-black/10"
      >
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            {buttonText} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="absolute -bottom-6 left-0 right-0 text-sm font-medium text-red-500 text-center">
          오류가 발생했습니다. 잠시 후 다시 시도해주세요.
        </p>
      )}
    </form>
  );
}
