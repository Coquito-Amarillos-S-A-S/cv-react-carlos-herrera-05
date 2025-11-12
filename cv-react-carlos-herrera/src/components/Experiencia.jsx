export default function Experiencia() {
  const experiencias = [
    {
      cargo: "supervisor y asistente de sellado de bolsa",
      empresa: "meviplast",
      año: "2024",
      descripcion:
        "sellamos bolsa para empacar alimentos, bolsa cargadera, troquel y muchas variedades que solisiten.",
    },
  ];

  return (
    <section>
      <h2>Experiencia</h2>
      <ul>
        {experiencias.map((exp, index) => (
          <li key={index}>
            <strong>{exp.cargo}</strong> – {exp.empresa} ({exp.año})
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
