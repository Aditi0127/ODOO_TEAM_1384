
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Heart, Plus, Recycle } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gray-900">
              Re<span className="text-primary">Wear</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/browse"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/browse")
                  ? "text-primary bg-primary/5"
                  : "text-gray-700 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Browse Items
            </Link>
            <Link
              to="/add-item"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/add-item")
                  ? "text-primary bg-primary/5"
                  : "text-gray-700 hover:text-primary hover:bg-primary/5"
              }`}
            >
              List Item
            </Link>
            <Link
              to="/dashboard"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/dashboard")
                  ? "text-primary bg-primary/5"
                  : "text-gray-700 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Dashboard
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Link to="/add-item">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" />
                List Item
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <User className="h-4 w-4 mr-1" />
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                to="/browse"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/browse")
                    ? "text-primary bg-primary/5"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Items
              </Link>
              <Link
                to="/add-item"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/add-item")
                    ? "text-primary bg-primary/5"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                List Item
              </Link>
              <Link
                to="/dashboard"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/dashboard")
                    ? "text-primary bg-primary/5"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className="border-t pt-3 mt-3">
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 mb-2">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
