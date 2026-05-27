export default function GeometricPanel() {
    return (
      <section
        className="hidden md:flex flex-1 relative overflow-hidden"
        style={{ backgroundColor: "#0b1a2d" }}
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 440 640"
          preserveAspectRatio="none"
        >
          {/* Brazo inferior: banda #8ea3bd inclinada hacia la esquina inferior derecha, cubre todo el fondo */}
          <polygon
            points="0,310 440,580 440,640 0,640"
            fill="#8ea3bd"
          />
  
          {/* Borde interior del brazo inferior: franja #5a7494 sobre el brazo inferior, define la cara superior de la V */}
          <polygon
            points="0,290 440,580 440,700 0,388"
            fill="#5a7494"
          />

          {/* Brazo superior: banda #8ea3bd inclinada hacia la esquina superior derecha */}
          <polygon
            points="0,245 440,-60 440,60 0,355"
            fill="#8ea3bd"
          />
        </svg>
      </section>
    );
  }