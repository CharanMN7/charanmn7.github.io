"use client"
import { useState } from "react";
import { Button } from "../ui/button";

export default function TopBar() {
  // This is a simple top bar with the name of the user and the current time that updates live
  const [currentTime, setCurrentTime] = useState(new Date());

  // This function updates the time every second
  const updateTime = () => {
    setCurrentTime(new Date());
  }
  // This function is called every second to update the time
  setInterval(updateTime, 1000);

  return (
    <header className="px-2 py-1 border-b flex justify-between items-center">
      <Button variant="ghost" size="xs" className="font-bold ">
        Charan
      </Button>

      <p className="font-semi-bold text-xs">
        {/* Time is displayed here in HH:MM AM/PM format */}
        {currentTime.toLocaleTimeString('en-US', {
          hour: '2-digit', minute: '2-digit'
        })}
      </p>
    </header>
  );
}