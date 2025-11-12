export default function Experiencia() {
  const experiencias = [
    {
      cargo: "supervisor y asistente de sellado de bolsa",
      empresa: "meviplast",
      año: "2024",
      descripcion:
        "sellamos bolsa para empacar alimentos, bolsa cargadera, troquel y muchas variedades que solisiten.",
    },
    {
      cargo: "practicante desarrollo de software",
      empresa: "epm",
      año: "2023",
      descripcion: "fase de practicas para epm.",
    },
    {
      cargo: "auxiliar administrativo",
      empresa: "goplast",
      año: "2022",
      descripcion: "ayudo con lo administrativo.",
    },
    {
      cargo: "atención al cliente",
      empresa: "elkinplast",
      año: "2021",
      descripcion: "atiendo a las personas que visitan la empresa.",
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
