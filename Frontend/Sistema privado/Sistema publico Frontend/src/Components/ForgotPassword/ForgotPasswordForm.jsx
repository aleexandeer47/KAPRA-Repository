import { useState } from "react";
import KapraLogo from "../../assets/KapraLogoNavy.png";

export default function ForgotPasswordForm() {
  const [correo, setCorreo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ correo });
  };

  return (
    <section className="flex-1 bg-white flex flex-col items-center justify-center px-16 py-14">
      <img src={KapraLogo} alt="" className="w-90" />

      <h1 className="text-4xl font-bold mb-5 text-center" style={{ color: "#1e3a8a" }}>
        Recupera tu contraseña
      </h1>

      <p className="text-base text-neutral-500 text-center mb-10 max-w-sm leading-relaxed">
        Para recuperar el acceso a tu cuenta, ingresa el correo electrónico que
        utilizaste al registrarte. Verifica que esté escrito correctamente.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
        <div>
          <label htmlFor="correo" className="block text-sm font-semibold text-neutral-600 mb-2 tracking-wide">
            CORREO ELECTRÓNICO
          </label>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="w-full px-5 py-4 rounded-full bg-neutral-200 text-neutral-800 text-base outline-none focus:ring-2 focus:ring-blue-700"
            autoComplete="email"
            required
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-4 rounded-full text-white text-lg font-semibold transition-colors hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#1e3a8a" }}
          >
            Aceptar
          </button>
        </div>
      </form>
    </section>
  );
}