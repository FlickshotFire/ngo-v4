import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronRight, Users, GraduationCap, MapPin, Heart, Shield, Car, Briefcase, Book, Wifi, BookOpen, Scissors, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";


const WorkAreas = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedArea, setSelectedArea] = useState(0);

  const workAreas = [
    {
      id: 1,
      title: "Women Employment Opportunities",
      description: "We create income-generating opportunities for women in rural and urban areas through skill development and employment in eco-friendly product manufacturing.",
      image: "/images/women-employment.jpg",
      category: "Empowerment",
      icon: Users,
      features: [
        "Skill development programs",
        "Sustainable employment creation",
        "Economic empowerment initiatives",
        "Rural and urban outreach"
      ],
      stats: { beneficiaries: "500+", impact: "Very High", duration: "Ongoing" }
    },
    {
      id: 2,
      title: "Free BPL Education",
      description: "We offer free education to children from below poverty line families, ensuring no child is denied the right to learn due to financial constraints.",
      image: "/images/education.jpg",
      category: "Education",
      icon: BookOpen,
      features: [
        "Free education programs",
        "Learning materials provision",
        "Teacher training initiatives",
        "Scholarship programs"
      ],
      stats: { beneficiaries: "1000+", impact: "Very High", duration: "Ongoing" }
    },
    {
      id: 3,
      title: "Remote Location Education",
      description: "We bridge the education gap in remote and underserved locations by providing access to quality education through mobile teaching units and digital tools.",
      image: "/images/remote-education.jpg",
      category: "Education",
      icon: Wifi,
      features: [
        "Mobile classrooms",
        "Digital learning tools",
        "Volunteer teacher programs",
        "Educational resource distribution"
      ],
      stats: { beneficiaries: "300+", impact: "High", duration: "Ongoing" }
    },
    {
      id: 4,
      title: "Weaver Empowerment India",
      description: "We support traditional weavers with modern training, quality raw materials, and market access to preserve their craft and improve their livelihoods.",
      image: "/images/weaver-empowerment.jpg",
      category: "Empowerment",
      icon: Scissors,
      features: [
        "Fair wage initiatives",
        "Traditional skill preservation",
        "Market linkage support",
        "Quality improvement programs"
      ],
      stats: { beneficiaries: "200+", impact: "High", duration: "Ongoing" }
    },
    {
      id: 5,
      title: "Women Hygiene Awareness",
      description: "We conduct comprehensive health and hygiene awareness programs for women, providing education and resources to improve their quality of life.",
      image: "/images/hygiene-awareness.jpg",
      category: "Health",
      icon: Heart,
      features: [
        "Health awareness campaigns",
        "Hygiene education programs",
        "Resource distribution",
        "Community health initiatives"
      ],
      stats: { beneficiaries: "300+", impact: "Medium", duration: "Ongoing" }
    },
    {
      id: 6,
      title: "Do Not Honk Awareness on Road",
      description: "We promote safer and cleaner environments by creating awareness about noise pollution on roads and encouraging responsible driving behaviors.",
      image: "/images/jhola-movement-3.jpg",
      category: "Environment",
      icon: Car,
      features: [
        "Noise pollution awareness",
        "Road safety campaigns",
        "Community engagement",
        "Behavioral change initiatives"
      ],
      stats: { beneficiaries: "1500+", impact: "Medium", duration: "Ongoing" }
    },
    {
      id: 7,
      title: "Housing & Transportation",
      description: "Providing secure housing and safe transportation solutions for women and families in rural areas.",
      image: "/images/women-employment.jpg",
      category: "Infrastructure",
      icon: Home,
      features: [
        "Affordable housing initiatives",
        "Safe transport networks",
        "Community infrastructure development",
        "Rural accessibility improvements"
      ],
      stats: { beneficiaries: "400+", impact: "High", duration: "Ongoing" }
    }
  ];

  return (
    <section id="work-areas" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/10 via-transparent to-green-950/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
            <Heart className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Our Impact</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Areas of</span>
            <br />
            <span className="gradient-text">Social Concern</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            RA works on the following areas of social concerns, creating sustainable
            impact across communities through innovative approaches and dedicated service.
          </p>
        </div>

        {/* Work areas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-black border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:scale-[1.02] group shadow-2xl hover:shadow-yellow-500/20">
                  {/* Elegant gold accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />

                  {/* Content Container */}
                  <div className="relative p-8 z-20 h-full bg-gradient-to-br from-black via-gray-900 to-black">
                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold rounded-full shadow-lg">
                      {area.category}
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-xl">
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white leading-tight">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {area.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {area.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="flex justify-between items-center mb-6 text-xs border-t border-gray-800 pt-4">
                      <div className="text-gray-400">
                        <span className="font-semibold text-yellow-400">{area.stats.beneficiaries}</span> beneficiaries
                      </div>
                      <div className="text-gray-400">
                        Impact: <span className="font-semibold text-yellow-400">{area.stats.impact}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/30 group-hover:translate-y-[-2px]">
                      Learn More
                    </button>
                  </div>

                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto glass p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Sustainable Living, Empowered Communities
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Every initiative we undertake follows our core principle of creating sustainable,
              long-term impact while empowering communities to become self-reliant.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Join Our Mission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAreas;