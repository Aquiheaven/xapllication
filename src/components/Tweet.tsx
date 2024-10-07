import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Repeat, Share } from 'lucide-react';

interface TweetProps {
  username: string;
  handle: string;
  content: string;
  avatar: string;
}

export default function Tweet({ username, handle, content, avatar }: TweetProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="border-b border-gray-800 p-4 hover:bg-gray-900">
      <div className="flex space-x-3">
        <Link to={`/${handle}`}>
          <img src={avatar} alt={username} className="w-12 h-12 rounded-full" />
        </Link>
        <div className="flex-grow">
          <div className="flex items-center space-x-2">
            <Link to={`/${handle}`} className="font-bold hover:underline">{username}</Link>
            <span className="text-gray-500">@{handle}</span>
          </div>
          <p className="mt-2">{content}</p>
          <div className="flex justify-between mt-4 text-gray-500">
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <MessageCircle className="w-5 h-5" />
              <span>0</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-500">
              <Repeat className="w-5 h-5" />
              <span>0</span>
            </button>
            <button
              className={`flex items-center space-x-2 ${isLiked ? 'text-red-500' : 'hover:text-red-500'}`}
              onClick={handleLike}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{isLiked ? 1 : 0}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <Share className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}