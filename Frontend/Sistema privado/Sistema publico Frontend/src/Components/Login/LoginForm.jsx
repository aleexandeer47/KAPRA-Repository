import { useState } from "react";
import KapraLogo from "../../assets/KapraLogoNavy.png"

export default function LoginForm() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ usuario, password });
  };

  return (
    <section className="flex-1 bg-white flex flex-col items-center justify-center px-16 py-14">
      <img src={KapraLogo} alt="" className="w-90" />

      <h1 className="text-4xl font-bold mb-10" style={{ color: "#1e3a8a" }}>
        Inicio de sesión
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
        <div>
          <label htmlFor="usuario" className="block text-sm font-semibold text-neutral-600 mb-2 tracking-wide">
            USUARIO
          </label>
          <input
            id="usuario"
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="w-full px-5 py-4 rounded-full bg-neutral-200 text-neutral-800 text-base outline-none focus:ring-2 focus:ring-blue-700"
            autoComplete="username"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-neutral-600 mb-2 tracking-wide">
            CONTRASEÑA
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 rounded-full bg-neutral-200 text-neutral-800 text-base outline-none focus:ring-2 focus:ring-blue-700"
            autoComplete="current-password"
            required
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-4 rounded-full text-white text-lg font-semibold transition-colors hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#1e3a8a" }}
          >
            Ingresar
          </button>
        </div>

        <div className="text-center pt-2">
          <a href="#" className="text-sm font-semibold hover:underline" style={{ color: "#1e3a8a" }}>
            ¿Olvidaste la contraseña?
          </a>
        </div>
      </form>
    </section>
  );
}