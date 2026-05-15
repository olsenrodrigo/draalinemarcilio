import { motion } from "framer-motion";
import { Stethoscope, Activity, AlertCircle, Scissors, Heart, Zap } from "lucide-react";

export default function Treatments() {
  const treatments = [
    { icon: Scissors, text: "Gastrectomia Sleeve" },
    { icon: Activity, text: "Bypass Gástrico" },
    { icon: Stethoscope, text: "Cirurgia de Refluxo" },
    { icon: Zap, text: "Colecistectomia Laparoscópica" },
    { icon: Heart, text: "Correção de Hérnia" },
    { icon: Scissors, text: "Cirurgia de Diástase" },
    { icon: Activity, text: "Cirurgia Colorretal" },
    { icon: Stethoscope, text: "Tratamento cirúrgico de hemorroidas" },
    { icon: Zap, text: "Correção de fissuras e fístulas" },
  ];

  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#EBF3EE" }}>
            <span className="text-sm font-medium" style={{ color: "#2E7D52" }}>Procedimentos</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Tratamentos e Cirurgias
          </h3>

          <p className="text-lg max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            Técnicas modernas com foco em segurança, recuperação adequada e resultados duradouros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {treatments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-all"
              style={{ borderColor: "rgba(46, 125, 82, 0.15)" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EBF3EE" }}>
                <item.icon className="w-5 h-5" style={{ color: "#2E7D52" }} />
              </div>
              <span className="font-medium pt-2" style={{ color: "#212529" }}>{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 max-w-3xl mx-auto p-6 rounded-xl"
          style={{ backgroundColor: "rgba(46, 125, 82, 0.07)" }}
        >
          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#2E7D52" }} />
          <p className="text-base" style={{ color: "#3C3C3C" }}>
            A indicação cirúrgica é realizada com base em avaliação criteriosa, decisão compartilhada
            e respeito à individualidade de cada paciente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
