
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, X, Eye, Flag, Users, Package, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { toast } from "@/hooks/use-toast";

const Admin = () => {
  const [pendingItems] = useState([
    {
      id: 1,
      title: "Vintage Band T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
      user: "John D.",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      category: "Tops",
      condition: "Good",
      points: 20,
      dateSubmitted: "2024-01-16",
      description: "Classic vintage band t-shirt from the 90s, great condition with some natural wear that adds character."
    },
    {
      id: 2,
      title: "Designer Handbag",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
      user: "Maria S.",
      userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=64&h=64&fit=crop&crop=face",
      category: "Accessories",
      condition: "Excellent",
      points: 75,
      dateSubmitted: "2024-01-15",
      description: "Authentic designer handbag, barely used, comes with original dust bag and authentication card."
    }
  ]);

  const [reportedItems] = useState([
    {
      id: 3,
      title: "Questionable Item",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200&h=200&fit=crop",
      user: "User X",
      reportReason: "Misleading description",
      reportedBy: "Sarah M.",
      date: "2024-01-14"
    }
  ]);

  const [stats] = useState({
    totalUsers: 2547,
    activeListings: 1834,
    pendingReviews: 12,
    completedSwaps: 8392
  });

  const handleApproveItem = (itemId: number) => {
    toast({
      title: "Item Approved",
      description: "The item has been approved and is now live on the platform.",
    });
  };

  const handleRejectItem = (itemId: number) => {
    toast({
      title: "Item Rejected",
      description: "The item has been rejected and the user has been notified.",
      variant: "destructive"
    });
  };

  const handleRemoveItem = (itemId: number) => {
    toast({
      title: "Item Removed",
      description: "The reported item has been removed from the platform.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Platform oversight and content moderation</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Package className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeListings.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Active Listings</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertTriangle className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.pendingReviews}</p>
                  <p className="text-sm text-gray-600">Pending Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Check className="h-8 w-8 text-purple-500 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.completedSwaps.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Completed Swaps</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Pending Items ({pendingItems.length})</TabsTrigger>
            <TabsTrigger value="reported">Reported Items ({reportedItems.length})</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Items Pending Approval</h2>
              <div className="space-y-4">
                {pendingItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex space-x-6">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                              <div className="flex items-center space-x-4 mt-1">
                                <div className="flex items-center space-x-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src={item.userAvatar} alt={item.user} />
                                    <AvatarFallback>{item.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm text-gray-600">{item.user}</span>
                                </div>
                                <Badge variant="outline">{item.category}</Badge>
                                <Badge variant="secondary">{item.condition}</Badge>
                                <span className="text-green-600 font-semibold">{item.points} pts</span>
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">
                              Submitted {new Date(item.dateSubmitted).toLocaleDateString()}
                            </span>
                          </div>
                          
                          <p className="text-gray-700 text-sm line-clamp-2">{item.description}</p>
                          
                          <div className="flex space-x-3">
                            <Button
                              size="sm"
                              onClick={() => handleApproveItem(item.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleRejectItem(item.id)}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reported" className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Reported Items</h2>
              <div className="space-y-4">
                {reportedItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex space-x-6">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                              <p className="text-sm text-gray-600">by {item.user}</p>
                            </div>
                            <span className="text-sm text-gray-500">
                              Reported {new Date(item.date).toLocaleDateString()}
                            </span>
                          </div>
                          
                          <div className="bg-red-50 p-3 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <Flag className="h-4 w-4 text-red-500" />
                              <span className="text-sm font-medium text-red-800">
                                Report Reason: {item.reportReason}
                              </span>
                            </div>
                            <p className="text-sm text-red-700 mt-1">
                              Reported by: {item.reportedBy}
                            </p>
                          </div>
                          
                          <div className="flex space-x-3">
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Remove Item
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              Investigate
                            </Button>
                            <Button size="sm" variant="ghost">
                              Dismiss Report
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                User Management
              </h3>
              <p className="text-gray-600">
                Advanced user management features coming soon
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
