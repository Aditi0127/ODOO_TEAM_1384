
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, X, Plus, Camera } from "lucide-react";
import Navigation from "@/components/Navigation";
import { toast } from "@/hooks/use-toast";

const AddItem = () => {
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    size: "",
    condition: "",
    tags: "",
    pointValue: ""
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Simulate image upload - in real app, upload to cloud storage
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setImages(prev => [...prev, e.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (images.length === 0) {
      toast({
        title: "Images Required",
        description: "Please upload at least one image of your item.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Item Listed Successfully!",
      description: "Your item is now pending approval and will be visible once reviewed.",
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "",
      size: "",
      condition: "",
      tags: "",
      pointValue: ""
    });
    setImages([]);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">List New Item</h1>
          <p className="text-gray-600">Share your pre-loved clothes with the ReWear community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Image Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
              <CardDescription>
                Upload clear, well-lit photos of your item. The first photo will be the main image.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group aspect-square">
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg border"
                    />
                    <Button
                      type="button"
                      size="sm"
                      variant="destructive"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                      onClick={() => removeImage(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                    {index === 0 && (
                      <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        Main
                      </div>
                    )}
                  </div>
                ))}
                
                {images.length < 5 && (
                  <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition-colors">
                    <Camera className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">Add Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <p className="text-sm text-gray-500">
                Upload up to 5 photos. Supported formats: JPG, PNG, WEBP
              </p>
            </CardContent>
          </Card>

          {/* Item Details */}
          <Card>
            <CardHeader>
              <CardTitle>Item Details</CardTitle>
              <CardDescription>
                Provide accurate information to help other users find your item
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Item Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Vintage Denim Jacket"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tops">Tops</SelectItem>
                      <SelectItem value="bottoms">Bottoms</SelectItem>
                      <SelectItem value="dresses">Dresses</SelectItem>
                      <SelectItem value="outerwear">Outerwear</SelectItem>
                      <SelectItem value="shoes">Shoes</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="activewear">Activewear</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="size">Size *</Label>
                  <Select value={formData.size} onValueChange={(value) => handleInputChange("size", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                      <SelectItem value="xxl">XXL</SelectItem>
                      <SelectItem value="6">Size 6</SelectItem>
                      <SelectItem value="7">Size 7</SelectItem>
                      <SelectItem value="8">Size 8</SelectItem>
                      <SelectItem value="9">Size 9</SelectItem>
                      <SelectItem value="10">Size 10</SelectItem>
                      <SelectItem value="11">Size 11</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="condition">Condition *</Label>
                  <Select value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="like-new">Like New</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your item in detail. Include brand, material, any flaws, and styling suggestions..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    placeholder="vintage, casual, summer (separate with commas)"
                    value={formData.tags}
                    onChange={(e) => handleInputChange("tags", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pointValue">Point Value *</Label>
                  <Input
                    id="pointValue"
                    type="number"
                    placeholder="15"
                    value={formData.pointValue}
                    onChange={(e) => handleInputChange("pointValue", e.target.value)}
                    min="1"
                    max="100"
                    required
                  />
                  <p className="text-sm text-gray-500">
                    Suggested range: 10-50 points based on item value and condition
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Submit */}
          <Card>
            <CardContent className="pt-6">
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-green-800 mb-2">Before you submit:</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Make sure your photos are clear and show the item accurately</li>
                  <li>• Be honest about the item's condition and any flaws</li>
                  <li>• Your listing will be reviewed before going live</li>
                  <li>• You'll be notified once your item is approved</li>
                </ul>
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline">
                  Save Draft
                </Button>
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  Submit for Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
