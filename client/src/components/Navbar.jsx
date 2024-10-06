
import { ChevronLeft, ChevronRight, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-black/30 flex justify-between items-center px-6">
      <div className="flex space-x-2">
        <button onClick={() => navigate(-1)} className="bg-black/40 rounded-full p-1">
          <ChevronLeft size={20} className="text-white" />
        </button>
        <button onClick={() => navigate(1)} className="bg-black/40 rounded-full p-1">
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
          Upgrade 
        </button>


        <button className="text-white p-2 hover:bg-black/20 rounded-full">
          <Bell size={20} />
        </button>
        <button className="text-white p-2 hover:bg-black/20 rounded-full">
          <User size={20} />
        </button>
      </div>
  </div>
  );
};

export default Navbar;