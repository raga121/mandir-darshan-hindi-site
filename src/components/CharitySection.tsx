
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Users, BookOpen, Utensils, Shirt, Home } from 'lucide-react';

const CharitySection = () => {
  const charityPrograms = [
    {
      id: 1,
      name: "अन्न दान",
      description: "गरीबों के लिए निःशुल्क भोजन",
      icon: <Utensils className="w-6 h-6" />,
      frequency: "दैनिक",
      beneficiaries: "200+ लोग प्रतिदिन",
      color: "text-green-600"
    },
    {
      id: 2,
      name: "शिक्षा सहायता",
      description: "गरीब बच्चों की शिक्षा के लिए सहायता",
      icon: <BookOpen className="w-6 h-6" />,
      frequency: "वार्षिक",
      beneficiaries: "50+ छात्र",
      color: "text-blue-600"
    },
    {
      id: 3,
      name: "वस्त्र दान",
      description: "जरूरतमंदों के लिए कपड़े",
      icon: <Shirt className="w-6 h-6" />,
      frequency: "मासिक",
      beneficiaries: "100+ परिवार",
      color: "text-purple-600"
    },
    {
      id: 4,
      name: "चिकित्सा सहायता",
      description: "निःशुल्क दवाइयां और चेकअप",
      icon: <Heart className="w-6 h-6" />,
      frequency: "साप्ताहिक",
      beneficiaries: "150+ मरीज",
      color: "text-red-600"
    },
    {
      id: 5,
      name: "आश्रय सहायता",
      description: "बेघर लोगों के लिए अस्थायी आश्रय",
      icon: <Home className="w-6 h-6" />,
      frequency: "निरंतर",
      beneficiaries: "25+ लोग",
      color: "text-orange-600"
    },
    {
      id: 6,
      name: "सामुदायिक सेवा",
      description: "त्योहारों में सामुदायिक भोजन",
      icon: <Users className="w-6 h-6" />,
      frequency: "त्योहारों पर",
      beneficiaries: "1000+ लोग",
      color: "text-teal-600"
    }
  ];

  const donationWays = [
    {
      title: "नकद दान",
      description: "मंदिर में सीधे नकद दान दें",
      amount: "कोई भी राशि"
    },
    {
      title: "अन्न दान",
      description: "चावल, दाल, सब्जी आदि का दान",
      amount: "मासिक योगदान"
    },
    {
      title: "वस्त्र दान",
      description: "नए या अच्छी स्थिति में कपड़े",
      amount: "जरूरत के अनुसार"
    },
    {
      title: "सेवा दान",
      description: "अपना समय और सेवा दें",
      amount: "स्वैच्छिक"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        💝 सेवा और दान
      </h2>
      
      <div className="mb-8">
        <Card className="bg-gradient-to-r from-orange-100 to-red-100">
          <CardContent className="p-6">
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-bold mb-2">सेवा ही सबसे बड़ा धर्म</h3>
              <p className="text-gray-700">
                "दान करना केवल देना नहीं है, बल्कि अपने हृदय को विशाल बनाना है।"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Charity Programs */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">हमारी सेवाएं</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {charityPrograms.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`${program.color} mt-1`}>
                      {program.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{program.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{program.description}</p>
                      <div className="space-y-1">
                        <Badge variant="outline" className="text-xs">
                          {program.frequency}
                        </Badge>
                        <p className="text-xs text-gray-500">{program.beneficiaries}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Donation Ways */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">दान के तरीके</h3>
          <div className="space-y-4">
            {donationWays.map((way, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{way.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{way.description}</p>
                      <Badge variant="secondary">{way.amount}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">💰 दान खाता विवरण</h4>
            <div className="space-y-2 text-sm">
              <p><strong>खाता नाम:</strong> श्री गणेश मंदिर ट्रस्ट</p>
              <p><strong>खाता संख्या:</strong> 1234567890123456</p>
              <p><strong>IFSC कोड:</strong> SBIN0001234</p>
              <p><strong>बैंक:</strong> स्टेट बैंक ऑफ इंडिया</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-center">📊 वार्षिक सेवा रिपोर्ट</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>कुल भोजन वितरण:</span>
                <span className="font-semibold">73,000+ प्लेट</span>
              </div>
              <div className="flex justify-between">
                <span>छात्रवृत्ति:</span>
                <span className="font-semibold">₹5,00,000</span>
              </div>
              <div className="flex justify-between">
                <span>चिकित्सा सहायता:</span>
                <span className="font-semibold">₹2,50,000</span>
              </div>
              <div className="flex justify-between">
                <span>कुल परिवार सहायता:</span>
                <span className="font-semibold">500+ परिवार</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-center">🙏 सेवा में शामिल हों</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p className="text-center font-semibold">
                "छोटा हो या बड़ा, हर दान भगवान को प्रिय है"
              </p>
              <div className="space-y-2">
                <p>• स्वैच्छिक सेवा के लिए संपर्क करें</p>
                <p>• भोजन वितरण में सहायता करें</p>
                <p>• त्योहारों में आयोजन में मदद करें</p>
                <p>• शिक्षा कार्यक्रम में योगदान दें</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CharitySection;
