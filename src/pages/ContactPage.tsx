import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import { Footer } from "../components/Footer";
import ContactIcon from "../components/icons/ContactIcon";
import { useNewsletter } from "../hooks/useNewsletter";
import { GradientBlurBackground } from "../components/GradientBlurBackground";
import { SEOHead } from "../components/SEOHead";

export function ContactPage() {
  const { email, setEmail, handleSubmit, isLoading } = useNewsletter();
  const [formData, setFormData] = useState({
    name: "",
    emailContact: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        emailContact: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
   >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white w-full">
      <SEOHead
        title="Contato | Eduardo Pires"
        description="Fale com Eduardo Pires sobre produto, estratégia e tecnologia. Agenda aberta para novos projetos."
        type="website"
        tags={["contato", "produto", "estratégia", "tecnologia"]}
        breadcrumbs={[
          { name: 'Home', url: '/', position: 1 },
          { name: 'Contato', url: '/contato', position: 2 },
        ]}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 relative overflow-hidden">
        <GradientBlurBackground />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
           className="text-center"
         >
            <h1 className="text-4xl md:text-5xl lg:text-7xl mb-4">
              Contato
            </h1>
            <div className="h-[4px] w-[102px] bg-gradient-to-r from-[#9532f7] to-[#150d1d] mx-auto mb-6 md:mb-8" />
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Vamos conversar sobre seu próximo projeto!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
           className="max-w-4xl mx-auto"
         >
            <div className="bg-[#121214] p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl border border-[#8620e0]/30">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 text-center">
                Envie sua mensagem
              </h2>
              <p className="text-sm md:text-base text-gray-400 text-center mb-6 md:mb-8 px-4">
                Preencha o formulário abaixo e entraremos em
                contato em breve
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                 className="text-center py-12"
               >
                  <CheckCircle
                    size={64}
                   className="mx-auto mb-4 text-green-500"
                  />
                  <h3 className="text-2xl mb-2">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-gray-400">
                    Obrigado por entrar em contato.
                    Responderemos em breve.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleContactSubmit}
                 className="space-y-6"
               >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                       className="block text-sm mb-2 text-gray-300"
                       
                     >
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-[#0A0A0F] border border-[#8620e0]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8620e0] transition-colors"
                       
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="emailContact"
                       className="block text-sm mb-2 text-gray-300"
                       
                     >
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="emailContact"
                        name="emailContact"
                        required
                        value={formData.emailContact}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-[#0A0A0F] border border-[#8620e0]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8620e0] transition-colors"
                       
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                       className="block text-sm mb-2 text-gray-300"
                       
                     >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-[#0A0A0F] border border-[#8620e0]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8620e0] transition-colors"
                       
                        placeholder="(11) 98765-4321"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                       className="block text-sm mb-2 text-gray-300"
                       
                     >
                        Assunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-[#0A0A0F] border border-[#8620e0]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8620e0] transition-colors"
                       
                        placeholder="Sobre o que você quer falar?"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                     className="block text-sm mb-2 text-gray-300"
                     
                   >
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                     className="w-full px-4 py-3 bg-[#0A0A0F] border border-[#8620e0]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8620e0] transition-colors resize-none"
                     
                      placeholder="Conte-nos mais sobre seu projeto..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                   className="w-full px-8 py-4 bg-gradient-to-r from-[#8620e0] to-[#f900f1] rounded-lg hover:shadow-lg hover:shadow-[#8620e0]/50 transition-all flex items-center justify-center gap-2"
                   
                 >
                    <Send size={20} />
                    Enviar Mensagem
                  </motion.button>

                  <p className="text-sm text-gray-500 text-center">
                    * Campos obrigatórios
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Cards - Minimalist Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
             className="flex items-center gap-3 p-4 rounded-lg bg-[#121214]/50 border border-[#8620e0]/10 hover:border-[#8620e0]/30 transition-all"
           >
              <div className="w-8 h-8 bg-gradient-to-r from-[#8620e0] to-[#f900f1] rounded-full flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div className="flex flex-col min-w-0">
                <p className="text-[14px] text-gray-400 mb-0.5">
                  E-mail
                </p>
                <p className="text-[13px] text-gray-300 truncate">
                  contato@epmartins.com.br
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
             className="flex items-center gap-3 p-4 rounded-lg bg-[#121214]/50 border border-[#8620e0]/10 hover:border-[#8620e0]/30 transition-all"
           >
              <div className="w-8 h-8 bg-gradient-to-r from-[#8620e0] to-[#f900f1] rounded-full flex items-center justify-center shrink-0">
                <Phone size={16} />
              </div>
              <div className="flex flex-col min-w-0">
                <p className="text-[14px] text-gray-400 mb-0.5">
                  Telefone
                </p>
                <p className="text-[13px] text-gray-300 truncate">
                  +55 (11) 94458-2233
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
             className="flex items-center gap-3 p-4 rounded-lg bg-[#121214]/50 border border-[#8620e0]/10 hover:border-[#8620e0]/30 transition-all"
           >
              <div className="w-8 h-8 bg-gradient-to-r from-[#8620e0] to-[#f900f1] rounded-full flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </div>
              <div className="flex flex-col min-w-0">
                <p className="text-[14px] text-gray-400 mb-0.5">
                  Endereço
                </p>
                <p className="text-[13px] text-gray-300 truncate">
                  São Paulo, SP - Brasil
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer
        onNewsletterSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        isLoading={isLoading}
      />
    </div>
  );
}