import GeometricPanel from "../Components/GeometricPanel2";
import ForgotPasswordForm from "../Components/ForgotPassword/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex overflow-hidden">
      {/* Panel decorativo izquierdo */}
      <GeometricPanel />

      {/* Panel del formulario derecho */}
      <ForgotPasswordForm />
    </main>
  );
}