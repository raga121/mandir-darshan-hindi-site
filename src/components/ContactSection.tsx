
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Users, Car, Bus } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = {
    address: "123 धर्म मार्ग, गणेश नगर, दिल्ली - 110001",
    phone: "+91 9876543210",
    email: "info@shriganeshmandir.org",
    whatsapp: "+91 9876543210"
  };

  const timings = [
    { time: "प्रातः 6:00 - 12:00", type: "सुबह की पूजा" },
    { time: "दोपहर 12:00 - 4:00", type: "दर्शन समय" },
    { time: "शाम 4:00 - 9:00", type: "संध्या आरती" },
    { time: "रात 9:00 - 10:00", type: "रात्रि आरती" }
  ];

  const staff = [
    { name: "पंडित राम शर्मा", role: "मुख्य पुजारी", contact: "+91 9876543211" },
    { name: "श्री विकास गुप्ता", role: "ट्रस्टी", contact: "+91 9876543212" },
    { name: "श्रीमती सुनीता देवी", role: "सेवा प्रभारी", contact: "+91 9876543213" },
    { name: "श्री राजेश कुमार", role: "प्रबंधक", contact: "+91 9876543214" }
  ];

  const directions = [
    { mode: "मेट्रो", instruction: "गणेश नगर स्टेशन से 500 मीटर पैदल" },
    { mode: "बस", instruction: "रूट नंबर 45, 67, 89 से आएं" },
    { mode: "कार", instruction: "पार्किंग की सुविधा उपलब्ध है" },
    { mode: "ऑटो", instruction: "गणेश नगर चौराहे से 2 मिनट" }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        📞 संपर्क विवरण
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange-600" />
              संपर्क जानकारी
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">पूरा पता</h4>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">फोन नंबर</h4>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">ईमेल</h4>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">व्हाट्सऐप</h4>
                  <p className="text-gray-600">{contactInfo.whatsapp}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Temple Timings */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-orange-600" />
              दर्शन समय
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {timings.map((timing, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold">{timing.type}</h4>
                    <p className="text-sm text-gray-600">{timing.time}</p>
                  </div>
                  <Badge variant="outline">खुला</Badge>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-1">विशेष नोट</h4>
              <p className="text-sm text-red-700">
                त्योहारों के दिन समय में बदलाव हो सकता है
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Staff Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-orange-600" />
              मंदिर स्टाफ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {staff.map((member, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                  <Badge variant="outline">{member.contact}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Directions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="w-6 h-6 text-orange-600" />
              आने का रास्ता
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {directions.map((direction, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    {direction.mode === "मेट्रो" && <Bus className="w-4 h-4 text-blue-600" />}
                    {direction.mode === "बस" && <Bus className="w-4 h-4 text-blue-600" />}
                    {direction.mode === "कार" && <Car className="w-4 h-4 text-blue-600" />}
                    {direction.mode === "ऑटो" && <Car className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div>
                    <h4 className="font-semibold">{direction.mode}</h4>
                    <p className="text-sm text-gray-600">{direction.instruction}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-r from-green-100 to-blue-100">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">🗺️ गूगल मैप</h3>
              <p className="text-gray-700 mb-4">
                सटीक स्थान जानने के लिए गूगल मैप का उपयोग करें
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-mono">
                  "श्री गणेश मंदिर, गणेश नगर, दिल्ली"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-100 to-orange-100">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">🚗 पार्किंग</h3>
              <p className="text-gray-700 mb-4">
                मंदिर में पार्किंग की पूरी व्यवस्था है
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>दो पहिया:</span>
                  <span className="font-semibold">निःशुल्क</span>
                </div>
                <div className="flex justify-between">
                  <span>चार पहिया:</span>
                  <span className="font-semibold">₹20/घंटा</span>
                </div>
                <div className="flex justify-between">
                  <span>त्योहारों में:</span>
                  <span className="font-semibold">₹50/दिन</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-center">📱 त्वरित संपर्क</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg">
            <Phone className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <h4 className="font-semibold">कॉल करें</h4>
            <p className="text-sm text-gray-600">{contactInfo.phone}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <Mail className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <h4 className="font-semibold">ईमेल करें</h4>
            <p className="text-sm text-gray-600">{contactInfo.email}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <Phone className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <h4 className="font-semibold">व्हाट्सऐप</h4>
            <p className="text-sm text-gray-600">{contactInfo.whatsapp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
