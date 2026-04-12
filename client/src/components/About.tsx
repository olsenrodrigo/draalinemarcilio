import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Briefcase, IdCard, Building2 } from "lucide-react";
import drAlinePhoto from "../assets/images/dra-aline-marcilio.jpeg";

export default function About() {
  const credentials = [
    { icon: Briefcase, text: "Cirurgiã do Aparelho Digestivo e Coloproctologista" },
    { icon: Award, text: "Especialista certificada pelo CBCD" },
    { icon: BookOpen, text: "Fellowship em Videolaparoscopia — Bélgica" },
    { icon: GraduationCap, text: "Formada pela Faculdade de Medicina da USP (FMUSP)" },
    { icon: Building2, text: "Preceptora de residência médica no HC-FMUSP" },
    { icon: IdCard, text: "CRM 144.320/SP · RQE 72.325" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#EDF2F4" }}>
              <span className="text-sm font-medium" style={{ color: "#5B8C9B" }}>Sobre a Especialista</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#212529" }}>
              Dra. Aline Marcilio Alves
            </h3>

            <p className="text-lg mb-6 font-medium" style={{ color: "#5B8C9B" }}>
              Medicina com propósito, técnica e humanidade
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              <strong>Dra. Aline Marcilio Alves</strong> é cirurgiã especialista em{" "}
              <strong>Cirurgia do Aparelho Digestivo, Coloproctologia e Cirurgia Bariátrica</strong>,
              com formação de excelência e atuação focada em um cuidado responsável, atualizado e individualizado.
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Graduada pela <strong>Faculdade de Medicina da USP (FMUSP)</strong>, realizou residência médica em
              Cirurgia Geral e Cirurgia Digestiva no <strong>Hospital das Clínicas da FMUSP</strong>, onde também
              atuou como <strong>preceptora de residentes</strong>. Aprimorou sua técnica em videolaparoscopia com
              fellowship no <strong>Saint-Pierre University Hospital, em Bruxelas (Bélgica)</strong>.
            </p>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Com mais de <strong>10 anos de atuação cirúrgica</strong>, a Dra. Aline é reconhecida pela
              atenção cuidadosa a cada caso, pela clareza nas orientações e pela decisão compartilhada com
              o paciente — sempre com base em evidências científicas e respeito à individualidade de quem a procura.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-center gap-3 rounded-xl p-3 border"
                  style={{ borderColor: "rgba(91, 140, 155, 0.15)", backgroundColor: "rgba(237, 242, 244, 0.4)" }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EDF2F4" }}>
                    <item.icon className="w-4 h-4" style={{ color: "#5B8C9B" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#212529" }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-sm">
              <img
                src={drAlinePhoto}
                alt="Dra. Aline Marcilio Alves — Cirurgiã do Aparelho Digestivo"
                className="w-full h-[550px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 rounded-3xl -z-10" style={{ backgroundColor: "rgba(91, 140, 155, 0.1)" }} />
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full -z-10" style={{ backgroundColor: "rgba(91, 140, 155, 0.1)" }} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t"
          style={{ borderColor: "rgba(91, 140, 155, 0.2)" }}
        >
          {[
            { value: "10+ anos", label: "de experiência em cirurgia digestiva e proctológica" },
            { value: "3 especializações", label: "Digestivo · Coloproctologia · Bariátrica" },
            { value: "HC-FMUSP", label: "Residência e preceptoria na maior referência do país" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#2C3E50" }}>{item.value}</div>
              <div className="text-base" style={{ color: "#3C3C3C" }}>{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="text-3xl md:text-4xl font-bold italic max-w-3xl mx-auto mb-8" style={{ color: "#2C3E50" }}>
            "Cada paciente merece tempo, escuta e uma decisão cirúrgica tomada com cuidado."
          </blockquote>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 text-white rounded-full font-medium hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "#5B8C9B" }}
          >
            Agendar minha consulta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
