
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Music, Play, Download, Volume2, Headphones, Star } from 'lucide-react';

const AudioSection = () => {
  const audioCategories = [
    {
      name: "गणेश भजन",
      description: "भगवान गणेश के पारंपरिक भजन",
      icon: <Music className="w-6 h-6" />,
      color: "text-orange-600",
      tracks: [
        { title: "वक्रतुंड महाकाय", duration: "5:30", type: "आरती" },
        { title: "गणपति बप्पा मोरया", duration: "4:15", type: "भजन" },
        { title: "एकदंत महाकाय", duration: "6:20", type: "स्तुति" },
        { title: "जय गणेश देवा", duration: "3:45", type: "आरती" }
      ]
    },
    {
      name: "मंत्र जाप",
      description: "शुद्ध संस्कृत मंत्रों का जाप",
      icon: <Volume2 className="w-6 h-6" />,
      color: "text-purple-600",
      tracks: [
        { title: "गणेश गायत्री मंत्र", duration: "10:00", type: "मंत्र" },
        { title: "ॐ गं गणपतये नमः", duration: "15:00", type: "जाप" },
        { title: "गणेश अष्टकम्", duration: "8:30", type: "स्तोत्र" },
        { title: "संकटनाशन गणेश स्तोत्र", duration: "12:00", type: "स्तोत्र" }
      ]
    },
    {
      name: "आरती संग्रह",
      description: "दैनिक आरती का संग्रह",
      icon: <Star className="w-6 h-6" />,
      color: "text-red-600",
      tracks: [
        { title: "प्रातः कालीन आरती", duration: "4:00", type: "आरती" },
        { title: "मध्याह्न आरती", duration: "3:30", type: "आरती" },
        { title: "संध्या आरती", duration: "5:00", type: "आरती" },
        { title: "रात्रि आरती", duration: "4:30", type: "आरती" }
      ]
    },
    {
      name: "त्योहारी संगीत",
      description: "विशेष त्योहारों के गीत",
      icon: <Headphones className="w-6 h-6" />,
      color: "text-green-600",
      tracks: [
        { title: "गणेश चतुर्थी विशेष", duration: "7:45", type: "उत्सव" },
        { title: "संकष्टी चतुर्थी", duration: "6:15", type: "व्रत" },
        { title: "विनायक चतुर्थी", duration: "5:30", type: "त्योहार" },
        { title: "अनंत चतुर्दशी", duration: "8:00", type: "विसर्जन" }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "आरती": return "bg-orange-100 text-orange-800";
      case "भजन": return "bg-blue-100 text-blue-800";
      case "मंत्र": return "bg-purple-100 text-purple-800";
      case "स्तोत्र": return "bg-green-100 text-green-800";
      case "जाप": return "bg-yellow-100 text-yellow-800";
      case "उत्सव": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handlePlay = (title: string) => {
    // In a real implementation, this would play the audio
    console.log(`Playing: ${title}`);
  };

  const handleDownload = (title: string) => {
    // In a real implementation, this would download the audio
    console.log(`Downloading: ${title}`);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🎵 भजन संग्रह
      </h2>
      
      <div className="mb-8">
        <Card className="bg-gradient-to-r from-purple-100 to-pink-100">
          <CardContent className="p-6">
            <div className="text-center">
              <Music className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-2">संगीत से मिले शांति</h3>
              <p className="text-gray-700">
                "भजन गाना और सुनना हृदय को शुद्ध करता है और मन को शांति देता है।"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {audioCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={category.color}>
                  {category.icon}
                </div>
                {category.name}
              </CardTitle>
              <p className="text-sm text-gray-600">{category.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.tracks.map((track, trackIndex) => (
                  <div key={trackIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{track.title}</h4>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getTypeColor(track.type)}>
                          {track.type}
                        </Badge>
                        <span className="text-sm text-gray-500">{track.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handlePlay(track.title)}
                        className="hover:bg-green-50"
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownload(track.title)}
                        className="hover:bg-blue-50"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-center">📱 मोबाइल ऐप</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-3">
              <p className="text-sm text-gray-700">
                हमारे सभी भजन और आरती अपने मोबाइल में सुनें
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  📱 Android ऐप डाउनलोड करें
                </Button>
                <Button variant="outline" className="w-full">
                  🍎 iOS ऐप डाउनलोड करें
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-center">🎧 सुनने के निर्देश</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>• स्वच्छ मन से सुनें</p>
              <p>• सुबह या शाम के समय सुनना उत्तम</p>
              <p>• ध्यान से सुनें और मन लगाएं</p>
              <p>• अन्य लोगों के साथ साझा करें</p>
              <p>• नियमित रूप से सुनने का अभ्यास करें</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg">
        <h4 className="font-semibold text-lg mb-2 text-center">🎼 लाइव स्ट्रीम</h4>
        <div className="text-center space-y-2 text-sm">
          <p>दैनिक आरती का लाइव प्रसारण</p>
          <div className="flex justify-center gap-4">
            <Badge variant="outline">प्रातः 6:00 AM</Badge>
            <Badge variant="outline">संध्या 7:00 PM</Badge>
          </div>
          <Button className="mt-2">
            🔴 लाइव देखें
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudioSection;
