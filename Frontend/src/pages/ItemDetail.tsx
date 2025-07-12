
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, ArrowLeft, Share2, Flag, MapPin, Calendar, Repeat, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import { toast } from "@/hooks/use-toast";

const ItemDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Mock data - in real app, fetch based on id
  const item = {
    id: 1,
    title: "Vintage Denim Jacket",
    images: [
      "https://images.unsplash.com/photo-1544966503-7e9eeec71de8?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop"
    ],
    points: 25,
    condition: "Excellent",
    size: "M",
    category: "Outerwear",
    description: "Beautiful vintage denim jacket in excellent condition. This classic piece features authentic wear patterns and a timeless design. Perfect for layering and adding a vintage touch to any outfit. Has been carefully maintained and stored in a smoke-free environment.",
    tags: ["vintage", "denim", "classic", "layering"],
    availability: "Available",
    datePosted: "2024-01-15",
    user: {
      name: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=64&h=64&fit=crop&crop=face",
      rating: 4.8,
      totalSwaps: 23,
      location: "San Francisco, CA"
    }
  };

  const handleSwapRequest = () => {
    toast({
      title: "Swap Request Sent!",
      description: "We'll notify you when the owner responds to your request.",
    });
  };

  const handleRedeemPoints = () => {
    toast({
      title: "Item Reserved!",
      description: `${item.points} points have been deducted from your balance.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/browse" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Browse
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-white">
              <img
                src={item.images[currentImageIndex]}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="flex space-x-2">
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${item.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{item.title}</h1>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Flag className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="outline" className="text-lg px-3 py-1">
                  Size {item.size}
                </Badge>
                <Badge variant="secondary">{item.condition}</Badge>
                <Badge>{item.category}</Badge>
                {item.availability === "Available" ? (
                  <Badge className="bg-primary/10 text-primary border-primary">Available</Badge>
                ) : (
                  <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                )}
              </div>

              <div className="text-3xl font-bold text-primary mb-6">
                {item.points} Points
              </div>
            </div>

            {/* Owner Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={item.user.avatar} alt={item.user.name} />
                    <AvatarFallback>{item.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.user.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        {item.user.rating}
                      </div>
                      <div className="flex items-center">
                        <Repeat className="h-4 w-4 mr-1" />
                        {item.user.totalSwaps} swaps
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.user.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            {item.availability === "Available" && (
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={handleSwapRequest}
                  className="bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <Repeat className="h-4 w-4 mr-2" />
                  Request Swap
                </Button>
                <Button
                  onClick={handleRedeemPoints}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5"
                  size="lg"
                >
                  Redeem for {item.points} pts
                </Button>
              </div>
            )}

            {item.availability === "Pending" && (
              <Button disabled size="lg" className="w-full">
                Currently Unavailable
              </Button>
            )}

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Posted {new Date(item.datePosted).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {item.user.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
