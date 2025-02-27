"use client"
import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";

type AppType = "notes" | "pomodoro" | "gallery" | "settings";

interface WindowData {
  id: string;
  type: AppType;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
}

interface DesktopWindowProps {
  windowData: WindowData;
  onClose: (id: string) => void;
  bringToFront: (id: string) => void;
  children: React.ReactNode;
}

const DesktopWindow: React.FC<DesktopWindowProps> = ({
  windowData,
  onClose,
  bringToFront,
  children,
}) => {
  return (
    <Rnd
      default={{
        x: windowData.x,
        y: windowData.y,
        width: windowData.width,
        height: windowData.height,
      }}
      bounds="parent"
      style={{ zIndex: windowData.zIndex, position: "absolute" }}
      dragHandleClassName="window-header"
      onDragStart={() => bringToFront(windowData.id)}
      onResizeStart={() => bringToFront(windowData.id)}
    >
      <div className="bg-white border rounded shadow-lg flex flex-col h-full">
        <div
          className="window-header bg-gray-200 p-2 flex justify-between items-center cursor-move select-none"
          onMouseDown={() => bringToFront(windowData.id)}
        >
          <span className="font-bold capitalize">{windowData.type}</span>
          <button
            className="text-red-500 font-bold focus:outline-none"
            onClick={() => onClose(windowData.id)}
          >
            X
          </button>
        </div>
        <div className="p-2 overflow-auto flex-grow">{children}</div>
      </div>
    </Rnd>
  );
};


const NotesApp: React.FC<{ id: string }> = ({ id }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(`notes - ${id}`);
    if (saved) {
      setText(saved);
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`notes - ${id}`, text);
  }, [id, text]);

  return (
    <textarea
      className="w-full h-full p-2 border rounded resize-none"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Take your notes here..."
    ></textarea>
  );
};

const PomodoroApp: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (running && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((s) => s - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, secondsLeft]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-mono mb-4">{formatTime(secondsLeft)}</div>
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded focus:outline-none"
          onClick={() => setRunning(true)}
        >
          Start
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded focus:outline-none"
          onClick={() => setRunning(false)}
        >
          Pause
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded focus:outline-none"
          onClick={() => {
            setRunning(false);
            setSecondsLeft(25 * 60);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const GalleryApp: React.FC = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150/0000FF/808080",
    "https://via.placeholder.com/150/FF0000/FFFFFF",
    "https://via.placeholder.com/150/00FF00/000000",
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Gallery ${idx}`}
          className="w-32 h-32 object-cover rounded"
        />
      ))}
    </div>
  );
};

const SettingsApp: React.FC = () => {
  return (
    <div>
      <h3 className="font-bold mb-2">Settings</h3>
      <div className="mb-2">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Enable Dark Mode</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Enable Notifications</span>
        </label>
      </div>
    </div>
  );
};

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [zCounter, setZCounter] = useState(1);

  const openWindow = (type: AppType) => {
    const newWindow: WindowData = {
      id: Date.now().toString(),
      type,
      x: Math.floor(Math.random() * 300) + 50,
      y: Math.floor(Math.random() * 200) + 50,
      width: 400,
      height: 300,
      zIndex: zCounter + 1,
    };
    setZCounter((prev) => prev + 1);
    setWindows((prev) => [...prev, newWindow]);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };

  const bringToFront = (id: string) => {
    setZCounter((prev) => {
      const newZ = prev + 1;
      setWindows((wins) =>
        wins.map((win) =>
          win.id === id ? { ...win, zIndex: newZ } : win
        )
      );
      return newZ;
    });
  };

  return (
    <div className="relative w-full h-screen bg-blue-100 overflow-hidden">
      {/* Desktop Icons */}
      <div className="absolute left-4 top-4 grid grid-cols-2 gap-4">
        <button
          onClick={() => openWindow("notes")}
          className="flex flex-col items-center focus:outline-none"
        >
          <div className="bg-white p-4 rounded shadow cursor-pointer">Notes</div>
        </button>
        <button
          onClick={() => openWindow("pomodoro")}
          className="flex flex-col items-center focus:outline-none"
        >
          <div className="bg-white p-4 rounded shadow cursor-pointer">
            Pomodoro
          </div>
        </button>
        <button
          onClick={() => openWindow("gallery")}
          className="flex flex-col items-center focus:outline-none"
        >
          <div className="bg-white p-4 rounded shadow cursor-pointer">
            Gallery
          </div>
        </button>
        <button
          onClick={() => openWindow("settings")}
          className="flex flex-col items-center focus:outline-none"
        >
          <div className="bg-white p-4 rounded shadow cursor-pointer">
            Settings
          </div>
        </button>
      </div>
      {/* Windows */}
      {windows.map((win) => {
        let content = null;
        switch (win.type) {
          case "notes":
            content = <NotesApp id={win.id} />;
            break;
          case "pomodoro":
            content = <PomodoroApp />;
            break;
          case "gallery":
            content = <GalleryApp />;
            break;
          case "settings":
            content = <SettingsApp />;
            break;
          default:
            content = <div>Unknown App</div>;
        }

        return (
          <DesktopWindow
            key={win.id}
            windowData={win}
            onClose={closeWindow}
            bringToFront={bringToFront}
          >
            {content}
          </DesktopWindow>
        );
      })}
    </div>
  );
};

export default Desktop;