
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star, Moon, Sun } from 'lucide-react';

const CalendarEvents = () => {
  const yearlyEvents = [
    {
      month: "जनवरी",
      events: [
        { name: "मकर संक्रांति", date: "14 जनवरी", type: "त्योहार" },
        { name: "संकष्टी चतुर्थी", date: "19 जनवरी", type: "व्रत" }
      ]
    },
    {
      month: "फरवरी",
      events: [
        { name: "माघी पूर्णिमा", date: "24 फरवरी", type: "पूर्णिमा" },
        { name: "महा शिवरात्रि", date: "8 मार्च", type: "त्योहार" }
      ]
    },
    {
      month: "मार्च",
      events: [
        { name: "होली", date: "25 मार्च", type: "त्योहार" },
        { name: "चैत्र नवरात्रि", date: "9 अप्रैल से", type: "नवरात्रि" }
      ]
    },
    {
      month: "अप्रैल",
      events: [
        { name: "राम नवमी", date: "17 अप्रैल", type: "त्योहार" },
        { name: "हनुमान जयंती", date: "23 अप्रैल", type: "जयंती" }
      ]
    },
    {
      month: "मई",
      events: [
        { name: "बुद्ध पूर्णिमा", date: "23 मई", type: "पूर्णिमा" },
        { name: "वैशाख पूर्णिमा", date: "23 मई", type: "पूर्णिमा" }
      ]
    },
    {
      month: "जून",
      events: [
        { name: "गंगा दशहरा", date: "17 जून", type: "त्योहार" },
        { name: "योग दिवस", date: "21 जून", type: "विशेष" }
      ]
    },
    {
      month: "जुलाई",
      events: [
        { name: "गुरु पूर्णिमा", date: "21 जुलाई", type: "पूर्णिमा" },
        { name: "सावन शुरुआत", date: "4 जुलाई", type: "माह" }
      ]
    },
    {
      month: "अगस्त",
      events: [
        { name: "रक्षाबंधन", date: "19 अगस्त", type: "त्योहार" },
        { name: "जन्माष्टमी", date: "26 अगस्त", type: "त्योहार" }
      ]
    },
    {
      month: "सितंबर",
      events: [
        { name: "गणेश चतुर्थी", date: "15 सितंबर", type: "महत्वपूर्ण" },
        { name: "अनंत चतुर्दशी", date: "26 सितंबर", type: "त्योहार" }
      ]
    },
    {
      month: "अक्टूबर",
      events: [
        { name: "शारदीय नवरात्रि", date: "3 अक्टूबर से", type: "नवरात्रि" },
        { name: "दशहरा", date: "12 अक्टूबर", type: "त्योहार" }
      ]
    },
    {
      month: "नवंबर",
      events: [
        { name: "दीपावली", date: "1 नवंबर", type: "महत्वपूर्ण" },
        { name: "भाई दूज", date: "3 नवंबर", type: "त्योहार" }
      ]
    },
    {
      month: "दिसंबर",
      events: [
        { name: "मार्गशीर्ष पूर्णिमा", date: "15 दिसंबर", type: "पूर्णिमा" },
        { name: "विवाह पंचमी", date: "17 दिसंबर", type: "त्योहार" }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "महत्वपूर्ण": return "bg-red-100 text-red-800";
      case "त्योहार": return "bg-orange-100 text-orange-800";
      case "व्रत": return "bg-blue-100 text-blue-800";
      case "पूर्णिमा": return "bg-yellow-100 text-yellow-800";
      case "नवरात्रि": return "bg-purple-100 text-purple-800";
      case "जयंती": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "महत्वपूर्ण": return <Star className="w-4 h-4" />;
      case "पूर्णिमा": return <Moon className="w-4 h-4" />;
      case "त्योहार": return <Sun className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        📅 वार्षिक पंचांग
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {yearlyEvents.map((month, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-lg font-semibold text-orange-600">
                {month.month}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {month.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex items-start gap-3">
                    <div className="mt-1">
                      {getTypeIcon(event.type)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{event.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                      <Badge variant="outline" className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-center">📖 पंचांग की जानकारी</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">महत्वपूर्ण तिथियां:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• एकादशी व्रत - महीने में दो बार</li>
              <li>• प्रदोष व्रत - महीने में दो बार</li>
              <li>• संकष्टी चतुर्थी - मासिक गणेश व्रत</li>
              <li>• अमावस्या - पितृ पक्ष तर्पण</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">विशेष पूजा समय:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• ब्रह्म मुहूर्त - 4:00 से 6:00 तक</li>
              <li>• प्रातः काल - 6:00 से 8:00 तक</li>
              <li>• संध्या काल - 6:00 से 7:00 तक</li>
              <li>• रात्रि काल - 9:00 से 10:00 तक</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarEvents;
