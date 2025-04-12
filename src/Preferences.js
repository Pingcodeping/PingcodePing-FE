
// src/pages/Preferences.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarLoggedIn from './NavbarLoggedIn';
import Footer from './Footer';

const Preferences = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [topics, setTopics] = useState('');
  const [time, setTime] = useState('');
  const [numQuestions, setNumQuestions] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        const data = res.data;
        setUserInfo(data);
        setTopics((data.preferences?.topics || []).join(', '));
        setTime(data.preferences?.time || '');
        setNumQuestions(data.preferences?.numQuestions || 1);
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to fetch user info');
      }
    };

      const fetchSentQuestions = async () => {
    try {
      const token = localStorage.getItem('token');

      // Step 1: Get user info (to extract email from token)
      const userRes = await axios.get('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const email = userRes.data.email;

      // Step 2: Fetch sent questions using the extracted email
      const questionsRes = await axios.get(`/api/users/sent-questions?email=${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setQuestions(questionsRes.data);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Failed to fetch sent questions');
    } finally {
      setLoading(false);
    }
  };

    fetchUserInfo();
    fetchSentQuestions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/api/users/preferences',
        {
          preferences: {
            topics: topics.split(',').map((t) => t.trim()),
            time,
            numQuestions: parseInt(numQuestions),
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert('Preferences updated!');
    } catch (err) {
      alert(err.response?.data?.message || 'Error updating preferences');
    }
  };

  return (
    <>
      <NavbarLoggedIn />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Preferences</h2>

        {userInfo && (
          <div className="mb-6 text-sm text-gray-700">
            <p><strong>Name:</strong> {userInfo.name}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Phone:</strong> {userInfo.phone}</p>
            <p><strong>Sent Questions:</strong> {userInfo.sentQuestions?.length || 0}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Topics (e.g. Arrays, Strings)"
            className="w-full p-2 border rounded"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
          />
          <input
            type="text"
            placeholder="Preferred Time (e.g. 7AM)"
            className="w-full p-2 border rounded"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of Questions"
            className="w-full p-2 border rounded"
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
            min="1"
          />
          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Update
          </button>
        </form>
               <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
         <h2 className="text-2xl font-bold mb-4 text-center">Sent Questions</h2>

         {loading ? (
          <p className="text-center">Loading...</p>
        ) : questions.length === 0 ? (
          <p className="text-center text-gray-500">No questions sent yet.</p>
        ) : (
          <ul className="space-y-4">
            {questions.map((q) => (
              <li key={q._id} className="p-4 border rounded bg-gray-50">
                <p><strong>Platform:</strong> {q.platform}</p>
                <p><strong>Question:</strong> {q.question}</p>
                <p><strong>Topic:</strong> {q.topic}</p>
                <p><strong>Sent On:</strong> {q.sentAt ? new Date(q.sentAt).toLocaleString() : 'N/A'}</p>


                {q.url && (
                  <p>
                    <strong>Link:</strong>{' '}
                    <a
                      href={q.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View
                    </a>
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      </div>
      
      <Footer />
    </>
  );
};

export default Preferences;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import NavbarLoggedIn from './NavbarLoggedIn';
// import Footer from './Footer';

// const SentQuestions = () => {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchSentQuestions = async () => {
//     try {
//       const token = localStorage.getItem('token');

//       // Step 1: Get user info (to extract email from token)
//       const userRes = await axios.get('/api/users/me', {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const email = userRes.data.email;

//       // Step 2: Fetch sent questions using the extracted email
//       const questionsRes = await axios.get(`/api/users/sent-questions?email=${email}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setQuestions(questionsRes.data);
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || 'Failed to fetch sent questions');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSentQuestions();
//   }, []);

//   return (
//     <>
//       <NavbarLoggedIn />
//       <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
//         <h2 className="text-2xl font-bold mb-4 text-center">Sent Questions</h2>

//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : questions.length === 0 ? (
//           <p className="text-center text-gray-500">No questions sent yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {questions.map((q) => (
//               <li key={q._id} className="p-4 border rounded bg-gray-50">
//                 <p><strong>Platform:</strong> {q.platform}</p>
//                 <p><strong>Question:</strong> {q.question}</p>
//                 <p><strong>Topic:</strong> {q.topic}</p>
//                 {q.url && (
//                   <p>
//                     <strong>Link:</strong>{' '}
//                     <a
//                       href={q.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 underline"
//                     >
//                       View
//                     </a>
//                   </p>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default SentQuestions;
