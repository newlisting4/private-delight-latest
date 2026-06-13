"use client";

import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import LoginForm from "./LoginForm";
import LandingContent from "./LandingContent";

export default function Home({ adminId, posterId }) {
  const [view, setView] = useState("home"); // "home" or "login"

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/30 text-gray-900 font-sans">
      <Header view={view} setView={setView} />
      
      <main className="flex-grow">
        {view === "home" ? (
          <LandingContent onLoginClick={() => setView("login")} />
        ) : (
          <LoginForm adminId={adminId} posterId={posterId} />
        )}
      </main>

      <Footer />
    </div>
  );
}
