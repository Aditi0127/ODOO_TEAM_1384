
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, Filter, Grid, List, Star, MapPin, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const items = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=300&h=400&fit=crop",
    points: 25,
    condition: "Excellent",
    size: "M",
    category: "Outerwear",
    user: "Sarah M.",
    availability: "Available",
    location: "Downtown",
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=400&fit=crop",
    points: 20,
    condition: "Good",
    size: "S",
    category: "Dresses",
    user: "Emma K.",
    availability: "Available",
    location: "Uptown",
    rating: 4.6,
    featured: false
  },
  {
    id: 3,
    title: "Cozy Knit Sweater",
    image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=300&h=400&fit=crop",
    points: 30,
    condition: "Like New",
    size: "L",
    category: "Knitwear",
    user: "Alex R.",
    availability: "Pending",
    location: "Midtown",
    rating: 4.9,
    featured: true
  },
  {
    id: 4,
    title: "Classic White Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop",
    points: 35,
    condition: "Good",
    size: "9",
    category: "Shoes",
    user: "Mike L.",
    availability: "Available",
    location: "Eastside",
    rating: 4.7,
    featured: false
  },
  {
    id: 5,
    title: "Elegant Black Blazer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    points: 40,
    condition: "Excellent",
    size: "M",
    category: "Outerwear",
    user: "Lisa T.",
    availability: "Available",
    location: "Westside",
    rating: 5.0,
    featured: true
  },
  {
    id: 6,
    title: "Boho Style Skirt",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    points: 18,
    condition: "Good",
    size: "S",
    category: "Bottoms",
    user: "Nina P.",
    availability: "Available",
    location: "Central",
    rating: 4.5,
    featured: false
  }
];

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSize = selectedSize === "all" || item.size === selectedSize;
    const matchesCondition = selectedCondition === "all" || item.condition === selectedCondition;
    
    return matchesSearch && matchesCategory && matchesSize && matchesCondition;
  });

  const featuredItems = filteredItems.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-secondary/10">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section with Animation */}
        <div className="mb-12 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-3xl blur-3xl -z-10"></div>
          <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Browse Unique Items
              </h1>
              <Sparkles className="h-8 w-8 text-accent animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover amazing pre-loved fashion pieces from your community
            </p>
          </div>
        </div>

        {/* Featured Items Section */}
        {featuredItems.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-6 w-6 text-primary fill-primary" />
              <h2 className="text-2xl font-bold text-primary">Featured Items</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredItems.slice(0, 3).map((item) => (
                <Link key={`featured-${item.id}`} to={`/item/${item.id}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-2 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-white to-primary/5">
                    <CardContent className="p-0 relative">
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className="bg-primary text-primary-foreground animate-pulse">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          Featured
                        </Badge>
                      </div>
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < Math.floor(item.rating) ? 'text-primary fill-primary' : 'text-gray-300'}`} />
                            ))}
                            <span className="text-xs text-gray-600 ml-1">({item.rating})</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">{item.points} pts</span>
                          <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                            Size {item.size}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8"></div>
          </div>
        )}

        {/* Enhanced Search and Filters */}
        <div className="bg-gradient-to-r from-white via-primary/5 to-white p-8 rounded-2xl shadow-lg border border-primary/10 mb-8 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Enhanced Search */}
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-primary/60 group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Search for amazing items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg border-2 border-primary/20 focus:border-primary bg-white/80 backdrop-blur-sm rounded-xl shadow-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity -z-10"></div>
            </div>

            {/* Enhanced Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[160px] h-12 border-2 border-primary/20 hover:border-primary/40 bg-white/80 rounded-xl">
                  <Filter className="h-4 w-4 mr-2 text-primary" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Outerwear">Outerwear</SelectItem>
                  <SelectItem value="Dresses">Dresses</SelectItem>
                  <SelectItem value="Knitwear">Knitwear</SelectItem>
                  <SelectItem value="Shoes">Shoes</SelectItem>
                  <SelectItem value="Bottoms">Bottoms</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-[120px] h-12 border-2 border-primary/20 hover:border-primary/40 bg-white/80 rounded-xl">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="XS">XS</SelectItem>
                  <SelectItem value="S">S</SelectItem>
                  <SelectItem value="M">M</SelectItem>
                  <SelectItem value="L">L</SelectItem>
                  <SelectItem value="XL">XL</SelectItem>
                  <SelectItem value="9">Size 9</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                <SelectTrigger className="w-[150px] h-12 border-2 border-primary/20 hover:border-primary/40 bg-white/80 rounded-xl">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Conditions</SelectItem>
                  <SelectItem value="Like New">Like New</SelectItem>
                  <SelectItem value="Excellent">Excellent</SelectItem>
                  <SelectItem value="Good">Good</SelectItem>
                </SelectContent>
              </Select>

              {/* Enhanced View Toggle */}
              <div className="flex border-2 border-primary/20 rounded-xl overflow-hidden bg-white/80">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none h-12 px-4"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none h-12 px-4"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-lg text-muted-foreground flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            {filteredItems.length} items found
          </p>
          <Badge variant="outline" className="text-sm px-3 py-1 border-primary/30 text-primary">
            Updated 2 mins ago
          </Badge>
        </div>

        {/* Enhanced Items Grid/List */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" : "space-y-6"}>
          {filteredItems.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`}>
              <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-primary/10 hover:border-primary/30 bg-gradient-to-br from-white to-primary/5 hover:to-primary/10">
                <CardContent className="p-0">
                  {viewMode === "grid" ? (
                    <>
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-3 right-3 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                        >
                          <Heart className="h-4 w-4 text-primary hover:fill-primary transition-colors" />
                        </Button>
                        
                        {item.availability === "Pending" && (
                          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground animate-pulse">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </Badge>
                        )}
                        
                        {item.featured && (
                          <Badge className="absolute bottom-3 left-3 bg-primary text-primary-foreground">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <div className="p-5">
                        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">{item.title}</h3>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < Math.floor(item.rating) ? 'text-primary fill-primary' : 'text-gray-300'}`} />
                            ))}
                            <span className="text-xs text-gray-600 ml-1">({item.rating})</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mb-3">
                          <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">Size {item.size}</Badge>
                          <span className="text-2xl font-bold text-primary">{item.points} pts</span>
                        </div>
                        
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{item.location}</span>
                          </div>
                          <span className="text-muted-foreground">by {item.user}</span>
                        </div>
                        
                        <div className="mt-2 text-xs text-primary font-medium">{item.condition}</div>
                      </div>
                    </>
                  ) : (
                    <div className="flex p-6 space-x-6 hover:bg-primary/5 transition-colors">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-28 h-28 object-cover rounded-xl shadow-lg"
                        />
                        {item.availability === "Pending" && (
                          <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs animate-pulse">
                            Pending
                          </Badge>
                        )}
                        {item.featured && (
                          <Badge className="absolute -bottom-2 -left-2 bg-primary text-primary-foreground text-xs">
                            <Star className="h-2 w-2 mr-1 fill-current" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-primary fill-primary' : 'text-gray-300'}`} />
                            ))}
                            <span className="text-sm text-gray-600 ml-2">({item.rating})</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-3">by {item.user}</p>
                        
                        <div className="flex items-center space-x-6 text-sm">
                          <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">Size {item.size}</Badge>
                          <span className="text-primary font-medium">{item.condition}</span>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{item.location}</span>
                          </div>
                          <span className="text-2xl font-bold text-primary">{item.points} pts</span>
                        </div>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        className="self-start hover:bg-primary/10 rounded-full p-3"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <Heart className="h-5 w-5 text-primary hover:fill-primary transition-colors" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Enhanced Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-muted-foreground mb-6">No items found matching your criteria.</p>
              <Button 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedSize("all");
                  setSelectedCondition("all");
                }}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Clear All Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
