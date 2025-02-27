"use client"
import { useState, useEffect } from "react";
import { Button } from "../../ui/button";
import { ModeToggle } from "../../mode-toggle";

export default function TopBar() {
  // This is a simple top bar with the name of the user and the current time that updates live
  const [currentTime, setCurrentTime] = useState(new Date());

  // Use useEffect to create the interval once when component mounts
  useEffect(() => {
    // Create interval to update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <header className="px-2 py-1 border-b flex justify-between items-center">
      <Button variant="ghost" size="xs" className="font-bold ">
        Charan
      </Button>

      <div className="flex items-center space-x-2">
        <ModeToggle />
        <p className="font-semi-bold text-xs">
          {currentTime.toLocaleTimeString('en-US', {
            hour: '2-digit', minute: '2-digit'
          })}
        </p>
      </div>
    </header>
  );
}