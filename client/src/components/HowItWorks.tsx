import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function HowItWorks() {
  const topics = [
    {
      title: "O que é cirurgia bariátrica e quando é indicada?",
      description: "A cirurgia bariátrica é indicada para pessoas com obesidade grave (IMC ≥ 40) ou IMC ≥ 35 com comorbidades como diabetes e hipertensão. Ela atua reduzindo o volume gástrico e/ou alterando a absorção intestinal, promovendo perda de peso duradoura.",
    },
    {
      title: "Sleeve x Bypass: qual a diferença?",
      description: "O Sleeve remove parte do estômago, reduzindo sua capacidade. O Bypass redireciona o trânsito intestinal além de reduzir o estômago, sendo mais eficaz em casos de diabetes associada. A escolha depende do perfil clínico de cada paciente.",
    },
    {
      title: "Como funciona a cirurgia laparoscópica?",
      description: "A laparoscopia é realizada com pequenas incisões e câmera de vídeo. Isso reduz o risco de infecção, diminui a dor pós-operatória e acelera a recuperação — com resultados equivalentes ou superiores à cirurgia aberta.",
    },
    {
      title: "Hemorroidas: quando é necessário operar?",
      description: "Hemorroidas externas com sangramento persistente, prolapso ou dor intensa podem requerer cirurgia. Existem técnicas como ligadura elástica (ambulatorial) e hemorroidectomia convencional — a indicação depende do grau e dos sintomas.",
    },
    {
      title: "Sintomas que indicam problemas no aparelho digestivo",
      description: "Dor abdominal recorrente, alteração do hábito intestinal, sangramento nas fezes, dificuldade para engolir, distensão persistente e perda de peso sem causa aparente são sinais que merecem avaliação especializada.",
    },
    {
      title: "A importância da colonoscopia preventiva",
      description: "A colonoscopia é o exame mais eficaz para detectar pólipos e câncer colorretal em estágio inicial. É recomendada a partir dos 45 anos (ou mais cedo em casos com histórico familiar). O diagnóstico precoce aumenta muito as chances de cura.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#EDF2F4" }}>
            <span className="text-sm font-medium" style={{ color: "#5B8C9B" }}>Conteúdo Educativo</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            O que você precisa saber
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Informação de qualidade para tomar decisões mais conscientes sobre a sua saúde digestiva.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all"
              style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#EDF2F4" }}
              >
                <BookOpen className="w-5 h-5" style={{ color: "#5B8C9B" }} />
              </div>

              <h4 className="text-lg font-bold mb-3" style={{ color: "#212529" }}>
                {topic.title}
              </h4>

              <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
