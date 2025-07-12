
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, Star, Repeat, Package, Heart, Settings, Plus, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const [userStats] = useState({
    name: "Sarah Martinez",
    email: "sarah@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=64&h=64&fit=crop&crop=face",
    points: 127,
    rating: 4.8,
    totalSwaps: 23,
    joinDate: "January 2024"
  });

  const [userItems] = useState([
    {
      id: 1,
      title: "Vintage Denim Jacket",
      image: "https://images.unsplash.com/photo-1544966503-7e9eeec71de8?w=200&h=200&fit=crop",
      status: "Active",
      views: 45,
      likes: 12,
      points: 25
    },
    {
      id: 2,
      title: "Summer Floral Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop",
      status: "Pending Swap",
      views: 23,
      likes: 8,
      points: 20
    },
    {
      id: 3,
      title: "Cozy Wool Scarf",
      image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=200&h=200&fit=crop",
      status: "Swapped",
      views: 67,
      likes: 15,
      points: 15
    }
  ]);

  const [swapHistory] = useState([
    {
      id: 1,
      type: "Completed",
      item: "Black Leather Boots",
      partner: "Emma K.",
      date: "2024-01-10",
      points: 30
    },
    {
      id: 2,
      type: "Pending",
      item: "Summer Floral Dress",
      partner: "Alex R.",
      date: "2024-01-15",
      points: 20
    },
    {
      id: 3,
      type: "Completed",
      item: "Vintage Band T-shirt",
      partner: "Mike L.",
      date: "2024-01-08",
      points: 18
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your ReWear profile and items</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={userStats.avatar} alt={userStats.name} />
                  <AvatarFallback>{userStats.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{userStats.name}</CardTitle>
                <CardDescription>{userStats.email}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{userStats.points}</div>
                  <p className="text-sm text-gray-600">Available Points</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm">Rating</span>
                    </div>
                    <span className="font-semibold">{userStats.rating}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Repeat className="h-4 w-4 text-blue-400" />
                      <span className="text-sm">Total Swaps</span>
                    </div>
                    <span className="font-semibold">{userStats.totalSwaps}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">Member since</span>
                    </div>
                    <span className="font-semibold text-sm">{userStats.joinDate}</span>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="items" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="items">My Items</TabsTrigger>
                <TabsTrigger value="swaps">Swap History</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>

              <TabsContent value="items" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">My Items</h2>
                  <Link to="/add-item">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Item
                    </Button>
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {userItems.map((item) => (
                    <Card key={item.id} className="group hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <Badge
                            className={`absolute top-2 right-2 ${
                              item.status === "Active" ? "bg-primary/10 text-primary border-primary" :
                              item.status === "Pending Swap" ? "bg-yellow-500" :
                              "bg-gray-500"
                            }`}
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                            {item.title}
                          </h3>
                          <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {item.views}
                              </div>
                              <div className="flex items-center">
                                <Heart className="h-4 w-4 mr-1" />
                                {item.likes}
                              </div>
                            </div>
                            <span className="font-semibold text-primary">
                              {item.points} pts
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              Edit
                            </Button>
                            <Link to={`/item/${item.id}`} className="flex-1">
                              <Button size="sm" className="w-full">
                                View
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="swaps" className="space-y-6">
                <h2 className="text-2xl font-semibold">Swap History</h2>
                
                <div className="space-y-4">
                  {swapHistory.map((swap) => (
                    <Card key={swap.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4">
                              <Badge
                                variant={swap.type === "Completed" ? "default" : "secondary"}
                                className={swap.type === "Completed" ? "bg-primary/10 text-primary border-primary" : "bg-yellow-500"}
                              >
                                {swap.type}
                              </Badge>
                              <h3 className="font-semibold">{swap.item}</h3>
                            </div>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                              <span>with {swap.partner}</span>
                              <span>{new Date(swap.date).toLocaleDateString()}</span>
                              <span className="text-primary font-semibold">
                                {swap.points} points
                              </span>
                            </div>
                          </div>
                          {swap.type === "Pending" && (
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="space-y-6">
                <h2 className="text-2xl font-semibold">Favorite Items</h2>
                
                <div className="text-center py-12">
                  <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No favorites yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Start browsing items and save your favorites here
                  </p>
                  <Link to="/browse">
                    <Button>
                      Browse Items
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
