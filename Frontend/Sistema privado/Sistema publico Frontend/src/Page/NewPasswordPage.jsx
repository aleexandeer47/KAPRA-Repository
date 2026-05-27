import GeometricPanel from "../Components/GeometricPanel2";
import NewPasswordForm from "../Components/NewPasswordForm";

export default function NewPasswordPage() {
  return (
    <main className="min-h-screen flex overflow-hidden">
      {/* Panel decorativo izquierdo */}
      <GeometricPanel />

      {/* Panel del formulario derecho */}
      <NewPasswordForm />
    </main>
  );
}