import { useState, useRef } from "react";
import KapraLogo from "../../assets/KapraLogoNavy.png"

export default function VerificationCodeForm() {
  const [codigo, setCodigo] = useState(["", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const nuevo = [...codigo];
    nuevo[index] = value;
    setCodigo(nuevo);
    if (value && index < 4) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !codigo[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const texto = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 5);
    const nuevo = ["", "", "", "", ""];
    texto.split("").forEach((char, i) => (nuevo[i] = char));
    setCodigo(nuevo);
    inputs.current[Math.min(texto.length, 4)]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const codigoCompleto = codigo.join("");
    if (codigoCompleto.length < 5) return;
    console.log({ codigo: codigoCompleto });
  };

  return (
    <section className="flex-1 bg-white flex flex-col items-center justify-center px-16 py-14">
      <img src={KapraLogo} alt="" className="w-90" />

      <h1 className="text-4xl font-bold mb-5 text-center" style={{ color: "#1e3a8a" }}>
        Recupera tu contraseña
      </h1>

      <p className="text-base text-neutral-500 text-center mb-10 max-w-sm leading-relaxed">
        Hemos enviado un código de verificación a tu correo electrónico.
        Por favor, ingrésalo a continuación.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-10">
        <div>
          <label className="block text-sm font-semibold text-neutral-600 mb-5 tracking-wide">
            CÓDIGO
          </label>
          <div className="flex gap-4 justify-center">
            {codigo.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-16 h-16 text-center text-2xl font-semibold rounded-xl bg-neutral-200 text-neutral-800 outline-none focus:ring-2 focus:ring-blue-700"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-16 py-4 rounded-full text-white text-lg font-semibold transition-colors hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#1e3a8a" }}
          >
            Aceptar
          </button>
        </div>
      </form>
    </section>
  );
}