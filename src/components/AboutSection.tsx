
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scroll, Crown, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        📜 इतिहास और महत्व
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="w-6 h-6 text-orange-600" />
              भगवान गणेश का महत्व
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              भगवान गणेश हिंदू धर्म में सबसे पूजनीय देवताओं में से एक हैं। वे विघ्नहर्ता, 
              बुद्धि के दाता और शुभ कार्यों के आरंभकर्ता माने जाते हैं।
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              गणेश जी का हाथी का मुख ज्ञान और समझ का प्रतीक है। उनकी उपासना से 
              सभी बाधाएं दूर होती हैं और सफलता मिलती है।
            </p>
            <div className="flex items-center gap-2 text-orange-600 font-semibold">
              <Star className="w-4 h-4" />
              गणपति बप्पा मोरया
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scroll className="w-6 h-6 text-orange-600" />
              मंदिर का इतिहास
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              यह पवित्र मंदिर 1950 में स्थापित किया गया था। यह स्थान पहले से ही 
              आध्यात्मिक शक्ति से भरपूर था और यहाँ के निवासियों की श्रद्धा से यह 
              मंदिर बना।
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              पिछले 70 वर्षों से यह मंदिर समुदाय की आध्यात्मिक आवश्यकताओं को पूरा 
              कर रहा है। यहाँ नियमित पूजा, उत्सव और सामाजिक कार्यक्रम आयोजित होते हैं।
            </p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-orange-800 font-semibold">
                "यह मंदिर न केवल पूजा का स्थान है, बल्कि समुदाय की एकता का केंद्र है।"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
