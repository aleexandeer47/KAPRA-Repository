import GeometricPanel from "../Components/GeometricPanel";
import LoginForm from "../Components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex overflow-hidden">
      {/* Panel decorativo izquierdo */}
      <GeometricPanel />

      {/* Panel del formulario derecho */}
      <LoginForm />
    </main>
  );
}