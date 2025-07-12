import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Recycle, Users, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const featuredItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1544966503-7e9eeec71de8?w=300&h=400&fit=crop",
    points: 25,
    condition: "Excellent",
    size: "M"
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop",
    points: 20,
    condition: "Good",
    size: "S"
  },
  {
    id: 3,
    title: "Cozy Knit Sweater",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop",
    points: 30,
    condition: "Like New",
    size: "L"
  },
  {
    id: 4,
    title: "Classic White Sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
    points: 35,
    condition: "Good",
    size: "9"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-orange-50/50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <Recycle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Re<span className="text-primary">Wear</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Give your clothes a second life. Swap, share, and sustain fashion through our 
              community-driven clothing exchange platform.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/browse">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg">
                Start Swapping
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 px-8 py-3 text-lg">
                Browse Items
              </Button>
            </Link>
            <Link to="/add-item">
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg">
                List an Item
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">2,500+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <Recycle className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">15,000+</h3>
              <p className="text-gray-600">Items Swapped</p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">50 tons</h3>
              <p className="text-gray-600">Waste Prevented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Carousel */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Items
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0 px-2">
                    <div className="grid md:grid-cols-4 gap-6">
                      {featuredItems.slice(currentSlide, currentSlide + 4).map((featuredItem) => (
                        <Card key={featuredItem.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                          <CardContent className="p-0">
                            <div className="relative overflow-hidden rounded-t-lg">
                              <img 
                                src={featuredItem.image} 
                                alt={featuredItem.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <Button
                                size="sm"
                                variant="ghost"
                                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                              >
                                <Heart className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold text-gray-900 mb-2">{featuredItem.title}</h3>
                              <div className="flex justify-between items-center mb-2">
                                <Badge variant="secondary">Size {featuredItem.size}</Badge>
                                <span className="text-green-600 font-bold">{featuredItem.points} pts</span>
                              </div>
                              <p className="text-sm text-gray-600">{featuredItem.condition}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How ReWear Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">List Your Items</h3>
              <p className="text-gray-600">Upload photos and details of clothes you no longer wear</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Browse & Swap</h3>
              <p className="text-gray-600">Find items you love and propose swaps or use points</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Exchange & Enjoy</h3>
              <p className="text-gray-600">Complete the swap and enjoy your new-to-you clothes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of fashion-conscious individuals making a difference
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Join ReWear Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
