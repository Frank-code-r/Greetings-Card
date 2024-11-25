import React from "react";
import Navbar from "./Navbar.jsx";
import GreetingCard from "./GreetingsCard.jsx";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <GreetingCard
        title="Happy Birthday, Frank!"
        message="Wishing you a blessed and memorable day. Enjoy, you deserve it!"
      />
    </div>
  );
};

export default App;
