
import { Calendar, MapPin, Phone, Mail, Clock, Users, Heart, Music } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import PhotoGallery from '@/components/PhotoGallery';
import AboutSection from '@/components/AboutSection';
import ProgrammeSection from '@/components/ProgrammeSection';
import CalendarEvents from '@/components/CalendarEvents';
import CharitySection from '@/components/CharitySection';
import AudioSection from '@/components/AudioSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              🕉️ श्री गणेश मंदिर
            </h1>
            <p className="text-xl opacity-90">
              भगवान गणेश का पवित्र निवास
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <a href="#photos" className="text-gray-700 hover:text-orange-600 transition-colors">
              फोटो गैलरी
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
              इतिहास
            </a>
            <a href="#programmes" className="text-gray-700 hover:text-orange-600 transition-colors">
              कार्यक्रम
            </a>
            <a href="#calendar" className="text-gray-700 hover:text-orange-600 transition-colors">
              पंचांग
            </a>
            <a href="#charity" className="text-gray-700 hover:text-orange-600 transition-colors">
              सेवा
            </a>
            <a href="#audio" className="text-gray-700 hover:text-orange-600 transition-colors">
              भजन
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
              संपर्क
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🏛️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              स्वागत है आपका
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              यहाँ आपको शांति, भक्ति और आध्यात्मिक शक्ति मिलेगी
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                सुबह 6:00 - रात 9:00
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                सभी के लिए खुला
              </Badge>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section id="photos">
          <PhotoGallery />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Programme Section */}
        <section id="programmes">
          <ProgrammeSection />
        </section>

        {/* Calendar Events */}
        <section id="calendar">
          <CalendarEvents />
        </section>

        {/* Charity Section */}
        <section id="charity">
          <CharitySection />
        </section>

        {/* Audio Section */}
        <section id="audio">
          <AudioSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg mb-2">
            🙏 हर हर गणेश 🙏
          </p>
          <p className="text-gray-400">
            © 2024 श्री गणेश मंदिर | सभी अधिकार सुरक्षित
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
