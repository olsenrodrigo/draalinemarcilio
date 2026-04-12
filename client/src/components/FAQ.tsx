import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function FAQ() {
  const testimonials = [
    {
      text: "A Dra. Aline me operou da vesícula por laparoscopia e fiquei impressionada com a recuperação. Em dois dias já estava em casa, sem praticamente nenhuma dor. Ela explicou tudo com muita clareza antes e depois da cirurgia. Me senti segura em todas as etapas.",
      name: "Fernanda R.",
      detail: "Colecistectomia Laparoscópica",
    },
    {
      text: "Fiz a cirurgia bariátrica sleeve com a Dra. Aline e foi uma das melhores decisões da minha vida. Ela é extremamente competente, paciente e acolhedora. Perdi mais de 30kg no primeiro ano e minha qualidade de vida mudou completamente. Recomendo muito!",
      name: "Marcos T.",
      detail: "Cirurgia Bariátrica Sleeve",
    },
    {
      text: "Sofria com hemorroidas há anos e sempre tive medo de operar. A Dra. Aline me tranquilizou, explicou todas as etapas e o pós-operatório foi muito melhor do que eu imaginava. Atendimento humano, técnica impecável e muito cuidado. Só tenho a agradecer.",
      name: "Claudia M.",
      detail: "Cirurgia Coloproctológica",
    },
  ];

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "#EDF2F4" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(91, 140, 155, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#2C3E50" }}>Depoimentos</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
            O que dizem os pacientes
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Histórias reais de quem confiou sua saúde à Dra. Aline.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border relative"
              style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: "#5B8C9B" }} />

              <p className="text-base leading-relaxed mb-6" style={{ color: "#3C3C3C" }}>
                "{item.text}"
              </p>

              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" style={{ color: "#5B8C9B" }} />
                ))}
              </div>

              <div>
                <p className="font-semibold text-sm" style={{ color: "#212529" }}>{item.name}</p>
                <p className="text-xs" style={{ color: "#5B8C9B" }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #5B8C9B 0%, #2C3E50 100%)" }}
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Pronta para cuidar da sua saúde?
          </h4>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg" style={{ color: "#EDF2F4" }}>
            <span>Atendimento particular</span>
            <span>|</span>
            <span>Jardim Paulista — São Paulo/SP</span>
          </div>
          <p className="text-base mb-8" style={{ color: "rgba(237, 242, 244, 0.8)" }}>
            Rua Bento de Andrade, 58 — Jardim Paulista, São Paulo/SP
          </p>
          <button
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#2C3E50" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agendar consulta agora
          </button>
        </motion.div>
      </div>
    </section>
  );
}
