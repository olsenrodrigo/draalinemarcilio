import { motion } from "framer-motion";
import { GraduationCap, Eye, Heart, Globe } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: GraduationCap,
      title: "Formação de excelência internacional",
      description: "Formação pela FMUSP, com experiência internacional em videolaparoscopia na Bélgica e atualização científica constante nas principais áreas da cirurgia digestiva.",
    },
    {
      icon: Eye,
      title: "Decisão cirúrgica com responsabilidade",
      description: "Cada indicação é realizada com critério técnico e responsabilidade, priorizando segurança, necessidade real e benefício individual para o paciente.",
    },
    {
      icon: Heart,
      title: "Cuidado individualizado e contínuo",
      description: "Acompanhamento próximo em todas as etapas do tratamento, da primeira consulta ao pós-operatório, com comunicação clara e atenção genuína.",
    },
    {
      icon: Globe,
      title: "Visão sistêmica da saúde digestiva",
      description: "Uma abordagem abrangente baseada em evidências científicas, considerando saúde intestinal, hábitos, metabolismo e qualidade de vida de forma integrada.",
    },
  ];

  return (
    <section id="differentials" className="py-24" style={{ backgroundColor: "#EBF3EE" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(46, 125, 82, 0.15)" }}>
              <span className="text-sm font-medium" style={{ color: "#1A3D2B" }}>Por que escolher</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
              Diferenciais do Atendimento
            </h3>

            <p className="text-xl" style={{ color: "#3C3C3C" }}>
              Um cuidado médico que vai além da técnica, com escuta, estratégia e precisão.
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
                style={{ borderColor: "rgba(46, 125, 82, 0.15)" }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #2E7D52 0%, #1A3D2B 100%)" }}
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
