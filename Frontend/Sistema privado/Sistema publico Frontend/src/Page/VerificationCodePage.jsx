import GeometricPanel from "../Components/GeometricPanel2";
import VerificationCodeForm from "../Components/VerificationCodeForm";

export default function VerificationCodePage() {
  return (
    <main className="min-h-screen flex overflow-hidden">
      {/* Panel decorativo izquierdo */}
      <GeometricPanel />

      {/* Panel del formulario derecho */}
      <VerificationCodeForm />
    </main>
  );
}