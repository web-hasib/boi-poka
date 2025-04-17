import React from 'react';

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#2c5364] via-[#203a43] to-[#0f2027] flex flex-col items-center justify-center text-white overflow-hidden relative">
      
      {/* Centered Vite Logo */}
      <img
        src="https://www.pikpng.com/pngl/m/159-1594016_png-file-svg-error-icon-png-clipart.png" //  Adjust path as needed
        alt="Vite Logo"
        className="w-24 md:w-32 my-6 animate-floating"
      />
      {/* Floating 404 */}
      <h1 className="text-[8rem] font-black animate-bounce z-10">404</h1>

      {/* Simple Message */}
      <p className="mt-4 text-xl z-10 text-center">
        Lost in space... Page not found.
      </p>


      {/* Go Home Button */}
      <button
        onClick={() => window.location.href = '/'}
        className="mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-white text-lg font-semibold hover:scale-105 transition-transform z-10"
      >
        Go Home
      </button>

      {/* Custom CSS for image animation */}
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-floating {
          animation: floating 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;
