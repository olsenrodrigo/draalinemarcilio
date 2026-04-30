import { motion } from "framer-motion";
import { MapPin, Clock, Users, Shield } from "lucide-react";

export default function Locations() {
  const features = [
    {
      icon: Shield,
      text: "Ambiente acolhedor, privativo e preparado para receber cada paciente com conforto",
    },
    {
      icon: Clock,
      text: "Consultas com tempo dedicado — sem pressa, com escuta real e orientações claras",
    },
    {
      icon: Users,
      text: "Atendimento particular com agendamento ágil pelo WhatsApp",
    },
  ];

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(91, 140, 155, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#2C3E50" }}>Consultório</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Onde nos encontrar
          </h3>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Consultório localizado em São Paulo, com cirurgias realizadas em centros cirúrgicos de referência.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border"
                  style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EDF2F4" }}>
                    <feature.icon className="w-5 h-5" style={{ color: "#5B8C9B" }} />
                  </div>
                  <span className="font-medium pt-2" style={{ color: "#212529" }}>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl border"
              style={{ borderColor: "rgba(91, 140, 155, 0.2)", backgroundColor: "rgba(237, 242, 244, 0.5)" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#5B8C9B" }} />
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Consultório — Jardim Paulista</p>
                  <p style={{ color: "#3C3C3C" }}>
                    Rua Bento de Andrade, 58<br />
                    Jardim Paulista — São Paulo/SP<br />
                    CEP 04503-000
                  </p>
                  <p className="mt-3 text-sm font-medium" style={{ color: "#5B8C9B" }}>
                    WhatsApp para agendamentos: (11) 93800-9174
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-4 pt-4 border-t" style={{ borderColor: "rgba(91, 140, 155, 0.15)" }}>
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#5B8C9B" }} />
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Centro Cirúrgico — RMS Espaços Cirúrgicos</p>
                  <p style={{ color: "#3C3C3C" }}>
                    Av. Marquês de São Vicente, 2219<br />
                    Conjs. 711, 713, 715 e 815 — Água Branca<br />
                    São Paulo/SP
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border"
            style={{ borderColor: "rgba(91, 140, 155, 0.15)", position: "relative", minHeight: "480px" }}
          >
            <iframe
              src="https://maps.google.com/maps?f=q&hl=pt-BR&q=Rua+Bento+de+Andrade,+58,+Jardim+Paulista,+S%C3%A3o+Paulo,+SP,+04503-000&z=16&ie=UTF8&output=embed"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório da Dra. Aline Marcilio"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
