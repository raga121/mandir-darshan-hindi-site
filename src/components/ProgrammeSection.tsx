
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const ProgrammeSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: "गणेश चतुर्थी महोत्सव",
      date: "15 सितंबर 2024",
      time: "सुबह 6:00 बजे",
      description: "11 दिनों का भव्य उत्सव",
      type: "महत्वपूर्ण"
    },
    {
      id: 2,
      name: "साप्ताहिक सत्संग",
      date: "हर शनिवार",
      time: "शाम 7:00 बजे",
      description: "भजन और प्रवचन",
      type: "नियमित"
    },
    {
      id: 3,
      name: "पूर्णिमा विशेष पूजा",
      date: "2 अक्टूबर 2024",
      time: "सुबह 5:30 बजे",
      description: "चंद्र पूर्णिमा का विशेष अनुष्ठान",
      type: "मासिक"
    }
  ];

  const monthlyPrograms = [
    {
      name: "संकष्टी चतुर्थी",
      description: "मासिक गणेश व्रत",
      frequency: "महीने में एक बार"
    },
    {
      name: "प्रदोष व्रत",
      description: "शिव पूजा",
      frequency: "महीने में दो बार"
    },
    {
      name: "एकादशी व्रत",
      description: "विष्णु उपासना",
      frequency: "महीने में दो बार"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🎉 कार्यक्रम विवरण
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-orange-600" />
              आगामी कार्यक्रम
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-l-4 border-orange-500 pl-4 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{event.name}</h3>
                    <Badge variant={event.type === "महत्वपूर्ण" ? "default" : "secondary"}>
                      {event.type}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <p className="mt-2">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Programs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-orange-600" />
              मासिक कार्यक्रम
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyPrograms.map((program, index) => (
                <div key={index} className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{program.name}</h3>
                  <p className="text-gray-700 mb-2">{program.description}</p>
                  <Badge variant="outline">{program.frequency}</Badge>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
              <h4 className="font-semibold mb-2">दैनिक कार्यक्रम</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>प्रातः आरती</span>
                  <span>सुबह 6:00 बजे</span>
                </div>
                <div className="flex justify-between">
                  <span>दोपहर की पूजा</span>
                  <span>दोपहर 12:00 बजे</span>
                </div>
                <div className="flex justify-between">
                  <span>संध्या आरती</span>
                  <span>शाम 7:00 बजे</span>
                </div>
                <div className="flex justify-between">
                  <span>रात्रि आरती</span>
                  <span>रात 9:00 बजे</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgrammeSection;
