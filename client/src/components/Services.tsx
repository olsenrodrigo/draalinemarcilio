import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    "Cirurgia do Aparelho Digestivo",
    "Cirurgia Bariátrica (Sleeve e Bypass)",
    "Cirurgia de Refluxo Gastroesofágico",
    "Cirurgia Laparoscópica da Vesícula",
    "Hérnias por Videolaparoscopia",
    "Diástase Abdominal",
    "Câncer Colorretal",
    "Doenças Inflamatórias Intestinais",
    "Proctologia (hemorroidas, fissuras e fístulas)",
    "Doenças Gastrointestinais Clínicas (SII, SIBO e disbioses)",
  ];

  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#EBF3EE" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(46, 125, 82, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#1A3D2B" }}>Especialidades</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Áreas de atuação
          </h3>

          <p className="text-xl max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            Do diagnóstico ao pós-operatório, a Dra. Aline acompanha toda a jornada do paciente
            com precisão técnica, abordagem individualizada e foco em resultados duradouros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border"
              style={{ borderColor: "rgba(46, 125, 82, 0.15)" }}
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#2E7D52" }} />
              <span className="font-medium" style={{ color: "#212529" }}>{service}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #2E7D52 0%, #1A3D2B 100%)" }}
        >
          <h4 className="text-3xl font-bold mb-4 text-white">
            Problemas digestivos afetam sua qualidade de vida
          </h4>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "rgba(235,243,238,0.9)" }}>
            Não ignore sintomas. A avaliação especializada é o primeiro passo para um
            tratamento eficaz, seguro e com resultados duradouros.
          </p>
          <button
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#1A3D2B" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agendar Consulta
          </button>
        </motion.div>
      </div>
    </section>
  );
}
