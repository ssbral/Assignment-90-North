import UserCard from "./UserCard";
import { FaBars } from "react-icons/fa";
import users from "../mockdata/user.json";
import { useState } from "react";

const Sidebar = ({ setSelectedUser, selectedUser }) => {
  const [isCollapse, setIsCollapse] = useState(true);

  const handleUserClick = (user) => {
    setSelectedUser(user); // Update selected user in parent
  };

  return (
    <div className="bg-white mt-20 border-2 ml-4">
      <div
        className="p-5 text-xl flex font-bold items-center space-x-5"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        <FaBars />
        {isCollapse && <p>Chat</p>}
      </div>
      {isCollapse && (
        <div className="h-[78vh] overflow-y-scroll">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isSelected={selectedUser?.id === user.id} // Check if the card is selected
              onClick={() => handleUserClick(user)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
