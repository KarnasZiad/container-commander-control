
import React from "react";
import { Link } from "react-router-dom";
import { Container, LayoutDashboard, FileText, Settings } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold flex items-center">
            <Container className="mr-2" />
            <span>Container Commander</span>
          </Link>
          <div className="flex space-x-6">
            <NavLink to="/" icon={<LayoutDashboard size={18} />} label="Dashboard" />
            <NavLink to="/deploy" icon={<Container size={18} />} label="Deploy" />
            <NavLink to="/logs" icon={<FileText size={18} />} label="Logs" />
            <NavLink to="/settings" icon={<Settings size={18} />} label="Settings" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  return (
    <Link
      to={to}
      className="flex items-center hover:text-cyan-300 transition-colors duration-200"
    >
      {icon}
      <span className="ml-1">{label}</span>
    </Link>
  );
};

export default Navbar;
