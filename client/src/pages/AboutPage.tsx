
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { 
  Leaf, 
  Users, 
  GraduationCap, 
  Heart, 
  Award, 
  Target, 
  Eye, 
  Lightbulb,
  UserCheck,
  Handshake,
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";

const AboutPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState("vision");

  const [counters, setCounters] = useState({
    years: 0,
    communities: 0,
    women: 0,
    children: 0
  });

  useEffect(() => {
    if (inView) {
      const animateCounter = (target: number, key: keyof typeof counters) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      };

      animateCounter(11, 'years');
      animateCounter(50, 'communities');
      animateCounter(500, 'women');
      animateCounter(1000, 'children');
    }
  }, [inView]);

  const achievements = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Leading the fight against single-use plastic with our Jhola movement"
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Creating employment opportunities for women through sustainable practices"
    },
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "Providing free education to underprivileged children and remote communities"
    },
    {
      icon: Heart,
      title: "Community Welfare",
      description: "Comprehensive social work including health awareness and skill development"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Rex Karamveer Chakra Gold 2022 and Devbhoomi Rashtriya Ratan Award 2025"
    },
    {
      icon: Target,
      title: "Self-Sustainable Model",
      description: "Operating without external funding through our innovative Swadesi Hathkargha arm"
    }
  ];

  const tabs = [
    {
      id: "vision",
      label: "Vision & Mission",
      icon: Eye,
      content: {
        title: "Our Vision & Mission",
        description: siteContent.mission.vision,
        mission: siteContent.mission.mission,
        motto: siteContent.mission.motto
      }
    },
    {
      id: "team",
      label: "Our Team",
      icon: Users,
      content: {
        title: "Meet Our Dedicated Team",
        description: "Our experienced team of social workers, educators, and environmental activists work tirelessly to create positive change in communities across India.",
        members: [
          {
            name: "Dr. Anubha Vashishth",
            role: "Founder & President",
            image: "/images/anubha-vashishth.jpg",
            bio: "Rex Karamveer Chakra Gold 2022 recipient, leading environmental and social initiatives for over a decade."
          },
          {
            name: "Team Member 2",
            role: "Program Director",
            image: "/images/team-member.jpg",
            bio: "Dedicated to empowering communities through sustainable development programs."
          }
        ]
      }
    },
    {
      id: "allies",
      label: "Our Allies",
      icon: Handshake,
      content: {
        title: "Our Valued Partners & Allies",
        description: "We collaborate with various organizations, government bodies, and community leaders to amplify our impact and reach more communities in need.",
        partners: [
          {
            name: "Community Partners",
            type: "Local Organizations",
            description: "Grassroots organizations helping us reach remote communities"
          },
          {
            name: "Educational Institutions",
            type: "Schools & Colleges",
            description: "Academic partners supporting our education initiatives"
          },
          {
            name: "Government Bodies",
            type: "Official Support",
            description: "Working with local and state governments for policy implementation"
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      <div className="fixed inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.05)_60deg,transparent_120deg)]" />
      
      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${12 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-20">
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/20 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
                <Leaf className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-400 text-sm font-medium">Know Us Better</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">About</span>
                <br />
                <span className="gradient-text">Raghukul Aryawart</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {siteContent.about.description}
              </p>
            </div>

            {/* Stats counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {[
                { number: counters.years, label: "Years of Service", suffix: "+" },
                { number: counters.communities, label: "Communities Reached", suffix: "+" },
                { number: counters.women, label: "Women Empowered", suffix: "+" },
                { number: counters.children, label: "Children Educated", suffix: "+" }
              ].map((stat, index) => (
                <div key={index} className="text-center glass p-6 rounded-xl border border-green-500/20">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tab navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "outline"}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                        : "glass border-green-500/30 text-gray-300 hover:border-green-400/50"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </Button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="mb-20">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-all duration-500 ${
                    activeTab === tab.id ? "opacity-100 block" : "opacity-0 hidden"
                  }`}
                >
                  <Card className="glass border-green-500/20 p-8 rounded-2xl">
                    <CardContent className="space-y-8">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold gradient-text mb-4">
                          {tab.content.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                          {tab.content.description}
                        </p>
                      </div>

                      {/* Vision & Mission specific content */}
                      {tab.id === "vision" && (
                        <div className="space-y-12">
                          {/* Vision Section */}
                          <div className="glass p-8 rounded-xl border border-blue-500/20">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                              <div>
                                <div className="flex items-center mb-6">
                                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                                    <span className="text-2xl font-bold text-blue-400">1</span>
                                  </div>
                                  <h4 className="text-2xl font-bold text-blue-400">Vision</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                  To envision a harmonious world of not using single use plastic 
                                  bags and other products among people (of this whole planet) 
                                  that they choose Jhola to use such plastic products without but 
                                  instead of plastic bags against to giving up life saving 
                                  nature.
                                </p>
                              </div>
                              <div className="relative">
                                <div className="w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                  <img 
                                    src="/images/traditional-crafts.jpg" 
                                    alt="Traditional Handwoven Crafts"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl" style={{display: 'none'}}>
                                    🧵
                                  </div>
                                </div>
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full animate-pulse" />
                              </div>
                            </div>
                          </div>

                          {/* Mission Section */}
                          <div className="glass p-8 rounded-xl border border-green-500/20">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                              <div className="order-2 md:order-1 relative">
                                <div className="w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-green-500/20 to-teal-500/20">
                                  <img 
                                    src="/images/jhola-mission.jpg" 
                                    alt="Jhola Bags Mission"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center text-6xl" style={{display: 'none'}}>
                                    👜
                                  </div>
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500/30 rounded-full animate-pulse" />
                              </div>
                              <div className="order-1 md:order-2">
                                <div className="flex items-center mb-6">
                                  <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                                    <span className="text-2xl font-bold text-green-400">2</span>
                                  </div>
                                  <h4 className="text-2xl font-bold text-green-400">Mission</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                  We are committed to introducing alternative, improved, and 
                                  innovative environmentally friendly products that serve as safe 
                                  alternatives to plastic bags through our affordable, 
                                  practical housekeepers aim to meet eco-conscious habits in 
                                  people by actively disrupting the unconscious cycle of plastic.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                  Our journey includes sharing of food, providing employment, 
                                  teaching thinking awareness, gender reinforcement, mass 
                                  media campaign, and community enhancement, we strive to 
                                  make plastic free environment around us & for all the people. 
                                  through our efforts, our aim is to foster positive social 
                                  change across multiple dimensions of sustainable development 
                                  learning others and creating a powerful, for supporting action 
                                  that turns to the movement toward a plastic-free future.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Our Values */}
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="glass p-6 rounded-xl border border-purple-500/20 text-center">
                              <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                                <Lightbulb className="w-8 h-8 text-purple-400 mx-auto" />
                              </div>
                              <h4 className="text-xl font-semibold text-white mb-3">Innovation</h4>
                              <p className="text-gray-400 text-sm">
                                Creating innovative eco-friendly alternatives through traditional craftsmanship and modern sustainability practices.
                              </p>
                            </div>

                            <div className="glass p-6 rounded-xl border border-yellow-500/20 text-center">
                              <div className="bg-yellow-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                                <Heart className="w-8 h-8 text-yellow-400 mx-auto" />
                              </div>
                              <h4 className="text-xl font-semibold text-white mb-3">Compassion</h4>
                              <p className="text-gray-400 text-sm">
                                Driven by genuine care for our planet and communities, creating lasting positive environmental impact.
                              </p>
                            </div>

                            <div className="glass p-6 rounded-xl border border-green-500/20 text-center">
                              <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                                <UserCheck className="w-8 h-8 text-green-400 mx-auto" />
                              </div>
                              <h4 className="text-xl font-semibold text-white mb-3">Empowerment</h4>
                              <p className="text-gray-400 text-sm">
                                Empowering women through employment opportunities while preserving traditional weaving skills and crafts.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Team specific content */}
                      {tab.id === "team" && (
                        <div className="space-y-8">
                          {/* Founder Section */}
                          <div className="glass p-8 rounded-xl border border-green-500/20">
                            <div className="grid md:grid-cols-3 gap-8 items-start">
                              <div className="text-center">
                                <div className="w-64 h-80 mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-green-500/20 to-blue-500/20">
                                  <img 
                                    src="/images/dr-anubha-singh.jpg" 
                                    alt="Dr. Anubha Singh"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center text-6xl" style={{display: 'none'}}>
                                    👩‍💼
                                  </div>
                                </div>
                              </div>
                              
                              <div className="md:col-span-2">
                                <div className="mb-4">
                                  <h3 className="text-2xl font-bold text-white mb-2">DR. ANUBHA SINGH</h3>
                                  <p className="text-lg text-green-400 font-semibold mb-1">Founder & Jhola Woman</p>
                                  <p className="text-gray-400 italic">Multi-award winner</p>
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed">
                                  Dr. Anubha Singh is not just any professional, talented alumni performer but systems, environmentalists and social worker for problem. Men in natural traditional towards social work she has not simply identified the problem also provided the solution. She has own been the witness of numerous social issues during her Pratour Adragan, an axis between our personality wholistic and Athenian.
                                </p>

                                <div className="mb-6">
                                  <h4 className="text-lg font-semibold text-white mb-3">Awards & Recognition</h4>
                                  <div className="grid gap-3">
                                    <div className="flex items-center space-x-3">
                                      <Award className="w-5 h-5 text-yellow-500" />
                                      <span className="text-gray-300">Rex Karamveer Chakra Gold 2022</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                      <Award className="w-5 h-5 text-yellow-500" />
                                      <span className="text-gray-300">Devbhoomi Rashtriya Ratan Award 2025</span>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-3">Expertise</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {["Environmental Leadership", "Social Innovation", "Women Empowerment", "Sustainable Development"].map((skill, skillIndex) => (
                                      <span 
                                        key={skillIndex}
                                        className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Core Team Members */}
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Dr. Vandana Rajput */}
                            <div className="glass p-6 rounded-xl border border-blue-500/20">
                              <div className="text-center mb-4">
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                  <img 
                                    src="/images/dr-vandana-rajput.jpg" 
                                    alt="Dr. Vandana Rajput"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-3xl" style={{display: 'none'}}>
                                    👩‍⚕️
                                  </div>
                                </div>
                                <h4 className="text-lg font-semibold text-white mt-3">DR. VANDANA RAJPUT</h4>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                One of leading gynaecologist of Uttarakhand, she believes that every human being is in a healthy environment. She feels it is a great initiative to begin with and having a feeling empowered and contribute to society through their volunteer work.
                              </p>
                            </div>

                            {/* Mr. Ramesh Menon */}
                            <div className="glass p-6 rounded-xl border border-green-500/20">
                              <div className="text-center mb-4">
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-green-500/20 to-teal-500/20">
                                  <img 
                                    src="/images/ramesh-menon.jpg" 
                                    alt="Mr. Ramesh Menon"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center text-3xl" style={{display: 'none'}}>
                                    👨‍💼
                                  </div>
                                </div>
                                <h4 className="text-lg font-semibold text-white mt-3">MR. RAMESH MENON</h4>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                Entrepreneur Ship Chandling & Voyage Management & Renovans Contracting For oil Drilling Rigs. He is supporting us as a Member of International Sustainable Organization.
                              </p>
                            </div>

                            {/* Prof. (Dr.) Dewankar Goel */}
                            <div className="glass p-6 rounded-xl border border-purple-500/20">
                              <div className="text-center mb-4">
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
                                  <img 
                                    src="/images/prof-dewankar-goel.jpg" 
                                    alt="Prof. (Dr.) Dewankar Goel"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center text-3xl" style={{display: 'none'}}>
                                    👨‍🏫
                                  </div>
                                </div>
                                <h4 className="text-lg font-semibold text-white mt-3">PROF. (DR.) DEWANKAR GOEL</h4>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                Well known author and great published is books on his specialized with Arun Authors. His unique analytical assessment by imagination, also he is a Health Performance Technician.
                              </p>
                            </div>

                            {/* Mr. Piyush Darshan */}
                            <div className="glass p-6 rounded-xl border border-amber-500/20">
                              <div className="text-center mb-4">
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                                  <img 
                                    src="/images/piyush-darshan.jpg" 
                                    alt="Mr. Piyush Darshan"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-3xl" style={{display: 'none'}}>
                                    👨‍💻
                                  </div>
                                </div>
                                <h4 className="text-lg font-semibold text-white mt-3">MR. PIYUSH DARSHAN</h4>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                One of leading gynaecologist of Uttarakhand, she believes that every human being is in a healthy environment. She feels it is a great initiative to begin with and having a joyful experience.
                              </p>
                            </div>

                            {/* Mr. Akshay Singh */}
                            <div className="glass p-6 rounded-xl border border-cyan-500/20">
                              <div className="text-center mb-4">
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                                  <img 
                                    src="/images/akshay-singh.jpg" 
                                    alt="Mr. Akshay Singh"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-3xl" style={{display: 'none'}}>
                                    👨‍🔧
                                  </div>
                                </div>
                                <h4 className="text-lg font-semibold text-white mt-3">MR. AKSHAY SINGH</h4>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                Mechanical Engineer by profession, writer by hobby, system designer by passion. Passionate about environmental causes & designing new and improved environment-friendly products.
                              </p>
                            </div>

                            {/* Mr. Abhishek Karan Pal Singh Puncher */}
                            <div className="glass p-6 rounded-xl border border-emerald-500/20">
                              <div className="text-center mb-4">
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-emerald-500/20 to-green-500/20">
                                  <img 
                                    src="/images/abhishek-karan-pal.jpg" 
                                    alt="Mr. Abhishek Karan Pal Singh Puncher"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center text-3xl" style={{display: 'none'}}>
                                    🎯
                                  </div>
                                </div>
                                <h4 className="text-lg font-semibold text-white mt-3">MR. ABHISHEK KARAN PAL</h4>
                                <p className="text-green-400 text-xs">SINGH PUNCHER</p>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                Serves for professionals he is the legal arm of our Raghukul Aryawart. Since beginning of our Organization, he has been supporting us continuously via legal platform. His decisions in Intellectual.
                              </p>
                            </div>
                          </div>

                          {/* Additional Team Members */}
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Mr. Himangshu Sharma */}
                            <div className="glass p-6 rounded-xl border border-indigo-500/20">
                              <div className="flex items-center mb-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mr-4">
                                  <img 
                                    src="/images/himangshu-sharma.jpg" 
                                    alt="Mr. Himangshu Sharma"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-2xl" style={{display: 'none'}}>
                                    💻
                                  </div>
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white">MR. HIMANGSHU SHARMA</h4>
                                  <p className="text-indigo-400 text-sm">Information Technology Professional</p>
                                </div>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                Information Technology Professional by profession with added interest working in the healthy digital solutions by passion. He is life movement mentor by choice.
                              </p>
                            </div>

                            {/* Mrs. Shikha Gaur */}
                            <div className="glass p-6 rounded-xl border border-pink-500/20">
                              <div className="flex items-center mb-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-pink-500/20 to-rose-500/20 mr-4">
                                  <img 
                                    src="/images/shikha-gaur.jpg" 
                                    alt="Mrs. Shikha Gaur"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center text-2xl" style={{display: 'none'}}>
                                    👩‍💼
                                  </div>
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white">MRS. SHIKHA GAUR</h4>
                                  <p className="text-pink-400 text-sm">Dynamic Management Student</p>
                                </div>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                Young & dynamic management student, she has the zeal to create mass awareness among mankind or humans beings to keep away dirty elements and adopt a healthy life style.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Allies specific content */}
                      {tab.id === "allies" && (
                        <div className="space-y-8">
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Mr. Ramesh Menon */}
                            <div className="glass p-6 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                              <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                                  <Users className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white">MR. RAMESH MENON</h4>
                                  <p className="text-green-400 text-sm">Entrepreneur</p>
                                  <p className="text-gray-400 text-xs">Ship Chandling & Voyage Repairs</p>
                                </div>
                              </div>
                              <p className="text-gray-300 text-sm">Entrepreneur with expertise in ship chandling, voyage repairs, and marine services. Committed to supporting environmental initiatives and sustainable business practices.</p>
                            </div>

                            {/* Mrs. Shanker */}
                            <div className="glass p-6 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                              <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                                  <GraduationCap className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white">Mrs. Shanker</h4>
                                  <p className="text-green-400 text-sm">Entrepreneur</p>
                                  <p className="text-gray-400 text-xs">Sultanpur (UP)</p>
                                </div>
                              </div>
                              <p className="text-gray-300 text-sm">Administrator and Coordinator of Surya Academy Senior Secondary Public School, Sultanpur (UP), committed for environment protection and highly determined to connect Jhola-Abhiyan in her school, parents and locality.</p>
                            </div>

                            {/* Mrinalini Gupta */}
                            <div className="glass p-6 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                              <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                                  <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white">Mrinalini Gupta</h4>
                                  <p className="text-green-400 text-sm">Entrepreneur</p>
                                  <p className="text-gray-400 text-xs">Faridabad</p>
                                </div>
                              </div>
                              <p className="text-gray-300 text-sm">Lady with full on Jhose and Junoon, she is executive member and heading many groups, societies and committees that work for many social causes. She has not only approached us first also gave many innovative ideas to make this project successful.</p>
                            </div>

                            {/* Rachna Tiwary */}
                            <div className="glass p-6 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                              <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                                  <Award className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white">Rachna Tiwary</h4>
                                  <p className="text-green-400 text-sm">Educationist & Writer</p>
                                  <p className="text-gray-400 text-xs">Delhi Safdarjung Enclave</p>
                                </div>
                              </div>
                              <p className="text-gray-300 text-sm">An educationist, trainer, Writer, Editor, Gold medalist, Member of Appellate Authority, DDA, joint secretary and executive member of Lady Irwin College Alumni Association, executive member of Efforts Group.</p>
                            </div>

                            {/* Pankaj Aggarwal */}
                            <div className="glass p-6 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                              <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                                  <Target className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white">Pankaj Aggarwal</h4>
                                  <p className="text-green-400 text-sm">Chartered Accountant</p>
                                  <p className="text-gray-400 text-xs">Delhi Safdarjung Enclave</p>
                                </div>
                              </div>
                              <p className="text-gray-300 text-sm">Renowned CA by profession, have been associated with many environmental and social causes; he ordered 100 Jholas from us and promised us to promote it as much as he can.</p>
                            </div>

                            {/* Dr. Rahul Agarwal */}
                            <div className="glass p-6 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                              <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                                  <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white">Dr. Rahul Agarwal</h4>
                                  <p className="text-green-400 text-sm">Leading Physiotherapist</p>
                                  <p className="text-gray-400 text-xs">Uttarakhand</p>
                                </div>
                              </div>
                              <p className="text-gray-300 text-sm">Leading physiotherapist committed to health and wellness initiatives. Active supporter of environmental causes and sustainable healthcare practices in the community.</p>
                            </div>
                          </div>

                          {/* Support Categories */}
                          <div className="mt-12">
                            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Types of Support We Receive</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="glass p-6 rounded-xl border border-blue-500/20 text-center">
                                <div className="bg-blue-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-4">
                                  <Handshake className="w-6 h-6 text-blue-400 mx-auto" />
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">Professional Partners</h4>
                                <p className="text-gray-400 text-sm">Business professionals and entrepreneurs who support our mission through their networks and resources.</p>
                              </div>
                              
                              <div className="glass p-6 rounded-xl border border-green-500/20 text-center">
                                <div className="bg-green-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-4">
                                  <GraduationCap className="w-6 h-6 text-green-400 mx-auto" />
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">Educational Advocates</h4>
                                <p className="text-gray-400 text-sm">Educators and academic professionals who help spread awareness in educational institutions.</p>
                              </div>
                              
                              <div className="glass p-6 rounded-xl border border-purple-500/20 text-center">
                                <div className="bg-purple-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-4">
                                  <Heart className="w-6 h-6 text-purple-400 mx-auto" />
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">Community Leaders</h4>
                                <p className="text-gray-400 text-sm">Social activists and community leaders who amplify our message and drive local initiatives.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Achievements grid */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-center gradient-text mb-12">
                Our Key Achievements
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <Card key={index} className="glass border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                        </div>
                        <p className="text-gray-300">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Self-sustainability model */}
            <div className="text-center">
              <div className="max-w-4xl mx-auto glass p-8 rounded-2xl border border-green-500/20">
                <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                  Unique Self-Sustainability Model
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {siteContent.about.fundingModel}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
