import React, { createContext, useState, useMemo, useEffect } from "react";
import gameSoundPath from "../assets/Sound.mp3";
import correctSoundPath from "../assets/Sound1.mp3";
import incorrectSoundPath from "../assets/Sound2.mp3";

//  ****************************************
//  *         Code By @Sasaa_💀              *
//  ****************************************


const SoundContext = createContext();

const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25); // Default volume set to 25%

  const gameSound = useMemo(() => {
    const sound = new Audio(gameSoundPath);
    sound.volume = volume; // Set the initial volume
    return sound;
  }, [volume]);

  const correctSound = useMemo(() => {
    const sound = new Audio(correctSoundPath);
    sound.volume = volume; // Set the initial volume
    return sound;
  }, [volume]);

  const incorrectSound = useMemo(() => {
    const sound = new Audio(incorrectSoundPath);
    sound.volume = volume; // Set the initial volume
    return sound;
  }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      if (!isMuted) {
        gameSound.loop = true;
        gameSound.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
      } else {
        gameSound.pause();
      }
    } else {
      gameSound.pause();
    }

    return () => {
      gameSound.pause();
    };
  }, [isMuted, isPlaying, gameSound]);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMutedState = !prev;
      if (newMutedState) {
        setVolume(0);
        gameSound.volume = 0;
        correctSound.volume = 0;
        incorrectSound.volume = 0;
      } else {
        setVolume(0.25); // Reset to default volume when unmuted
        gameSound.volume = 0.25;
        correctSound.volume = 0.25;
        incorrectSound.volume = 0.25;
      }
      return newMutedState;
    });
  };

  const playSound = () => {
    setIsPlaying(true);
  };

  const pauseSound = () => {
    setIsPlaying(false);
  };

  const changeVolume = (newVolume) => {
    setVolume(newVolume);
    gameSound.volume = newVolume;
    correctSound.volume = newVolume;
    incorrectSound.volume = newVolume;
    if (newVolume === "0") {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const playCorrectSound = () => {
    if (!isMuted) {
      correctSound.play();
    }
  };

  const playIncorrectSound = () => {
    if (!isMuted) {
      incorrectSound.play();
    }
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playSound, pauseSound, volume, changeVolume, playCorrectSound, playIncorrectSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export { SoundProvider, SoundContext };