import { useState } from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    setIsLoading(true);

    // Simular envio
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  const handleWhatsApp = () => {
    // Substitua este número pelo seu número de WhatsApp (com código do país, sem espaços ou caracteres especiais)
    const phoneNumber = "5583987858044";
    const message = formData.message
      ? `Olá! Meu nome é ${formData.name || "Visitante"}. ${formData.message}`
      : `Olá! Meu nome é ${formData.name || "Visitante"}. Gostaria de saber mais sobre seus serviços.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-0">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Vamos <span className="text-accent">conversar</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar sua marca a crescer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a
                href="mailto:livia.vitoranr@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                livia.vitoranr@gmail.com
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Clique para enviar email
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Telefone</h3>
              <a
                href="tel:+5583987858044"
                className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                +55 (83) 98785-4044
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Clique para ligar
              </p>
            </Card>

            <Card className="p-6 bg-accent/5 border-accent/20 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <button
                onClick={handleWhatsApp}
                className="text-accent hover:text-accent/80 transition-colors text-sm font-medium"
              >
                Clique para conversar
              </button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me mais sobre seu projeto..."
                    className="border-border resize-none"
                    rows={5}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="hover:bg-accent/90 text-white gap-2 flex-1"
                  >
                    {isLoading ? "Enviando..." : "Enviar Mensagem por Email"}
                    <Send className="w-4 h-4" />
                  </Button>
                  <Button
                    type="button"
                    onClick={handleWhatsApp}
                    className="hover:bg-accent/90 text-white gap-2 flex-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enviar por WhatsApp
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
