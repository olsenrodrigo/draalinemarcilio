import { motion } from "framer-motion";
import { MapPin, Clock, Users, Shield, Phone } from "lucide-react";

export default function Locations() {
  const features = [
    {
      icon: Shield,
      text: "Ambientes preparados para oferecer conforto, privacidade e atendimento cuidadoso em todas as etapas da jornada do paciente.",
    },
    {
      icon: Clock,
      text: "Consultas com tempo dedicado, escuta ativa e orientações claras, priorizando segurança e excelência médica.",
    },
    {
      icon: Users,
      text: "Atendimento particular com agendamento ágil pelo WhatsApp.",
    },
  ];

  const units = [
    {
      name: "Clínica Alumia",
      address: "Alameda Campinas, 1100 — 11º andar\nJardins — São Paulo/SP",
      contacts: [{ label: "WhatsApp", value: "(11) 93335-3033" }],
      hasMap: true,
    },
    {
      name: "EMNH",
      address: null,
      contacts: [{ label: "Telefone", value: "(11) 3615-2474" }],
      hasMap: false,
    },
    {
      name: "RMS Espaços Cirúrgicos",
      address: "Av. Marquês de São Vicente, 2219\nConjs. 711, 713, 715 e 815 — Água Branca\nSão Paulo/SP",
      contacts: [{ label: "Telefone", value: "(11) 5242-3246" }],
      hasMap: false,
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
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(46, 125, 82, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#1A3D2B" }}>Consultório</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Onde nos encontrar
          </h3>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Atendimento em clínicas e centros cirúrgicos de referência em São Paulo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border"
                  style={{ borderColor: "rgba(46, 125, 82, 0.15)" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EBF3EE" }}>
                    <feature.icon className="w-5 h-5" style={{ color: "#2E7D52" }} />
                  </div>
                  <span className="font-medium pt-1.5" style={{ color: "#212529" }}>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: "rgba(46, 125, 82, 0.2)", backgroundColor: "rgba(235, 243, 238, 0.4)" }}
            >
              {units.map((unit, index) => (
                <div
                  key={index}
                  className={`p-5 ${index < units.length - 1 ? "border-b" : ""}`}
                  style={{ borderColor: "rgba(46, 125, 82, 0.12)" }}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#2E7D52" }} />
                    <div className="flex-1">
                      <p className="font-bold mb-1" style={{ color: "#212529" }}>{unit.name}</p>
                      {unit.address && (
                        <p className="text-sm mb-2 whitespace-pre-line" style={{ color: "#3C3C3C" }}>
                          {unit.address}
                        </p>
                      )}
                      {unit.contacts.map((c, ci) => (
                        <p key={ci} className="text-sm font-medium flex items-center gap-1.5" style={{ color: "#2E7D52" }}>
                          <Phone className="w-3.5 h-3.5" />
                          {c.label}: {c.value}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border"
            style={{ borderColor: "rgba(46, 125, 82, 0.15)", position: "relative", minHeight: "480px" }}
          >
            <iframe
              src="https://maps.google.com/maps?f=q&hl=pt-BR&q=Alameda+Campinas,+1100,+Jardins,+S%C3%A3o+Paulo,+SP&z=16&ie=UTF8&output=embed"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica Alumia — Dra. Aline Marcilio"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
