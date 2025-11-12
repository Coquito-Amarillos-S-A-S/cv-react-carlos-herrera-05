export default function Educacion() {
  const formacion = [
    {
      institucion: "SENA",
      curso: "Tecnólogo en Análisis y Desarrollo de Software",
      año: "2025",
    },
    { institucion: "Antonio Ricaurte", titulo: "bachiller", año: "2023" },
  ];

  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {formacion.map((f, index) => (
          <li key={index}>
            <strong>{f.curso}</strong> – {f.institucion} ({f.año})
          </li>
        ))}
      </ul>
    </section>
  );
}
