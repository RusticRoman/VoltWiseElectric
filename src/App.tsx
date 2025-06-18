import React, { useState } from 'react';
import { 
  Zap, 
  Car, 
  Home, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star,
  Menu,
  X,
  Wrench,
  Battery,
  Wifi
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: Car,
      title: "EV Charger Installation",
      description: "Professional installation of Level 2 home EV charging stations. From permits to final inspection, we handle everything.",
      features: ["EV Wall Connector", "ChargePoint Home", "Level 2 Fast Charging", "Electrical Panel Upgrades"]
    },
    {
      icon: Wrench,
      title: "Electrical Troubleshooting",
      description: "Expert diagnosis and repair of electrical issues. Available 24x6 for emergency electrical problems.",
      features: ["Circuit Breaker Issues", "Outlet Problems", "Electrical Safety Inspections", "Code Compliance"]
    },
    {
      icon: Home,
      title: "Smart Home Installation",
      description: "Transform your home with intelligent automation systems. Professional setup and configuration included.",
      features: ["Smart Lighting Systems", "Home Security Integration", "Voice Control Setup", "Energy Monitoring"]
    }
  ];

  const testimonials = [
    {
      name: "R. Kagan",
      location: "San Francisco, CA",
      rating: 5,
      text: "Excellent EV charger installation! Professional, clean work, and explained everything clearly. My Tesla charges perfectly now."
    },
    {
      name: "L. Karas",
      location: "San Ramon, CA",
      rating: 5,
      text: "Fixed our electrical issues quickly and safely. Very knowledgeable about smart home systems too. Highly recommend!"
    },
    {
      name: "M. Borsand",
      location: "Concord, CA",
      rating: 5,
      text: "Outstanding smart home installation. The automated lighting and security system work flawlessly. Great attention to detail."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600 mr-2" />
              <span className="font-bold text-xl text-gray-800">VoltWise Electric</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Reviews</a>
                <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">Get Quote</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Reviews</a>
              <a href="#contact" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium">Get Quote</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Expert Electrical
                <span className="text-blue-600"> Solutions</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Professional EV charger installation, electrical troubleshooting, and smart home automation. 
                Licensed, insured, and trusted by homeowners across the city.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                  Get Free Estimate
                </a>
                <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Service
                </a>
              </div>

              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-2" />
                  Licensed & Insured
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2" />
                  24x6 Emergency
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/9800009/pexels-photo-9800009.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Industrial EV charging station with electric vehicle technology" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-sm font-semibold text-gray-800 mt-1">500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From EV charger installations to smart home automation, we provide comprehensive electrical solutions 
              with a focus on safety, efficiency, and modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-gray-50 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose VoltWise Electric?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience in residential and commercial electrical work, 
                we've built our reputation on quality craftsmanship, safety, and customer satisfaction. 
                Our team stays current with the latest electrical codes and emerging technologies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Battery className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">EV Charging Specialists</h4>
                    <p className="text-sm text-gray-600 mt-1">Certified installers for all major EV charging brands</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Wifi className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Home Experts</h4>
                    <p className="text-sm text-gray-600 mt-1">Advanced automation and IoT integration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Safety First</h4>
                    <p className="text-sm text-gray-600 mt-1">All work meets or exceeds electrical codes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Emergency Service</h4>
                    <p className="text-sm text-gray-600 mt-1">24x6 availability for urgent electrical issues</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/30641386/pexels-photo-30641386.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Close-up of smart light switch and door handle" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied customers across the city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-white max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Contact us today for a free consultation and estimate. We're here to help with all your electrical needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-semibold text-lg mb-2">Call or Text</div>
                  <div className="text-blue-100 text-lg">(650) 210-8888</div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-semibold text-lg mb-2">Email</div>
                  <div className="text-blue-100 text-lg">vova650@gmail.com</div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-semibold text-lg mb-2">Hours</div>
                  <div className="text-blue-100 text-lg">Mon-Fri 7AM-6PM</div>
                  <div className="text-blue-100 text-sm">Emergency 24x6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-blue-400 mr-2" />
                <span className="font-bold text-xl">VoltWise Electric</span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Professional electrical services including EV charger installation, troubleshooting, 
                and smart home automation. Licensed, insured, and trusted across the Bay Area.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Shield className="h-4 w-4 mr-2" />
                Licensed and Fully Insured
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>EV Charger Installation</li>
                <li>Electrical Troubleshooting</li>
                <li>Smart Home Setup</li>
                <li>Panel Upgrades</li>
                <li>Emergency Service</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(650) 210-8888</li>
                <li>vova650@gmail.com</li>
                <li>San Francisco Bay Area</li>
                <li>24x6 Emergency</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VoltWise Electric. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;