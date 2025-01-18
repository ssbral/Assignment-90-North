import { useState } from "react";
import ChatArea from "./components/ChatArea";
import Navbar from "./components/Navbar";
import Righbar from "./components/Righbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div
      className={`
        bg-[#F6F7F8] 
        w-full h-full
        lg:scale-[1.0] xl:scale-[1.0]     // For screens between 992px and 1600px
        md:scale-[0.8] lg:scale-[0.8]     // For screens between 700px and 767px
        sm:scale-[0.75] md:scale-[0.75]   // For screens between 600px and 700px
        scale-[0.5] sm:scale-[0.5]        // For screens <= 600px
        origin-top                       // Maintain top alignment while shrinking
      `}
    >
      {/* Navbar */}
      <div className="p-1 fixed w-full">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="p-0 flex">
        {/* Sidebar */}
        <div className="max-w-1/4">
          <Sidebar setSelectedUser={setSelectedUser} />
        </div>

        {/* ChatArea */}
        <div className="flex flex-col m-3 mt-0 w-3/5 h-3/4">
          <ChatArea />
        </div>

        {/* Righbar Details */}
        <div className="flex flex-col m-3 ml-0 mt-0 w-1/5">
          <Righbar user={selectedUser} />
        </div>
      </div>

      {/* footer area */}
      <Footer />
    </div>
  );
}

export default App;
