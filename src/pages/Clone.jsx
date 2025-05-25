import React from "react";
import { useNavigate } from "react-router-dom";

export default function Clone() {
    const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">How to Clone the Repository</h2>

        <ol className="list-decimal list-inside space-y-6 text-base">
          <li>
            Clone the repo:
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 mt-1 rounded select-all">
              git clone https://github.com/dineshpatte
            </pre>
          </li>

          <li>
            Setup the backend:
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 mt-1 rounded select-all">
{`cd backend
npm i
cp .env.sample .env
(Fill in DATABASE_URL)

npm run dev`}
            </pre>
          </li>

          <li>
            Setup the frontend:
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 mt-1 rounded select-all">
{`cd ../frontend
npm i
npm run dev`}
            </pre>
          </li>

          <li>
            For your own frontend projects:
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 mt-1 rounded select-all">
{`cd frontend
npm run dev`}
            </pre>
          </li>
        </ol>
      <button
  onClick={() => navigate(-1)}
  className="border border-white/30 py-2.5 px-4 rounded-lg font-medium transition-transform duration-300 transform hover:scale-105 text-center mt-4"
>
  Go Back
</button>


      </div>
    </div>
  );
}
