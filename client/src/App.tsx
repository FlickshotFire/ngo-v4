
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import "@fontsource/inter";

// Import components
import Navigation from "./components/ui/Navigation";
import LoadingScreen from "./components/ui/LoadingScreen";
import Hero from "./components/sections/Hero";
import WorkAreas from "./components/sections/WorkAreas";
import JholaGallery from "@/components/sections/JholaGallery";
import Testimonials from "./components/sections/Testimonials";
import PledgeSystem from "./components/sections/PledgeSystem";
import Blog from "./components/sections/Blog";
import Footer from "./components/sections/Footer";
import Scene3D from "./components/3d/Scene3D";
import AboutPage from "./pages/AboutPage";

// Audio hook
import { useAudio } from "./lib/stores/useAudio";

// Define control keys for interactive elements
const controls = [
  { name: "interact", keys: ["KeyE", "Space"] },
  { name: "navigate", keys: ["Enter"] },
];

// Home page component
const HomePage = () => (
  <main className="relative z-10">
    <div className="fade-in">
      <Hero />
    </div>

    <div className="section-divider" />

    <div className="fade-in">
      <WorkAreas />
    </div>

    <div className="section-divider" />

    <div className="slide-up">
      <JholaGallery />
    </div>

    <div className="section-divider" />

    <div className="slide-up">
      <Testimonials />
    </div>

    <div className="section-divider" />

    <div className="fade-in">
      <PledgeSystem />
    </div>

    <div className="section-divider" />

    <div className="slide-up">
      <Blog />
    </div>

    <Footer />
  </main>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCanvas, setShowCanvas] = useState(false);
  const { setBackgroundMusic } = useAudio();

  // Initialize audio and loading
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Load background music with better error handling
        try {
          const music = new Audio("/sounds/background.mp3");
          music.loop = true;
          music.volume = 0.2;
          music.addEventListener('error', () => {
            console.warn("Background music failed to load, continuing without audio");
          });
          setBackgroundMusic(music);
        } catch (audioError) {
          console.warn("Audio initialization failed:", audioError);
        }

        // Simulate loading time for premium experience
        await new Promise(resolve => setTimeout(resolve, 2500));

        setIsLoading(false);
        setTimeout(() => setShowCanvas(true), 300);
      } catch (error) {
        console.error("Error initializing app:", error);
        setIsLoading(false);
        setShowCanvas(true);
      }
    };

    initializeApp().catch(err => {
      console.error("Failed to initialize app:", err);
      setIsLoading(false);
      setShowCanvas(true);
    });
  }, [setBackgroundMusic]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true 
    }}>
      <KeyboardControls map={controls}>
        <div className="relative w-full min-h-screen">
          {/* Animated background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.05)_60deg,transparent_120deg)]" />
          </div>

          {/* Enhanced 3D Canvas Background */}
          {showCanvas && (
            <div className="fixed inset-0 z-0">
              <Canvas
                shadows
                camera={{
                  position: [0, 6, 12],
                  fov: 45,
                  near: 0.1,
                  far: 1000
                }}
                gl={{
                  antialias: true,
                  powerPreference: "high-performance",
                  alpha: true,
                  logarithmicDepthBuffer: true
                }}
              >
                <color attach="background" args={["#000000"]} />
                <fog attach="fog" args={["#000000", 10, 100]} />
                <Suspense fallback={null}>
                  <Scene3D />
                </Suspense>
              </Canvas>
            </div>
          )}

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

          {/* Navigation */}
          <Navigation />

          {/* Main Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </KeyboardControls>
    </Router>
  );
}

export default App;
