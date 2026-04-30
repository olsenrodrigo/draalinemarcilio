import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import logoSimbolo from "../assets/images/logo-simbolo.png";

interface HeroProps {
  scrollToSection?: (section: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const goTo = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center">

      {/* Background layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #1a2e3b 0%, #2C3E50 40%, #3d6b7a 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(26,46,59,0.97) 0%, rgba(44,62,80,0.80) 55%, rgba(44,62,80,0.20) 100%)" }}
        />

        {/* Logo símbolo como watermark — mix-blend-mode:screen blende corretamente em fundo escuro */}
        <img
          src={logoSimbolo}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-4%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "min(46vw, 480px)",
            opacity: 0.14,
            mixBlendMode: "screen",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge especialidade */}
            <div
              className="inline-block px-4 py-2 backdrop-blur-sm border rounded-full mb-5"
              style={{ backgroundColor: "rgba(91,140,155,0.2)", borderColor: "rgba(91,140,155,0.35)" }}
            >
              <span className="text-sm font-medium" style={{ color: "#EDF2F4" }}>
                Cirurgia Digestiva · Coloproctologia · Cirurgia Bariátrica
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Sua saúde digestiva em{" "}
              <span style={{ color: "#5B8C9B" }}>mãos experientes</span>
            </h2>

            {/* Nome */}
            <p className="text-base sm:text-lg mb-2 font-semibold leading-snug" style={{ color: "#EDF2F4" }}>
              Dra. Aline Marcilio Alves — Cirurgiã do Aparelho Digestivo e Coloproctologista
            </p>

            {/* Descrição da copy */}
            <p className="text-sm sm:text-base mb-6 leading-relaxed" style={{ color: "rgba(237,242,244,0.85)" }}>
              Formada pela FMUSP com residência e subespecialização no Hospital das Clínicas,
              a Dra. Aline oferece diagnóstico preciso e tratamento cirúrgico com foco em resultados
              seguros e duradouros, sempre com técnica apurada e cuidado individualizado. Incorpora
              um modelo de atendimento abrangente baseado nos pilares da Lifestyle Medicine, com
              formação complementar em Harvard (2019), integrando saúde digestiva, hábitos e
              qualidade de vida.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="https://wa.me/5511933353033"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group px-7 py-3.5 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-all text-sm sm:text-base"
                style={{ background: "#5B8C9B" }}
              >
                <Calendar size={18} />
                Agendar Consulta — WhatsApp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => goTo("about")}
                className="px-7 py-3.5 backdrop-blur-sm text-white rounded-full font-medium border-2 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.25)" }}
              >
                <User size={18} />
                Conheça a Especialista
              </motion.button>
            </div>
          </motion.div>

          {/* Indicadores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            {[
              { value: "15+", label: "Anos de Formação" },
              { value: "3", label: "Especializações" },
              { value: "FMUSP", label: "Formação Acadêmica" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5">{stat.value}</div>
                <div className="text-xs sm:text-sm" style={{ color: "#EDF2F4" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Fade inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10"
        style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
      />
    </div>
  );
}
