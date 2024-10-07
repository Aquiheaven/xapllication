import React from 'react';

export default function TrendingTopics() {
  return (
    <aside className="trending-topics">
      <h2 className="text-xl font-bold mb-4">Trends for you</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Trending in Turkey</p>
          <p className="font-bold">#SQUID</p>
          <p className="text-sm text-gray-500">2,066 Tweets</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Trending in Turkey</p>
          <p className="font-bold">#SQUID</p>
          <p className="text-sm text-gray-500">2,066 Tweets</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Trending in Turkey</p>
          <p className="font-bold">#SQUID</p>
          <p className="text-sm text-gray-500">2,066 Tweets</p>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-8 mb-4">Who to follow</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=48&width=48" alt="Profile" className="w-12 h-12 rounded-full mr-3" />
            <div>
              <p className="font-bold">The New York Times</p>
              <p className="text-sm text-gray-500">@nytimes</p>
            </div>
          </div>
          <button className="bg-white text-black px-4 py-1 rounded-full font-bold">Follow</button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=48&width=48" alt="Profile" className="w-12 h-12 rounded-full mr-3" />
            <div>
              <p className="font-bold">CNN</p>
              <p className="text-sm text-gray-500">@CNN</p>
            </div>
          </div>
          <button className="bg-white text-black px-4 py-1 rounded-full font-bold">Follow</button>
        </div>
      </div>
    </aside>
  );
}