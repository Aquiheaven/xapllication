// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Home, Hash, Bell, Mail, Bookmark, User, MoreHorizontal } from 'lucide-react';

// export default function Sidebar() {
//   return (
//     <div className="w-64 p-4">
//       <nav className="space-y-4">
//         <Link to="/" className="flex items-center space-x-3 hover:bg-gray-900 rounded-full p-3">
//           <Home />
//           <span>Home</span>
//         </Link>
//         <Link to="/explore" className="flex items-center space-x-3 hover:bg-gray-900 rounded-full p-3">
//           <Hash />
//           <span>Explore</span>
//         </Link>
//         <Link to="/notifications" className="flex items-center space-x-3 hover:bg-gray-900 rounded-full p-3">
//           <Bell />
//           <span>Notifications</span>
//         </Link>
//         <Link to="/messages" className="flex items-center space-x-3 hover:bg-gray-900 rounded-full p-3">
//           <Mail />
//           <span>Messages</span>
//         </Link>
//         <Link to="/bookmarks" className="flex items-center space-x-3 hover:bg-gray-900 rounded-full p-3">
//           <Bookmark />
//           <span>Bookmarks</span>
//         </Link>
//         <Link to="/profile" className="flex items-center space-x-3 hover:bg-gray-900 rounded-full p-3">
//           <User />
//           <span>Profile</span>
//         </Link>
//         <button className="flex items-center space-x-3 hover:bg-gray-900 rounded-full p-3">
//           <MoreHorizontal />
//           <span>More</span>
//         </button>
//       </nav>
//       <button className="bg-blue-500 text-white rounded-full py-3 px-8 w-full mt-4 hover:bg-blue-600">
//         Tweet
//       </button>
//     </div>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Hash, Bell, Mail, Bookmark, User, MoreHorizontal } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          <Home />
          <span>Home</span>
        </Link>
        <Link to="/explore" className="sidebar-link">
          <Hash />
          <span>Explore</span>
        </Link>
        <Link to="/notifications" className="sidebar-link">
          <Bell />
          <span>Notifications</span>
        </Link>
        <Link to="/messages" className="sidebar-link">
          <Mail />
          <span>Messages</span>
        </Link>
        <Link to="/bookmarks" className="sidebar-link">
          <Bookmark />
          <span>Bookmarks</span>
        </Link>
        <Link to="/profile" className="sidebar-link">
        <img
  src="https://randomuser.me/api/portraits/women/1.jpg"
  alt="Profile"
  className="profile-image"
/>

        </Link>
        <button className="sidebar-link md:hidden">
          <MoreHorizontal />
        </button>
      </nav>
      <button className="tweet-button">
        Tweet
      </button>
    </div>
  );
}
