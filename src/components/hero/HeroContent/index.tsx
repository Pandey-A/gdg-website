"use client";
import React, { useEffect, useState } from "react";
import CountdownTimer from "../CountdownTimer";
import { Button } from "@mantine/core";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleRBUClick = () => {
    window.open('https://forms.gle/R8XeNCTw8JcmV5Wx6', '_blank');
    onClose();
  };

  const handleOtherClick = () => {
    window.open('https://forms.gle/78e64zW9bjt8D1az6', '_blank');
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 flex items-center justify-center"
          onClick={onClose}
        >
          <div 
            className="relative bg-[#1A1B1E] rounded-lg w-[90%] max-w-md m-4 p-6"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              ×
            </button>
            
            <h2 className="text-xl text-white font-bold mb-6 text-center">
              Choose Your Institution
            </h2>
            
            <div className="space-y-4">
              <Button
                fullWidth
                size="lg"
                className="button-Sponsor"
                onClick={handleRBUClick}
              >
                RBU Student
              </Button>
              
              <Button
                fullWidth
                size="lg"
                className="button-Sponsor"
                onClick={handleOtherClick}
              >
                Other College
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const HeroContent = () => {
  const targetDate = new Date("2025-01-16T00:00:00Z").getTime();
  const currentTime = new Date().getTime();
  const initialTimeLeft = Math.max(
    Math.floor((targetDate - currentTime) / 1000),
    0
  );

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col justify-center items-center sm:mt-0 gap-y-0 w-full">
      <div className="flex flex-col justify-center items-start gap-y-0">
        <div className="flex flex-col justify-center items-start text-white w-full md:max-w-[875px]">
          <div className="flex flex-col justify-center max-md:items-center md:items-start">
            <div className="flex justify-center items-start">
              <div className="flex flex-col justify-center items-start">
                <span className="font-bold max-md:text-[45px] md:text-[100px] font-hubot-sans leading-none text-red-600">
                  Spider Craft
                </span>
                <span className="flex max-md:flex-col justify-start gap-x-8 items-center w-full mt-2 p-0 leading-none md:translate-x-4">
                  <div className="max-md:grid max-md:grid-cols-2 max-md:gap-x-5 flex justify-start gap-x-8 items-center">
                    <span className="col-span-1 font-mona-sans-bold font-extrabold text-[32px] max-md:text-[28px]">
                      FIGHT.
                    </span>
                    <span className="col-span-1 font-mona-sans-bold font-extrabold text-[32px] max-md:text-[28px]">
                      SOLVE.
                    </span>
                  </div>
                  <span className="font-mona-sans-bold font-extrabold text-[32px]">
                    WIN.
                  </span>
                </span>
              </div>
            </div>
            <div className="max-md:text-base md:text-[22px] text-[#AEAEAE] text-left font-mona-sans max-md:mt-3 px-4">
              SpiderCraft is a{" "}
              <span className="text-[#5B8EFF]">event</span>{" "}
              where you will have to face challenges and solve them using your skills{" "}
              <span className="text-[#FF8171]">in given time</span>{" "}
              face the different rounds and conquer your way to the top of the leaderboard.
            </div>
          </div>
        </div>
        <div className="px-4">
          <CountdownTimer targetTime={timeLeft} />
        </div>

<div className="flex md:gap-x-4 max-md:justify-center max-md:gap-x-4 max-md:px-2 max-md:mt-2 sm:mt-4 w-full">
  <Button
    size="compact-lg"
    className="button-Sponsor max-md:mt-2 md:mt-3 md:mx-4"
    onClick={() => setIsModalOpen(true)}
  >
    Register Now!
  </Button>
  <Link
    target="_blank"
    href="https://discord.gg/6qEqv2ak"
    passHref
  >
    <Button
      size="compact-lg"
      className="button-Sponsor max-md:mt-2 md:mt-3 md:mx-4"
    >
      Explore
    </Button>
  </Link>
</div>
      </div>

      <RegistrationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HeroContent;