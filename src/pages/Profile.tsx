// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { ArrowLeft, MapPin, Link as LinkIcon, Calendar } from 'lucide-react';
// import TabNavigation from '../components/TabNavigation';

// export default function Profile() {
//   const { username } = useParams();
//   const tabs = ['Posts', 'Replies', 'Highlights', 'Articles', 'Media', 'Likes'];

//   return (
//     <div>
//       <div className="flex items-center space-x-4 p-4 border-b border-gray-800">
//         <ArrowLeft className="w-5 h-5" />
//         <div>
//           <h1 className="text-xl font-bold">Répertoire </h1>
//           <p className="text-gray-500 text-sm">18 messages</p>
//         </div>
//       </div>
//       <div className="relative">
//         <img src="/placeholder.svg?height=200&width=600" alt="Cover" className="w-full h-48 object-cover" />
//         <img src="/placeholder.svg?height=100&width=100" alt="Avatar" className="absolute bottom-0 left-4 transform translate-y-1/2 w-32 h-32 rounded-full border-4 border-black" />
//       </div>
//       <div className="mt-16 p-4">
//         <div className="flex justify-end">
//           <button className="border border-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900">
//             Modifier le profil
//           </button>
//         </div>
//         <h2 className="text-xl font-bold mt-4">Répertoire d'Ecrits et Ecrivains Congolais</h2>
//         <p className="text-gray-500">@{username}</p>
//         <p className="mt-4">base de données de promotions d'ouvrages et publications d'articles scientifiques</p>
//         <div className="flex space-x-4 mt-4 text-gray-500">
//           <span className="flex items-center"><MapPin className="w-5 h-5 mr-1" /> République Démocratique Du Congo</span>
//           <span className="flex items-center"><LinkIcon className="w-5 h-5 mr-1" /> reecco.org</span>
//           <span className="flex items-center"><Calendar className="w-5 h-5 mr-1" /> A rejoint en février 2020</span>
//         </div>
//         <div className="flex space-x-4 mt-4">
//           <span><strong>34</strong> Suivant</span>
//           <span><strong>9</strong> abonnés</span>
//         </div>
//       </div>
//       <TabNavigation tabs={tabs} />
//       <div className="p-4">
//         {/* Content for the selected tab would go here */}
//         <p>Content for the selected tab will be displayed here.</p>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { ArrowLeft, MapPin, Link as LinkIcon, Calendar } from 'lucide-react';
// import TabNavigation from '../components/TabNavigation';

// export default function Profile() {
//   const { username } = useParams();
//   const tabs = ['Posts', 'Replies', 'Highlights', 'Articles', 'Media', 'Likes'];

//   return (
//     <div className="pb-16 md:pb-0">
//       <div className="flex items-center space-x-4 p-4 border-b border-gray-800 sticky top-0 bg-black z-10">
//         <ArrowLeft className="w-5 h-5" />
//         <div>
//           <h1 className="text-xl font-bold">Répertoire d'Ecrits et Ecrivains Congolais</h1>
//           <p className="text-gray-500 text-sm">18 messages</p>
//         </div>
//       </div>
//       <div className="relative">
//         <img src="/placeholder.svg?height=200&width=600" alt="Cover" className="w-full h-32 md:h-48 object-cover" />
//         <img src="/placeholder.svg?height=100&width=100" alt="Avatar" className="absolute bottom-0 left-4 transform translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-black" />
//       </div>
//       <div className="mt-16 p-4">
//         <div className="flex justify-end">
//           <button className="border border-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900">
//             Modifier le profil
//           </button>
//         </div>
//         <h2 className="text-xl font-bold mt-4">Répertoire d'Ecrits et Ecrivains Congolais</h2>
//         <p className="text-gray-500">@{username}</p>
//         <p className="mt-4 text-sm md:text-base">base de données de promotions d'ouvrages et publications d'articles scientifiques</p>
//         <div className="flex flex-wrap space-x-4 mt-4 text-gray-500 text-sm">
//           <span className="flex items-center mb-2"><MapPin className="w-4 h-4 mr-1" /> République Démocratique Du Congo</span>
//           <span className="flex items-center mb-2"><LinkIcon className="w-4 h-4 mr-1" /> reecco.org</span>
//           <span className="flex items-center mb-2"><Calendar className="w-4 h-4 mr-1" /> A rejoint en février 2020</span>
//         </div>
//         <div className="flex space-x-4 mt-4 text-sm">
//           <span><strong>34</strong> Suivant</span>
//           <span><strong>9</strong> abonnés</span>
//         </div>
//       </div>
//       <TabNavigation tabs={tabs} />
//       <div className="p-4">
//         {/* Content for the selected tab would go here */}
//         <p>Content for the selected tab will be displayed here.</p>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Link as LinkIcon, Calendar } from 'lucide-react';
import TabNavigation from '../components/TabNavigation';

export default function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const tabs = ['Posts', 'Replies', 'Highlights', 'Articles', 'Media', 'Likes'];

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <button onClick={handleBackClick} className="flex items-center text-white hover:bg-gray-800 rounded-full p-2">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="profile-name">Répertoire d'Ecrits et Ecrivains Congolais</h1>
          <p className="text-secondary">18 messages</p>
        </div>
      </div>
      <div className="profile-cover"></div>
      <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Avatar" className="profile-avatar" />
      <div className="profile-info">
        <h2 className="profile-name">Répertoire d'Ecrits et Ecrivains Congolais</h2>
        <p className="profile-handle">@{username}</p>
        <p className="profile-bio mt-2">base de données de promotions d'ouvrages et publications d'articles scientifiques</p>
        <div className="profile-meta">
          <span><MapPin className="inline-block mr-1" /> République Démocratique Du Congo</span>
          <span><LinkIcon className="inline-block mr-1" /> reecco.org</span>
          <span><Calendar className="inline-block mr-1" /> A rejoint en février 2020</span>
        </div>
        <div className="profile-stats">
          <span><strong>34</strong> Suivant</span>
          <span><strong>9</strong> abonnés</span>
        </div>
      </div>
      <TabNavigation tabs={tabs} />
      <div className="p-4">
        {/* Content for the selected tab would go here */}
        <p>Content for the selected tab will be displayed here.</p>
      </div>
    </div>
  );
}