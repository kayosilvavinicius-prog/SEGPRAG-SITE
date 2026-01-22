import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ShieldCheck, 
  Bug, 
  MousePointer2, 
  Droplets, 
  Award, 
  ClipboardCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  HardHat,
  Building2,
  Home,
  Factory,
  UtensilsCrossed,
  Layers,
  MessageCircle,
  Activity
} from 'lucide-react';

const App = () => {
  const WHATSAPP_LINK = "https://wa.link/13kka7";
  const LOGO_URL = "https://github.com/kayosilvavinicius-prog/FILHOS-COM-ROTINA/blob/72f7822c0138a3de0dd86ed3245326ce6ad88bb2/logo%20seg%20prag%20.jpg?raw=true";
  const HERO_IMAGE_URL = "https://github.com/kayosilvavinicius-prog/FILHOS-COM-ROTINA/blob/72f7822c0138a3de0dd86ed3245326ce6ad88bb2/segprag1.png?raw=true";
  const AUTHORITY_IMAGE_URL = "https://github.com/kayosilvavinicius-prog/FILHOS-COM-ROTINA/blob/c05015c6b4246530b47d1bf36c03274a3e10e6da/segprag2.png?raw=true";
  const PRIVACY_POLICY_URL = "https://policies.google.com/privacy?hl=pt-BR";

  const services = [
    {
      id: 'desinsetizacao',
      icon: <Bug className="w-8 h-8" />,
      title: 'Desinsetização',
      description: 'Controle rigoroso de insetos rasteiros e voadores com aplicação técnica de barreira química e biológica.'
    },
    {
      id: 'desratizacao',
      icon: <MousePointer2 className="w-8 h-8" />,
      title: 'Desratização',
      description: 'Identificação de pontos críticos e biologia da praga para controle estratégico com iscagem monitorada.'
    },
    {
      id: 'descupinizacao',
      icon: <Layers className="w-8 h-8" />,
      title: 'Descupinização',
      description: 'Proteção estrutural contra colônias de cupins, utilizando métodos de perfuração e barreira de proteção.'
    },
    {
      id: 'higienizacao',
      icon: <Droplets className="w-8 h-8" />,
      title: 'Higienização de Reservatórios',
      description: 'Limpeza profunda e desinfecção de caixas d\'água garantindo a potabilidade e conformidade sanitária.'
    },
    {
      id: 'sanitizacao',
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Sanitização de Ambientes',
      description: 'Nebulização técnica para redução de patógenos em ambientes de alta circulação e áreas industriais.'
    },
    {
      id: 'bebedouros',
      icon: <Activity className="w-8 h-8" />,
      title: 'Desinfecção de Bebedouros',
      description: 'Protocolo sanitário específico para garantir a qualidade da água em equipamentos de uso coletivo.'
    }
  ];

  const sectors = [
    { name: 'Indústrias Alimentícias', icon: <Factory className="w-6 h-6" /> },
    { name: 'Restaurantes', icon: <UtensilsCrossed className="w-6 h-6" /> },
    { name: 'Condomínios', icon: <Building2 className="w-6 h-6" /> },
    { name: 'Empresas & Comércios', icon: <Building2 className="w-6 h-6" /> },
    { name: 'Residências', icon: <Home className="w-6 h-6" /> }
  ];

  const clientLogos = [
    { name: "Cimento Itambé", url: "https://github.com/kayosilvavinicius-prog/FILHOS-COM-ROTINA/blob/7163942c28c674bf607fcd566565b6ae3063f46a/cimento%20itambe%20logo.png?raw=true", className: "w-56 h-28" },
    { name: "PHD", url: "https://github.com/kayosilvavinicius-prog/FILHOS-COM-ROTINA/blob/7163942c28c674bf607fcd566565b6ae3063f46a/logo%20phd.png?raw=true", className: "w-48 h-24" },
    { name: "Hambre", url: "https://github.com/kayosilvavinicius-prog/FILHOS-COM-ROTINA/blob/7163942c28c674bf607fcd566565b6ae3063f46a/hambre%20logo.png?raw=true", className: "w-48 h-24" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">Falar no WhatsApp</span>
      </a>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-16 pb-12 lg:pt-24 lg:pb-20 overflow-hidden bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight text-balance">
                Proteção Sanitária e <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Eficiência Industrial.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                A empresa de dedetização mais confiável e eficiente da região. Especializada no controle de pragas com foco em saúde pública, segurança ambiental e conformidade ANVISA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href={WHATSAPP_LINK} target="_blank" className="group flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl hover:shadow-2xl">
                  <span>Solicitar Orçamento Grátis</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-[3rem] blur-2xl opacity-50"></div>
              <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden float-animation">
                <img 
                  src={HERO_IMAGE_URL} 
                  alt="" 
                  className="rounded-[2rem] w-full h-auto max-h-[550px] object-contain block mx-auto"
                />
                <div className="absolute bottom-8 left-10 right-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden p-1">
                      <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 uppercase text-xs">Segurança & Qualidade</p>
                      <p className="text-xs text-slate-600">Equipe Técnica Altamente Qualificada.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Ticker */}
      <section className="py-8 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center space-x-2"><ShieldCheck className="w-5 h-5" /><span className="font-bold text-xs md:text-sm">ANVISA COMPLIANT</span></div>
          <div className="flex items-center space-x-2"><HardHat className="w-5 h-5" /><span className="font-bold text-xs md:text-sm">NR33 & NR35</span></div>
          <div className="flex items-center space-x-2"><ClipboardCheck className="w-5 h-5" /><span className="font-bold text-xs md:text-sm">LAUDOS TÉCNICOS</span></div>
          <div className="flex items-center space-x-2"><Award className="w-5 h-5" /><span className="font-bold text-xs md:text-sm">EQUIPE CERTIFICADA</span></div>
        </div>
      </section>

      {/* About Section */}
      <section id="empresa" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={AUTHORITY_IMAGE_URL} 
                className="rounded-3xl shadow-2xl w-full h-auto max-h-[600px] object-contain block mx-auto" 
                alt="" 
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-6 md:p-8 rounded-3xl shadow-2xl border-4 border-white">
                <p className="text-3xl md:text-4xl font-extrabold">+17 Anos</p>
                <p className="text-[10px] md:text-xs font-medium opacity-80 uppercase tracking-widest mt-1">De Experiência Técnica</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-xs font-bold text-green-600 tracking-[0.2em] uppercase">Sobre a SEGPRAG</h2>
              <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">Autoridade Técnica em <span className="text-blue-600">Ambientes Críticos.</span></h3>
              <p className="text-md text-slate-600 leading-relaxed">
                A SEGPRAG atua no controle de pragas urbanas com profissionais de mais de 17 anos de experiência. Somos formados por uma equipe altamente capacitada, utilizando equipamentos modernos e produtos certificados.
              </p>
              <div className="grid gap-3 py-2">
                {[
                  { title: 'Excelência Operacional', desc: 'Compromisso com a saúde e segurança dos clientes.' },
                  { title: 'Conformidade Legal', desc: 'Laudos técnicos completos (NR33, NR35, PCMSO).' },
                  { title: 'Inovação Constante', desc: 'Pulverização, atomização e gel de última geração.' },
                  { title: 'Ética & Transparência', desc: 'Foco em resultados reais com honestidade.' }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-green-200 transition-all group">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center font-bold group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-all">
                <span>Falar com o Especialista</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <h2 className="text-xs font-bold text-blue-600 tracking-[0.2em] uppercase">Nossos Serviços</h2>
            <h3 className="text-3xl font-bold text-slate-900">Controle Integrado de Pragas</h3>
            <p className="text-md text-slate-600">Soluções completas com diagnóstico técnico e estudo da biologia da praga-alvo.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.id} className="group service-card bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
                <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:bg-blue-600 group-hover:text-white">
                  {React.cloneElement(s.icon as React.ReactElement, { className: 'w-6 h-6' })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="h-1 w-10 bg-green-500 rounded-full"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center space-x-2 bg-green-600 text-white px-10 py-5 rounded-2xl text-lg font-extrabold shadow-xl hover:bg-green-700 transition-all">
                <span>Solicitar Orçamento de Serviços</span>
                <ArrowRight className="w-5 h-5" />
             </a>
          </div>
        </div>
      </section>

      {/* Industrial Visual Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1541888941255-081d746394dd?q=80&w=1600&auto=format&fit=crop" 
              alt="" 
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center p-8 lg:p-16">
               <div className="max-w-xl space-y-4">
                 <h4 className="text-2xl lg:text-3xl font-bold text-white">Práticas Sustentáveis e Métodos de Última Geração.</h4>
                 <p className="text-white/80 text-md">Protegemos ambientes críticos garantindo que seu espaço esteja em conformidade total com a vigilância sanitária.</p>
                 <a href={WHATSAPP_LINK} target="_blank" className="inline-block bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-green-500 hover:text-white transition-all">
                    Obter Consultoria Técnica
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">Clientes Atendidos</h2>
            <h3 className="text-2xl font-bold text-slate-900 italic">Grandes empresas que confiam em nossa autoridade técnica</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
             {clientLogos.map((logo, i) => (
               <div key={i} className={`flex justify-center items-center grayscale hover:grayscale-0 transition-all cursor-default group p-2 ${logo.className}`}>
                  <img src={logo.url} alt={logo.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform" />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-bold text-green-400 tracking-[0.2em] uppercase mb-4">Áreas de Atuação</h2>
          <h3 className="text-3xl font-bold mb-10">Atendimento Especializado para seu Setor</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((sector, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 flex items-center space-x-3 hover:bg-white/10 transition-all cursor-default group">
                <div className="text-green-400 group-hover:rotate-12 transition-transform">{React.cloneElement(sector.icon as React.ReactElement, { className: 'w-5 h-5' })}</div>
                <span className="font-bold text-white/90 text-sm">{sector.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-xs font-bold text-green-600 tracking-[0.2em] uppercase">Contato Direto</h2>
                <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">Agende um Diagnóstico Técnico.</h3>
                <p className="text-md text-slate-600 leading-relaxed font-medium">Equipe Técnica: (41) 98868-2955</p>
              </div>

              <div className="space-y-6">
                <a href={WHATSAPP_LINK} target="_blank" className="flex items-center space-x-6 group p-3 -ml-3 rounded-3xl hover:bg-slate-50 transition-all">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">WhatsApp Comercial</p>
                    <p className="text-xl font-bold text-slate-900 leading-tight">Falar com um Consultor Segprag</p>
                  </div>
                </a>
                <div className="flex items-center space-x-6 p-3 -ml-3">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">E-mail Administrativo</p>
                    <p className="text-lg font-bold text-slate-900">comercial@segprag.com.br</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-3 -ml-3">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Endereço</p>
                    <p className="text-md font-bold text-slate-900 leading-snug">Rua Sudão, 362, LJ 01, Pineville<br/>Pinhais – PR</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 lg:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group max-w-lg mx-auto lg:ml-auto lg:mr-0 w-full">
               <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 blur-2xl group-hover:bg-green-500/20 transition-all"></div>
              <div className="relative z-10 space-y-8">
                <div className="text-center text-white">
                  <div className="inline-flex p-3 rounded-2xl bg-green-500/10 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <ShieldCheck className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Solicite seu Orçamento</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Atendimento prioritário via WhatsApp para diagnósticos técnicos e cotações imediatas.</p>
                </div>
                <div className="space-y-4">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-extrabold transition-all shadow-xl shadow-green-900/20 flex items-center justify-center space-x-3 group/btn"
                  >
                    <MessageCircle className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    <span>Obter Orçamento Agora</span>
                  </a>
                  <p className="text-center text-[9px] text-white/30 font-black uppercase tracking-[0.2em]">Atendimento: Pinhais e Região</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 pb-12 border-b border-white/10">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-white rounded-lg overflow-hidden border border-white/10 p-1">
                  <img src={LOGO_URL} alt="Segprag Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-black tracking-tighter">SEGPRAG</span>
              </div>
              <p className="text-white/40 leading-relaxed max-w-md text-sm">
                Empresa especializada no controle de pragas urbanas com 17 anos de tradição. Autoridade técnica e conformidade total com a ANVISA.
              </p>
              <div className="pt-2">
                <a href={PRIVACY_POLICY_URL} target="_blank" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">Diferenciais Técnicos</h5>
              <div className="space-y-3">
                 <div className="flex items-center space-x-3 text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Certificação NR33 e NR35</span>
                 </div>
                 <div className="flex items-center space-x-3 text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Produtos Certificados ANVISA</span>
                 </div>
                 <div className="flex items-center space-x-3 text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Equipe com +17 Anos de Know-how</span>
                 </div>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-[9px] font-bold uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} SEGPRAG Controle de Pragas. Todos os direitos reservados.</p>
            <div className="flex space-x-6">
              <p>Saúde Pública • Segurança Ambiental • Eficiência Técnica</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);