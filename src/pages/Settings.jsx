import { useState } from "react";
import { motion } from "framer-motion";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="p-4 bg-black h-screen flex flex-col"
    >
      <h1 className="flex justify-center items-center text-4xl font-bold font-body mb-4 mt-10 md:ml-8 text-white">
        Settings
      </h1>
      <div className="flex flex-col items-center justify-center mb-4 md:ml-8">
        <h2 className="text-xl font-semibold font-body text-white">
          Profile Settings
        </h2>
        <div className="mb-4">
          <label className="block text-white font-body">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="md:w-[400px] px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-body">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-[400px] px-3 py-2 border rounded"
          />
        </div>
      </div>
      <div className="mb-4 md:ml-8">
        <h2 className="flex flex-col items-center justify-center text-xl font-semibold font-body text-white">
          Preferences
        </h2>
        <div className="flex flex-col md:justify-center items-center mb-4">
          <label className="block mb-4 text-white font-body">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-[205px] md:w-[400px] flex items-center justify-center px-3 py-2 border rounded"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="jp">Japanese</option>
            <option value="cn">Chinese</option>
            <option value="kn">Korean</option>
            <option value="ru">Russian</option>
          </select>
        </div>
        <div className="flex flex-col items-center justify-center mb-4">
          <label className="block text-white font-body">Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            className="md:mr-2"
          />
          <span className="text-white font-body">Enable notifications</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleSave}
          className="md:w-[200px] md:ml-8 px-4 py-2 bg-[#FF4343] text-white font-body rounded"
        >
          Save Settings
        </button>
      </div>
    </motion.div>
  );
};

export default Settings;
