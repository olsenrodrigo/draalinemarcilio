import { motion } from "framer-motion";
import { GraduationCap, Eye, Heart, Globe } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: GraduationCap,
      title: "Formação de excelência internacional",
      description: "Graduada pela FMUSP, com residência no HC e fellowship em videolaparoscopia em Bruxelas (Bélgica). Participante ativa em congressos nacionais e internacionais de cirurgia digestiva, bariátrica e coloproctologia.",
    },
    {
      icon: Eye,
      title: "Diagnóstico preciso, sem atalhos",
      description: "Consultas com tempo dedicado para ouvir, investigar e orientar. Cada caso é avaliado de forma individual, sem protocolos genéricos — com foco em acertar a indicação antes de qualquer procedimento.",
    },
    {
      icon: Heart,
      title: "Cuidado humanizado e contínuo",
      description: "A relação com o paciente não termina na cirurgia. A Dra. Aline acompanha o pré e o pós-operatório com atenção, clareza e presença — garantindo segurança em cada etapa do tratamento.",
    },
    {
      icon: Globe,
      title: "Técnica minimamente invasiva",
      description: "Especialista em videolaparoscopia, a Dra. Aline utiliza as abordagens menos invasivas disponíveis — com menor risco cirúrgico, menos dor no pós-operatório e retorno mais rápido às atividades.",
    },
  ];

  return (
    <section id="differentials" className="py-24" style={{ backgroundColor: "#EDF2F4" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(91, 140, 155, 0.15)" }}>
              <span className="text-sm font-medium" style={{ color: "#2C3E50" }}>Por que escolher</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
              Diferenciais do Atendimento
            </h3>

            <p className="text-xl" style={{ color: "#3C3C3C" }}>
              Técnica de ponta com o cuidado de quem realmente ouve o paciente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border"
                style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #5B8C9B 0%, #2C3E50 100%)" }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold mb-4" style={{ color: "#212529" }}>
                  {item.title}
                </h4>

                <p className="leading-relaxed" style={{ color: "#3C3C3C" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
