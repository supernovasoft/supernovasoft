import { ArrowRight, Code, Cloud, Phone, Shield, Server, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Background3D } from '@/components/3d/Background3D';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <Background3D />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              We Build <span className="text-primary">Amazing</span> Web Applications
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl"
            >
              Supernova Soft delivers high-quality, secure web solutions using cutting-edge technology that adds value to your business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#contact">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-slate-900" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </motion.div>
          </div>
          
          <div className="flex-1 hidden md:block">
            {/* The 3D background provides enough visual interest, but we could add a floating element here if desired */}
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative"
            >
                {/* Placeholder for specific hero illustration if needed, 
                    but the particle field covers the background well. 
                    Let's maybe put a glass card here? */}
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowRight className="h-6 w-6 rotate-90" />
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, description, features }: { icon: any, title: string, description: string, features: string[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
    >
      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-slate-500">
            <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "We create responsive, high-performance web applications using the latest technologies and frameworks.",
      features: ["Frontend & Backend Development", "E-Commerce Solutions", "Progressive Web Apps", "API Integration"]
    },
    {
      icon: Cloud,
      title: "DevOps",
      description: "We implement and optimize your cloud infrastructure for scalability, performance, and cost-efficiency.",
      features: ["AWS Cloud Solutions", "CI/CD Pipeline Setup", "Containerization & Orchestration", "Infrastructure as Code"]
    },
    {
      icon: Phone,
      title: "Telecommunication",
      description: "We provide advanced telecommunication solutions including VoIP, PBX systems, and call center setups.",
      features: ["Virtual PBX Solutions", "Call Center Systems", "Voice Over IP (VoIP)", "High-Quality Voice Transfer"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our <span className="text-primary">Digital Services</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">We offer comprehensive digital solutions to transform your business</p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tools() {
  return (
    <section className="py-20 bg-[#fffa65]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Try our <span className="text-slate-900">Domain & IP Query Engine</span></h2>
            <p className="text-lg text-slate-800 mb-8">Quickly lookup domain and IP information with our powerful tool</p>
            
            <form action="https://tools.supernovasoft.com/tool/" className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                name="q" 
                placeholder="Enter domain or IP (e.g., google.com or 1.1.1.1)" 
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                required
              />
              <Button type="submit" className="bg-slate-900 text-white hover:bg-slate-800 h-auto py-3 px-6">
                Analyze
              </Button>
            </form>
          </div>
          <div className="flex-1">
             {/* Illustration placeholder - could use Lucide icons or a simple SVG */}
             <div className="relative h-64 w-full bg-slate-900 rounded-lg shadow-xl overflow-hidden p-8 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                    {/* Abstract tech pattern */}
                    <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white rounded-full" />
                </div>
                <div className="text-center z-10">
                    <Server className="h-16 w-16 text-primary mx-auto mb-4" />
                    <div className="h-2 w-32 bg-slate-700 rounded mb-2 mx-auto" />
                    <div className="h-2 w-24 bg-slate-700 rounded mx-auto" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
        >
            <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
                <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                <p className="text-sm text-slate-600">{description}</p>
            </div>
        </motion.div>
    );
}

export function Solutions() {
    const solutions = [
        {
            icon: Shield,
            title: "High-Quality & Secure Applications",
            description: "We deliver robust and secure web applications using the latest technology stacks."
        },
        {
            icon: Upload,
            title: "AWS Cloud Implementation",
            description: "We migrate and implement your web infrastructure on AWS with up-to-date systems."
        },
        {
            icon: Phone,
            title: "Telecommunication Solutions",
            description: "We implement virtual PBX and call center solutions with high-quality voice transfer."
        },
        {
            icon: Code,
            title: "Security Implementation",
            description: "We apply quality security solutions to protect your business from threats."
        },
        {
            icon: Server,
            title: "Scalable Infrastructure",
            description: "We move your web applications to AWS with high scalability and best performance."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                            We Offer the <span className="text-primary">Best Solutions</span> for Your Business
                        </h2>
                        <div className="grid gap-4">
                            {solutions.map((sol, idx) => (
                                <SolutionItem key={idx} {...sol} />
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-full max-w-md aspect-square bg-slate-900 rounded-2xl overflow-hidden shadow-2xl p-8">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500" />
                            {/* Simple illustration code representation */}
                            <div className="font-mono text-xs md:text-sm text-green-400 space-y-2 opacity-80">
                                <p>&gt; initializing_solutions...</p>
                                <p>&gt; loading_security_protocols...</p>
                                <p className="text-blue-400">&gt; aws_cloud_connect --region eu-central-1</p>
                                <p>&gt; optimizing_infrastructure...</p>
                                <p className="text-yellow-400">&gt; deployment_status: SUCCESS</p>
                                <br />
                                <div className="p-4 border border-slate-700 rounded bg-slate-800/50">
                                    <p className="text-slate-400">System Status</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-white">Operational</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-primary">Touch</span></h2>
                    <p className="text-slate-400">Reach out to us for inquiries, quotes, or collaborations</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <div className="text-primary">📍</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Location</h4>
                                <p className="text-slate-400">Istanbul, Turkey</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <div className="text-primary">✉️</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Email</h4>
                                <p className="text-slate-400">info@supernovasoft.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <div className="text-primary">📞</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Phone</h4>
                                <p className="text-slate-400">+90 531 208 9995</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                                    <input id="name" type="text" className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-primary text-white" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                                    <input id="email" type="email" className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-primary text-white" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                                <input id="subject" type="text" className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-primary text-white" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Your Message</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-primary text-white" required />
                            </div>
                            <Button type="submit" size="lg" className="w-full md:w-auto">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <Services />
            <Tools />
            <Solutions />
            <Contact />
        </div>
    );
}
