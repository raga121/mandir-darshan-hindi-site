import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const PhotoGallery = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      title: "मुख्य मंदिर",
      description: "भगवान गणेश की मूर्ति"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop",
      title: "मंदिर का प्रवेश द्वार",
      description: "पारंपरिक वास्तुकला"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop",
      title: "प्रार्थना क्षेत्र",
      description: "भक्तों के लिए स्थान"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop",
      title: "उत्सव का दृश्य",
      description: "गणेश चतुर्थी महोत्सव"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      title: "मंदिर परिसर",
      description: "प्राकृतिक सौंदर्य"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      title: "शाम की आरती",
      description: "दैनिक पूजा"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        📸 फोटो गैलरी
      </h2>
      
      {/* Auto-running Main Carousel */}
      <div className="mb-8">
        <Carousel 
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{photo.title}</h3>
                      <p className="text-gray-600">{photo.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Card key={photo.id} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <CardContent className="p-0">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{photo.title}</h3>
                <p className="text-gray-600">{photo.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
