import React from 'react';
import Tweet from '../components/Tweet';

export default function Home() {
  const tweets = [
    { username: 'CNN', handle: 'CNN', content: 'Breaking news: Lorem ipsum dolor sit amet, consectetur adipiscing elit.', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { username: 'The New York Times', handle: 'nytimes', content: 'Latest update: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { username: 'Twitter', handle: 'Twitter', content: 'Hello, world!', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold p-4 border-b border-gray-800">Home</h1>
      {tweets.map((tweet, index) => (
        <Tweet key={index} {...tweet} />
      ))}
    </div>
  );
}